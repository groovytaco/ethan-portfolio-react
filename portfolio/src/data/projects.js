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
         to release the rod, but the spring's rotation fed a large current back into the circuitry. To prevent this, I added a \
         relay to each motor coil to electrically isolate the motor from our circuitry and eliminating electrical braking."
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
    title: "Respiration Rate Tracker",
    category: "Robotics",
    image: "/images/RRTracker/RR_tracker_outside.png",
    description:
      "A contact-free system for estimating human respiration rate using thermal imaging on mobile robotic platforms.",
    tech: ["ROS", "Computer Vision", "Signal Processing", "Thermal Imaging"],
    features: [
      "Contact-free respiration rate estimation",
      "Real-time facial and nostril region tracking in thermal imagery",
      "Robust signal extraction under subject motion",
      "Peak-based breathing rate estimation"
    ],
    detailedDescription: [
      "This project implements a contact-free respiration rate tracker using LWIR thermal imagery. Breathing is measured indirectly \
      by capturing subtle temperature changes around the nostrils caused by warm exhaled air.",

      "Facial tracking is used to maintain a consistent nostril region of interest as the subject moves. The extracted thermal \
      intensity signal is processed using temporal filtering and peak detection to isolate breathing-related oscillations while \
      suppressing noise from head motion, ambient temperature variation, and sensor drift. The system runs in real time and has \
      been deployed on a mobile robotic platform in outdoor and low-light environments."
    ],

    challenges: [
      {
        challenge: "Separating respiration signals from thermal drift and noise",
        solution:
          "To address slow thermal drift and transient noise, I applied band-limited temporal filtering tuned to expected human \
          breathing frequencies and used peak consistency checks to reject spurious extrema. Frames with unstable regions of \
          interest caused by head motion or tracking loss were excluded from estimation, improving the stability of the \
          respiration rate output."
      }
    ],
    gallery: [],
    link: "https://arxiv.org/abs/2512.08754"
  },
  // ================================================================
  // ================================================================
  // ================================================================
  // {
  //   id: 3,
  //   title: "Robo Racer (In Progress)",
  //   category: "Robotics",
  //   image: "/images/RoboRacer/RoboRacerCar.png",
  //   description:
  //     "Fill in",
  //   tech: ["ROS2", "Computer Vision", "Autonomy", "Machine Learning"],
  //   features: [
      
  //   ],
  //   detailedDescription: [
  //     "First sentence.",
  //     "Second sentence.",
  //   ],
  //   challenges: [
  //     {
  //       challenge: "Challenge 1",
  //       solution:
  //         "Solution 1",
  //     },
  //   ],
  //   gallery: [],
  //   link: "https://github.com/yourusername/project-name",
  // },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 4,
    title: "Magnet Table",
    category: "Robotics",
    image: "/images/magnets/demo.png",
    description:
      "Developed a remote-interactive magnetic game table that uses motorized magnets to move physical game pieces, enabling \
      collaborative gameplay across distances.",
    tech: [
      "Prototyping",
      "Mechanical Design",
      "Embedded Systems",
      "Control Systems",
      "Networking",
      "User Experience Design",
    ],
    features: [
      "Magnetic piece manipulation via hidden actuators",
      "Remote synchronization between interactive tables",
      "Multi-player support for shared game interaction",
      "Custom game piece detection and positioning",
    ],
    detailedDescription: [
      "Designed and built a magnetically actuated tabletop system for playing board games collaboratively across remote locations,\
       enabling users to interact with the same physical game setup from different places. The system uses motorized magnet actuators\
       mounted beneath the table surface to precisely move magnetic game pieces on top of the board. Embedded sensors track piece\
       positions, and data is synchronized over a network so that actions on one table are mirrored on the paired remote table.",
    ],
    contributions: [
      "Led hardware design and integration of actuators.",
      "Designed and fabricated scotch yoke mechanisms for reliable magnet engagement.",
      "Coordinated user testing and iterated on interaction design.",
    ],
    challenges: [
      {
        challenge: "Designing interactive magnetic game pieces",
        solution:
          "I designed and prototyped several interactive game elements, such as a magnetic resource tracker, ensuring they \
           could be reliably manipulated by the table’s magnetic system while remaining intuitive for players.",
      },
      {
        challenge: "Packaging and mounting components on a compact robot",
        solution:
          "I designed mounts to integrate the magnet mechanism and supporting components onto the small Toio robot platform, \
           carefully managing space constraints, alignment, and mechanical stability.",
      },
    ],
    
    gallery: [
      "/images/magnets/tabletopRobots.jpg",
      "/images/magnets/pcb.png",
      "/images/magnets/tabletopRobot.png",
      "/images/magnets/scotchYoke.png",
    ],
    link: "https://github.com/etsa2103/magTable",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  {
    id: 5,
    title: "Drill Powered Bike",
    category: "Hardware",
    image: "/images/bike/teamPhoto.jpg",
    description:
      "Designed and fabricated a drill-powered tricycle capable of pulling heavy loads uphill as part of a component design course.",
    tech: [
      "Mechanical Design",
      "SolidWorks CAD",
      "Stress Analysis",
      "Machining",
      "Drive Systems",
      "Prototyping",
    ],
    features: [
      "Drill-driven drivetrain",
      "Custom welded steel frame",
      "Optimized gear ratio for hill climbing under load",
    ],
    contributions: [
      "Created the CAD model using SolidWorks weldments and created detailed part drawings",
      "Performed stress analysis to inform material selection and frame geometry",
      "Machined and fabricated components using mill, saw, and drill press",
      "Assembled the drivetrain and integrated press-fit bearing mounts",
    ],
    challenges: [
      {
        challenge: "Structural strength under heavy load",
        solution:
          "I performed stress analysis to guide material selection and frame geometry, ensuring the structure could withstand \
           high loads while remaining lightweight and within budget.",
      },
      {
        challenge: "Reliable power transmission from a hand drill",
        solution:
          "I designed and fabricated a custom drivetrain to efficiently transfer torque from the drill to the wheels, \
           optimizing the gear ratio for maximum pulling performance. Our bike ended up hauling 850 lbs uphill",
      },
    ],
    gallery: [
      "/images/bike/frameCAD.jpg",
      "/images/bike/noPaintBike.jpg",
      "/images/bike/paintedBike.jpg",
      "/images/bike/teamPhoto3.jpg",
      "/images/bike/thomasRacing.png",
    ],
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
      "Compatible with xbox one controller",
      "LED underglow",

    ],
    detailedDescription: [
      "In this project, I designed and built a device that attaches to a standard Xbox One controller and converts it into\
       a functional steering wheel for racing simulators. The steering wheel’s rotational input is translated into lateral\
      motion of the controller’s analog stick using a multi-stage gear system, allowing it to work seamlessly with games\
      that rely on traditional controller steering inputs. The gear mechanism and controller interface were housed inside\
      a custom-built wooden enclosure, combining functional durability with a clean, finished appearance.",

      "A major focus of the project was achieving a street-racing aesthetic. The encloser was painted matte black, the wheel \
      eas wrapped in leather, and the whole thing was accented with a metallic center hub and purple LED underglow. The center\
      hub was machined from aluminum to provide strength and visual contrast, while the rest of the wheel was 3D printed."
    ],
    challenges: [
      {
        challenge: "Translating rotational steering input into analog stick motion",
        solution:
          "Designing a reliable way to convert rotational steering input into lateral analog stick movement required several\
          iterations of a multi-stage gear mechanism. I tested different gear ratios and layouts to achieve smooth motion,\
          proper centering, and a steering range that felt natural and responsive in-game."
      },
      {
        challenge: "Balancing aesthetics with structural strength",
        solution:
          "Achieving a strong street-racing aesthetic while maintaining durability required careful material choices. I used\
          a machined aluminum center hub for strength and visual contrast, while 3D printing the wheel allowed rapid iteration\
          of ergonomics and form. The wooden enclosure provided both rigidity and a finished appearance."
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
    link: "https://www.aesdes.org/author/aau2024etsa2103/",
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
      "Developed a pipeline for generating 3D semantic scene graphs from multi-view RGB-D images with support for natural language querying.",
    tech: ["Computer Vision", "Machine Learning", "CLIP", "3D Reconstruction", "LLMs"],
    features: [
      "Multi-view RGB-D 3D object reconstruction",
      "Scene graph representation with object nodes and relationships",
      "Open-vocabulary semantic representation using CLIP",
      "Natural language querying of 3D scenes"
    ],
    detailedDescription: [
      "This project implements an end-to-end pipeline for 3D semantic scene understanding in simulated indoor environments. \
      An agent collects RGB images, depth maps, and camera pose information from multiple viewpoints. Objects are segmented \
      in each frame and projected into 3D space, where observations from different viewpoints are fused to form object-level \
      point cloud representations.",
      "The reconstructed objects are organized into a semantic scene graph, where nodes represent objects with geometric \
      and semantic properties and edges represent spatial and semantic relationships. Semantic information is provided by \
      CLIP embeddings, enabling open-vocabulary object understanding. Relationships between objects are inferred using a \
      large language model, and the resulting scene graph supports natural language queries about object properties and \
      spatial relationships within the scene."
    ],
    contributions: [
      "Implemented multi-view 3D point cloud reconstruction by back-projecting segmented RGB-D data into world coordinates \
      and fusing object observations across viewpoints",
      "Integrated CLIP-based semantic embeddings to represent object-level semantics and enable similarity matching",
      "Designed and implemented the scene graph generation process, including object nodes derived from fused 3D \
      reconstructions",
      "Contributed to overall system integration and evaluation within simulated indoor environments"
    ],
    challenges: [
      {
        challenge: "Extracting meaningful semantic embeddings from partial object views",
        solution:
          "Objects were often observed only partially from individual viewpoints. I integrated CLIP embeddings at the \
          object level to provide consistent semantic representations despite incomplete visual information. Geometric \
          fusion criteria based on 3D centroids and spatial overlap were also developed to merge observations into consistent\
          object-level point cloud reconstructions."
      },
      {
        challenge: "Representing complex 3D scenes in a compact structure",
        solution: "Reconstructed objects were organized into a scene graph representation, enabling structured storage of \
         geometric and semantic information while keeping the overall representation lightweight."
      },
      {
        challenge: "Linking semantic information to 3D geometry",
        solution:
          "I developed a representation that attaches CLIP embeddings directly to reconstructed object point clouds, \
          enabling semantic reasoning over 3D spatial data."
      }
    ],
    gallery: [],
    link: "https://github.com/Meow404/e5460-project",
  },
  // ================================================================
  // ================================================================
  // ================================================================
  // {
  //   id: 7,
  //   title: "Bohnanza Video Game (In Progress)",
  //   category: "Software",
  //   image: "/images/bohnanza/IMG_3897.jpg",
  //   description: [
  //     "A digital recreation of the classic card game Bohnanza, reimagined for the web."
  //   ],
  //   tech: ["Python", "React", "Node.js", "Socket.io"],
  //   features: [
  //     "Animated card dealing, planting, and harvesting sequences",
  //     "Strategic trading system mirroring the tabletop version",
  //     "Real-time multiplayer with lobby and matchmaking",
  //     "Responsive design for both desktop and mobile players",
  //   ],
  //   detailedDescription: [
  //     "Bohnanza: Digital Harvest is a modern web adaptation of the classic card game Bohnanza, transforming its fast-paced trading and bean-farming strategy into an interactive online experience.",
  //     "Players can join matches, plant and harvest beans, and negotiate trades with others in real time through an intuitive and animated interface.",
  //     "Built with React, Node.js, and Socket.io, the game delivers seamless multiplayer gameplay and responsive performance across devices.",
  //     "A modular architecture separates game logic from the UI, allowing for smooth animations, clear visual feedback, and future scalability.",
  //     "The design preserves the charm and strategic depth of the original tabletop game while offering a sleek, accessible digital environment for both casual and competitive players.",
  //   ],
  //   challenges: [
  //     {
  //       challenge: "Challenge 1",
  //       solution:
  //         "Solution 1",
  //     },
  //   ],
  //   gallery: [],
  //   link: "https://github.com/yourusername/magnet-table",
  // },
  // ================================================================
  // ================================================================
  // ================================================================
  // {
  //   id: 8,
  //   title: "Transformer Game (In Progress)",
  //   category: "Software",
  //   image: "/images/transformers/transformer-game.png",
  //   description:
  //     "Personal video game project based on the transformer series where two teams of 5 battle to destroy the opposing team's base.",
  //   tech: ["UE4", "Blender", "Game Development"],
  //   features: [
  //     "Custom transformer animation and game mechanics",
  //     "Feature 2",
  //   ],
  //   detailedDescription: [
  //     "Sentnce 1.",
  //   ],
  //   challenges: [
  //     {
  //       challenge: "Challenge 1",
  //       solution:
  //         "Solution 1.",
  //     },
  //   ],
  //   gallery: [
  //     "/images/transformers/Screenshot 2024-09-11 at 3.55.20 PM.png",
  //     "/images/transformer-game.png",
  //   ],
  //   link: "https://github.com/yourusername/transformer-game",
  // },
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
          "I designed and printed a rack and pinion mechanism inside our device to raise and lower the lock when we actuated our servo.",
      },
    ],
    gallery: [],
  }];