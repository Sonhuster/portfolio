import { BlogPost, Achievement, ResearchProject, Experiment, Memory, PhilosophyItem, EducationItem } from "./types";

export const profileData = {
  name: "Van-Son Dinh",
  title: "MSc Candidate in Applied Mechanics (Aerospaces)",
  institution: "National Taiwan University (NTU)",
  department: "Institute of Applied Mechanics",
  email: "sondv.hust@gmail.com",
  location: "Hanoi, Vietnam",
  avatarUrl: "", // We can use elegant initials or clean styling
  bio: "A simple man with passion on Math, Computing Engineeing, Programming, and Games",
  interests: [
    "Numerical Methods",
    "Applied Mathematics",
    "Fluid Mechanics",
    "Applied Machine Learning in CFD",
    "Turbomachinery / Aeroacoustic"
  ]
};

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "MSc Research Fellowship",
    organization: "HUST Bioinformatics & Biomolecules Lab",
    description: "Học bổng nghiên cứu dành cho học viên thạc sĩ xuất sắc có thành tích công bố khoa học triển vọng."
  },
  {
    year: "2024",
    title: "Outstanding Graduate Thesis Award (BSc)",
    organization: "Hanoi University of Science and Technology",
    description: "Khóa luận tốt nghiệp xuất sắc về tối ưu hóa quy trình biểu hiện enzyme phân hủy nhựa."
  },
  {
    year: "2023",
    title: "Consolation Prize - National Student Biology Olympiad",
    organization: "Ministry of Education and Training",
    description: "Giải thưởng cấp quốc gia dành cho sinh viên ngành Sinh học và Công nghệ sinh học."
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    id: "p1",
    title: "Curiosity as the Engine",
    vietnameseTitle: "Sự tò mò là động cơ",
    quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    content: "Mọi phát minh vĩ đại đều bắt đầu từ một câu hỏi 'Tại sao?'. Đối với mình, việc mặc chiếc áo blouse trắng vào phòng thí nghiệm mỗi ngày không phải là một công việc, mà là một cơ hội để thỏa mãn sự tò mò về thế giới vi mô kì diệu xung quanh."
  },
  {
    id: "p2",
    title: "Grounded in Rigor, Driven by Imagination",
    vietnameseTitle: "Chặt chẽ trong thực nghiệm, Bay bổng trong suy tưởng",
    quote: "Science is magic that works.",
    author: "Kurt Vonnegut",
    content: "Khoa học đòi hỏi sự chặt chẽ tuyệt đối của số liệu và phương pháp thực nghiệm. Nhưng để nhìn ra những mối liên hệ ẩn giấu trong hàng triệu cặp bazơ DNA, một nhà khoa học cũng cần trí tưởng tượng phong phú như một người nghệ sĩ."
  },
  {
    id: "p3",
    title: "Science Belongs to Life",
    vietnameseTitle: "Khoa học phụng sự đời sống rộng lớn hơn",
    quote: "Science knows no country, because knowledge belongs to humanity.",
    author: "Louis Pasteur",
    content: "Những nghiên cứu trong phòng thí nghiệm (Lab) chỉ thực sự có giá trị khi chúng bước ra phục vụ cuộc sống đời thường: giải quyết ô nhiễm nguồn nước sông Nhuệ, phân hủy rác thải nhựa ở biển Cát Bà, hoăc đem lại sinh kế bền vững hơn."
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "proj1",
    title: "Khảo sát Metagenomics Hệ Vi Sinh Vật Vịnh Hạ Long Để Tìm Kiếm Enzyme Thủy Phân Nhựa PET",
    subtitle: "Hạ Long Bay Metagenomic Survey for PET-Degrading Enzymes",
    abstract: "Dự án tập trung vào việc thu thập các mẫu trầm tích biển tại Vịnh Hạ Long, thực hiện giải trình tự metagenome thế hệ mới (NGS) nhằm sàng lọc các gien mã hóa PETase tiềm năng. Bằng cách kết hợp giữa các thuật toán căn hàng (alignment) và dự đoán cấu trúc 3D bằng mô hình học sâu, chúng mình đã phát hiện ra 3 ứng viên enzyme có cấu trúc ổn định ở nhiệt độ và độ mặn cao.",
    methodology: [
      "Thu mẫu tại phao phế thải nhựa ở Vịnh Hạ Long",
      "Ly trích DNA tổng số trực tiếp từ trầm tích",
      "Giải trình tự Illumina NovaSeq",
      "Sàng lọc Bioinformatic bằng cụm máy chủ hiệu năng cao của HUST"
    ],
    keyFindings: [
      "Phát hiện một chi vi khuẩn biển Halomonas có mật độ cao xung quanh các khu chứa nylon.",
      "Xác định được 1 chuỗi PETase mới (HL-PET1) có cấu trúc ổn định nhiệt lên tới 55°C.",
      "Thực hiện biểu hiện thành công HL-PET1 trong Escherichia coli BL21."
    ],
    status: "In Review",
    publication: {
      journal: "Journal of Marine Biotechnology & Bioprocess",
      authors: "Son D. V., Minh T. Nguyen, Linh T. P. Hoang*"
    }
  },
  {
    id: "proj2",
    title: "Ứng Dụng Học Máy Để Dự Đoán Và Tối Ưu Nhiệt Độ Hoạt Tính Gây Biến Tính Của Enzyme Lipase",
    subtitle: "Predicting Lipase Thermostability using Graph Neural Networks",
    abstract: "Lipase sinh học có ứng dụng rộng rãi trong sản xuất dầu diesel sinh học và chất tẩy rửa cao cấp nhưng thường kém bền nhiệt. Trong nghiên cứu này, mình phát triển mô hình Machine Learning xếp hạng các cặp amino acid dựa trên mạng thần kinh đồ thị (GNNs) để chỉ ra các vị trí đột biến điểm giúp tăng cường liên kết hydro bền vững trong cấu trúc enzyme.",
    methodology: [
      "Xây dựng tập dữ liệu cấu trúc 3D với 1,200 cấu trúc Lipase từ Protein Data Bank (PDB)",
      "Tính toán đặc trưng mạng lưới hóa học của các liên kết nội phân tử",
      "Huấn luyện mô hình XGBoost và Graph Convolutional Networks (GCNs)"
    ],
    keyFindings: [
      "Mô hình đạt độ chính xác R2 = 0.88 trong việc dự đoán nhiệt độ nóng chảy (Tm) của enzyme.",
      "Chỉ ra 2 đột biến khuyến nghị mới (G45C và T120A) giúp tăng Tm lên thêm 4.5°C trên lý thuyết.",
      "Hiện đang tiến hành thẩm định thực nghiệm (Wet Lab)."
    ],
    status: "In Progress"
  }
];

