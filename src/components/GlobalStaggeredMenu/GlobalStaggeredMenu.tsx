import { useEffect, useState } from 'react'
import { StaggeredMenu } from '../ReactBits/StaggeredMenu'

interface MenuNavItem {
  label: string
  ariaLabel?: string
  link: string
}

const menuItems: MenuNavItem[] = [
  { label: 'About', ariaLabel: 'Go to about page', link: '#about' },
  { label: 'Skills', ariaLabel: 'See skills', link: '#skills' },
  { label: 'Experience', ariaLabel: 'View experience', link: '#experience' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
]

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/' },
  { label: 'LinkedIn', link: 'https://linkedin.com/' },
]

export function GlobalStaggeredMenu() {
  const [enabled, setEnabled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasWebGL = (() => {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
    })()

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    setEnabled(!reducedMotion && hasWebGL && isMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 z-[49]">
      <StaggeredMenu
        position="left"
        colors={['#c8a96e', '#f2ede5']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#f2ede5"
        openMenuButtonColor="#c8a96e"
        changeMenuColorOnOpen={true}
        accentColor="#c8a96e"
        logoUrl="/placeholder-logo.svg"
        isFixed={true}
        closeOnClickAway={true}
      />
    </div>
  )
}
