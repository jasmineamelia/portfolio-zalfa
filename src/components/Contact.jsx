import { useState } from "react";
import "../styles/contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "466acef7-c5d6-43ea-aee4-8147074b7890"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Failed to send message.");
      console.log(data);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-info">

          <span className="contact-tag">
            Let's Connect
          </span>

          <h2>
            Open for Opportunities and Collaboration
          </h2>

          <p>
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="info-list">

            <div className="info-item">
              <span>Email</span>
              <h4>zalfajasmineamelia@gmail.com</h4>
            </div>

            <div className="info-item">
              <span>Phone</span>
              <h4>+62 888 5704 5704</h4>
            </div>

            <div className="info-item">
              <span>Location</span>
              <h4>Indonesia</h4>
            </div>

          </div>

          <div className="social-buttons">

            <a
              href="https://github.com/jasmineamelia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zalfa-amelia-2bb405401/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="mailto:zalfajasmineamelia@gmail.com">
              <FaEnvelope />
              Email
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="contact-form-card">

          <form onSubmit={onSubmit}>

            <div className="form-row">

              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="send-btn"
            >
              Send Message
            </button>

            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
              }}
            >
              {result}
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}