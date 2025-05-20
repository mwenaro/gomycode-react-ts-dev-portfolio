import { About } from "./components/AboutSection";
import { MyTechStackSection } from "./components/MyTechStackSection";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Nav */}

      {/* Header */}
      <Header />
      {/* Hero */}

      {/* About */}
      <About />

      {/* My Tech Stack */}
      <MyTechStackSection />
      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
}
