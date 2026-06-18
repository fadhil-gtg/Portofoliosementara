import { Check, Github, Instagram, Linkedin, Loader2, Mail, Send, Youtube } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Language } from '../../components/Navbar'
import { BlurText } from '../../components/ReactBits'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojzvykl'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 3v11.05a4.45 4.45 0 1 1-4.45-4.45c.31 0 .61.03.9.09v2.94a1.74 1.74 0 1 0 .85 1.49V3h2.7Zm0 0c.34 2.28 1.74 3.8 4 4.28v2.92c-1.62-.08-2.98-.58-4-1.48"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const socialLinks = [
  { label: 'Gmail', href: 'mailto:adhikafdhil02@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/6282229885003', icon: WhatsAppIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/adhika_f002', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adhika-fadhil-putra-djatin/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/fadhil-gtg', icon: Github },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kharismashop88', icon: TikTokIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@adhika_fadhi1', icon: Youtube },
]

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact({ language = 'en' }: { language?: Language }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [formVisible, setFormVisible] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const el = formRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFormVisible(entry.isIntersecting)
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form || status === 'sending') return

    setStatus('sending')
    setErrorMsg('')

    try {
      const data = new FormData(form)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        const json = await res.json().catch(() => null)
        setStatus('error')
        setErrorMsg(json?.error || (language === 'id' ? 'Gagal mengirim pesan. Coba lagi.' : 'Failed to send message. Please try again.'))
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setErrorMsg(language === 'id' ? 'Terjadi kesalahan jaringan.' : 'A network error occurred.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }, [status, language])

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent px-6 py-20 text-[#f2ede5] md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-[36rem] w-[58rem] -translate-x-1/2 rounded-full bg-[#c8a96e]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0b0b0e]/45" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-18">
          <div>
          <BlurText
            text={language === 'id' ? 'Punya Proyek? Mari Kita Wujudkan.' : 'Have a Project? Let\'s Make It Happen.'}
              delay={45}
              className="max-w-4xl text-5xl font-display font-bold leading-[0.98] tracking-tight text-[#f2ede5] drop-shadow-[0_22px_60px_rgba(0,0,0,0.42)] sm:text-6xl md:text-7xl lg:text-8xl"
            />
            <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#c8a96e] via-[#c8a96e]/45 to-transparent" />

            <p className="mt-8 max-w-xl font-sans text-base leading-8 text-[#a89e92] md:text-lg md:leading-9">
              {language === 'id'
                ? 'Terbuka untuk kolaborasi, eksplorasi ide, atau membangun pengalaman digital yang terasa rapi, cepat, dan profesional.'
                : 'Open to collaboration, idea exploration, or building digital experiences that feel neat, fast, and professional.'}
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    title={item.label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border b
                    order-[#f2ede5]/10 bg-[#141316]/70 text-[#f2ede5] shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-md transition duration-[600ms] hover:-translate-y-0.5 hover:border-[#c8a96e]/35 hover:bg-[#c8a96e] hover:text-[#0b0b0e]"
                  >
                    <Icon className="h-5 w-5 transition duration-[600ms] group-hover:scale-105" strokeWidth={1.8} />
                  </a>
                )
              })}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className={`rounded-[2rem] border border-[#f2ede5]/10 bg-[#141316]/72 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-md transition-[opacity,transform,background-color,border-color,box-shadow] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[#f2ede5]/18 hover:bg-[#171519]/84 hover:shadow-[22px_34px_100px_rgba(0,0,0,0.56)] md:p-8 ${
              formVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block font-sans text-sm font-medium text-[#f2ede5]">
                {language === 'id' ? 'Nama' : 'Name'}
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'id' ? 'Nama kamu' : 'Your name'}
                  required
                  className="mt-3 w-full rounded-2xl border border-[#f2ede5]/10 bg-[#0b0b0e]/70 px-5 py-4 font-sans text-base text-[#f2ede5] outline-none transition duration-[600ms] placeholder:text-[#a89e92]/45 focus:border-[#c8a96e]/45 focus:bg-[#0b0b0e] focus:shadow-[0_0_0_4px_rgba(200,169,110,0.08)]"
                />
              </label>

              <label className="block font-sans text-sm font-medium text-[#f2ede5]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@domain.com"
                  className="mt-3 w-full rounded-2xl border border-[#f2ede5]/10 bg-[#0b0b0e]/70 px-5 py-4 font-sans text-base text-[#f2ede5] outline-none transition duration-[600ms] placeholder:text-[#a89e92]/45 focus:border-[#c8a96e]/45 focus:bg-[#0b0b0e] focus:shadow-[0_0_0_4px_rgba(200,169,110,0.08)]"
                />
              </label>
            </div>

            <label className="mt-6 block font-sans text-sm font-medium text-[#f2ede5]">
              {language === 'id' ? 'Pesan' : 'Message'}
              <textarea
                name="message"
                rows={7}
                placeholder={language === 'id' ? 'Ceritakan ide, kebutuhan, atau project yang ingin kamu bangun...' : 'Tell me about your idea, needs, or the project you want to build...'}
                required
                className="mt-3 min-h-48 w-full resize-y rounded-[1.5rem] border border-[#f2ede5]/10 bg-[#0b0b0e]/70 px-5 py-5 font-sans text-base leading-8 text-[#f2ede5] outline-none transition duration-[600ms] placeholder:text-[#a89e92]/45 focus:border-[#c8a96e]/45 focus:bg-[#0b0b0e] focus:shadow-[0_0_0_4px_rgba(200,169,110,0.08)]"
              />
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm font-sans text-sm leading-6 text-[#a89e92]">
                {status === 'success'
                  ? (language === 'id' ? 'Pesan berhasil dikirim! Terima kasih.' : 'Message sent successfully! Thank you.')
                  : status === 'error'
                  ? (errorMsg || (language === 'id' ? 'Gagal mengirim. Coba lagi.' : 'Failed to send. Try again.'))
                  : (language === 'id'
                      ? 'Saya akan membalas pesan secepat mungkin melalui email yang kamu tulis.'
                      : 'I will reply to your message as soon as possible via the email you provided.')}
              </p>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-sans text-sm font-semibold shadow-[0_18px_50px_rgba(200,169,110,0.18)] transition duration-[600ms] ${
                  status === 'success'
                    ? 'bg-emerald-500/90 text-white'
                    : status === 'sending'
                    ? 'bg-[#c8a96e]/60 text-[#0b0b0e]/60 cursor-wait'
                    : 'bg-[#c8a96e] text-[#0b0b0e] hover:-translate-y-0.5 hover:bg-[#f2ede5]'
                }`}
              >
                {status === 'success' ? (
                  <>
                    {language === 'id' ? 'Terkirim' : 'Sent'}
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </>
                ) : status === 'sending' ? (
                  <>
                    {language === 'id' ? 'Mengirim...' : 'Sending...'}
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                  </>
                ) : (
                  <>
                    {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
                    <Send className="h-4 w-4" strokeWidth={1.8} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
