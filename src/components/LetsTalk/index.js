"use client";

import { useState } from "react";
import Image from "next/image";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
];

const LetsTalk = () => {
  const [clicks, setClicks] = useState([]);
  const [usedAvatars, setUsedAvatars] = useState([]);

  const handleClick = (e) => {
    const availableAvatars = avatars.filter(
      (src) => !usedAvatars.includes(src)
    );

    if (availableAvatars.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableAvatars.length);
    const chosenAvatar = availableAvatars[randomIndex];

    const { clientX, clientY } = e;

    const newClick = {
      x: clientX,
      y: clientY,
      src: chosenAvatar,
      rotate: Math.floor(Math.random() * 10 - 5),
    };

    setClicks((prev) => [...prev, newClick]);
    setUsedAvatars((prev) => [...prev, chosenAvatar]);
  };

  return (
    <div
      className="h-screen py-20 text-white flex flex-col justify-center overflow-hidden relative"
      onClick={handleClick}
    >
      {/* Konten utama */}
      <div className="relative">
        <div className="flex flex-wrap gap-4 w-full mb-10 justify-center">
          <a
            href="https://github.com/Fnrzz"
            className="px-3 py-2 border border-white rounded-full cursor-none"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/farid-nur-raidananda/"
            className="px-3 py-2 border border-white rounded-full cursor-none"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="mailto:faridnurraidananda6@gmail.com"
            className="px-3 py-2 border border-white rounded-full cursor-none"
          >
            E-mail
          </a>
          <a
            href="https://www.instagram.com/massduun/"
            className="px-3 py-2 border border-white rounded-full cursor-none"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-[20vw] font-bold text-wrap select-none">
            Let's Talk
          </h1>
        </div>
      </div>

      {/* Avatar muncul di posisi klik */}
      {clicks.map((click, index) => (
        <div
          key={index}
          className="absolute pointer-events-none transition-transform duration-500"
          style={{
            left: click.x,
            top: click.y,
            transform: `translate(-50%, -50%) rotate(${click.rotate}deg)`,
          }}
        >
          <Image
            src={click.src}
            alt={`avatar-${index}`}
            width={200}
            height={200}
            className="w-20 md:w-40"
          />
        </div>
      ))}
    </div>
  );
};

export default LetsTalk;
