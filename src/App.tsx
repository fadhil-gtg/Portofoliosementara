import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { GlobalRibbons } from './components/GlobalRibbons/GlobalRibbons'
import { GlobalStaggeredMenu } from './components/GlobalStaggeredMenu/GlobalStaggeredMenu'
import { Navbar, type Language } from './components/Navbar'
import { ClickSpark } from './components/ReactBits'
import { SmoothScroll } from './components/SmoothScroll'
import { SplashScreen } from './components/SplashScreen'
import { Contact } from './sections/Contact'
// import { Intro } from './sections/Intro/Intro' // Removed - replaced by SplashScreen
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { ScrollSequence } from './sections/ScrollSequence/ScrollSequence'
import { Skills } from './sections/Skills/Skills'
import { useCallback, useState } from 'react'

function App() {
  const [language, setLanguage] = useState<Language>('en')

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang)
  }, [])
  return (
    <>
      <GlobalStaggeredMenu />
      <SplashScreen duration={2.5} />
      <SmoothScroll>
        <ClickSpark sparkColor="#c8a96e" sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
          <div className="relative min-h-screen overflow-hidden bg-[#0b0b0e]">
            <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,#0b0b0e_0%,#101014_34%,#0b0b0e_68%,#111116_100%)]" />
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(200,169,110,0.055),transparent_34%),radial-gradient(circle_at_82%_42%,rgba(242,237,229,0.025),transparent_36%),radial-gradient(circle_at_48%_78%,rgba(200,169,110,0.04),transparent_38%)]" />
            <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(242,237,229,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(242,237,229,0.009)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
            <GlobalRibbons />
            <div className="relative z-10">
              <div id="top" />
              <Navbar language={language} onLanguageChange={handleLanguageChange} />
              <BackToTop />
              {/* Intro removed - SplashScreen replaces it */}
              <ScrollSequence />
              <About language={language} />
              <Skills language={language} />
              <Experience language={language} />
              <Projects language={language} />
              <Contact language={language} />
              <Footer />
            </div>
          </div>
        </ClickSpark>
      </SmoothScroll>
    </>
  )
}

export default App
