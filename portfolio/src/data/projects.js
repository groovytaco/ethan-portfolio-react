export const projectsData = [
  {
    id: 1,
    title: "Drill Powered Bike",
    category: "Engineering",
    image: "/images/bike/drill-bike.jpg",
    description:
      "Engineered an innovative hybrid mobility system by integrating a power drill drivetrain with a standard bicycle frame.",
    tech: [
      "Mechanical Design",
      "Power Systems",
      "Prototyping",
      "Team Collaboration",
    ],
    features: [
      "Custom mounting system for drill attachment",
      "Power transfer mechanism design",
      "Control interface development",
      "Safety features and testing",
    ],
    detailedDescription: [
      "This project involved designing and building a functional bicycle powered by a standard power drill. The challenge was to create a reliable power transfer system that could convert the drill's rotational motion into effective propulsion.",
      "Working collaboratively with a team, we designed custom mounting brackets, developed the drivetrain interface, and implemented control systems to manage speed and power delivery. The project required extensive prototyping and testing to ensure safety and functionality.",
      "The final prototype successfully demonstrated the concept and provided valuable insights into mechanical system integration and creative problem-solving in engineering.",
    ],
    challenges: [
      {
        challenge: "Power Transfer Efficiency",
        solution:
          "Designed a custom coupling system with adjustable tension to optimize power delivery from the drill to the wheel.",
      },
      {
        challenge: "Structural Integrity",
        solution:
          "Reinforced the frame mounting points and conducted stress analysis to ensure safe operation under load.",
      },
    ],
    gallery: [
      "/images/bike/IMG_9742.JPG",
      "/images/bike/IMG_9766_edited.jpg",
      "none",
    ],
    link: "none",
  },
  {
    id: 2,
    title: "Doggy Door Lock",
    category: "Engineering",
    image: "/images/lock/door-lock.jpg",
    description:
      "Created an automated locking system for pet doors with smart control features.",
    tech: ["Arduino", "Servo Motors", "Mobile App", "IoT"],
    features: [
      "Automated lock/unlock mechanism",
      "Remote control via smartphone",
      "Schedule-based operation",
      "Safety sensors",
    ],
    detailedDescription: [
      "Developed a smart locking mechanism for doggy doors that allows pet owners to control access remotely and set schedules for when their pets can go in and out.",
      "The system uses servo motors controlled by an Arduino microcontroller, with connectivity features that enable control through a mobile application.",
    ],
    challenges: [
      {
        challenge: "Reliability",
        solution:
          "Implemented redundant sensors and fail-safe mechanisms to ensure the door never locks when a pet is in the doorway.",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/doggy-door",
  },
  {
    id: 3,
    title: "Transformer Game",
    category: "Software",
    image: "/images/transformers/transformer-game.png",
    description:
      "Interactive game utilizing transformer models for dynamic gameplay.",
    tech: ["Python", "PyTorch", "Game Development", "AI/ML"],
    features: [
      "AI-driven game mechanics",
      "Real-time decision making",
      "Adaptive difficulty",
      "Engaging user interface",
    ],
    detailedDescription: [
      "Created an innovative game that leverages transformer neural networks to create dynamic and adaptive gameplay experiences.",
      "The AI system learns from player behavior and adjusts challenges accordingly, providing a unique experience for each player.",
    ],
    gallery: [
      "/images/transformers/Screenshot 2024-09-11 at 3.55.20 PM.png",
      "/images/transformer-game.png",
    ],
    link: "https://github.com/yourusername/transformer-game",
  },
  {
    id: 4,
    title: "Gaming Steering Wheel",
    category: "Hardware",
    image: "/images/wheel/gaming-wheel.jpg",
    description:
      "Custom-built force feedback steering wheel for racing simulators.",
    tech: ["Arduino", "Force Feedback", "3D Printing", "C++"],
    features: [
      "Force feedback system",
      "Customizable button layout",
      "High-precision sensors",
      "Compatible with major racing games",
    ],
    detailedDescription: [
      "Designed and fabricated a custom gaming steering wheel with force feedback capabilities for an immersive racing simulation experience.",
      "The project involved 3D printing custom parts, integrating sensors and motors, and programming the control system for realistic force feedback.",
    ],
    gallery: [
      "/images/wheel/IMG_5502.jpg",
      "/images/wheel/IMG_5698.jpg",
      "/images/wheel/IMG_5745.jpg",
      "/images/wheel/IMG_5774.jpg",
      "/images/wheel/IMG_5775.jpg",
      "/images/wheel/IMG_5782.jpg",
      "/images/wheel/IMG_5792.jpg",
      "/images/wheel/IMG_5794_edited.jpg",
      "/images/wheel/IMG_5795.jpg",
      "/images/wheel/IMG_5492_edited_edited.jpg",
    ],
    link: "https://github.com/yourusername/gaming-wheel",
  },
  {
    id: 5,
    title: "Adaptive Fishing Robot",
    category: "Robotics",
    image: "/images/fishing/adaptive-fishing.png",
    description:
      "Robotic system designed to assist individuals with spinal cord injuries in fishing activities.",
    tech: ["ROS", "Computer Vision", "Kinematics", "Assistive Technology"],
    features: [
      "Autonomous casting mechanism",
      "Adaptive control interface",
      "Real-time motion tracking",
      "Safety systems",
    ],
    detailedDescription: [
      "Developed an assistive robotic system that enables individuals with limited mobility to enjoy fishing independently.",
      "The robot features automated casting, retrieval mechanisms, and an intuitive control interface designed specifically for users with spinal cord injuries.",
      "This project combines mechanical engineering, robotics, and human-centered design to create a meaningful assistive technology solution.",
    ],
    challenges: [
      {
        challenge: "User Interface Design",
        solution:
          "Conducted extensive user testing with individuals with spinal cord injuries to develop an accessible and intuitive control system.",
      },
      {
        challenge: "Environmental Adaptability",
        solution:
          "Implemented robust control algorithms that adapt to different fishing conditions and environments.",
      },
    ],
    gallery: [
      "/images/fishing/AFD_ExpoPoster.jpg",
      "/images/fishing/Capture_edited.jpg",
      "/images/fishing/Capture.JPG",
    ],
    link: "https://github.com/yourusername/adaptive-fishing",
  },
  {
    id: 6,
    title: "Magnet Table",
    category: "Software",
    image: "/images/magnets/magnet-table.jpg",
    description:
      "Interactive table system using magnets for remote collaborative board games.",
    tech: [
      "Robotics",
      "Control Systems",
      "Mechanical Design",
      "Embedded Systems",
    ],
    features: [
      "Magnetic piece manipulation",
      "Remote synchronization",
      "Multi-player support",
      "Custom game piece detection",
    ],
    detailedDescription: [
      "Developed a magnet-based system for creating board games that can be played remotely, allowing players in different locations to interact with the same physical game board.",
      "The system uses motorized magnets beneath the table surface to move game pieces, with sensors detecting piece positions and transmitting data to remote players.",
      "Designed and built a Scotch Yoke mechanism to raise and lower magnets for grabbing and moving game pieces precisely.",
    ],
    challenges: [
      {
        challenge: "Precise Positioning",
        solution:
          "Implemented closed-loop control with position feedback to ensure accurate magnet positioning and piece manipulation.",
      },
    ],
    gallery: ["/images/magnet-table.jpg", "/images/magnet-table.jpg"],
    link: "https://github.com/yourusername/magnet-table",
  },
  {
    id: 7,
    title: "Bohnanza Video Game",
    category: "Software",
    image: "/images/bohnanza/IMG_3897.jpg",
    description:
      "A digital recreation of the classic card game Bohnanza, reimagined for the web. Players trade, plant, and harvest virtual bean cards to compete for the most profitable farm. The game faithfully replicates the original’s trading mechanics and turn-based strategy while introducing a sleek, modern interface and smooth online multiplayer support.",
    tech: ["React", "Node.js", "Socket.io"],
    features: [
      "Animated card dealing, planting, and harvesting sequences",
      "Strategic trading system mirroring the tabletop version",
      "Real-time multiplayer with lobby and matchmaking",
      "Responsive design for both desktop and mobile players",
    ],
    detailedDescription: [
      "Bohnanza: Digital Harvest is a modern web adaptation of the classic card game Bohnanza, transforming its fast-paced trading and bean-farming strategy into an interactive online experience. Players can join matches, plant and harvest beans, and negotiate trades with others in real time through an intuitive and animated interface. Built with React, Node.js, and Socket.io, the game delivers seamless multiplayer gameplay and responsive performance across devices. A modular architecture separates game logic from the UI, allowing for smooth animations, clear visual feedback, and future scalability. The design preserves the charm and strategic depth of the original tabletop game while offering a sleek, accessible digital environment for both casual and competitive players.",
    ],
    challenges: [
      {
        challenge: "Replicating Bohnanza’s real-time trading phase",
        solution:
          "Implemented a synchronized event system using Socket.io, where all player interactions were managed through a central server queue. Each action (offer, accept, cancel) was timestamped and validated before updating the shared game state. This ensured fairness, prevented race conditions, and kept all clients visually in sync during hectic trading moments.",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/magnet-table",
  },
];
