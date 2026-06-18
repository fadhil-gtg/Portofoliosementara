import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'
import { getProjectBySlug, getProjectFeatures, getProjectLongDescription, getProjectCinematic, projectsData } from './projectData'
import type { Language } from '../../components/Navbar'

export function ProjectDetail({ language = 'en' }: { language?: Language }) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = slug ? getProjectBySlug(slug) : undefined

  const handleBackToProjects = () => {
    sessionStorage.setItem('scrollToProjects', 'true')
    sessionStorage.setItem('skipSplash', 'true')
    navigate('/')
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0b0e] text-[#f2ede5]">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold">404</h1>
          <p className="mt-4 font-sans text-[#a89e92]">
            {language === 'id' ? 'Proyek tidak ditemukan.' : 'Project not found.'}
          </p>
          <button
            onClick={handleBackToProjects}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c8a96e] px-6 py-3 font-sans text-sm font-semibold text-[#0b0b0e] transition hover:-translate-y-0.5 hover:bg-[#f2ede5]"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'id' ? 'Kembali ke Projects' : 'Back to Projects'}
          </button>
        </div>
      </div>
    )
  }

  const features = getProjectFeatures(project, language)
  const longDescription = getProjectLongDescription(project, language)
  const cinematic = getProjectCinematic(project, language)
  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length]

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f2ede5]">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,#0b0b0e_0%,#101014_34%,#0b0b0e_68%,#111116_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(200,169,110,0.04),transparent_34%),radial-gradient(circle_at_82%_42%,rgba(242,237,229,0.02),transparent_36%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16 lg:px-12 lg:py-20">
        {/* Back button */}
        <button
          onClick={handleBackToProjects}
          className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[#f2ede5]/10 bg-[#141316]/70 px-5 py-2.5 font-sans text-sm font-medium text-[#f2ede5]/70 backdrop-blur-md transition duration-500 hover:-translate-y-0.5 hover:border-[#c8a96e]/35 hover:text-[#f2ede5]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          {language === 'id' ? 'Kembali ke Projects' : 'Back to Projects'}
        </button>

        {/* Project header mockup */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/[0.06] bg-[#18181d] shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Title & index */}
        <div className="mt-12 flex items-start justify-between gap-6">
          <h1 className="text-5xl font-display font-bold leading-tight tracking-tight text-[#f2ede5] md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <span className="hidden shrink-0 rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/45 px-4 py-2 font-mono text-sm text-[#f2ede5]/50 sm:inline-flex">
            0{currentIndex + 1}
          </span>
        </div>

        <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />

        {/* Cinematic tagline */}
        <p className="mt-8 max-w-3xl font-display text-xl italic leading-relaxed tracking-tight text-[#f2ede5]/75 md:text-2xl md:leading-relaxed">
          &ldquo;{cinematic}&rdquo;
        </p>

        {/* Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/55 px-4 py-2 font-sans text-xs font-medium text-[#f2ede5]/58"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Long description */}
        <div className="mt-14">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-[#f2ede5] md:text-3xl">
            {language === 'id' ? 'Tentang Proyek' : 'About This Project'}
          </h2>
          <p className="mt-6 max-w-3xl font-sans text-base leading-8 text-[#a89e92] md:text-lg md:leading-9">
            {longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mt-14">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-[#f2ede5] md:text-3xl">
            {language === 'id' ? 'Fitur Utama' : 'Key Features'}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-[#f2ede5]/[0.06] bg-[#141316]/50 p-4 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c8a96e]/15">
                  <Check className="h-3 w-3 text-[#c8a96e]" strokeWidth={3} />
                </span>
                <span className="font-sans text-sm leading-6 text-[#a89e92]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href={project.demoUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2ede5] px-7 py-4 font-sans text-sm font-semibold text-[#0b0b0e] shadow-[0_18px_50px_rgba(200,169,110,0.12)] transition duration-[600ms] hover:-translate-y-0.5 hover:bg-[#c8a96e]"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
            Live Demo
          </a>
        </div>

        {/* Next project link */}
        <div className="mt-20 border-t border-[#f2ede5]/[0.06] pt-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#f2ede5]/40">
            {language === 'id' ? 'Proyek Berikutnya' : 'Next Project'}
          </p>
          <button
            onClick={() => navigate(`/project/${nextProject.slug}`)}
            className="group mt-4 inline-flex items-center gap-3 font-display text-3xl font-semibold tracking-tight text-[#f2ede5] transition duration-500 hover:text-[#c8a96e] md:text-4xl"
          >
            {nextProject.title}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
