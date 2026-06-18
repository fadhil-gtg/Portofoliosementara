import { BorderGlow, BlurText } from '../../components/ReactBits'
import { useEffect, useRef, useState } from 'react'
import type { Language } from '../../components/Navbar'

interface Skill {
  name: string
  description: string
  icon: string
  brandColor: string
  glowHSL: string
}

const skillDescriptionsId: Record<string, string> = {
  Linux: 'Dasar sistem operasi dan server',
  Docker: 'Containerization dan deployment',
  Ansible: 'Otomasi dan manajemen konfigurasi',
  HTML: 'Struktur dan markup web',
  CSS: 'Styling dan desain responsif',
  JavaScript: 'Bahasa pemrograman',
  'Vue.js': 'Framework front-end',
  React: 'Library UI untuk membangun antarmuka',
  'Next.js': 'Framework React untuk aplikasi web produksi',
  TypeScript: 'Pengembangan JavaScript bertipe',
  Vite: 'Build tool cepat untuk web modern',
  'Tailwind CSS': 'Framework CSS utility-first',
  'Three.js': 'Grafik 3D untuk web',
  GSAP: 'Animasi dan efek motion',
  n8n: 'Otomasi workflow',
  MySQL: 'Database relasional',
  PostgreSQL: 'Database relasional',
  Laravel: 'Framework web PHP',
  CapCut: 'Editing video',
  Shopee: 'Marketplace dan konten afiliasi',
  Subnetting: 'Perencanaan alamat jaringan dan IP',
  'Adobe Stock': 'Membuat gambar/video AI, metadata, lalu mengunggah ke Adobe Stock',
  'Mobile Legends': 'Mencapai rank Mythical Glory dengan 56 bintang',
}

