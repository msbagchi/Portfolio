"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 font-semibold mb-4">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Interested in collaborating, hiring, or discussing
            a project? Feel free to connect with me.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {/* Email */}
          <motion.a
            href="mailto:tanushree25bagchi@gmail.com"
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md block"
          >
            <Mail className="mx-auto mb-5" size={36} />

            <h3 className="text-2xl font-semibold mb-3">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              tanushree25bagchi@gmail.com
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/msbagchi"
            target="_blank"
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md block"
          >
            <div className="text-4xl mb-5">
              🐙
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              GitHub
            </h3>

            <p className="text-gray-400 break-all">
              github.com/msbagchi
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/tanushree-bagchi-8a85942a6"
            target="_blank"
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md block"
          >
            <div className="text-4xl mb-5">
              💼
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              LinkedIn
            </h3>

            <p className="text-gray-400 break-all">
              tanushree-bagchi
            </p>
          </motion.a>

        </div>

        {/* Footer */}
        <div className="mt-24 text-gray-500 text-sm">
          © 2026 Tanushree. Built with Next.js & Tailwind CSS.
        </div>

      </div>
    </section>
  );
}