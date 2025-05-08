"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "React", logo: "/images/react.png" },
  { name: "Tailwind", logo: "/images/tailwind.png" },
  { name: "Nextjs", logo: "/images/nextjs.png" },
  { name: "Laravel", logo: "/images/laravel.png" },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const bgWrapperRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".animated-text");
      const images = gsap.utils.toArray(".animated-img");

      texts.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: i % 2 === 0 ? -80 : 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            delay: i * 0.5,
            scrollTrigger: {
              trigger: img,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const bgWrapper = bgWrapperRef.current;

    if (bgWrapper && section) {
      gsap.to(bgWrapper, {
        y: 200,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[80vh] lg:min-h-screen w-full md:py-10 md:px-20 px-6 py-6 text-white flex justify-center items-center bg-black overflow-hidden"
    >
      <div
        ref={bgWrapperRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/3d.png"
          alt="3d"
          fill
          className=" opacity-60 blur-md object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>
      <div className="relative z-10 md:w-[90%]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
          <div className="flex-1 animated-text">
            <h2 className="text-3xl md:text-6xl font-semibold leading-tight">
              This{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4d4d4] to-[#a3a3a3]">
                is
              </span>
              ,<br />
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4d4d4] to-[#a3a3a3]">
                TechStack
              </span>
            </h2>
          </div>

          <div className="flex-1 text-lg md:text-base text-gray-300 animated-text">
            <p>
              I specialize in building modern, responsive, and scalable web
              applications using React.js, TailwindCSS, Next.js, and Laravel —
              turning ideas into interactive digital experiences.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="w-15 h-15 md:w-30 md:h-30 flex items-center justify-center animated-img"
              title={brand.name}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={60}
                height={60}
                className="w-[70%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
