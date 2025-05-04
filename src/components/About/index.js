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

    const context = gsap.context(() => {
      const paragraph = sectionRef.current.querySelectorAll(".animated-text");
      const images = sectionRef.current.querySelectorAll(".animated-img");

      if (!paragraph) return;

      paragraph.forEach((text, i) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: text,
              start: "top 95%",
              toggleActions: "restart none none none",
            },
          }
        );
      });

      // Animasi gambar tetap (ulang juga)
      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: img,
              start: "top 95%",
              toggleActions: "restart none none none",
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
      className="text-white md:py-10 md:px-20 px-6 py-6 overflow-hidden"
    >
      <div className="mx-auto text-[20px] md:text-[30px] lg:text-[40px] leading-relaxed lg:text-center font-bold ">
        <div className="inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500">
          Hi, I'm Farid
        </div>
        <Image
          src="/images/avatar4.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-2 align-text-bottom animated-img "
        />
        <div className="inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500">
          I'm a passionate frontend developer
        </div>
        <Image
          src="/images/avatar5.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-2 align-text-bottom animated-img"
        />
        <div className="inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500">
          who loves building clean
        </div>
        <Image
          src="/images/avatar6.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-1 align-text-bottom animated-img"
        />
        <div className="inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500">
          responsive, and interactive
        </div>
        <Image
          src="/images/avatar7.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-1 align-text-bottom animated-img"
        />
        <div className="inline-block animated-text transform transition duration-500  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500">
          web experiences — one pixel at a time
        </div>
        <Image
          src="/images/avatar8.png"
          alt="avatar"
          width={100}
          height={100}
          className="hidden lg:inline-block md:w-20 mx-2 align-text-bottom animated-img"
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
