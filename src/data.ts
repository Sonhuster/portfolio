import { BlogPost, Achievement, ResearchProject, Experiment, Memory, PhilosophyItem, EducationItem } from "./types";

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  advisor?: string;
  tasks: string[];
  projects?: {
    name: string;
    description: string;
  }[];
}

export const profileData = {
  name: "Van-Son Dinh",
  title: "MSc Student in Applied Mechanics",
  institution: "National Taiwan University (NTU)",
  department: "Institute of Applied Mechanics",
  email: "sondv.hust@gmail.com",
  location: "Dien Chau, Nghe An, Vietnam",
  avatarUrl: "https://drive.google.com/file/d/1eUV8sm47mwtZpNWT-b_xbwLaIod9mk-R/view?usp=sharing",
  bio: "Math, Computing Engineering, Programming, Games, and Minimalist",
  interests: [
    "Numerical Methods & CFD",
    "Applied Mathematics & Modeling",
    "Fluid & Structural Mechanics",
    "Physics-Informed Machine Learning",
    "Parallel Computing (OpenMPI)"
  ]
};

export const achievements: Achievement[] = [
  {
    year: "2024",
    title: "KAIST Scholarship (Full Scholarship)",
    organization: "Korea Advanced Institute of Science and Technology",
    description: "Full scholarship awarded for the Master's program at the Korea Advanced Institute of Science and Technology."
  },
  {
    year: "2023",
    title: "Vallet Scholarship 2023",
    organization: "Vietnam Education & Science Foundation",
    description: "Prestigious scholarship awarded to outstanding Vietnamese students with exceptional academic and research performances (Rencontres du Vietnam)."
  },
  {
    year: "2023",
    title: "Outstanding Graduate Thesis (Rank 1st Class)",
    organization: "Hanoi University of Science and Technology",
    description: "Graduated as the Valedictorian of the Aerospace Engineering class. Thesis project scored 9.45/10, ranking 1st in the Aerospace discipline."
  },
  {
    year: "2019 - 2021",
    title: "Scholarships for Excellent Students of HUST",
    organization: "Hanoi University of Science and Technology",
    description: "Consecutively awarded academic excellence awards: Scholarship Type B (S2-2019), Type B (S2-2020), Type A (S1-2021), and Type A (S2-2021)."
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    id: "p1",
    title: "Math is the Absolute Language",
    vietnameseTitle: "Math is the Absolute Language",
    quote: "The book of nature is written in the language of mathematics.",
    author: "Galileo Galilei",
    content: "Every mechanical phenomenon, whether it is the drag force on an aircraft wing or the turbulent flow inside a compressor turbine, can be beautifully conceptualized through the Navier-Stokes partial differential equations. Discovering the convergence of a numerical algorithm is the simple daily joy of a computational engineer."
  },
  {
    id: "p2",
    title: "Grounded in Rigor, Driven by Performance",
    vietnameseTitle: "Grounded in Rigor, Driven by Performance",
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    content: "Computational mechanics demands flawless precision. A minor array overflow or grid layout error can completely collapse a multi-million element CFD simulation model after a week of parallel computing on high-performance supercomputing clusters."
  },
  {
    id: "p3",
    title: "Computation Belongs to Reality",
    vietnameseTitle: "Computation Belongs to Reality",
    quote: "Essentially, all models are wrong, but some are useful.",
    author: "George E. P. Box",
    content: "Analytical models, particle simulations, Large Eddy Simulations (LES), or Gaussian Process Regression (GPR) are not just dry lines of code on a terminal screen. They prove their ultimate worth when delivering real-world thermal cooling solutions for electric ducted fans (EDF) or providing real-time diagnostics to optimize the operations of massive industrial chemical reactors."
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "proj1",
    title: "Numerical investigation of an Electric Motor Cooling ability through the Centre Body of an Electric Ducted Fan",
    subtitle: "Outstanding Graduate Thesis (Valedictorian of Aerospace Engineering, HUST)",
    abstract: "A detailed numerical investigation on the thermal dissipation performance of an electric motor integrated inside the hub structure of an axial ducted fan. Developed active flow control techniques to enhance convective heat transfer coefficients under heavy-load conditions, protecting motor coils and improving aerodynamic efficiency.",
    methodology: [
      "Constructed highly refined 3D structured meshes to satisfy conjugate heat transfer (CHT) requirements.",
      "Conducted extensive Navier-Stokes numerical simulations using an advanced CFD solver.",
      "Performed validation and verification of numerical results against experimental data at the Propulsion Systems Lab."
    ],
    keyFindings: [
      "Optimized the aerodynamic hub geometry, increasing the convective heat dissipation coefficient by 18.5%.",
      "Minimized localized separation vortices behind the trailing edge of the motor pod.",
      "Published a peer-reviewed research paper in the IOP Journal of Physics: Conference Series."
    ],
    status: "Completed",
    publication: {
      journal: "Journal of Physics: Conference Series (Institute of Physics)",
      doi: "10.1088/1742-6596/2707/1/012103",
      authors: "Dinh, V.S., Chu, H.Q., ... Dinh, C.T."
    }
  },
  {
    id: "proj2",
    title: "Numerical study on aerodynamic characteristics of the grid fins with different grid patterns",
    subtitle: "Collaborative research on high-efficiency aerodynamic Grid Fins structures",
    abstract: "An investigation and comparison of lift, drag, and trailing vortices of honeycomb-like control mechanisms (Grid Fins) in subsonic and supersonic flow regimes. Evaluated the aerodynamic optimization potential of diamond-patterned cells compared to traditional square cells.",
    methodology: [
      "Configured a CFD meshing domain with extremely small boundary layer spacing (y+ < 1).",
      "Performed high-performance parallel computing across large angles of attack from 0 to 15 degrees.",
      "Utilized Q-criterion vortex detection techniques to visualize 3D separation flows."
    ],
    keyFindings: [
      "Identified critical variations in aerodynamic pitching moment and stability among different diamond cell designs.",
      "Successfully co-authored and published a Q1 research article in Physics of Fluids.",
      "Contributed valuable design data for the engineering of smart self-guiding aerodynamic mechanisms."
    ],
    status: "Completed",
    publication: {
      journal: "Physics of Fluids (AIP Publishing, Q1 Journal)",
      doi: "10.1063/5.0176292",
      authors: "Dinh, V.S., Dinh, C.T., Pham, V.S."
    }
  },
  {
    id: "proj3",
    title: "Code-based Helicopter Flow Simulation & Numerical Schemes",
    subtitle: "Major Research Project at KAIST (South Korea)",
    abstract: "Research and development of specialized high-fidelity solvers for helicopter aerodynamics. Focused on improving advective schemes such as AUSM and MUSCL for solving Euler/Navier-Stokes equations on Cartesian grids, and optimizing advection slope limiters like Van Albada to suppress non-physical oscillations near high-gradient shear layers.",
    methodology: [
      "Researched Riemann solvers and finite-volume turbulence models.",
      "Programmed parallelized domain-decomposition solvers using OpenMPI for multiblock overset grid systems.",
      "Implemented Spalart-Allmaras turbulence models to capture rotating rotor blade interactions."
    ],
    keyFindings: [
      "Improved the predictive accuracy of the tip pressure field during forward helicopter translation.",
      "Optimized vortex separation prediction boundaries, enhancing aerodynamic rotor wake fidelity by 12%."
    ],
    status: "Completed"
  }
];

