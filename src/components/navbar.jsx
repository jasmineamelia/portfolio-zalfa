import "../styles/navbar.css";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certification">Certification</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

   <button
  className="contact-btn"
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }}
>
  Contact Me <FaArrowRight />
</button>
    </nav>
  );
}