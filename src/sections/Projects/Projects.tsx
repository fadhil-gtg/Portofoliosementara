import { ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlurText } from '../../components/ReactBits'
import type { Language } from '../../components/Navbar'
import { projectsData, getProjectDescription, type ProjectData } from './projectData'
import { useScrollScaleFade } from '../../hooks/useScrollScaleFade'

function ProjectCard({ project, index, language }: { project: ProjectData; index: number; language: Language }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

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
      className={`group flex flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#18181d] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-[opacity,transform,border-color,box-shadow] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c8a96e]/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${Math.min(index * 110, 330)}ms` }}
    >
      {/* Clickable image area */}
      <button
        type="button"
        onClick={() => navigate(`/project/${project.slug}`)}
        className="relative block w-full aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-ink cursor-pointer transition-transform duration-500 group-hover:scale-[1.015]"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </button>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <h3 className={`max-w-lg text-2xl font-display font-semibold leading-tight tracking-tight text-[#f2ede5] md:text-3xl ${project.slug === 'kucek-shoes' ? 'italic' : ''}`}>
            {project.title}
          </h3>
          <span className="hidden shrink-0 rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/45 px-3 py-1.5 text-xs font-mono text-[#f2ede5]/58 sm:inline-flex">
            0{index + 1}
          </span>
        </div>

        <p className="mt-5 font-sans text-xs leading-6 text-[#a89e92] md:text-sm md:leading-7">
          {getProjectDescription(project, language)}
        </p>

        <div className="mt-7 flex min-h-[2.25rem] flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/55 px-3 py-1.5 font-sans text-xs font-medium text-[#f2ede5]/58"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate(`/project/${project.slug}`)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2ede5] px-5 py-3 font-sans text-sm font-semibold text-[#0b0b0e] transition duration-[600ms] hover:-translate-y-0.5 hover:bg-[#c8a96e]"
          >
            {language === 'id' ? 'Lihat Detail' : 'View Details'}
          </button>
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
  const headingRef = useScrollScaleFade<HTMLDivElement>()
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent px-6 py-20 text-[#f2ede5] md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[68rem] -translate-x-1/2 rounded-full bg-[rgba(200,169,110,0.04)] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[34rem] w-[60rem] rounded-full bg-[rgba(200,169,110,0.035)] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b0b0e]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0b0b0e]/45" />

      <div className="relative mx-auto max-w-7xl">
        <div ref={headingRef} className="will-change-[opacity,transform]">
          <BlurText
            text={language === 'id' ? 'Proyek Saya' : 'My Projects'}
            delay={55}
            className="text-4xl font-display font-bold leading-none tracking-tight text-[#f2ede5] [&>span:nth-child(2)]:text-[#c8a96e] sm:text-5xl lg:text-6xl"
          />
          <div className="mt-8 h-px w-20 bg-[rgba(200,169,110,0.6)]" />
        </div>

        <div className="mt-14 grid items-stretch gap-7 lg:mt-16 lg:grid-cols-2 xl:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
