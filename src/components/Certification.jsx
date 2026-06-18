import "../styles/certification.css";

export default function Certification() {

  const certificates = [
    "Laravel Backend Development",
    "Database Design & SQL",
    "REST API Development",
    "Git & Github Essentials"
  ];

  return (
    <section className="certification">

      <div className="section-header">

        <span className="section-badge">
          Certification
        </span>

        <h2>
          Courses &
          Certifications
        </h2>

      </div>

      <div className="certificate-grid">

        {certificates.map((cert,index)=>(
          <div
            key={index}
            className="certificate-card"
          >
            🏆 {cert}
          </div>
        ))}

      </div>

    </section>
  );
}