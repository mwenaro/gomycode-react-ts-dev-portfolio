import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 md:p-20">
        <div>
          <img src="./logo.png" alt="Logo" className="h-8" />
        </div>

        {/* nav-links */}

        <ul className="hidden md:flex space-x-6 text-gray-700 transition">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#"></a>Tech Stack</li>
          <li><a href="#"></a>Projects</li>
          <li><a href="#"></a>Contact</li>
        </ul>

        {/* socila links */}

        <div className="flex items-center space-x-4">
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




      </nav>
    </header>
  );
}
