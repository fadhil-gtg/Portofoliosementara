import { BlurText, LogoLoop, ProfileCard, ScrollReveal, type LogoLoopItem } from '../../components/ReactBits'
import type { Language } from '../../components/Navbar'

const aboutDescriptions: Record<Language, string[]> = {
  en: [
    'I am a vocational high school student majoring in Computer and Network Engineering (TKJ) with a strong interest in front-end web development, Linux, and system administration. I enjoy learning how websites are built to look attractive, organized, and easy to use, while also understanding the technical side behind systems and computer networks. This interest makes me enjoy exploring technology from both the interface and infrastructure perspectives.',
    'I have also completed an internship in networking, which gave me hands-on experience in the working world and strengthened my understanding of real-world technical practices. Moving forward, I want to keep learning and improving so I can become more prepared for a career in IT, especially in web and system-related fields.',
  ],
  id: [
    'Saya adalah siswa SMK jurusan Teknik Komputer dan Jaringan (TKJ) dengan minat kuat pada front-end web development, Linux, dan administrasi sistem. Saya senang mempelajari bagaimana website dibuat agar terlihat menarik, terstruktur, dan mudah digunakan, sekaligus memahami sisi teknis di balik sistem dan jaringan komputer.',
    'Saya juga telah menyelesaikan praktik kerja industri di bidang jaringan, yang memberi saya pengalaman langsung di dunia kerja dan memperkuat pemahaman saya tentang praktik teknis nyata. Ke depannya, saya ingin terus belajar dan berkembang agar lebih siap berkarier di bidang IT, terutama pada web dan sistem.',
  ],
}

const logoItems: LogoLoopItem[] = [
  { src: 'https://cdn.simpleicons.org/html5/FAFAF7', alt: 'HTML', title: 'HTML' },
  { src: 'https://cdn.simpleicons.org/css/FAFAF7', alt: 'CSS', title: 'CSS' },
  { src: 'https://cdn.simpleicons.org/javascript/FAFAF7', alt: 'JavaScript', title: 'JavaScript' },
  { src: 'https://cdn.simpleicons.org/typescript/FAFAF7', alt: 'TypeScript', title: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/react/FAFAF7', alt: 'React', title: 'React' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/FAFAF7', alt: 'Next.js', title: 'Next.js' },
  { src: 'https://cdn.simpleicons.org/vuedotjs/FAFAF7', alt: 'Vue.js', title: 'Vue.js' },
  { src: 'https://cdn.simpleicons.org/tailwindcss/FAFAF7', alt: 'Tailwind CSS', title: 'Tailwind CSS' },
  { src: 'https://cdn.simpleicons.org/vite/FAFAF7', alt: 'Vite', title: 'Vite' },
  { src: 'https://cdn.simpleicons.org/threedotjs/FAFAF7', alt: 'Three.js', title: 'Three.js' },
  { src: 'https://cdn.simpleicons.org/greensock/FAFAF7', alt: 'GSAP', title: 'GSAP' },
  { src: 'https://cdn.simpleicons.org/linux/FAFAF7', alt: 'Linux', title: 'Linux' },
  { src: 'https://cdn.simpleicons.org/docker/FAFAF7', alt: 'Docker', title: 'Docker' },
  { src: 'https://cdn.simpleicons.org/ansible/FAFAF7', alt: 'Ansible', title: 'Ansible' },
  { src: 'https://cdn.simpleicons.org/n8n/FAFAF7', alt: 'n8n', title: 'n8n' },
  { src: 'https://cdn.simpleicons.org/mysql/FAFAF7', alt: 'MySQL', title: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/postgresql/FAFAF7', alt: 'PostgreSQL', title: 'PostgreSQL' },
  { src: 'https://cdn.simpleicons.org/laravel/FAFAF7', alt: 'Laravel', title: 'Laravel' },
  { src: 'https://cdn.simpleicons.org/git/FAFAF7', alt: 'Git', title: 'Git' },
  { src: 'https://cdn.simpleicons.org/gnometerminal/FAFAF7', alt: 'Networking', title: 'Networking' },
]

export function About({ language = 'en' }: { language?: Language }) {
  const aboutDescription = aboutDescriptions[language]
  const handleContactClick = () => {
    const contactSection = document.querySelector<HTMLElement>('#contact')
    if (!contactSection) return

    const portfolioLenis = window.portfolioLenis
    if (portfolioLenis) {
      portfolioLenis.scrollTo(contactSection, { duration: 1.2 })
      return
    }

    contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCVDownload = () => {
    const cvUrl = language === 'id' ? '/assets/frames/Indo.pdf' : '/assets/frames/Adhika-english.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = language === 'id' ? 'CV-Adhika-Fadhil-ID.pdf' : 'CV-Adhika-Fadhil-EN.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadText = language === 'id' ? 'Unduh CV' : 'Download CV'

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-6 pt-16 pb-20 text-paper md:px-10 md:pt-20 md:pb-24 lg:px-12 lg:pt-24 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_18%_20%,rgba(200,169,110,0.055),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,390px)_1fr] lg:gap-14 xl:gap-18">
          <aside className="lg:sticky lg:top-24 lg:self-start lg:pt-4">
            <ProfileCard
              name="Adhika Fadhil"
              title="Full Stack Developer"
              handle="adhikafadhil"
              status={language === 'id' ? 'Terbuka untuk kolaborasi' : 'Open to collaborate'}
              contactText={language === 'id' ? 'Hubungi Saya' : 'Contact Me'}
              behindGlowEnabled={false}
              showUserInfo={true}
              avatarUrl="/assets/logos/ChatGPT_Image_14_Jun_2026__18.36.44-removebg-preview.png"
              iconUrl="/assets/iconpattern.svg"
              miniAvatarUrl="/assets/logos/ChatGPT_Image_14_Jun_2026__18.36.44-removebg-preview.png"
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              className="mx-auto max-w-[390px] lg:mx-0"
            />
          </aside>

          <div className="flex flex-col gap-8 lg:pt-0">
            <BlurText
              text="Who Am I?"
              delay={70}
              className="text-6xl font-display font-bold leading-none tracking-tight text-[#f2ede5] drop-shadow-[0_22px_55px_rgba(200,169,110,0.14)] sm:text-7xl lg:text-8xl"
            />

            <div className="h-px w-24 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />

            <div className="flex max-w-2xl flex-col gap-5">
              {aboutDescription.map((paragraph) => (
                <ScrollReveal
                  key={paragraph}
                  baseRotation={0}
                  textClassName="font-sans text-[clamp(1.05rem,1.55vw,1.35rem)] font-medium leading-[1.85] tracking-[-0.01em] text-[#a89e92]"
                >
                  {paragraph}
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-2">
              <button
                onClick={handleCVDownload}
                className="inline-flex items-center gap-2 rounded-lg border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-6 py-3 font-sans text-sm font-medium text-[#c8a96e] transition hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/50 focus:outline-none focus:ring-2 focus:ring-[#c8a96e]/50"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {downloadText}
              </button>
            </div>
          </div>
        </div>

        <LogoLoop
          logos={logoItems}
          direction="right"
          logoHeight={34}
          gap={40}
          speed={70}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0b0b0e"
          ariaLabel="Technology stack"
          className="mt-14 md:mt-16"
        />
      </div>
    </section>
  )
}
