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
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white">
      <Navigation />
      <Profile />
      <About />
      <Resume />
      <ProjectsPreview />
      <Contact />
    </div>
  );
}

export default HomePage;
