"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto shadow-2xl ring-4 ring-primary/20">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl text-primary font-semibold mb-6"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 flex items-center justify-center gap-2"
          >
            <MapPin size={20} className="text-primary" />
            {personalInfo.location}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-6 mb-10"
          >
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