export const experiments: Experiment[] = [
  {
    id: "exp1",
    title: "Aerodynamic Simulation (2D Airfoil CFD Solver)",
    category: "Dry Lab",
    equipment: ["Web Browser", "Euler Equation Solver Model", "TypeScript Canvas Engine"],
    objective: "Real-time dynamic simulation of pressure distribution and streamlines around a NACA 0012 airfoil at various angles of attack to observe flow separation and stall.",
    steps: [
      { number: 1, title: "Initialize Parameters", description: "Configure the freestream velocity and Angle of Attack (AoA) for the aerodynamic airfoil configuration." },
      { number: 2, title: "Solve Euler Equations", description: "Execute the interactive Laplace/vorticity panel solver to approximate inviscid velocity fields around the airfoil contour." },
      { number: 3, title: "Deconstruct Core Pressure", description: "Extract coefficients of pressure (Cp) along suction and pressure surfaces of the chord using Bernoulli's equation." },
      { number: 4, title: "Visualize Interfacial Streamlines", description: "Render dynamic, color-mapped streamlines in real time. Increase the angle of attack beyond stall thresholds to witness trailing edge separation." }
    ],
    simulationType: "sequence-alignment"
  },
  {
    id: "exp2",
    title: "Structural Cantilever Integrity (Cantilever Beam FEA Sim)",
    category: "Dry Lab",
    equipment: ["Finite Element Solver Tool", "Stiffness Matrix Linear Solver", "Deformation Plotting Engine"],
    objective: "Determine Von-Mises stress profiles and physical deflection of a 1D cantilever block under localized tip loading for structural stability assessment.",
    steps: [
      { number: 1, title: "Declare Material Properties", description: "Input Young's Modulus (E), Poisson's ratio, and geometrical cross-section variables of the cantilever model." },
      { number: 2, title: "Finite Element Meshing", description: "Discretize the beam structure into 1D Euler-Bernoulli element blocks connected of node layouts." },
      { number: 3, title: "Global Stiffness Matrix Assemblies", description: "Formulate physical boundary constraints (clamp fixed end at deflection = 0) and establish pointwise loading on the free end." },
      { number: 4, title: "Solve Linear Algebra & Plot Outputs", description: "Solve the linear equation system K * U = F to find joint displacements, yielding stress concentrations and bending moment graphs." }
    ],
    simulationType: "electrophoresis"
  }
];

