import { BlurText, LogoLoop, ProfileCard, ScrollReveal, type LogoLoopItem } from '../../components/ReactBits'

const aboutDescription = [
  'I am a vocational high school student majoring in Computer and Network Engineering (TKJ) with a strong interest in front-end web development, Linux, and system administration. I enjoy learning how websites are built to look attractive, organized, and easy to use, while also understanding the technical side behind systems and computer networks. This interest makes me enjoy exploring technology from both the interface and infrastructure perspectives.',
  'I have also completed an internship in networking, which gave me hands-on experience in the working world and strengthened my understanding of real-world technical practices. Moving forward, I want to keep learning and improving so I can become more prepared for a career in IT, especially in web and system-related fields.',
]

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

export function About() {
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

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0e] px-6 py-32 text-paper md:px-10 md:py-40 lg:px-12 lg:py-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(200,169,110,0.16),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(242,237,229,0.07),transparent_32%),linear-gradient(180deg,rgba(11,11,14,0)_0%,rgba(200,169,110,0.045)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(242,237,229,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(242,237,229,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/4 h-96 bg-[radial-gradient(ellipse_at_center,rgba(200,169,110,0.08),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(280px,390px)_1fr] lg:gap-20 xl:gap-28">
          <aside className="lg:sticky lg:top-20 lg:self-start lg:pt-28">
            <ProfileCard
              name="Adhika Fadhil"
              title="Full Stack Developer"
              handle="adhikafadhil"
              status="Open to collaborate"
              contactText="Contact Me"
              behindGlowEnabled={false}
              showUserInfo={true}
              avatarUrl="/placeholder-avatar.jpg"
              iconUrl="/assets/iconpattern.svg"
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              className="mx-auto max-w-[390px] lg:mx-0"
            />
          </aside>

          <div className="flex flex-col gap-12 lg:pt-0">
            <BlurText
              text="Who Am I?"
              delay={70}
              className="text-6xl font-display font-bold leading-none tracking-tight text-[#f2ede5] drop-shadow-[0_22px_55px_rgba(200,169,110,0.14)] sm:text-7xl lg:text-8xl"
            />

            <div className="h-px w-24 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />

            <div className="flex max-w-2xl flex-col gap-7">
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
          className="mt-20 md:mt-24"
        />
      </div>
    </section>
  )
}
