import Logobar from "@/components/Logobar";
import Marquee from "@/components/Marquee";
import About from "@/sections/About";
import ContactCTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";


export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Logobar />
      <Services />
      <ContactCTA />
    </main>
    
  );
}
