"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { ArrowRight } from "lucide-react";

// ✅ Helper animation
const slideInFromLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  },
});

export const Profilecard = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative w-full">
      {/* === Content === */}
      <div
        ref={ref}
        className="relative flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-6xl mx-auto px-6 md:px-12 py-16"
      >
        {/* === Left Side (Profile + Socials) === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center w-full md:w-1/2 space-y-6"
        >
          <Image
            src="/pykinsu.jpg"
            alt="Kinsu Rajput"
            width={160}
            height={160}
            className="rounded-full border-4 border-yellow-400 shadow-lg"
          />

          <h1 className="text-4xl font-bold text-white">Kinsu Rajput</h1>
          <p className="text-xl text-gray-300">I&apos;m a Fullstack Developer</p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 flex-wrap justify-center">
            <a href="https://t.me/pykinsu" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-yellow-400 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/pykinsu" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-yellow-400 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/pykinsu" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-yellow-400 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/pykinsu" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-yellow-400 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://codepen.io/pykinsu" target="_blank" rel="noopener noreferrer">
              <SiCodepen className="text-yellow-400 text-3xl hover:scale-110 transition-transform" />
            </a>
            
          </div>
        </motion.div>

        {/* === Right Side (Hero Text + Button) === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromLeft(0.5)}
          className="w-full md:w-1/2 text-white mx-auto space-y-8"
        >
          {/* Hero Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight">
            Hey👋🏻 I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Kinsu
            </span>{" "}
            and I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              BCA Student
            </span>
          </h1>

          {/* CTA Button */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Know About Me
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
