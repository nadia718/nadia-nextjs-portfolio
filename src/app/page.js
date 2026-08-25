import Logobar from "@/components/Logobar";
import Marquee from "@/components/Marquee";
import About from "@/sections/About";
import ContactCTA from "@/sections/CTA";
import FinalCTA from "@/sections/FinalCTA";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import WorkProcess from "@/sections/WorkProcess";


export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Logobar />
      <Services />
      <ContactCTA />
      <Projects />
      <Skills />
      <WorkProcess />
      <FinalCTA />
      
      
    </main>
    
  );
}
