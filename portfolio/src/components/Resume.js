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
            {/* EDUCATION */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Education
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">
                    University of Pennsylvania
                  </h4>
                  <p className="text-gray-400">
                    M.S. Robotics | Expected May 2026 — GPA: 3.91
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">
                    University of Colorado Boulder
                  </h4>
                  <p className="text-gray-400">
                    B.S. Mechanical Engineering, CS Minor | May 2024 — GPA: 3.85
                  </p>
                </div>
              </div>
            </section>
            
            {/* EXPERIENCE */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Engineering Experience
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">
                    Undergraduate Research Assistant — THING Lab
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Boulder, CO | May 2022 – Aug. 2023
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Designed a magnet-based system enabling
                      physical board games to be played remotely.
                    </li>
                    <li>
                      Modeled and prototyped a mount to secure a servo, battery, RFID board, 
                      and PCB to mini table top robots.
                    </li>
                    <li>
                      Developed a Scotch Yoke mechanism to control magnet motion.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold">
                    Project Management Intern — Zone 4 Systems Integration
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Fayetteville, AR | May 2023 – Aug. 2023
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Tracked build progress and labor hours using Procore.
                    </li>
                    <li>
                      Performed QC inspections of Walmart’s Alphabot fulfillment
                      system.
                    </li>
                    <li>
                      Coordinated with bilingual foremen to prevent build delays.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold">
                    Mechatronics Intern — Exyn Technologies
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Philadelphia, PA | May 2016 – May 2020
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Designed and prototyped drone sensor mounts and enclosures
                      using SolidWorks and Fusion 360.
                    </li>
                    <li>
                      Programmed Teensy and PSoC microcontrollers using I2C and
                      SPI.
                    </li>
                    <li>
                      Built a Unity-based C# point cloud visualization for VR.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Projects
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">
                    Senior Capstone — Electromechanical Engineer
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Boulder, CO | Aug. 2023 – May 2024
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Integrated motors and solenoids to achieve 35 ft casting
                      distance.
                    </li>
                    <li>
                      Programmed sip-and-puff accessibility controls on a
                      Teensy.
                    </li>
                    <li>
                      Designed a custom waterproof PCB with current protection.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">
                    Component Design Project
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Boulder, CO | Jan. 2023 – May 2023
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Machined precision components and press-fit bearings
                      within 0.006 in.
                    </li>
                    <li>
                      Designed a high-load chassis hauling 875 lbs uphill.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Skills & Coursework
              </h3>
              <p className="text-gray-300">
                <span className="font-semibold">Skills:</span> SolidWorks,
                Fusion 360, MATLAB, Simulink, PCB Design, C++, Python, Git
              </p>
              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Coursework:</span> Applied
                Machine Learning, Mechatronics, System Dynamics, Intro to
                Robotics
              </p>
            </section>

            {/* DOWNLOAD */}
            <div className="text-center pt-8">
              <a
                href="/content/resume.pdf"
                download="Ethan_Sanchez_Resume.pdf"
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
