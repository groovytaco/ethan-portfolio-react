import React from "react";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

function Profile() {
  // const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="Profile"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-4"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/mountains.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700/10 via-slate-650/40 to-slate-700"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-10 flex justify-center">
            <img
              src="/images/portrait_2.jpg"
              alt="Portrait"
              className="w-[34rem] h-[34rem] md:w-[34rem] md:h-[34rem] lg:w-[36rem] lg:h-[36rem] rounded-full object-cover border-8 border-cyan-400 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Robotics Engineer
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            & Software Developer
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Building intelligent systems that bridge the physical and digital
            worlds through robotics and cutting-edge software
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection("Projects")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            View Projects <ChevronRight size={35} />
          </button>
          <button
            onClick={() => scrollToSection("Contact")}
            className="border-2 border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/40 transition-all"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/essanchez02"
            className="text-black hover:text-white transition-colors"
          >
            <Github size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-sanchez-8ba7a11bb"
            className="text-blue-500 hover:text-white transition-colors"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="mailto:essanchez02@gmail.com"
            className="text-red-400 hover:text-yellow-400 transition-colors"
          >
            <Mail size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
