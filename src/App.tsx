import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { GlobalRibbons } from './components/GlobalRibbons/GlobalRibbons'
import { Navbar } from './components/Navbar'
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

function App() {
  return (
    <>
      <SplashScreen duration={2.5} />
      <SmoothScroll>
        <ClickSpark sparkColor="#c8a96e" sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
          <GlobalRibbons />
          <div id="top" />
          <Navbar />
          <BackToTop />
          {/* Intro removed - SplashScreen replaces it */}
          <ScrollSequence />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </ClickSpark>
      </SmoothScroll>
    </>
  )
}

export default App
