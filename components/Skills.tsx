"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Data Science",
  "Machine Learning",
  "Git",
  "GitHub",
  'SQL',
  "artificial intelligence",
  "cloud computing",
  "Docker",
  "Kubernetes",
  "data visualization",
  "tableau",
  "data structures",
  "algorithms",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-lg"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}