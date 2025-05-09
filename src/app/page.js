"use client";
import { useState } from "react";
import Preloader from "@/components/Preloading";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CustomCrusor from "@/components/CustomCrusor";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import LearningAndGrowth from "@/components/LearningAndGrowth";

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
          <div className="hidden lg:block">
            <CustomCrusor />
          </div>
          <main className="min-h-[700vh] cursor-none">
            <Navbar animate={true} />
            <section id="home">
              <Hero />
            </section>
            <section id="about" className="bg-black scroll-mt-10">
              <About />
              <section id="techstack">
                <TechStack />
              </section>
            </section>
            <section id="projects" className="bg-black">
              <Projects />
            </section>
            <section id="workflow" className="bg-black">
              <Workflow />
            </section>
            <section id="learningandgrowth">
              <LearningAndGrowth />
            </section>
          </main>
        </>
      )}
    </>
  );
}
