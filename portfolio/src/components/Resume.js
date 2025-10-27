import React from "react";

function Resume() {
  return (
    <div
      id="Resume"
      className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white"
    >
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Resume
          </h1>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Experience
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold mb-1">
                    Undergraduate Research Assistant, Boulder, CO
                  </h4>
                  <p className="text-gray-400 mb-2">May 2022 - 2024</p>
                  <p className="text-gray-300">
                    Developing a magnet-based system for creating board games
                    that can be played remotely. Designed and built a Scotch
                    Yoke mechanism for a robot to raise and lower a magnet in
                    order to grab and move game pieces.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold mb-1">
                    Internship; Zone 4 Systems Integration and Design
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Fayetteville, AR May 2023 - Aug 2023
                  </p>
                  <p className="text-gray-300">
                    Tracked daily build progress and work hours using Procore
                    construction management software. Completed quality control
                    inspections of Walmart's Alphabot pickup order fulfillment
                    system.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold mb-1">
                    Internship; Exyn Technologies
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Philadelphia, PA May 2016 - May 2020
                  </p>
                  <p className="text-gray-300">
                    Modeled drone sensor mounts, electronic enclosures, and
                    flight simulation environments using SolidWorks and Fusion
                    360 CAD software. Prototyped designs using 3D printers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Education
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold mb-1">
                    University of Colorado Boulder
                  </h4>
                  <p className="text-gray-400 mb-2">
                    B.S. in Mechanical Engineering, Minor in Computer Science |
                    May 2024
                  </p>
                  <p className="text-gray-300">GPA: 3.85/4.00</p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold mb-1">
                    University of Pennsylvania
                  </h4>
                  <p className="text-gray-400 mb-2">
                    M.S. in Robotics | (Expected May 2026)
                  </p>
                  <p className="text-gray-300">GPA: TBD/4.00</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <a
                href="/content/resume.pdf"
                download="Resume.pdf"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
