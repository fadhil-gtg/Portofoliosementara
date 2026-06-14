import { Github, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BlurText } from '../../components/ReactBits'
import type { Language } from '../../components/Navbar'

interface Project {
  title: string
  description: string
  stack: string[]
  githubUrl: string
  demoUrl: string
  accent: string
}

const projectDescriptionsId: Record<string, string> = {
  'Portfolio Motion System': 'Pengalaman portfolio sinematik dengan storytelling berbasis scroll, section animatif, layout responsif, dan interaction design yang rapi.',
  'Linux Server Lab': 'Lab administrasi sistem praktis yang fokus pada service Linux, permission, package workflow, shell tooling, dan kebiasaan maintenance yang andal.',
  'Network Troubleshooting Kit': 'Konsep toolkit pembelajaran untuk dokumentasi IP addressing, diagnostik, pengecekan routing, dan workflow troubleshooting terstruktur.',
  'TKJ Learning Hub': 'Ruang belajar terstruktur untuk mengumpulkan catatan networking, command Linux, eksperimen web, dan referensi teknis praktis.',
}

const projects: Project[] = [
  {
    title: 'Portfolio Motion System',
    description:
      'A cinematic portfolio experience with scroll-driven storytelling, animated sections, responsive layouts, and refined interaction design.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP'],
    githubUrl: 'https://github.com/',
    demoUrl: '#top',
    accent: 'from-[#FAFAF7] via-[#E8E8E3] to-[#9B9B8F]',
  },
  {
    title: 'Linux Server Lab',
    description:
      'A practical system administration lab focused on Linux services, permissions, package workflows, shell tooling, and reliable maintenance habits.',
    stack: ['Linux', 'Docker', 'Networking', 'Shell', 'Ansible'],
    githubUrl: 'https://github.com/',
    demoUrl: '#experience',
    accent: 'from-[#D8E6FF] via-[#90B7FF] to-[#26324D]',
  },
  {
    title: 'Network Troubleshooting Kit',
    description:
      'A learning-focused toolkit concept for documenting IP addressing, diagnostics, routing checks, and structured troubleshooting workflows.',
    stack: ['Networking', 'Linux', 'GitHub', 'Documentation'],
    githubUrl: 'https://github.com/',
    demoUrl: '#skills',
    accent: 'from-[#F7E7C6] via-[#D8A85C] to-[#3A2A16]',
  },
  {
    title: 'TKJ Learning Hub',
    description:
      'A structured learning space for collecting networking notes, Linux commands, web experiments, and practical technical references.',
    stack: ['React', 'Tailwind CSS', 'Linux', 'Networking', 'Docs'],
    githubUrl: 'https://github.com/',
    demoUrl: '#contact',
    accent: 'from-[#E8D7A8] via-[#C8A96E] to-[#2C2417]',
  },
]

function ProjectCard({ project, index, language }: { project: Project; index: number; language: Language }) {
  const ref = useRef<HTMLElement>(null)
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
    <article
      ref={ref}
      className={`group overflow-hidden rounded-3xl border border-white/[0.06] bg-[#18181d] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-[opacity,transform,border-color,box-shadow] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c8a96e]/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${Math.min(index * 110, 330)}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-ink">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.75),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.36),transparent_35%,rgba(0,0,0,0.26))]" />
        <div className="absolute inset-x-6 top-6 h-3 rounded-full bg-black/20 backdrop-blur-sm" />
        <div className="absolute left-6 right-6 top-14 overflow-hidden rounded-2xl border border-white/25 bg-black/30 p-5 backdrop-blur-md">
          <div className="h-3 w-24 rounded-full bg-white/65" />
          <div className="mt-6 grid gap-3">
            <div className="h-16 rounded-xl bg-white/30" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-xl bg-white/20" />
              <div className="h-16 rounded-xl bg-white/25" />
              <div className="h-16 rounded-xl bg-white/20" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-white/78 backdrop-blur-md">
          Preview
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <h3 className="max-w-lg text-4xl font-display font-semibold leading-tight tracking-tight text-[#f2ede5] md:text-5xl">
            {project.title}
          </h3>
          <span className="hidden rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/45 px-3 py-1.5 text-xs font-mono text-[#f2ede5]/58 sm:inline-flex">
            0{index + 1}
          </span>
        </div>

        <p className="mt-5 font-sans text-base leading-8 text-[#a89e92] md:text-lg md:leading-9">
          {language === 'id' ? projectDescriptionsId[project.title] : project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/55 px-3 py-1.5 font-sans text-xs font-medium text-[#f2ede5]/58"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2ede5] px-5 py-3 font-sans text-sm font-semibold text-[#0b0b0e] transition duration-[600ms] hover:-translate-y-0.5 hover:bg-[#c8a96e]"
          >
            <Github className="h-4 w-4" strokeWidth={1.8} />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f2ede5]/10 px-5 py-3 font-sans text-sm font-medium text-[#f2ede5] transition duration-[600ms] hover:-translate-y-0.5 hover:border-[#c8a96e]/35 hover:bg-[#c8a96e]/10"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects({ language = 'en' }: { language?: Language }) {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent px-6 py-[150px] text-[#f2ede5] md:px-10 md:py-[170px] lg:px-12 lg:py-[180px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[68rem] -translate-x-1/2 rounded-full bg-[rgba(200,169,110,0.04)] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[34rem] w-[60rem] rounded-full bg-[rgba(200,169,110,0.035)] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b0b0e]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0b0b0e]/45" />

      <div className="relative mx-auto max-w-7xl">
        <div>
          <BlurText
            text={language === 'id' ? 'Proyek Saya' : 'My Projects'}
            delay={55}
            className="text-6xl font-display font-bold leading-none tracking-tight text-[#f2ede5] [&>span:nth-child(2)]:text-[#c8a96e] sm:text-7xl lg:text-8xl"
          />
          <div className="mt-8 h-px w-20 bg-[rgba(200,169,110,0.6)]" />
        </div>

        <div className="mt-20 grid gap-7 lg:mt-24 lg:grid-cols-2 xl:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
