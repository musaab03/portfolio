import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div className="text-white h-screen snap snap-y snap-mandatory overflow-scroll z-0 scroll-smooth scrollbar-thin scrollbar-thumb-[#A8E1F4] overflow-x-hidden">
      <Head>
        <title>Musaab&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="top" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
