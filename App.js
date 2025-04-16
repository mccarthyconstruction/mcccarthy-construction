
import React from "react";
import "./App.css";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400">McCarthy Construction</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline text-white">About</a>
          <a href="#profile" className="hover:underline text-white">Profile</a>
          <a href="#projects" className="hover:underline text-white">Projects</a>
          <a href="#services" className="hover:underline text-white">Services</a>
          <a href="#contact" className="hover:underline text-white">Contact</a>
        </nav>
      </header>

      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Building a Stronger Tomorrow</h2>
        <p className="text-lg">Reliable. Affordable. African Excellence in Construction.</p>
      </section>

      <section id="about" className="py-10">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">About Us</h3>
        <p>
          McCarthy Construction is a proudly African construction company known for reliable project delivery,
          skilled workmanship, and a commitment to quality. From community schools to residential developments,
          we build with purpose and pride.
        </p>
      </section>

      <section id="profile" className="py-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Company Profile</h3>
        <p className="mb-4">
          McCarthy Construction is a proudly African construction company delivering high-quality, affordable,
          and purpose-driven buildings across Malawi and beyond. From community school blocks to commercial
          developments, we bring every project to life with integrity, innovation, and a commitment to excellence.
        </p>
        <p className="mb-2 font-semibold">Our Mission</p>
        <p className="mb-4">To build long-lasting, affordable, and functional structures that uplift communities and support economic growth across Africa.</p>
        <p className="mb-2 font-semibold">Our Vision</p>
        <p className="mb-4">To be recognized as one of Africa’s most trusted construction companies—known for delivering quality, empowering local talent, and creating impact.</p>
        <p className="mb-2 font-semibold">Core Values</p>
        <ul className="list-disc list-inside mb-4">
          <li>Quality – We don’t compromise.</li>
          <li>Integrity – We build on trust and transparency.</li>
          <li>Community – We uplift where we build.</li>
          <li>Innovation – We blend modern solutions with local knowledge.</li>
        </ul>
        <p className="mb-2 font-semibold">Our Services</p>
        <ul className="list-disc list-inside">
          <li>General Contracting</li>
          <li>Design-Build Solutions</li>
          <li>Renovations & Additions</li>
          <li>Site Supervision & Subcontracting</li>
        </ul>
      </section>

      <section id="projects" className="py-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Our Projects</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-gray-800 p-4 rounded-xl shadow">School Block – Ntcheu, Malawi</li>
          <li className="bg-gray-800 p-4 rounded-xl shadow">Health Centre – Mzuzu</li>
          <li className="bg-gray-800 p-4 rounded-xl shadow">Warehouse – Lilongwe</li>
          <li className="bg-gray-800 p-4 rounded-xl shadow">Mixed-use Residential – Blantyre</li>
        </ul>
      </section>

      <section id="services" className="py-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">What We Do</h3>
        <ul className="list-disc list-inside">
          <li>Design & Build Services</li>
          <li>Residential & Commercial Construction</li>
          <li>Renovations and Additions</li>
          <li>Site Supervision & Subcontracting</li>
        </ul>
      </section>

      <section id="contact" className="py-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Us</h3>
        <p>Email: info@mccarthyconstruction.africa</p>
        <p>Phone: +265 999 123 456</p>
        <p>Facebook: @McCarthyConstruction</p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        &copy; 2025 McCarthy Construction. All rights reserved.
      </footer>
    </div>
  );
}
