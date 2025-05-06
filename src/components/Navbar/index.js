"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ animate }) => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (animate) {
      gsap.fromTo(
        navRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: Power3.easeOut,
        }
      );
    }
  }, [animate]);

  useEffect(() => {
    linksRef.current.forEach((linkEl) => {
      const topText = linkEl.querySelector(".top-text");
      const bottomText = linkEl.querySelector(".bottom-text");

      const handleMouseEnter = () => {
        gsap.to(topText, {
          y: "-120%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.fromTo(
          bottomText,
          { y: "120%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      };

      const handleMouseLeave = () => {
        gsap.to(bottomText, {
          y: "120%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });

        gsap.to(topText, {
          y: "0%",
          opacity: 1,
          duration: 0.4,
          ease: "power2.in",
        });
      };

      linkEl.addEventListener("mouseenter", handleMouseEnter);
      linkEl.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        linkEl.removeEventListener("mouseenter", handleMouseEnter);
        linkEl.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    const sections = items.map((item) => item.id);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const items = [
    { id: "home", label: <ArrowUp /> },
    { id: "about", label: <div className="px-3">About Me</div> },
    { id: "projects", label: <div className="px-3">Projects</div> },
    { id: "contact", label: <div className="px-3">Let's Talk</div> },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-4 sm:px-6 py-2 sm:py-3 gap-2 flex items-center w-fit mx-auto z-50"
    >
      {items.map((item, i) => {
        const isActive = activeSection === item.id;

        return (
          <Link
            href={`#${item.id}`}
            key={i}
            ref={(el) => (linksRef.current[i] = el)}
            className={`relative rounded-full group transition-all duration-300 
        flex items-center justify-center overflow-hidden cursor-none
        min-w-[40px] h-[40px]
        ${
          isActive
            ? "bg-black text-white"
            : "bg-white hover:bg-gray-100 text-gray-400"
        }
        `}
          >
            {/* Dummy */}
            <span className="invisible font-medium text-[calc(0.5em+0.5vw)] text-nowrap">
              {item.label}
            </span>

            {/* Animated text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="top-text absolute font-medium text-[calc(0.5em+0.5vw)]">
                {item.label}
              </span>
              <span className="bottom-text absolute font-medium text-[calc(0.5em+0.5vw)]">
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
