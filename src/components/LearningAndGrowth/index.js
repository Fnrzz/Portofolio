"use client";
import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const learningItems = [
  {
    title: "Docker & DevOps",
    description:
      "Containerizing apps and learning CI/CD best practices for real-world projects.",
    time: "Early 2025",
  },
  {
    title: "Advanced React & Next.js",
    description:
      "Mastering dynamic routing, server actions, and app directory in Next.js 14.",
    time: "Early 2024",
  },
  {
    title: "Design Systems & UX",
    description:
      "Building consistent components with accessibility and user-first thinking.",
    time: "Early 2023",
  },
  {
    title: "Laravel API Deep Dive",
    description:
      "Building scalable backend APIs with authentication and modular structure.",
    time: "Early 2022",
  },
];

const LearningAndGrowth = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".learning-item");

      // Timeline for items
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 10%",
              toggleActions: "play reverse play reverse",
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 md:px-20 overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Learning & Growth
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My journey as a developer is built on continuous learning. Here's a
          look at what I'm currently exploring and mastering over time.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-8">
        <div
          ref={lineRef}
          className="absolute left-0 top-0 w-1 h-full bg-white/20 origin-top scale-y-0"
        />

        {learningItems.map((item, index) => (
          <div key={index} className="learning-item relative mb-12 opacity-0">
            {/* Dot + Icon */}
            <div className="absolute -left-4 top-1">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-md drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] animate-pulse">
                <GraduationCap size={16} />
              </div>
            </div>

            {/* Content */}
            <div className="pl-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
              <span className="text-xs text-gray-500 mt-2 inline-block">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningAndGrowth;
