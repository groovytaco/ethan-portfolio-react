export const projectsData = [
  {
    id: 1,
    title: "Adaptive Fishing Robot",
    category: "Robotics",
    image: "/images/fishing/expo.png",
    description:
      "Robotic system designed to assist individuals with spinal cord injuries in fishing activities.",
    tech: ["Electrical Design", "Kinematics", "Assistive Technology", "Prototyping"],
    features: [
      "Autonomous casting mechanism with adjustable distance",
      "Automated reeling system with variable speed control",
      "User-friendly control interface tailored for limited mobility",
      "Hands-free sip-and-puff operation",
      "Safety stop systems",
    ],
    detailedDescription: [
      "My senior design team was commissioned by Quality of Life Plus and the River Deep Foundation to develop an adaptive \
       fishing device for individuals with limited upper arm mobility or severe spinal cord injuries. The goal was to enable \
       people with disabilities to enjoy the therapeutic benefits of fishing and reclaim a sense of independence. The robot \
       features automated casting and reeling mechanisms as well as an intuitive control interface designed specifically for \
       users with spinal cord injuries. This project combines mechanical engineering, robotics, and human-centered design to \
       create a meaningful assistive technology solution."
    ],
    contributions: [
      "Created simplified model of casting kinematics to calculate the neccesary spring constant our torsional springs would \
       need to reach the max casting distance set by the client of 50ft",
      "Sourced all electrical components including DC and stepper motors needed to meet performance requirments",
      "Developed circuitry to control all electrical components and designed a custom PCB to make circuitry compact enough \
       to fit into waterproof housings",
    ],
    challenges: [
      {
        challenge: "User Interface Design",
        solution:
          "The client needed a UI that was easy to use, offered full control over casting and reeling, and worked \
           for users with limited upper arm mobility. I spoke with patients and caregivers during a River Deep fishing outing to \
           understand their needs and what worked in other assistive devices. Using their feedback, I designed two controllers: \
           one with a joystick and one with dual sip-and-puff tubes to control casting distance and reeling speed."       
      },
      {
        challenge: "Handling Generated Current",
        solution: "Our casting system uses a stepper motor to wind a torsional spring connected to the rod. Initially, we cut power \
         to release the rod, but the spring's rotation fed a large current back into the circuitry. To prevent this, I added a relay \
         to each motor coil to electrically isolate the motor from our circuitry and eliminating electrical braking."
      },
      {
        challenge: "Line Release Timing",
        solution:
          "Achieving consistent casting distances required precise timing of line release. I designed experiments to determine \
           the exact release timings our solenoid needed for the various casting distances supported by our device.",
      },
      {
        challenge: "Reeling Speeds",
        solution:
          "I implemented a feedback loop using the reeling motor's encoder to adjust power and maintain consistent reeling speeds.",
      }
    ],
    gallery: [
      "/images/fishing/expo.png",
      "/images/fishing/expoPoster.jpg",
      "/images/fishing/UI.png",
      "/images/fishing/subassemblies.png",
      "/images/fishing/casting.png",
      "/images/fishing/reeling.png",
      "/images/fishing/deviceByLake.png",
      "/images/fishing/electricalDiagram.png",
      "/images/fishing/pcb.png",
    ],
    link: "https://github.com/etsa2103/Assisted-Fishing-Device",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 2,
    title: "Resperation Rate Tracker",
    category: "Robotics",
    image: "/images/RRTracker/RR_tracker_outside.png",
    description:
      "Contact free thermal respiration rate tracker using computer vision and machine learning.",
    tech: ["ROS", "Computer Vision", "Machine Learning", "Signal Processing"],
    features: [
      
      "Resperation Rate Estimation",
      "Real-time facial tracking on thermal images",
      "Signal stability tracking",
      "Signal filtering",
    ],
    detailedDescription: [
      "First sentence.",
      "Second sentence.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/project-name",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 3,
    title: "Robo Racer (In Progress)",
    category: "Robotics",
    image: "/images/RoboRacer/RoboRacerCar.png",
    description:
      "Fill in",
    tech: ["ROS2", "Computer Vision", "Autonomy", "Machine Learning"],
    features: [
      
    ],
    detailedDescription: [
      "First sentence.",
      "Second sentence.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/project-name",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 4,
    title: "Magnet Table",
    category: "Robotics",
    image: "/images/magnets/magnet-table.jpg",
    description:
      "Interactive magnet-based system for remote collaborative board games.",
    tech: [
      "Prototyping",
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
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/project-name",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 5,
    title: "Drill Powered Bike",
    category: "Hardware",
    image: "/images/bike/drill-bike.jpg",
    description:
      "Engineered an innovative hybrid mobility system by integrating a power drill drivetrain with a standard bicycle frame.",
    tech: [
      "Mechanical Design",
      "Machining",
      "Drive Systems",
      "Finite Element Analysis",
      "Prototyping",
      "Team Collaboration",
    ],
    features: [
      "Feature 1",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/project-name",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 6,
    title: "Gaming Steering Wheel",
    category: "Hardware",
    image: "/images/wheel/gaming-wheel.jpg",
    description:
      "Custom-built steering wheel for racing simulators that is compatible with xbox controllers.",
    tech: ["Prototyping", "Asthetic focused design", "3D Printing", "woodworking"],
    features: [
      "Feature 1",
    ],
    detailedDescription: [
      "Designed and fabricated a custom gaming steering wheel with force feedback capabilities for an immersive racing simulation experience.",
      "The project involved 3D printing custom parts, integrating sensors and motors, and programming the control system for realistic force feedback.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
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
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 10,
    title: "Semantic Scene Graph Generation",
    category: "AI/ML",
    image: "/images/SceneGraph/sim.png",
    description:
      "Created a machine learning pipeline to generate 3D semantic scene graphs from rgbD images.",
    tech: ["Segmentation", "LLM", "Machine Learning", "Computer Vision"],
    features: [
      "Feature 1",
    ],
    detailedDescription: [
      "First sentence.",
      "Second sentence.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/project-name",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 7,
    title: "Bohnanza Video Game (In Progress)",
    category: "Software",
    image: "/images/bohnanza/IMG_3897.jpg",
    description: [
      "A digital recreation of the classic card game Bohnanza, reimagined for the web."
    ],
    tech: ["Python", "React", "Node.js", "Socket.io"],
    features: [
      "Animated card dealing, planting, and harvesting sequences",
      "Strategic trading system mirroring the tabletop version",
      "Real-time multiplayer with lobby and matchmaking",
      "Responsive design for both desktop and mobile players",
    ],
    detailedDescription: [
      "Bohnanza: Digital Harvest is a modern web adaptation of the classic card game Bohnanza, transforming its fast-paced trading and bean-farming strategy into an interactive online experience.",
      "Players can join matches, plant and harvest beans, and negotiate trades with others in real time through an intuitive and animated interface.",
      "Built with React, Node.js, and Socket.io, the game delivers seamless multiplayer gameplay and responsive performance across devices.",
      "A modular architecture separates game logic from the UI, allowing for smooth animations, clear visual feedback, and future scalability.",
      "The design preserves the charm and strategic depth of the original tabletop game while offering a sleek, accessible digital environment for both casual and competitive players.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1",
      },
    ],
    gallery: [],
    link: "https://github.com/yourusername/magnet-table",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 8,
    title: "Transformer Game (In Progress)",
    category: "Software",
    image: "/images/transformers/transformer-game.png",
    description:
      "Personal video game project based on the transformer series where two teams of 5 battle to destroy the opposing team's base.",
    tech: ["UE4", "Blender", "Game Development"],
    features: [
      "Custom transformer animation and game mechanics",
      "Feature 2",
    ],
    detailedDescription: [
      "Sentnce 1.",
    ],
    challenges: [
      {
        challenge: "Challenge 1",
        solution:
          "Solution 1.",
      },
    ],
    gallery: [
      "/images/transformers/Screenshot 2024-09-11 at 3.55.20 PM.png",
      "/images/transformer-game.png",
    ],
    link: "https://github.com/yourusername/transformer-game",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 9,
    title: "Doggy Door Lock",
    category: "Engineering",
    image: "/images/lock/door-lock.jpg",
    description:
      "Created an automated locking system for pet doors with smart control features.",
    tech: ["Arduino", "Prototyping", "Design", "IoT"],
    features: [
      "Automated lock/unlock mechanism",
      "Rain detection",
    ],
    detailedDescription: [
      "For an intro engineering projects course I was on a team tasked with creating a device to help correct a negative pet \
       behavior. Our solution was an automated doggy door lock that sensed when the ground was wet from rain and locked the \
       doggy door from the outside to stop your dog from going out and tracking in mud.",
    ],
    challenges: [
      {
        challenge: "Communication from Sensor to Lock",
        solution:
          "When the moisture sensor detected the ground was wet it needed to communicate with the lock to shut. I helped \
          develop the circuitry and code to use NRF Transcievers for wireless communication.",
      },
      {
        challenge: "Actuating Lock",
        solution:
          "I modeled a rack and pinion mechanism inside our device to raise and lower the lock when we actuated our servo.",
      },
    ],
    gallery: [],
  }];