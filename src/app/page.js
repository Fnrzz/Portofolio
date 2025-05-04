"use client";
import { useState } from "react";
import Preloader from "@/components/Preloading";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CustomCrusor from "@/components/CustomCrusor";
import TechStack from "@/components/TechStack";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && (
        <>
          <div className="hidden md:block">
            <CustomCrusor />
          </div>
          <main className="min-h-[500vh]">
            <Navbar animate={true} />
            <section id="home">
              <Hero />
            </section>
            <section id="about" className="bg-black scroll-mt-10">
              <About />
              <TechStack />
            </section>
          </main>
        </>
      )}
    </>
  );
}
