import React from "react";

function Resume() {
  return (
    <div
      id="Resume"
      className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white"
    >
      <div className="py-10 px-4">
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
                  <h4 className="text-xl font-bold">University of Pennsylvania</h4>
                  <p className="text-gray-400">M.S. Robotics | Expected May 2026 — GPA: 3.91</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">University of Colorado Boulder</h4>
                  <p className="text-gray-400">B.S. Mechanical Engineering, CS Minor | May 2024 — GPA: 3.85</p>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Engineering Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Graduate Research Assistant — DARPA Triage</h4>
                  <p className="text-gray-400 mb-2">Philadelphia, PA | June 2025 – Present</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Developed perception pipelines for mobile robots; implemented contact-free vital monitoring</li>
                    <li>Integrated robot microphone with OpenAI Whisper for on-board transcription</li>
                    <li>Built HDR vision scripts and migrated pipelines from ROS1 to ROS2</li>
                    <li>Integrated differential GPS for improved localization; co-authored arXiv paper</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Project Management Intern — Zone 4</h4>
                  <p className="text-gray-400 mb-2">Fayetteville, AR | May 2023 – Aug. 2023</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Tracked build progress and labor hours using Procore</li>
                    <li>Performed QC inspections of Walmart’s Alphabot system</li>
                    <li>Collaborated with bilingual foremen to prevent delays</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Undergraduate Research Assistant — THING Lab</h4>
                  <p className="text-gray-400 mb-2">Boulder, CO | May 2022 – Aug. 2023</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Designed magnetically actuated robotic system for remote interaction research</li>
                    <li>Prototyped mounts integrating servo, RFID, and custom PCB onto Toio robots</li>
                    <li>Engineered Scotch Yoke for controlled magnetic actuation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Mechatronics Intern — Exyn Technologies</h4>
                  <p className="text-gray-400 mb-2">Philadelphia, PA | May 2016 – May 2020</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Modeled drone mounts, enclosures, and flight sims using SolidWorks/Fusion 360</li>
                    <li>Programmed Teensy/PSoC microcontrollers and Unity C# VR visualization</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Projects</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">RoboRacer — Robotics Engineer</h4>
                  <p className="text-gray-400 mb-2">Philadelphia, PA | Jan. 2026 – May 2026</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Modified and programmed a 1/10th scale vehicle using ROS2 for control</li>
                    <li>Applied PID, reactive planning, and SLAM for robust localization</li>
                    <li>Developed racing strategies including optimized lines and adaptive speed</li>
                    <li>Gained hands-on experience with vehicle hardware, software, and testing</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">FlexBot Capstone — Robotics Engineer</h4>
                  <p className="text-gray-400 mb-2">Philadelphia, PA | Oct. 2025 – May 2026</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Reverse engineered FlexBot robots, documenting mechanical, electrical, and sensing systems</li>
                    <li>Mapped wiring and protocols; investigated motor control for external commands</li>
                    <li>Produced technical documentation for long-term reuse</li>
                    <li>Integrated VLP-16 LiDAR and CPU, ran SLAM for autonomous navigation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Senior Capstone — Electromechanical Engineer</h4>
                  <p className="text-gray-400 mb-2">Boulder, CO | Aug. 2023 – May 2024</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Integrated motors and solenoids for assistive fishing device with 35 ft casting</li>
                    <li>Programmed sip-and-puff control via Teensy</li>
                    <li>Designed waterproof PCB with back-current protection</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold">Component Design — Mechanical Engineer</h4>
                  <p className="text-gray-400 mb-2">Boulder, CO | Jan. 2023 – May 2023</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Machined precision components and press-fit bearings to 0.006 in tolerance</li>
                    <li>Designed high-load chassis capable of hauling 875 lbs uphill</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* INDEPENDENT LEARNING */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Independent Learning</h3>
              <div className="border-l-4 border-cyan-500 pl-6">
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Created and animated a skeletal mesh of a transformer in Unreal Engine</li>
                  <li>Implemented movement, projectiles, and other game logic using blueprint scripting</li>
                </ul>
              </div>
            </section>

            {/* SKILLS & COURSEWORK */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Skills & Coursework</h3>
              <p className="text-gray-300">
                <span className="font-semibold">Skills:</span> SolidWorks, Fusion 360, MATLAB, Simulink, PCB Design, C++, Python, Git, Resilience, Communication, Interdisciplinary Collaboration
              </p>
              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Coursework:</span> Applied Machine Learning, System Dynamics, Intro to Robotics, Mechatronics
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
