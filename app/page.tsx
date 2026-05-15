import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* Background Glow Top Left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* Background Glow Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}