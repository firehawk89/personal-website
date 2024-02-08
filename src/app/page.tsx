import About from '@/components/sections/about'
import Contact from '@/components/sections/contact/contact'
import Hero from '@/components/sections/hero/hero'
import Projects from '@/components/sections/projects/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <About className="py-16 md:py-24" id="about-me" />
      <Projects className="py-16 md:py-24" id="my-projects" />
      <Contact className="py-16 md:py-24" id="contact-me" />
    </>
  )
}
