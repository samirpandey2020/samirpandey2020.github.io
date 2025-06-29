// Portfolio Data Configuration
// Update this file with your personal information

export const PORTFOLIO_DATA = {
  // Personal Information
  personal: {
    name: "Samir Pandey",
    title: "Full-Stack Developer & UI/UX Designer",
    email: "pandeysamir0404@gmail.com",
    phone: "+977-9860566040",
    location: "Kathmandu, Nepal",
    bio: "Full-Stack Developer passionate about creating beautiful and functional digital experiences",
    description: "I'm a passionate full-stack developer who loves turning ideas into reality through code. With a strong foundation in both front-end and back-end technologies, I create seamless digital experiences that users love.",
    profileImage: "/images/pics2.jpeg",
    resume: "/documents/resume.pdf",
    status: "Available for opportunities"
  },

  // Social Links
  social: {
    github: "https://github.com/samirpandey2020",
    linkedin: "https://linkedin.com/in/samir-pandey-6b54b5279/",
    twitter: "https://twitter.com/samirpandey2020",
    email: "mailto:pandeysamir0404@gmail.com"
  },

  // Skills Configuration
  skills: {
    categories: [
      {
        title: "Frontend Development",
        skills: [
          { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
          { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
          { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
          { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
          { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-blue-500" },
        ]
      },
      {
        title: "Backend Development",
        skills: [
          { name: "Python", level: 85, color: "from-blue-500 to-green-500" },
          { name: "Django", level: 80, color: "from-green-600 to-green-700" },
          { name: "FastAPI", level: 85, color: "from-purple-500 to-pink-500" },
          { name: "Flask", level: 85, color: "from-purple-500 to-pink-500" },
        ]
      },
      {
        title: "Database & Cloud",
        skills: [
          { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-700" },
          { name: "AWS", level: 75, color: "from-orange-500 to-yellow-500" },
          { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
          { name: "Nginx", level: 65, color: "from-green-600 to-green-700" },
        ]
      },
      {
        title: "DevOps & Tools",
        skills: [
          { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
          { name: "CI/CD", level: 75, color: "from-purple-500 to-pink-500" },
          { name: "Linux", level: 80, color: "from-yellow-500 to-orange-500" },
          { name: "Automation", level: 85, color: "from-blue-500 to-purple-500" },
          { name: "Testing", level: 70, color: "from-green-500 to-green-600" },
        ]
      }
    ],
    additionalSkills: [
      "Responsive Design", "Performance Optimization", "SEO", "Accessibility",
      "Agile/Scrum", "Problem Solving", "Team Collaboration", "Code Review",
      "API Design", "Microservices", "Serverless", "GraphQL"
    ],
    currentlyLearning: [
      { name: "Next.js 14", color: "green" },
      { name: "Cybersecurity", color: "purple" },
      { name: "Flutter", color: "orange" },
    ]
  },

  // Projects Configuration
  projects: [
    {
      title: "QuickCCA",
      description: "A full-stack Web Application for CCA (Cheque Clearing Application) built with Django and React and selenium. Features include user authentication, Cheque Clearing, integration with 3rp party API and Database, and more.",
      technologies: ["Django", "React", "PostgreSQL", "Selenium", "RPA", "Redis", "RabbitMQ"],
      githubUrl: "https://github.com/samirpandey2020/QuickCCA",
      liveUrl: "https://quickcca.com",
      image: "/images/projects/ecommerce.jpg",
      category: "Full-Stack"
    },
    {
      title: "OCR Service",
      description: "OCR Service for extracting text from images and documents. Built with FastAPI and Hugging face Model.",
      technologies: ["FastAPI", "Transfromer", "Python", "Docker", "Pics2Struct", "Donut"],
      githubUrl: "https://github.com/samirpandey2020/OCR-Service",
      liveUrl: "https://ocr-service.com",
      image: "/images/projects/task-manager.jpg",
      category: "API Service"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode support.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
      image: "/images/projects/portfolio.jpg",
      category: "Frontend"
    },
    {
      title: "RPA Orchestrator Platform",
      description: "A Orchestration platform for RPA Bots that manages, built on Django and React. Features include Bot management, task management, user authentication, and more.",
      technologies: ["React", "Django", "RabbitMQ", "Redis", "Docker", "Selenium"],
      githubUrl: "https://github.com/samirpandey2020/RPA-Orchestrator",
      liveUrl: "https://rpa-orchestrator.com",
      image: "/images/projects/chat-app.jpg",
      category: "Full-Stack"
    },
    {
      title: "QuickSamachar",
      description: "A Applicatoin that scrape news from all the news websites and show summary of the news. Built with Flutter and FastAPI, Selenium. worked on fastapi and new scraping parts",
      technologies: ["React", "Django", "RabbitMQ", "Redis", "Docker", "Selenium"],
      githubUrl: "https://github.com/samirpandey2020/RPA-Orchestrator",
      liveUrl: "https://rpa-orchestrator.com",
      image: "/images/projects/chat-app.jpg",
      category: "Full-Stack"
    },
    {
      title: "Movie Recommendation System",
      description: "A Movie Recommendation System built with Python and Flask.",
      technologies: ["Python", "Flask", "Pandas", "Numpy", "Scikit-learn"],
      githubUrl: "https://github.com/samirpandey2020/Movie-Recommendation-System",
      liveUrl: "https://rpa-orchestrator.com",
      image: "/images/projects/chat-app.jpg",
      category: "Full-Stack"
    }
  ],

  // Experience Configuration
  experience: [
    {
      title: "Full Stack Developer",
      company: "QuickFox Consulting",
      period: "2024 July - Current",
      location: "Kathmandu, Nepal",
      description: "Built and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality solutions.",
      technologies: ["React", "Django", "FastAPI", "Python", "Docker", "AWS", "PostgreSQL", "Redis", "RabbitMQ"],
      achievements: [
        "Depolyed Complete Project",
        "Implemented CI/CD pipeline",
        "Reduced bug reports by 60%"
      ]
    },
    {
      title: "Python Automation Intern",
      company: "QuickFox Consulting",
      period: "2023 April - 2023 July",
      location: "Kathmandu, Nepal",
      description: "Developed a Python based automation script for data extraction, data cleaning, and data analysis. make RPA bots to automate the process.",
      technologies: ["Python", "PDF", "PyPDF2", "Numpy", "Pandas", "Scikit-learn", "RPA", "Selenium"],
      achievements: [
        "Built 50+ RPA bots",
        "Built 10+ Python based automation scripts"
      ]
    }
  ],

  // Education Configuration
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      duration: "2021 - 2025",
      description: "Focused on software engineering, algorithms, and web development. Completed capstone project on e-commerce platform.",
    }
  ],

  // Stats Configuration
  stats: [
    { label: "Projects Completed", value: 5, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ],

  // Meta Information
  meta: {
    title: "Samir Pandey - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    keywords: "full stack developer, react, nodejs, typescript, web development, samir pandey",
    author: "Samir Pandey",
    url: "https://samirpandey2020.github.io",
    image: "/images/profile/og-image.jpg"
  }
};

export default PORTFOLIO_DATA; 