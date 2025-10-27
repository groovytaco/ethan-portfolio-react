export const projectsData = [
  {
    id: 1,
    title: "Drill Powered Bike",
    category: "Engineering",
    image: "/images/drill-bike.jpg",
    description: "Engineered an innovative hybrid mobility system by integrating a power drill drivetrain with a standard bicycle frame.",
    tech: ["Mechanical Design", "Power Systems", "Prototyping", "Team Collaboration"],
    features: [
      "Custom mounting system for drill attachment",
      "Power transfer mechanism design",
      "Control interface development",
      "Safety features and testing"
    ],
    detailedDescription: [
      "This project involved designing and building a functional bicycle powered by a standard power drill. The challenge was to create a reliable power transfer system that could convert the drill's rotational motion into effective propulsion.",
      "Working collaboratively with a team, we designed custom mounting brackets, developed the drivetrain interface, and implemented control systems to manage speed and power delivery. The project required extensive prototyping and testing to ensure safety and functionality.",
      "The final prototype successfully demonstrated the concept and provided valuable insights into mechanical system integration and creative problem-solving in engineering."
    ],
    challenges: [
      {
        challenge: "Power Transfer Efficiency",
        solution: "Designed a custom coupling system with adjustable tension to optimize power delivery from the drill to the wheel."
      },
      {
        challenge: "Structural Integrity",
        solution: "Reinforced the frame mounting points and conducted stress analysis to ensure safe operation under load."
      }
    ],
    gallery: [
      "/images/drill-bike.jpg",
      "/images/drill-bike.jpg",
      "/images/drill-bike.jpg"
    ],
    link: "https://github.com/yourusername/drill-bike"
  },
  {
    id: 2,
    title: "Doggy Door Lock",
    category: "Engineering",
    image: "/images/door-lock.jpg",
    description: "Created an automated locking system for pet doors with smart control features.",
    tech: ["Arduino", "Servo Motors", "Mobile App", "IoT"],
    features: [
      "Automated lock/unlock mechanism",
      "Remote control via smartphone",
      "Schedule-based operation",
      "Safety sensors"
    ],
    detailedDescription: [
      "Developed a smart locking mechanism for doggy doors that allows pet owners to control access remotely and set schedules for when their pets can go in and out.",
      "The system uses servo motors controlled by an Arduino microcontroller, with connectivity features that enable control through a mobile application."
    ],
    challenges: [
      {
        challenge: "Reliability",
        solution: "Implemented redundant sensors and fail-safe mechanisms to ensure the door never locks when a pet is in the doorway."
      }
    ],
    gallery: [
      "/images/door-lock.jpg",
      "/images/door-lock.jpg"
    ],
    link: "https://github.com/yourusername/doggy-door"
  },
  {
    id: 3,
    title: "Transformer Game",
    category: "Software",
    image: "/images/transformer-game.png",
    description: "Interactive game utilizing transformer models for dynamic gameplay.",
    tech: ["Python", "PyTorch", "Game Development", "AI/ML"],
    features: [
      "AI-driven game mechanics",
      "Real-time decision making",
      "Adaptive difficulty",
      "Engaging user interface"
    ],
    detailedDescription: [
      "Created an innovative game that leverages transformer neural networks to create dynamic and adaptive gameplay experiences.",
      "The AI system learns from player behavior and adjusts challenges accordingly, providing a unique experience for each player."
    ],
    gallery: [
      "/images/transformer-game.png",
      "/images/transformer-game.png"
    ],
    link: "https://github.com/yourusername/transformer-game"
  },
  {
    id: 4,
    title: "Gaming Steering Wheel",
    category: "Hardware",
    image: "/images/gaming-wheel.jpg",
    description: "Custom-built force feedback steering wheel for racing simulators.",
    tech: ["Arduino", "Force Feedback", "3D Printing", "C++"],
    features: [
      "Force feedback system",
      "Customizable button layout",
      "High-precision sensors",
      "Compatible with major racing games"
    ],
    detailedDescription: [
      "Designed and fabricated a custom gaming steering wheel with force feedback capabilities for an immersive racing simulation experience.",
      "The project involved 3D printing custom parts, integrating sensors and motors, and programming the control system for realistic force feedback."
    ],
    gallery: [
      "/images/gaming-wheel.jpg",
      "/images/gaming-wheel.jpg"
    ],
    link: "https://github.com/yourusername/gaming-wheel"
  },
  {
    id: 5,
    title: "Adaptive Fishing Robot",
    category: "Robotics",
    image: "/images/adaptive-fishing.png",
    description: "Robotic system designed to assist individuals with spinal cord injuries in fishing activities.",
    tech: ["ROS", "Computer Vision", "Kinematics", "Assistive Technology"],
    features: [
      "Autonomous casting mechanism",
      "Adaptive control interface",
      "Real-time motion tracking",
      "Safety systems"
    ],
    detailedDescription: [
      "Developed an assistive robotic system that enables individuals with limited mobility to enjoy fishing independently.",
      "The robot features automated casting, retrieval mechanisms, and an intuitive control interface designed specifically for users with spinal cord injuries.",
      "This project combines mechanical engineering, robotics, and human-centered design to create a meaningful assistive technology solution."
    ],
    challenges: [
      {
        challenge: "User Interface Design",
        solution: "Conducted extensive user testing with individuals with spinal cord injuries to develop an accessible and intuitive control system."
      },
      {
        challenge: "Environmental Adaptability",
        solution: "Implemented robust control algorithms that adapt to different fishing conditions and environments."
      }
    ],
    gallery: [
      "/images/adaptive-fishing.png",
      "/images/adaptive-fishing.png",
      "/images/adaptive-fishing.png"
    ],
    link: "https://github.com/yourusername/adaptive-fishing"
  },
  {
    id: 6,
    title: "Magnet Table",
    category: "Software",
    image: "/images/magnet-table.jpg",
    description: "Interactive table system using magnets for remote collaborative board games.",
    tech: ["Robotics", "Control Systems", "Mechanical Design", "Embedded Systems"],
    features: [
      "Magnetic piece manipulation",
      "Remote synchronization",
      "Multi-player support",
      "Custom game piece detection"
    ],
    detailedDescription: [
      "Developed a magnet-based system for creating board games that can be played remotely, allowing players in different locations to interact with the same physical game board.",
      "The system uses motorized magnets beneath the table surface to move game pieces, with sensors detecting piece positions and transmitting data to remote players.",
      "Designed and built a Scotch Yoke mechanism to raise and lower magnets for grabbing and moving game pieces precisely."
    ],
    challenges: [
      {
        challenge: "Precise Positioning",
        solution: "Implemented closed-loop control with position feedback to ensure accurate magnet positioning and piece manipulation."
      }
    ],
    gallery: [
      "/images/magnet-table.jpg",
      "/images/magnet-table.jpg"
    ],
    link: "https://github.com/yourusername/magnet-table"
  }
];