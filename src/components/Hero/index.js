"use client";

import dynamic from "next/dynamic";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AvatarHardLanding = dynamic(() => import("../AvatarHardLanding"), {
  ssr: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  const nameRef = useRef(null);
  const welcomeRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const handRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          setResetKey((prev) => prev + 1);
        } else {
          setShouldAnimate(false);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.set(nameRef.current, { scale: 0.8, opacity: 0.1, z: -200 });
    gsap.set(welcomeRef.current, { y: -50, opacity: 0.1 });
    gsap.set(subtitleRef.current, { y: -30, opacity: 0.1 });
    gsap.set(handRef.current, { rotate: -5 });

    const tl = gsap.timeline();

    tl.to(nameRef.current, {
      scale: 1,
      opacity: 0.5,
      z: 0,
      duration: 1,
      ease: "back.out(1.2)",
      delay: 0.3,
    });

    tl.to(
      welcomeRef.current,
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

    tl.to(
      subtitleRef.current,
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );

    tl.to(handRef.current, {
      rotate: 20,
      yoyo: true,
      repeat: -1,
      duration: 0.3,
      ease: "power1.inOut",
      transformOrigin: "70% 70%",
    });

    return () => tl.kill();
  }, [shouldAnimate]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Create exit animation for each element
      gsap.to(sectionRef.current, {
        backgroundColor: "#000000", // Change to black
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      gsap.to(nameRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      });

      gsap.to(welcomeRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });

      gsap.to(subtitleRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });

      gsap.to(avatarRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center mx-auto px-6 lg:px-8 overflow-hidden"
      id="home"
    >
      <h1
        ref={nameRef}
        className={`absolute font-bold z-0 text-gray-400 text-center ${playfair.className}`}
        style={{
          fontSize: "clamp(2rem, 10vw, 10rem)",
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        PORTOFOLIO
      </h1>

      <div className="flex flex-col items-center z-10 w-full">
        <div className="text-center mb-3">
          <h2
            ref={welcomeRef}
            className="font-bold mb-2"
            style={{ fontSize: "calc(1.5rem + 1vw)" }}
          >
            Hai, I'm Farid{" "}
            <span
              ref={handRef}
              role="img"
              aria-label="waving hand"
              className="inline-block"
            >
              👋🏻
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-700"
            style={{ fontSize: "calc(0.8rem + 0.5vw)" }}
          >
            Frontend Web Developer
          </p>
        </div>

        <div className="w-full h-[500px]" ref={avatarRef}>
          <AvatarHardLanding key={resetKey} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
