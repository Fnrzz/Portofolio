"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("default");

  // Define cursor styles for different sections
  const sectionStyles = {
    default: {
      cursorColor: "black",
      bubbleColor: "bg-teal-200",
      textColor: "text-slate-900",
      bubbleText: "You",
    },
    home: {
      cursorColor: "#FF5733",
      bubbleColor: "bg-orange-200",
      textColor: "text-orange-800",
      bubbleText: "Hi!",
    },
    techstack: {
      cursorColor: "#FF5733",
      bubbleColor: "bg-orange-200",
      textColor: "text-orange-800",
      bubbleText: "This is my techstack!",
    },
    about: {
      cursorColor: "#3498DB",
      bubbleColor: "bg-blue-200",
      textColor: "text-blue-800",
      bubbleText: "This is me",
    },
    projects: {
      cursorColor: "#2ECC71",
      bubbleColor: "bg-green-200",
      textColor: "text-green-800",
      bubbleText: "Work",
    },
    contact: {
      cursorColor: "#9B59B6",
      bubbleColor: "bg-purple-200",
      textColor: "text-purple-800",
      bubbleText: "Say Hi",
    },
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: 10, yPercent: 15 });

    // Function to check which section is in view
    const checkSectionInView = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "default";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSectionId = section.getAttribute("id");
        }
      });

      setCurrentSection(currentSectionId);
    };

    // Initial check and add scroll event listener
    checkSectionInView();
    window.addEventListener("scroll", checkSectionInView);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", checkSectionInView);
    };
  }, []);

  // Get current section style
  const currentStyle = sectionStyles[currentSection] || sectionStyles.default;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed top-0 left-0 w-6 h-6 z-60 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill={currentStyle.cursorColor} d="M5,2l7,20l2,-8l8,-2z" />
        </svg>
      </div>
      <div
        ref={followerRef}
        className={`cursor-follower fixed top-0 left-0 z-60 pointer-events-none flex items-center justify-center`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`${currentStyle.bubbleColor} ${currentStyle.textColor} rounded-2xl px-4 py-2 flex items-center justify-center font-bold transition-colors duration-300`}
        >
          {currentStyle.bubbleText}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
