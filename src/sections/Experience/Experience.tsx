import { useEffect, useRef, useState } from 'react'
import { BlurText } from '../../components/ReactBits'
import type { Language } from '../../components/Navbar'

interface TimelineItem {
  title: string
  description: string
  tags: string[]
}

const timelineDescriptionsId: Record<string, string> = {
  'Teknik Komputer dan Jaringan (TKJ)': 'Memiliki dasar dalam bidang Teknik Komputer dan Jaringan, termasuk pemahaman tentang hardware, software, instalasi sistem, perawatan perangkat, serta troubleshooting dasar pada komputer dan jaringan.',
  'Web Development Projects': 'Mengembangkan proyek website menggunakan HTML, CSS, Java, React, Next.js, TypeScript, Tailwind CSS, dan teknologi pendukung lainnya. Berfokus pada pembuatan tampilan yang responsif, modern, dan mudah digunakan.',
  'AI Content Creation': 'Membuat konten visual berupa gambar dan video berbasis AI untuk kebutuhan kreatif, presentasi, dan personal branding. Dari pengalaman ini, saya belajar mengolah ide menjadi karya yang menarik dan informatif.',
  'Internship & Professional Training': 'Menjalani Praktik Kerja Lapangan (PKL) untuk mendapatkan pengalaman kerja langsung dan memahami lingkungan profesional. Selain itu, saya juga memperoleh sertifikat pelatihan dari Adinusa pada bidang Linux System Administration, Ansible, dan Docker.',
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Teknik Komputer dan Jaringan (TKJ)',
    description:
      'I have a foundation in Computer and Network Engineering, including knowledge of hardware, software, system installation, device maintenance, and basic troubleshooting for computers and networks.',
    tags: ['Hardware', 'Software', 'Networking', 'Troubleshooting'],
  },
  {
    title: 'Web Development Projects',
    description:
      'I have developed website projects using HTML, CSS, Java, React, Next.js, TypeScript, Tailwind CSS, and other supporting technologies. My focus is on building responsive, modern, and user-friendly interfaces.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'AI Content Creation',
    description:
      'I create visual content such as AI-generated images and videos for creative needs, presentations, and personal branding. Through this experience, I learned how to turn ideas into engaging and informative works.',
    tags: ['AI Images', 'AI Video', 'Creative Design', 'Personal Branding'],
  },
  {
    title: 'Internship & Professional Training',
    description:
      'I completed an internship to gain hands-on work experience and understand the professional environment. In addition, I earned training certificates from Adinusa in Linux System Administration, Ansible, and Docker.',
    tags: ['Internship', 'Linux', 'Ansible', 'Docker'],
  },
]

function TimelineEntry({ item, index, language }: { item: TimelineItem; index: number; language: Language }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const alignRight = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative grid gap-6 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-[1fr_5rem_1fr] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}
    >
      <div className={`hidden md:block md:col-start-1 md:row-start-1 ${alignRight ? '' : 'invisible'}`}>
        <TimelineCard item={item} align={alignRight ? 'right' : 'left'} language={language} />
      </div>

      <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-sm font-mono font-bold text-ink ring-8 ring-paper/20 md:static md:col-start-2 md:row-start-1 md:mx-auto md:self-start">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className={`hidden md:block md:col-start-3 md:row-start-1 ${alignRight ? 'invisible' : ''}`}>
        <TimelineCard item={item} align={alignRight ? 'right' : 'left'} language={language} />
      </div>

      <div className="pl-14 md:hidden">
        <TimelineCard item={item} align="left" language={language} />
      </div>
    </div>
  )
}

function TimelineCard({ item, align, language }: { item: TimelineItem; align: 'left' | 'right'; language: Language }) {
  return (
    <article
      className={`rounded-[1.75rem] border border-[#f2ede5]/10 bg-[#141316]/72 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-[600ms] hover:-translate-y-1 hover:border-[#f2ede5]/18 hover:bg-[#171519]/82 hover:shadow-[18px_30px_90px_rgba(0,0,0,0.52)] md:p-8 ${
        align === 'right' ? 'md:text-right' : 'md:text-left'
      }`}
    >
      <h3 className="text-3xl font-display font-semibold tracking-tight text-[#f2ede5]">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-base leading-8 text-[#a89e92] md:text-lg md:leading-9">
        {language === 'id' ? timelineDescriptionsId[item.title] : item.description}
      </p>
      <div
        className={`mt-8 flex flex-wrap gap-2 ${
          align === 'right' ? 'md:justify-end' : 'md:justify-start'
        }`}
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#f2ede5]/10 bg-[#0b0b0e]/45 px-3 py-1.5 font-sans text-xs font-medium text-[#f2ede5]/58"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Experience({ language = 'en' }: { language?: Language }) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = timelineRef.current
    const line = lineRef.current
    if (!timeline || !line) return

    const updateLine = () => {
      const rect = timeline.getBoundingClientRect()
      const viewportTrigger = window.innerHeight * 0.55
      const progress = (viewportTrigger - rect.top) / Math.max(rect.height, 1)
      const clampedProgress = Math.min(Math.max(progress, 0), 1)
      line.style.transform = `scaleY(${clampedProgress})`
    }

    updateLine()
    window.addEventListener('scroll', updateLine, { passive: true })
    window.addEventListener('resize', updateLine)

    return () => {
      window.removeEventListener('scroll', updateLine)
      window.removeEventListener('resize', updateLine)
    }
  }, [])

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-transparent px-6 py-32 text-[#f2ede5] md:px-10 md:py-40 lg:px-12 lg:py-48"
    >
      <div className="pointer-events-none absolute right-0 top-24 h-[34rem] w-[56rem] rounded-full bg-[#f2ede5]/[0.018] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[48rem] rounded-full bg-[#c8a96e]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div>
          <BlurText
            text={language === 'id' ? 'Pengalaman Saya' : 'My Experience'}
            delay={55}
            className="text-6xl font-display font-bold leading-none tracking-tight text-[#f2ede5] drop-shadow-[0_22px_60px_rgba(0,0,0,0.42)] [&>span:nth-child(2)]:text-[#c8a96e] sm:text-7xl lg:text-8xl"
          />
          <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />
        </div>

        <div ref={timelineRef} className="relative mx-auto mt-20 max-w-6xl md:mt-24">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#f2ede5]/10 md:left-1/2 md:-translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute bottom-0 left-5 top-0 w-px origin-top scale-y-0 bg-gradient-to-b from-[#c8a96e] via-[#c8a96e]/70 to-[#c8a96e]/25 transition-transform duration-[120ms] ease-out md:left-1/2 md:-translate-x-1/2"
          />

          <div className="relative flex flex-col gap-14 md:gap-18 lg:gap-20">
            {timelineItems.map((item, index) => (
              <TimelineEntry key={item.title} item={item} index={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
