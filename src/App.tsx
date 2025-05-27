import { Footer } from "./components/Footer";

import { About } from "./components/AboutSection";
import { MyTechStackSection } from "./components/MyTechStackSection";
import { Header } from "./components/Header";
import { ContactSection } from "./components/ContactSection";

import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";

export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* My Tech Stack */}
      <MyTechStackSection />
      {/* Projects */}
      <ProjectSection />
      {/* Contact */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
