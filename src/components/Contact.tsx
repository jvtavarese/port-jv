"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Vamos Conversar?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e projetos desafiadores. Entre em contato!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-primary text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-primary text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Telefone</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Localização</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Redes Sociais
            </h3>

            <div className="space-y-4">
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-[#0A66C2] text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
                  <p className="text-gray-900 font-semibold">@{personalInfo.linkedin}</p>
                </div>
              </a>

              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-gray-900 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">GitHub</p>
                  <p className="text-gray-900 font-semibold">@{personalInfo.github}</p>
                </div>
              </a>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg text-white mt-8">
              <h4 className="text-xl font-bold mb-2">Interessado em colaborar?</h4>
              <p className="mb-4 opacity-90">
                Estou disponível para oportunidades de estágio, projetos freelance e colaborações em tecnologia.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
