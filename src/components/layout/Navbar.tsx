"use client";

import { useState } from "react";
import Link from "next/link";
import { navlinks, socials } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[70px] px-5 md:px-10">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <span className="text-white font-bold tracking-wide text-lg sm:text-xl">
            Kinsu Rajput
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {navlinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="hover:text-[rgb(112,66,248)] transition-colors font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-5">
          {socials.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition-colors" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/95 backdrop-blur-xl shadow-lg flex flex-col p-8 text-gray-100 z-50"
            >
              {/* Close Icon (top-right inside drawer, like before) */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Mobile Links */}
              <div className="flex flex-col mt-20 space-y-6 text-lg font-semibold">
                {navlinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.25 }}
                  >
                    <Link
                      href={link.link}
                      onClick={closeMenu}
                      className="block w-full px-4 py-3 rounded-lg hover:bg-purple-700/30 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Socials */}
              <motion.div
                className="flex items-center justify-center gap-6 mt-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                {socials.map(({ link, name, icon: Icon }) => (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-purple-700/30 transition-colors"
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
