import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import EngineeringLab from '@/components/sections/EngineeringLab';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';
import GitHub from '@/components/sections/GitHub';
import Hero from '@/components/sections/Hero';
import HowIBuild from '@/components/sections/HowIBuild';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import Navbar from '@/components/sections/Navbar';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <ImpactMetrics />
      <Experience />
      <Skills />
      <Projects />
      <EngineeringLab />
      <HowIBuild />
      <GitHub />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
