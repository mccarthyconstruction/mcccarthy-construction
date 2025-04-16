
import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif", padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="McCarthy Logo" style={{ height: "50px", marginRight: "1rem" }} />
          <h1 style={{ color: "#FFD700", fontSize: "1.5rem", margin: 0 }}>McCarthy <span style={{ color: "#fff" }}>Construction</span></h1>
        </div>
        <nav>
          <a href="#home" style={{ color: "#fff", marginRight: "1rem" }}>HOME</a>
          <a href="#about" style={{ color: "#fff", marginRight: "1rem" }}>ABOUT</a>
          <a href="#contact" style={{ color: "#fff" }}>CONTACT</a>
        </nav>
      </header>

      <main>
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Building Your Vision</h2>
          <p style={{ color: "#FFD700", fontSize: "1.25rem", marginBottom: "1.5rem" }}>Your Trusted Construction Partner</p>
          <button style={{ backgroundColor: "#FFD700", padding: "0.5rem 1.5rem", border: "none", fontWeight: "bold" }}>OUR PROJECTS</button>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#FFD700", fontSize: "1.5rem", marginBottom: "1rem" }}>Our Work</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <img src="/building1.jpg" alt="Project 1" style={{ width: "48%", borderRadius: "10px" }} />
            <img src="/building2.jpg" alt="Project 2" style={{ width: "48%", borderRadius: "10px" }} />
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ color: "#FFD700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Services</h3>
          <ul>
            <li>General-Contracting</li>
            <li>Design-Build</li>
            <li>Project Management</li>
            <li>Renovations</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: "#FFD700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Contact Us</h3>
          <p>info@mccarthyconstruction.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