export const experiments: Experiment[] = [
  {
    id: "exp1",
    title: "Điện di Gel DNA (Agarose Gel Electrophoresis)",
    category: "Wet Lab",
    equipment: ["Bể điện di", "Nguồn điện", "Máy soi gel UV", "Agarose Gel 1%"],
    objective: "Kiểm tra sự hiện diện và kích thước của sản phẩm PCR khuếch đại gen HL-PET1 (~1,500 bp) trước khi chuyển gen.",
    steps: [
      { number: 1, title: "Chuẩn bị bản Gel", description: "Đun nóng dịch Agarose 1% trong đệm TAE, đổ vào khay khuôn và cắm lược tạo giếng. Đợi gel đông hoàn toàn trong 20 phút." },
      { number: 2, title: "Tra mẫu DNA", description: "Trộn sản phẩm PCR với loading dye tỷ lệ 5:1. Cẩn thận tra mẫu vào giếng gel, đồng thời nạp thang mẫu chuẩn (DNA Ladder 1kb)." },
      { number: 3, title: "Chạy điện di", description: "Thiết lập hiệu điện thế 100V dòng một chiều trong 40 phút. DNA mang điện tích âm sẽ dịch chuyển về phía cực dương." },
      { number: 4, title: "Chụp ảnh Gel", description: "Đặt bản gel vào buồng máy soi UV để kích hoạt Ethidium Bromide hoặc GelRed kết hợp với DNA phát ra ánh huỳnh quang đỏ/cam." }
    ],
    simulationType: "electrophoresis"
  },
  {
    id: "exp2",
    title: "Đo Quang Phổ Mật Độ Vi Khuẩn (Spectrophotometry OD600)",
    category: "Wet Lab",
    equipment: ["Máy đo quang phổ (Spectrophotometer)", "Cuvette thạch anh", "Máy lắc giữ nhiệt (Shaker)"],
    objective: "Theo dõi đường cong sinh trưởng của chủng E. coli tái tổ hợp để xác định thời điểm tối ưu cho chất kích hoạt IPTG sinh tổng hợp prôtêin.",
    steps: [
      { number: 1, title: "Khởi động thiết bị", description: "Bật máy đo quang phổ tối thiểu 15 phút trước khi sử dụng. Thiết lập bước sóng đo chuẩn tại 600 nm." },
      { number: 2, title: "Đo mẫu trắng (Blank)", description: "Nạp môi trường nuôi cấy LB vô trùng vào cuvette trắng để hiệu chuẩn máy về giá trị hấp thụ (Absorbance) ban đầu bằng 0." },
      { number: 3, title: "Đo mẫu nuôi cấy", description: "Hút 1ml dịch vi khuẩn từ bình tam giác đang nuôi lắc vào cuvette, nhẹ nhàng đặt vào khe đo và ghi nhận chỉ số OD600." },
      { number: 4, title: "Xác định pha Log", description: "Khi OD600 đạt khoảng giá trị từ 0.6 đến 0.8, vi khuẩn đang ở đỉnh sinh trưởng khỏe nhất. Đây là thời cơ lý tưởng để bổ sung IPTG kích hoạt gen." }
    ],
    simulationType: "spectroscopy"
  },
  {
    id: "exp3",
    title: "Căn Hàng Cặp DNA Tìm Đột Biến (Sequence Alignment)",
    category: "Dry Lab",
    equipment: ["Cụm máy chủ Linux", "Phần mềm BLAST (NCBI)", "Ngôn ngữ Python v3.10"],
    objective: "So sánh chính xác chuỗi nucleotide giải mã thực nghiệm với chuỗi gốc trên ngân hàng gen GenBank để rà soát đột biến điểm mất gien/sai nghĩa.",
    steps: [
      { number: 1, title: "Chuẩn bị file FASTA", description: "Load file chuỗi DNA thô nhận được từ trung tâm giải trình tự (loại bỏ các đoạn tín hiệu kém ở 2 đầu)." },
      { number: 2, title: "Chạy thuật toán Smith-Waterman", description: "Thực hiện căn hàng cục bộ tối ưu giữa chuỗi mục tiêu và hệ gen đối chứng để tính điểm số tương đồng (Score, Identity, Gaps)." },
      { number: 3, title: "Nhận diện vị trí sai khác", description: "Tìm kiếm các vị trí có sự thay đổi bazơ đơn (SNPs) hoặc chèn/xóa (Indels) dẫn đến mã bộ ba mã hóa khác đi." },
      { number: 4, title: "Lập báo cáo đột biến", description: "Xuất file dạng đồ họa trực quan hóa các ký tự khớp nhau để kết luận chất lượng nhân dòng biến nạp gen." }
    ],
    simulationType: "sequence-alignment"
  }
];

