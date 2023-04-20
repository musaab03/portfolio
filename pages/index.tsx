import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="text-white h-screen snap snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Musaab's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
