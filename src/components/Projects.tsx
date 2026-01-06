"use client";

import { projects } from "@/data/portfolio";
import { Github, ExternalLink, Zap } from "lucide-react";

const Projects = () => {
  const categoryColors: Record<string, string> = {
    "Full-Stack": "bg-blue-100 text-blue-700",
    "IA/ML": "bg-purple-100 text-purple-700",
    "Pesquisa": "bg-green-100 text-green-700",
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Projetos em Destaque
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Seleção dos meus principais trabalhos e contribuições técnicas
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[project.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.category}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-primary" size={18} />
                    <span className="text-sm font-semibold text-gray-900">
                      Destaques:
                    </span>
                  </div>
                  <ul className="space-y-1 ml-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  <span>Ver no GitHub</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
