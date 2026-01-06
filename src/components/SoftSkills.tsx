"use client";

import { softSkills } from "@/data/portfolio";
import { Lightbulb, Users, Heart, Sparkles, Target } from "lucide-react";

const SoftSkills = () => {
  const icons = [Lightbulb, Users, Target, Heart, Sparkles];

  return (
    <section id="soft-skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Competências Comportamentais
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soft skills desenvolvidas através de experiências profissionais, treinamentos e vivências internacionais
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 px-6 py-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-primary">Destaque:</strong> Treinamento Dale Carnegie em Liderança e Comunicação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
