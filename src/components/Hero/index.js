"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const avatarImages = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
];

const Hero = () => {
  const nameRef = useRef(null);
  const welcomeRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const avatarImgRef = useRef(null);
  const handRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [nextAvatarIndex, setNextAvatarIndex] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
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
    if (!shouldAnimate || !avatarImgRef.current) return;

    const container = avatarImgRef.current;

    const tl = gsap.timeline();

    tl.to(container, {
      x: "-100%", // keluar ke kiri
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setAvatarIndex(nextAvatarIndex);
        gsap.set(container, { x: "100%" });
      },
    });

    tl.to(container, {
      x: "0%",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    return () => tl.kill();
  }, [nextAvatarIndex, shouldAnimate]);

  useEffect(() => {
    if (shouldAnimate) {
      const interval = setInterval(() => {
        setNextAvatarIndex((prev) => (prev + 1) % avatarImages.length);
      }, 2000);

      return () => clearInterval(interval);
    }
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
        y: -50,
        scale: 0.8,
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

        <div
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-6"
          ref={avatarRef}
        >
          <div ref={avatarImgRef} className="w-full h-full overflow-hidden">
            <Image
              src={avatarImages[avatarIndex]}
              alt="avatar"
              width={300}
              height={300}
              quality={100}
              className="object-cover w-full h-full transition-all duration-300 ease-in-out "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
