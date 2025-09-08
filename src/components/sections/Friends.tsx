"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

interface Friend {
  name: string;
  role: string;
  img: string;
  description: string;
  link: string;
}

const friends: Friend[] = [
  {
    name: "Karan Anand",
    role: "Dev, Editor, Gamer",
    img: "/friends/karan.svg",
    description:
      "🔥 I am Karan. Pro Gamer person, BCA Student from 🇮🇳. I like doing funny things & I am a Super Rider.",
    link: "#",
  },
  {
    name: "Harshit",
    role: "Designer & Artist",
    img: "/friends/harshit.svg",
    description:
      "🎨 Creative mind with passion for design. Loves sketching and UI/UX.",
    link: "#",
  },
  {
    name: "Arpit Aryan",
    role: "Tech Enthusiast",
    img: "/friends/arpit.svg",
    description:
      "💻 Always exploring new tech. Passionate about building apps & solving problems.",
    link: "#",
  },
];

export const Friends = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Friends Crew
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".friends-pagination",
        }}
        className="pb-12"
      >
        {friends.map((friend, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4 px-4"
            >
              {/* Avatar */}
              <Image
                src={friend.img}
                alt={friend.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-yellow-400 shadow-lg"
              />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-white mt-4">
                {friend.name}
              </h3>
              <p className="text-gray-400 text-sm">{friend.role}</p>

              {/* Description with pointer */}
              <div className="relative mt-2 max-w-md w-full mx-auto">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400" />

                <p className="bg-[#111111cc] text-white px-6 py-4 rounded-xl text-sm md:text-base leading-relaxed">
                  {friend.description}{" "}
                  <a
                    href={friend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    Know More..
                  </a>
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots container */}
      <div className="friends-pagination flex justify-center mt-6"></div>

      {/* Custom styles for dots */}
      <style jsx global>{`
        .friends-pagination .swiper-pagination-bullet {
          background: #555 !important;
          opacity: 1 !important;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          border-radius: 50%;
        }
        .friends-pagination .swiper-pagination-bullet-active {
          background: #facc15 !important; /* yellow */
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};
