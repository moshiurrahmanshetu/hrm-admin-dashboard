/**
 * AuraHR - Shared Employee State & Queries (localStorage)
 */

const DEFAULT_EMPLOYEES = [
  {
    id: "EMP-001",
    name: "Sarah Jenkins",
    email: "sarah.j@aurahr.com",
    phone: "+1 (555) 019-2834",
    department: "HR",
    designation: "HR Director",
    joiningDate: "2022-04-12",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    salary: 125000,
    gender: "Female",
    dob: "1988-08-24",
    address: "742 Evergreen Terrace, Springfield, OR",
    emergencyContactName: "Robert Jenkins",
    emergencyContactPhone: "+1 (555) 019-2835",
    emergencyContactRelation: "Spouse",
    bio: "Over 12 years of experience in HR management and people operations. Passionate about building strong company cultures, transparent performance evaluation frameworks, and equitable talent systems.",
    documents: [
      { name: "Offer Letter.pdf", size: "2.4 MB", date: "2022-03-15" },
      { name: "Employment Contract.pdf", size: "1.8 MB", date: "2022-04-01" },
      { name: "Health Insurance Plan.pdf", size: "3.1 MB", date: "2022-04-15" }
    ],
    performance: { rating: 4.9, review: "Exceptional leadership, spearheaded the transition to hybrid workspace model seamlessly." },
    attendance: { rate: 99.1, onTime: 178, late: 1, absent: 1 },
    leaves: { total: 25, taken: 4, pending: 0 }
  },
  {
    id: "EMP-002",
    name: "Marcus Vance",
    email: "marcus.v@aurahr.com",
    phone: "+1 (555) 014-9982",
    department: "Engineering",
    designation: "Engineering Lead",
    joiningDate: "2023-01-15",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    salary: 145000,
    gender: "Male",
    dob: "1990-11-12",
    address: "124 Conch Street, Bikini Bottom, OR",
    emergencyContactName: "Lina Vance",
    emergencyContactPhone: "+1 (555) 014-9983",
    emergencyContactRelation: "Spouse",
    bio: "Experienced full-stack systems architect specializing in robust backend scalability and high-availability cloud setups. Leads a team of 8 senior and intermediate engineers.",
    documents: [
      { name: "Offer Letter_V2.pdf", size: "1.5 MB", date: "2022-12-01" },
      { name: "NDA Agreement.pdf", size: "850 KB", date: "2023-01-05" }
    ],
    performance: { rating: 4.8, review: "Delivered core API restructuring 3 weeks ahead of schedule with zero system regressions." },
    attendance: { rate: 98.4, onTime: 170, late: 4, absent: 2 },
    leaves: { total: 25, taken: 8, pending: 1 }
  },
  {
    id: "EMP-003",
    name: "Emily Rose",
    email: "emily.r@aurahr.com",
    phone: "+1 (555) 017-4821",
    department: "Marketing",
    designation: "Marketing Specialist",
    joiningDate: "2024-06-10",
    status: "On Leave",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    salary: 82000,
    gender: "Female",
    dob: "1994-03-14",
    address: "221B Baker St, London, OR",
    emergencyContactName: "Thomas Rose",
    emergencyContactPhone: "+1 (555) 017-4822",
    emergencyContactRelation: "Father",
    bio: "Creative strategist specializing in search engine marketing, high-impact social campaigns, and technical content positioning.",
    documents: [
      { name: "Offer Letter.pdf", size: "1.2 MB", date: "2024-05-15" }
    ],
    performance: { rating: 4.2, review: "Strong execution on Summer brand campaign. Highly creative and detail oriented." },
    attendance: { rate: 92.5, onTime: 145, late: 12, absent: 4 },
    leaves: { total: 20, taken: 14, pending: 2 }
  },
  {
    id: "EMP-004",
    name: "Robert Chen",
    email: "robert.c@aurahr.com",
    phone: "+1 (555) 012-3349",
    department: "Engineering",
    designation: "System Architect",
    joiningDate: "2021-09-01",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    salary: 160000,
    gender: "Male",
    dob: "1985-05-30",
    address: "456 Oak Lane, Portland, OR",
    emergencyContactName: "Mei Chen",
    emergencyContactPhone: "+1 (555) 012-3350",
    emergencyContactRelation: "Mother",
    bio: "Senior architect with 15+ years in infrastructure design, Kubernetes cluster orchestration, and automated CI/CD pipeline deployments.",
    documents: [
      { name: "Offer Letter.pdf", size: "3.2 MB", date: "2021-08-01" },
      { name: "Intellectual Property.pdf", size: "2.1 MB", date: "2021-08-15" }
    ],
    performance: { rating: 4.9, review: "Architected a migration that reduced AWS cloud overheads by 34% annualized." },
    attendance: { rate: 98.9, onTime: 175, late: 2, absent: 1 },
    leaves: { total: 25, taken: 5, pending: 0 }
  },
  {
    id: "EMP-005",
    name: "Sophia Martinez",
    email: "sophia.m@aurahr.com",
    phone: "+1 (555) 011-8891",
    department: "Operations",
    designation: "Product Manager",
    joiningDate: "2023-05-20",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    salary: 110000,
    gender: "Female",
    dob: "1991-02-18",
    address: "89 Pine Street, Seattle, WA",
    emergencyContactName: "Daniel Martinez",
    emergencyContactPhone: "+1 (555) 011-8892",
    emergencyContactRelation: "Brother",
    bio: "Bridges the gap between technical teams and marketing targets to deliver highly polished, customer-centric SaaS iterations.",
    documents: [
      { name: "Contract_Approved.pdf", size: "1.4 MB", date: "2023-05-10" }
    ],
    performance: { rating: 4.6, review: "Excellent cross-functional collaboration. Drives products with absolute clarity." },
    attendance: { rate: 97.6, onTime: 168, late: 6, absent: 2 },
    leaves: { total: 20, taken: 6, pending: 1 }
  },
  {
    id: "EMP-006",
    name: "John Davis",
    email: "john.d@aurahr.com",
    phone: "+1 (555) 015-7722",
    department: "Marketing",
    designation: "Marketing Associate",
    joiningDate: "2025-01-10",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=256&auto=format&fit=crop",
    salary: 62000,
    gender: "Male",
    dob: "1997-07-22",
    address: "713 Maple Avenue, Beaverton, OR",
    emergencyContactName: "Alice Davis",
    emergencyContactPhone: "+1 (555) 015-7723",
    emergencyContactRelation: "Sister",
    bio: "Focuses on content marketing, digital acquisition channels, copy writing, and coordinating public relations events.",
    documents: [
      { name: "JohnDavis_Offer.pdf", size: "1.1 MB", date: "2024-12-15" }
    ],
    performance: { rating: 4.0, review: "Quick learner, has adapted to company tools and messaging strategies swiftly." },
    attendance: { rate: 96.8, onTime: 115, late: 5, absent: 2 },
    leaves: { total: 15, taken: 2, pending: 0 }
  },
  {
    id: "EMP-007",
    name: "Lina Vance",
    email: "lina.v@aurahr.com",
    phone: "+1 (555) 014-9983",
    department: "Engineering",
    designation: "Database Engineer",
    joiningDate: "2024-02-15",
    status: "Active",
    employmentType: "Contract",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    salary: 95000,
    gender: "Female",
    dob: "1992-09-05",
    address: "124 Conch Street, Bikini Bottom, OR",
    emergencyContactName: "Marcus Vance",
    emergencyContactPhone: "+1 (555) 014-9982",
    emergencyContactRelation: "Spouse",
    bio: "Expert query optimization specialist focusing on high-performance PostgreSQL indexing, replication architectures, and secure backups.",
    documents: [
      { name: "Contract_LinaV.pdf", size: "1.7 MB", date: "2024-02-01" }
    ],
    performance: { rating: 4.7, review: "Resolved a major database connection bottleneck, reducing response latencies by 50%." },
    attendance: { rate: 98.2, onTime: 154, late: 3, absent: 1 },
    leaves: { total: 15, taken: 3, pending: 0 }
  },
  {
    id: "EMP-008",
    name: "Alisha Patel",
    email: "alisha.p@aurahr.com",
    phone: "+1 (555) 019-1123",
    department: "HR",
    designation: "Recruiting Coordinator",
    joiningDate: "2024-11-01",
    status: "Suspended",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    salary: 70000,
    gender: "Female",
    dob: "1995-12-01",
    address: "55 Blueberry Lane, Hillsboro, OR",
    emergencyContactName: "Vijay Patel",
    emergencyContactPhone: "+1 (555) 019-1124",
    emergencyContactRelation: "Father",
    bio: "Spearheads talent acquisition logistics, candidate sourcing, initial screening setups, and background check audits.",
    documents: [
      { name: "Contract.pdf", size: "1.9 MB", date: "2024-10-15" }
    ],
    performance: { rating: 3.5, review: "Requires improvement in reporting accuracy and administrative timelines." },
    attendance: { rate: 89.2, onTime: 120, late: 18, absent: 8 },
    leaves: { total: 20, taken: 10, pending: 0 }
  },
  {
    id: "EMP-009",
    name: "David Kim",
    email: "david.k@aurahr.com",
    phone: "+1 (555) 018-4545",
    department: "Design",
    designation: "UI/UX Designer",
    joiningDate: "2023-08-10",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    salary: 92000,
    gender: "Male",
    dob: "1993-04-20",
    address: "909 Vista Ridge, Portland, OR",
    emergencyContactName: "Sun-Hee Kim",
    emergencyContactPhone: "+1 (555) 018-4546",
    emergencyContactRelation: "Mother",
    bio: "Visual craftsman obsessed with layout typography, subtle transitions, responsive micro-animations, and clean digital ergonomics.",
    documents: [
      { name: "Offer_DavidKim.pdf", size: "1.3 MB", date: "2023-07-15" }
    ],
    performance: { rating: 4.8, review: "Revamped the client workspace portal. Absolutely gorgeous aesthetics and fluid animations." },
    attendance: { rate: 98.0, onTime: 165, late: 4, absent: 1 },
    leaves: { total: 20, taken: 5, pending: 1 }
  },
  {
    id: "EMP-010",
    name: "Rachel Green",
    email: "rachel.g@aurahr.com",
    phone: "+1 (555) 012-7788",
    department: "Operations",
    designation: "Business Analyst",
    joiningDate: "2024-03-01",
    status: "Active",
    employmentType: "Full-Time",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    salary: 88000,
    gender: "Female",
    dob: "1992-05-05",
    address: "495 Grove St, New York, NY",
    emergencyContactName: "Leonard Green",
    emergencyContactPhone: "+1 (555) 012-7789",
    emergencyContactRelation: "Father",
    bio: "Analytical thinker converting complex system telemetry, operational backlogs, and financial datasets into actionable board insights.",
    documents: [
      { name: "Contract_RachelG.pdf", size: "1.5 MB", date: "2024-02-15" }
    ],
    performance: { rating: 4.4, review: "Excellent analytical capacity, reports are comprehensive and drive business strategies well." },
    attendance: { rate: 97.4, onTime: 160, late: 5, absent: 1 },
    leaves: { total: 20, taken: 4, pending: 0 }
  }
];

