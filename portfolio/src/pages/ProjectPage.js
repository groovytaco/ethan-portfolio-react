import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import { projectsData } from '../data/projects';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/projects')} 
            className="text-cyan-400 hover:text-cyan-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => {
              navigate('/');
              scrollToSection("Projects");
            }}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full font-semibold">
                {project.category}
              </span>
            </div>
            <p className="text-xl text-gray-300">{project.description}</p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden border border-cyan-500/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-900/30 text-cyan-400 px-4 py-2 rounded-lg border border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {project.features && project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Project Gallery</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-blue-900/30 hover:border-cyan-500/50 transition-all">
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.detailedDescription && (
            <div className="bg-slate-900/50 p-8 rounded-xl border border-blue-900/30 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Project Overview</h3>
              <div className="text-gray-300 space-y-4">
                {project.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-900/30 mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Contributions</h3>
            <ul className="space-y-2 text-gray-300">
              {project.contributions && project.contributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-slate-900/50 p-8 rounded-xl border border-blue-900/30 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Challenges & Solutions</h3>
              <div className="space-y-4">
                {project.challenges.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.challenge}</h4>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.link && project.link !== '#' && (
            <div className="text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                View Project Repository <ExternalLink size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;