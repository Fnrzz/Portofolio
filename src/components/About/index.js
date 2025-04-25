"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card-animate");

    const animateText = (element) => {
      const textElements = element.querySelectorAll("h2, p");

      textElements.forEach((el) => {
        const originalText = el.textContent;
        el.textContent = "";

        gsap.to(el, {
          text: originalText,
          duration: originalText.length * 0.02,
          ease: "none",
          delay: 0.2,
        });
      });
    };

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            onEnter: () => animateText(card),
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white md:py-10 md:px-20 px-6 py-6 "
    >
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-animate bg-[#0E0E10] border-2 border-[#1a1a1a] rounded-xl p-10 md:col-span-1 flex flex-col justify-between">
            <div>
              <Image
                src="/images/profile.jpg"
                alt="Avatar"
                width={150}
                height={150}
                className="rounded-[20px] mx-auto mb-10"
              />
              <h2 className="text-xl font-semibold mb-2">Hi, I'm Farid</h2>
              <p className="text-sm text-gray-300">
                I'm a passionate frontend developer focused on building clean,
                responsive, and interactive web experiences.
              </p>
            </div>
          </div>
          <div className="card-animate bg-[#0E0E10] border-2 border-[#1a1a1a] rounded-xl p-6 md:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
              <p className="text-sm text-gray-300 mb-4">
                I use React.js, TailwindCSS, Next.js, and Laravel to bring ideas
                to life on the web.
              </p>
              <div className="flex flex-wrap gap-3">
                <Image
                  src={"/images/react.png"}
                  alt="react"
                  width={100}
                  height={100}
                  className="rounded-full object-cover object-center h-15 w-15"
                />
                <Image
                  src={"/images/nextjs.webp"}
                  alt="nextjs"
                  width={100}
                  height={100}
                  className="rounded-full object-cover object-center h-15 w-15"
                />
                <Image
                  src={"/images/tailwind.png"}
                  alt="tailwind"
                  width={100}
                  height={100}
                  className="rounded-full object-cover object-center h-15 w-15"
                />
                <Image
                  src={"/images/laravel.jpg"}
                  alt="laravel"
                  width={150}
                  height={150}
                  className="rounded-full object-cover object-center h-15 w-15"
                />
              </div>
            </div>
          </div>
          <div className="card-animate bg-[#0E0E10] border-2 border-[#1a1a1a] rounded-xl p-6 md:col-span-1 md:col-span-2 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2">
              My Passion for Coding
            </h2>
            <p className="text-sm text-gray-300">
              I love solving problems and building things through code. It’s not
              just a profession — it’s my passion.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="card-animate bg-[#0E0E10] border-2 border-[#1a1a1a] rounded-xl p-6 flex flex-col h-full">
            <Image
              src={"/images/freelancer.webp"}
              alt="freelancer"
              width={300}
              height={300}
              className="mx-auto mb-10"
            />
            <h2 className="text-xl font-semibold mb-2">
              I work remotely across most timezones.
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Based in Indonesia, available for remote collaboration.
            </p>
            <button className="bg-[#1f1f1f] py-2 px-4 rounded-md text-sm flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Contact Me
            </button>
          </div>

          <div className="card-animate bg-[#0E0E10] border-2 border-[#1a1a1a] rounded-xl p-6 flex flex-col justify-between items-start">
            <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
            <p className="text-sm text-gray-300">faridnur@youremail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
