"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Traffic Accident Analytics",
    description:
      "Interactive dashboard for accident hotspot detection and visualization using real-world traffic datasets.",
    tech: ["Python", "Pandas", "Streamlit"],
    github: "https://github.com/msbagchi",
    live: "#",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built using Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/msbagchi/Portfolio",
    live: "https://yourportfolio.vercel.app",
  },

  {
    title: "AI Study Assistant",
    description:
      "AI-powered learning assistant for summaries, flashcards, and smart note analysis.",
    tech: ["React", "OpenAI", "Node.js"],
    github: "https://github.com/msbagchi",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 font-semibold mb-4">
            MY WORK
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/40 transition"
            >

              {/* Project Preview */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-6 flex items-center justify-center text-5xl">
                🚀
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <a
                  href={project.live}
                  target="_blank"
                >
                  <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
                    Live Demo
                  </button>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                >
                  <button className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
                    GitHub
                  </button>
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}