export const memories: Memory[] = [
  {
    id: "m1",
    title: "A magnificent autumn evening beside KAIST lake",
    date: "September 14, 2024",
    description: "Never forgetting those cool, refreshing evenings in Daejeon. After heavy learning and coding sessions at the Aerial Innovative Mobility Lab, we gathered around KAIST's iconic swan-filled lake, diving into deep discussions about the convergence of helicopter aerodynamic solvers.",
    category: "Lab Fun",
    iconName: "Compass",
    location: "KAIST Campus, Daejeon, South Korea"
  },
  {
    id: "m2",
    title: "The cluttered coding desk at HUST Propulsion Lab",
    date: "November 10, 2023",
    description: "A desk covered with turbine aerodynamics research papers and a scratched-up laptop where I wrote my very first block of grid generation code for my Electric Ducted Fan thermal study.",
    category: "Academic",
    iconName: "ThermometerCheck",
    location: "Propulsion Systems Lab, HUST, Hanoi"
  },
  {
    id: "m3",
    title: "A long flight to Taipei following new aspirations",
    date: "February 15, 2026",
    description: "Luggage neatly packed, carrying high hopes of plunging deeper into physical mechanics and applied machine learning at the prestigious Institute of Applied Mechanics, National Taiwan University (NTU). A promising new chapter begins.",
    category: "Field Trip",
    iconName: "Presentation",
    location: "National Taiwan University, Taipei"
  },
  {
    id: "m4",
    title: "Full-throttle software engineering at Akselos Saigon",
    date: "March 25, 2025",
    description: "Highly energetic work sessions alongside brilliant engineers at Akselos Saigon, examining advanced Gaussian Process Regression (GPR) models to power high-fidelity real-time monitoring of complex industrial chemical reactors.",
    category: "Daily Life",
    iconName: "Coffee",
    location: "Akselos Office, Dist. 1, Ho Chi Minh City"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog1",
    title: "From a HUST Aerospace Engineer to Master's at KAIST & NTU: Learning to Embrace Academic Variance",
    date: "April 12, 2026",
    category: "Reflection",
    readTime: "8 min read",
    summary: "An honest, down-to-earth reflection on pursuing education across leading Asian academic environments, adapting swiftly under intense course workloads, and focusing on practical mechanical research paths.",
    content: [
      "Stepping into KAIST and later continuing at NTU Taiwan, I was exposed to an incredibly intense and rapid academic pace. In contrast to standard curricula revolving around pre-formulated textbook answers, these elite centers expect you to construct unique hypotheses, perform strict benchmarking comparisons, and demonstrate rigorous mathematical proofs.",
      "The solid foundational mechanics gained during sleepless nights analyzing turbomachinery flows at the HUST Propulsion Systems Lab became my greatest leverage. To all fellow researchers: never hesitate to venture outside your comfort zone and witness firsthand how global academic excellence operates."
    ],
    tags: ["MastersJourney", "AerospaceEngineering", "KAIST", "NTU", "HUST"]
  },
  {
    id: "blog2",
    title: "Gaussian Process Regression (GPR) in Real-Time Physical Simulations",
    date: "May 22, 2026",
    category: "Academic",
    readTime: "6 min read",
    summary: "Why is machine learning about far more than just computer vision or dog/cat classification? Discover the elite applications of GPR in formulating surrogate structures for complex thermo-mechanical behaviors.",
    content: [
      "In heavy industries, analyzing chemical reacting flows or structural stresses using traditional Finite Element Methods (FEM/FEA) requires hours or even days to get high-accuracy solutions. For predictive maintenance and real-time operations monitoring, we demand instantaneous computational feedback.",
      "Gaussian Process Regression (GPR) emerges as an exceptional surrogate approach. It delivers highly accurate predictions alongside rigorous scientific uncertainty quantification, taking digital twin industrial engineering to a new frontier."
    ],
    tags: ["MachineLearning", "GaussianProcess", "Akselos", "NumericalAnalysis"]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Applied Mechanics (MSc)",
    institution: "National Taiwan University (NTU)",
    department: "Institute of Applied Mechanics",
    period: "2026 - Now (Expected 2028)",
    details: ["Thesis topic: LES + Particle Solver + Machine Learning."],
    isCurrent: true,
    type: "current"
  },
  {
    degree: "Aerospace Engineering (MSc - Dropped)",
    institution: "KAIST (Korea Advanced Institute of Science and Technology)",
    department: "Department of Aerospace Engineering",
    period: "Feb 2024 - Oct 2024",
    details: [
      "Thesis topic: Turbulence modeling, high-fidelity advective schemes in Actuator Line Methods for Helicopter flow.",
      "GPA: 3.58/4.3 (first semester)"
    ],
    isCurrent: false,
    type: "discontinued"
  },
  {
    degree: "Aerospace Engineering (BSc)",
    institution: "Hanoi University of Science and Technology (HUST)",
    department: "School of Transportation Engineering",
    period: "Aug 2019 - Aug 2023",
    details: [
      "Thesis topic: 'Numerical investigation of an Electric Motor Cooling ability through the Centre Body of an Electric Ducted Fan' (Grade: 9.45/10)",
      "GPA: 3.53/4 (Ranked 1st in class)"
    ],
    isCurrent: false,
    type: "completed"
  }
];

