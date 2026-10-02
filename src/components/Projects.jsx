import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "🎙️ OMIRA — AI Personal Assistant",
    desc: "Windows-based AI assistant with voice interaction in English, Hindi and Marathi, multi-model AI support (Gemini, OpenAI, Ollama), automation, document summarization and API integration.",
    ss: `${import.meta.env.BASE_URL}omira.png`,
    tech: ["Python", "FastAPI", "JavaScript", "WebSockets", "APIs"],
    live: "#",
    code: "https://github.com/Omkar090607",
  },
  {
    title: "💊 TrustTrace — Pharma Supply Chain",
    desc: "Blockchain-based platform tracking medicines from manufacturer to pharmacy with digital IDs, tamper detection, authenticity verification, inventory tracking and role-based access.",
    ss: `${import.meta.env.BASE_URL}trusttrace.png`,
    tech: ["React", "Node.js", "PostgreSQL", "Solidity"],
    live: "#",
    code: "https://github.com/Omkar090607/TrustTrace-",
  },
  {
    title: "🏛️ CyberSparks — Public Fund Tracker",
    desc: "Data-driven platform for tracking public funds and government projects with interactive dashboards, analytics, authentication, database integration and REST APIs.",
    ss: `${import.meta.env.BASE_URL}publicledger.png`,
    tech: ["REST APIs", "Dashboards", "Data Visualization", "Database"],
    live: "#",
    code: "https://github.com/Omkar090607",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A selection of my work — full-stack builds, APIs and AI.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  {p.live !== "#" && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      whileHover={{ scale: 1.08 }}
                      className="live-btn"
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
