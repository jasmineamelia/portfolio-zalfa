import "../styles/skills.css";

import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiTrello,
  SiNotion
} from "react-icons/si";

export default function Skills() {

  const technicalSkills = [
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiTrello />, name: "Trello" },
    { icon: <SiNotion />, name: "Notion" }
  ];


  const softSkills = [
    "Leadership",
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Analytical Thinking",
    "Attention to Detail",
    "Responsibility"
  ];

  return (
    <section
      className="skills"
      id="skills"
    >

      <div className="section-header">

        <span className="section-badge">
          Skills
        </span>

        <h2>
          Technologies &
          Expertise
        </h2>

      </div>

      {/* Technical Skills */}

      <div className="tech-grid">

        {technicalSkills.map((skill, index) => (

          <div
            key={index}
            className="tech-card"
          >

            <div className="tech-icon">
              {skill.icon}
            </div>

            <h4>{skill.name}</h4>

          </div>

        ))}

      </div>

      
      {/* Soft Skills */}

     <div className="softskills-section">

  <div className="softskills-left">

    <span className="section-badge">
      Professional Skills
    </span>

    <h2>
      Soft Skills
    </h2>

    <p>
      Strong leadership, communication,
      teamwork, and problem-solving skills
      developed through internships,
      projects, and organizational
      experiences.
    </p>

  </div>

  <div className="softskills-right">

    {softSkills.map((skill,index)=>(

      <div
        className="softskill-card"
        key={index}
      >
        {skill}
      </div>

    ))}

  </div>

</div>

    </section>
  );
}