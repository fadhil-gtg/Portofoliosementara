import type { Language } from '../../components/Navbar'

export interface ProjectData {
  slug: string
  title: string
  description: string
  descriptionId: string
  stack: string[]
  githubUrl: string
  demoUrl: string
  accent: string
  imageUrl: string
  features: string[]
  featuresId: string[]
  longDescription: string
  longDescriptionId: string
}

export const projectsData: ProjectData[] = [
  {
    slug: 'portfolio-motion-system',
    title: 'Portfolio Motion System',
    description:
      'A cinematic portfolio experience with scroll-driven storytelling, animated sections, responsive layouts, and refined interaction design.',
    descriptionId:
      'Pengalaman portfolio sinematik dengan storytelling berbasis scroll, section animatif, layout responsif, dan interaction design yang rapi.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP'],
    githubUrl: 'https://github.com/',
    demoUrl: '#top',
    accent: 'from-[#FAFAF7] via-[#E8E8E3] to-[#9B9B8F]',
    imageUrl: '/assets/logos/Komdigi1.png',
    features: [
      'Scroll-driven cinematic animation with 217-frame canvas sequence',
      'GSAP ScrollTrigger integration for precise scroll-based storytelling',
      'Lenis smooth scroll for buttery 60fps navigation',
      'Interactive 3D profile card with tilt & glare effects',
      'Bilingual support (English & Indonesian)',
      'Fully responsive across all breakpoints',
    ],
    featuresId: [
      'Animasi sinematik berbasis scroll dengan 217 frame canvas',
      'Integrasi GSAP ScrollTrigger untuk storytelling presisi',
      'Lenis smooth scroll untuk navigasi 60fps yang halus',
      'Kartu profil 3D interaktif dengan efek tilt & glare',
      'Dukungan bilingual (Inggris & Indonesia)',
      'Responsif di semua ukuran layar',
    ],
    longDescription:
      'This portfolio is a cinematic web experience designed to showcase skills and projects through scroll-driven storytelling. Built with React, TypeScript, and GSAP, it features a 217-frame canvas animation sequence, smooth Lenis scrolling, interactive 3D elements, and a carefully crafted dark premium theme with gold accents. Every section transition, hover effect, and layout decision was refined for a polished, professional feel.',
    longDescriptionId:
      'Portfolio ini adalah pengalaman web sinematik yang dirancang untuk menampilkan skill dan proyek melalui storytelling berbasis scroll. Dibangun dengan React, TypeScript, dan GSAP, featuring animasi canvas 217 frame, scroll Lenis yang halus, elemen 3D interaktif, dan tema dark premium dengan aksen gold yang dirancang dengan cermat. Setiap transisi section, efek hover, dan keputusan layout disempurnakan untuk tampilan yang profesional.',
  },
  {
    slug: 'linux-server-lab',
    title: 'Linux Server Lab',
    description:
      'A practical system administration lab focused on Linux services, permissions, package workflows, shell tooling, and reliable maintenance habits.',
    descriptionId:
      'Lab administrasi sistem praktis yang fokus pada service Linux, permission, package workflow, shell tooling, dan kebiasaan maintenance yang andal.',
    stack: ['Linux', 'Docker', 'Networking', 'Shell', 'Ansible'],
    githubUrl: 'https://github.com/',
    demoUrl: '#experience',
    accent: 'from-[#D8E6FF] via-[#90B7FF] to-[#26324D]',
    imageUrl: '/assets/logos/PT2.png',
    features: [
      'Hands-on Linux service management and configuration',
      'Docker containerization workflows for development environments',
      'Ansible playbooks for automated server provisioning',
      'Shell scripting utilities for daily maintenance tasks',
      'Permission and user management best practices',
      'Package management workflows across distributions',
    ],
    featuresId: [
      'Praktik langsung manajemen dan konfigurasi service Linux',
      'Workflow containerization Docker untuk lingkungan development',
      'Playbook Ansible untuk provisioning server otomatis',
      'Utility shell scripting untuk tugas maintenance harian',
      'Best practice manajemen permission dan user',
      'Workflow package management lintas distribusi',
    ],
    longDescription:
      'Linux Server Lab is a practical learning environment focused on system administration. It covers essential Linux skills including service management, Docker containerization, Ansible automation, shell scripting, and package workflows. Each module is designed as a hands-on exercise that mirrors real-world server maintenance scenarios, building reliable habits for production environments.',
    longDescriptionId:
      'Linux Server Lab adalah lingkungan belajar praktis yang fokus pada administrasi sistem. Mencakup skill Linux esensial termasuk manajemen service, containerization Docker, otomasi Ansible, shell scripting, dan workflow package. Setiap modul dirancang sebagai latihan hands-on yang mencerminkan skenario maintenance server dunia nyata.',
  },
  {
    slug: 'network-troubleshooting-kit',
    title: 'Network Troubleshooting Kit',
    description:
      'A learning-focused toolkit concept for documenting IP addressing, diagnostics, routing checks, and structured troubleshooting workflows.',
    descriptionId:
      'Konsep toolkit pembelajaran untuk dokumentasi IP addressing, diagnostik, pengecekan routing, dan workflow troubleshooting terstruktur.',
    stack: ['Networking', 'Linux', 'GitHub', 'Documentation'],
    githubUrl: 'https://github.com/',
    demoUrl: '#skills',
    accent: 'from-[#F7E7C6] via-[#D8A85C] to-[#3A2A16]',
    imageUrl: '/assets/logos/adhikarace3.png',
    features: [
      'Structured IP addressing documentation and subnet calculators',
      'Network diagnostic command reference with examples',
      'Routing table analysis and troubleshooting workflows',
      'Step-by-step OSI model troubleshooting methodology',
      'Packet capture analysis guides using tcpdump and Wireshark',
      'Version-controlled documentation with GitHub integration',
    ],
    featuresId: [
      'Dokumentasi IP addressing terstruktur dan subnet calculator',
      'Referensi command diagnostik jaringan dengan contoh',
      'Analisis routing table dan workflow troubleshooting',
      'Metodologi troubleshooting model OSI langkah demi langkah',
      'Panduan analisis packet capture dengan tcpdump dan Wireshark',
      'Dokumentasi version-controlled dengan integrasi GitHub',
    ],
    longDescription:
      'Network Troubleshooting Kit is a comprehensive learning toolkit designed for networking students and professionals. It provides structured documentation for IP addressing, diagnostic commands, routing analysis, and step-by-step troubleshooting workflows following the OSI model. The project emphasizes practical, real-world scenarios with clear documentation that can be referenced during actual network issues.',
    longDescriptionId:
      'Network Troubleshooting Kit adalah toolkit belajar komprehensif yang dirancang untuk siswa dan profesional networking. Menyediakan dokumentasi terstruktur untuk IP addressing, command diagnostik, analisis routing, dan workflow troubleshooting langkah demi langkah mengikuti model OSI. Proyek ini menekankan skenario praktis dunia nyata dengan dokumentasi jelas.',
  },
  {
    slug: 'tkj-learning-hub',
    title: 'TKJ Learning Hub',
    description:
      'A structured learning space for collecting networking notes, Linux commands, web experiments, and practical technical references.',
    descriptionId:
      'Ruang belajar terstruktur untuk mengumpulkan catatan networking, command Linux, eksperimen web, dan referensi teknis praktis.',
    stack: ['React', 'Tailwind CSS', 'Linux', 'Networking', 'Docs'],
    githubUrl: 'https://github.com/',
    demoUrl: '#contact',
    accent: 'from-[#E8D7A8] via-[#C8A96E] to-[#2C2417]',
    imageUrl: '/assets/logos/monitoring4.png',
    features: [
      'Organized note-taking system for TKJ curriculum topics',
      'Linux command cheat sheets with practical examples',
      'Web development experiment logs and code snippets',
      'Networking concept visualizations and diagrams',
      'Searchable reference library for quick lookups',
      'Progress tracking across learning modules',
    ],
    featuresId: [
      'Sistem catatan terorganisir untuk topik kurikulum TKJ',
      'Cheat sheet command Linux dengan contoh praktis',
      'Log eksperimen web development dan code snippet',
      'Visualisasi dan diagram konsep networking',
      'Referensi library yang bisa dicari untuk lookup cepat',
      'Tracking progress di seluruh modul pembelajaran',
    ],
    longDescription:
      'TKJ Learning Hub is a structured digital workspace built for Computer and Network Engineering students. It serves as a centralized repository for networking notes, Linux command references, web development experiments, and practical technical documentation. The platform is designed to make studying more efficient with organized categories, searchable content, and progress tracking across different learning modules.',
    longDescriptionId:
      'TKJ Learning Hub adalah workspace digital terstruktur yang dibangun untuk siswa Teknik Komputer dan Jaringan. Berfungsi sebagai repositori terpusat untuk catatan networking, referensi command Linux, eksperimen web development, dan dokumentasi teknis praktis. Platform ini dirancang untuk membuat belajar lebih efisien dengan kategori terorganisir dan tracking progress.',
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug)
}

export function getProjectDescription(project: ProjectData, language: Language): string {
  return language === 'id' ? project.descriptionId : project.description
}

export function getProjectFeatures(project: ProjectData, language: Language): string[] {
  return language === 'id' ? project.featuresId : project.features
}

export function getProjectLongDescription(project: ProjectData, language: Language): string {
  return language === 'id' ? project.longDescriptionId : project.longDescription
}
