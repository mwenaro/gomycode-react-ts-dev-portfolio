import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center p-4 md:p-20">
        

          {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>


<div className="mr-auto md:mr-0">
          <img src="./logo.png" alt="Logo" className="h-8" />
        </div>
        {/* nav-links */}

        <ul className="hidden md:flex space-x-6 text-gray-700 transition">
          
              <li><a href="hero">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="tech">Tech Stack</a></li>
              <li><a href="project">Projects</a></li>
              <li><a href="contact">Contact</a></li>
            
        </ul>

        {/* socila links */}

        <div className={`${isMenuOpen ? 'hidden' : 'flex'} md:flex items-center space-x-4 md:space-x-6`}>
          <a href="#"> 
            <FaGithub className="text-xl" />
          </a>
          <a href="#">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#">
            <FaLinkedin className="text-xl" />                                                           
          </a>
        </div>


{/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6">
            <ul className="flex flex-col space-y-4 text-gray-700">
              <li><a href="hero">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="tech">Tech Stack</a></li>
              <li><a href="project">Projects</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
