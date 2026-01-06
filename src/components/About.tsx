"use client";

import { personalInfo, education, languages } from "@/data/portfolio";
import { GraduationCap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Perfil Profissional
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Telefone:</strong> {personalInfo.phone}
              </p>
              <p className="text-gray-600">
                <strong>Localização:</strong> {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Formação
                </h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-gray-600 text-sm mb-3">
                  {education.period} • {education.location}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold text-gray-900">Idiomas</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">{lang.name}</span>
                      <span className="text-primary font-medium">{lang.level}</span>
                    </div>
                    {lang.note && (
                      <p className="text-sm text-gray-600">{lang.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