// Seed localStorage if not present
function initializeEmployees() {
  const stored = localStorage.getItem("aurahr_employees");
  if (!stored) {
    localStorage.setItem("aurahr_employees", JSON.stringify(DEFAULT_EMPLOYEES));
  }
}

const DEFAULT_DEPARTMENTS = [
  {
    id: "DEPT-001",
    name: "Engineering",
    code: "ENG",
    head: "Marcus Vance",
    email: "eng@aurahr.com",
    phone: "+1 (555) 014-9982",
    budget: 850000,
    description: "Core systems architecture, software engineering, database design, and cloud infrastructure operations.",
    status: "Active",
    createdDate: "2021-01-15"
  },
  {
    id: "DEPT-002",
    name: "HR",
    code: "HRD",
    head: "Sarah Jenkins",
    email: "hr@aurahr.com",
    phone: "+1 (555) 019-2834",
    budget: 320000,
    description: "Talent acquisition, employee relations, workspace culture, benefits administration, and compliance.",
    status: "Active",
    createdDate: "2022-04-01"
  },
  {
    id: "DEPT-003",
    name: "Marketing",
    code: "MKT",
    head: "Emily Rose",
    email: "marketing@aurahr.com",
    phone: "+1 (555) 017-4821",
    budget: 450000,
    description: "Brand positioning, dynamic digital campaigns, public relations, and content production.",
    status: "Active",
    createdDate: "2023-03-10"
  },
  {
    id: "DEPT-004",
    name: "Operations",
    code: "OPS",
    head: "Sophia Martinez",
    email: "ops@aurahr.com",
    phone: "+1 (555) 011-8891",
    budget: 500000,
    description: "Product strategy, roadmap delivery, corporate logistics, and systemic analysis workflows.",
    status: "Active",
    createdDate: "2022-08-20"
  },
  {
    id: "DEPT-005",
    name: "Design",
    code: "DSN",
    head: "David Kim",
    email: "design@aurahr.com",
    phone: "+1 (555) 018-4545",
    budget: 280000,
    description: "Product interface craftsmanship, user research, fluid typography, and digital ergonomic branding.",
    status: "Active",
    createdDate: "2023-06-01"
  }
];

const DEFAULT_DESIGNATIONS = [
  {
    id: "DESIG-001",
    name: "Engineering Lead",
    department: "Engineering",
    grade: "L6",
    reportingTo: "Sarah Jenkins",
    basicSalaryRange: "$130,000 - $160,000",
    description: "Leads engineering squads, conducts system architecture designs, and ensures tech stack consistency.",
    status: "Active"
  },
  {
    id: "DESIG-002",
    name: "System Architect",
    department: "Engineering",
    grade: "L7",
    reportingTo: "Marcus Vance",
    basicSalaryRange: "$150,000 - $190,000",
    description: "Specifies infrastructure layouts, software platforms, security policies, and high-performance routing systems.",
    status: "Active"
  },
  {
    id: "DESIG-003",
    name: "Database Engineer",
    department: "Engineering",
    grade: "L4",
    reportingTo: "Marcus Vance",
    basicSalaryRange: "$80,000 - $110,000",
    description: "Maintains corporate data stores, handles query tuning, data schemas, and backup operations.",
    status: "Active"
  },
  {
    id: "DESIG-004",
    name: "HR Director",
    department: "HR",
    grade: "L8",
    reportingTo: "Board of Directors",
    basicSalaryRange: "$110,000 - $140,000",
    description: "Directs entire human resource strategies, company policies, workplace inclusion, and general talent management.",
    status: "Active"
  },
  {
    id: "DESIG-005",
    name: "Recruiting Coordinator",
    department: "HR",
    grade: "L3",
    reportingTo: "Sarah Jenkins",
    basicSalaryRange: "$60,000 - $80,000",
    description: "Manages hiring workflows, candidate interfaces, initial pre-screenings, and boarding programs.",
    status: "Active"
  },
  {
    id: "DESIG-006",
    name: "Marketing Specialist",
    department: "Marketing",
    grade: "L4",
    reportingTo: "Emily Rose",
    basicSalaryRange: "$75,000 - $95,000",
    description: "Executes SEO campaign mechanics, Google Ad positioning, digital telemetry reports, and partner outreach.",
    status: "Active"
  },
  {
    id: "DESIG-007",
    name: "Marketing Associate",
    department: "Marketing",
    grade: "L2",
    reportingTo: "Emily Rose",
    basicSalaryRange: "$55,000 - $70,000",
    description: "Creates copy elements, draft press bulletins, manages social networks, and compiles campaign logs.",
    status: "Active"
  },
  {
    id: "DESIG-008",
    name: "Product Manager",
    department: "Operations",
    grade: "L6",
    reportingTo: "Sophia Martinez",
    basicSalaryRange: "$100,000 - $130,000",
    description: "Translates business requirements into delivery plans, syncs with engineers and designers, and tracks progress.",
    status: "Active"
  },
  {
    id: "DESIG-009",
    name: "Business Analyst",
    department: "Operations",
    grade: "L4",
    reportingTo: "Sophia Martinez",
    basicSalaryRange: "$80,000 - $100,000",
    description: "Assesses operational workflows, constructs spreadsheet projection maps, and models system telemetry charts.",
    status: "Active"
  },
  {
    id: "DESIG-010",
    name: "UI/UX Designer",
    department: "Design",
    grade: "L4",
    reportingTo: "David Kim",
    basicSalaryRange: "$80,000 - $105,000",
    description: "Crafts interface prototypes, visual layout grids, design systems, and responsive user research surveys.",
    status: "Active"
  }
];

