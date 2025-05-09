"use client";
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const containerRef = useRef(null);

  const workflowSteps = [
    {
      title: "Planning",
      description:
        "Start by discussing the goals and features of the project, then sketch wireframes and plan the tech stack.",
      tools: ["Figma", "Notion"],
    },
    {
      title: "Design to Code",
      description:
        "Translate designs into responsive and clean interfaces using Tailwind CSS.",
      tools: ["Figma", "Tailwind CSS"],
    },
    {
      title: "Frontend Development",
      description:
        "Build reusable components and dynamic interfaces using React or Next.js with best practices.",
      tools: ["React", "Next.js"],
    },
    {
      title: "Backend Integration",
      description:
        "Integrate backend APIs built with Laravel, manage state, and handle loading or error states smoothly.",
      tools: ["Laravel", "Axios"],
    },
    {
      title: "Testing & Optimization",
      description:
        "Ensure performance and responsiveness using Lighthouse and browser dev tools.",
      tools: ["Lighthouse", "Chrome DevTools"],
    },
    {
      title: "Deployment & Collaboration",
      description:
        "Deploy using Vercel, Docker, or cloud hosting, and collaborate efficiently through GitHub.",
      tools: ["Vercel", "Docker", "GitHub"],
    },
  ];

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".workflow-card");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center lg:items-center text-white md:py-10 md:px-20 px-6 py-6 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">How I Work</h2>
        <p className="max-w-xl mx-auto">
          Here&apos;s how I work as a frontend developer. From planning to
          deployment, I&apos;ll guide you through every step of the process.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workflowSteps.map((step, idx) => (
          <div
            key={idx}
            className="workflow-card rounded-2xl border border-white/10 p-6 bg-white/10 backdrop-blur-md hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-400" size={20} />
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            </div>
            <p className="text-sm flex-grow leading-relaxed text-white">
              {step.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {step.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/20 text-white px-2 py-1 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
