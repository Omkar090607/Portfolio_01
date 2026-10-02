import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

const CERTS = {
  tech: [
    { title: "Introduction to Cybersecurity", org: "Cisco Networking Academy", date: "Jun 2026", img: `${import.meta.env.BASE_URL}certs/cisco.png` },
    { title: "Python Internship", org: "WideSoftech", date: "Apr–May 2026", img: `${import.meta.env.BASE_URL}certs/widesoftech-internship.jpg` },
    { title: "Local Code to Live URL", org: "GFG KDKCE × AWS User Group", date: "Mar 2026", img: `${import.meta.env.BASE_URL}certs/aws-workshop.png` },
    { title: "Full Stack Web Development", org: "PCE ACM Student Chapter", date: "Sep 2026", img: `${import.meta.env.BASE_URL}certs/fullstack.png` },
    { title: "Game Development (Unity)", org: "PCE Nagpur", date: "Sep 2026", img: `${import.meta.env.BASE_URL}certs/game-dev.png` },
    { title: "Robotics Workshop", org: "PCE × Techfest IIT Bombay", date: "Sep 2026", img: `${import.meta.env.BASE_URL}certs/robotics.png` },
  ],
  other: [
    { title: "WideSoftech Hackathon 2026", org: "Tech Alfa × WideSoftech", date: "Feb 2026", img: `${import.meta.env.BASE_URL}certs/widesoftech-hackathon.png` },
    { title: "Pallotti National HackFest", org: "St. Vincent Pallotti College", date: "Mar 2026", img: `${import.meta.env.BASE_URL}certs/svpcet-hackfest.png` },
    { title: "Inter Collegiate Hackathon", org: "PCE Nagpur × Perficient", date: "2026", img: `${import.meta.env.BASE_URL}certs/pce-hackathon.png` },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="cert-section">
      {/* SECTION ENTERS WHEN SCROLLED TO */}
      <motion.div
        className="cert-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }} // triggers closer to when you reach it
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h2 className="cert-title">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <p className="cert-subtitle">
          Explore my achievements — workshops, internship and hackathons.
        </p>

        {/* TABS */}
        <div className="cert-tabs">
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cert-tab ${tab === t ? "active" : ""}`}
            >
              {t === "tech" ? "Technical" : "Hackathons"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="certs-grid">
          {CERTS[tab].map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card"
              style={{ ["--angle"]: `${Math.random() * 8 - 4}deg` }}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }} // each card animates when it comes in view
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedCert(c)}
            >
              <img src={c.img} alt={c.title} className="cert-img" />
              <strong>{c.title}</strong>
              <span className="cert-meta">
                {c.org} • {c.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              className="modal-img"
              src={selectedCert.img}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
