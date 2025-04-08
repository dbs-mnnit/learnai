// Description: This file contains the Courses component, which displays a list of available courses with filtering options based on the course level. It uses React hooks for state management and imports a CourseCard component to display individual course details.

import { useState } from "react";
import CourseCard from "../components/CourseCard";

const coursesList = [
  
  {
    id: 1,
    title: "Python for AI Foundations",
    description: "Start your AI journey by mastering Python programming from scratch.",
    detailedDescription: "This beginner-friendly course empowers you to write clean Python code specifically tailored for AI and Machine Learning projects. With real-world examples and hands-on assignments, you'll transition from a coding novice to someone ready to build AI applications confidently. Perfect if you're just stepping into tech!",
    price: 49,
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.8,
    mentor: "Sarah Connor (AI Developer, OpenAI)",
    language: "English",
    prerequisites: "No prior coding experience required",
    skills: [
      "Python Syntax and Control Structures",
      "Data Structures and Libraries (NumPy, Pandas)",
      "OOP Essentials",
      "Problem-Solving for AI"
    ],
    curriculum: [
      "Introduction to Python Programming",
      "Working with Data in Python",
      "Functions and Object-Oriented Concepts",
      "Python for AI: Libraries and Frameworks",
      "Mini Project: Data-Driven Python App"
    ]
  },
  {
    id: 2,
    title: "Mathematics for Machine Learning",
    description: "Build the solid mathematical intuition needed to excel in AI and ML.",
    detailedDescription: "Without math, AI is like a castle built on sand. This course builds your rock-solid foundation in Linear Algebra, Calculus, Probability, and Statistics — focusing purely on what matters for Machine Learning. You'll finally stop fearing equations and start wielding them like a pro!",
    price: 59,
    duration: "7 Weeks",
    level: "Beginner",
    rating: 4.7,
    mentor: "Dr. Alan Turing Jr. (Research Scientist, DeepMind)",
    language: "English",
    prerequisites: "Basic high school math understanding",
    skills: [
      "Linear Algebra Essentials",
      "Calculus for Gradient Descent",
      "Probability and Statistics for AI",
      "Mathematical Thinking for ML"
    ],
    curriculum: [
      "Linear Algebra: Vectors, Matrices, and Tensors",
      "Calculus: Derivatives and Gradients",
      "Probability: Distributions and Bayes' Theorem",
      "Statistics: Variance, Bias, Confidence Intervals",
      "Connecting Math to Machine Learning Algorithms"
    ]
  },
  {
    id: 3,
    title: "Machine Learning & AI Mastery",
    description: "Go beyond the theory — build real-world ML models from scratch.",
    detailedDescription: "This hands-on course is designed to turn you into an ML practitioner, not just a theorist. From understanding data pipelines to training models and deploying AI solutions, you'll learn to think, design, and execute like a real-world Machine Learning engineer.",
    price: 99,
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.8,
    mentor: "Elena Smith (Lead ML Engineer, Google Brain)",
    language: "English",
    prerequisites: "Basic Python and Math for ML knowledge",
    skills: [
      "Building Machine Learning Pipelines",
      "Training and Optimizing Models",
      "Evaluating Model Performance",
      "Deploying AI Systems"
    ],
    curriculum: [
      "Data Preprocessing and Feature Engineering",
      "Regression, Classification and Clustering",
      "Model Selection and Tuning",
      "Deep Learning Basics with Neural Networks",
      "AI Product Deployment Strategies"
    ]
  },
  {
    id: 4,
    title: "NLP with Transformers & LLMs",
    description: "Master the language of the future: Natural Language Processing with Transformers and LLMs.",
    detailedDescription: "Text is the new gold. This advanced course demystifies Large Language Models like GPT, BERT, and T5. Learn how to fine-tune, prompt-engineer, and deploy LLMs for real-world conversational and generative AI applications.",
    price: 119,
    duration: "6 Weeks",
    level: "Advanced",
    rating: 4.9,
    mentor: "Dr. Sophia Vasquez (Senior Researcher, HuggingFace)",
    language: "English",
    prerequisites: "Python skills + ML Basics",
    skills: [
      "Transformer Architecture Understanding",
      "Prompt Engineering Techniques",
      "Fine-Tuning LLMs",
      "Building Conversational Agents"
    ],
    curriculum: [
      "Natural Language Processing Foundations",
      "Transformer Models Demystified",
      "Working with HuggingFace and OpenAI APIs",
      "Best Practices for Prompt Engineering",
      "Deploying LLM-powered Applications"
    ]
  },
  {
    id: 5,
    title: "Computer Vision with Deep Learning",
    description: "Learn how to teach machines to see, recognize, and interpret the world around them.",
    detailedDescription: "From autonomous vehicles to healthcare imaging, Computer Vision is transforming industries. In this course, you'll learn cutting-edge deep learning techniques like CNNs, YOLO, and Vision Transformers to solve real-world image problems.",
    price: 109,
    duration: "7 Weeks",
    level: "Advanced",
    rating: 4.8,
    mentor: "Alex Zhao (Senior CV Engineer, Tesla AI Team)",
    language: "English",
    prerequisites: "Python and Deep Learning basics",
    skills: [
      "Image Classification and Object Detection",
      "CNN Architectures (ResNet, VGG, YOLO)",
      "Computer Vision Project Building",
      "Transfer Learning and Fine-Tuning"
    ],
    curriculum: [
      "Computer Vision Fundamentals",
      "Convolutional Neural Networks (CNNs)",
      "YOLO and Object Detection Models",
      "Building an Image Classifier Project",
      "Vision Transformers Introduction"
    ]
  },
  {
    id: 6,
    title: "Generative AI with GPT-4",
    description: "Learn how to unleash the creative power of Generative AI models like GPT-4.",
    detailedDescription: "Text, code, music, and art — today, AI can generate everything. This course walks you through the theory, techniques, and real-world application of Generative AI models, with hands-on labs building GPT-4-powered products.",
    price: 129,
    duration: "5 Weeks",
    level: "Professional",
    rating: 4.9,
    mentor: "Maya Tan (Head of Generative AI, Anthropic)",
    language: "English",
    prerequisites: "Solid Python and ML understanding",
    skills: [
      "Building GPT-based Applications",
      "Prompt Tuning for Generative Tasks",
      "Using GPT APIs in Real Projects",
      "Responsible AI and Ethical Deployment"
    ],
    curriculum: [
      "Understanding Generative Models",
      "Inside GPT-4: Architecture and Innovation",
      "Creating Creative Outputs with AI",
      "Deploying Generative Apps",
      "Ethics and Risks of Generative AI"
    ]
  },
  {
    id: 7,
    title: "Data Engineering for AI",
    description: "Learn how to handle, process, and pipeline data efficiently for modern AI systems.",
    detailedDescription: "Data is the lifeblood of AI. This course equips you with the engineering skills to build scalable, clean, and production-ready data pipelines that feed AI/ML systems with accuracy and efficiency.",
    price: 79,
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.7,
    mentor: "Robert King (Senior Data Engineer, Snowflake)",
    language: "English",
    prerequisites: "Basic SQL and Python",
    skills: [
      "Data Wrangling and ETL Processes",
      "Building Scalable Data Pipelines",
      "Cloud-based Data Engineering (AWS, GCP)",
      "Streaming Data for AI Systems"
    ],
    curriculum: [
      "Data Storage and Management Basics",
      "ETL (Extract, Transform, Load) Concepts",
      "Apache Spark and Distributed Data",
      "Building Scalable Pipelines in Cloud",
      "Data Versioning and Governance"
    ]
  },
  {
    id: 8,
    title: "Deploying and Scaling AI Systems",
    description: "Master the real-world process of deploying AI models to production at scale.",
    detailedDescription: "Building an AI model is 10% of the job. Deploying, monitoring, scaling, and managing it in the real world is the real challenge. This course makes you industry-ready with MLOps skills, CI/CD pipelines, and production deployment techniques.",
    price: 139,
    duration: "7 Weeks",
    level: "Professional",
    rating: 4.8,
    mentor: "Dr. Michael Shaw (MLOps Architect, AWS AI Labs)",
    language: "English",
    prerequisites: "Intermediate ML experience",
    skills: [
      "Containerizing AI Models (Docker/Kubernetes)",
      "MLOps and Continuous Deployment",
      "Model Monitoring and Drift Detection",
      "Scaling AI Systems for Millions"
    ],
    curriculum: [
      "MLOps Introduction and Workflow",
      "Containerization: Docker + Kubernetes",
      "Monitoring Deployed Models",
      "Scaling Infrastructure for AI Workloads",
      "CI/CD Pipelines for ML Projects"
    ]
  },
  {
    id: 9,
    title: "AI Product Management Essentials",
    description: "Learn how to design, launch, and manage successful AI-driven products.",
    detailedDescription: "AI isn't just about models — it's about creating products people love. This beginner-to-intermediate course teaches you how to translate AI capabilities into real user value, define success metrics, and lead AI product initiatives, even without coding expertise.",
    price: 79,
    duration: "5 Weeks",
    level: "Beginner",
    rating: 4.7,
    mentor: "Lisa Raynor (AI Product Lead, Meta)",
    language: "English",
    prerequisites: "No coding required",
    skills: [
      "AI Product Thinking",
      "Defining AI Use Cases",
      "Working with AI Teams",
      "Ethical AI Product Development"
    ],
    curriculum: [
      "What Makes an AI Product?",
      "User Research for AI Needs",
      "MVP Building with AI",
      "Scaling AI Products",
      "Responsible AI Design"
    ]
  },
  {
    id: 10,
    title: "Reinforcement Learning from Scratch",
    description: "Teach machines how to make decisions and learn from actions.",
    detailedDescription: "Ever wondered how AI beats humans at chess or powers self-driving cars? Reinforcement Learning (RL) is the secret. This hands-on intermediate course guides you through RL fundamentals, policy gradients, Q-learning, and lets you build your own AI agents!",
    price: 99,
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.8,
    mentor: "Dr. Raj Patel (AI Researcher, DeepMind)",
    language: "English",
    prerequisites: "Basic Python and ML knowledge",
    skills: [
      "Markov Decision Processes",
      "Q-Learning and SARSA",
      "Policy Gradient Methods",
      "Building and Training RL Agents"
    ],
    curriculum: [
      "What is Reinforcement Learning?",
      "Exploring Action-Reward Dynamics",
      "Q-Learning Explained",
      "Policy Gradients and Actor-Critic Methods",
      "Project: Build Your First RL Agent"
    ]
  },
  {
    id: 11,
    title: "AI for Business Leaders",
    description: "A non-technical guide to leveraging AI for business growth and innovation.",
    detailedDescription: "Executives and managers need to understand AI to survive the next decade. This crash course breaks down complex AI concepts into business strategies you can use immediately — from automating workflows to building data-driven cultures.",
    price: 89,
    duration: "4 Weeks",
    level: "Beginner",
    rating: 4.6,
    mentor: "Carla Fernandez (AI Strategy Advisor, BCG)",
    language: "English",
    prerequisites: "No technical background required",
    skills: [
      "AI Opportunity Identification",
      "Building an AI Adoption Roadmap",
      "Evaluating AI Vendors and Tools",
      "Managing AI Risks and Ethics"
    ],
    curriculum: [
      "Demystifying AI: What It Can and Can't Do",
      "Identifying AI Opportunities in Your Business",
      "Building an AI-Ready Organization",
      "Choosing the Right AI Solutions",
      "Ethical Leadership in AI Era"
    ]
  },
  {
    id: 12,
    title: "Advanced Prompt Engineering for LLMs",
    description: "Level up your skills in crafting high-quality prompts for powerful AI outputs.",
    detailedDescription: "Prompts are the new coding. In this advanced course, you'll go beyond basic prompt writing and learn frameworks, chaining techniques, and optimization strategies that turn good LLM responses into *great* ones — a must-have skill for the Generative AI era.",
    price: 79,
    duration: "4 Weeks",
    level: "Advanced",
    rating: 4.9,
    mentor: "Chris Lowell (Prompt Engineer, OpenAI)",
    language: "English",
    prerequisites: "Experience with LLMs (ChatGPT, Claude, etc.)",
    skills: [
      "Zero-shot, Few-shot, and Chain-of-Thought Prompting",
      "Prompt Tuning and Templates",
      "Prompt Chaining for Complex Tasks",
      "Evaluating Prompt Effectiveness"
    ],
    curriculum: [
      "The Science Behind Great Prompts",
      "Advanced Prompt Structures",
      "Prompt Optimization Techniques",
      "Building Prompt Pipelines",
      "Hands-on Prompt Engineering Labs"
    ]
  },
  {
    id: 13,
    title: "Ethical Hacking with AI",
    description: "Learn how AI is transforming cybersecurity — and how to defend against it.",
    detailedDescription: "Hackers use AI. So should defenders. This course explores the intersection of AI and cybersecurity — from building automated penetration testing tools to understanding how adversarial attacks target ML models.",
    price: 119,
    duration: "7 Weeks",
    level: "Advanced",
    rating: 4.7,
    mentor: "David Kim (AI Security Expert, Palo Alto Networks)",
    language: "English",
    prerequisites: "Intermediate Python and Cybersecurity knowledge",
    skills: [
      "AI for Threat Detection",
      "Building AI-Powered Security Tools",
      "Understanding Adversarial ML",
      "Ethical Penetration Testing with AI"
    ],
    curriculum: [
      "AI in Cybersecurity: Opportunities and Risks",
      "Machine Learning for Threat Intelligence",
      "Adversarial Attacks on AI Systems",
      "Building an AI-based Penetration Tester",
      "Ethics and Laws of Cyber AI"
    ]
  },
  {
    id: 14,
    title: "Building AI SaaS Products",
    description: "Turn your AI ideas into full-fledged SaaS businesses.",
    detailedDescription: "Why just build models when you can build businesses? This course walks you through ideating, prototyping, and launching an AI-driven SaaS product from scratch — including handling APIs, billing, scalability, and growth strategies.",
    price: 149,
    duration: "8 Weeks",
    level: "Professional",
    rating: 4.9,
    mentor: "Angela Brooks (Founder, AI Startups Lab)",
    language: "English",
    prerequisites: "Python, APIs, basic product management understanding",
    skills: [
      "Ideating and Validating AI Products",
      "Building Scalable SaaS Architectures",
      "Monetization Strategies for AI SaaS",
      "Growth Hacking for Early-Stage Products"
    ],
    curriculum: [
      "Choosing Your AI SaaS Idea",
      "Building APIs with Flask/FastAPI",
      "Setting Up Scalable Backend Infrastructure",
      "Integrating Payments and Billing",
      "Launching and Growing Your AI SaaS"
    ]
  },
  {
    id: 15,
    title: "AI in Healthcare: Applications and Ethics",
    description: "Explore how AI is transforming healthcare — responsibly and effectively.",
    detailedDescription: "Healthcare is being reshaped by AI — from diagnostics to patient care personalization. This course blends technical knowledge with ethical frameworks to ensure you're prepared to innovate responsibly in this sensitive industry.",
    price: 89,
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.7,
    mentor: "Dr. Emily Zhao (Medical AI Expert, Mayo Clinic)",
    language: "English",
    prerequisites: "Basic ML knowledge",
    skills: [
      "Medical Imaging with AI",
      "Predictive Analytics for Healthcare",
      "Privacy and HIPAA in AI",
      "Ethical AI for Health Applications"
    ],
    curriculum: [
      "AI Applications in Diagnostics",
      "Personalized Medicine with ML",
      "Medical Data Challenges",
      "Privacy, Security, and Ethics",
      "Future of AI in Healthcare"
    ]
  },
  {
    id: 16,
    title: "Time Series Forecasting with AI",
    description: "Predict the future with machine learning and deep learning.",
    detailedDescription: "Time series data powers stock predictions, demand forecasting, and more. This technical course teaches you ARIMA models, LSTM networks, and cutting-edge transformer approaches for highly accurate forecasting.",
    price: 99,
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.8,
    mentor: "Ankit Desai (Senior Data Scientist, Amazon)",
    language: "English",
    prerequisites: "ML basics + Python",
    skills: [
      "Feature Engineering for Time Series",
      "ARIMA and Prophet Models",
      "LSTM and Sequence Modeling",
      "Transformer Models for Forecasting"
    ],
    curriculum: [
      "Time Series Fundamentals",
      "Classical Forecasting Methods",
      "Deep Learning for Time Series",
      "Evaluating Forecast Models",
      "Forecasting Project: Sales Demand Prediction"
    ]
  },
  {
    id: 17,
    title: "AI for Finance and Trading",
    description: "Leverage AI to analyze markets and build smart trading systems.",
    detailedDescription: "Financial markets are ripe for AI disruption. This course dives into predictive modeling for stocks, cryptocurrencies, and risk assessment using cutting-edge ML techniques — responsibly and strategically.",
    price: 119,
    duration: "7 Weeks",
    level: "Advanced",
    rating: 4.7,
    mentor: "Richard Wang (Quantitative Analyst, Goldman Sachs)",
    language: "English",
    prerequisites: "Intermediate ML + Finance Basics",
    skills: [
      "Financial Time Series Modeling",
      "Algorithmic Trading with ML",
      "Risk Management with AI",
      "Backtesting Trading Strategies"
    ],
    curriculum: [
      "Market Prediction Fundamentals",
      "Building ML Trading Models",
      "Portfolio Optimization with AI",
      "AI Risk Management Tools",
      "Deploying Live Trading Bots"
    ]
  },
  {
    id: 18,
    title: "Voice AI: Building Alexa and Siri-like Applications",
    description: "Create intelligent voice-powered experiences and conversational AI agents.",
    detailedDescription: "Voice is the next frontier. This hands-on course shows you how to build voice-enabled applications using speech recognition, NLP, and voice assistant frameworks — unlocking new user experiences across industries.",
    price: 109,
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.8,
    mentor: "Amelia Hart (Voice AI Developer, Amazon Alexa Team)",
    language: "English",
    prerequisites: "Python + NLP basics",
    skills: [
      "Speech-to-Text Systems",
      "Voice Assistant Frameworks",
      "Dialog Management and NLP",
      "Deploying Voice AI Applications"
    ],
    curriculum: [
      "Speech Recognition Basics",
      "Building Intent-based Systems",
      "Voice Interaction Design",
      "Hands-on: Build a Voice Bot",
      "Voice AI Deployment Best Practices"
    ]
  }


];

