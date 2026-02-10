import React from "react";

function About() {
  return (
    <div id="About" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
        I’m a robotics engineer working at the intersection of electromechanical design, embedded systems, and autonomy. 
        I’ve built and integrated robotic platforms involving custom mechanisms, sensors, microcontrollers, and control 
        software, with experience taking systems from prototype to field-ready. My interests include aerial robotics, 
        intelligent control, and designing systems that perform reliably outside the lab.
        </p>
      </div>
    </div>
  );
}

export default About;
