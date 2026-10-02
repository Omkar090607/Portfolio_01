import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./Home.css";

const githubLogo = `${import.meta.env.BASE_URL}github.png`;
const linkedinLogo = `${import.meta.env.BASE_URL}linkedin.png`;
const gmailLogo = `${import.meta.env.BASE_URL}gmail.png`;
const instagramLogo = `${import.meta.env.BASE_URL}insta.png`;
const whatsappLogo = `${import.meta.env.BASE_URL}whatsapp.png`;

interface HeroProps {
  theme: "light" | "dark"; // pass theme from global state
}

export function Home({ theme }: HeroProps) {
  const roles = [
    "Full-Stack Developer",
    "Python Developer",
    "Frontend Developer",
    "REST APIs",
    "Generative AI",
  ];

  const connectLinks = [
    { img: linkedinLogo, link: "https://www.linkedin.com/in/omkar-awaze-6322103b1/" },
    { img: gmailLogo, link: "mailto:omkarawaze1915@gmail.com" },
    { img: whatsappLogo, link: "https://wa.me/918432065361" },
    { img: instagramLogo, link: "https://www.instagram.com/iam_omkar19/" },
  ];

  const workLinks = [
    { img: githubLogo, link: "https://github.com/Omkar090607" },
  ];

  const [typedRoles, setTypedRoles] = useState("");
  const rolesText = "Aspiring Full-Stack Developer | Python Developer | AI Enthusiast";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedRoles(rolesText.slice(0, i + 1));
      i++;
      if (i === rolesText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };


  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${theme === "light" ? `${import.meta.env.BASE_URL}j.jpg` : `${import.meta.env.BASE_URL}Hero.jpg`})`,
          backgroundColor: theme === "light" ? "#ffffff" : "#000000",
        }}
      />

      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi! I’m <br />
          <span className="gradient-text hero-name-line">OMKAR AWAZE</span>
          <motion.div className="hero-line" variants={itemVariants} />
        </motion.h1>

        <motion.p className="hero-intro typing-effect" variants={itemVariants}>
          {typedRoles}
        </motion.p>

        <motion.p className="hero-intro" variants={itemVariants}>
          Building practical web applications and backend systems.
          Python, JavaScript, REST APIs and AI.
          Solving real-world problems with technology.
        </motion.p>

        <motion.div className="hero-roles" variants={itemVariants}>
          {roles.map((r, i) => (
            <motion.div key={i} className="role-tag" variants={itemVariants}>
              {r}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hero-info" variants={itemVariants}>
          {[
            { label: "📍 Location", value: "Nagpur, Maharashtra, India" },
            { label: "💼 Expertise", value: "Full-Stack, Python, APIs" },
            { label: "📞 Contact", value: "omkarawaze1915@gmail.com" },
          ].map((info, i) => (
            <motion.div key={i} className="info-card" whileHover={{ scale: 1.05, y: -3 }} variants={itemVariants}>
              <h4>{info.label}</h4>
              <p>{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <div className="social-group">
            <h5>Connect with me</h5>
            <div className="social-icons">
              {connectLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  variants={itemVariants}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="social-group">
            <h5>See what I'm doing</h5>
            <div className="social-icons">
              {workLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  variants={itemVariants}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
