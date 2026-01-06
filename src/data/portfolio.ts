export const personalInfo = {
  name: "João Victor Tavares Esteves",
  title: "Engenheiro de Computação",
  location: "Fortaleza, Brasil",
  email: "jvtavarese@gmail.com",
  phone: "+55 85 99280-4703",
  linkedin: "jvtavarese",
  github: "jvtavarese",
  bio: "Estudante de Engenharia de Computação (10º período) na UFC, com forte interesse em desenvolvimento de software, análise de dados e Machine Learning. Experiência em criar soluções de IA, automações e aplicações web escaláveis. Busco oportunidades para aplicar minhas habilidades técnicas em projetos desafiadores.",
};

export const experiences = [
  {
    company: "Gocase",
    role: "Estagiário de Desenvolvimento",
    location: "Fortaleza, Brasil",
    period: "Maio 2025 - Presente",
    description: [
      "Desenvolvimento de soluções de IA aplicadas aos processos internos da empresa",
      "Criação de automações em Python e JavaScript (Puppeteer) que reduziram a carga de trabalho de analistas em até 60%",
      "Implementação de automações com ferramentas low code, otimizando fluxos operacionais",
      "Participação ativa em reuniões de planejamento, contribuindo com ideias para inovação tecnológica"
    ],
    technologies: ["Python", "JavaScript", "Puppeteer", "IA Generativa", "Low Code"]
  },
  {
    company: "VR Software",
    role: "Estagiário de Desenvolvimento",
    location: "Fortaleza, Brasil",
    period: "Maio 2023 - Agosto 2023",
    description: [
      "Desenvolvimento de funcionalidades em Java, Python e JavaScript",
      "Integração de banco de dados e sistemas internos",
      "Redução do tempo de processamento de relatórios em mais de 50% através de otimizações em Python",
      "Aprimoramento em práticas de versionamento (Git) e colaboração em equipe"
    ],
    technologies: ["Java", "Python", "JavaScript", "SQL", "Git"]
  }
];

export const projects = [
  {
    name: "BT Tourney Master",
    description: "Aplicação web para gestão completa de torneios de beach tennis com cadastro, inscrições, geração de chaves e acompanhamento de partidas em tempo real.",
    technologies: ["Vue 3", "TypeScript", "AWS Lambda", "DynamoDB", "Amazon Cognito", "API Gateway"],
    category: "Full-Stack",
    github: "https://github.com/jvtavarese/bt-tourney-master",
    highlights: ["Arquitetura Serverless", "Autenticação AWS Cognito", "Sistema de Chaves Automatizado"]
  },
  {
    name: "Logos AI MVP",
    description: "Bot para Telegram que recebe áudio MP3, transcreve utilizando Whisper e gera resumos via OpenAI API.",
    technologies: ["Python", "Telegram API", "Whisper", "OpenAI API"],
    category: "IA/ML",
    github: "https://github.com/jvtavarese/logos_ai_mvp",
    highlights: ["Transcrição de Áudio", "Sumarização com IA", "Integração Telegram"]
  },
  {
    name: "5G Network Mobility Sim",
    description: "Simulação de Network Slicing em redes 5G com mobilidade, incluindo análise de métricas de Quality of Service (QoS).",
    technologies: ["Python", "Análise de Dados", "Simulação de Redes"],
    category: "Pesquisa",
    github: "https://github.com/jvtavarese/5GNetworkMobilitySim",
    highlights: ["Network Slicing", "Análise QoS", "Simulação 5G"]
  },
  {
    name: "Face Recognition System",
    description: "Sistema de reconhecimento facial utilizando deep learning com FaceNet e MTCNN para detecção e identificação de rostos.",
    technologies: ["Python", "TensorFlow", "FaceNet", "MTCNN", "OpenCV"],
    category: "IA/ML",
    github: "https://github.com/jvtavarese/face_recognition_system",
    highlights: ["Reconhecimento Facial", "Deep Learning", "Detecção em Tempo Real"]
  },
  {
    name: "Papers & Artigos Acadêmicos",
    description: "Repositório com trabalhos científicos e artigos desenvolvidos durante a graduação em Engenharia de Computação.",
    technologies: ["LaTeX", "Python", "Pesquisa Científica"],
    category: "Pesquisa",
    github: "https://github.com/jvtavarese/Papers-Artigos",
    highlights: ["Publicações Científicas", "Análise de Dados", "Documentação Técnica"]
  }
];

export const skills = {
  languages: [
    "Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"
  ],
  frameworks: [
    "Vue.js", "React", "Next.js", "Spring Boot", "Flask", "Streamlit"
  ],
  mlAi: [
    "TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "YOLOv8", "OpenCV", "Pandas", "NumPy"
  ],
  cloud: [
    "AWS Lambda", "DynamoDB", "Amazon Cognito", "API Gateway"
  ],
  tools: [
    "Git", "GitHub", "Docker", "Scrum"
  ]
};

export const education = {
  degree: "Engenharia de Computação",
  institution: "Universidade Federal do Ceará",
  location: "Fortaleza, Brasil",
  period: "2021 - Dezembro 2025",
  achievements: [
    "Participação em projetos de pesquisa e desenvolvimento",
    "Medalhas em olimpíadas científicas (OBR e OBA)",
    "Formação Full-Stack Santander Coders 2023 (324h)"
  ]
};

export const certifications = [
  {
    name: "NVIDIA - Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Novembro 2025",
    credentialUrl: "https://drive.google.com/file/d/1MUMspsw9ud4YIbGcFPOOaplIvGxjeQ9f/view"
  },
  {
    name: "Microsoft Certified: Conceitos básicos da IA do Azure",
    issuer: "Microsoft",
    date: "Julho 2024",
    credentialUrl: "https://drive.google.com/file/d/1Dm5tq0qYi_oKHSDH_DlKuUcpK0eBWgiQ/view"
  },
  {
    name: "Santander Coders 2023 - Full-Stack",
    issuer: "Ada Tech / Santander",
    date: "Novembro 2023",
    hours: "324h",
    credentialUrl: "https://drive.google.com/file/d/1kWMaesSJ6T0SYqrk5NVxVMEWNp6w_YEI/view"
  }
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado", note: "Experiência internacional de 2 meses no Canadá" },
  { name: "Francês", level: "Básico" }
];

export const softSkills = [
  {
    name: "Comunicação Eficaz",
    description: "Aprimorada em treinamentos de oratória e na vivência internacional no Canadá, desenvolvendo clareza e credibilidade ao falar."
  },
  {
    name: "Liderança e Motivação",
    description: "Fortalecidas no treinamento Dale Carnegie, aprendendo a reconhecer realizações, influenciar positivamente e inspirar equipes."
  },
  {
    name: "Gerenciamento de Estresse e Resiliência",
    description: "Fundamentado em técnicas para lidar com pressões e manter alto desempenho em ambientes desafiadores."
  },
  {
    name: "Construção de Relacionamentos",
    description: "Foco em cooperação, fortalecimento de laços e empatia, contribuindo para um ambiente de trabalho saudável."
  },
  {
    name: "Entusiasmo e Influência Positiva",
    description: "Aplicando estratégias de engajamento para manter o ânimo e incentivar a colaboração entre colegas."
  }
];
