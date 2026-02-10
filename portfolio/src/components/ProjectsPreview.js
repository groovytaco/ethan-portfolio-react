import React from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

function ProjectsPreview() {
  const navigate = useNavigate();

  return (
    <div id="Projects" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group bg-stone-900/80 rounded-xl overflow-hidden border border-blue-900/90 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900/30 text-cyan-400 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview;
