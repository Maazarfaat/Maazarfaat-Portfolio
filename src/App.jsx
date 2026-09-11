import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PersonalStatement from "./components/PersonalStatement.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Community from "./components/Community.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <PersonalStatement />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Certifications />
        <Community />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
