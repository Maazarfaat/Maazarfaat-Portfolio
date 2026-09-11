// ---------------------------------------------------------------------------
// Single source of truth for every fact on this portfolio.
// If you update anything (CGPA, links, new projects), edit this file only.
//
// LinkedIn URL conventions:
//  - LINKEDIN_PROFILE  → the user's general profile. Used ONLY by the general
//    "LinkedIn" profile buttons (Hero, Contact, Footer, Navbar).
//  - linkedinUrl on an item → the EXACT post that item was shared as.
//    A value that contains "/posts/" is rendered as "View post ↗".
//  - linkedinUrl: null → no verified post exists for this item; no link is
//    rendered. We NEVER invent activity IDs or fake post URLs. Paste the real
//    post URL here (copied from LinkedIn) to wire an item to its post.
// ---------------------------------------------------------------------------

export const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/mohammed-maaz-arfaat-83a846378/";

export const MEDI_VAULT_POST =
  "https://www.linkedin.com/posts/mohammed-maaz-arfaat-83a846378_aihackathon-medivault-healthcareinnovation-activity-7459956339155439616-E5mZ";

export const profile = {
  name: "Mohammed Maaz Arfaat",
  shortName: "Maaz Arfaat",
  monogram: "MA",
  tagline: "IT Undergraduate · Builder · AI Enthusiast",
  summary:
    "Student developer at Vardhaman College of Engineering building with AI, cloud and software — powered by a habit of learning by building, participating and networking.",
  location: "Hyderabad, India",
  photo: "/profile.jpg",

  links: {
    email: "maazarfaatchoice153@gmail.com",
    linkedin: LINKEDIN_PROFILE,
    github: "https://github.com/MaazArfaat",
  },

  personalStatement:
    "From ideas to working products — I build, experiment and learn through technology, hackathons and real-world projects.",

  hero: {
    headline: "I build. I learn. I participate.",
    intro:
      "I'm an Information Technology undergraduate who turns curiosity into shippable things — healthcare tech at hackathons, AI experiments, and side projects that stretch what I know.",
    scrollHint: "Scroll to explore",
  },

  about: {
    statement:
      "A student developer who builds his way to learning.",
    paragraphs: [
      "I'm a second-year IT undergraduate at Vardhaman College of Engineering, Hyderabad, with a current CGPA of 9.48/10. Software is my craft and AI is where I'm headed — but I didn't pick this path in a lecture hall. I picked it by building a medicine-management platform, losing sleep over a 48-hour sports hackathon, and clearing internship technical interviews before my coursework told me I was \"ready\".",
      "My learning loop is simple: build something, put it in front of judges and mentors, learn what breaks, do it again. That loop has taken Medi Vault from a classroom idea to a Domain Excellence winner at a national-level hackathon — and it's why I treat every stackoverflow tab, community meetup and judged demo as part of the same curriculum.",
      "Beyond code, I'm active in the technology ecosystem — as a Google Student Ambassador, class representative since my first year, and a regular at developer meetups across Hyderabad. I believe the best developers are built in communities, not in isolation.",
    ],
  },

  education: {
    school: "Vardhaman College of Engineering",
    schoolLocation: "Hyderabad, India",
    degree: "B.Tech in Information Technology",
    period: "2024 — 2028",
    cgpa: "9.48 / 10",
    cgpaNote: "Current CGPA",
    graduation: "Expected graduation 2028",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Object-Oriented Programming",
      "Java",
      "Database Management Systems",
      "Artificial Intelligence",
      "Web Technologies",
    ],
  },

  projects: {
    featured: {
      name: "Medi Vault",
      subtitle: "Smart Medicine Management System",
      category: "Healthcare · Full Stack",
      flag: "Flagship project",
      linkedinUrl: MEDI_VAULT_POST,
      description:
        "A healthcare-focused medicine management platform built for patients, hospitals, pharmacies and wholesalers — designed to make medicine workflows safer and simpler.",
      features: [
        "Medicine expiry-date tracking, so stock is never sold or used past its date",
        "Automated reminder notifications for doses and renewals",
        "Prescription management with a clean, structured workflow",
        "Medicine categorization for easy organisation across roles",
        "Healthcare-focused workflows tailored to each audience",
      ],
      highlights: [
        {
          title: "Domain Excellence Award — Healthcare",
          detail: "Tech Horizon 1.0, National Level Hackathon",
        },
        {
          title: "International presentation",
          detail: "Medi Vault showcased live at Hacknovate 7.0, International Hybrid Hackathon",
        },
        {
          title: "Highest panel score",
          detail: "Bower School of Entrepreneurship AI Hackathon (≈170 participating teams)",
        },
      ],
    },
    secondary: [
      {
        name: "Smart Run AI Plus",
        subtitle: "AI-Powered Sports Analytics Platform",
        description:
          "Built in a 48-hour sports hackathon at Gachibowli Stadium. Tracks athlete performance and turns raw data into analytics-driven insights aimed at improving training and performance.",
        achievements: ["Selected among the Top 6 projects"],
        linkedinUrl: null,
      },
    ],
    futureNote: "More builds in progress — I'll add them here as they ship.",
  },

  achievements: {
    flagship: [
      {
        title: "Google Student Ambassador 2026",
        detail:
          "Selected for Google's Student Ambassador Program; involved with Google Gemini and community initiatives.",
        year: "2026",
        linkedinUrl: null,
      },
      {
        title: "Domain Excellence Award — Healthcare",
        detail:
          "Tech Horizon 1.0, National Level Hackathon · for Medi Vault",
        year: "2026",
        linkedinUrl: MEDI_VAULT_POST,
      },
      {
        title: "Highest Panel Score",
        detail:
          "Bower School of Entrepreneurship AI Hackathon · for Medi Vault",
        year: "2026",
        linkedinUrl: MEDI_VAULT_POST,
      },
      {
        title: "Top 6 Finalist",
        detail: "48-hour Sports Hackathon, Gachibowli Stadium · for Smart Run AI Plus",
        year: "2026",
        linkedinUrl: null,
      },
    ],
    competitions: [
      { rank: "1st Prize", title: "IEEE Nano Chemistry — PPT Presentation Competition", year: "2026" },
      { rank: "2nd Prize", title: "IEEE International Conference — Poster Presentation Competition", year: "2026" },
      { rank: "2nd Prize", title: "National Mathematics Day — Poster Presentation Competition", year: "2026" },
      { rank: "2nd Prize", title: "Advertisement Promotion Competition", year: "2026" },
    ],
    note: [
      "Presented Medi Vault at Hacknovate 7.0, an international hybrid hackathon.",
      "Cleared the technical interview process for a 3-month AI Annotation internship at TAO Digital — selected, but declined on-site placement due to academic commitments.",
    ],
  },

  experience: [
    {
      role: "Generative AI & Cloud Computing Trainee",
      org: "IBM SkillsBuild × Bharat Cares × AICTE",
      period: "June – July 2026 · 6 weeks",
      year: "2026",
      type: "Completed internship",
      linkedinUrl: null,
      points: [
        "Completed a structured 6-week internship program.",
        "Gained hands-on exposure to Generative AI concepts and Cloud Computing fundamentals.",
        "Built working knowledge of how modern AI and cloud systems power real products.",
      ],
    },
    {
      role: "AI Annotation Internship — Selected",
      org: "TAO Digital",
      period: "3-month on-site · Offered · ₹10,000/month stipend",
      year: "2026",
      type: "Selection",
      linkedinUrl: null,
      points: [
        "Cleared the technical interview process for a 3-month, on-site AI Annotation internship.",
        "Selected as an intern — not taken up because the on-site schedule conflicted with my academic commitments.",
      ],
      statusNote:
        "I cleared the selection process but declined the on-site placement to protect my academic year.",
    },
  ],

  community: {
    heading: "Always learning beyond the classroom.",
    blurb:
      "Hackathons, meetups and builder weeks are where I sharpen what lectures only introduce. A snapshot of the ecosystem I show up to:",
    events: [
      {
        name: "Cafe Compute 2026",
        place: "Hyderabad",
        focus: ["AI", "Generative AI", "LLMs", "High-performance computing"],
        note: "Connected with developers and technology enthusiasts over hands-on talks.",
        linkedinUrl: null,
      },
      {
        name: "OpenBuild Week 2026",
        place: "HackUnion × Interledger × GitHub Education",
        focus: ["Builder Challenge", "Open source", "Collaboration"],
        note: 'Worked with teammates on "TestQ" — an idea for identifying issues in AI-generated apps while minimising unwanted UI/UX changes. Shared feedback on stage.',
        linkedinUrl: null,
      },
      {
        name: "StackFlow 2.0",
        place: "Hyderabad",
        focus: ["Agentic AI", "AI Security", "Cloud Security", "DevOps", "Observability"],
        note: "A deep-dive event exploring the modern AI + cloud engineering stack.",
        linkedinUrl: null,
      },
      {
        name: "Global Fabric Days 2026",
        place: "Microsoft Campus, Hyderabad",
        focus: ["Microsoft Fabric", "Power BI", "Azure AI", "Data Engineering", "Enterprise Analytics"],
        note: "Immersed in Microsoft's data platform and enterprise analytics ecosystem.",
        linkedinUrl: null,
      },
      {
        name: "IgniteHQ",
        place: "Microsoft Hyderabad",
        focus: ["Leadership", "Communication", "Confidence", "Personal branding"],
        note: "Learned from professionals about presence and growth — and their lived experience.",
        linkedinUrl: null,
      },
      {
        name: "Team1 India Speedrun",
        place: "DraperU India",
        focus: ["Avalanche", "Web3", "Blockchain", "Community-driven innovation"],
        note: "Explored where decentralised tech meets community-driven building.",
        linkedinUrl: null,
      },
    ],
  },

  skills: {
    byGroup: [
      {
        label: "Programming",
        items: ["C", "Java", "Python", "HTML", "CSS"],
      },
      {
        label: "Computer Science",
        items: ["Data Structures", "Algorithms", "DBMS", "Operating Systems"],
      },
      {
        label: "Web",
        items: ["React", "HTML", "CSS"],
      },
      {
        label: "AI",
        items: ["Artificial Intelligence", "Generative AI", "Cloud Computing"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "VS Code"],
      },
    ],
    note: "Honest rather than inflated — a growing list, not finished competencies.",
  },

  certifications: [
    {
      title: "Programming Using Java",
      org: "Infosys Springboard",
      tag: "Certification",
      linkedinUrl: null,
    },
    {
      title: "Copado AI / Salesforce DevOps",
      org: "Copado Certified",
      tag: "Professional credential",
      linkedinUrl: null,
    },
    {
      title: "AI Skills Fest 2026",
      org: "Microsoft",
      tag: "Badge",
      linkedinUrl: null,
    },
  ],

  contact: {
    heading: "Let's build something.",
    intro:
      "Whether it's a hackathon team, an interesting project, or just a conversation about AI and building — my inbox is open.",
    cta: "Say hello",
    availability: "Currently open to hackathon teams, internships and build collaborations.",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Experience", href: "#experience" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ],
};
