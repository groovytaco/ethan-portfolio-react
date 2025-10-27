import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Navigation,
  Profile,
  About,
  Projects,
  Contact,
  Resume,
} from "../components";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white">
      <Navigation />
      <Profile />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default HomePage;
