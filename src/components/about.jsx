import "../styles/about.css";

export default function About() {

  const stats = [
    {
      number:"1",
      text:"Internship Experience"
    },
    {
      number:"3+",
      text:"Projects Completed"
    },
    {
      number:"3",
      text:"Years Learning"
    },
    {
      number:"3+",
      text:"Organizations"
    }
    
  ];

  return (
    <section className="about" id="about">

      <div className="about-card">

        <div className="about-left">

          <span className="section-tag">
            About Me
          </span>

          <h2>
           Building Solutions, Leading Teams
          </h2>

          <p>
           My journey in technology goes beyond
            writing code. I have experience in backend 
            development, quality assurance, project
             leadership, and public speaking.
              These experiences have shaped me 
              into a collaborative problem solver
               who enjoys creating impactful digital 
               solutions while working closely with d
               iverse teams.
          </p>

        </div>

        <div className="about-right">

          {
            stats.map((item,index)=>(
              <div className="stat-box" key={index}>
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
}