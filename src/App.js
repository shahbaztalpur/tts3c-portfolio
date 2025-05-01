import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function TTS3CPortfolio() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f0f0f", color: "white", padding: "2rem" }}>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>TTS3C - Taimoor Talpur</h1>
        <p style={{ color: "#aaa", marginTop: "0.5rem" }}>Cybersecurity | Pentesting | OSINT | Developer</p>
      </header>

      <section style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>About Me</h2>
          <p style={{ color: "#ccc" }}>
            Welcome to my digital portfolio. I specialize in cybersecurity, penetration testing, and open-source intelligence (OSINT). This site is inspired by terminal interfaces to reflect my hacker-centric approach to digital defense.
          </p>
        </div>

        <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Projects</h2>
          <ul style={{ color: "#ccc" }}>
            <li>Terminal-based Web Portfolio</li>
            <li>Custom OSINT tools and scripts</li>
            <li>Security assessments for web and cloud platforms</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Certifications</h2>
          <ul style={{ color: "#ccc" }}>
            <li>CEH (Certified Ethical Hacker)</li>
            <li>OSCP (Offensive Security Certified Professional)</li>
            <li>CompTIA Security+</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Contact</h2>
          <div style={{ color: "#ccc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a href="mailto:contact@ttsec.net" style={{ color: "#ccc", textDecoration: "none" }}>
              <Mail size={16} style={{ marginRight: "0.5rem" }} /> contact@ttsec.net
            </a>
            <a href="https://www.linkedin.com/in/taimoortalpur/" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", textDecoration: "none" }}>
              <Linkedin size={16} style={{ marginRight: "0.5rem" }} /> LinkedIn
            </a>
            <a href="https://github.com/tts3c" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", textDecoration: "none" }}>
              <Github size={16} style={{ marginRight: "0.5rem" }} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", color: "#666", marginTop: "3rem" }}>
        &copy; {new Date().getFullYear()} TTS3C. All rights reserved.
      </footer>
    </div>
  );
}
