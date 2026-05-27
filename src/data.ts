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
  avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200",
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
    description: "Học bổng toàn phần dành cho chương trình Thạc sĩ tại Viện Khoa học và Công nghệ Tiên tiến Hàn Quốc."
  },
  {
    year: "2023",
    title: "Vallet Scholarship 2023",
    organization: "Vietnam Education & Science Foundation",
    description: "Học bổng danh giá dành cho những sinh viên Việt Nam xuất sắc có thành tích vượt trội trong học tập và nghiên cứu (Rencontres du Vietnam)."
  },
  {
    year: "2023",
    title: "Outstanding Graduate Thesis (Rank 1st Class)",
    organization: "Hanoi University of Science and Technology",
    description: "Nhận bằng tốt nghiệp kỹ sư hàng không xuất sắc. Khóa luận tốt nghiệp đạt điểm số 9.45/10, xếp hạng Thủ khoa toàn lớp Hàng không Vũ trụ."
  },
  {
    year: "2019 - 2021",
    title: "Scholarships for Excellent Students of HUST",
    organization: "Hanoi University of Science and Technology",
    description: "Liên tục đạt học bổng xuất sắc từ trường: Học bổng loại B (S2-2019), loại B (S2-2020), loại A (S1-2021), loại A (S2-2021)."
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    id: "p1",
    title: "Math is the Absolute Language",
    vietnameseTitle: "Toán học là ngôn ngữ tuyệt đối",
    quote: "The book of nature is written in the language of mathematics.",
    author: "Galileo Galilei",
    content: "Mọi hiện tượng cơ học, lực cản không khí của cánh máy bay hay chuyển động dòng hỗn loạn của máy nén khí tuabin đều có thể hình dung một cách đẹp đẽ qua các phương trình đạo hàm riêng Navier-Stokes. Tìm kiếm sự hội tụ của thuật toán số là niềm vui mộc mạc hàng ngày của một kỹ sư tính toán."
  },
  {
    id: "p2",
    title: "Grounded in Rigor, Driven by Performance",
    vietnameseTitle: "Chặt chẽ trong học thuật, Đam mê hiệu năng chuyên nghiệp",
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    content: "Tính toán cơ chất đòi hỏi sự tỉ mỉ không tì vết. Một lỗi tràn mảng hay sai sót nhỏ trong việc dựng lưới (mesh layout) có thể làm nổ tung cả mô hình mô phỏng CFD hàng triệu phần tử sau một tuần chạy song song trên cụm máy chủ siêu máy tính."
  },
  {
    id: "p3",
    title: "Computation Belongs to Reality",
    vietnameseTitle: "Mô phỏng máy tính phục vụ thế giới vật lý thực",
    quote: "Essentially, all models are wrong, but some are useful.",
    author: "George E. P. Box",
    content: "Các mô hình giải tích hay các mô phỏng hạt, LES, GPR không chỉ là những dòng code khô khan trên terminal màn hình tối. Chúng thực sự hữu dụng khi mang lại hiệu quả tản nhiệt thực tế cho quạt phản lực điện EDF hay chẩn đoán thời gian thực giúp tối ưu vận hành lò đốt hóa chất khổng lồ."
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "proj1",
    title: "Numerical investigation of an Electric Motor Cooling ability through the Centre Body of an Electric Ducted Fan",
    subtitle: "Khóa luận tốt nghiệp xuất sắc (Thủ khoa ngành Kỹ thuật Hàng không HUST)",
    abstract: "Nghiên cứu mô phỏng số chi tiết về hiệu năng tản nhiệt của một động cơ điện tích hợp bên trong bầu trung tâm của quạt ducted fan hướng trục. Phát triển các kỹ thuật kiểm soát dòng chảy chủ động để cải thiện hệ số truyền nhiệt đối lưu dưới điều kiện tải cao, giúp bảo vệ an toàn cuộn dây động cơ và nâng hiệu suất khí động.",
    methodology: [
      "Xây dựng dựng lưới 3D có cấu trúc cực kỳ tinh mịn đáp ứng bài toán truyền nhiệt liên hợp CHT",
      "Tiến hành mô phỏng số Navier-Stokes bằng trình giải CFD nâng cao",
      "Thẩm định (Validation, Verification) số liệu thực nghiệm tại Propulsion Systems Lab"
    ],
    keyFindings: [
      "Tối ưu hóa thiết kế bầu trung tâm khí động giúp tăng hệ số giải nhiệt lên 18.5%.",
      "Giảm thiểu sự xuất hiện của vùng xoáy phân tách tổn hao cục bộ ở đuôi động cơ.",
      "Công bố bài báo khoa học liên quan tại IOP Journal of Physics: Conference Series."
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
    subtitle: "Công trình hợp tác nghiên cứu cấu trúc Grid Fins khí động học hiệu xuất cao",
    abstract: "Khảo sát và so sánh đặc tính lực nâng, lực cản và các cấu trúc dòng xoáy cuộn của cơ cấu cánh lái dạng tổ ong (Grid Fins) dưới dải vận tốc cận âm và siêu âm. Đánh giá tính tối ưu về mặt khí động học của các mô hình mắt lưới kim cương so với dạng ô vuông truyền thống.",
    methodology: [
      "Thiết lập mạng tính toán CFD cấu trúc lưới biên mỏng y+ cực nhỏ",
      "Chạy tính toán song song nghiên cứu dải góc tấn lớn từ 0 đến 15 độ",
      "Sử dụng kỹ thuật phân tích dòng xoáy Q-criterion để trực quan hóa hiện tượng tách dòng"
    ],
    keyFindings: [
      "Khác biệt rõ rệt về độ ổn định mô-men xoắn giữa các mô hình mắt lưới kim cương.",
      "Công trình được xuất bản chính thức trên tạp chí Q1 quốc tế uy tín Physics of Fluids.",
      "Góp phần cung cấp dữ liệu thiết kế cho cơ cấu khí động tự điều hướng thông minh."
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
    subtitle: "Dự án nghiên cứu lớn tại KAIST (Hàn Quốc)",
    abstract: "Nghiên cứu phát triển trình giả lập chuyên sâu mô phỏng khí động học cho trực thăng. Tập trung cải tiến các lược đồ số AUSM, MUSCL để giải chính xác phương trình Euler/Navier-Stokes trên lưới trực giao, tối ưu hóa các bộ hạn chế độ dốc (limiters) nâng cao như Van Albada để triệt tiêu dao động giả dối tại vùng có độ dốc áp suất cao cực đại.",
    methodology: [
      "Nghiên cứu nguyên lý Riemann solvers và các mô hình nhiễu loạn trong FVM",
      "Lập trình tính toán song song OpenMPI hỗ trợ xử lý trên các miền đục lỗ đa khối",
      "Áp dụng các mô hình nhiễu loạn Spalart-Allmaras cho tính toán rotor xoay"
    ],
    keyFindings: [
      "Cải thiện chất lượng phục dựng trường áp suất mép cánh quạt xoay khi trực thăng tịnh tiến.",
      "Tối ưu ranh giới phân tách xoáy khí giúp mô hình mô phỏng dòng tách cánh quạt chuẩn xác hơn 12%."
    ],
    status: "Completed"
  }
];

export const experiments: Experiment[] = [
  {
    id: "exp1",
    title: "Mô phỏng Dòng Chảy Quanh Cánh Máy Bay (2D Airfoil CFD Solver)",
    category: "Dry Lab",
    equipment: ["Trình duyệt Web", "Bộ giải phương trình Euler", "TypeScript Canvas Engine"],
    objective: "Mô phỏng động thời gian thực sự phân bố áp suất và đường dòng quanh biên dạng cánh NACA 0012 ở các góc tấn khác nhau để quan sát hiện tượng tách dòng (Stall).",
    steps: [
      { number: 1, title: "Khởi tạo thông số", description: "Thiết lập vận tốc dòng tự do (Freestream) và góc tấn (Angle of Attack) của biên dạng cánh airfoil." },
      { number: 2, title: "Giải số Euler / Potential Flow", description: "Bấm nút giải hệ phương trình Laplace dạng phần tử nguồn khí động song song để tính trường lưu tốc không ma sát." },
      { number: 3, title: "Tính toán áp suất", description: "Từ trường lưu tốc, áp dụng phương trình Bernoulli phân tích hệ số áp suất Cp phân bố lên bề mặt lưng và mặt bụng cánh." },
      { number: 4, title: "Hình ảnh hóa đường dòng", description: "Vẽ trực quan đường dòng (Streamlines) với dải màu tương tác. Tăng góc tấn vượt ngưỡng giới hạn để thấy dòng tách nát phía đuôi cánh." }
    ],
    simulationType: "sequence-alignment" // placeholder for custom logic
  },
  {
    id: "exp2",
    title: "Phân Tích Sức Bền Cơ Học Cánh Dầm (Cantilever Beam FEA Sim)",
    category: "Dry Lab",
    equipment: ["Công cụ giải phần tử hữu hạn", "Phép thử ma trận độ cứng", "Biểu đồ biến dạng dầm"],
    objective: "Xác định ứng suất lớn nhất (Von-Mises Stress) và độ võng của một cấu kiện dầm công-xôn chịu tải lực tập trung ở đầu tự do phục vụ thiết kế kết cấu bền vững.",
    steps: [
      { number: 1, title: "Khai báo vật liệu", description: "Chọn thông số mô-đun Young (E), hệ số Poisson và kích thước hình học dầm đơn giản." },
      { number: 2, title: "Chia lưới phần tử (Meshing)", description: "Chia chiều dài dầm thành các phần tử thanh (1D beam) liên kết chặt chẽ qua các nút biên liên tục." },
      { number: 3, title: "Xây dựng ma trận độ cứng", description: "Ràng buộc ngàm cứng một đầu (độ lệch bằng 0) và thiết lập tải trọng tác dụng ở đầu tự do dầm." },
      { number: 4, title: "Giải phương trình và Trực quan", description: "Giải hệ đại số tuyến tính K*U = F tìm vectơ chuyển vị, từ đó suy ra đồ thị phân bố mặt momen và ứng suất uốn dọc dầm." }
    ],
    simulationType: "electrophoresis" // placeholder for custom logic
  }
];

export const memories: Memory[] = [
  {
    id: "m1",
    title: "Buổi chiều thu bên hồ KAIST tuyệt đẹp",
    date: "14 Tháng 09, 2024",
    description: "Nhớ hoài những buổi chiều mát tại Daejeon, sau giờ làm việc căng thẳng tại Aerial Innovative Mobility Lab, mình cùng các bạn ngồi ngắm hồ thiên nga biểu trưng của KAIST cổ kính, bàn luận về sự hội tụ của solver khí động học trực thăng.",
    category: "Lab Fun",
    iconName: "Compass",
    location: "KAIST Campus, Daejeon, South Korea"
  },
  {
    id: "m2",
    title: "Góc bàn lập trình tại phòng lab HUST thân yêu",
    date: "10 Tháng 11, 2023",
    description: "Góc bàn ngập đầy tài liệu khí động học tua bin và chiếc máy tính trầy xước nơi mình đã gõ những dòng code dựng lưới đầu tiên cho đề tài dòng quạt hút phản lực nhiệt EDF hướng trục.",
    category: "Academic",
    iconName: "ThermometerCheck",
    location: "Propulsion Systems Lab, HUST, Hanoi"
  },
  {
    id: "m3",
    title: "Chuyến bay dài đến Đài Bắc khát vọng mới",
    date: "15 Tháng 02, 2026",
    description: "Hành lý xếp gọn gàng cùng ước mơ dấn thân sâu hơn vào nghiên cứu cơ chất, máy học ứng dụng tại Viện Cơ học Ứng dụng xuất sắc của Đại học Quốc gia Đài Loan (NTU). Bắt đầu hành trình đầy triển vọng mới.",
    category: "Field Trip",
    iconName: "Presentation",
    location: "National Taiwan University, Taipei"
  },
  {
    id: "m4",
    title: "Thời gian làm việc lập trình tại Akselos HCM",
    date: "25 Tháng 03, 2025",
    description: "Những buổi làm việc nhiệt huyết cùng các đàn anh xuất sắc tại Akselos Sài Gòn, cùng phân tích các thuật toán GPR học máy hiện đại hỗ trợ mô phỏng thời gian thực cho hệ thống lò phản ứng hóa học công nghiệp phức tạp.",
    category: "Daily Life",
    iconName: "Coffee",
    location: "Akselos Office, Quận 1, Ho Chi Minh City"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog1",
    title: "Từ Kỹ Sư Hàng Không HUST Đến Trải Nghiệm Học Thạc Sĩ KAIST & NTU: Học Cách Chấp Nhận Sự Khác Biệt",
    date: "12 Tháng 04, 2026",
    category: "Reflection",
    readTime: "8 phút đọc",
    summary: "Những chia sẻ chân thật và mộc mạc về hành trình vượt biên học hỏi tại hai nền giáo dục hàng đầu Châu Á, cách xử lý áp lực khi phải thích ứng nhanh với khối lượng bài tập khổng lồ và các hướng đi cơ học thực tế.",
    content: [
      "Bước chân vào thế giới của KAIST hay sau này là cơ duyên tại NTU Đài Loan, mình phát hiện ra một nhịp độ học thuật cực kỳ áp lực nhưng cũng chứa đầy thăng tiến vượt bậc. Nếu ở Việt Nam, chúng ta hay giải bài tập dựa trên các giáo trình có sẵn, thì môi trường quốc tế yêu cầu bạn tự đặt giả thuyết, tự định chuẩn (benchmark) và lý giải xác đáng bằng toán học.",
      "Sự tích lũy từ những ngày thức trắng giải mã dòng chảy xoay tua-bin tại Propulsion Systems Lab ở HUST đã nâng bước cho mình rất nhiều. Chân thành khuyên các bạn trẻ: Đừng ngại dấn thân khỏi vùng an toàn để hiểu thế giới học thuật đỉnh cao thực sự vận hành ra sao."
    ],
    tags: ["Hành Trình Thạc Sĩ", "Hàng Không Vũ Trụ", "KAIST", "NTU", "HUST"]
  },
  {
    id: "blog2",
    title: "Gaussian Process Regression (GPR) Trong Mô Phỏng Cơ Học Thời Gian Thực",
    date: "22 Tháng 05, 2026",
    category: "Academic",
    readTime: "6 phút đọc",
    summary: "Tại sao Machine Learning không chỉ đơn thuần là nhận diện ảnh mèo chó? Tìm hiểu ứng dụng ưu việt của GPR trong việc xây dựng mô hình thay thế (surrogate models) cho cấu kiện cơ nhiệt phức tạp.",
    content: [
      "Trong công nghiệp nặng, mô phỏng phản ứng truyền nhiệt hay sức bền kết cấu bằng phương pháp phần tử hữu hạn (FEA) truyền thống tốn hàng giờ đến hàng ngày để cho ra đáp án. Để theo dõi thời gian thực phục vụ bảo trì dự báo trước, chúng ta cần các giải pháp phản hồi trong vòng tích tắc.",
      "Gaussian Process Regression (GPR) nổi lên như một vị cứu tinh nhờ cung cấp dự báo chính xác kèm thông số đánh giá độ bất định (uncertainty quantification) tin cậy khoa học, giúp nâng tầm chuyển đổi số công nghiệp lên nấc thang mới."
    ],
    tags: ["Machine Learning", "Gaussian Process", "Akselos", "Numerical Analysis"]
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
    degree: "Aerospace Engineering (MSc - Drroped)",
    institution: "KAIST (Korea Advanced Institute of Science and Technology)",
    department: "Department of Aerospace Engineering",
    period: "Feb 2024 - Oct 2024",
    details: ["Thesis topic: Turbulence modeling, high-fidelity advective schemes in Actuator Line Methods for Helicopter flow.",
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
    "GPA: 3.53/4 (Ranked 1st in class)"],
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
        name: "Personal Mesh Solver Project",
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
      "Buddy student, supported an exchange student from Niigata University, Japan in completing a thesis  on Electric Vertical Take-off and Landing (eVTOL)"
    ]
  }
];
