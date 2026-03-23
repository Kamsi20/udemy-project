import web from "/public/web.png"
import web2 from "/public/web2.png"
import a from "/public/4.png"
import b from "/public/5.png"
import c from "/public/6.png"
import d from "/public/38.png"
import e from "/public/8.png"
import f from "/public/9.png"
import g from "/public/40.png"
import h from "/public/41.png"
import i from "/public/42.png"


const Data = [
  {
    courseId: "1",
    courseName: "Complete web development course",
    courseDesc: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    createdBy: "Hitesh CloudHary",
    rate: 4.6,
    coursePrice: 12000,
    courseSold: (19580),
    courseImage: web,
    whatYouWillLearn: [
      "Become a full stack developer",
      "Build any project for your company or freelance",
      "Master the JavaScript ecosystem",
      "Full stack MERN development"],
    thisCourseIncludes: [
      "100 hours on-demand video",
      "45 coding exercises",
      "24 articles",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Before we begin Journey",
        lectures: [
          "Course Introduction - Roadmap",
          "Meet your instructor",
          "How to ask questions",
          "How to stay motivated"
        ]
      },

      {
        sectionTitle: "Basics of Web Development",
        lectures: [
          "How the internet works",
          "A big picture of web application",
          "Introduction to HTML",
          "Basic tags and structure",
          "",
        ]
      },
      {
        sectionTitle: "Learn HTML",
        lectures: [
          "What is HTML",
          "Emmet, headings and block vs inline",
          "Create a Paragraph with a Link",
          "Building a semantic HTML page",
          "Create a Button",
          "Create an Unordered List",
          "Create a Simple Table",
          "Create a Form with Input Fields",
          "Create a Progress Bar",
        ]
      },
      {
        sectionTitle: "Learn About CSS",
        lectures: [
          "The current state of CSS",
          "You can write css at 3 places",
          "Building a web project - Login page",
          "Box model, inline and block elements",
          "Flexbox Masterclass",
          "Grid Masterclass",
          "Change Text Color",
          "Style a Button",
          "Create a Box with Padding and Margin",
          "Create a Circle Using Border Radius",
          "Positions In CSS",
          "Create a Responsive Flexbox Layout",
          "Create a 3x3 Grid Layout",
        ]
      },
      {
        sectionTitle: "Learn Tailwind CSS",
        lectures: [
          "How to install tailwind 4 in vite and nextjs",
          "Tailwind setup with CDN and NodeJS",
          "Production ready login screen project",
          "Full potential of tailwind css",
          "How to build responsive design in tailwind",
          "Build any layout with Tailwind - Masterclass",
          "Style A Button with Tailwind CSS",
          "Center a Div Using Flexbox",
          "Create a Basic Grid Layout",
          "Add Blur Effect to an Image",
          "Create a Gradient Colored Button Using Tailwind CSS",
        ]
      },
      {
        sectionTitle: "Learn JS Foundation",
        lectures: [
          "Javascript story - from console to v8 engine",
          "A mini JS quiz",
          "Datatypes, variables and constants in Javascript",
          "Operations in javascript",
          "Five challenges on conditions in javascript",
          "Facing ten challenges in Array and methods",
          "A quiz on Array",
          "Introduction to loops in javascript",
          "Defeat 6 loop challenges in Javascript",
          "Ten loop challenges to learn all kind of loops in javascript",
          "A quiz on Loops",
          "Function, arrow function, THIS and context in javascript",
          "Higher order function and nested functions in javascript",

        ]
      },


    ],

    requirements: [
      "Just a laptop with internet connection",
      "Strong willingness to learn"
    ],



    whoCanTakeTheCourse: [
      "Complete beginners who wants to learn web development",
      " Intermediate to advance user who wants to take things to next level",
      "People who understand that web development is no magic and requires efforts to learn it",
    ],

  },
  {
    courseId: "2",
    courseName: "Full stack generative and Agentic AI with python",
    courseDesc: "Hands-on guide to modern AI: Tokenization, Agents, RAG, Vector DBs, and deploying scalable AI apps. Complete AI course",
    createdBy: "Hitesh CloudHary Piyurg Garg",
    rate: 4.7,
    coursePrice: 12000,
    courseSold: (19580),
    courseImage: web2,
    whatYouWillLearn: [
      "Write Python programs from scratch, using Git for version control and Docker for deployment.",
      "Understand how Large Language Models (LLMs) work: tokenization, embeddings, attention, and transformers.",
      "Design effective prompts: zero-shot, one-shot, few-shot, chain-of-thought, persona-based, and structured prompting.",
      "Implement Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector databases.",
      "Run and deploy models locally using Ollama, Hugging Face, and Docker.",
      "Call and integrate APIs from OpenAI and Gemini with Python.",
      "Use LangGraph to design stateful AI systems with nodes, edges, and checkpointing.",
      "Use Pydantic to handle structured data and validation in Python applications."
    ],
    thisCourseIncludes: [
      "32.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Installation of Tools (VSCode and Python)",
          "VS Code Setup (Extensions and Themes)",
          "Get your code files here",

        ]
      },

      {
        sectionTitle: "Introduction to coding world with python",
        lectures: [
          "What is Programming..?",
          "Convert that into Python Code",
          "A Real World Python Code Intro",
          "Why to use Python",
          "Writing first Python code on MAC",
          "Writing first Python code on WINDOWS",
          "Get everything in Virtual Environment",
          "Organize Python Code like a Pro",

        ]
      },
      {
        sectionTitle: "Data Types in Python",
        lectures: [
          "Objects - Mutable and Immutable in Python",
          "Numbers, Booleans and Operators in Depth in Python",
          "String - Index, Slice and Encoding",
          "Tuples and Membership Testing",
          "Basics of List in Python",
          "Operator overloading and bytearray in python",
          "Dictionary in Python",
        ]
      },
      {
        sectionTitle: "Conditionals in Python",
        lectures: [
          "Kettle Boiling Story Project",
          "Building a Snack System",
          "Building Smart Thermostat System",
          "Delivery Fees Waiver System",
          "Build a train seat information system",

        ]
      },
      {
        sectionTitle: "Loops in Python",
        lectures: [
          "Introduction to Loops",
          "Tea Token Dispenser",
          "Looping through list - Orders Name",
          "Why to use Enumerate",
          "Introducing While Loop in Python",
          "Break, Continue and Loop Fallback",
          "Dictionary in place of Match Case",
        ]
      },
      {
        sectionTitle: "Functions in python",
        lectures: [
          "Functions - Reducing Duplication and Splitting Complex Tasks",
          "Functions - 3 More Features",
          "Scope and Named Space in Functions",
          "Non local vs Global scopes",
          "Handling Arguments in Function in Python",
          "Handle Multiple Return in Python",
          "Lambdas, Pure vs Impure functions",
          "Documenting your Functions and Built-in Functions",
          "Python Imports, Modules and Init File",

        ]
      },


    ],

    requirements: [
      "No prior AI knowledge is required — we start from the basics.",
      "A computer (Windows, macOS, or Linux) with internet access.",
      "Basic programming knowledge is helpful but not mandatory (the course covers Python from scratch)."
    ],



    whoCanTakeTheCourse: [
      "Beginners who want a step-by-step path into AI, Python, and modern development tools.",
      "Developers who want to learn how to integrate LLMs, RAG, and agents into real-world applications.",
      "Data engineers and backend developers looking to upgrade their skills with AI-powered systems.",
      "Students and professionals who want to stand out in the job market with cutting-edge AI engineering knowledge."
    ],
  },
  {
    courseId: "3",
    courseName: "Ultimate AWS Certified Solutions Architect Associate 2026",
    courseDesc: "Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!",
    createdBy: "Stephane Mareek| AWS Certified Cloud practitioner, Solutions Architect, Developer",
    rate: 4.7,
    coursePrice: 11900,
    courseSold: (119580),
    courseImage: a,
    whatYouWillLearn: [
      "Write Python programs from scratch, using Git for version control and Docker for deployment.",
      "Understand how Large Language Models (LLMs) work: tokenization, embeddings, attention, and transformers.",
      "Design effective prompts: zero-shot, one-shot, few-shot, chain-of-thought, persona-based, and structured prompting.",
      "Implement Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector databases.",
      "Run and deploy models locally using Ollama, Hugging Face, and Docker.",
      "Call and integrate APIs from OpenAI and Gemini with Python.",
      "Use LangGraph to design stateful AI systems with nodes, edges, and checkpointing.",
      "Use Pydantic to handle structured data and validation in Python applications."
    ],
    thisCourseIncludes: [
      "32.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Course Introduction - AWS Certified Solutions Architect Associate",
          "Creating an AWS Account",
          "AWS Account Activation Troubleshooting",
          "",
        ]
      },

      {
        sectionTitle: "Getting Started with AWS",
        lectures: [
          "AWS Cloud Overview - Regions & AZ",
          "[Important] AWS Console UI Update",
          "Tour of the AWS Console & Services in AWS",

        ]
      },
      {
        sectionTitle: "IAM & AWS CLI",
        lectures: [
          "IAM Introduction: Users, Groups, Policies",
          "IAM Users & Groups Hands On",
          "AWS Console Simultaneous Sign-i",
          "IAM Policies",
          "IAM Policies Hands On",
          "IAM MFA Overview",
          "AWS CloudShell",
          "AWS CloudShell",
          "IAM Roles Hands On",
          "IAM Security Tools",
          "IAM Best Practices",
          "IAM Summary",
        ]
      },
      {
        sectionTitle: "EC2 Fundamentals",
        lectures: [
          "AWS Budget Setup",
          "EC2 Basics",
          "Create an EC2 Instance with EC2 User Data to have a Website Hands On",
          "EC2 Instance Types Basics",
          "Security Groups & Classic Ports Overview",
          "Security Groups Hands On",
          "SSH Overview",
          "How to SSH using Linux , Mac or windows ",
          "SSH Troubleshooting",
          "EC2 Instance Connect",
          "EC2 Instance Roles Demo",
          "Spot Instances & Spot Fleet",
          "EC2 Instances Launch Types Hands On",
        ]
      },
      {
        sectionTitle: "EC2 Solutions Architecture  Associate Level",
        lectures: [
          "Private vs Public vs Elastic IP",
          "Private vs Public vs Elastic IP Hands On",
          "EC2 Placement Groups",
          "EC2 Placement Groups - Hands On",
          "Elastic Network Interfaces (ENI) - Overview",
          "Elastic Network Interfaces (ENI) - Hands On",
          "ENI - Extra Reading",
          "EC2 Hibernate",
          "EC2 Hibernate - Hands On",
          "EC2 SAA Level Quiz",

        ]
      },
      {
        sectionTitle: "AWS: Fundamentals: RDS + Aurora + ElastiCache",
        lectures: [
          "Amazon RDS Overview",
          "RDS Read Replicas vs Multi AZ",
          "Amazon RDS Hands On",
          "RDS Custom for Oracle and Microsoft SQL Server",
          "Amazon Aurora",
          "Amazon Aurora - Advanced Concepts",
          "RDS & Aurora - Backup and Monitoring",
          "RDS Security",
          "RDS Proxy",
          "ElastiCache Hands On",
          "ElastiCache for Solution Architects",
          "List of Ports to be familiar with",
          "RDS, Aurora, & ElastiCache Quiz",

        ]
      },
      {
        sectionTitle: " Route 53",
        lectures: [
          "What is a DNS ?",
          "Route 53 Overview",
          "Route 53 - Registering a domain",
          "Route 53 - Creating our first records",
          "Route 53 - EC2 Setup",
          "Route 53 - TTL",
          "Route 53 CNAME vs Alias",
          "Routing Policy - Simple",
          "Routing Policy - Latency",
          "Routing Policy - IP-based",
          "Routing Policy - Multi Value",
          "3rd Party Domains & Route 53",
          "Route 53 Resolvers & Hybrid DNS",
          "Route 53 - Section Cleanup",
          "Route 53 Quiz",
        ]
      },


    ],

    requirements: [
      "Know the basics of IT",
      "No AWS Cloud experience is necessary, we'll use the AWS Free Tier",
      "Windows / Linux / Mac OS X Machine",
    ],



    whoCanTakeTheCourse: [
      "Anyone wanting to acquire the knowledge to pass the AWS Certified Solutions Architect Associate SAA-C03 Certification",
      "Solutions Architects who want to know how to leverage all AWS services for their solution architecture",
    ],
  },
  {
    courseId: "4",
    courseName: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2026",
    courseDesc: "Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C02 exam",
    createdBy: "Stephen Mareek| AWS Certified Practitioner, Solutions Architect, Developer.",
    rate: 4.7,
    coursePrice: 12900,
    courseSold: (119580),
    courseImage: b,
    whatYouWillLearn: [
      "FULLY UPDATED FOR CLF-C02: Pass the AWS Certified Cloud Practitioner Certification",
      "Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)",
      "Full Practice Exam with Explanations included!",

    ],
    thisCourseIncludes: [
      "19 Role Plays",
      "14.5 hours on-demand video",
      "1 practice test",
      "Assignments",
      "Certificate of completion",
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Course Introduction",
          "Creating an AWS Account",
          "AWS Account Activation Troubleshooting",

        ]
      },

      {
        sectionTitle: "What is Cloud Computing",
        lectures: [
          "Traditional IT Overview",
          "What is Cloud Computing?",
          "The Different Types of Cloud Computing",
          "AWS Cloud Overview",
          "Tour of the Console & Services in AWS",
          "Shared Responsibility Model & AWS Acceptable Policy",
          "What is Cloud Computing Quiz",
        ]
      },
      {
        sectionTitle: "IAM Identity and Access Management",
        lectures: [
          "IAM Introduction: Users, Groups, Policies",
          "IAM Users & Groups Hands On",
          "AWS Console Simultaneous Sign-in",
          "IAM Policies",
          "IAM Policies Hands On",
          "IAM MFA Hands On",
          "AWS Access Keys, CLI and SDK",
          "AWS CLI Setup on Windows, mac, Linux",
          "AWS CLI Hands On ",
          "AWS CloudShell",
          "IAM Roles for AWS Services",
          "IAM Roles Hands On",
          "IAM Security Tools",
          "IAM Security Tools Hands On",
          "IAM Best Practice",
          "IAM Summary",
          "Identity and Access Management Quiz",
        ]
      },
      {
        sectionTitle: "EC2 Elastic Compute Cloud",
        lectures: [
          "AWS Budget Setup",
          "EC2 Basics",
          "Create an EC2 Instance with EC2 User Data to have a Website Hands On",
          "EC2 Instance Types Basics",
          "Security Groups Hands On",
          "SSH Overview",
          "How to SSH using Linux or Mac",
          "How to SSH using Windows",
          "SSH Troubleshooting",
          "EC2 Instance Connect",
          "EC2 Instance Roles Demo",
          "EC2 Instance Purchasing Options",
          "Shared Responsibility Model for EC2",
          "EC2 Summary",
          "EC2 Quiz",
        ]
      },
      {
        sectionTitle: "ELB & ASG- Elastic Balancing & Auto Scaling Groups",
        lectures: [
          "High Availability, Scalability, Elasticity",
          "Elastic Load Balancing (ELB) Overview",
          "Application Load Balancer (ALB) Hands On",
          "Auto Scaling Groups (ASG) Overview",
          "Auto Scaling Groups (ASG) Hands On",
          "Auto Scaling Groups (ASG) Strategies",
          "Section Cleanup",
          "ELB & ASG Summary",
          "ELB & ASG Quiz",

        ]
      },
      {
        sectionTitle: "Amazon S3",
        lectures: [
          "S3 Overview",
          "S3 Hands On",
          "S3 Security: Bucket Policy",
          "S3 Security: Bucket Policy Hands On",
          "S3 Website Overview",
          "S3 Website Hands On",
          "S3 Versioning Overview",
          "S3 Versioning Hands On",
          "S3 Replication Overview",
          "S3 Replication Hands On",
          "S3 Storage Classes Overview",
          "S3 Storage Classes Hands On",
          "S3 Express One Zone",
          "S3 Encryption",
          "IAM Access Analyzer for S3",
          "AWS Snow Family Overview",
          "AWS Snow Family Hands On",
          "AWS Snowball Edge - Pricing",
          "Storage Gateway Overview",
          "S3 Summary",
          "S3 Quiz",
        ]
      },
      {
        sectionTitle: "Databases & Analytics",
        lectures: [
          "Databases Introduction",
          "RDS & Aurora Overview ",
          "RDS Hands On",
          "RDS Deployments Options",
          "DynamoDB Overview",
          "DynamoDB Hands On",
          "DynamoDB Global Tables",
          "EMR Overview",
          "DocumentDB Overview",
          "Neptune Overview",
          "Timestream Overview",
          "Glue Overview",
          "DMS Overview",
          "Databases & Analytics Summary",
          "What is Docker?",
          "ECS, Fargate & ECR Overview",
          "Amazon EKS",
          "Lambda Overview",
          "API Gateway Overview",
          "Batch Overview",
          "Lightsail Hands On",
          "Other Compute - Summary",

        ]
      },


    ],

    requirements: [
      "No AWS Cloud experience is necessary, we'll use the AWS Free Tier",
      "No IT prerequisites required",
    ],



    whoCanTakeTheCourse: ["Anyone wanting to acquire the knowledge to pass the AWS Certified Cloud Practitioner Certification"],
  },
  {
    courseId: "5",
    courseName: "CompTIA Security+ (SY0-701) Complete Course & Practice Exam",
    courseDesc: "CompTIA Security+ (SY0-701) Bootcamp - Your preparation for the world's best cybersecurity certification!",
    createdBy: "Jason Dion, 2.8 million Enrollment WorldWide, Dion Training Solutions ",
    rate: 4.7,
    coursePrice: 10900,
    courseSold: (59580),
    courseImage: c,
    whatYouWillLearn: [
      "Fundamental Security Concepts",
      "Decoding Security Architecture",
      "Guiding Security Program Management & Oversight",
      "Navigating Threats, Vulnerabilities, & Remedies",
      "Mastering Security Operations",
    ],
    thisCourseIncludes: [
      "32.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Course Introduction - Roadmap",
          "Meet your instructor",
          "How to ask questions",
          "How to stay motivated"
        ]
      },

      {
        sectionTitle: "Fundamentals of Security",
        lectures: [
          "Fundamentals of Security",
          "Threats and Vulnerabilities",
          "Confidentiality (OBJ 1.2)",
          "Integrity (OBJ 1.2)",
          "Availability (OBJ 1.2)",
          "Non-repudiation (OBJ 1.2)",
          "Authentication (OBJ 1.2)",
          "Authorization (OBJ 1.2)",
          "Accounting (OBJ 1.2)",
          "Security Control Categories (OBJ 1.1)",
          "Zero Trust (OBJ 1.2)",
          "Gap Analysis (OBJ 1.2)",
          "Checkpoint: Fundamentals of Security",
        ]
      },
      {
        sectionTitle: "Threat Actors",
        lectures: [
          "Threat Actors (OBJ 1.2, 2.1, & 2.2)",
          "Threat Actor Attributes (OBJ 2.1)",
          "Threat Actor Motivations (OBJ 2.1)",
          "Unskilled Attackers (OBJ 2.1)",
          "Hacktivists (OBJ 2.1)",
          "Organized Crime (OBJ 2.1)",
          "Nation-state Actor (OBJ 2.1)",
          "Insider Threats (OBJ 2.1)",
          "Shadow IT (OBJ 2.1)",
          "Threat Vectors and Attack Surfaces (OBJ 2.2)",
          "Outsmarting Threat Actors (OBJ 1.2)",
        ]
      },
      {
        sectionTitle: "Malware",
        lectures: [
          "Malware (OBJ 2.4)",
          "Viruses (OBJ 2.4)",
          "Worms (OBJ 2.4)",
          "Trojans (OBJ 2.4)",
          "Rootkits (OBJ 2.4)",
          "Zombies and Botnets (OBJ 2.4)",
          "Ransomware (OBJ 2.4)",
          "Backdoors and Logic Bombs (OBJ 2.4)",
          "Keylogger (OBJ 2.4)",
          "Spyware and Bloatware (OBJ 2.4)",
          "Malware Attack Techniques (OBJ 2.4)",
          "Indications of Malware Attacks (OBJ 2.4)",
          "Checkpoint: Malware",

        ]
      },
      {
        sectionTitle: "Learn Tailwind CSS",
        lectures: [
          "How to install tailwind 4 in vite and nextjs",
          "Tailwind setup with CDN and NodeJS",
          "Production ready login screen project",
          "Full potential of tailwind css",
          "How to build responsive design in tailwind",
          "Build any layout with Tailwind - Masterclass",
          "Style A Button with Tailwind CSS",
          "Center a Div Using Flexbox",
          "Create a Basic Grid Layout",
          "Add Blur Effect to an Image",
          "Create a Gradient Colored Button Using Tailwind CSS",
        ]
      },
      {
        sectionTitle: "Data Protection",
        lectures: [
          "Data Protection (OBJ 1.4, 3.3, 4.2, 4.4, & 5.1)",
          "Data Classifications (OBJ 3.3)",
          "Data Ownership (OBJ 4.2 & 5.1)",
          "Data States (OBJ 3.3)",
          "Data Types (OBJ 3.3 & 1.4)",
          "Data Sovereignty (OBJ 3.3)",
          "Securing Data (OBJ 3.3)",
          "Data Loss Prevention (DLP) (OBJ 4.4)",
          "Configuring a DLP (OBJ 4.5)",
          "Checkpoint: Data Protection",
        ]
      },
      {
        sectionTitle: "Cyptographic Solutions",
        lectures: [
          "Cryptographic Solutions (OBJ 1.4, 2.3, & 2.4)",
          "Symmetric vs Asymmetric (OBJ 1.4)",
          "Symmetric Algorithms (OBJ 1.4)",
          "Asymmetric Algorithms (OBJ 1.4)",
          "Hashing (OBJ 1.4)",
          "Public Key Infrastructure (PKI) (OBJ 1.4)",
          "Digital Certificates (OBJ 1.4)",
          "Blockchain (OBJ 1.4)",
          "Encryption Tools (OBJ 1.4)",
          "Obfuscation (OBJ 1.4)",
          "Cryptographic Attacks (OBJ 2.3 & 2.4)",
          "Checkpoint: Cryptographic Solutions",
        ]
      },
      {
        sectionTitle: "Risk Management",
        lectures: [
          "Risk Management (OBJ 5.2)",
          "Risk Identification (OBJ 5.2)",
          "Risk Assessment Frequency (OBJ 5.2)",
          "Risk Register (OBJ 5.2)",
          "Qualitative Risk Analysis (OBJ 5.2)",
          "Quantitative Risk Analysis (OBJ 5.2)",
          "Quantitative Risk Analysis (OBJ 5.2) ",
          "Risk Monitoring and Reporting (OBJ 5.2)",
          "Checkpoint: Risk Management",

        ]
      },


    ],

    requirements: [
      "Basic familiarity with computer networks, administration, and security is helpful (But, all required information will be covered during the course)",
      "(Helpful, but not required) Completion of the CompTIA A+ and Network+ certifications",
      "This course aligns directly to the CompTIA Security+ (SY0-701) Certification Study Guide",

    ],



    whoCanTakeTheCourse: [
      "IT Professionals",
      "Entry-Level Security Personnel",
      "Military Personnel",
      "Students and Recent Graduates",
    ],
  },
  {
    courseId: "6",
    courseName: "AI Governance Professional (AIGP) Certification Masterclass",
    courseDesc: "Master the 4 domains of the IAPP AIGP certification exam with 19+ hours of on-demand video.",
    createdBy: "Dr Kyle David",
    rate: 4.8,
    coursePrice: 129000,
    courseSold: (9580),
    courseImage: d,
    whatYouWillLearn: [
      "Prepare for the 2026 version of the Artificial Intelligence Governance Professional (AIGP) certification exam.",
      "Master the principles of responsible AI and how AI impacts people.",
      "Grasp existing and emerging AI laws and standards.",
      "Learn how to implement responsible AI governance and risk management.",
      "Understand the technological foundations of Artificial Intelligence (AI).",
      "Know how current laws apply to AI systems.",
      "Chart the AI development life cycle.",
      "Contemplate ongoing issues and concerns.",
    ],
    thisCourseIncludes: [
      "19+ hours of AIGP video lectures. Comprehensive coverage of all 4 domains.",
      "400 scenario-based practice questions. Test your comprehension as you progress through the course.",
      "Free downloadable AIGP study guides. Made from my lecture slides.",
      "Access to Dr. David's Discord channel: To get live support from me and others as you prepare for the AIGP exam.",
      "AIGP Mnemonics. To help you remember key details for the exam.",
      "An automatic certificate of completion. To flex on your friends, family, and colleagues.",
      "30-day no questions asked, money-back guarantee.",
      "Offline video viewing on the Udemy mobile app.",
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Why should you take this AIGP course?",
          "What is the AIGP certificate?",
          "What is the IAPP?",
          "Why get AIGP certified?",
          "What is AI risk management?",
          "Connect with Dr. David on Discord and social media!",
        ]
      },

      {
        sectionTitle: "Domain 1: Understanding the foundations of AI Governance",
        lectures: [
          "What is Artificial Intelligence?",
          "What is Machine Learning?",
          "Supervised Learning",
          "Unsupervised and Semi-supervised Learning",
          "Reinforcement Learning",
          "Documentary: AlphaGo (2017)",
          "Foundation Models",
          "Resource: But what is a neural network?",
          "Expert Systems",
          "Robotics and AI",
          "Common AI Algorithms",
          "Large Language Models",
          "Small Language Models",
          "AI Use Cases",
          "AI Tech Stack - Compute",
          "AI Tech Stack - Storage and Network",
          "AI Tech Stack - Software",
          "Modern Drivers of AI and Data Science",
          "Harms - Individuals and Groups",
          "Harms - Society",
          "Alignment and Misalignment",
          "Types of Bias",
          "AI Harms Taxonomies",
          "Unique Characteristics Requiring Governance",
          "Unique Characteristics Requiring Governance",
          "Security Risks - Generative AI",
          "Security Risks - General AI",
          "Privacy Risks",
          "Operational and Business Risks",
          "Building an AI Assessment Process",
          "ISO 42005 AI Impact AssessmentsISO 42005 AI Impact Assessments",
          "Risk Assessment Considerations",
          "Buzzword Bingo - AI Ethics",
          "Ethical vs. Responsible vs. Trustworthy AI",
          "Ethical AI Principles",
          "Ethics by Design",
          "Trustworthy AI",
          "AI Strategy Roadmap",
          "Non-EU AI Act Operators Overview",
          "Use Case Assessment",
          "Establish Framework",
        ]
      },
      {
        sectionTitle: "Domain 2: Understanding how Law,Standards, and Frameworks Applt to AI",
        lectures: [
          "AI Legal and Regulatory Roadmap",
          "Approaches to Regulating AI",
          "Categories of AI-based Products",
          "Fair Information Practices (FIPs",
          "Applying the FIPs to AIPrivacy by Design and Default (PbDD)",
          "Privacy Requirements for AI Operators",
          "Special Categories of Personal Data",
          "Data Controller Obligations",
          "EDPB Guidance on AI and Personal Data",
          "What is intellectual property?",
          "AI and Intellectual Property Law",
          "Model and Data Licensing",
          "Employment and the Equal Employment Opportunity Commission (EEOC)",
          "The Federal Trade Commission (FTC)",
          "Automated Decision Making (ADM)",
          "The Federal Reserve and SR 11-7",
          "FDA, AI, and Medical Devices",
          "OSHA and Industrial Robot Systems",
          "The EU Digital Services Act (DSA)",
          "EU AI Act - Article, Annex, and Recital",
          "EU AI Act Resources",
          "EU AI Act - AI Operators",
          "EU AI Act - High-risk Systems",
          "EU AI Act - A Risk-based Approach",
          "EU AI Act - High-risk Systems",
          "EU AI Act - Transparency / Limited-risk Systems",
          "EU AI Act - AI Literacy",
          "EU AI Act - High-risk AI Provider Obligations Articles 9-10",
          "EU AI Act - GPAI Models",
          "Global GPAI Obligations",
          "EU AI Act - Enforcement Part 1",
          "Global Enforcement",
          "EU AI Act - Importer Obligations",
          "EU AI Act - Distributor Obligations",
          "EU AI Act - Deployer Obligations",
          "EU AI Act - Other Supply Chain Responsibilities",
          "NIST AI RMF - Foundational Information",
          "NIST AI RMF - Framework Core",
          "NIST AI RMF - Playbook and Gen AI Profile",
          "ISO/IEC 42001 - Requirements",
          "ISO/IEC 42001 - Controls",
          "ISO/IEC 22989 - AI Concepts and Terminology",
          "ISO 31000:2018 - Risk Management Guidelines",
          "IEEE 7000-21 - Addressing Ethical Concerns during Design Process",
          "Human Rights, Democracy, and Rule of Law Assurance Framework (HUDERAF)",
        ]
      },
      {
        sectionTitle: "Domain 3: Understanding How to Govern AI Development",
        lectures: [
          "AI Development Life Cycle - An Overview",
          "Stage 1 - Plan and Design - Five Sub-stages",
          "Stage 1 - Plan and Design - Other Activities",
          "Stage 1 - Plan and Design - Risk Assessment Strategies",
          "Stage 2 - Data Collection and Preparation - An Overview",
          "Stage 2 - Data Collection and Preparation - Data Groups and Other Terms",
          "Stage 2 - Data Collection and Preparation - More Data Terms",
          "Stage 2 - Data Collection and Preparation - Data Life Cycle",
          "Stage 2 - Data Collection and Preparation - Privacy Enhancing Technologies",
          "Stage 3 - Build and/or Select Model - An Overview",
          "Stage 3 - Build and/or Select Model - System Architectures and Ensemble Methods",
          "Oversight, Assurance, and Audits",
          "Testing and Documentation",
          "Model Evaluation Tools",
          "Resources: Model Evaluation Tools",
          "Resources: Testing and Evaluation Resources",
          "Conformity Assessments and DPIAs",
          "Communication Plan and Products",
          "Repeatability Assessments and Adversarial Testing",
          "A Personal Request from Dr. David",
          "Stage 4 - TEVV - Test, Evaluate, Verify, Validate",
          "Domain 3 Practice Questions",
        ]
      },
      {
        sectionTitle: "Domain 4: Understanding how to Govern AI Deployment and Use",
        lectures: [
          "Updating Policies Pre-deployment",
          "Stage 5 - Deployment - Key Considerations",
          "Stage 5 - Deployment - Key Considerations",
          "Stage 5 - Deployment - Deploying Proprietary Models",
          "Third-party Risk Management",
          "Evaluating Third-party Agreements",
          "Stage 6 - Ongoing Monitoring and Maintenance - Assessments",
          "Stage 6 - Ongoing Monitoring and Maintenance - Incident Response Overview",
          "Stage 6 - Ongoing Monitoring and Maintenance - Incident Response Six Stages",
          "Resources: AI Incident Response and Management",
          "Stage 6 - Ongoing Monitoring and Maintenance - Public Disclosure Requirements",
          "Stage 6 - Ongoing Monitoring and Maintenance - Auditing",
          "Stage 6 - Ongoing Monitoring and Maintenance - Continuous Evaluation",
          "Stage 7 - Decommission / Retire",
          "Leftover Lexicon Part 1",
          "Leftover Lexicon Part 2",
          "Watermarking Resources",
          "Domain 4 Lecture Notes",
          "Domain 4 Practice Questions",
        ]
      },



    ],

    requirements: [
      "No experience or background in AI, information technology, law or privacy required.",
      "A desire and willingness to learn about AI, information technology, data privacy, and law."
    ],



    whoCanTakeTheCourse: [
      "Individuals preparing for their AIGP exam.",
      "Anyone wanting a deeper understanding of AI governance, risk management, and legal and regulatory compliance",
      "Professionals wanting to build and expand the depth of their AI knowledge.",
    ],
  },
  {
    courseId: "7",
    courseName: "Data Analytics, Data Science, & Machine Learning - All in 1",
    courseDesc: "From Theory to Hands-on Projects - EVERYTHING to Master Data Analytics, Data Science and Machine Learning in 1 Course.",
    createdBy: "Analix AI",
    rate: 4.7,
    coursePrice: 9900,
    courseSold: (19580),
    courseImage: e,
    whatYouWillLearn: [
      "Understand data science foundations, applications, and the path to becoming a data scientist.",
      "Apply statistics and probability with distributions, hypothesis testing, and inference in Python.",
      "Visualize data with Python using bar charts, histograms, scatterplots, heatmaps, and box plots.",
      "Master advanced ML techniques like cross-validation, feature engineering, regularization, and hyperparameter tuning.",
      "Explore deep learning with neural networks and TensorFlow, from preprocessing to model evaluation.",
      "Acquire Excel, SQL, Python, Power BI, and ChatGPT skills to prepare for a data analyst career",
      "Use Excel for data cleaning, manipulation, formulas, functions, graphs, and charts.",
      "Understand RDBMS fundamentals including keys, data types, and relational models.",
      "Learn Python basics including variables, data types, lists, dictionaries, loops, and functions.",
      "Learn Power BI for data manipulation, analysis, and dashboard insights.",
      "Utilize ChatGPT for data manipulation, merging, pivot tables, and conditional logic.",
      "Master Python for data cleaning, manipulation, preprocessing, and transformation.",
      "Work with MySQL for table manipulation, constraints, indices, filtering, and joins.",
    ],
    thisCourseIncludes: [
      "66.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "WarmUp + Important Message",
        lectures: [
          "How to take the classes",
          "Meet your instructor",
          " Take a refund now, if....",
          "How to stay motivated"
        ]
      },

      {
        sectionTitle: "Data Science",
        lectures: [
          "All notes on Data Science",
          "What is Data Science",
          "Fundamentals of Data Science",
          "The path to be a Data Scientist",
          "Data Analysis",
          "Business Intelligence",
          "Statistical Modeling",
          "Machine Learning",
          "Deep Learning",
          "Artificial Intelligence",
          "Traditional Data vs Big Data",
          "Working with Big Data",
          "Step 1 - Business understanding",
          "Step 2 - Data collection",
          "Step 3 - Data preparation",
          "Step 4 - Data modeling",
          "Step 5 - Model evaluation",
          "Step 6 - Model deployment",
        ]
      },
      {
        sectionTitle: "Data Analysis",
        lectures: [
          "Data analysis definition, types and examples",
          "Tools and technologies for data analysis",
          "Various sources of collecting data ",
          "Population v/s sample and its methods",
          "The first requirement - Data cleaning!",
          "Various methods of data cleaning",
          "Techniques of Data Cleaning",
          "Adding extra data with concatenation",
          "Methods of exploratory data analysis Part 1",
          "Methods of exploratory data analysis Part 2",
          "Methods of exploratory data analysis Part 3",
          "Exploratory Data Analysis",
          "The application of statistical test",
          "Techniques for data transformation Part 1",
          "Techniques for data transformation Part 2",
          "Several methods of data visualization Part 1",
          "Several methods of data visualization Part 2",
          "Several methods of data visualization Part 3",
          "Understanding Data Transformation",
        ]
      },
      {
        sectionTitle: "Machine Learning, Deep Learning & AI",
        lectures: [
          "ML for data analysis and decision-making",
          "Widely used ML methods in the data analytics",
          "Steps in developing machine learning model",
          "What is Machine learning?",
          "Supervised Classification models",
          "Unsupervised clustering models",
          "Model evaluating metrics",
          "Overfitting & Underfitting",
          "Imbalanced data problem",
          "What is Matrix?",
          "Scalars and Vectors",
          "Linear algebra introduction",
          "What is Tensor?",
          "Transpose of Matrix",
          "AI use cases in Daily life",
          "What is AI Chatbot?",
          "Gen AI Tools and Applications",
          "Various models of Generative AI",
          "NLP, Speech Technology & Computer vision",
          "AI, Cloud and Edge computing & IoT",
          "What is Prompt Engineering?",
          "Best practices in Prompt engineering",
          "Chain-of-Thought prompt technique",
        ]
      },
      {
        sectionTitle: "Pythin Programming Fundamentals",
        lectures: [
          "Note on python data analysis",
          "Understanding Expressions and Variables",
          "Hands-on Lab: Expressions and Variables",
          "Understanding Data Types",
          "Hands-on Lab: Python Data Types",
          "Various String Operators",
          "Hands-on Lab: Various String Operators",
          "Starting with Variables to Data Types",
          "Understanding Tuples and Lists",
          "Hands-on: Tuples and Lists",
          "Operations & Manipulation of Sets",
          "Hands-on Lab: Sets",
          "Working with Dictionaries",
          "Hands-on Lab: Dictionaries",
          "Adding keys and values",
          "Condition and Branching",
          "Hands-on Lab: Condition & Branching",
          "Loops for Iteration",
          "Hands-on Lab: Loops",
          "Developing Functions",
          "Hands-on Lab: Python Functions",
          "Object and Classes",
          "Exception Handling",
        ]
      },
      {
        sectionTitle: "Deep Dive-Probability & Distribution",
        lectures: [
          "What is probability?",
          "Expected value v/s Actual value",
          "Frequency in probability",
          "Complements in probability",
          "Intro to combinatorics",
          "Permutations",
          "Factorials operations",
          "Combinations",
          "Mutually exclusive sets",
          "Conditional probability",
          "Exponential distribution",

        ]
      },
      {
        sectionTitle: "SQL- Complete Data Analysis and Data Science",
        lectures: [
          "Key features of RDBMS",
          "Primary key v/s Foreign key",
          "Types of relationship in RDBMS",
          "Data types in RDBMS",
          "Fundamentals on RDBMS",
          "Introduction to SQL language",
          "Various platforms of SQL",
          "Introduction to SQL for RDBMS",
          "Installing MySQL in Windows and Mac",
          "Creating database",
          "Selecting database",
          "Modifying database",
          "Deleting database",
          "SELECT....FROM: select data from table",
          "DISTINCT: selecting unique values for column",
          "AS: selecting columns based on aliases",
          "ORDER BY: sorting data based on a column",
          "GROUP BY: group data analysis with functions",
          "INNER JOIN: joining on common values",
          "LEFT JOIN: joining on left table values",
          "RIGHT JOIN: joining on right table values",
          "CROSS JOIN: joining all values from tables",
          "HAVING: advanced conditional format",
          "EXISTS: nested filtering between tables",
          "ANY: nested filtering between tables",
          "CASE: finding the conditional outcomes",
          "SQL comments systems",
          "Storing and executing procedures",

        ]
      },


    ],

    requirements: [
      "Access to computer and internet",
      "Basic computer literacy",
      "No coding experience required",
      "Dedication, patience and perseverance",
    ],



    whoCanTakeTheCourse: ["Everyone!"],
  },
  {
    courseId: "8",
    courseName: "Data Analyst: Professional Certificate in Data Analysis",
    courseDesc: "Data Based Decision Making, Data Analysis. Data Collection, Cleaning, Statistical Analysis, Visualisation, Privacy.",
    createdBy: "MTF Institute of Management, Technology and Finance",
    rate: 4.4,
    coursePrice: 9900,
    courseSold: (59580),
    courseImage: f,
    whatYouWillLearn: [
      "Business Analysis",
      "Microsoft Excel",
      "Data Collection and Acquisition",
      "Statistical Analysis",
      "Data Analysis",
      "Data Science",
      "Data Cleaning and Preparation",
    ],
    thisCourseIncludes: [
      "32.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Presentation",
          "Welcome to MTF",

        ]
      },

      {
        sectionTitle: "Data Analysis",
        lectures: [
          "Data Collection and Acquisition",
          "Data Cleaning and Preparation",
          "Exploratory Data Analysis (EDA)",
          "Statistical Analysis",
          "Data Visualisation",
          "Predictive Analytics",
          "Data Interpretation and Reporting",
          "Data Privacy and Ethics",
          "Tools and Software for Data Analysis",
          "Building a Data Analyst Portfolio",
          "Career Development and Job Market Trends",
          "A Guide to build a Data Analyst Portfolio",
          "A Guide to Find a Data Analyst Job",
          "Practical exercises",

        ]
      },
      {
        sectionTitle: "Introduction to Business and Data Analysis (Supplementary Module)",
        lectures: [
          "Introduction to Business and Data Analysis",
          "Main business goals of data analysis",
          "Data types and sources",
          "Exploratory Data Analysis",
          "Data Analysis in Business",
          "Introduction to Business and Data Analysis",
          "Understanding Business Needs and Defining Problems",
          "Data Collection: Sources and Methods",
          "Exploratory Data Analysis (EDA)",
          "Business Data Analysis Techniques",
          "Data Visualization for Business Insights",
          "The Role of Technology in Business and Data Analysis",
        ]
      },
      {
        sectionTitle: "Data based Decision Making",
        lectures: [
          "Introduction to Data-Based Decision Making (DBDM)",
          "The Data Landscape: Types, Sources, and Quality.",
          "Data Collection and Preparation",
          "Descriptive Analytics: Understanding the 'What'",
          "Diagnostic Analytics: Exploring the 'Why'",
          'Predictive Analytics: Forecasting the "Future"',
          'Prescriptive Analytics: Recommending the "How"',
          'Data-Driven Culture and Organizational Change',
          'Tools and Technologies for Data-Based Decision Making',
          'Case Studies in Data-Based Decision Making',

        ]
      },
      {
        sectionTitle: "SQL and SQL for Data Analysis",
        lectures: [
          "Introduction",
          "Basic SQL Commands",
          "Retrieving and Manipulating Data",
          "Advanced Queries and Data Aggregation",
          "Working with Joins",
          "Subqueries and Nested Queries",
          "Modifying Data in SQL",
          "Optimising and Indexing Your Queries",
          "Advanced SQL Features",
          "Final Project",
          "Recommended Resources ",
          "Introduction to SQL and Relational Databases",
          "SQL Fundamentals: Building a Strong Foundation",
          "Combining Data from Multiple Tables: Mastering Joins",
          "Advanced Querying Techniques for Complex Analysis",
          "Unlocking the Power of SQL for Data Analysis",
          "Optimizing SQL Queries for Efficiency",
          "Real-World SQL Data Analysis Examples and Use Cases",
          "Integrating SQL with Popular Data Analysis Tools",
          "SQL Security Best Practices",
          "Exploring the Landscape of SQL Dialects",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "For a better learning experience, we suggest you to use a laptop / mobile phone / pen and paper for taking notes, highlighting important points, and making summaries to reinforce your learning.",
      "Strong willingness to learn"
    ],



    whoCanTakeTheCourse: [
      "No special requirements. A course for anyone who wants to build career in business and Data Analysis",
      "Data analysis also is the process of collecting, cleaning, and organizing data to uncover patterns, insights, and trends that can help individuals and organizations make informed decisions. It involves examining raw data to find answers to specific questions, identify potential problems, or discover opportunities for improvement.   Data analysts transform raw data into actionable insights to help organisations improve operations, strategies, and customer experiences. Core skills include statistical analysis, critical thinking, data visualisation, and proficiency in tools like Excel, SQL, Python, and Tableau. Learning data analysis skills is crucial for career building in today's data-driven world, both for professional positions and managers of all levels.",
      "For Professionals: Increased Employability: Data analysis skills are in high demand across various industries. Professionals with these skills are more likely to secure well-paying jobs and advance in their careers.   Improved Decision-Making: Data analysis enables professionals to make informed decisions based on evidence and insights rather than relying on intuition or guesswork.   Enhanced Problem-Solving: Data analysis helps professionals identify the root causes of problems, develop effective solutions, and track the effectiveness of interventions.   Increased Efficiency and Productivity: By automating tasks and identifying areas for improvement, data analysis can help professionals work more efficiently and increase their productivity.",
      "For Managers: Strategic Planning: Data analysis provides managers with the insights needed to develop effective strategies, set realistic goals, and track progress towards objectives.   Performance Management: Managers can use data to monitor team performance, identify areas for improvement, and provide targeted feedback to employees.   Risk Management: Data analysis can help managers identify potential risks, assess their impact, and develop mitigation strategies.   Innovation and Growth: By analyzing data on customer behavior, market trends, and competitor activities, managers can identify opportunities for innovation and growth.  ",
      "Learning data analysis skills is essential for professionals and managers of all levels who want to succeed in today's data-driven world. These skills can help individuals make better decisions, solve problems more effectively, and contribute to the success of their organizations.",
      "Section: Data Based Decision Making and Cost-Benefit Analysis (Supplementary Module) This module combines data-based decision-making with cost-benefit analysis. It covers how to gather, analyze, and interpret data for decision-making, and how to conduct cost-benefit analyses to evaluate potential initiatives. It also covers the tools and technologies used for data-based decision-making.",
    ],
  },
  {
    courseId: "9",
    courseName: "Intro to AI Agents and Agentic AI",
    courseDesc: "Understand How AI Agents Work and How to Leverage This Technology to Transform Your Business and Career",
    createdBy: "365 Careers",
    rate: 4.5,
    coursePrice: 10900,
    courseSold: (89580),
    courseImage: g,
    whatYouWillLearn: [
      "Understand AI agents and the underlying technology",
      "How to build AI agents",
      "Acquire an understanding of different AI agent types",
      "Understand why AI agent architecture is essential for building effective systems",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
      "How to skyrocket productivity using AI agents",
    ],
    thisCourseIncludes: [
      "2 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Presentation",
          "Welcome to MTF",

        ]
      },

      {
        sectionTitle: "Understanding AI Agents",
        lectures: [
          "What does the course cover",
          "What is an AI agent?",
          "Why AI agents are believed to be the next big thing?",
          "",
          "",

        ]
      },
      {
        sectionTitle: "Essential Ingredients for building AI Agents",
        lectures: [
          "Environment – the external world that the agent perceives and interacts with",
          "Sensors – how the agent collects data about its surroundings",
          "Model – the agent’s way of making sense of information",
          "Decision-making logic – rules and objectives that guide the agent’s actions",
          "Actions – how the agent shapes the environment",
          "The updated environment",
          "",
        ]
      },
      {
        sectionTitle: "Data based Decision Making",
        lectures: [
          "Key characteristics of AI agents",
          "Simple reflex agent",
          "Model-based reflex agent",
          "Goal-based agent",
          "Utility-based agent",
          "Learning agent"

        ]
      },
      {
        sectionTitle: "Guiding and teaching AI ai agents",
        lectures: [
          "Learning from humans",
          "Learning from external systems",
          "Quiz",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "No prior knowledge is required.",

    ],



    whoCanTakeTheCourse: [
      "This course is for you if you want a great career",
      "Perfect for entrepreneurs and business leaders passionate about innovation",
      "Aspiring data and AI practitioners",
      "Anyone fascinated by AI who wants to move beyond “chatting with ChatGPT”",
    ],
  },
  {
    courseId: "10",
    courseName: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    courseDesc: "Complete AI Engineer Training: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs",
    createdBy: "365 Careers",
    rate: 4.6,
    coursePrice: 10900,
    courseSold: (89580),
    courseImage: h,
    whatYouWillLearn: [
      "The course provides the entire toolbox you need to become an AI Engineer",
      "Start coding in Python and learn how to use it for NLP and AI",
      "Apply your skills to real-life business cases",
      "Leverage LangChain for seamless development of AI-driven applications by chaining interoperable components",
      "Use APIs and connect to powerful foundation models",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
    ],
    thisCourseIncludes: [
      "29.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Intro to AI module: Getting started",
        lectures: [
          "Building an AI tool in 5 minutes: A quick demo",
          "What does the course cover",
          "Natural vs Artificial Intelligence",
          "Brief history of AI",
          "Demystifying AI, Data science, Machine learning, and Deep learning",
          "Weak vs Strong AI",

        ]
      },

      {
        sectionTitle: "Intro to AI Module: Data is essential for building ai",
        lectures: [
          "Structured vs unstructured data",
          "How we collect data",
          "Labelled and unlabelled data",
          "Metadata: Data that describes data",

        ]
      },
      {
        sectionTitle: "Essential Ingredients for building AI Agents",
        lectures: [
          "Environment – the external world that the agent perceives and interacts with",
          "Sensors – how the agent collects data about its surroundings",
          "Model – the agent’s way of making sense of information",
          "Decision-making logic – rules and objectives that guide the agent’s actions",
          "Actions – how the agent shapes the environment",
          "The updated environment",
          "",
        ]
      },
      {
        sectionTitle: "Data based Decision Making",
        lectures: [
          "Key characteristics of AI agents",
          "Simple reflex agent",
          "Model-based reflex agent",
          "Goal-based agent",
          "Utility-based agent",
          "Learning agent"

        ]
      },
      {
        sectionTitle: "Guiding and teaching AI ai agents",
        lectures: [
          "Learning from humans",
          "Learning from external systems",
          "Quiz",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "No prior knowledge is required. We will start from the very basics",
      "You’ll need to install Anaconda. We will show you how to do that step by step",

    ],



    whoCanTakeTheCourse: [
      "This course is for you if you want a great career",
      "Perfect for entrepreneurs and business leaders passionate about innovation",
      "Aspiring data and AI practitioners",
      "Anyone fascinated by AI who wants to move beyond “chatting with ChatGPT”",
    ],
  },
  {
    courseId: "11",
    courseName: "CompTIA A+ Core 1 (220-1201) Full Course & Practice Exam",
    courseDesc: "Pass the CompTIA A+ Core 1 (220-1201) exam with help from a top expert in the field!",
    createdBy: "Jason Dion. 2.8 million+ Enrollments worldwide",
    rate: 4.7,
    coursePrice: 10900,
    courseSold: (89580),
    courseImage: i,
    whatYouWillLearn: [
      "Installing and configuring laptops, desktops, and mobile devices",
      "Troubleshooting hardware and software issues effectively",
      "Implementing basic cybersecurity measures",
      "Leverage LangChain for seamless development of AI-driven applications by chaining interoperable components",
      "Use APIs and connect to powerful foundation models",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
    ],
    thisCourseIncludes: [
      "29.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction",
        lectures: [
          "Building an AI tool in 5 minutes: A quick demo",
          "What does the course cover",
          "Natural vs Artificial Intelligence",
          "Brief history of AI",
          "Demystifying AI, Data science, Machine learning, and Deep learning",
          "Weak vs Strong AI",

        ]
      },

      {
        sectionTitle: "Cable types",
        lectures: [
          "Cable Types (OBJ. 3.2 & 3.4)",
          "Exterior of a PC (OBJ.3.2)",
          "USB Cables (OBJ.3.2)",
          "Video Cables (OBJ.3.2)",
          "Storage Cables (OBJ.3.4)"

        ]
      },
      {
        sectionTitle: "Motherboards",
        lectures: [
          "Motherboards (OBJ.3.5)",
          "Form Factors (OBJ.3.5)",
          "CPU Architecture (OBJ.3.5)",
          "Decision-making logic – rules and objectives that guide the agent’s actions",
          "Actions – how the agent shapes the environment",
          "The updated environment",
          "Motherboard Connections (OBJ.3.5)",
          "Expansion Cards (OBJ.3.5)", 
          "Installing the Motherboard & CPU (OBJ.3.5)", 
          "Expansion Card Types (OBJ.3.5)", 
        ]
      },
      {
        sectionTitle: "Cooling and Power",
        lectures: [
          "Cooling and Power (OBJ.3.5 & 3.6)",
          "Cooling the System (OBJ.3.5)",
          "Liquid Cooling (OBJ.3.5)",
          "Installing Active Cooling (OBJ.3.5)",
          "Power Supply Unit (PSU) (OBJ.3.5)",
          "Power Supply Connectors (OBJ.3.5)",
          "Input and Output Voltages (OBJ.3.6)",
          "Wattage Rating (OBJ.3.6)",
          "Installing a Power Supply (OBJ.3.6)",

        ]
      },
      {
        sectionTitle: "Sytem Memory",
        lectures: [
          "System Memory (OBJ.3.3)",
          "Addressing Memory (OBJ.3.3)",
          "Memory Modules (OBJ.3.3)",
          "Multi-Channel Memory (OBJ.3.3)",
          "Virtual Memory (OBJ.3.3)",
          "Installing Memory (OBJ.3.3)",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "No prior knowledge is required. We will start from the very basics",
      "You’ll need to install Anaconda. We will show you how to do that step by step",

    ],



    whoCanTakeTheCourse: [
      "This course is for you if you want a great career",
      "Perfect for entrepreneurs and business leaders passionate about innovation",
      "Aspiring data and AI practitioners",
      "Anyone fascinated by AI who wants to move beyond “chatting with ChatGPT”",
    ],
  },
  {
    courseId: "12",
    courseName: "CompTIA A+ Core 1 (220-1201) 6 Practice Exams",
    courseDesc: "Full-length CompTIA A+ Core 1 (220-1201) 6 Practice Exams * Timed * 540 Multiple-choice Questions with detailed feedback",
    createdBy: "Jason Dion",
    rate: 4.4,
    coursePrice: 10900,
    courseSold: (89580),
    courseImage: i,
    whatYouWillLearn: [
      "The course provides the entire toolbox you need to become an AI Engineer",
      "Start coding in Python and learn how to use it for NLP and AI",
      "Apply your skills to real-life business cases",
      "Leverage LangChain for seamless development of AI-driven applications by chaining interoperable components",
      "Use APIs and connect to powerful foundation models",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
    ],
    thisCourseIncludes: [
      "29.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Introduction CompTIA A+ Core 1 (220-1201) 6 Practice Exams",
        lectures: [
          "Building an AI tool in 5 minutes: A quick demo",
          "What does the course cover",
          "Natural vs Artificial Intelligence",
          "Brief history of AI",
          "Demystifying AI, Data science, Machine learning, and Deep learning",
          "Weak vs Strong AI",

        ]
      },

      {
        sectionTitle: "Intro to AI Module: Data is essential for building ai",
        lectures: [
          "Structured vs unstructured data",
          "How we collect data",
          "Labelled and unlabelled data",
          "Metadata: Data that describes data",

        ]
      },
      {
        sectionTitle: "Essential Ingredients for building AI Agents",
        lectures: [
          "Environment – the external world that the agent perceives and interacts with",
          "Sensors – how the agent collects data about its surroundings",
          "Model – the agent’s way of making sense of information",
          "Decision-making logic – rules and objectives that guide the agent’s actions",
          "Actions – how the agent shapes the environment",
          "The updated environment",
          "",
        ]
      },
      {
        sectionTitle: "Data based Decision Making",
        lectures: [
          "Key characteristics of AI agents",
          "Simple reflex agent",
          "Model-based reflex agent",
          "Goal-based agent",
          "Utility-based agent",
          "Learning agent"

        ]
      },
      {
        sectionTitle: "Guiding and teaching AI ai agents",
        lectures: [
          "Learning from humans",
          "Learning from external systems",
          "Quiz",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "No prior knowledge is required. We will start from the very basics",
      "You’ll need to install Anaconda. We will show you how to do that step by step",

    ],



    whoCanTakeTheCourse: [
      "This course is for you if you want a great career",
      "Perfect for entrepreneurs and business leaders passionate about innovation",
      "Aspiring data and AI practitioners",
      "Anyone fascinated by AI who wants to move beyond “chatting with ChatGPT”",
    ],
  },
  {
    courseId: "10",
    courseName: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    courseDesc: "Complete AI Engineer Training: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs",
    createdBy: "365 Careers",
    rate: 4.6,
    coursePrice: 10900,
    courseSold: (89580),
    courseImage: h,
    whatYouWillLearn: [
      "The course provides the entire toolbox you need to become an AI Engineer",
      "Start coding in Python and learn how to use it for NLP and AI",
      "Apply your skills to real-life business cases",
      "Leverage LangChain for seamless development of AI-driven applications by chaining interoperable components",
      "Use APIs and connect to powerful foundation models",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
    ],
    thisCourseIncludes: [
      "29.5 hours on-demand video",
      "45 coding exercises",
      "7 downloadable resources",
      "Certificate of completion"
    ],
    courseContent: [
      {
        sectionTitle: "Intro to AI module: Getting started",
        lectures: [
          "Building an AI tool in 5 minutes: A quick demo",
          "What does the course cover",
          "Natural vs Artificial Intelligence",
          "Brief history of AI",
          "Demystifying AI, Data science, Machine learning, and Deep learning",
          "Weak vs Strong AI",

        ]
      },

      {
        sectionTitle: "Intro to AI Module: Data is essential for building ai",
        lectures: [
          "Structured vs unstructured data",
          "How we collect data",
          "Labelled and unlabelled data",
          "Metadata: Data that describes data",

        ]
      },
      {
        sectionTitle: "Essential Ingredients for building AI Agents",
        lectures: [
          "Environment – the external world that the agent perceives and interacts with",
          "Sensors – how the agent collects data about its surroundings",
          "Model – the agent’s way of making sense of information",
          "Decision-making logic – rules and objectives that guide the agent’s actions",
          "Actions – how the agent shapes the environment",
          "The updated environment",
          "",
        ]
      },
      {
        sectionTitle: "Data based Decision Making",
        lectures: [
          "Key characteristics of AI agents",
          "Simple reflex agent",
          "Model-based reflex agent",
          "Goal-based agent",
          "Utility-based agent",
          "Learning agent"

        ]
      },
      {
        sectionTitle: "Guiding and teaching AI ai agents",
        lectures: [
          "Learning from humans",
          "Learning from external systems",
          "Quiz",
        ]
      },
      {
        sectionTitle: "Specialization: Data Quality, Management & Governance (Supplementary Moduule)",
        lectures: [
          "Introduction to Data Governance",
          "Data Governance Frameworks",
          "Data Governance Roles and Responsibilities",
          "Data Quality Management",
          "Data Management Fundamentals",
          "Data Governance and Management in Practice",
          "Data Governance Tools and Technology",
          "Next steps",
          "Optional Quiz",


        ]
      },


    ],

    requirements: [
      "No prior knowledge is required. We will start from the very basics",
      "You’ll need to install Anaconda. We will show you how to do that step by step",

    ],



    whoCanTakeTheCourse: [
      "This course is for you if you want a great career",
      "Perfect for entrepreneurs and business leaders passionate about innovation",
      "Aspiring data and AI practitioners",
      "Anyone fascinated by AI who wants to move beyond “chatting with ChatGPT”",
    ],
  },

]

export default Data