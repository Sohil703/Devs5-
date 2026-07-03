export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  info?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: { name: string; level: number }[];
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resumeUrl: string;
  availability: "Available" | "Almost Booked" | "In Project";
  location: string;
  avatar: string;
  photo: string;
  timeline: TimelineItem[];
  education: EducationItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "dashboards" | "erp-crm" | "ecommerce" | "custom";
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  color: string;
  screenshot: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface WhyHireUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ashad",
    name: "Ashad Khira",
    role: "Tech Lead",
    experience: "6+ Years",
    bio: "I'm a Tech Lead with strong full-stack experience, focused on building scalable, high-quality applications and guiding teams toward technical excellence. I enjoy making informed technical decisions, mentoring developers, and delivering reliable and efficient software solutions.\n\nI specialize in designing scalable architectures and infrastructure development, making key technical decisions, mentoring developers, and ensuring smooth end-to-end delivery. My strong background in back-end development allows me to bridge communication between design, development, and deployment teams seamlessly.",
    email: "hello@ashad.dev",
    phone: "+91 9537099393",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "/ashad-khira-resume.pdf",
    availability: "Available",
    location: "Ahmedabad, Gujarat, India",
    avatar: "👨‍💻",
    photo: "/ashad-khira.png",
    skills: [
      { name: "Python & Django/FastAPI", level: 95 },
      { name: "Node.js & Backend", level: 90 },
      { name: "Databases (MongoDB/SQL/Redis)", level: 91 },
      { name: "DevOps (Docker/AWS/Nginx)", level: 88 },
      { name: "Frontend (JS/Bootstrap)", level: 87 }
    ],
    timeline: [
      {
        company: "X-Byte Enterprise Solutions",
        role: "Technical Team Leader",
        period: "Aug 2025 — Present",
        description: "Working as Technical Team Leader at X-Byte. My role involves leading the team, resolving technical challenges at the R&D level, and developing infrastructure.",
        current: true
      },
      {
        company: "X-Byte Enterprise Solutions",
        role: "Senior Python Developer",
        period: "Jan 2023 — Aug 2025",
        description: "Worked as a Senior Python Developer at X-Byte. My responsibilities included developing full-stack websites, building web scraping pipelines, and creating APIs.",
        current: false
      },
      {
        company: "SSUSPL (Specific Step)",
        role: "Support Executive (MIS)",
        period: "Feb 2019 — Dec 2022",
        description: "Worked at SSUSPL (Specific Step) as a Support Executive. My role involved monitoring data and working as an MIS resource.",
        current: false
      },
      {
        company: "Aegis Ltd.",
        role: "Customer Care Executive",
        period: "Jun 2018 — Jan 2019",
        description: "Worked at Aegis Ltd. as a Customer Care Executive. My role involved handling and guiding customers over inbound calls.",
        current: false
      }
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        school: "Government MCA college (Gujarat Technological University)",
        year: "Jun 2021 — May 2023",
        info: "I have completed my Master's degree in Computer Applications from the Government MCA college under the Gujarat Technological University."
      }
    ]
  },
  {
    id: "sohil",
    name: "Sohil Sumra",
    role: "React Developer",
    experience: "3+ Years",
    bio: "Passionate React Developer specializing in building modern user-facing web applications, responsive user interfaces, and robust frontend architectures. Expert in TypeScript, Tailwind CSS, and Tauri desktop application development.",
    email: "sohilsumra703@gmail.com",
    phone: "+91 97271 61462",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Himmatnagar, Gujarat, India",
    avatar: "🚀",
    photo: "/sohil-sumra.jpg",
    skills: [
      { name: "React & NestJS", level: 93 },
      { name: "JavaScript & TypeScript", level: 92 },
      { name: "Tailwind CSS & Material UI", level: 90 },
      { name: "Tauri & Desktop Apps", level: 82 },
      { name: "Rust & Backend Logic", level: 75 }
    ],
    timeline: [
      {
        company: "Emaad Infotech",
        role: "React Developer",
        period: "2023 — Present",
        description: "Develop new user-facing features using React.js and related front-end technologies. Translate UI/UX designs into responsive web pages. Integrate APIs and optimize application for scalability and accessibility.",
        current: true
      },
      {
        company: "Xipra Technology",
        role: "Frontend Developer",
        period: "2022 — 2023",
        description: "Developed responsive, high-performance UI components using HTML5, CSS3, and JavaScript. Built dynamic features and integrated data from APIs. Optimized layout performance.",
        current: false
      }
    ],
    education: [
      {
        degree: "Bachelor of Commerce (B.Com)",
        school: "HL College of Commerce (Gujarat University)",
        year: "2019 — 2022"
      }
    ]
  },
  {
    id: "ishaan",
    name: "Ishaan Sharma",
    role: "UI/UX & React Developer",
    experience: "3+ Years",
    bio: "Creative React Developer specializing in converting Figma designs into pixel-perfect web interfaces. Expert in interactive animations (Framer Motion) and creating reusable component libraries using Radix UI and Tailwind CSS.",
    email: "ishaan@antigravity-devs.com",
    phone: "+91 98765 43212",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Almost Booked",
    location: "Pune, India",
    avatar: "🎨",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "Tailwind CSS & CSS Grid", level: 96 },
      { name: "Framer Motion & Animations", level: 94 },
      { name: "Figma UI/UX Prototyping", level: 91 },
      { name: "Shadcn / Radix / Chakra UI", level: 93 }
    ],
    timeline: [
      {
        company: "Studio Interactive",
        role: "UI/UX React Engineer",
        period: "2023 — Present",
        description: "Crafting beautiful SaaS interfaces and interactive dashboards, creating and maintaining the internal Design System.",
        current: true
      },
      {
        company: "Freelance Designer & Developer",
        role: "Web UI Specialist",
        period: "2021 — 2023",
        description: "Designed and built custom portfolios, e-commerce landing pages, and interactive presentation sites for startups.",
        current: false
      }
    ],
    education: [
      {
        degree: "Diploma in Web Design & UI Development",
        school: "National Institute of Design",
        year: "2020 — 2021"
      }
    ]
  },
  {
    id: "ananya",
    name: "Ananya Patel",
    role: "Full Stack Developer",
    experience: "4+ Years",
    bio: "Experienced developer bridging Frontend and Backend. Specializes in building React user interfaces integrated with PHP/MySQL backends, secure REST API development, and database architecture optimization.",
    email: "ananya@antigravity-devs.com",
    phone: "+91 98765 43213",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Ahmedabad, India",
    avatar: "💻",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    skills: [
      { name: "React.js", level: 88 },
      { name: "PHP / Laravel", level: 92 },
      { name: "MySQL & Database Optimization", level: 90 },
      { name: "REST API Development", level: 93 },
      { name: "Security & JWT Authentication", level: 87 }
    ],
    timeline: [
      {
        company: "WebSpire Technologies",
        role: "Full Stack Developer",
        period: "2022 — Present",
        description: "Developing school management portals and ERP software, optimizing SQL queries, and building secure RESTful endpoints.",
        current: true
      },
      {
        company: "Sigma IT Solutions",
        role: "Junior Web Developer",
        period: "2020 — 2022",
        description: "Built custom admin panels with PHP (CodeIgniter) and MySQL, maintaining legacy codebase and introducing React modules.",
        current: false
      }
    ],
    education: [
      {
        degree: "Master of Science in Information Technology",
        school: "Nirma University",
        year: "2018 — 2020"
      }
    ]
  },
  {
    id: "riya",
    name: "Riya Sen",
    role: "Frontend QA & React Engineer",
    experience: "3+ Years",
    bio: "Quality-focused React Developer with deep expertise in unit testing, end-to-end integration testing, and accessibility (a11y) standards. Riya ensures all web applications are bug-free, performant, and reliable.",
    email: "riya@antigravity-devs.com",
    phone: "+91 98765 43214",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Delhi, India",
    avatar: "🔍",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    skills: [
      { name: "React.js & TypeScript", level: 87 },
      { name: "Vitest / Jest Unit Testing", level: 95 },
      { name: "Playwright / Cypress E2E Testing", level: 93 },
      { name: "CI/CD & GitHub Actions", level: 86 },
      { name: "Web Accessibility & SEO", level: 90 }
    ],
    timeline: [
      {
        company: "AppTest Lab",
        role: "QA React Engineer",
        period: "2023 — Present",
        description: "Creating test suites for complex React applications, setting up CI/CD test gates, and debugging complex edge-cases.",
        current: true
      },
      {
        company: "BetaSoft Systems",
        role: "QA Tester & Developer",
        period: "2021 — 2023",
        description: "Performed manual and automated tests, analyzed web vitals, and wrote bug fixes in React frontends.",
        current: false
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Delhi University",
        year: "2018 — 2021"
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Enterprise ERP Dashboard",
    description: "A comprehensive ERP dashboard tailored for manufacturing clients, featuring inventory management, live supplier portals, financial analytics, and payroll systems.",
    category: "erp-crm",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Zustand"],
    features: [
      "Real-time analytics graphs and financial projections",
      "Dynamic interactive inventory system with low-stock alerts",
      "Supplier order placements and automated invoice generator",
      "Configurable theme customizer (Dark/Light/Neutral)"
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    color: "from-blue-500/20 to-indigo-500/5",
    screenshot: "📊"
  },
  {
    id: "proj2",
    title: "School Management System",
    description: "A full-scale portal for schools to manage student registration, grading sheets, fee collections, staff schedules, and direct parent-teacher chat logs.",
    category: "custom",
    tech: ["React", "TypeScript", "Chakra UI", "PHP", "MySQL"],
    features: [
      "Automated attendance logs using custom calendars",
      "Student report card generator with custom grading logic",
      "Student registration and secure online fee collection",
      "Direct chat dashboard with JWT authentication"
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    color: "from-emerald-500/20 to-teal-500/5",
    screenshot: "🏫"
  },
  {
    id: "proj3",
    title: "B2C E-Commerce Application",
    description: "A responsive, fast, and SEO-friendly e-commerce application equipped with a customizable product filter, cart system, and Stripe gateway.",
    category: "ecommerce",
    tech: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Stripe API"],
    features: [
      "Optimized static rendering for speedy load times",
      "Advanced filtering by size, price, category, and review count",
      "Full offline shopping cart state persistency",
      "Stripe payment integration with webhooks"
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    color: "from-amber-500/20 to-orange-500/5",
    screenshot: "🛍️"
  },
  {
    id: "proj4",
    title: "Custom CRM & Lead Tracker",
    description: "A sales pipeline tracker helping startups capture leads, assign clients to reps, log client calls, and track monthly sales targets.",
    category: "erp-crm",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Framer Motion"],
    features: [
      "Kanban board with smooth drag-and-drop animations",
      "Lead generation forms with automated email notifications",
      "Call log archives with transcription viewer",
      "Sales targets vs. achievements gauge charts"
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    color: "from-purple-500/20 to-pink-500/5",
    screenshot: "🎯"
  },
  {
    id: "proj5",
    title: "Project Management Hub",
    description: "A collaborative project management portal designed for digital agencies to track project sprints, delegate sub-tasks, and log billable timesheets.",
    category: "dashboards",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Playwright"],
    features: [
      "Multi-user task boards with real-time updates",
      "Interactive timeline and Gantt charts",
      "Detailed task search filters and tags",
      "Integrated timer for tracking billable hours"
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    color: "from-rose-500/20 to-red-500/5",
    screenshot: "📅"
  }
];

export const services: Service[] = [
  {
    icon: "Code2",
    title: "React & Next.js Development",
    description: "Building fast, SEO-friendly, and highly scalable web applications utilizing React and Next.js framework."
  },
  {
    icon: "LayoutDashboard",
    title: "Admin Dashboards",
    description: "Data-heavy dashboard design with real-time charts, detailed filters, and fluid layouts for internal business tools."
  },
  {
    icon: "Network",
    title: "ERP & CRM Software",
    description: "Tailored business software solutions to streamline inventory, sales, invoicing, and team operations."
  },
  {
    icon: "GraduationCap",
    title: "School Management Systems",
    description: "Custom portals connecting teachers, students, and parents with reporting, scheduling, and portal access."
  },
  {
    icon: "ShoppingBag",
    title: "E-Commerce Solutions",
    description: "Scalable online stores featuring optimized search filters, cart functionalities, and secure payment integrations."
  },
  {
    icon: "MonitorPlay",
    title: "Premium Landing Pages",
    description: "Pixel-perfect, lightweight, and engaging landing pages featuring smooth scroll effects and conversion-oriented layouts."
  },
  {
    icon: "Cpu",
    title: "API Integrations",
    description: "Seamless connections with RESTful endpoints, Stripe payments, Firebase, authentication providers, and third-party SaaS APIs."
  },
  {
    icon: "Wrench",
    title: "Website Maintenance",
    description: "Regular updates, bug fixing, test suite configurations, and performance audits to keep your platform running smoothly."
  }
];

export const whyHireUs: WhyHireUsItem[] = [
  {
    icon: "Zap",
    title: "Fast Delivery",
    description: "We optimize our workflows to deliver top-notch products in record time, meeting your strict project launch deadlines."
  },
  {
    icon: "FileCode2",
    title: "Clean & Modern Code",
    description: "We write clean, modular, and well-commented TypeScript/ES6 code adhering strictly to modern development practices."
  },
  {
    icon: "Laptop",
    title: "Fully Responsive UI",
    description: "Every layout we construct adapts dynamically to mobile, tablet, laptop, and ultra-wide monitor resolutions."
  },
  {
    icon: "Search",
    title: "SEO Friendly",
    description: "Semantic layouts, page speed optimizations, and proper meta structures to ensure your site ranks well on Google."
  },
  {
    icon: "Layers",
    title: "Scalable Architecture",
    description: "We design structures that grow. Easily integrate new features, sub-modules, and integrations as your business scales."
  },
  {
    icon: "Users2",
    title: "Full Team Support",
    description: "A combined force of 5 specialists covering development, UI/UX design, database configuration, and quality assurance."
  },
  {
    icon: "ShieldAlert",
    title: "Secure Operations",
    description: "Implementation of JWT logins, protected routes, input sanitizations, and protection against common vulnerability vectors."
  },
  {
    icon: "Sparkles",
    title: "Interactive UX",
    description: "Enhance user retention through micro-interactions, subtle glass effects, and physics-based Framer Motion transitions."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "David Miller",
    company: "Apex Sales Solutions, USA",
    avatar: "👴",
    rating: 5,
    text: "Ashad and his team built our custom Sales Lead CRM tracker from scratch. The interface is stunning, works perfectly on mobile, and the drag-and-drop pipeline was exactly what our sales team requested. Exceptional communication!"
  },
  {
    id: "t2",
    clientName: "Sarah Jenkins",
    company: "Bright Minds Academy, USA",
    avatar: "👩",
    rating: 5,
    text: "The school management portal designed by this team has transformed our administration. Gradings, schedule management, and parents communication can now be operated from one single platform. Their support is outstanding."
  },
  {
    id: "t3",
    clientName: "Mark Cubits",
    company: "Swift Cart Logistics, Canada",
    avatar: "🧔",
    rating: 5,
    text: "We wanted to migrate our legacy logistics dashboards into a modern React application. This team delivered a highly responsive interface with zero glitches, and integrated our REST APIs flawlessly. We have booked them for our next project!"
  }
];

export const stats: Stat[] = [
  { label: "Projects Completed", value: 45, suffix: "+" },
  { label: "Years Combined Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Team Members", value: 5, suffix: "" }
];
