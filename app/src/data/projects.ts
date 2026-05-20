export interface Project {
  id: number
  slug: string
  title: string
  client: string
  category: 'Brand Identity' | 'Digital Design' | 'Campaign'
  year: string
  image: string
}

export const projects: Project[] = [
  { id: 1, slug: 'meridian-audio', title: 'Meridian Audio', client: 'Meridian', category: 'Brand Identity', year: '2025', image: '/images/project-1.jpg' },
  { id: 2, slug: 'lumina-finance', title: 'Lumina Finance', client: 'Lumina Capital', category: 'Digital Design', year: '2025', image: '/images/project-2.jpg' },
  { id: 3, slug: 'nova-retail', title: 'Nova Retail', client: 'Nova Group', category: 'Campaign', year: '2024', image: '/images/project-3.jpg' },
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
