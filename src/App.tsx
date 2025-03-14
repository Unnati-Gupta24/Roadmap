import React, { useState, useEffect } from "react";
import {
  Compass,
  Clock,
  BookOpen,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { getRoadmap, getAvailableFields, type Roadmap } from "./data/roadmaps";
import "./styles.css"; 

function App() {
  const [selectedField, setSelectedField] = useState("");
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const availableFields = getAvailableFields();
  const [books, setBooks] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);

  useEffect(() => {
    const bookCount = 30;
    const newBooks = Array.from({ length: bookCount }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${20 + Math.random() * 30}px`,
        animationDuration: `${15 + Math.random() * 30}s`,
        animationDelay: `${Math.random() * -30}s`,
      } as React.CSSProperties,
    }));
    setBooks(newBooks);
  }, []);

  const handleFieldSelect = (field: string) => {
    setSelectedField(field);
    setIsDropdownOpen(false);
    const result = getRoadmap(field.toLowerCase());
    if (result) {
      setRoadmap(result);
    }
  };

  return (
    <div className="app-container">
      {books.map((book) => (
        <div key={book.id} className="book" style={book.style}>
          <BookOpen />
        </div>
      ))}

      <div className="content-container">
        <div className="header fade-in">
          <h1 className="title">Career Roadmap Generator</h1>
          <p className="subtitle">
            Choose your desired field to generate a comprehensive learning
            roadmap
          </p>
        </div>

        <div
          className="field-selector fade-in"
          style={{ position: "relative", zIndex: 30 }}
        >
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="selector-button"
            >
              <span
                className={selectedField ? "text-gray-900" : "text-gray-500"}
              >
                {selectedField || "Select a field"}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {availableFields.map((field) => (
                  <button
                    key={field}
                    onClick={() => handleFieldSelect(field)}
                    className="dropdown-item"
                  >
                    {field}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {roadmap && (
          <div
            className="roadmap fade-in"
            style={{ position: "relative", zIndex: 20 }}
          >
            <div className="roadmap-card">
              <div className="roadmap-header">
                <Compass className="w-8 h-8 roadmap-icon" />
                <h2 className="roadmap-title">{roadmap.field}</h2>
              </div>
              <p className="roadmap-description">{roadmap.description}</p>

              <div className="space-y-8">
                {roadmap.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="section">
                    <h3 className="section-title">{section.title}</h3>
                    <div className="steps">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="step-card">
                          <div className="step-header">
                            <ChevronRight className="w-5 h-5 step-icon" />
                            <h4 className="step-title">{step.title}</h4>
                          </div>
                          <p className="step-description">{step.description}</p>

                          <div className="step-meta">
                            {step.timeEstimate && (
                              <div className="time-estimate">
                                <Clock className="w-4 h-4 meta-icon" />
                                <span>{step.timeEstimate}</span>
                              </div>
                            )}

                            {step.resources && (
                              <div className="resources">
                                <BookOpen className="w-4 h-4 meta-icon" />
                                <span>
                                  Recommended resources:{" "}
                                  {step.resources.join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
