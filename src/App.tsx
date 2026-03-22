import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import ChatAboutMe from "@/components/sections/ChatAboutMe"

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
        <ChatAboutMe />
      </Router>
    </ThemeProvider>
  )
}

export default App
