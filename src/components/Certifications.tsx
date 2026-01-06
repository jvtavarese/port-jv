"use client";

import { certifications } from "@/data/portfolio";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Certificações e Cursos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Formações e certificações profissionais que complementam minha experiência técnica
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={32} />
                </div>
                <ExternalLink
                  className="text-gray-400 group-hover:text-primary transition-colors"
                  size={20}
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>

              <p className="text-primary font-semibold mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              {cert.hours && (
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold">
                    {cert.hours}
                  </span>
                </div>
              )}

              <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Ver Certificado</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