function initializeDepartments() {
  const stored = localStorage.getItem("aurahr_departments");
  if (!stored) {
    localStorage.setItem("aurahr_departments", JSON.stringify(DEFAULT_DEPARTMENTS));
  }
}

function initializeDesignations() {
  const stored = localStorage.getItem("aurahr_designations");
  if (!stored) {
    localStorage.setItem("aurahr_designations", JSON.stringify(DEFAULT_DESIGNATIONS));
  }
}

const DEFAULT_ATTENDANCE = [
  {
    id: "ATT-001",
    employeeId: "EMP-001",
    employeeName: "Sarah Jenkins",
    employeeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:55 AM",
    checkOut: "05:00 PM",
    workingHours: "8h 5m",
    status: "Present"
  },
  {
    id: "ATT-002",
    employeeId: "EMP-002",
    employeeName: "Marcus Vance",
    employeeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "09:02 AM",
    checkOut: "06:15 PM",
    workingHours: "9h 13m",
    status: "Late"
  },
  {
    id: "ATT-003",
    employeeId: "EMP-003",
    employeeName: "Emily Rose",
    employeeAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "--:--",
    checkOut: "--:--",
    workingHours: "0h 0m",
    status: "Leave"
  },
  {
    id: "ATT-004",
    employeeId: "EMP-004",
    employeeName: "Robert Chen",
    employeeAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:45 AM",
    checkOut: "05:30 PM",
    workingHours: "8h 45m",
    status: "Remote"
  },
  {
    id: "ATT-005",
    employeeId: "EMP-005",
    employeeName: "Sophia Martinez",
    employeeAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "09:15 AM",
    checkOut: "05:45 PM",
    workingHours: "8h 30m",
    status: "Late"
  },
  {
    id: "ATT-006",
    employeeId: "EMP-006",
    employeeName: "John Davis",
    employeeAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:50 AM",
    checkOut: "05:10 PM",
    workingHours: "8h 20m",
    status: "Present"
  },
  {
    id: "ATT-007",
    employeeId: "EMP-007",
    employeeName: "Lina Vance",
    employeeAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:58 AM",
    checkOut: "05:00 PM",
    workingHours: "8h 2m",
    status: "Present"
  },
  {
    id: "ATT-008",
    employeeId: "EMP-008",
    employeeName: "Alisha Patel",
    employeeAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "--:--",
    checkOut: "--:--",
    workingHours: "0h 0m",
    status: "Absent"
  },
  {
    id: "ATT-009",
    employeeId: "EMP-009",
    employeeName: "David Kim",
    employeeAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:30 AM",
    checkOut: "05:00 PM",
    workingHours: "8h 30m",
    status: "Present"
  },
  {
    id: "ATT-010",
    employeeId: "EMP-010",
    employeeName: "Rachel Green",
    employeeAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-02",
    checkIn: "08:52 AM",
    checkOut: "05:00 PM",
    workingHours: "8h 8m",
    status: "Present"
  },
  // Yesterday logs
  {
    id: "ATT-011",
    employeeId: "EMP-001",
    employeeName: "Sarah Jenkins",
    employeeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-01",
    checkIn: "08:50 AM",
    checkOut: "05:05 PM",
    workingHours: "8h 15m",
    status: "Present"
  },
  {
    id: "ATT-012",
    employeeId: "EMP-002",
    employeeName: "Marcus Vance",
    employeeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    date: "2026-07-01",
    checkIn: "08:55 AM",
    checkOut: "06:00 PM",
    workingHours: "9h 5m",
    status: "Present"
  }
];

const DEFAULT_SHIFTS = [
  {
    id: "SHF-001",
    name: "Morning Standard Shift",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    breakTime: "45 Min",
    assignedEmployees: ["EMP-001", "EMP-003", "EMP-005", "EMP-006", "EMP-009", "EMP-010"],
    status: "Active"
  },
  {
    id: "SHF-002",
    name: "Engineering Core Shift",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    breakTime: "60 Min",
    assignedEmployees: ["EMP-002", "EMP-004", "EMP-007"],
    status: "Active"
  },
  {
    id: "SHF-003",
    name: "Night Operations Shift",
    startTime: "09:00 PM",
    endTime: "05:00 AM",
    breakTime: "45 Min",
    assignedEmployees: ["EMP-008"],
    status: "Inactive"
  }
];

const DEFAULT_TIMESHEETS = [
  {
    id: "TS-001",
    employeeId: "EMP-001",
    employeeName: "Sarah Jenkins",
    project: "HR Platform Upgrade",
    task: "Review Performance Appraisal Specs",
    date: "2026-07-01",
    hoursWorked: 8,
    approvalStatus: "Approved"
  },
  {
    id: "TS-002",
    employeeId: "EMP-002",
    employeeName: "Marcus Vance",
    project: "Core API Restructure",
    task: "Refactor DB Indexes & Query Middleware",
    date: "2026-07-01",
    hoursWorked: 9,
    approvalStatus: "Approved"
  },
  {
    id: "TS-003",
    employeeId: "EMP-004",
    employeeName: "Robert Chen",
    project: "AWS Cost Optimization",
    task: "Audit unused EBS and ECS tasks",
    date: "2026-07-01",
    hoursWorked: 8,
    approvalStatus: "Pending"
  },
  {
    id: "TS-004",
    employeeId: "EMP-005",
    employeeName: "Sophia Martinez",
    project: "Product Strategy",
    task: "Prepare Q3 Product Roadmap",
    date: "2026-06-30",
    hoursWorked: 7,
    approvalStatus: "Approved"
  },
  {
    id: "TS-005",
    employeeId: "EMP-009",
    employeeName: "David Kim",
    project: "Workspace Portal Redesign",
    task: "Develop Dark Mode Design System",
    date: "2026-07-01",
    hoursWorked: 8,
    approvalStatus: "Pending"
  },
  {
    id: "TS-006",
    employeeId: "EMP-006",
    employeeName: "John Davis",
    project: "Summer Brand Campaign",
    task: "Draft copy elements & PR briefs",
    date: "2026-06-29",
    hoursWorked: 8,
    approvalStatus: "Approved"
  }
];

