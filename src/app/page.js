"use client";
import { useState } from "react";
import Preloader from "@/components/Preloading";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && (
        <main className="min-h-[500vh]">
          <Navbar animate={true} />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
        </main>
      )}
    </>
  );
}
