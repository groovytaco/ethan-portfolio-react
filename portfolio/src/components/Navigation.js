import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  // onClick={(e) => {
  //   e.preventDefault();
  //   document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  // }}
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Resume", "Contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-cyan-900/80 backdrop-blur-lg z-50 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h3 className="text-2xl font-bold text-white">Ethan Sanchez</h3>

          <div className="hidden md:flex space-x-8">
            {/* <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a> */}
            {["Profile", "About", "Resume", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors ${
                  activeSection
                    ? "text-gray-300 hover:text-white"
                    : "text-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
