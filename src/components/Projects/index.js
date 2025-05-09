"use client";

import { useEffect, useRef } from "react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".projects-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate each image with stagger
      gsap.utils.toArray(".project-image").forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate button
      gsap.fromTo(
        ".projects-button",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-button",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col justify-center h-[70vh] lg:min-h-screen py-10 px-5 bg-black text-white overflow-hidden"
    >
      <h1 className="projects-title font-bold text-[15vw] lg:text-[10vw] leading-none uppercase">
        Projects
      </h1>

      <div className="w-full lg:min-h-[70vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex h-full items-center w-max px-10 py-10">
          <div className="project-image w-[80vw] lg:w-[50vw]  -translate-x-[10%] rotate-[5deg] rounded-3xl overflow-hidden shadow-md shadow-gray-500 flex-shrink-0">
            <Image
              src="/images/projects1.png"
              alt="Project 1"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="project-image w-[80vw] lg:w-[50vw]  -translate-x-[30%] rotate-[-5deg] rounded-3xl overflow-hidden shadow-md shadow-gray-500 flex-shrink-0">
            <Image
              src="/images/projects2.png"
              alt="Project 2"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="project-image w-[80vw] lg:w-[50vw]  -translate-x-[40%] rotate-[8deg] rounded-3xl overflow-hidden shadow-md shadow-gray-500 flex-shrink-0">
            <Image
              src="/images/projects3.png"
              alt="Project 3"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="project-image w-[80vw] lg:w-[50vw]  -translate-x-[50%] rotate-[-8deg] rounded-3xl overflow-hidden shadow-md shadow-gray-500 flex-shrink-0">
            <Image
              src="/images/projects4.png"
              alt="Project 4"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="project-image w-[80vw] lg:w-[50vw]  -translate-x-[60%] rotate-[5deg] rounded-3xl overflow-hidden shadow-md shadow-gray-500 flex-shrink-0">
            <Image
              src="/images/projects5.png"
              alt="Project 5"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="projects-button w-full flex justify-center mt-8">
        <Link
          href={"#"}
          className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-full cursor-none shadow-md shadow-white"
        >
          More Porto <ArrowRightCircle />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