const skills: Skill[] = [
  {
    name: 'Linux',
    description: 'Operating system and server fundamentals',
    icon: 'https://cdn.simpleicons.org/linux/FCC624',
    brandColor: '#FCC624',
    glowHSL: '48 96 55',
  },
  {
    name: 'Docker',
    description: 'Containerization and deployment',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    brandColor: '#2496ED',
    glowHSL: '205 80 54',
  },
  {
    name: 'Ansible',
    description: 'Automation and configuration management',
    icon: 'https://cdn.simpleicons.org/ansible/EE0000',
    brandColor: '#EE0000',
    glowHSL: '0 100 47',
  },
  {
    name: 'HTML',
    description: 'Web structure and markup',
    icon: 'https://cdn.simpleicons.org/html5/E34F26',
    brandColor: '#E34F26',
    glowHSL: '14 82 52',
  },
  {
    name: 'CSS',
    description: 'Styling and responsive design',
    icon: '/assets/logos/CSS.webp',
    brandColor: '#1572B6',
    glowHSL: '203 80 40',
  },
  {
    name: 'JavaScript',
    description: 'Programming language',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    brandColor: '#F7DF1E',
    glowHSL: '53 93 54',
  },
  {
    name: 'Vue.js',
    description: 'Front-end framework',
    icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    brandColor: '#4FC08D',
    glowHSL: '153 57 53',
  },
  {
    name: 'React',
    description: 'UI library for building interfaces',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    brandColor: '#61DAFB',
    glowHSL: '193 95 69',
  },
  {
    name: 'Next.js',
    description: 'React framework for production web apps',
    icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
    brandColor: '#FFFFFF',
    glowHSL: '0 0 100',
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript development',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    brandColor: '#3178C6',
    glowHSL: '211 60 48',
  },
  {
    name: 'Vite',
    description: 'Fast build tool for modern web development',
    icon: 'https://cdn.simpleicons.org/vite/646CFF',
    brandColor: '#646CFF',
    glowHSL: '237 100 70',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    brandColor: '#06B6D4',
    glowHSL: '189 95 42',
  },
  {
    name: 'Three.js',
    description: '3D graphics for the web',
    icon: 'https://cdn.simpleicons.org/threedotjs/FFFFFF',
    brandColor: '#FFFFFF',
    glowHSL: '0 0 100',
  },
  {
    name: 'GSAP',
    description: 'Animation and motion effects',
    icon: 'https://cdn.simpleicons.org/greensock/88CE02',
    brandColor: '#88CE02',
    glowHSL: '80 98 41',
  },
  {
    name: 'n8n',
    description: 'Workflow automation',
    icon: 'https://cdn.simpleicons.org/n8n/FF6D5A',
    brandColor: '#FF6D5A',
    glowHSL: '8 100 67',
  },
  {
    name: 'MySQL',
    description: 'Relational database',
    icon: 'https://cdn.simpleicons.org/mysql/4479A1',
    brandColor: '#4479A1',
    glowHSL: '205 39 45',
  },
  {
    name: 'PostgreSQL',
    description: 'Relational database',
    icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
    brandColor: '#4169E1',
    glowHSL: '225 73 56',
  },
  {
    name: 'Laravel',
    description: 'PHP web framework',
    icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
    brandColor: '#FF2D20',
    glowHSL: '5 100 56',
  },
  {
    name: 'CapCut',
    description: 'Video editing',
    icon: '/assets/logos/capcut.png',
    brandColor: '#FFFFFF',
    glowHSL: '0 0 100',
  },
  {
    name: 'Shopee',
    description: 'Marketplace and affiliate content',
    icon: 'https://cdn.simpleicons.org/shopee/EE4D2D',
    brandColor: '#EE4D2D',
    glowHSL: '11 83 56',
  },
  {
    name: 'Subnetting',
    description: 'Network addressing and IP planning',
    icon: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    brandColor: '#1BA0D7',
    glowHSL: '194 77 47',
  },
  {
    name: 'Adobe Stock',
    description: 'Generate AI images/videos, create metadata, then upload to Adobe Stock',
    icon: '/assets/logos/download.png',
    brandColor: '#0B1F3A',
    glowHSL: '214 68 14',
  },
  {
    name: 'Mobile Legends',
    description: 'Reached Mythical Glory rank with 56 stars',
    icon: '/assets/logos/ML-removebg-preview.png',
    brandColor: '#D62828',
    glowHSL: '42 92 52',
  },
]

function SkillCard({ skill, language }: { skill: Skill; language: Language }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <BorderGlow
      backgroundColor="#0b0b0e"
      borderRadius={20}
      glowColor={skill.glowHSL}
      glowRadius={28}
      glowIntensity={1.2}
      colors={
        skill.name === 'Mobile Legends'
          ? ['#D62828', '#F4C430', '#8B1E1E']
          : [skill.brandColor, skill.brandColor, skill.brandColor]
      }
      edgeSensitivity={25}
      fillOpacity={0.3}
    >
      <div
        ref={ref}
        className={`flex flex-col items-center gap-4 p-6 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#f2ede5]/6 p-2 ring-1 ring-[#f2ede5]/10">
          <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" />
        </span>
        <h3 className="text-center text-xl font-display font-semibold tracking-tight text-[#f2ede5]">
          {skill.name}
        </h3>
        <p className="text-center font-sans text-sm leading-relaxed text-[#a89e92]">
          {language === 'id' ? skillDescriptionsId[skill.name] : skill.description}
        </p>
      </div>
    </BorderGlow>
  )
}

export function Skills({ language = 'en' }: { language?: Language }) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-6 py-20 text-[#f2ede5] md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-[#c8a96e]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div>
          <BlurText
            text={language === 'id' ? 'Skill Saya' : 'My Skills'}
            delay={55}
            className="text-6xl font-display font-bold leading-none tracking-tight text-[#f2ede5] drop-shadow-[0_22px_60px_rgba(0,0,0,0.42)] [&>span:nth-child(2)]:text-[#c8a96e] sm:text-7xl lg:text-8xl"
          />
          <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
