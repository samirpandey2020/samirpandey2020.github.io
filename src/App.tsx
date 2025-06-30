import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"

// import Home from "@/pages/Home"
// import About from "@/pages/About"
// import Projects from "@/pages/Projects"
// import Contact from "@/pages/Contact"

// Performance optimization: Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
