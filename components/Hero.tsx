"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-20" />

      <div className="relative z-10 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          Tanushree
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto"
        >
          Full Stack Developer • AI Enthusiast • Data Explorer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >

          {/* View Projects */}
          <a href="#projects">
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
              View Projects
            </button>
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
          >
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Download Resume
            </button>
          </a>

        </motion.div>

      </div>
    </section>
  );
}