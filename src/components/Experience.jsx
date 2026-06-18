import "../styles/experience.css";

import smartrt from "../assets/smartrt.png";
import webpkl from "../assets/webpkl.png";
import yupintar from "../assets/yupintar.png";
import clothspace from "../assets/clothspace.png";
import musik from "../assets/musik.png";
import project6 from "../assets/project6.png";

export default function Experience() {
  const experiences = [
    {
      image: smartrt,
      title: "SMART RT",
      role: "Backend Developer",
      year: "2026",
      description:
        "Web & Mobile application for resident management, complaints, payments, and digital services.",
      tech: ["Laravel", "MySQL", "REST API"],
    },

    {
      image: webpkl,
      title: "WebPKL",
      role: "Backend Developer",
      year: "2026",
      description:
        "Internship management system with authentication, reporting, monitoring and assessment features.",
      tech: ["Laravel", "MySQL", "Git"],
    },

    {
      image: yupintar,
      title: "Yupintar",
      role: "Backend Developer",
      year: "2024",
      description:
        "Educational platform focused on learning management and student services.",
      tech: [],
    },

    {
      image: clothspace,
      title: "ClothSpace",
      role: "Backend Developer",
      year: "2024",
      description:
        "Fashion and clothing platform with product management and API integration.",
      tech: [],
    },

    {
      image: musik,
      title: "Pasthree Website",
      role: "Backend Developer",
      year: "2025",
      description:
        "Modern music streaming interface with responsive design and animations.",
      tech: ["React", "CSS", "JavaScript", "Laravel", "PHP", "MySQL"],
    },

    {
      image: project6,
      title: "music display",
      role: "Developer",
      year: "2024",
      description:
        "Additional project portfolio showcasing development and collaboration skills.",
      tech: ["React"],
    },
 {
      image: project6,
      title: "Backend Kos-hunter",
      year: "2026",
      description:
        "Additional project portfolio showcasing development and collaboration skills.",
      tech: [ "Laravel"],
    },
    
  ];

  return (
    <section
      className="experience"
      id="experience"
    >
      <div className="section-header">
        <span className="section-badge">
          
        </span>

        <h2>
         Projects Experience
        </h2>

      
      </div>

      <div className="experience-wrapper">

        {experiences.map((item, index) => (
          <div
            className="experience-card"
            key={index}
          >
            <div className="experience-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="overlay">

                <span>
                  {item.role}
                </span>

              </div>

            </div>

            <div className="experience-content">

              <div className="top-row">

                <h3>{item.title}</h3>

                <span className="year">
                  {item.year}
                </span>

              </div>

              <h4>
                {item.role}
              </h4>

              <p>
                {item.description}
              </p>

              <div className="tech-stack">

                {item.tech.map(
                  (tech, idx) => (
                    <span key={idx}>
                      {tech}
                    </span>
                  )
                )}

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}