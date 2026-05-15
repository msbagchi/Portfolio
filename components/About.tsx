"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 font-semibold mb-4">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Passionate about building impactful digital experiences.
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-8"
        >
          <p>
            I’m Tanushree, an engineering student focused on
            full stack development, AI-powered applications,
            and data-driven problem solving.
          </p>

          <p className="mt-6">
            I enjoy creating clean user interfaces, interactive
            experiences, and scalable applications that combine
            design with technology.
          </p>

          <p className="mt-6">
            Currently exploring modern web technologies,
            machine learning, and cloud-based solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}