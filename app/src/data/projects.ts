export interface Project {
  id: number
  slug: string
  title: string
  client: string

  // Keep original UI expectation
  category: 'Brand Identity' | 'Digital Design' | 'Campaign'
  year: string

  // Main card image used by existing pages
  image: string

  // Detailed fields (optional) for richer ProjectDetail rendering
  role?: string
  type?: string
  techStack?: string[]
  description?: string
  features?: string[]
  highlights?: string[]
  icon?: string
  screenshots?: string[]
  certificate?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ipass',
    title: 'iPass – Mobile & Web Application',
    role: 'Lead Developer & Founder',
    type: 'Mobile & Web',
    year: '2024',
    client: 'Startup Project - Board Exam Review Platform',
    category: 'Digital Design',
    techStack: ['React Native', 'Expo', 'MySQL', 'Node.js'],
    description:
      '🚀 Startup project revolutionizing board exam preparation. A comprehensive digital alternative to traditional review centers, empowering students with self-paced study tools for professional licensure examinations. Features randomized question banks, mock examinations, and comprehensive results tracking.',
    features: [
      'Digital alternative to traditional review centers',
      'Self-paced learning platform for board exam takers',
      'Randomized question bank system',
      'Mock exam simulation environment',
      'RESTful API architecture',
      'Interactive dashboard for students',
      'Comprehensive review modules',
      'Real-time results tracking and analytics',
      'Progress monitoring and performance insights',
      'Affordable alternative for self-study learners',
    ],
    highlights: [
      'Startup project democratizing board exam review access',
      'Built complete mobile and web applications from scratch',
      'Digital alternative to expensive review centers',
      'Empowers self-directed learners',
      'Implemented robust backend with Supabase',
      'Designed user-friendly interface for optimal learning experience',
      'Integrated real-time data synchronization',
    ],
    icon: '/assets/icons/ipass.png',
    image: '/images/project-1.jpg',
    screenshots: ['/assets/screenshots/ipass-1.png', '/assets/screenshots/ipass-2.png', '/assets/screenshots/ipass-3.png'],
    certificate: '/assets/certificates/ipass-certificate.pdf',
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: 2,
    slug: 'barmmhrs',
    title: 'BARMMHRS – De La Salle Survey App',
    role: 'Frontend Developer (Junior Dev)',
    type: 'Mobile',
    year: '2024',
    client: 'De La Salle University',
    category: 'Digital Design',
    techStack: ['React Native', 'Expo'],
    description:
      'Human resource survey system developed for the BARMM (Bangsamoro Autonomous Region in Muslim Mindanao) region. Streamlines data collection processes for field survey operations.',
    features: [
      'Clean and intuitive UI components',
      'Data visualization dashboards',
      'Optimized user flows for field survey takers',
      'Offline data collection capability',
      'Real-time survey submission',
      'Response analytics and reporting',
    ],
    highlights: [
      'Collaborated with La Salle development team',
      'Built responsive UI components',
      'Implemented data visualization features',
      'Ensured smooth user experience for field workers',
    ],
    icon: '/assets/icons/barmmhrs.png',
    image: '/images/project-2.jpg',
    screenshots: ['/assets/screenshots/barmmhrs-1.png', '/assets/screenshots/barmmhrs-2.png'],
    certificate: '/assets/certificates/barmmhrs-certificate.pdf',
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: 3,
    slug: 'makasa',
    title: 'MAKASA Mobile Application',
    role: 'Mobile Developer',
    type: 'Mobile',
    year: '2023',
    client: 'Bohol Island State University',
    category: 'Campaign',
    techStack: ['React Native', 'Node.js'],
    description:
      'Agricultural community data collection tool designed for BISU research initiatives. Enables real-time data submission and supports offline-first functionality for field use.',
    features: [
      'Real-time form submission via REST API',
      'Offline-first architecture',
      'Agricultural data collection forms',
      'GPS location tracking',
      'Photo documentation capabilities',
      'Data synchronization when online',
    ],
    highlights: [
      'Developed for agricultural research',
      'Implemented offline-first approach',
      'Built robust data synchronization',
      'Optimized for field conditions',
    ],
    icon: '/assets/icons/makasa.png',
    image: '/images/project-3.jpg',
    screenshots: ['/assets/screenshots/makasa-1.png', '/assets/screenshots/makasa-2.png'],
    certificate: '/assets/certificates/makasa-certificate.pdf',
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },

  // Keep remaining existing projects until you paste the full dataset
  { id: 4, slug: 'aether-health', title: 'Aether Health', client: 'Aether Biotech', category: 'Brand Identity', year: '2024', image: '/images/project-4.jpg' },
  { id: 5, slug: 'prism-architecture', title: 'Prism Architecture', client: 'Prism Studio', category: 'Digital Design', year: '2024', image: '/images/project-5.jpg' },
  { id: 6, slug: 'kinetic-labs', title: 'Kinetic Labs', client: 'Kinetic AI', category: 'Brand Identity', year: '2023', image: '/images/project-6.jpg' },
  { id: 7, slug: 'solara-energy', title: 'Solara Energy', client: 'Solara Corp', category: 'Campaign', year: '2023', image: '/images/project-7.jpg' },
  { id: 8, slug: 'vanta-security', title: 'Vanta Security', client: 'Vanta Systems', category: 'Digital Design', year: '2023', image: '/images/project-8.jpg' },
  { id: 9, slug: 'obsidian-media', title: 'Obsidian Media', client: 'Obsidian Network', category: 'Brand Identity', year: '2023', image: '/images/project-9.jpg' },
  { id: 10, slug: 'cirrus-cloud', title: 'Cirrus Cloud', client: 'Cirrus Tech', category: 'Campaign', year: '2022', image: '/images/project-10.jpg' },
  { id: 11, slug: 'helix-biotech', title: 'Helix Biotech', client: 'Helix Research', category: 'Digital Design', year: '2022', image: '/images/project-11.jpg' },
  { id: 12, slug: 'forge-motors', title: 'Forge Motors', client: 'Forge Automotive', category: 'Brand Identity', year: '2022', image: '/images/project-12.jpg' },
  { id: 13, slug: 'terra-gardens', title: 'Terra Gardens', client: 'Terra Collective', category: 'Campaign', year: '2022', image: '/images/project-1.jpg' },
  { id: 14, slug: 'pulse-fitness', title: 'Pulse Fitness', client: 'Pulse Athletics', category: 'Digital Design', year: '2021', image: '/images/project-2.jpg' },
  { id: 15, slug: 'cipher-security', title: 'Cipher Security', client: 'Cipher Defense', category: 'Brand Identity', year: '2021', image: '/images/project-3.jpg' },
  { id: 16, slug: 'atlas-ventures', title: 'Atlas Ventures', client: 'Atlas Capital', category: 'Campaign', year: '2021', image: '/images/project-4.jpg' },
  { id: 17, slug: 'echo-sound', title: 'Echo Sound', client: 'Echo Studios', category: 'Digital Design', year: '2020', image: '/images/project-5.jpg' },
  { id: 18, slug: 'nomad-travel', title: 'Nomad Travel', client: 'Nomad Co', category: 'Brand Identity', year: '2020', image: '/images/project-6.jpg' },
  { id: 19, slug: 'vertex-pharma', title: 'Vertex Pharma', client: 'Vertex Health', category: 'Campaign', year: '2020', image: '/images/project-7.jpg' },
  { id: 20, slug: 'rift-gaming', title: 'Rift Gaming', client: 'Rift Entertainment', category: 'Digital Design', year: '2019', image: '/images/project-8.jpg' },
  { id: 21, slug: 'dusk-fashion', title: 'Dusk Fashion', client: 'Dusk Atelier', category: 'Brand Identity', year: '2019', image: '/images/project-9.jpg' },
  { id: 22, slug: 'spark-education', title: 'Spark Education', client: 'Spark Learning', category: 'Campaign', year: '2019', image: '/images/project-10.jpg' },
]

export const featuredProject = projects[0]

export const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Visual systems that define how your brand looks, speaks, and lives in the world. From strategy to guidelines, we build identities that scale.',
  },
  {
    number: '02',
    title: 'Digital Design',
    description: 'Websites, platforms, and digital products designed for impact. Every interaction is considered, every detail intentional.',
  },
  {
    number: '03',
    title: 'Creative Campaign',
    description: 'Campaign concepts and visual narratives that cut through the noise. Bold ideas executed with precision across every channel.',
  },
]

export const awards = [
  { name: 'Awwwards SOTD', project: 'Meridian Audio', year: '2025' },
  { name: 'CSS Design Awards', project: 'Lumina Finance', year: '2025' },
  { name: 'FWA of the Month', project: 'Nova Retail', year: '2024' },
  { name: 'Webby Honoree', project: 'Aether Health', year: '2024' },
  { name: 'Red Dot Design', project: 'Prism Architecture', year: '2024' },
  { name: 'Communication Arts', project: 'Kinetic Labs', year: '2023' },
]