const DEFAULT_OVERTIME = [
  {
    id: "OT-001",
    employeeId: "EMP-002",
    employeeName: "Marcus Vance",
    date: "2026-06-30",
    hours: 3.5,
    reason: "Critical hotfix for production auth latency issue",
    status: "Approved"
  },
  {
    id: "OT-002",
    employeeId: "EMP-004",
    employeeName: "Robert Chen",
    date: "2026-07-01",
    hours: 2.0,
    reason: "Deploying database replica clusters during off-peak hours",
    status: "Pending"
  },
  {
    id: "OT-003",
    employeeId: "EMP-007",
    employeeName: "Lina Vance",
    date: "2026-06-29",
    hours: 4.0,
    reason: "SQL query performance audits and indexing rebuilds",
    status: "Approved"
  },
  {
    id: "OT-004",
    employeeId: "EMP-009",
    employeeName: "David Kim",
    date: "2026-07-02",
    hours: 1.5,
    reason: "Finalizing design tokens export and animation assets",
    status: "Pending"
  }
];

function initializeAttendance() {
  const stored = localStorage.getItem("aurahr_attendance");
  if (!stored) {
    localStorage.setItem("aurahr_attendance", JSON.stringify(DEFAULT_ATTENDANCE));
  }
}

function initializeShifts() {
  const stored = localStorage.getItem("aurahr_shifts");
  if (!stored) {
    localStorage.setItem("aurahr_shifts", JSON.stringify(DEFAULT_SHIFTS));
  }
}

function initializeTimesheets() {
  const stored = localStorage.getItem("aurahr_timesheets");
  if (!stored) {
    localStorage.setItem("aurahr_timesheets", JSON.stringify(DEFAULT_TIMESHEETS));
  }
}

function initializeOvertime() {
  const stored = localStorage.getItem("aurahr_overtime");
  if (!stored) {
    localStorage.setItem("aurahr_overtime", JSON.stringify(DEFAULT_OVERTIME));
  }
}

const DEFAULT_LEAVES = [
  {
    id: "LV-001",
    employeeId: "EMP-001",
    employeeName: "Sarah Jenkins",
    employeeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    leaveType: "Sick Leave",
    startDate: "2026-07-05",
    endDate: "2026-07-07",
    days: 3,
    halfDay: false,
    reason: "Dental surgery and recovery",
    emergencyContact: "+1 (555) 019-2835",
    attachment: "dental_cert.pdf",
    status: "Pending",
    createdAt: "2026-07-01"
  },
  {
    id: "LV-002",
    employeeId: "EMP-002",
    employeeName: "Marcus Vance",
    employeeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    leaveType: "Annual Leave",
    startDate: "2026-07-15",
    endDate: "2026-07-22",
    days: 8,
    halfDay: false,
    reason: "Family summer vacation",
    emergencyContact: "+1 (555) 014-9983",
    attachment: "flight_itinerary.pdf",
    status: "Approved",
    createdAt: "2026-06-25"
  },
  {
    id: "LV-003",
    employeeId: "EMP-003",
    employeeName: "Emily Rose",
    employeeAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    leaveType: "Casual Leave",
    startDate: "2026-06-20",
    endDate: "2026-06-21",
    days: 2,
    halfDay: false,
    reason: "Urgent personal work",
    emergencyContact: "+1 (555) 017-4822",
    attachment: null,
    status: "Approved",
    createdAt: "2026-06-18"
  },
  {
    id: "LV-004",
    employeeId: "EMP-004",
    employeeName: "Robert Chen",
    employeeAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    leaveType: "Maternity/Paternity Leave",
    startDate: "2026-06-01",
    endDate: "2026-06-14",
    days: 14,
    halfDay: false,
    reason: "Paternity leave for newborn",
    emergencyContact: "+1 (555) 012-3350",
    attachment: "birth_certificate.pdf",
    status: "Approved",
    createdAt: "2026-05-20"
  },
  {
    id: "LV-005",
    employeeId: "EMP-008",
    employeeName: "Alisha Patel",
    employeeAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    leaveType: "Unpaid Leave",
    startDate: "2026-07-10",
    endDate: "2026-07-11",
    days: 2,
    halfDay: false,
    reason: "Personal emergency travel",
    emergencyContact: "+1 (555) 019-1124",
    attachment: null,
    status: "Rejected",
    createdAt: "2026-06-29"
  },
  {
    id: "LV-006",
    employeeId: "EMP-005",
    employeeName: "Sophia Martinez",
    employeeAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    leaveType: "Casual Leave",
    startDate: "2026-07-03",
    endDate: "2026-07-03",
    days: 1,
    halfDay: true,
    reason: "Car servicing and licensing",
    emergencyContact: "+1 (555) 011-8892",
    attachment: null,
    status: "Pending",
    createdAt: "2026-07-02"
  }
];

const DEFAULT_HOLIDAYS = [
  { id: "HL-001", name: "New Year's Day", date: "2026-01-01", day: "Thursday", type: "National", status: "Passed" },
  { id: "HL-002", name: "Good Friday", date: "2026-04-03", day: "Friday", type: "National", status: "Passed" },
  { id: "HL-003", name: "Memorial Day", date: "2026-05-25", day: "Monday", type: "National", status: "Passed" },
  { id: "HL-004", name: "Independence Day", date: "2026-07-04", day: "Saturday", type: "National", status: "Upcoming" },
  { id: "HL-005", name: "Labor Day", date: "2026-09-07", day: "Monday", type: "National", status: "Upcoming" },
  { id: "HL-006", name: "Thanksgiving Day", date: "2026-11-26", day: "Thursday", type: "National", status: "Upcoming" },
  { id: "HL-007", name: "Christmas Day", date: "2026-12-25", day: "Friday", type: "National", status: "Upcoming" },
  { id: "HL-008", name: "New Year's Eve", date: "2026-12-31", day: "Thursday", type: "Optional", status: "Upcoming" }
];

const DEFAULT_LEAVE_BALANCES = {
  "EMP-001": [
    { type: "Annual Leave", total: 15, used: 2, pending: 0 },
    { type: "Sick Leave", total: 10, used: 1, pending: 1 },
    { type: "Casual Leave", total: 10, used: 1, pending: 0 },
    { type: "Maternity/Paternity Leave", total: 30, used: 0, pending: 0 },
    { type: "Unpaid Leave", total: 10, used: 0, pending: 0 }
  ],
  "EMP-002": [
    { type: "Annual Leave", total: 15, used: 8, pending: 0 },
    { type: "Sick Leave", total: 10, used: 0, pending: 0 },
    { type: "Casual Leave", total: 10, used: 0, pending: 0 },
    { type: "Maternity/Paternity Leave", total: 30, used: 0, pending: 0 },
    { type: "Unpaid Leave", total: 10, used: 0, pending: 0 }
  ]
};

function initializeLeaves() {
  const stored = localStorage.getItem("aurahr_leaves");
  if (!stored) {
    localStorage.setItem("aurahr_leaves", JSON.stringify(DEFAULT_LEAVES));
  }
}

function initializeHolidays() {
  const stored = localStorage.getItem("aurahr_holidays");
  if (!stored) {
    localStorage.setItem("aurahr_holidays", JSON.stringify(DEFAULT_HOLIDAYS));
  }
}

function initializeLeaveBalances() {
  const stored = localStorage.getItem("aurahr_leave_balances");
  if (!stored) {
    localStorage.setItem("aurahr_leave_balances", JSON.stringify(DEFAULT_LEAVE_BALANCES));
  }
}

// Global invocation
initializeEmployees();
initializeDepartments();
initializeDesignations();
initializeAttendance();
initializeShifts();
initializeTimesheets();
initializeOvertime();
initializeLeaves();
initializeHolidays();
initializeLeaveBalances();
initializeSalaryStructures();
initializePayrollRecords();
initializePayrollHistory();
initializeJobs();
initializeCandidates();
initializeInterviews();
initializeOffers();

