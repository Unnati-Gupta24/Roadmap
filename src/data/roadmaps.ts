interface RoadmapStep {
  title: string;
  description: string;
  resources?: string[];
  timeEstimate?: string;
}

interface RoadmapSection {
  title: string;
  steps: RoadmapStep[];
}

interface Roadmap {
  field: string;
  description: string;
  sections: RoadmapSection[];
}

const roadmaps: Record<string, Roadmap> = {
  "full-stack development": {
    field: "Full-Stack Development",
    description: "A comprehensive path to becoming a full-stack developer, covering both frontend and backend technologies.",
    sections: [
      {
        title: "Frontend Fundamentals",
        steps: [
          {
            title: "HTML & CSS Foundations",
            description: "Master semantic HTML5, modern CSS features including Flexbox and Grid, and responsive design principles.",
            timeEstimate: "3-4 weeks",
            resources: ["MDN Web Docs", "CSS-Tricks", "Frontend Masters"],
          },
          {
            title: "JavaScript Essentials",
            description: "Deep dive into modern JavaScript (ES6+), including promises, async/await, modules, and DOM manipulation.",
            timeEstimate: "6-8 weeks",
            resources: ["JavaScript.info", "Eloquent JavaScript", "You Don't Know JS"],
          },
          {
            title: "React Ecosystem",
            description: "Master React fundamentals, hooks, context, and state management. Learn component patterns and testing.",
            timeEstimate: "8-10 weeks",
            resources: ["React Documentation", "Kent C. Dodds Blog", "Epic React"],
          },
          {
            title: "Modern Frontend Tools",
            description: "Learn build tools, package managers, and TypeScript. Master Git workflow and CI/CD basics.",
            timeEstimate: "3-4 weeks",
            resources: ["TypeScript Handbook", "Vite Documentation", "Git Pro Book"],
          },
        ],
      },
      {
        title: "Backend Development",
        steps: [
          {
            title: "Node.js & Express",
            description: "Build RESTful APIs with Express.js, handle authentication/authorization, and learn middleware patterns.",
            timeEstimate: "6-8 weeks",
            resources: ["Node.js Documentation", "Express Guide", "Node.js Design Patterns Book"],
          },
          {
            title: "Database Management",
            description: "Learn both SQL and NoSQL databases. Master database design, optimization, and ORM tools.",
            timeEstimate: "6-7 weeks",
            resources: ["PostgreSQL Tutorial", "MongoDB University", "Prisma Documentation"],
          },
          {
            title: "API Design & Security",
            description: "Learn REST API best practices, GraphQL, API security, and error handling. Implement authentication.",
            timeEstimate: "4-5 weeks",
            resources: ["REST API Design Rulebook", "GraphQL Documentation", "OWASP Security Guide"],
          },
        ],
      },
      {
        title: "DevOps & Deployment",
        steps: [
          {
            title: "Cloud Services",
            description: "Learn cloud platforms, containerization with Docker, and basic Kubernetes concepts.",
            timeEstimate: "5-6 weeks",
            resources: ["AWS Free Tier Tutorials", "Docker Documentation", "Kubernetes Basics"],
          },
          {
            title: "CI/CD & Monitoring",
            description: "Set up continuous integration pipelines, automated testing, and monitoring tools.",
            timeEstimate: "3-4 weeks",
            resources: ["GitHub Actions Documentation", "Jest Testing", "ELK Stack Documentation"],
          },
        ],
      },
    ],
  },
  "machine learning": {
    field: "Machine Learning",
    description: "A comprehensive path to becoming a machine learning engineer, covering mathematics and ML concepts.",
    sections: [
      {
        title: "Mathematical Foundations",
        steps: [
          {
            title: "Linear Algebra & Calculus",
            description: "Master vectors, matrices, derivatives, and optimization techniques for ML applications.",
            timeEstimate: "8-10 weeks",
            resources: ["Khan Academy", "MIT OpenCourseWare", "3Blue1Brown Videos"],
          },
          {
            title: "Probability & Statistics",
            description: "Learn probability theory, statistical inference, hypothesis testing, and Bayesian statistics.",
            timeEstimate: "6-8 weeks",
            resources: ["Statistics and Probability Khan Academy", "Think Stats Book", "Bayesian Methods for Hackers"],
          },
        ],
      },
      {
        title: "ML Fundamentals",
        steps: [
          {
            title: "Python for Data Science",
            description: "Master Python, NumPy, Pandas, and data visualization libraries for ML applications.",
            timeEstimate: "6-8 weeks",
            resources: ["Python Data Science Handbook", "Real Python", "Kaggle Learn"],
          },
          {
            title: "Supervised Learning",
            description: "Master classification, regression, decision trees, and model evaluation techniques.",
            timeEstimate: "8-10 weeks",
            resources: ["Scikit-learn Documentation", "Coursera ML Course", "Fast.ai"],
          },
          {
            title: "Deep Learning",
            description: "Learn neural networks, CNNs, RNNs, and transformers. Implement popular architectures.",
            timeEstimate: "10-12 weeks",
            resources: ["Deep Learning Book", "PyTorch Tutorials", "TensorFlow Documentation"],
          },
        ],
      },
      {
        title: "MLOps",
        steps: [
          {
            title: "Model Deployment",
            description: "Learn model serving, API development, and containerization for ML models.",
            timeEstimate: "4-5 weeks",
            resources: ["TensorFlow Serving", "Flask API Tutorial", "Docker for ML"],
          },
          {
            title: "ML System Design",
            description: "Learn to design and implement production ML systems with monitoring and maintenance.",
            timeEstimate: "6-7 weeks",
            resources: ["ML System Design Interview", "Google ML Systems Design", "Netflix Tech Blog"],
          },
        ],
      },
    ],
  },
  "cybersecurity": {
    field: "Cybersecurity",
    description: "A systematic path to becoming a cybersecurity professional, covering network security and penetration testing.",
    sections: [
      {
        title: "Fundamentals",
        steps: [
          {
            title: "Networking Essentials",
            description: "Master TCP/IP, OSI model, routing, and network protocols. Learn traffic analysis.",
            timeEstimate: "6-8 weeks",
            resources: ["Cisco Networking Academy", "Computer Networking: A Top-Down Approach", "Wireshark Tutorials"],
          },
          {
            title: "Operating Systems Security",
            description: "Learn security fundamentals for Windows and Linux. Master system hardening and access control.",
            timeEstimate: "6-7 weeks",
            resources: ["Linux Basics for Hackers", "Windows Security Fundamentals", "CompTIA Security+ Materials"],
          },
        ],
      },
      {
        title: "Defense & Offense",
        steps: [
          {
            title: "Security Operations",
            description: "Learn SIEM tools, log analysis, incident response, and threat hunting techniques.",
            timeEstimate: "8-10 weeks",
            resources: ["Splunk Fundamentals", "Practical Malware Analysis", "SANS SEC555"],
          },
          {
            title: "Ethical Hacking",
            description: "Learn reconnaissance, scanning, enumeration, and exploitation techniques.",
            timeEstimate: "10-12 weeks",
            resources: ["HackTheBox", "TryHackMe", "Metasploit Guide"],
          },
          {
            title: "Web Application Security",
            description: "Master testing for OWASP Top 10 vulnerabilities and secure remediation practices.",
            timeEstimate: "8-10 weeks",
            resources: ["PortSwigger Web Security Academy", "Bug Bounty Essentials", "OWASP Testing Guide"],
          },
        ],
      },
      {
        title: "Governance",
        steps: [
          {
            title: "Risk Management",
            description: "Learn risk assessment methodologies and security metrics for organizations.",
            timeEstimate: "5-6 weeks",
            resources: ["NIST 800-30", "How to Measure Cybersecurity Risk", "FAIR Analysis"],
          },
          {
            title: "Compliance & Standards",
            description: "Understand key regulations (GDPR, HIPAA, PCI DSS) and security standards.",
            timeEstimate: "6-7 weeks",
            resources: ["ISO 27001 Overview", "GDPR Compliance Checklist", "PCI DSS Guide"],
          },
        ],
      },
    ],
  },
  "devops engineering": {
    field: "DevOps Engineering",
    description: "A comprehensive path to becoming a DevOps engineer, covering infrastructure automation and CI/CD.",
    sections: [
      {
        title: "Foundations",
        steps: [
          {
            title: "Linux & Shell Scripting",
            description: "Master Linux system administration, bash scripting, and command line tools.",
            timeEstimate: "6-8 weeks",
            resources: ["Linux Command Line Bible", "The Linux Documentation Project", "Linux Journey"],
          },
          {
            title: "Programming for DevOps",
            description: "Learn Python or Go for automation. Master version control with Git workflows.",
            timeEstimate: "7-9 weeks",
            resources: ["Learn Python the Hard Way", "The Go Programming Language", "Pro Git Book"],
          },
        ],
      },
      {
        title: "Infrastructure",
        steps: [
          {
            title: "Configuration Management",
            description: "Master Ansible, Chef, or Puppet for infrastructure automation.",
            timeEstimate: "6-7 weeks",
            resources: ["Ansible Documentation", "Terraform: Up & Running", "Infrastructure as Code Book"],
          },
          {
            title: "Containerization",
            description: "Learn Docker, Kubernetes orchestration, and container security.",
            timeEstimate: "8-10 weeks",
            resources: ["Docker Deep Dive", "Kubernetes: Up and Running", "Container Security Book"],
          },
          {
            title: "Cloud Platforms",
            description: "Master AWS, Azure, or GCP for cloud native infrastructure deployment.",
            timeEstimate: "10-12 weeks",
            resources: ["AWS Solution Architect Guide", "Azure Administrator", "GCP Associate Engineer"],
          },
        ],
      },
      {
        title: "Automation & Observability",
        steps: [
          {
            title: "CI/CD Pipelines",
            description: "Set up continuous delivery with Jenkins, GitHub Actions, or GitLab CI.",
            timeEstimate: "5-6 weeks",
            resources: ["Jenkins: The Definitive Guide", "GitHub Actions", "GitLab CI Documentation"],
          },
          {
            title: "Observability Stack",
            description: "Implement logging, monitoring, tracing, and alerting for applications.",
            timeEstimate: "6-7 weeks",
            resources: ["Prometheus: Up & Running", "The Art of Monitoring", "Distributed Tracing in Practice"],
          },
          {
            title: "Site Reliability Engineering",
            description: "Learn SRE practices, chaos engineering, and resilience patterns.",
            timeEstimate: "8-9 weeks",
            resources: ["Site Reliability Engineering Book", "Chaos Engineering", "Release It!"],
          },
        ],
      },
    ],
  },
  "blockchain development": {
    field: "Blockchain Development",
    description: "A structured path to becoming a blockchain developer, covering fundamentals, smart contracts, and dApp development.",
    sections: [
      {
        title: "Blockchain Fundamentals",
        steps: [
          {
            title: "Blockchain Theory",
            description: "Understand distributed ledger technology, consensus mechanisms, and cryptographic principles.",
            timeEstimate: "4-5 weeks",
            resources: ["Mastering Bitcoin", "Blockchain Basics", "Princeton Bitcoin Course"],
          },
          {
            title: "Cryptocurrency Concepts",
            description: "Learn about wallets, transactions, mining, and tokenomics foundations.",
            timeEstimate: "3-4 weeks",
            resources: ["Cryptoassets Book", "Bitcoin Whitepaper", "Web3 University"],
          },
        ],
      },
      {
        title: "Smart Contract Development",
        steps: [
          {
            title: "Solidity Programming",
            description: "Master Solidity language, EVM concepts, and gas optimization techniques.",
            timeEstimate: "8-10 weeks",
            resources: ["Solidity Documentation", "CryptoZombies", "Ethereum.org Developers"],
          },
          {
            title: "Smart Contract Security",
            description: "Learn security best practices, common vulnerabilities, and audit techniques.",
            timeEstimate: "6-8 weeks",
            resources: ["Smart Contract Vulnerabilities", "OpenZeppelin Guides", "Trail of Bits Blog"],
          },
          {
            title: "Testing & Deployment",
            description: "Master testing frameworks, deployment strategies, and contract upgradeability.",
            timeEstimate: "5-6 weeks",
            resources: ["Hardhat Documentation", "Foundry Book", "Ethernaut Challenges"],
          },
        ],
      },
      {
        title: "dApp Development",
        steps: [
          {
            title: "Web3 Frontend",
            description: "Build dApp frontends with React and ethers.js/web3.js libraries.",
            timeEstimate: "6-7 weeks",
            resources: ["ethers.js Documentation", "Full Stack Ethereum", "Scaffold-ETH"],
          },
          {
            title: "Decentralized Storage",
            description: "Learn IPFS, Filecoin, and Arweave for decentralized content storage.",
            timeEstimate: "3-4 weeks",
            resources: ["IPFS Documentation", "Filecoin Docs", "Arweave Resources"],
          },
          {
            title: "Advanced Protocols",
            description: "Explore DeFi, NFTs, DAOs, and layer 2 scaling solutions development.",
            timeEstimate: "8-10 weeks",
            resources: ["DeFi Pulse", "NFT Standards", "L2 Beat Documentation"],
          },
        ],
      },
    ],
  },
  "data engineering": {
    field: "Data Engineering",
    description: "A comprehensive path to becoming a data engineer, covering data processing, pipelines, and infrastructure.",
    sections: [
      {
        title: "Data Fundamentals",
        steps: [
          {
            title: "Programming for Data",
            description: "Master Python, SQL, and data manipulation libraries. Learn data structures and algorithms.",
            timeEstimate: "8-10 weeks",
            resources: ["Python for Data Analysis", "SQL for Data Scientists", "Data Structures & Algorithms in Python"],
          },
          {
            title: "Database Systems",
            description: "Learn relational databases, NoSQL systems, and data modeling techniques.",
            timeEstimate: "6-8 weeks",
            resources: ["Database System Concepts", "MongoDB University", "Data Modeling Made Simple"],
          },
        ],
      },
      {
        title: "Data Processing",
        steps: [
          {
            title: "Batch Processing",
            description: "Master Apache Spark, Hadoop ecosystem, and ETL best practices.",
            timeEstimate: "8-10 weeks",
            resources: ["Learning Spark", "Hadoop: The Definitive Guide", "The Data Warehouse Toolkit"],
          },
          {
            title: "Stream Processing",
            description: "Learn Kafka, Flink, and real-time analytics architectures.",
            timeEstimate: "6-8 weeks",
            resources: ["Kafka: The Definitive Guide", "Stream Processing with Apache Flink", "Streaming Systems"],
          },
          {
            title: "Data Quality & Testing",
            description: "Implement data validation, testing frameworks, and quality assurance processes.",
            timeEstimate: "4-5 weeks",
            resources: ["Great Expectations", "Data Quality Book", "DataOps Handbook"],
          },                    
        ],
      },
        {
            title: "Infrastructure & DevOps",
            steps: [
            {
                title: "Cloud Data Platforms",
                description: "Master AWS, GCP, or Azure data services for scalable data infrastructure.",
                timeEstimate: "10-12 weeks",
                resources: ["AWS Big Data Services", "GCP Data Engineering", "Azure Data Fundamentals"],
            },
            {
                title: "Data Orchestration",
                description: "Learn Airflow, Luigi, and workflow management tools for data pipelines.",
                timeEstimate: "6-7 weeks",
                resources: ["Apache Airflow Documentation", "Luigi Documentation", "Data Pipeline Patterns"],
            },
            {
                title: "Data Warehousing",
                description: "Master data warehousing concepts, architecture, and ETL processes.",
                timeEstimate: "5-6 weeks",
                resources: ["Data Warehouse Toolkit", "Data Warehouse Design", "Modern Data Warehouse Architecture"],
            },
            ],
        },
    ],
  },
};

export const getRoadmap = (field: string): Roadmap | null => {
  const normalizedField = field.toLowerCase().trim();
  return roadmaps[normalizedField] || null;
};

export const getAvailableFields = (): string[] => {
  return Object.keys(roadmaps).map((key) =>
    key
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

export type { Roadmap, RoadmapSection, RoadmapStep };