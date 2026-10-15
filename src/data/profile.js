// ---------------------------------------------------------------------------
// Single source of truth for Mohammed Maaz Arfaat's portfolio.
// Verified academic credentials, projects, and achievements.
// ---------------------------------------------------------------------------

export const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/mohammed-maaz-arfaat-83a846378/";

export const MEDI_VAULT_POST =
  "https://www.linkedin.com/posts/mohammed-maaz-arfaat-83a846378_aihackathon-medivault-healthcareinnovation-activity-7459956339155439616-E5mZ";

export const profile = {
  name: "Mohammed Maaz Arfaat",
  displayName: "MOHAMMED MAAZ ARFAAT",
  shortName: "Maaz Arfaat",
  monogram: "MA",
  tagline: "Software Developer · Systems Builder · Applied AI",
  location: "Hyderabad, India",
  photo: "/profile.jpg",

  links: {
    email: "maazarfaatchoice153@gmail.com",
    linkedin: LINKEDIN_PROFILE,
    github: "https://github.com/MaazArfaat",
  },

  personalStatement:
    "Engineering software means solving genuine friction. I learn by building real systems, testing them under scrutiny, and turning technical curiosity into working software.",

  academic: {
    name: "MOHAMMED MAAZ ARFAAT",
    degree: "B.Tech in Information Technology",
    institution: "Vardhaman College of Engineering, Hyderabad",
    currentYear: "3rd year",
    graduation: "Expected graduation: 2028",
    cgpa: "9.48 / 10",
    cgpaNote: "Through end of 2nd year",
  },

  hero: {
    eyebrow: "PORTFOLIO · 2026",
    role: "SOFTWARE DEVELOPER",
    headlineLine1: "SOFTWARE",
    headlineLine2: "DEVELOPER",
    nameBlock: ["MOHAMMED", "MAAZ", "ARFAAT."],
    tags: ["DATA SCIENCE", "WEB DEVELOPMENT"],
    status: "Available for Internships & Engineering Sprints",
    scrollHint: "Scroll to explore",
  },

  // Exactly 5 projects in requested order with screenshots from public/projects/
  projects: [
    {
      id: "civicrisk-ai",
      number: "01",
      name: "CivicRisk AI",
      subtitle: "Predictive Municipal Hazard Escalation System",
      category: "AI & Computer Vision",
      status: "Prototype Validated",
      image: "/projects/civicrisk-ai.png",
      githubUrl: "https://github.com/MaazArfaat",
      summary:
        "Predicting which small infrastructure defects (potholes, structural fractures, drainage clogs) could escalate into major public hazards under environmental and traffic stress.",
      techStack: ["Python", "OpenCV", "PyTorch", "FastAPI", "PostgreSQL"],
    },
    {
      id: "internal-marks-management-system",
      number: "02",
      name: "Internal Marks Management System",
      subtitle: "Multi-Tier Academic Continuous Evaluation System",
      category: "Enterprise Java / MVC",
      status: "Tomcat Deployed",
      image: "/projects/internal-marks-management-system.png",
      githubUrl: "https://github.com/MaazArfaat",
      summary:
        "A web application for managing student internal marks, departmental faculty workflows, and secure academic grade persistence.",
      techStack: ["Java EE", "JSP & Servlets", "MySQL", "Apache Tomcat", "Maven"],
    },
    {
      id: "smart-hostel-management-system",
      number: "03",
      name: "Smart Hostel Management System",
      subtitle: "Campus Hostel Administration & Student Records Platform",
      category: "Enterprise Web App",
      status: "Production Deployed",
      image: "/projects/smart-hostel-management-system.png",
      githubUrl: "https://github.com/MaazArfaat",
      summary:
        "A web application for hostel administration, room allocation workflows, attendance tracking, and student records management.",
      techStack: ["Java", "MySQL", "Web Technologies", "REST APIs"],
    },
    {
      id: "smart-run-ai-plus",
      number: "04",
      name: "Smart Run AI+",
      subtitle: "AI-Powered Sports Analytics Platform",
      category: "Sports Tech & AI",
      status: "Hackathon Finalist",
      image: "/projects/smart-run-ai-plus.png",
      githubUrl: "https://github.com/MaazArfaat",
      summary:
        "An AI-powered sports analytics platform built in a 48-hour sprint at Gachibowli Stadium, tracking athlete telemetry and turning raw data into performance-improving insights.",
      techStack: ["Python", "Computer Vision", "Telemetry Analytics", "AI Models"],
    },
    {
      id: "medivault",
      number: "05",
      name: "MediVault",
      subtitle: "Smart Medicine Lifecycle & Management Platform",
      category: "Healthcare Tech · Full Stack",
      status: "Hackathon Winner",
      image: "/projects/medivault.png",
      linkedinUrl: MEDI_VAULT_POST,
      summary:
        "A medicine-management project focused on medicine information, automated expiry-date tracking, dose reminders, and digital prescription workflows.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  ],

  // Verified achievements — 10 standardized entries with uniform structure
  achievements: [
    {
      id: "open-build-week",
      title: "First Prize — Open Build Week Hackathon",
      organization: "Open Build Week · Lords Academy",
      award: "First Prize",
      prize: "₹15,000 Cash Award",
      year: "2026",
      summary:
        "Won First Prize with a ₹15,000 cash award at the Open Build Week Hackathon at Lords Academy for TESTQ, recognized by technical judges during the final project evaluation.",
      images: [
        "/achievement-images/open-build-week/1.jpg",
        "/achievement-images/open-build-week/2.jpg",
        "/achievement-images/open-build-week/3.jpg",
        "/achievement-images/open-build-week/4.jpg",
      ],
      captions: [
        "Award presentation: Sanket Babde (Founder & CEO, Great Hire) presenting the Winner Trophy on stage under celebration confetti",
        "Builders Day 2026 Winner Trophy & OpenBuild Week Participant Badge from Lords Skill Academy",
        "Top winners on stage with HackUnion organizers holding Builders Day trophies",
        "Builders Day winners on stage with HackUnion organizer Abdul Vasay",
      ],
    },
    {
      id: "tech-horizon-domain-excellence",
      title: "Domain Excellence Award — Tech Horizon 1.0",
      organization: "Tech Horizon 1.0 · National Level Hackathon",
      award: "Domain Excellence (Healthcare)",
      prize: "Domain Winner",
      year: "2026",
      summary:
        "Awarded the Domain Excellence Award in Healthcare for MediVault at the Tech Horizon 1.0 National Level Hackathon, evaluated for healthcare impact and architectural execution.",
      images: [
        "/achievement-images/domain-excellence-healthcare/2.jpg",
        "/achievement-images/domain-excellence-healthcare/1.jpg",
        "/achievement-images/domain-excellence-healthcare/3.jpg",
        "/achievement-images/domain-excellence-healthcare/4.jpg",
      ],
      captions: [
        "Official Certificate of Appreciation — Domain Excellence in Healthcare (Tech Horizon 1.0)",
        "Team receiving certificates on stage at Tech Horizon 1.0",
        "MediVault technical presentation to IEEE-SMC panel over Google Meet",
        "Live digital healthcare platform demonstration to judges",
      ],
    },
    {
      id: "great-hire-letter-of-recommendation",
      title: "Letter of Recommendation — Great Hire",
      organization: "Great Hire · Founder & CEO Recognition",
      award: "Individual Recommendation",
      prize: "Executive Recognition",
      year: "2026",
      summary:
        "Received an individual Letter of Recommendation from Sanketh Babdhe, Founder & CEO of Great Hire, recognizing my technical competence, product thinking, ownership, problem-solving, and execution during Open Build Week.",
      links: [
        { label: "Sanketh Babdhe", url: "https://www.linkedin.com/in/sanket-babde-jobnskills/" },
        { label: "Great Hire", url: "https://www.linkedin.com/company/greathire/" },
      ],
      images: [
        "/achievement-images/great-hire-letter-of-recommendation/1.jpg",
        "/achievement-images/great-hire-letter-of-recommendation/2.jpeg",
        "/achievement-images/great-hire-letter-of-recommendation/3.jpeg",
      ],
      captions: [
        "Founder & CEO of Great Hire, Sanket Babde, presenting the Letter of Recommendation",
        "Official Letter of Recommendation — Page 1 (Merit Endorsement)",
        "Official Letter of Recommendation — Page 2 (Signed by Sanket Babde, Founder & CEO)",
      ],
    },
    {
      id: "highest-panel-score",
      title: "Highest Panel Score (≈170 Teams)",
      organization: "Bower School of Entrepreneurship AI Hackathon",
      award: "Rank 1 Evaluation",
      prize: "Top Score",
      year: "2026",
      summary:
        "Awarded the highest evaluation panel score among approximately 170 participating teams for MediVault's healthcare impact, technical architecture, and live defense.",
      images: [
        "/achievement-images/highest-panel-score-ai-hackathon/1.jpg",
        "/achievement-images/highest-panel-score-ai-hackathon/2.jpg",
        "/achievement-images/highest-panel-score-ai-hackathon/3.jpg",
        "/achievement-images/highest-panel-score-ai-hackathon/4.jpg",
      ],
      captions: [
        "Bower School of Entrepreneurship AI Hackathon stage presentation",
        "Official Rank 1 Evaluation certificate",
        "Healthcare platform defense before technical panel",
        "Certificate of achievement",
      ],
    },
    {
      id: "sports-hackathon-finalist",
      title: "Top 6 Finalist — Sports Hackathon",
      organization: "48-Hour Sports Hackathon · Gachibowli Stadium",
      award: "Top 6 Project",
      prize: "Finalist",
      year: "2026",
      summary:
        "Built Smart Run AI+ in an intensive 48-hour sprint at Gachibowli Stadium, tracking athlete telemetry and selected among the top 6 projects.",
      images: [
        "/achievement-images/top-6-sports-hackathon/1.jpg",
        "/achievement-images/top-6-sports-hackathon/2.jpg",
        "/achievement-images/top-6-sports-hackathon/3.jpg",
        "/achievement-images/top-6-sports-hackathon/4.jpg",
      ],
      captions: [
        "48-hour sprint development floor at Gachibowli Stadium",
        "Athlete telemetry demonstration",
        "Judges evaluation and finalist selection",
        "Top 6 Finalist certificate of achievement",
      ],
    },
    {
      id: "google-student-ambassador",
      title: "Google Student Ambassador 2026",
      organization: "Google",
      award: "Campus Ambassador",
      prize: "Google Ambassador",
      year: "2026",
      summary:
        "Selected for Google's Student Ambassador Program; representing Google Gemini, organizing campus developer workshops, and leading student tech initiatives.",
      images: [
        "/achievement-images/google-student-ambassador/1.jpg",
        "/achievement-images/google-student-ambassador/2.jpg",
      ],
      captions: [
        "Google Student Ambassador official onboarding badge",
        "Google Gemini campus developer workshop session",
      ],
    },
    {
      id: "ieee-nano-chemistry",
      title: "IEEE Nano Chemistry — 1st Prize",
      organization: "IEEE · PPT Presentation Competition",
      award: "1st Prize Winner",
      prize: "1st Prize",
      year: "2026",
      summary:
        "Awarded First Prize in technical research presentation on Nano Chemistry engineering applications under IEEE.",
      images: [
        "/achievement-images/ieee-nano-chemistry-1st-prize/1.jpg",
        "/achievement-images/ieee-nano-chemistry-1st-prize/2.jpg",
        "/achievement-images/ieee-nano-chemistry-1st-prize/3.jpg",
      ],
      captions: [
        "IEEE technical research presentation session",
        "Official 1st Prize Certificate awarded under IEEE",
        "Award ceremony photograph",
      ],
    },
    {
      id: "ieee-international-conference",
      title: "IEEE International Conference — 2nd Prize",
      organization: "IEEE International Conference",
      award: "2nd Prize Winner",
      prize: "2nd Prize",
      year: "2026",
      summary:
        "Secured Second Prize in the technical poster presentation competition at the IEEE International Conference.",
      images: [
        "/achievement-images/ieee-international-conference-2nd-prize/1.jpg",
        "/achievement-images/ieee-international-conference-2nd-prize/2.jpg",
        "/achievement-images/ieee-international-conference-2nd-prize/3.jpg",
      ],
      captions: [
        "IEEE International Conference poster session defense",
        "Official 2nd Prize Winner certificate",
        "Conference award ceremony",
      ],
    },
    {
      id: "national-maths-day",
      title: "National Mathematics Day — 2nd Prize",
      organization: "National Mathematics Day",
      award: "2nd Prize Winner",
      prize: "2nd Prize",
      year: "2026",
      summary:
        "Won Second Prize in the technical presentation competition commemorating National Mathematics Day.",
      images: [
        "/achievement-images/national-mathematics-day-2nd-prize/1.jpg",
        "/achievement-images/national-mathematics-day-2nd-prize/2.jpg",
        "/achievement-images/national-mathematics-day-2nd-prize/3.jpg",
        "/achievement-images/national-mathematics-day-2nd-prize/4.jpg",
      ],
      captions: [
        "Mathematics Day technical presentation session",
        "Official 2nd Prize Certificate",
        "Evaluation panel review",
        "Award presentation",
      ],
    },
    {
      id: "advertisement-competition",
      title: "Advertisement Competition — 2nd Prize",
      organization: "Campus Technical Fest",
      award: "2nd Prize Winner",
      prize: "2nd Prize",
      year: "2026",
      summary:
        "Won Second Prize in creative technical campaign strategy and product positioning.",
      images: [
        "/achievement-images/advertisement-competition-2nd-prize/1.jpg",
      ],
      captions: [
        "Technical advertising and campaign strategy certificate",
      ],
    },
  ],

  // Technical Training, Offers & Student Leadership (including Google Ambassador)
  experience: [
    {
      role: "Google Student Ambassador 2026",
      org: "Google",
      period: "2026 — Present",
      type: "Ambassadorship",
      points: [
        "Selected for Google's Student Ambassador Program; representing Google Gemini and ecosystem developer tools across campus.",
        "Organizing technical workshops, hackathon mentoring circles, and AI-focused student initiatives.",
      ],
    },
    {
      role: "Generative AI & Cloud Computing Trainee",
      org: "IBM SkillsBuild × Bharat Cares × AICTE",
      period: "June – July 2026",
      type: "Technical Training",
      points: [
        "Completed a 6-week curriculum on Generative AI foundation models, prompt engineering, and cloud infrastructure.",
        "Engineered and deployed AI microservices connected to modern web user interfaces.",
      ],
    },
    {
      role: "AI Annotation Internship — Selected",
      org: "TAO Digital",
      period: "Offered · ₹10k/month Stipend",
      type: "Technical Selection",
      points: [
        "Cleared competitive technical interviews for an on-site AI annotation role; declined to focus on core B.Tech academics.",
      ],
    },
    {
      role: "Class Representative",
      org: "Vardhaman College of Engineering",
      period: "2024 — Present",
      type: "Campus Leadership",
      points: [
        "Serving as Class Representative, coordinating class communication, sharing faculty updates, and helping address student concerns.",
      ],
    },
  ],

  // Technologies for the horizontal scrolling marquee
  technologies: [
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "C", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Vite", category: "Build Tool" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "JSP & Servlets", category: "Enterprise" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "PyTorch", category: "AI / ML" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Git", category: "DevOps" },
    { name: "GitHub", category: "DevOps" },
    { name: "Maven", category: "Build Tool" },
    { name: "Apache Tomcat", category: "Server" },
  ],

  contact: {
    heading: "Let's build something enduring.",
    intro:
      "Available for summer engineering internships, hackathons, and software collaborations. My inbox is always open.",
    cta: "Send an Email",
    availability: "Available for Internships & Hackathons",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Leadership", href: "#experience" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