export const workExperiences: ExperienceItem[] = [
  {
    role: "Junior Developer Engineer",
    organization: "AKSELOS",
    location: "Ho Chi Minh City, Vietnam",
    period: "Dec 2024 – Jan 2026",
    tasks: [
      "Working on reduced combustion & heat transfer model for Real-Time Monitoring of Steam Methane Reforming System.",
      "Applied Gaussian Process Regression (GPR), Genetic, and Gradient-free algorithms on black-box optimization problems.",
      "Research on thermodynamic models and properties of gas mixtures."
    ],
    projects: [
      {
        name: "Real-Time SMR System Monitoring",
        description: "Applying machine learning-based (GPR) and optimization-based model for parameters optimization of kinetic reaction model."
      },
      {
        name: "Personal Unstructured Mesh Solver Project",
        description: "Developed 2D unstructured mesh FVM solver for incompressible flow (SIMPLE) and compressible flow (Riemann solver – ROE, AUSM)."
      }
    ]
  },
  {
    role: "Graduate Researcher",
    organization: "KAIST (Aerial Innovative Mobility Lab)",
    location: "Daejeon, South Korea",
    period: "Feb 2024 – Sep 2024",
    advisor: "Assoc. Prof. Sang-Bong LEE",
    tasks: [
      "Developed convective and high-fidelity spatial limiter schemes in C language for compressible flow code.",
      "Implemented explicit Spalart-Allmaras turbulent model for helicopter research projects.",
      "Parallelized Cartesian solver using MPI for high-computing simulation."
    ]
  },
  {
    role: "Student Lab Leader",
    organization: "HUST (Propulsion Systems Lab)",
    location: "Hanoi, Vietnam",
    period: "Sep 2022 – Dec 2023",
    advisor: "Ph. D Cong-Truong DINH",
    tasks: [
      "Organized FUN LAB activities :)",
      "Specialized in multiblock hexa mesh generator for turbomachinery using NUMECA and ANSYS software.",
      "Conducted research on tip and secondary vortices in rotating flow to enhance system performance and heat transfer capabilities.",
      "Synthesize and translate documents of Aircraft Propeller."
    ]
  },
  {
    role: "Undergraduate Researcher",
    organization: "HUST (Computational Engineering Group)",
    location: "Hanoi, Vietnam",
    period: "June 2021 – Sep 2022",
    advisor: "Assoc. Prof. Van-Sang PHAM",
    tasks: [
      "Start exploring numerical simulation & fluid mechanics.",
      "Conducted research on numerical simulation for missile control wing optimization in three flow stages.",
      "Project: Design & Simulation of an Underwater Ultrasonic Transducer (UUT): Building a piezoelectric model and running FEM simulations for vibration and acoustic analysis."
    ]
  },
  {
    role: "Academic Teaching Assistant & Buddy Student",
    organization: "HUST",
    location: "Hanoi, Vietnam",
    period: "Sep 2022 – Apr 2023",
    tasks: [
      "Assisting in teaching and synthesizing learning materials for the course 'Aircraft Propellers'.",
      "Buddy student, supported an exchange student from Niigata University, Japan in completing a thesis on Electric Vertical Take-off and Landing (eVTOL)"
    ]
  }
];
