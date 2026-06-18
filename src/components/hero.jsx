import "../styles/hero.css";
import profile from "../assets/profile.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <div className="hello-badge">
           Hello There!
        </div>

        <h1 className="hero-title">
          I'm <span>Zalfa Jasmine Amelia</span>,
          <br />
         Turning Ideas Into
          <br />
   Digital Solutions.
        </h1>

       <p className="hero-desc">
  Software Engineering graduate with interests in
  Backend Development, Quality Assurance, and
  Project Management. Experienced in web-based
  system development, software testing, and team
  coordination across various projects. Detail-oriented,
  collaborative, and highly adaptable in dynamic
  environments, with strong technical skills in
  programming and databases, complemented by
  leadership, communication, and problem-solving
  abilities developed through organizational experiences.
</p>

        <div className="contact-info">
          <span>📧 zalfajasmineamelia@gmail.com</span>
          <span>📍 Indonesia</span>
        </div>

      </div>

      <div className="hero-right">

        <div className="yellow-circle"></div>

        <img
          src={profile}
          alt="profile"
          className="profile-image"
        />

        <div className="floating badge1">
          Backend Developer
        </div>

        <div className="floating badge2">
          Quality Assurance
        </div>

        <div className="floating badge3">
          Project Management
        </div>

        <div className="floating badge4">
          Leadership
        </div>

        <div className="floating badge5">
  Frontend Developer
</div>


      </div>

    </section>
  );
}