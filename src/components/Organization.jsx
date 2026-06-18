import { useState } from "react";
import "../styles/organization.css";

import backend from "../assets/backend.png";
import internship from "../assets/internship.png";
import certiport from "../assets/certiport.png";
import ukbi from "../assets/ukbi.png";
import cikom from "../assets/cikom.png";
import intermadiate from "../assets/intermadiate.png";
import taffidz from "../assets/taffidz.png";
import sertifbe from "../assets/sertifbe.png";
import sertifdot from "../assets/sertifdot.png";
import mpk from "../assets/MPK.png";
import memo from "../assets/memo.png";
import pustel from "../assets/pustel.png";
import bdi from "../assets/bdi.png";

export default function Organization() {
  const [selectedCertificate, setSelectedCertificate] =
  useState(null);
  const certificates = [
    {
      image: certiport,
      link: certiport,
      title: "Certiport IT Specialist – Software Engineering (Score: 963)",
      issuer: "Certiport",
      year: "2026",
      desc: "International certification validating software engineering competencies, including programming, software development, testing, and problem-solving."
    },

    {
      image: backend,
      link: backend,
      title: "Backend Developer Internship Certificate - Very Good Grade (sangat baik)",
      issuer: "PT. Digdaya Olah Teknologi",
      year: "2025-2026",
      desc: "Completed a backend development internship with a Very Good distinction, demonstrating proficiency in API development, authentication systems, and database management."
    },

    {
      image: internship,
      link: internship,
      title: "Internship Certificate - Backend Developer",
      issuer: "PT Huma Teknologi Indonesia",
      year: "2025-2026",
      desc: "Contributed to backend application development by implementing APIs, managing databases, and supporting server-side functionality."
    },

    {
      image: ukbi,
      link: ukbi,
      title: "UKBI Certification – Score: 598",
      issuer: "Language Proficiency",
      year: "2024",
      desc: "Certification of Indonesian language proficiency and communication skills."
    },

    {
      image: sertifbe,
      link: sertifbe,
      title: "Skills Competency Certificate — Backend Developer",
      issuer: "SMK TELKOM MALANG",
      year: "2026",
      desc: "Achieved a Good grade in the Backend Developer competency assessment."
    },

    {
      image: sertifdot,
      link: sertifdot,
      title: "Certificate of Competency — Backend Developer",
      issuer: "PT. Digdaya Olah Teknologi (DOT)",
      year: "2026",
      desc: "Successfully demonstrated the required competencies in backend development."
    },

    {
      image: cikom,
      link: cikom,
      title: "University of Indonesia WAR 2024",
      issuer: "Cikom Team",
      year: "2024",
      desc: "Developed problem-solving, teamwork, and innovation skills through designing a digital solution."
    },

    {
      image: intermadiate,
      link: intermadiate,
      title: "English Discoveries Intermediate 3",
      issuer: "Edusoft Ltd.",
      year: "2025-2026",
      desc: "Successfully completed the English Discoveries Program and achieved a score of 81."
    },

    {
      image: mpk,
      link: mpk,
      title: "MPK SMK TELKOM MALANG - Treasurer",
      issuer: "MPK SMK Telkom Malang",
      year: "2024/2025",
      desc: "Managed budgeting, financial planning, and organizational financial reporting."
    },

    {
      image: memo,
      link: memo,
      title: "MEMO SMK TELKOM MALANG - Journalism",
      issuer: "Student Council",
      year: "2024/2025",
      desc: "Contributed to journalistic content production and publication."
    },

    {
      image: pustel,
      link: pustel,
      title: "PUSTEL SMK TELKOM MALANG - Processing Division",
      issuer: "Student Council",
      year: "2024/2025",
      desc: "Contributed as a member of the Processing Division."
    },

    {
      image: bdi,
      link: bdi,
      title: "BDI SMK TELKOM MALANG - Treasurer",
      issuer: "Student Council",
      year: "2024/2025",
      desc: "Managed organizational finance and budgeting activities."
    },

    {
      image: taffidz,
      link: taffidz,
      title: "Certificate of Tahfidz",
      issuer: "SMK Telkom Malang",
      year: "2026",
      desc: "Awarded with Jayyid predicate."
    }
  ];

  return (
    <section
      className="organization"
      id="certification"
    >
      <div className="section-header">
        <span className="section-badge">
          Certification
        </span>

        <h2>My Certifications</h2>

        <p>
          Professional certifications, achievements, internships,
          and organizational experiences.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((item, index) => (
          <div
            className="certificate-card"
            key={index}
          >
            <div className="certificate-left">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="certificate-middle">
              <h3>{item.title}</h3>

              <h4>{item.issuer}</h4>

              <p>{item.desc}</p>

             <button
  onClick={() => setSelectedCertificate(item.image)}
>
  View Certificate
</button>
            </div>

            <div className="certificate-right">
              <span className="certificate-badge">
                Certificate
              </span>

              <span className="certificate-year">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>

{selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-modal"
        onClick={() => setSelectedCertificate(null)}
      >
        ✕
      </button>

      <img
        src={selectedCertificate}
        alt="Certificate"
      />
    </div>
  </div>
)}

</section>
  );
}