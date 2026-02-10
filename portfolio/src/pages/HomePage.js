import React from "react";
import {
  Navigation,
  Profile,
  About,
  ProjectsPreview,
  Resume,
  Contact
} from "../components";

  

function HomePage() {

  const SectionDivider = () => (
    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded"></div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white">
      <Navigation />
      <SectionDivider />
      <Profile />
      <SectionDivider />
      <About />
      <SectionDivider />
      <ProjectsPreview />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
    </div>
  );
}

export default HomePage;
