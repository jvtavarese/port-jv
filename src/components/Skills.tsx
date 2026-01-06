"use client";

import { skills } from "@/data/portfolio";
import { Code, Layers, Brain, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Habilidades Técnicas
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções inovadoras
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Linguagens</h3>
            </div>
            <div className="space-y-3">
              {skills.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{lang.name}</span>
                    <span className="text-primary text-sm">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* ML/AI */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900">ML & IA</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.mlAi.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Cloud & AWS</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.cloud.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Ferramentas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
