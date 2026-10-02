import { useState, useEffect } from "react";
import IntroVideo from "./components/IntroVideo";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import Certificates from "./components/Certificates";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <FloatingNav />
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <main>
        {!introDone && <IntroVideo onFinish={() => setIntroDone(true)} />}

        {introDone && (
          <>
            <Home theme={theme} />
            <About />
            <Projects theme={theme} />
            <Skills theme={theme} />
            <Resume theme={theme} />
            <Certificates theme={theme} />
            <Contact theme={theme} />
          </>
        )}
      </main>

      <footer className="relative border-t border-gray-200 dark:border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-white/60">Designed and Developed by Omkar Awaze</p>
        </div>
      </footer>
    </div>
  );
}