function Courses({ addToCart }) {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced", "Professional"];

  const filteredCourses = selectedLevel === "All"
    ? coursesList
    : coursesList.filter(course => course.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Explore LearnAI Courses</h1>
          <p style={styles.heroSubtitle}>
            Master AI, Machine Learning, LLMs, and deploy real-world solutions at scale.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={styles.mainSection}>
        {/* Filter Buttons */}
        <div style={styles.filters}>
          {levels.map(level => (
            <button
              key={level}
              style={selectedLevel === level ? styles.activeFilterButton : styles.filterButton}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div style={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} addToCart={addToCart} />
            ))
          ) : (
            <p style={styles.noCoursesText}>No courses found for "{selectedLevel}" level.</p>
          )}
        </div>
      </section>
    </>
  );
}

// ✨ Styles
const styles = {
  heroSection: {
    background: "linear-gradient(135deg, #0a0a23, #1e1e3f)",
    padding: "100px 20px 70px",
    textAlign: "center",
    color: "#ffffff",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  mainSection: {
    padding: "60px 20px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "40px",
  },
  filterButton: {
    padding: "10px 20px",
    fontSize: "15px",
    backgroundColor: "#ffffff",
    border: "2px solid #007bff",
    color: "#007bff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  activeFilterButton: {
    padding: "10px 20px",
    fontSize: "15px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "2px solid #007bff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  coursesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "20px",
    padding: "0 10px",
  },
  noCoursesText: {
    textAlign: "center",
    fontSize: "18px",
    color: "#666",
  },
};

export default Courses;
