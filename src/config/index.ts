import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mark Wernthaler - Cloud & DevOps Engineer",
  author: "Mark Wernthaler",
  description:
    "Techliebhaber aus München. Spezialisiert auf Cloud und DevOps Entwicklung.",
  lang: "de",
  siteLogo: "/pb.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mark-wernthaler/" },
    { text: "Github", href: "https://github.com/SenorGunter" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mark Wernthaler",
    specialty: "Cloud & DevOps Engineer",
    summary:
      "Entwickler aus München. Spezialisiert auf Cloud und DevOps Engineering.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "webeet.io",
      position: "DevSecOps Praktikant",
      startDate: "Sep 2025",
      endDate: "",
      summary: [
        "Erstellung von Terraform Infrastruktur für das Deployment einer AI-App auf AWS.",
        "Setup von CI/CD Pipelines.",
        "Deployment eines ELK-Stacks (Elasticsearch, Logstash, Kibana) um Logging der App zu gewährleisten.",
      ],
    },
    {
      company: "Masterschool",
      position: "Software Engineering Kurs mit Spezialisierung auf Cloudentwicklung",
      startDate: "Sep 2024",
      endDate: "Nov 2025",
      summary: [
        "Teilnahme am Intensivprogramm für Softwareentwicklung der Masterschool, Teil eines globalen Netzwerks, das von Branchenführern unterstützt wird und darauf ausgerichtet ist, praktische Engineering-Fähigkeiten aufzubauen.",
        "Sammelte praktische Erfahrungen durch projektbasiertes Lernen und Mentoring mit Schwerpunkt auf AWS-Engineering und Deployment.",
        "Erwarb Kenntnisse in Python, objektorientierter Programmierung, Webanwendungsarchitektur, relationalen Datenbanken, SQL, Linux, Flask, HTML/CSS, Docker und Cloud-Technologien.",
      ],
    },
    {
      company: "KARE Design",
      position: "Franchise Manager",
      startDate: "Jun 2023",
      endDate: "Mai 2024",
      summary: [
        "Anleitung der Planung und Entwicklung einer SaaS-Anwendung zur Verbesserung der betrieblichen Effizienz für Franchisepartner",
        "Betreuung von internationalen Franchisepartnern in den Anliegen: Website, Marketing, Verträge, etc.",
      ],
    },
    {
      company: "Berufsschule für Groß- & Außenhandel | KARE Design",
      position: "Duale Ausbildung Groß- & Außenhandelsmanagement",
      startDate: "Sep 2021",
      endDate: "Mai 2023",
      summary: [
        "Abgeschlossene IHK-Ausbildung mit gewähltem Schwerpunkt auf Großhandel.",
        "Kaufmännisches Verständnis in den Bereichen Einkauf, Vertrieb, Logistik und Steuerung",
      ],
    },
  ],
  projects: [
    {
      name: "GroceryMate",
      summary: "Implementierung der Terraform Infrastruktur für das Cloud-Deployment eines Onlineshops für Lebensmittel.",
      linkSource: "https://github.com/SenorGunter/AWS_grocery",
      image: "/grocerymate_screen.png",
    },
    {
      name: "SMS - Stock Market Service",
      summary: "Hackathon Sieger Projekt, welches eine einfache Lösung zur Abfrage von Echtzeit Aktieninfos per SMS bietet.",
      linkSource: "https://github.com/saifmasterschool/allyoucaneat",
      image: "/wow_screen.png",
    },
  ],
  about: {
    description: `
      Hi, ich bin Mark Wernthaler, mit einer neugefundenen Liebe für Cloud und DevOps Entwicklung. Als Teil meiner Umschulung erlernte ich sowohl fundierte Backendkenntnisse mit Python und SQL, wie auch Grundkenntnisse in den gängigen Frontendentwicklung.
\n
      Durch meine frühere Erfahrung im Handel, habe ich außerdem ein gefestigtes Verständnis von Betriebswirtschaftlichen Abläufen.


    `,
    image: "/pb.jpg",
  },
};

// #5755ff
