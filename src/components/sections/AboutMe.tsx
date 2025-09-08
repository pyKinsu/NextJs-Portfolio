"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Plus, Minus, X, Divide } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-6xl mx-auto relative">
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* === Left Side: Image === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/standing.png"
            alt="Kinsu standing"
            width={320}
            height={400}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </motion.div>

        {/* === Right Side: Info === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 relative"
        >
          {/* Floating Math Icons (SVGs) */}
          <Plus className="absolute top-0 left-10 w-10 h-10 text-purple-500 opacity-20 animate-float" />
          <Minus className="absolute top-12 right-10 w-12 h-12 text-cyan-400 opacity-20 animate-float animation-delay-2000" />
          <X className="absolute bottom-10 left-1/4 w-10 h-10 text-yellow-400 opacity-20 animate-float animation-delay-4000" />
          <Divide className="absolute bottom-0 right-1/3 w-12 h-12 text-pink-400 opacity-20 animate-float animation-delay-6000" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-[600px] leading-tight relative z-10">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Me
            </span>
          </h1>

          {/* About Text */}
          <p className="text-gray-300 text-lg relative z-10">
            My name is <span className="text-yellow-400 font-semibold">Kinsu Rajput</span>.  
            I am currently pursuing{" "}
            <span className="text-green-400 font-medium">BCA at Vidya Vihar</span>.  
            I truly enjoy my college life while learning and building exciting projects.
          </p>

          <p className="text-gray-300 text-lg relative z-10">
            I have experience with{" "}
            <span className="font-medium text-purple-400">
              HTML, CSS, JavaScript, Python, and C
            </span>
            . Currently, I’m learning{" "}
            <span className="font-medium text-cyan-400">Java and C</span> to
            expand my development skills.
          </p>

          <p className="text-gray-300 text-lg relative z-10">
            Passionate about coding and technology, I love exploring new tools and creating
            seamless user experiences.
          </p>

          {/* Reach Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all relative z-10"
          >
            Reach Me
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Icons Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};
