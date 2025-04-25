"use client";
import { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const wordsRef = useRef([]);

  const teks = [
    "Tunggu sebentar ya, lagi dandanin portofolio",
    "Ngepolish biar makin kece",
    "Almost there, siap bikin kamu terpukau",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    wordsRef.current.forEach((el, i) => {
      tl.to(el, {
        duration: 0.2,
        opacity: 1,
        ease: Expo.easeOut,
      });

      if (i < wordsRef.current.length - 1) {
        tl.to(el, {
          duration: 0.5,
          opacity: 0,
          ease: Expo.easeIn,
          delay: 2,
        });
      } else {
        tl.to({}, { duration: 2 });
      }
    });

    // Hilangkan preloader setelah animasi selesai
    tl.to(preloaderRef.current, {
      duration: 0.5,
      opacity: 0,
      pointerEvents: "none",
    });
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black`}
      ref={preloaderRef}
    >
      <div className="relative h-12 w-full  mb-8">
        {teks.map((text, index) => (
          <div
            key={index}
            ref={(el) => (wordsRef.current[index] = el)}
            className="absolute w-[80%] text-center top-0 left-1/2 -translate-x-1/2 text-white text-[calc(1rem+2vw)] lg:text-nowrap font-bold opacity-0"
          >
            {text}
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 text-[#555] text-md font-bold">
        Tunggu sebentar yaaa 🚀
      </div>
    </div>
  );
};

export default Preloader;
