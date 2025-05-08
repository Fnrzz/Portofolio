"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(
      ".animated-text, .animated-img"
    );

    const context = gsap.context(() => {
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // muncul saat elemen masuk 80% dari viewport
              end: "top 60%",
              scrub: true, // bikin animasi nyambung dengan scroll
              // markers: true, // aktifkan kalau mau debug posisi
            },
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[80vh] lg:min-h-screen flex flex-col justify-center lg:flex-row lg:items-center text-white md:py-10 md:px-20 px-6 py-6 overflow-hidden"
    >
      <div className="mx-auto text-[25px] lg:text-[40px] leading-relaxed lg:text-center font-bold ">
        <div className="me-2 inline-block transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#d4d4d4] hover:to-[#a3a3a3]">
          Hi, I'm Farid
        </div>
        <Image
          src="/images/avatar4.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 me-2 align-text-bottom"
        />
        <div className="me-2 inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#d4d4d4] hover:to-[#a3a3a3]">
          I'm a passionate frontend developer
        </div>
        <Image
          src="/images/avatar5.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 me-2 align-text-bottom animated-img"
        />
        <div className="me-2 inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#d4d4d4] hover:to-[#a3a3a3]">
          who loves building clean
        </div>
        <Image
          src="/images/avatar6.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-1 align-text-bottom animated-img"
        />
        <div className="me-2 inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#d4d4d4] hover:to-[#a3a3a3]">
          responsive, and interactive
        </div>
        <Image
          src="/images/avatar7.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-1 align-text-bottom animated-img"
        />
        <div className="me-2 inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#d4d4d4] hover:to-[#a3a3a3]">
          web experiences — one pixel at a time
        </div>
        <Image
          src="/images/avatar8.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 me-2 align-text-bottom animated-img"
        />
      </div>
      <div className="flex lg:hidden justify-center items-center mt-4 gap-2 overflow-hidden">
        <Image
          src="/images/avatar4.png"
          alt="avatar"
          width={100}
          height={100}
          className="animated-img w-15 md:w-full align-text-bottom"
        />
        <Image
          src="/images/avatar5.png"
          alt="avatar"
          width={100}
          height={100}
          className="animated-img w-15 md:w-full align-text-bottom"
        />
        <Image
          src="/images/avatar6.png"
          alt="avatar"
          width={100}
          height={100}
          className="animated-img w-15 md:w-full align-text-bottom"
        />
        <Image
          src="/images/avatar7.png"
          alt="avatar"
          width={100}
          height={100}
          className="animated-img w-15 md:w-full align-text-bottom"
        />
        <Image
          src="/images/avatar8.png"
          alt="avatar"
          width={100}
          height={100}
          className="animated-img w-15 md:w-full align-text-bottom"
        />
      </div>
    </div>
  );
};

export default About;
