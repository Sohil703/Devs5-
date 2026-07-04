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
      { name: "Backend (Python/Django/FastAPI/Flask)", level: 95 },
      { name: "Database (MongoDB/SQL)", level: 91 },
      { name: "DevOps & Deployment (AWS/NginX)", level: 88 }
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
    role: "FrontEnd developer",
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
        role: " FrontEnd developer",
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
    id: "atesham",
    name: "Atesham Sumra",
    role: "Web Developer",
    experience: "3+ Years",
    bio: "Dedicated and detail-oriented Front End Developer with hands-on experience creating responsive, user-friendly, and modern web applications. Proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, PHP, and Flutter. Passionate about building clean, scalable, and high-performance digital solutions while continuously learning new technologies.",
    email: "sumraatesham1912@gmail.com",
    phone: "+91 8401681016",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Himatnagar, Gujarat, India",
    avatar: "🎨",
    photo: "/atesham-sumra.jpg",
    skills: [
      { name: "Bootstrap & Tailwind CSS", level: 91 },
      { name: "HTML5 & CSS3 Development", level: 93 },
      { name: "JavaScript & jQuery", level: 88 },
      { name: "PHP & Web Development", level: 80 },
      { name: "Flutter Mobile Apps", level: 75 }
    ],
    timeline: [
      {
        company: "Tanish Info Service",
        role: "Web Developer",
        period: "Dec 2024 — Present",
        description: "Designed and developed responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and PHP. Converted UI/UX designs into clean, reusable, and maintainable frontend code.",
        current: true
      },
      {
        company: "Kornea Digital",
        role: "Web Developer",
        period: "Jun 2023 — Jun 2024",
        description: "Developed user interfaces with modern JavaScript frameworks. Converted design mockups into pixel-perfect pages, utilized Git/GitHub for version control, and built UI pages for Flutter mobile applications.",
        current: false
      },
      {
        company: "Sun Electronics",
        role: "Computer Operator",
        period: "Jan 2019 — Apr 2023",
        description: "Generated reports covering data, system operation, and error monitoring. Maintained a high level of accuracy in data entry tasks and spreadsheet management.",
        current: false
      }
    ],
    education: [
      {
        degree: "Master of Commerce (M.Com)",
        school: "Hemchandracharya North Gujarat University (HNGU)",
        year: "2021 — 2023"
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        school: "Hemchandracharya North Gujarat University (HNGU)",
        year: "2018 — 2021"
      }
    ]
  },
  {
    id: "zenul",
    name: "Zenul Sumara",
    role: "Unity Game Developer",
    experience: "2 Years",
    bio: "I'm a Unity Game Developer with 2+ years of experience building engaging mobile games using Unity and C#. I've worked on a variety of genres, including puzzle, hypercasual, and shooter games, with a strong focus on gameplay mechanics, performance optimization, and polished user experiences. I enjoy turning ideas into fun, high-quality games and continuously expanding my skills by exploring new game development techniques and best practices.",
    email: "zenulwork@gmail.com",
    phone: "+91 9638528117",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Jamnagar, Gujarat, India",
    avatar: "💻",
    photo: "/zenul-sumara.jpg",
    skills: [
      { name: "Unity Game Engine", level: 93 },
      { name: "C# Programming", level: 90 },
      { name: "Game Mechanics & Physics", level: 88 },
      { name: "Performance Optimization", level: 85 },
      { name: "Mobile Game UI/UX", level: 80 }
    ],
    timeline: [
      {
        company: "Tap2Play Studio",
        role: "Unity Game Developer",
        period: "Mar 2023 — Present",
        description: "Building engaging mobile games using Unity and C#. Developing gameplay mechanics, performance optimization pipelines, and polished user experiences across multiple genres including puzzle, hypercasual, and shooter games.",
        current: true
      }
    ],
    education: []
  },
  {
    id: "arman",
    name: "Arman Sumra",
    role: "Graphic Designer",
    experience: "4+ Years",
    bio: "I'm a Graphic Designer with 4+ years of experience creating creative and impactful designs for both digital and print media. I specialize in social media creatives, branding, logo design, packaging, and marketing materials. I focus on delivering high-quality visuals that help businesses build a strong brand identity and connect with their audience. I enjoy turning ideas into eye-catching designs while continuously learning new design trends and techniques.",
    email: "armaansumra786@gmail.com",
    phone: "9428567512",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "#",
    resumeUrl: "#",
    availability: "Available",
    location: "Himatnagar, Gujarat, India",
    avatar: "🎨",
    photo: "/arman-sumra.jpg",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 92 },
      { name: "CorelDRAW", level: 88 },
      { name: "Canva & Creative Layouts", level: 90 }
    ],
    timeline: [
      {
        company: "Professional & Freelance Projects",
        role: "Graphic Designer",
        period: "2020 — Present",
        description: "Designing social media creatives, logo & brand identity, packaging designs, flyers, brochures, banners, product advertisements, and festival/promotional marketing campaigns.",
        current: true
      }
    ],
    education: []
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Taxiwale.in — Taxi Service Platform",
    description: "A modern taxi booking platform designed to provide a fast and reliable ride-booking experience with a clean interface, responsive layouts, and seamless navigation across devices.",
    category: "custom",
    tech: ["React", "JavaScript", "Bootstrap", "CSS"],
    features: [
      "Fast and lightweight user experience",
      "Responsive design for mobile and desktop",
      "Interactive and intuitive booking interface",
      "Service information and fare details",
      "Easy navigation with optimized performance"
    ],
    githubUrl: "#",
    liveUrl: "https://taxiwale.in/",
    color: "from-blue-500/20 to-indigo-500/5",
    screenshot: "/taxiwale.png"
  },
  {
    id: "proj2",
    title: "School Management System",
    description: "A full-scale portal for schools to manage student registration, grading sheets, fee collections, staff schedules, and direct parent-teacher chat logs.",
    category: "custom",
    tech: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Automated attendance logs using custom calendars",
      "Student report card generator with custom grading logic",
      "Student registration and secure online fee collection",
      "Direct chat dashboard with JWT authentication"
    ],
    githubUrl: "#",
    liveUrl: "https://emaad-school.pages.dev/",
    color: "from-emerald-500/20 to-teal-500/5",
    screenshot: "/emaad-school.png"
  },
  {
    id: "proj3",
    title: "Wafa Naqab Shop",
    description: "A premium online shopping platform for Wafa Naqab Shop, showcasing and retail selling high-quality Abayas, Burqas, and Hijabs with a responsive collection browser and administrative dashboard panel.",
    category: "ecommerce",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    features: [
      "Interactive catalog browsing for Abayas, Burqas, and Hijabs",
      "Secure Admin Panel for inventory management and product uploads",
      "Responsive UI design optimized for both mobile and desktop viewports",
      "Inquiry routing and contact portals for customer orders"
    ],
    githubUrl: "#",
    liveUrl: "https://wafanaqabshop.com",
    color: "from-amber-500/20 to-orange-500/5",
    screenshot: "/wafa-naqab.png"
  },
  {
    id: "proj4",
    title: "Krishna Kala Wellness",
    description: "A scalable e-commerce solution developed for wellness products, designed to handle growing customer traffic while maintaining a responsive shopping experience and real-time inventory updates.",
    category: "ecommerce",
    tech: ["Shopify"],
    features: [
      "Responsive online shopping experience",
      "Real-time product stock updates",
      "Optimized performance for high user traffic",
      "Product categorization and search",
      "Secure and user-friendly checkout process"
    ],
    githubUrl: "#",
    liveUrl: "https://krishnakalawellness.com/",
    color: "from-purple-500/20 to-pink-500/5",
    screenshot: "/krishna-kala.png"
  },
  {
    id: "proj5",
    title: "Svatantra Homes",
    description: "A mobile application developed to simplify access to microfinance services with a responsive interface, smooth navigation, and efficient data management for users.",
    category: "custom",
    tech: ["Flutter", "Dart", "SQLite", "REST API"],
    features: [
      "Fast and responsive mobile experience",
      "User-friendly application workflow",
      "Secure customer data management",
      "Optimized performance for everyday usage",
      "Clean and intuitive Flutter-based interface"
    ],
    githubUrl: "#",
    liveUrl: "https://play.google.com/store/apps/details?id=com.svatantrahomesloan",
    color: "from-rose-500/20 to-red-500/5",
    screenshot: "/svatantra.png"
  }
];

export const services: Service[] = [
  {
    icon: "Code2",
    title: "Web and App development",
    description: "Building fast, SEO-friendly, and highly scalable web and mobile applications tailored to your business needs."
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
    icon: "Database",
    title: "Data Scraping",
    description: "Extracting structured data from web sources, building robust scraping pipelines, and automating data aggregation."
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
