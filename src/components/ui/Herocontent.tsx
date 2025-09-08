"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* === Left Content === */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Badge */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-full md:max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Welcome Buddy 😁
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          From{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Code
          </span>{" "}
          to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Concept
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a student specializing in building modern web applications. 
          Check out my projects and skills below.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#profile"
          className="group py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-500 text-white 
          text-sm sm:text-base font-semibold rounded-full shadow-lg 
          transition-all duration-300 max-w-[160px] sm:max-w-[200px] 
          mx-auto md:mx-0 flex items-center justify-center gap-2 hover:gap-3"
        >
          Know Me
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>

      {/* === Right Image with Bulb Behind === */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full flex justify-center items-center mt-8 md:mt-0"
      >
        {/* Bulb (Background) */}
        <Image
          src="/bulb.png"
          alt="Bulb"
          width={500}
          height={500}
          draggable={false}
          className="absolute select-none object-contain opacity-80 
                     w-28 h-28 sm:w-44 sm:h-44 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        />

        {/* Foreground Hero Icon (SVG) */}
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={500}
          width={500}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};
