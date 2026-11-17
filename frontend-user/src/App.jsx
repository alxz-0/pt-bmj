import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServiceSection from './components/sections/ServiceSection'
import StandardSection from './components/sections/StandardSection'
import ProjectSection from './components/sections/ProjectSection'

function App() {
  return (
    <>
      <div className="font-sans bg-white min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <StandardSection />
          <ProjectSection />
          {/* Placeholder untuk section selanjutnya */}
          <div className="py-20 text-center text-bmj-muted" id="services">
            <p>Section Layanan (Menyusul)</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
