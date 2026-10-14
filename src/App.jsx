import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ScrollTypography from "./components/ScrollTypography.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#15181E] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:ring-2 focus:ring-[#8B5E3C] shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="w-full">
        <Hero />
        <ScrollTypography />
        <Projects />
        <Achievements />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
