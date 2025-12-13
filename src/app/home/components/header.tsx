"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Phone } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-10 w-auto"
        >
          <Image
            src="/images/pacsys-logo-ofc.png"
            alt="Pacsys Logo"
            height={40}
            width={120}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Career", "Network", "Contact"].map(
            (link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`font-medium transition-colors hover:text-pacsys-light ${
                  isScrolled
                    ? "text-pacsys-dark hover:text-pacsys-light"
                    : "text-white hover:text-pacsys-light"
                }`}
              >
                {link}
              </motion.a>
            )
          )}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* WhatsApp */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-pacsys-light/10 text-pacsys-light hover:bg-pacsys-light/20"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </motion.a>

          {/* Telegram */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-pacsys-light/10 text-pacsys-light hover:bg-pacsys-light/20"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Telegram"
          >
            <Send size={20} />
          </motion.a>

          {/* Phone */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="tel:+55"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-pacsys-light/10 text-pacsys-light hover:bg-pacsys-light/20"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label="Phone"
          >
            <Phone size={20} />
          </motion.a>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className={`h-px transition-opacity ${
          isScrolled ? "bg-gray-200" : "bg-white/20"
        }`}
      />
    </header>
  );
}