export const memories: Memory[] = [
  {
    id: "m1",
    title: "Đêm trắng canh tủ cấy vi sinh",
    date: "12 Tháng 10, 2025",
    description: "Chu kỳ sinh trưởng của vi khuẩn không chờ đợi ai. 2h sáng trong căn phòng thí nghiệm vắng lặng, tiếng máy lắc vo ve nhịp nhàng như nhịp thở của cả căn phòng. Mệt nhưng cảm giác đón bình minh cùng kết quả điện di đẹp mĩ mãn luôn vô giá.",
    category: "Lab Fun",
    iconName: "ThermometerCheck",
    location: "Lab 402, Nhà C10, HUST"
  },
  {
    id: "m2",
    title: "Thực địa bùn biển Cát Bà kì thú",
    date: "04 Tháng 07, 2025",
    description: "Nhóm nghiên cứu lội bùn ven rừng ngập mặn Cát Bà dưới cái nắng hè đổ lửa để thu mẫu vi sinh vật phân hủy plastic tự nhiên. Lội bùn trơn trượt mỏi nhừ, nhưng bù lại là một thùng mẫu đầy hứa hẹn và bữa tối hải sản vỉa hè vui hết nấc cùng thầy cô.",
    category: "Field Trip",
    iconName: "Compass",
    location: "Vườn quốc gia Cát Bà, Hải Phong"
  },
  {
    id: "m3",
    title: "Mưa rào Hà Nội bên góc bàn Cafe Tạ Quang Bửu",
    date: "18 Tháng 09, 2025",
    description: "Góc bàn nhỏ ấm cúng cạnh cửa sổ tầng 2 quán cafe ngay đối diện thư viện Tạ Quang Bửu của HUST. Nơi đây đã đồng hành cùng mình qua hàng trăm giờ ngồi đọc review paper, sửa code Python lỗi và nhâm nhi tách đen đá không đường đậm chất Bách Khoa.",
    category: "Daily Life",
    iconName: "Coffee",
    location: "Tạ Quang Bửu Street, Hà Nội"
  },
  {
    id: "m4",
    title: "Báo cáo tiến độ seminar đầu tiên trước hội đồng",
    date: "05 Tháng 01, 2026",
    description: "Lần đầu tiên trình bày nghiên cứu học máy ứng dụng dự đoán cấu trúc trước toàn thể giáo sư của viện. Chân run cầm cập khi trả lời các câu hỏi phản biện gắt gao, thế nhưng cái gật đầu mỉm cười tán thành cuối cùng của thầy trưởng bộ môn đã khiến mọi sự nỗ lực tan biến thành niềm vui tột độ.",
    category: "Academic",
    iconName: "Presentation",
    location: "Hội trường C1-203, HUST"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog1",
    title: "Hành Trình Từ Kỹ Sư Công Nghệ Sinh Học HUST Đến Thạc Sĩ: Chặng Đường Vượt Khỏi Vùng An Toàn Đời Thường",
    date: "14 Tháng 03, 2026",
    category: "Reflection",
    readTime: "7 phút đọc",
    summary: "Chia sẻ chân thành về sự chuyển dịch tư duy từ một cậu sinh viên chỉ quen làm theo các quy trình định sẵn (recipe) sang một thạc sĩ nghiên cứu độc lập phải tự thiết kế thử nghiệm và đối mặt với 90% kết quả thất bại.",
    content: [
      "Bước chân vào bậc cao học tại Đại học Bách khoa Hà Nội (HUST), mình từng nghĩ học thạc sĩ chỉ đơn giản là đi học thêm vài môn cơ sở chuyên ngành nâng cao và tiếp tục chạy điện di hay nuôi cấy tế bào như thời đại học. Nhưng thực tế đã tặng mình một 'cú tát giải ngố' ngay học kỳ đầu tiên.",
      "Ở bậc đại học, các bài thực hành đã có sẵn quy trình (protocol). Bạn chỉ cần cân đúng gram hóa chất, nhỏ đúng microliter dung dịch, bấm nút máy dòng điện di và chờ đợi kết quả đã biết trước. Nhưng ở bậc thạc sĩ, bạn là người đi mở đường mới. Bạn sẽ nghiên cứu dòng enzyme chưa ai từng tối ưu, chạy thử nghiệm trên dữ liệu thô chưa lọc sạch.",
      "Nhiều tuần liền, gel điện di của mình trắng trơn không một vạch sáng, khuẩn lạc không mọc, hoặc tệ hơn là chủng vi sinh chết sạch sau một đêm mất điện phòng Lab. Đó là lúc sự nghi ngờ bản thân trỗi dậy. Mình có thực sự phù hợp làm nghiên cứu khoa học? Hay mình chỉ đang lãng phí thời gian?",
      "Nhờ sự động viên từ Thầy hướng dẫn và các bạn cùng Lab, mình nhận ra: Thất bại trong phòng thí nghiệm không chứng minh bạn kém cỏi, nó chỉ đang chỉ ra một hướng đi không hiệu quả. Khoa học tiến lên nhờ loại trừ những giả thuyết sai. Khi bạn chấp nhận làm bạn với thất bại, bình tĩnh phân tích nguyên nhân từ độ pH của đệm đến nhiệt độ biến tính DNA, bạn mới thực sự trưởng thành và xứng đáng mang danh xưng 'scientist'."
    ],
    tags: ["Cao Học HUST", "Đời Lab", "Kinh Nghiệm", "Tư Duy Nghiên Cứu"]
  },
  {
    id: "blog2",
    title: "Tại Sao Mình Lựa Chọn Sinh Học Tính Toán (Computational Biology) Giữa Thời Đại Trí Tuệ Nhân Tạo?",
    date: "28 Tháng 04, 2026",
    category: "Academic",
    readTime: "5 phút đọc",
    summary: "Tại sao một người học Công nghệ sinh học truyền thống lại quyết định dành hàng giờ để gõ những dòng lệnh Linux, code Python thay vì chỉ tập trung thao tác trong tủ cấy? Sức mạnh kỳ diệu khi kết hợp giữa Wet Lab và Dry Lab.",
    content: [
      "Sinh học hiện đại đang đối mặt với một cơn sóng dữ liệu khổng lồ. Một thí nghiệm giải trình tự gen thế hệ mới (NGS) có thể sinh ra hàng chục Gigabyte dữ liệu thô dạng văn bản chỉ trong vài giờ. Làm cách nào để một con người có thể đọc hết và tìm ra gien đột biến quý giá trong mớ hỗn độn 3 tỷ cặp base di truyền đó?",
      "Đó chính là lý do Sinh học tính toán (Computational Biology / Bioinformatics) ra đời. Đây là sợi dây xích kết nối giữa thế giới số học máy tính và thế giới sinh học bí ẩn.",
      "Đối với mình, sinh viên tốt nghiệp ngành Công nghệ sinh học truyền thống ban đầu cảm thấy lập trình như một 'ngôn ngữ ngoài hành tinh'. Chạy lệnh Linux bị lỗi syntax liên tục, dùng Python vẽ đồ thị boxplot méo mó. Tuy nhiên, khi mình vượt qua rào cản kỹ thuật cơ bản, mình phát hiện ra một siêu năng lực mới.",
      "Thay vì bỏ ra 6 tháng trời thử nghiệm mù quáng hàng trăm tổ hợp đột biến điểm của enzyme trong phòng Wet Lab tốn kém hàng chục triệu tiền hóa chất mua từ nước ngoài, mình chỉ mất 2 tiếng viết đoạn script tìm kiếm liên kết hydro động lực học phân tử trên máy tính để thu hẹp danh sách ứng viên từ 100 xuống 3 gien khả thi nhất. Sau đó, đem 3 gien này vào thực nghiệm kiểm chứng. Đó chính là sự kết hợp tối thượng giữa Wet Lab và Dry Lab - thông minh hơn, nhanh hơn và tiết kiệm nguồn lực khoa học nước nhà."
    ],
    tags: ["Bioinformatics", "Python", "Wet Lab Dry Lab", "AI & Science"]
  },
  {
    id: "blog3",
    title: "Sổ Tay Sống Sót Dành Cho Học Viên Cao Học: 5 Thói Quen Nhỏ Để Giữ Sự Tỉnh Táo Và Chống Burnout",
    date: "09 Tháng 05, 2026",
    category: "Survival Guide",
    readTime: "6 phút đọc",
    summary: "Học thạc sĩ không phải cuộc đua nước rút 100m, nó là một cuộc chạy Marathon bền bỉ. Tổng hợp 5 kinh nghiệm thực tế giúp mình vừa cân bằng được tiến độ báo cáo bài báo vừa giữ được tinh thần thoải mái, không kiệt sức.",
    content: [
      "Áp lực của một thạc sĩ rất đặc thù: Bạn phải vừa hoàn thành đủ tín chỉ các môn học trên lớp, vừa phải trực tiếp tham gia hỗ trợ các đề tài nghiên cứu cấp Bộ của thầy cô, lại vừa phải lo viết bài báo khoa học cho riêng mình để đủ điều kiện bảo vệ tốt nghiệp. Rất nhiều bạn bè của mình đã rơi vào trạng thái kiệt quệ tinh thần (burnout) trầm trọng.",
      "Dưới đây là 5 thói quen nhỏ mình đã đúc kết và áp dụng để giữ cho bản thân luôn tràn đầy năng lượng tích cực:",
      "1. Tập ghi chép Lab Journal (Sổ ký sự phòng Lab) cực kỳ chi tiết: Không chỉ ghi thông số thành công, hãy viết lại cả những lỗi bạn đã mắc phải trong ngày. Việc rạch ròi nhật ký giúp ngày hôm sau bạn không tốn thời gian lặp lại vết xe đổ.",
      "2. Quy tắc 'Rời Lab là cởi áo Blouse': Đừng mang áp lực tế bào nhiễm nấm hay mô hình lỗi về nhà. Hãy dành buổi tối để tập thể thao tại nhà thi đấu Bách Khoa hoặc đi chơi với người thân nhằm làm mới bộ não.",
      "3. Kết nối sâu sắc với Labmates (Bạn đồng hành phòng thí nghiệm): Phòng lab không chỉ là nơi chia sẻ hóa chất, đó còn là nơi tuyệt vời nhất để bạn xả stress. Những bữa trà đá vỉa hè cổng trường bàn luận về khoa học lẫn chuyện gia đình giúp xua tan áp bách vô cùng hiệu quả.",
      "4. Chấp nhận rằng dữ liệu xấu là một phần của cuộc sống học thuật: Đôi khi biểu đồ lệch, kết quả ngược kỳ vọng. Hãy coi nó là một bí ẩn thú vị cần điều tra tiếp chứ đừng coi nó là lỗi của bản thân.",
      "5. Học cách nói 'Không' có chọn lọc: Sức lực của bạn có hạn. Tránh nhận quá nhiều việc phụ trợ không liên quan đến hướng nghiên cứu luận văn chính của bạn kẻo 'xôi hỏng bỏng không'."
    ],
    tags: ["Mental Health", "Sổ Tay Thạc Sĩ", "Kinh Nghiệm Sống", "HUST Life"]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Applied Mechanics (MSc)",
    institution: "National Taiwan University (NTU)",
    department: "Institute of Applied Mechanics",
    period: "2026 - Now (Expected 2028)",
    details: "Thesis topic: LES + Particle Solver + Machine Learning.",
    isCurrent: true,
    type: "current"
  },
  {
    degree: "Aerospace Engineering (MSc - Discontinued)",
    institution: "KAIST (Korea Advanced Institute of Science and Technology)",
    department: "Department of Aerospace Engineering",
    period: "2024 - 2025",
    details: "Thesis topic: Turbulence modeling, high-fidelity advective schemes in Actuator Line Methods for Helicopter flow.",
    isCurrent: false,
    type: "discontinued"
  },
  {
    degree: "Aerospace Engineering (BC)",
    institution: "Hanoi University of Science and Technology (HUST)",
    department: "School of Transportation Engineering",
    period: "2020 - 2024",
    details: "Focus: Aerodynamics, Computational Fluid Dynamics (CFD), Structural Mechanics.",
    isCurrent: false,
    type: "completed"
  }
];