// Utility methods
window.AuraDB = {
  getEmployees: function() {
    initializeEmployees();
    return JSON.parse(localStorage.getItem("aurahr_employees"));
  },
  
  saveEmployees: function(employees) {
    localStorage.setItem("aurahr_employees", JSON.stringify(employees));
  },
  
  getEmployeeById: function(id) {
    const list = this.getEmployees();
    return list.find(e => e.id === id);
  },
  
  addEmployee: function(employee) {
    const list = this.getEmployees();
    list.push(employee);
    this.saveEmployees(list);
    return employee;
  },
  
  updateEmployee: function(id, updatedData) {
    const list = this.getEmployees();
    const idx = list.findIndex(e => e.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveEmployees(list);
      return list[idx];
    }
    return null;
  },
  
  deleteEmployee: function(id) {
    const list = this.getEmployees();
    const filtered = list.filter(e => e.id !== id);
    this.saveEmployees(filtered);
  },
  
  generateNextId: function() {
    const list = this.getEmployees();
    let max = 10;
    list.forEach(e => {
      const num = parseInt(e.id.replace("EMP-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "EMP-" + String(max + 1).padStart(3, "0");
  },

  // DEPARTMENTS
  getDepartments: function() {
    initializeDepartments();
    const depts = JSON.parse(localStorage.getItem("aurahr_departments")) || [];
    const emps = this.getEmployees();
    
    // dynamically overlay employee counts
    return depts.map(d => {
      const count = emps.filter(e => e.department && e.department.trim().toLowerCase() === d.name.trim().toLowerCase()).length;
      return { ...d, totalEmployees: count };
    });
  },

  saveDepartments: function(departments) {
    localStorage.setItem("aurahr_departments", JSON.stringify(departments));
  },

  getDepartmentById: function(id) {
    const list = this.getDepartments();
    return list.find(d => d.id === id);
  },

  addDepartment: function(dept) {
    const list = JSON.parse(localStorage.getItem("aurahr_departments")) || DEFAULT_DEPARTMENTS;
    list.push(dept);
    localStorage.setItem("aurahr_departments", JSON.stringify(list));
    return dept;
  },

  updateDepartment: function(id, updatedData) {
    const list = JSON.parse(localStorage.getItem("aurahr_departments")) || DEFAULT_DEPARTMENTS;
    const idx = list.findIndex(d => d.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      localStorage.setItem("aurahr_departments", JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteDepartment: function(id) {
    const list = JSON.parse(localStorage.getItem("aurahr_departments")) || DEFAULT_DEPARTMENTS;
    const filtered = list.filter(d => d.id !== id);
    localStorage.setItem("aurahr_departments", JSON.stringify(filtered));
  },

  generateNextDeptId: function() {
    const list = JSON.parse(localStorage.getItem("aurahr_departments")) || DEFAULT_DEPARTMENTS;
    let max = 5;
    list.forEach(d => {
      const num = parseInt(d.id.replace("DEPT-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "DEPT-" + String(max + 1).padStart(3, "0");
  },

  // DESIGNATIONS
  getDesignations: function() {
    initializeDesignations();
    const desigs = JSON.parse(localStorage.getItem("aurahr_designations")) || [];
    const emps = this.getEmployees();
    
    // dynamically overlay employee counts
    return desigs.map(d => {
      const count = emps.filter(e => e.designation && e.designation.trim().toLowerCase() === d.name.trim().toLowerCase()).length;
      return { ...d, totalEmployees: count };
    });
  },

  saveDesignations: function(designations) {
    localStorage.setItem("aurahr_designations", JSON.stringify(designations));
  },

  getDesignationById: function(id) {
    const list = this.getDesignations();
    return list.find(d => d.id === id);
  },

  addDesignation: function(desig) {
    const list = JSON.parse(localStorage.getItem("aurahr_designations")) || DEFAULT_DESIGNATIONS;
    list.push(desig);
    localStorage.setItem("aurahr_designations", JSON.stringify(list));
    return desig;
  },

  updateDesignation: function(id, updatedData) {
    const list = JSON.parse(localStorage.getItem("aurahr_designations")) || DEFAULT_DESIGNATIONS;
    const idx = list.findIndex(d => d.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      localStorage.setItem("aurahr_designations", JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteDesignation: function(id) {
    const list = JSON.parse(localStorage.getItem("aurahr_designations")) || DEFAULT_DESIGNATIONS;
    const filtered = list.filter(d => d.id !== id);
    localStorage.setItem("aurahr_designations", JSON.stringify(filtered));
  },

  generateNextDesigId: function() {
    const list = JSON.parse(localStorage.getItem("aurahr_designations")) || DEFAULT_DESIGNATIONS;
    let max = 10;
    list.forEach(d => {
      const num = parseInt(d.id.replace("DESIG-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "DESIG-" + String(max + 1).padStart(3, "0");
  },

  // ATTENDANCE
  getAttendance: function() {
    initializeAttendance();
    return JSON.parse(localStorage.getItem("aurahr_attendance")) || [];
  },

  saveAttendance: function(list) {
    localStorage.setItem("aurahr_attendance", JSON.stringify(list));
  },

  addAttendance: function(record) {
    const list = this.getAttendance();
    list.unshift(record); // newest first
    this.saveAttendance(list);
    return record;
  },

  updateAttendance: function(id, updatedData) {
    const list = this.getAttendance();
    const idx = list.findIndex(r => r.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveAttendance(list);
      return list[idx];
    }
    return null;
  },

  generateNextAttendanceId: function() {
    const list = this.getAttendance();
    let max = 12;
    list.forEach(r => {
      const num = parseInt(r.id.replace("ATT-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "ATT-" + String(max + 1).padStart(3, "0");
  },

  // SHIFTS
  getShifts: function() {
    initializeShifts();
    return JSON.parse(localStorage.getItem("aurahr_shifts")) || [];
  },

  saveShifts: function(list) {
    localStorage.setItem("aurahr_shifts", JSON.stringify(list));
  },

  addShift: function(record) {
    const list = this.getShifts();
    list.push(record);
    this.saveShifts(list);
    return record;
  },

  updateShift: function(id, updatedData) {
    const list = this.getShifts();
    const idx = list.findIndex(s => s.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveShifts(list);
      return list[idx];
    }
    return null;
  },

  deleteShift: function(id) {
    const list = this.getShifts();
    const filtered = list.filter(s => s.id !== id);
    this.saveShifts(filtered);
  },

  generateNextShiftId: function() {
    const list = this.getShifts();
    let max = 3;
    list.forEach(s => {
      const num = parseInt(s.id.replace("SHF-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "SHF-" + String(max + 1).padStart(3, "0");
  },

  // TIMESHEETS
  getTimesheets: function() {
    initializeTimesheets();
    return JSON.parse(localStorage.getItem("aurahr_timesheets")) || [];
  },

  saveTimesheets: function(list) {
    localStorage.setItem("aurahr_timesheets", JSON.stringify(list));
  },

  addTimesheet: function(record) {
    const list = this.getTimesheets();
    list.unshift(record);
    this.saveTimesheets(list);
    return record;
  },

  updateTimesheet: function(id, updatedData) {
    const list = this.getTimesheets();
    const idx = list.findIndex(t => t.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveTimesheets(list);
      return list[idx];
    }
    return null;
  },

  deleteTimesheet: function(id) {
    const list = this.getTimesheets();
    const filtered = list.filter(t => t.id !== id);
    this.saveTimesheets(filtered);
  },

  generateNextTimesheetId: function() {
    const list = this.getTimesheets();
    let max = 6;
    list.forEach(t => {
      const num = parseInt(t.id.replace("TS-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "TS-" + String(max + 1).padStart(3, "0");
  },

  // OVERTIME
  getOvertime: function() {
    initializeOvertime();
    return JSON.parse(localStorage.getItem("aurahr_overtime")) || [];
  },

  saveOvertime: function(list) {
    localStorage.setItem("aurahr_overtime", JSON.stringify(list));
  },

  addOvertime: function(record) {
    const list = this.getOvertime();
    list.unshift(record);
    this.saveOvertime(list);
    return record;
  },

  updateOvertime: function(id, updatedData) {
    const list = this.getOvertime();
    const idx = list.findIndex(o => o.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveOvertime(list);
      return list[idx];
    }
    return null;
  },

  deleteOvertime: function(id) {
    const list = this.getOvertime();
    const filtered = list.filter(o => o.id !== id);
    this.saveOvertime(filtered);
  },

  generateNextOvertimeId: function() {
    const list = this.getOvertime();
    let max = 4;
    list.forEach(o => {
      const num = parseInt(o.id.replace("OT-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "OT-" + String(max + 1).padStart(3, "0");
  },

  // LEAVES
  getLeaves: function() {
    initializeLeaves();
    return JSON.parse(localStorage.getItem("aurahr_leaves")) || [];
  },

  saveLeaves: function(list) {
    localStorage.setItem("aurahr_leaves", JSON.stringify(list));
  },

  addLeave: function(record) {
    const list = this.getLeaves();
    list.unshift(record);
    this.saveLeaves(list);
    return record;
  },

  updateLeave: function(id, updatedData) {
    const list = this.getLeaves();
    const idx = list.findIndex(l => l.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveLeaves(list);
      return list[idx];
    }
    return null;
  },

  deleteLeave: function(id) {
    const list = this.getLeaves();
    const filtered = list.filter(l => l.id !== id);
    this.saveLeaves(filtered);
  },

  generateNextLeaveId: function() {
    const list = this.getLeaves();
    let max = 6;
    list.forEach(l => {
      const num = parseInt(l.id.replace("LV-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "LV-" + String(max + 1).padStart(3, "0");
  },

  // HOLIDAYS
  getHolidays: function() {
    initializeHolidays();
    return JSON.parse(localStorage.getItem("aurahr_holidays")) || [];
  },

  saveHolidays: function(list) {
    localStorage.setItem("aurahr_holidays", JSON.stringify(list));
  },

  addHoliday: function(record) {
    const list = this.getHolidays();
    list.push(record);
    this.saveHolidays(list);
    return record;
  },

  updateHoliday: function(id, updatedData) {
    const list = this.getHolidays();
    const idx = list.findIndex(h => h.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveHolidays(list);
      return list[idx];
    }
    return null;
  },

  deleteHoliday: function(id) {
    const list = this.getHolidays();
    const filtered = list.filter(h => h.id !== id);
    this.saveHolidays(filtered);
  },

  generateNextHolidayId: function() {
    const list = this.getHolidays();
    let max = 8;
    list.forEach(h => {
      const num = parseInt(h.id.replace("HL-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "HL-" + String(max + 1).padStart(3, "0");
  },

  // LEAVE BALANCES
  getLeaveBalances: function(employeeId) {
    initializeLeaveBalances();
    const balances = JSON.parse(localStorage.getItem("aurahr_leave_balances")) || {};
    
    // If specific employee has no balances pre-saved, initialize standard set
    if (!balances[employeeId]) {
      balances[employeeId] = [
        { type: "Annual Leave", total: 15, used: 0, pending: 0 },
        { type: "Sick Leave", total: 10, used: 0, pending: 0 },
        { type: "Casual Leave", total: 10, used: 0, pending: 0 },
        { type: "Maternity/Paternity Leave", total: 30, used: 0, pending: 0 },
        { type: "Unpaid Leave", total: 10, used: 0, pending: 0 }
      ];
      localStorage.setItem("aurahr_leave_balances", JSON.stringify(balances));
    }
    return balances[employeeId];
  },

  saveLeaveBalances: function(employeeId, employeeBalances) {
    initializeLeaveBalances();
    const balances = JSON.parse(localStorage.getItem("aurahr_leave_balances")) || {};
    balances[employeeId] = employeeBalances;
    localStorage.setItem("aurahr_leave_balances", JSON.stringify(balances));
  },

  // SALARY STRUCTURES
  getSalaryStructures: function() {
    initializeSalaryStructures();
    return JSON.parse(localStorage.getItem("aurahr_salary_structures")) || [];
  },
  
  saveSalaryStructures: function(list) {
    localStorage.setItem("aurahr_salary_structures", JSON.stringify(list));
  },
  
  getSalaryStructureByEmpId: function(empId) {
    const list = this.getSalaryStructures();
    return list.find(s => s.employeeId === empId);
  },
  
  updateSalaryStructure: function(empId, updated) {
    const list = this.getSalaryStructures();
    const idx = list.findIndex(s => s.employeeId === empId);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updated };
      this.saveSalaryStructures(list);
      return list[idx];
    }
    return null;
  },

  // CURRENT PAYROLL
  getPayrollRecords: function() {
    initializePayrollRecords();
    return JSON.parse(localStorage.getItem("aurahr_payroll_records")) || [];
  },

  savePayrollRecords: function(list) {
    localStorage.setItem("aurahr_payroll_records", JSON.stringify(list));
  },

  updatePayrollRecordStatus: function(empId, status, paymentDate) {
    const list = this.getPayrollRecords();
    const idx = list.findIndex(p => p.employeeId === empId);
    if (idx !== -1) {
      list[idx].status = status;
      if (paymentDate !== undefined) list[idx].paymentDate = paymentDate;
      this.savePayrollRecords(list);
      return list[idx];
    }
    return null;
  },

  // PAYROLL HISTORY
  getPayrollHistory: function() {
    initializePayrollHistory();
    return JSON.parse(localStorage.getItem("aurahr_payroll_history")) || [];
  },

  savePayrollHistory: function(list) {
    localStorage.setItem("aurahr_payroll_history", JSON.stringify(list));
  },

  addPayrollHistoryRecord: function(record) {
    const list = this.getPayrollHistory();
    list.unshift(record);
    this.savePayrollHistory(list);
    return record;
  },

  generateNextHistoryId: function() {
    const list = this.getPayrollHistory();
    let max = 18;
    list.forEach(h => {
      const num = parseInt(h.id.replace("HIST-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "HIST-" + String(max + 1).padStart(3, "0");
  },

  // JOBS
  getJobs: function() {
    initializeJobs();
    return JSON.parse(localStorage.getItem("aurahr_jobs")) || [];
  },

  saveJobs: function(list) {
    localStorage.setItem("aurahr_jobs", JSON.stringify(list));
  },

  addJob: function(job) {
    const list = this.getJobs();
    list.unshift(job);
    this.saveJobs(list);
    return job;
  },

  updateJob: function(id, updated) {
    const list = this.getJobs();
    const idx = list.findIndex(j => j.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updated };
      this.saveJobs(list);
      return list[idx];
    }
    return null;
  },

  generateNextJobId: function() {
    const list = this.getJobs();
    let max = 6;
    list.forEach(j => {
      const num = parseInt(j.id.replace("JOB-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "JOB-" + String(max + 1).padStart(3, "0");
  },

  // CANDIDATES
  getCandidates: function() {
    initializeCandidates();
    return JSON.parse(localStorage.getItem("aurahr_candidates")) || [];
  },

  saveCandidates: function(list) {
    localStorage.setItem("aurahr_candidates", JSON.stringify(list));
  },

  addCandidate: function(candidate) {
    const list = this.getCandidates();
    list.unshift(candidate);
    this.saveCandidates(list);
    return candidate;
  },

  updateCandidate: function(id, updated) {
    const list = this.getCandidates();
    const idx = list.findIndex(c => c.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updated };
      this.saveCandidates(list);
      return list[idx];
    }
    return null;
  },

  generateNextCandidateId: function() {
    const list = this.getCandidates();
    let max = 7;
    list.forEach(c => {
      const num = parseInt(c.id.replace("CAN-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "CAN-" + String(max + 1).padStart(3, "0");
  },

  // INTERVIEWS
  getInterviews: function() {
    initializeInterviews();
    return JSON.parse(localStorage.getItem("aurahr_interviews")) || [];
  },

  saveInterviews: function(list) {
    localStorage.setItem("aurahr_interviews", JSON.stringify(list));
  },

  addInterview: function(interview) {
    const list = this.getInterviews();
    list.unshift(interview);
    this.saveInterviews(list);
    return interview;
  },

  updateInterview: function(id, updated) {
    const list = this.getInterviews();
    const idx = list.findIndex(i => i.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updated };
      this.saveInterviews(list);
      return list[idx];
    }
    return null;
  },

  generateNextInterviewId: function() {
    const list = this.getInterviews();
    let max = 4;
    list.forEach(i => {
      const num = parseInt(i.id.replace("INT-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "INT-" + String(max + 1).padStart(3, "0");
  },

  // OFFERS
  getOffers: function() {
    initializeOffers();
    return JSON.parse(localStorage.getItem("aurahr_offers")) || [];
  },

  saveOffers: function(list) {
    localStorage.setItem("aurahr_offers", JSON.stringify(list));
  },

  addOffer: function(offer) {
    const list = this.getOffers();
    list.unshift(offer);
    this.saveOffers(list);
    return offer;
  },

  updateOffer: function(id, updated) {
    const list = this.getOffers();
    const idx = list.findIndex(o => o.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updated };
      this.saveOffers(list);
      return list[idx];
    }
    return null;
  },

  generateNextOfferId: function() {
    const list = this.getOffers();
    let max = 2;
    list.forEach(o => {
      const num = parseInt(o.id.replace("OFF-", ""));
      if (!isNaN(num) && num > max) max = num;
    });
    return "OFF-" + String(max + 1).padStart(3, "0");
  }
};

const DEFAULT_SALARY_STRUCTURES = [
  { employeeId: "EMP-001", basic: 7500, houseAllowance: 1500, medicalAllowance: 600, transportAllowance: 500, otherAllowance: 400, tax: 1050, pf: 375, otherDeduction: 150 },
  { employeeId: "EMP-002", basic: 9000, houseAllowance: 1800, medicalAllowance: 800, transportAllowance: 600, otherAllowance: 500, tax: 1270, pf: 450, otherDeduction: 180 },
  { employeeId: "EMP-003", basic: 5000, houseAllowance: 1000, medicalAllowance: 400, transportAllowance: 300, otherAllowance: 200, tax: 690, pf: 250, otherDeduction: 100 },
  { employeeId: "EMP-004", basic: 10000, houseAllowance: 2000, medicalAllowance: 900, transportAllowance: 700, otherAllowance: 600, tax: 1420, pf: 500, otherDeduction: 200 },
  { employeeId: "EMP-005", basic: 6500, houseAllowance: 1300, medicalAllowance: 500, transportAllowance: 400, otherAllowance: 300, tax: 900, pf: 325, otherDeduction: 125 },
  { employeeId: "EMP-006", basic: 3500, houseAllowance: 700, medicalAllowance: 300, transportAllowance: 200, otherAllowance: 150, tax: 485, pf: 175, otherDeduction: 80 },
  { employeeId: "EMP-007", basic: 6000, houseAllowance: 1200, medicalAllowance: 500, transportAllowance: 400, otherAllowance: 300, tax: 840, pf: 300, otherDeduction: 120 },
  { employeeId: "EMP-008", basic: 4000, houseAllowance: 800, medicalAllowance: 350, transportAllowance: 250, otherAllowance: 150, tax: 555, pf: 200, otherDeduction: 95 },
  { employeeId: "EMP-009", basic: 5500, houseAllowance: 1100, medicalAllowance: 450, transportAllowance: 350, otherAllowance: 250, tax: 765, pf: 275, otherDeduction: 110 },
  { employeeId: "EMP-010", basic: 5200, houseAllowance: 1040, medicalAllowance: 420, transportAllowance: 320, otherAllowance: 220, tax: 722, pf: 260, otherDeduction: 105 }
];

const DEFAULT_PAYROLL_RECORDS = [
  { employeeId: "EMP-001", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-002", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-003", status: "Pending", paymentDate: "" },
  { employeeId: "EMP-004", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-005", status: "Pending", paymentDate: "" },
  { employeeId: "EMP-006", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-007", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-008", status: "Pending", paymentDate: "" },
  { employeeId: "EMP-009", status: "Paid", paymentDate: "2026-07-31" },
  { employeeId: "EMP-010", status: "Pending", paymentDate: "" }
];

const DEFAULT_PAYROLL_HISTORY = [
  { id: "HIST-001", month: "June 2026", employeeId: "EMP-001", employeeName: "Sarah Jenkins", netSalary: 8925, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-002", month: "June 2026", employeeId: "EMP-002", employeeName: "Marcus Vance", netSalary: 10800, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-003", month: "June 2026", employeeId: "EMP-003", employeeName: "Emily Rose", netSalary: 5860, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-004", month: "June 2026", employeeId: "EMP-004", employeeName: "Robert Chen", netSalary: 12080, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-005", month: "June 2026", employeeId: "EMP-005", employeeName: "Sophia Martinez", netSalary: 7650, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-006", month: "June 2026", employeeId: "EMP-006", employeeName: "John Davis", netSalary: 4110, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-007", month: "June 2026", employeeId: "EMP-007", employeeName: "Lina Vance", netSalary: 7140, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-008", month: "June 2026", employeeId: "EMP-009", employeeName: "David Kim", netSalary: 6500, paymentDate: "2026-06-30", status: "Paid" },
  { id: "HIST-009", month: "May 2026", employeeId: "EMP-001", employeeName: "Sarah Jenkins", netSalary: 8925, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-010", month: "May 2026", employeeId: "EMP-002", employeeName: "Marcus Vance", netSalary: 10800, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-011", month: "May 2026", employeeId: "EMP-003", employeeName: "Emily Rose", netSalary: 5860, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-012", month: "May 2026", employeeId: "EMP-004", employeeName: "Robert Chen", netSalary: 12080, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-013", month: "May 2026", employeeId: "EMP-005", employeeName: "Sophia Martinez", netSalary: 7650, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-014", month: "May 2026", employeeId: "EMP-007", employeeName: "Lina Vance", netSalary: 7140, paymentDate: "2026-05-30", status: "Paid" },
  { id: "HIST-015", month: "April 2026", employeeId: "EMP-001", employeeName: "Sarah Jenkins", netSalary: 8925, paymentDate: "2026-04-30", status: "Paid" },
  { id: "HIST-016", month: "April 2026", employeeId: "EMP-002", employeeName: "Marcus Vance", netSalary: 10800, paymentDate: "2026-04-30", status: "Paid" },
  { id: "HIST-017", month: "April 2026", employeeId: "EMP-003", employeeName: "Emily Rose", netSalary: 5860, paymentDate: "2026-04-30", status: "Paid" },
  { id: "HIST-018", month: "April 2026", employeeId: "EMP-004", employeeName: "Robert Chen", netSalary: 12080, paymentDate: "2026-04-30", status: "Paid" }
];

function initializeSalaryStructures() {
  const stored = localStorage.getItem("aurahr_salary_structures");
  if (!stored) {
    localStorage.setItem("aurahr_salary_structures", JSON.stringify(DEFAULT_SALARY_STRUCTURES));
  }
}

function initializePayrollRecords() {
  const stored = localStorage.getItem("aurahr_payroll_records");
  if (!stored) {
    localStorage.setItem("aurahr_payroll_records", JSON.stringify(DEFAULT_PAYROLL_RECORDS));
  }
}

function initializePayrollHistory() {
  const stored = localStorage.getItem("aurahr_payroll_history");
  if (!stored) {
    localStorage.setItem("aurahr_payroll_history", JSON.stringify(DEFAULT_PAYROLL_HISTORY));
  }
}

const DEFAULT_JOBS = [
  {
    id: "JOB-001",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    employmentType: "Full-Time",
    vacancies: 2,
    closingDate: "2026-08-15",
    status: "Active",
    experience: "Senior (5+ years)",
    salaryRange: "$130,000 - $160,000"
  },
  {
    id: "JOB-002",
    title: "HR Specialist",
    department: "HR",
    location: "Remote",
    employmentType: "Full-Time",
    vacancies: 1,
    closingDate: "2026-08-20",
    status: "Active",
    experience: "Mid-level (2-4 years)",
    salaryRange: "$75,000 - $90,000"
  },
  {
    id: "JOB-003",
    title: "UI/UX Designer",
    department: "Design",
    location: "Cupertino, CA",
    employmentType: "Contract",
    vacancies: 1,
    closingDate: "2026-08-10",
    status: "Active",
    experience: "Senior (5+ years)",
    salaryRange: "$90,000 - $115,000"
  },
  {
    id: "JOB-004",
    title: "Backend Lead (Go/Node)",
    department: "Engineering",
    location: "Cupertino, CA",
    employmentType: "Full-Time",
    vacancies: 1,
    closingDate: "2026-08-30",
    status: "Active",
    experience: "Lead (8+ years)",
    salaryRange: "$150,000 - $180,000"
  },
  {
    id: "JOB-005",
    title: "Marketing Executive",
    department: "Marketing",
    location: "Remote",
    employmentType: "Part-Time",
    vacancies: 2,
    closingDate: "2026-08-25",
    status: "Active",
    experience: "Entry-level (1-2 years)",
    salaryRange: "$40,000 - $55,000"
  },
  {
    id: "JOB-006",
    title: "Product Manager",
    department: "Operations",
    location: "Cupertino, CA",
    employmentType: "Full-Time",
    vacancies: 1,
    closingDate: "2026-06-30",
    status: "Closed",
    experience: "Mid-level (3-5 years)",
    salaryRange: "$110,000 - $130,000"
  }
];

const DEFAULT_CANDIDATES = [
  {
    id: "CAN-001",
    name: "Amanda Ross",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    email: "amanda.ross@example.com",
    phone: "+1 (555) 019-3382",
    position: "Senior Frontend Engineer",
    experience: "5 Years",
    skills: ["React", "Vue", "TypeScript", "Tailwind"],
    appliedDate: "2026-06-25",
    status: "Interviewing",
    resumeUrl: "#",
    rating: 4.8,
    source: "LinkedIn"
  },
  {
    id: "CAN-002",
    name: "Brian Finch",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    email: "brian.finch@example.com",
    phone: "+1 (555) 014-4829",
    position: "HR Specialist",
    experience: "3 Years",
    skills: ["Recruitment", "Onboarding", "Employment Law"],
    appliedDate: "2026-06-27",
    status: "Shortlisted",
    resumeUrl: "#",
    rating: 4.2,
    source: "Referral"
  },
  {
    id: "CAN-003",
    name: "Diana Prince",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    email: "diana.p@example.com",
    phone: "+1 (555) 017-7721",
    position: "UI/UX Designer",
    experience: "6 Years",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    appliedDate: "2026-06-22",
    status: "Offered",
    resumeUrl: "#",
    rating: 4.9,
    source: "Careers Portal"
  },
  {
    id: "CAN-004",
    name: "Ethan Hunt",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    email: "ethan.h@example.com",
    phone: "+1 (555) 012-9988",
    position: "Backend Lead (Go/Node)",
    experience: "8 Years",
    skills: ["Go", "Node.js", "Docker", "Kubernetes", "gRPC"],
    appliedDate: "2026-06-20",
    status: "Hired",
    resumeUrl: "#",
    rating: 5.0,
    source: "LinkedIn"
  },
  {
    id: "CAN-005",
    name: "Fiona Gallagher",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    email: "fiona.g@example.com",
    phone: "+1 (555) 011-2234",
    position: "Marketing Executive",
    experience: "2 Years",
    skills: ["SEO", "Google Analytics", "Content Writing", "Social Media"],
    appliedDate: "2026-06-28",
    status: "Applied",
    resumeUrl: "#",
    rating: 3.8,
    source: "Indeed"
  },
  {
    id: "CAN-006",
    name: "George Cooper",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128",
    email: "george.c@example.com",
    phone: "+1 (555) 018-3849",
    position: "Senior Frontend Engineer",
    experience: "4 Years",
    skills: ["React", "Redux", "Webpack", "CSS modules"],
    appliedDate: "2026-06-24",
    status: "Rejected",
    resumeUrl: "#",
    rating: 3.2,
    source: "Indeed"
  },
  {
    id: "CAN-007",
    name: "Hannah Baker",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    email: "hannah.b@example.com",
    phone: "+1 (555) 019-1122",
    position: "Senior Frontend Engineer",
    experience: "7 Years",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Jest"],
    appliedDate: "2026-06-29",
    status: "Interviewing",
    resumeUrl: "#",
    rating: 4.7,
    source: "LinkedIn"
  }
];

const DEFAULT_INTERVIEWS = [
  {
    id: "INT-001",
    candidateId: "CAN-001",
    candidateName: "Amanda Ross",
    position: "Senior Frontend Engineer",
    interviewer: "Marcus Vance",
    date: "2026-07-04",
    time: "10:00 AM",
    type: "Technical Round",
    status: "Scheduled",
    feedback: ""
  },
  {
    id: "INT-002",
    candidateId: "CAN-007",
    candidateName: "Hannah Baker",
    position: "Senior Frontend Engineer",
    interviewer: "Marcus Vance",
    date: "2026-07-05",
    time: "02:00 PM",
    type: "System Design",
    status: "Scheduled",
    feedback: ""
  },
  {
    id: "INT-003",
    candidateId: "CAN-003",
    candidateName: "Diana Prince",
    position: "UI/UX Designer",
    interviewer: "David Kim",
    date: "2026-06-28",
    time: "11:30 AM",
    type: "Portfolio Review",
    status: "Completed",
    feedback: "Exceptional portfolio, strong design vocabulary and system alignment."
  },
  {
    id: "INT-004",
    candidateId: "CAN-004",
    candidateName: "Ethan Hunt",
    position: "Backend Lead (Go/Node)",
    interviewer: "Robert Chen",
    date: "2026-06-26",
    time: "03:00 PM",
    type: "Technical Round",
    status: "Completed",
    feedback: "Flawless coding session, answered all concurrency questions beautifully."
  }
];

const DEFAULT_OFFERS = [
  {
    id: "OFF-001",
    candidateId: "CAN-003",
    candidateName: "Diana Prince",
    position: "UI/UX Designer",
    offeredSalary: 95000,
    joiningDate: "2026-08-01",
    status: "Sent"
  },
  {
    id: "OFF-002",
    candidateId: "CAN-004",
    candidateName: "Ethan Hunt",
    position: "Backend Lead (Go/Node)",
    offeredSalary: 155000,
    joiningDate: "2026-07-20",
    status: "Accepted"
  }
];

function initializeJobs() {
  const stored = localStorage.getItem("aurahr_jobs");
  if (!stored) {
    localStorage.setItem("aurahr_jobs", JSON.stringify(DEFAULT_JOBS));
  }
}

function initializeCandidates() {
  const stored = localStorage.getItem("aurahr_candidates");
  if (!stored) {
    localStorage.setItem("aurahr_candidates", JSON.stringify(DEFAULT_CANDIDATES));
  }
}

function initializeInterviews() {
  const stored = localStorage.getItem("aurahr_interviews");
  if (!stored) {
    localStorage.setItem("aurahr_interviews", JSON.stringify(DEFAULT_INTERVIEWS));
  }
}

function initializeOffers() {
  const stored = localStorage.getItem("aurahr_offers");
  if (!stored) {
    localStorage.setItem("aurahr_offers", JSON.stringify(DEFAULT_OFFERS));
  }
}
