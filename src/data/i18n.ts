export const locales = ["vi", "en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type FilterId = "all" | "systems" | "research" | "ai" | "collab" | "ethics";

export type ContactPlatform =
  | "phone"
  | "email"
  | "linkedin"
  | "github"
  | "facebook"
  | "instagram";

export type ContactLink = {
  platform: ContactPlatform;
  label: string;
  value: string;
  href: string;
};

export type Profile = {
  name: string;
  studentId: string;
  university: string;
  universityShortName: string;
  intro: string;
  focus: string[];
  contacts: ContactLink[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
};

export type Assignment = {
  id: string;
  number: string;
  title: string;
  theme: string;
  objective: string;
  summary: string;
  process: string[];
  outcome: string;
  tags: string[];
  filters: FilterId[];
  sourceFile: string;
  evidence: string[];
  artifactIds: string[];
};

export type Artifact = {
  id: string;
  title: string;
  kind: string;
  description: string;
  image?: string;
  source?: string;
  assignmentId?: string;
  placeholder?: boolean;
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    roadmap: string;
    assignments: string;
    artifacts: string;
    contact: string;
  };
  ui: {
    language: string;
    viewAssignments: string;
    downloadAll: string;
    downloadSource: string;
    viewDetail: string;
    selected: string;
    objective: string;
    process: string;
    outcome: string;
    evidence: string;
    source: string;
    replaceLater: string;
    allFiles: string;
    filters: Record<FilterId, string>;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  profile: Profile;
  experience: Experience;
  education: {
    title: string;
    degree: string;
    description: string;
  };
  roadmap: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
    rubric: { title: string; range: string; description: string }[];
  };
  assignmentsIntro: {
    title: string;
    description: string;
  };
  assignments: Assignment[];
  artifactsIntro: {
    title: string;
    description: string;
  };
  artifacts: Artifact[];
  summary: {
    title: string;
    statement: string;
    pillars: { title: string; description: string }[];
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    note: string;
  };
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const contactLinks: ContactLink[] = [
  {
    platform: "phone",
    label: "Phone",
    value: "+84 912 345 678",
    href: "tel:+84912345678",
  },
  {
    platform: "email",
    label: "Email",
    value: "hung.tran@example.com",
    href: "mailto:hung.tran@example.com",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/tran-quoc-hung",
    href: "https://linkedin.com/in/tran-quoc-hung",
  },
  {
    platform: "github",
    label: "GitHub",
    value: "github.com/reii-placeholder",
    href: "https://github.com/reii-placeholder",
  },
  {
    platform: "facebook",
    label: "Facebook",
    value: "facebook.com/reii.placeholder",
    href: "https://facebook.com/reii.placeholder",
  },
  {
    platform: "instagram",
    label: "Instagram",
    value: "instagram.com/reii.placeholder",
    href: "https://instagram.com/reii.placeholder",
  },
];

const evidence = {
  bai1: [
    "/artifacts/docx-media/bai-1/bai-1-01.png",
    "/artifacts/docx-media/bai-1/bai-1-02.png",
    "/artifacts/docx-media/bai-1/bai-1-03.png",
    "/artifacts/docx-media/bai-1/bai-1-04.png",
    "/artifacts/docx-media/bai-1/bai-1-05.png",
    "/artifacts/docx-media/bai-1/bai-1-06.png",
    "/artifacts/docx-media/bai-1/bai-1-07.png",
    "/artifacts/docx-media/bai-1/bai-1-08.png",
    "/artifacts/docx-media/bai-1/bai-1-09.png",
    "/artifacts/docx-media/bai-1/bai-1-10.png",
    "/artifacts/docx-media/bai-1/bai-1-11.png",
    "/artifacts/docx-media/bai-1/bai-1-12.png",
  ],
  bai5: [
    "/artifacts/generated/bai-5-ai-education-cover.png",
    "/artifacts/docx-media/bai-5/bai-5-01.png",
    "/artifacts/docx-media/bai-5/bai-5-02.png",
    "/artifacts/docx-media/bai-5/bai-5-03.png",
  ],
  bai6: ["/artifacts/docx-media/bai-6/bai-6-01.png"],
  bai4: ["/artifacts/generated/bai-4-collaboration-board.png"],
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  vi: {
    meta: {
      title: "Portfolio Nhập môn Công nghệ số và AI | Trần Quốc Hưng",
      description:
        "Portfolio đa ngôn ngữ trình bày kết quả bài tập môn Nhập môn Công nghệ số và AI.",
    },
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      roadmap: "Lộ trình",
      assignments: "Bài tập",
      artifacts: "Ấn phẩm",
      contact: "Liên hệ",
    },
    ui: {
      language: "Ngôn ngữ",
      viewAssignments: "Xem bài tập",
      downloadAll: "Tải minh chứng",
      downloadSource: "Tải file gốc",
      viewDetail: "Xem chi tiết",
      selected: "Đang chọn",
      objective: "Mục tiêu",
      process: "Quy trình",
      outcome: "Kết quả",
      evidence: "Minh chứng",
      source: "Tệp gốc",
      replaceLater: "Slot thay sau",
      allFiles: "Tất cả file",
      filters: {
        all: "Tất cả",
        systems: "Hệ thống",
        research: "Nghiên cứu",
        ai: "AI",
        collab: "Hợp tác",
        ethics: "Đạo đức",
      },
    },
    hero: {
      label: "Nhập môn Công nghệ số và AI",
      title: "Portfolio Nhập môn Công nghệ số và AI.",
      subtitle:
        "Trang này tổng hợp kết quả các bài tập 1-7, minh chứng quá trình thực hiện, sản phẩm đã tạo và phần tự phản ánh theo yêu cầu môn học.",
      primaryCta: "Khám phá bài tập",
      secondaryCta: "Xem ấn phẩm",
      stats: [
        { value: "7", label: "bài tập thành phần" },
        { value: "3", label: "ngôn ngữ" },
        { value: "17+", label: "ảnh minh chứng" },
      ],
    },
    profile: {
      name: "Trần Quốc Hưng",
      studentId: "25023277",
      university: "Trường Đại học Công nghệ - ĐHQGHN",
      universityShortName: "UET-VNU",
      intro:
        "Tôi xây dựng portfolio này để trình bày rõ những gì đã thực hành: thao tác hệ thống, tìm kiếm học thuật, prompt engineering, cộng tác trực tuyến, sáng tạo với AI và sử dụng AI có trách nhiệm.",
      focus: [
        "AI-assisted learning",
        "Network security",
        "Digital systems",
        "Responsible research",
      ],
      contacts: contactLinks,
    },
    education: {
      title: "Học vấn",
      degree: "Sinh viên Trường Đại học Công nghệ - ĐHQGHN (UET-VNU)",
      description:
        "Định hướng học tập xoay quanh công nghệ số, an toàn thông tin, tư duy nghiên cứu và khả năng ứng dụng AI trong môi trường học thuật.",
    },
    experience: {
      role: "Intern Network Security",
      company: "VNPT Cyber Immunity",
      period: "Từ tháng 3/2026",
      type: "Internship",
      description:
        "Hỗ trợ học hỏi và thực hành các nền tảng về bảo mật mạng, tư duy phòng thủ, giám sát rủi ro và cách trình bày kết quả kỹ thuật một cách rõ ràng.",
      skills: ["Network security", "Monitoring", "Risk thinking", "Technical reporting"],
    },
    roadmap: {
      title: "Lộ trình và tiêu chí portfolio",
      description:
        "Website được tổ chức theo yêu cầu bài tập dự án cá nhân: giới thiệu bản thân, trình bày đầy đủ bài tập thành phần, lưu trữ minh chứng và tổng kết quá trình học.",
      steps: [
        {
          title: "Thiết lập nền tảng",
          description:
            "Xây dựng website portfolio đa ngôn ngữ, có điều hướng rõ ràng và cấu trúc phù hợp để chấm điểm.",
        },
        {
          title: "Hệ thống hóa kết quả",
          description:
            "Tóm tắt từng bài tập, gắn file gốc, ảnh minh chứng và sản phẩm liên quan vào cùng một trải nghiệm.",
        },
        {
          title: "Hoàn thiện và phản ánh",
          description:
            "Tổng kết kỹ năng đã học, nêu điểm nổi bật, thách thức và cách sử dụng AI có trách nhiệm.",
        },
      ],
      rubric: [
        {
          title: "Xuất sắc",
          range: "8.1-10",
          description:
            "Trình bày chuyên nghiệp, đầy đủ minh chứng, có chiều sâu phân tích và tính cá nhân rõ ràng.",
        },
        {
          title: "Tốt",
          range: "6.1-8",
          description:
            "Hoàn thành hầu hết yêu cầu, bố cục rõ, nội dung ổn định và không vi phạm liêm chính học thuật.",
        },
        {
          title: "Trung bình",
          range: "4.1-6",
          description:
            "Có đủ cấu trúc cơ bản nhưng minh chứng hoặc phân tích còn thiếu chiều sâu.",
        },
        {
          title: "Cần cải thiện",
          range: "Dưới 4",
          description:
            "Thiếu nội dung, thiếu minh chứng hoặc chưa đáp ứng yêu cầu sản phẩm.",
        },
      ],
    },
    assignmentsIntro: {
      title: "Thư viện bài tập",
      description:
        "Bảy bài tập được đặt ngang hàng để người xem dễ so sánh mục tiêu, quy trình, kết quả và minh chứng.",
    },
    assignments: [
      {
        id: "bai-1",
        number: "01",
        title: "Thao tác cơ bản với tệp và thư mục",
        theme: "Hệ thống tệp",
        objective:
          "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp trong Windows.",
        summary:
          "Bài tập mô phỏng quy trình quản lý file từ File Explorer, Documents, thư mục con đến Recycle Bin.",
        process: [
          "Tạo thư mục ThucHanh_HoTenSinhVien trong Documents.",
          "Tạo, đổi tên, sao chép và di chuyển các tệp văn bản.",
          "Xóa tệp, xóa vĩnh viễn và khôi phục từ Recycle Bin.",
        ],
        outcome:
          "Nắm được thao tác nền tảng với tệp và thư mục, kèm 12 ảnh chụp màn hình minh chứng.",
        tags: ["Windows", "File Explorer", "Workflow"],
        filters: ["systems"],
        sourceFile: "/files/bai-1.docx",
        evidence: evidence.bai1,
        artifactIds: ["artifact-bai1-screens"],
      },
      {
        id: "bai-2",
        number: "02",
        title: "Tìm kiếm và đánh giá thông tin học thuật",
        theme: "Generative AI trong Requirements Elicitation",
        objective:
          "Tìm, lọc và đánh giá tài liệu học thuật về ứng dụng Generative AI trong thu thập yêu cầu phần mềm.",
        summary:
          "Bài báo cáo tổng hợp nguồn từ Google Scholar, IEEE Xplore, ScienceDirect, MDPI và arXiv, tập trung giai đoạn 2023-2025.",
        process: [
          "Xác định từ khóa và cơ sở dữ liệu học thuật.",
          "Đánh giá độ tin cậy, phương pháp nghiên cứu và tính cập nhật của tài liệu.",
          "Tổng hợp rủi ro như hallucination, khả năng tái lập và vai trò human-in-the-loop.",
        ],
        outcome:
          "Rút ra bức tranh nghiên cứu về LLMs trong Requirements Engineering và kỹ năng prompt như một năng lực cốt lõi.",
        tags: ["Research", "Requirements Engineering", "GenAI"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-2.docx",
        evidence: [],
        artifactIds: ["artifact-research-table"],
      },
      {
        id: "bai-3",
        number: "03",
        title: "Viết prompt hiệu quả cho học tập",
        theme: "Prompt engineering",
        objective:
          "So sánh prompt cơ bản, cải tiến và nâng cao cho tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập.",
        summary:
          "Bài tập chứng minh rằng vai trò, ngữ cảnh, cấu trúc đầu ra và đối tượng người học ảnh hưởng lớn đến chất lượng phản hồi AI.",
        process: [
          "Thiết kế ba mức prompt cho biến đổi khí hậu, máy tính lượng tử và Thế chiến II.",
          "So sánh chất lượng đầu ra giữa prompt chung chung và prompt có cấu trúc.",
          "Rút ra framework 5C: Character, Context, Clear Instructions, Constraints, Chain of thought.",
        ],
        outcome:
          "Hình thành bộ nguyên tắc viết prompt có thể tái sử dụng trong học tập và tự ôn luyện.",
        tags: ["Prompt", "LLM", "Learning"],
        filters: ["ai"],
        sourceFile: "/files/bai-3.docx",
        evidence: [],
        artifactIds: ["artifact-prompt-framework"],
      },
      {
        id: "bai-4",
        number: "04",
        title: "Sử dụng công cụ hợp tác trực tuyến",
        theme: "Notion + Trello mock workflow",
        objective:
          "Mô phỏng việc dùng công cụ quản lý dự án nhóm để phân công, theo dõi tiến độ, lưu meeting notes và chia sẻ tài liệu.",
        summary:
          "Bài 4 được bổ sung bằng mock data: nhóm học tập có board nhiệm vụ, timeline, ghi chú họp, trạng thái tài liệu và quy tắc phối hợp.",
        process: [
          "Tạo workspace giả lập gồm tài liệu dự án, kanban board và checklist minh chứng.",
          "Phân vai nhóm: research, drafting, design, review và submission.",
          "Theo dõi tiến độ qua các cột To do, In progress, Review và Done.",
        ],
        outcome:
          "Có một bộ minh chứng hợp tác trực tuyến đủ để trình bày cách phối hợp nhóm và quản lý tiến độ.",
        tags: ["Collaboration", "Notion", "Trello"],
        filters: ["collab"],
        sourceFile: "/files/bai-4-mock-collaboration.md",
        evidence: evidence.bai4,
        artifactIds: ["artifact-bai4-board"],
      },
      {
        id: "bai-5",
        number: "05",
        title: "Sáng tạo nội dung với AI",
        theme: "Blog AI trong giáo dục",
        objective:
          "Tạo bài viết blog về tác động của AI đối với giáo dục hiện đại, kết hợp văn bản, hình ảnh và biên tập thủ công.",
        summary:
          "Bài tập sử dụng Gemini để lên dàn ý và bản nháp, DALL-E 3 để tạo hình ảnh, Canva AI để chỉnh sửa bố cục.",
        process: [
          "Tạo dàn ý và phần nội dung chính bằng công cụ AI tạo văn bản.",
          "Tạo ảnh minh họa, chỉnh sửa lỗi và thiết kế cover bằng công cụ hỗ trợ thiết kế.",
          "Biên tập lại để thân thiện hơn với bối cảnh học sinh Việt Nam.",
        ],
        outcome:
          "Sản phẩm thể hiện mô hình human-in-the-loop: AI tạo bản thô, người học kiểm chứng và hoàn thiện.",
        tags: ["Creative AI", "Blog", "Canva"],
        filters: ["ai"],
        sourceFile: "/files/bai-5.docx",
        evidence: evidence.bai5,
        artifactIds: ["artifact-bai5-cover", "artifact-bai5-docx"],
      },
      {
        id: "bai-6",
        number: "06",
        title: "Sử dụng AI có trách nhiệm trong học tập",
        theme: "RMIT policy analysis",
        objective:
          "Phân tích cách một trường đại học định hướng sinh viên sử dụng AI trong học tập, nghiên cứu và đánh giá.",
        summary:
          "Báo cáo tập trung vào nguyên tắc kiểm chứng, minh bạch, bảo vệ dữ liệu và không dùng AI thay thế tư duy người học.",
        process: [
          "Đọc chính sách liêm chính học thuật và hướng dẫn AI trong học tập.",
          "Dùng AI để hỗ trợ lập khung nghiên cứu, sau đó đối chiếu với nguồn chính thức.",
          "Xây dựng nguyên tắc cá nhân về sử dụng AI an toàn và có trách nhiệm.",
        ],
        outcome:
          "Tạo bộ nguyên tắc thực hành giúp dùng AI như công cụ hỗ trợ thay vì thay thế tác giả.",
        tags: ["Responsible AI", "Academic integrity", "Policy"],
        filters: ["ai", "ethics", "research"],
        sourceFile: "/files/bai-6.docx",
        evidence: evidence.bai6,
        artifactIds: ["artifact-bai6-policy"],
      },
      {
        id: "bai-7",
        number: "07",
        title: "Tổng quan tài liệu khoa học bằng AI",
        theme: "MOFs cho thu hồi CO2",
        objective:
          "Sử dụng Consensus và Elicit để tìm, trích xuất và so sánh tài liệu khoa học về vật liệu MOFs trong thu hồi CO2.",
        summary:
          "Bài tập tổng hợp sáu bài báo, so sánh vật liệu như ZIFs, HKUST-1, Mg-MOF-74, CALF-20, UiO-66 và MIL-101.",
        process: [
          "Xác định câu hỏi nghiên cứu về thu hồi CO2 từ khí thải công nghiệp.",
          "Trích xuất phương pháp, vật liệu, kết quả, ưu điểm và hạn chế từ các bài báo.",
          "Tổng hợp ba hướng nghiên cứu: bền ẩm, tăng ái lực CO2 và sàng lọc bằng machine learning.",
        ],
        outcome:
          "Hiểu cách AI hỗ trợ tổng quan tài liệu nhưng vẫn cần người học kiểm chứng và diễn giải kết quả.",
        tags: ["Literature review", "MOFs", "CO2 capture"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-7.docx",
        evidence: [],
        artifactIds: ["artifact-mof-map"],
      },
    ],
    artifactsIntro: {
      title: "Ấn phẩm và minh chứng",
      description:
        "Khu vực này gom ảnh chụp, cover blog, mock board và các slot trống để bạn thay bằng sản phẩm thật khi hoàn thiện.",
    },
    artifacts: [
      {
        id: "artifact-bai1-screens",
        title: "Bộ ảnh thao tác Windows",
        kind: "Screenshot set",
        description: "12 ảnh chụp minh chứng quy trình tạo, sao chép, di chuyển và khôi phục tệp.",
        image: evidence.bai1[0],
        source: "/files/bai-1.docx",
        assignmentId: "bai-1",
      },
      {
        id: "artifact-bai4-board",
        title: "Mock board hợp tác nhóm",
        kind: "Generated mock",
        description: "Workspace giả lập Notion + Trello cho bài về hợp tác trực tuyến.",
        image: "/artifacts/generated/bai-4-collaboration-board.png",
        source: "/files/bai-4-mock-collaboration.md",
        assignmentId: "bai-4",
      },
      {
        id: "artifact-bai5-cover",
        title: "Cover blog AI trong giáo dục",
        kind: "Generated cover",
        description: "Ảnh cover 16:9 để đặt tiêu đề bài blog bằng HTML trong website.",
        image: "/artifacts/generated/bai-5-ai-education-cover.png",
        source: "/files/bai-5.docx",
        assignmentId: "bai-5",
      },
      {
        id: "artifact-bai6-policy",
        title: "Responsible AI policy note",
        kind: "Document evidence",
        description: "Ảnh minh chứng và tài liệu phân tích chính sách sử dụng AI có trách nhiệm.",
        image: evidence.bai6[0],
        source: "/files/bai-6.docx",
        assignmentId: "bai-6",
      },
      {
        id: "artifact-replace-1",
        title: "Slot ảnh sản phẩm",
        kind: "Replaceable",
        description: "Dành cho ảnh ấn phẩm hoặc screenshot bạn muốn thêm sau.",
        placeholder: true,
      },
      {
        id: "artifact-replace-2",
        title: "Slot video hoặc link demo",
        kind: "Replaceable",
        description: "Dành cho video demo, link Canva, link blog hoặc tài liệu bổ sung.",
        placeholder: true,
      },
    ],
    summary: {
      title: "Tổng kết học tập",
      statement:
        "Portfolio này không chỉ lưu bài nộp, mà còn cho thấy cách tôi biến các yêu cầu rời rạc thành một hệ thống trình bày có cấu trúc, có minh chứng và có trách nhiệm.",
      pillars: [
        {
          title: "Kỹ năng số nền tảng",
          description:
            "Từ thao tác file đến quản lý minh chứng, tôi luyện khả năng tổ chức thông tin sao cho dễ kiểm tra.",
        },
        {
          title: "AI như cộng sự học tập",
          description:
            "AI hỗ trợ tạo ý tưởng, tóm tắt, hình ảnh và phản biện, nhưng sản phẩm cuối vẫn cần người học kiểm chứng.",
        },
        {
          title: "Liêm chính và trách nhiệm",
          description:
            "Mỗi bài đều nhấn mạnh minh bạch nguồn hỗ trợ, kiểm tra độ tin cậy và giữ vai trò tác giả của người học.",
        },
      ],
    },
    contact: {
      title: "Liên hệ cá nhân",
      description:
        "Các liên kết dưới đây là mock data để giữ layout hoàn chỉnh. Bạn có thể thay bằng thông tin thật trong file data.",
    },
    footer: {
      note: "Portfolio Nhập môn Công nghệ số và AI, xây dựng bằng Next.js.",
    },
  },
  en: {
    meta: {
      title: "Introduction to Digital Technology and AI Portfolio | Tran Quoc Hung",
      description:
        "A multilingual portfolio presenting coursework for Introduction to Digital Technology and AI.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      roadmap: "Roadmap",
      assignments: "Assignments",
      artifacts: "Artifacts",
      contact: "Contact",
    },
    ui: {
      language: "Language",
      viewAssignments: "View assignments",
      downloadAll: "Download evidence",
      downloadSource: "Download source",
      viewDetail: "View detail",
      selected: "Selected",
      objective: "Objective",
      process: "Process",
      outcome: "Outcome",
      evidence: "Evidence",
      source: "Source file",
      replaceLater: "Replace later",
      allFiles: "All files",
      filters: {
        all: "All",
        systems: "Systems",
        research: "Research",
        ai: "AI",
        collab: "Collaboration",
        ethics: "Ethics",
      },
    },
    hero: {
      label: "Introduction to Digital Technology and AI",
      title: "Introduction to Digital Technology and AI Portfolio.",
      subtitle:
        "This site consolidates assignments 1-7, process evidence, created artifacts, and a personal reflection aligned with the course requirements.",
      primaryCta: "Explore assignments",
      secondaryCta: "View artifacts",
      stats: [
        { value: "7", label: "component assignments" },
        { value: "3", label: "languages" },
        { value: "17+", label: "evidence images" },
      ],
    },
    profile: {
      name: "Tran Quoc Hung",
      studentId: "25023277",
      university:
        "University of Engineering and Technology, Vietnam National University, Hanoi",
      universityShortName: "UET-VNU",
      intro:
        "I built this portfolio to clearly present what I practiced: operating systems, academic search, prompt engineering, online collaboration, AI-assisted content creation, and responsible AI use.",
      focus: [
        "AI-assisted learning",
        "Network security",
        "Digital systems",
        "Responsible research",
      ],
      contacts: contactLinks,
    },
    education: {
      title: "Education",
      degree:
        "Student at University of Engineering and Technology, Vietnam National University, Hanoi (UET-VNU)",
      description:
        "My learning direction combines digital technology, information security, research thinking, and practical AI adoption in academic work.",
    },
    experience: {
      role: "Intern Network Security",
      company: "VNPT Cyber Immunity",
      period: "Since March 2026",
      type: "Internship",
      description:
        "Learning and practicing network security foundations, defensive thinking, risk monitoring, and clear technical reporting.",
      skills: ["Network security", "Monitoring", "Risk thinking", "Technical reporting"],
    },
    roadmap: {
      title: "Portfolio roadmap and rubric",
      description:
        "The website follows the personal project requirements: introduce the learner, present every assignment, preserve evidence, and summarize the learning journey.",
      steps: [
        {
          title: "Set up the foundation",
          description:
            "Build a multilingual portfolio website with clear navigation and an assessment-friendly structure.",
        },
        {
          title: "Systemize the outcomes",
          description:
            "Connect each assignment with its summary, original file, screenshots, and related artifacts.",
        },
        {
          title: "Finalize and reflect",
          description:
            "Summarize acquired skills, strong points, challenges, and responsible AI practice.",
        },
      ],
      rubric: [
        {
          title: "Excellent",
          range: "8.1-10",
          description:
            "Professional presentation, complete evidence, strong analysis, and a clear personal voice.",
        },
        {
          title: "Good",
          range: "6.1-8",
          description:
            "Most requirements are complete, the structure is clear, and academic integrity is maintained.",
        },
        {
          title: "Average",
          range: "4.1-6",
          description:
            "The basic structure exists, but evidence or analysis still lacks depth.",
        },
        {
          title: "Needs improvement",
          range: "Below 4",
          description:
            "Missing content, weak evidence, or incomplete product requirements.",
        },
      ],
    },
    assignmentsIntro: {
      title: "Assignment library",
      description:
        "All seven assignments are presented with equal weight so viewers can compare objectives, process, outcomes, and evidence.",
    },
    assignments: [
      {
        id: "bai-1",
        number: "01",
        title: "Basic file and folder operations",
        theme: "File system",
        objective:
          "Practice creating, renaming, copying, moving, deleting, and restoring files in Windows.",
        summary:
          "The exercise simulates file management through File Explorer, Documents, subfolders, and Recycle Bin.",
        process: [
          "Create the ThucHanh_HoTenSinhVien folder in Documents.",
          "Create, rename, copy, and move text files.",
          "Delete files, permanently delete files, and restore from Recycle Bin.",
        ],
        outcome:
          "The assignment demonstrates foundational file management skills with 12 screenshots as evidence.",
        tags: ["Windows", "File Explorer", "Workflow"],
        filters: ["systems"],
        sourceFile: "/files/bai-1.docx",
        evidence: evidence.bai1,
        artifactIds: ["artifact-bai1-screens"],
      },
      {
        id: "bai-2",
        number: "02",
        title: "Searching and evaluating academic information",
        theme: "Generative AI in requirements elicitation",
        objective:
          "Find, filter, and evaluate academic sources about Generative AI in software requirements elicitation.",
        summary:
          "The report synthesizes sources from Google Scholar, IEEE Xplore, ScienceDirect, MDPI, and arXiv, focusing on 2023-2025.",
        process: [
          "Define keywords and academic databases.",
          "Evaluate reliability, research methods, and recency.",
          "Synthesize risks such as hallucination, reproducibility, and the human-in-the-loop role.",
        ],
        outcome:
          "The report builds a research view of LLMs in Requirements Engineering and identifies prompting as a core skill.",
        tags: ["Research", "Requirements Engineering", "GenAI"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-2.docx",
        evidence: [],
        artifactIds: ["artifact-research-table"],
      },
      {
        id: "bai-3",
        number: "03",
        title: "Effective prompting for learning",
        theme: "Prompt engineering",
        objective:
          "Compare basic, improved, and advanced prompts for summarization, concept explanation, and quiz generation.",
        summary:
          "The exercise shows how role, context, output structure, and target audience shape the quality of AI responses.",
        process: [
          "Design three prompt levels for climate change, quantum computing, and World War II.",
          "Compare generic prompts against structured prompts.",
          "Extract the 5C framework: Character, Context, Clear Instructions, Constraints, Chain of thought.",
        ],
        outcome:
          "The assignment produces a reusable prompting framework for study and review tasks.",
        tags: ["Prompt", "LLM", "Learning"],
        filters: ["ai"],
        sourceFile: "/files/bai-3.docx",
        evidence: [],
        artifactIds: ["artifact-prompt-framework"],
      },
      {
        id: "bai-4",
        number: "04",
        title: "Using online collaboration tools",
        theme: "Notion + Trello mock workflow",
        objective:
          "Simulate the use of project collaboration tools for task assignment, progress tracking, meeting notes, and file sharing.",
        summary:
          "Assignment 4 is filled with mock data: a study group workspace with a task board, timeline, meeting notes, document status, and collaboration rules.",
        process: [
          "Create a fictional workspace with project documentation, kanban board, and evidence checklist.",
          "Assign roles for research, drafting, design, review, and submission.",
          "Track progress through To do, In progress, Review, and Done columns.",
        ],
        outcome:
          "The mock evidence explains how online collaboration can coordinate group work and manage progress.",
        tags: ["Collaboration", "Notion", "Trello"],
        filters: ["collab"],
        sourceFile: "/files/bai-4-mock-collaboration.md",
        evidence: evidence.bai4,
        artifactIds: ["artifact-bai4-board"],
      },
      {
        id: "bai-5",
        number: "05",
        title: "Creating content with AI",
        theme: "AI in education blog",
        objective:
          "Create a blog article about the impact of AI on modern education, combining text, visuals, and human editing.",
        summary:
          "The assignment uses Gemini for outline and draft writing, DALL-E 3 for images, and Canva AI for visual layout refinement.",
        process: [
          "Generate an outline and core text with an AI writing tool.",
          "Create supporting images, fix issues, and design a cover with an AI-assisted design tool.",
          "Edit the writing to make it more relatable to Vietnamese learners.",
        ],
        outcome:
          "The product demonstrates a human-in-the-loop process: AI drafts, while the learner verifies and improves the final work.",
        tags: ["Creative AI", "Blog", "Canva"],
        filters: ["ai"],
        sourceFile: "/files/bai-5.docx",
        evidence: evidence.bai5,
        artifactIds: ["artifact-bai5-cover", "artifact-bai5-docx"],
      },
      {
        id: "bai-6",
        number: "06",
        title: "Responsible AI use in learning",
        theme: "RMIT policy analysis",
        objective:
          "Analyze how a university guides students to use AI in learning, research, and assessment.",
        summary:
          "The report focuses on verification, transparency, data protection, and avoiding the use of AI as a replacement for student thinking.",
        process: [
          "Read academic integrity policy and guidance on AI in learning.",
          "Use AI to support research framing, then check claims against official sources.",
          "Build personal principles for safe and responsible AI use.",
        ],
        outcome:
          "The assignment creates a practical principle set for using AI as support rather than as a substitute author.",
        tags: ["Responsible AI", "Academic integrity", "Policy"],
        filters: ["ai", "ethics", "research"],
        sourceFile: "/files/bai-6.docx",
        evidence: evidence.bai6,
        artifactIds: ["artifact-bai6-policy"],
      },
      {
        id: "bai-7",
        number: "07",
        title: "AI-assisted scientific literature review",
        theme: "MOFs for CO2 capture",
        objective:
          "Use Consensus and Elicit to find, extract, and compare scientific literature on MOF materials for CO2 capture.",
        summary:
          "The assignment compares six papers and materials such as ZIFs, HKUST-1, Mg-MOF-74, CALF-20, UiO-66, and MIL-101.",
        process: [
          "Define a research question on CO2 capture from industrial flue gas.",
          "Extract methods, materials, outcomes, advantages, and limitations from selected papers.",
          "Synthesize three research directions: humidity stability, CO2 affinity, and machine learning screening.",
        ],
        outcome:
          "The exercise shows how AI can accelerate literature review while still requiring human verification and interpretation.",
        tags: ["Literature review", "MOFs", "CO2 capture"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-7.docx",
        evidence: [],
        artifactIds: ["artifact-mof-map"],
      },
    ],
    artifactsIntro: {
      title: "Artifacts and evidence",
      description:
        "This shelf collects screenshots, blog covers, mock boards, and replaceable slots for future finished products.",
    },
    artifacts: [
      {
        id: "artifact-bai1-screens",
        title: "Windows operation screenshots",
        kind: "Screenshot set",
        description: "12 screenshots showing file creation, copying, moving, deletion, and restoration.",
        image: evidence.bai1[0],
        source: "/files/bai-1.docx",
        assignmentId: "bai-1",
      },
      {
        id: "artifact-bai4-board",
        title: "Collaboration mock board",
        kind: "Generated mock",
        description: "A fictional Notion + Trello style workspace for the online collaboration assignment.",
        image: "/artifacts/generated/bai-4-collaboration-board.png",
        source: "/files/bai-4-mock-collaboration.md",
        assignmentId: "bai-4",
      },
      {
        id: "artifact-bai5-cover",
        title: "AI in education blog cover",
        kind: "Generated cover",
        description: "A 16:9 cover image ready for code-native blog title overlay.",
        image: "/artifacts/generated/bai-5-ai-education-cover.png",
        source: "/files/bai-5.docx",
        assignmentId: "bai-5",
      },
      {
        id: "artifact-bai6-policy",
        title: "Responsible AI policy note",
        kind: "Document evidence",
        description: "Evidence image and report file for the responsible AI policy analysis.",
        image: evidence.bai6[0],
        source: "/files/bai-6.docx",
        assignmentId: "bai-6",
      },
      {
        id: "artifact-replace-1",
        title: "Product image slot",
        kind: "Replaceable",
        description: "Reserved for a finished artifact or screenshot you want to add later.",
        placeholder: true,
      },
      {
        id: "artifact-replace-2",
        title: "Video or demo link slot",
        kind: "Replaceable",
        description: "Reserved for a demo video, Canva link, blog link, or extra document.",
        placeholder: true,
      },
    ],
    summary: {
      title: "Learning summary",
      statement:
        "This portfolio is more than file storage. It turns separate assignments into a structured, evidence-backed, and responsible learning narrative.",
      pillars: [
        {
          title: "Digital foundations",
          description:
            "From file operations to evidence management, I practiced organizing information for easy review.",
        },
        {
          title: "AI as a learning partner",
          description:
            "AI can support ideation, summarization, image creation, and critique, but final work still needs human verification.",
        },
        {
          title: "Integrity and responsibility",
          description:
            "The assignments emphasize transparent assistance, source checking, and student authorship.",
        },
      ],
    },
    contact: {
      title: "Personal contact",
      description:
        "These links use mock data to keep the layout complete. Replace them in the data file when ready.",
    },
    footer: {
      note: "Introduction to Digital Technology and AI portfolio built with Next.js.",
    },
  },
  zh: {
    meta: {
      title: "数字技术与 AI 入门作品集 | Tran Quoc Hung",
      description:
        "一个多语言作品集，用于展示数字技术与 AI 入门课程的学习成果。",
    },
    nav: {
      about: "简介",
      experience: "经历",
      roadmap: "路线",
      assignments: "作业",
      artifacts: "作品",
      contact: "联系",
    },
    ui: {
      language: "语言",
      viewAssignments: "查看作业",
      downloadAll: "下载证据",
      downloadSource: "下载源文件",
      viewDetail: "查看详情",
      selected: "当前选择",
      objective: "目标",
      process: "过程",
      outcome: "结果",
      evidence: "证据",
      source: "源文件",
      replaceLater: "之后替换",
      allFiles: "所有文件",
      filters: {
        all: "全部",
        systems: "系统",
        research: "研究",
        ai: "AI",
        collab: "协作",
        ethics: "伦理",
      },
    },
    hero: {
      label: "数字技术与 AI 入门",
      title: "数字技术与 AI 入门作品集。",
      subtitle:
        "本网站整合作业 1-7、过程证据、生成作品以及符合课程要求的个人反思。",
      primaryCta: "浏览作业",
      secondaryCta: "查看作品",
      stats: [
        { value: "7", label: "项课程作业" },
        { value: "3", label: "种语言" },
        { value: "17+", label: "张证据图片" },
      ],
    },
    profile: {
      name: "Tran Quoc Hung",
      studentId: "25023277",
      university: "越南国家大学河内校区 工程技术大学",
      universityShortName: "UET-VNU",
      intro:
        "我建立这个作品集，是为了清晰展示自己完成的实践内容：系统操作、学术检索、提示词工程、在线协作、AI 辅助内容创作以及负责任地使用 AI。",
      focus: ["AI 辅助学习", "网络安全", "数字系统", "负责任研究"],
      contacts: contactLinks,
    },
    education: {
      title: "教育背景",
      degree: "越南国家大学河内校区 工程技术大学（UET-VNU）学生",
      description:
        "学习方向结合数字技术、信息安全、研究思维以及 AI 在学术环境中的实际应用。",
    },
    experience: {
      role: "网络安全实习生",
      company: "VNPT Cyber Immunity",
      period: "自 2026 年 3 月起",
      type: "实习",
      description:
        "学习并实践网络安全基础、防御思维、风险监测以及清晰表达技术结果的方法。",
      skills: ["网络安全", "监测", "风险思维", "技术报告"],
    },
    roadmap: {
      title: "作品集路线与评分标准",
      description:
        "网站按照个人项目要求组织：介绍学习者、展示每项作业、保存证据并总结学习过程。",
      steps: [
        {
          title: "建立基础",
          description:
            "构建多语言作品集网站，提供清晰导航和便于评分的结构。",
        },
        {
          title: "整理成果",
          description:
            "将每项作业与摘要、源文件、截图和相关作品连接起来。",
        },
        {
          title: "完善与反思",
          description:
            "总结已获得的技能、亮点、挑战以及负责任使用 AI 的方式。",
        },
      ],
      rubric: [
        {
          title: "优秀",
          range: "8.1-10",
          description:
            "展示专业，证据完整，分析深入，并且具有清晰的个人表达。",
        },
        {
          title: "良好",
          range: "6.1-8",
          description:
            "大多数要求已完成，结构清楚，并保持学术诚信。",
        },
        {
          title: "中等",
          range: "4.1-6",
          description:
            "具备基本结构，但证据或分析深度仍需加强。",
        },
        {
          title: "需要改进",
          range: "低于 4",
          description:
            "内容缺失、证据不足，或产品要求尚未完成。",
        },
      ],
    },
    assignmentsIntro: {
      title: "作业库",
      description:
        "七项作业以同等权重展示，便于比较目标、过程、结果和证据。",
    },
    assignments: [
      {
        id: "bai-1",
        number: "01",
        title: "文件与文件夹基础操作",
        theme: "文件系统",
        objective:
          "练习在 Windows 中创建、重命名、复制、移动、删除和恢复文件。",
        summary:
          "该练习通过 File Explorer、Documents、子文件夹和 Recycle Bin 模拟文件管理流程。",
        process: [
          "在 Documents 中创建 ThucHanh_HoTenSinhVien 文件夹。",
          "创建、重命名、复制和移动文本文件。",
          "删除文件、永久删除文件，并从 Recycle Bin 恢复。",
        ],
        outcome:
          "作业展示了基础文件管理技能，并附有 12 张截图作为证据。",
        tags: ["Windows", "File Explorer", "Workflow"],
        filters: ["systems"],
        sourceFile: "/files/bai-1.docx",
        evidence: evidence.bai1,
        artifactIds: ["artifact-bai1-screens"],
      },
      {
        id: "bai-2",
        number: "02",
        title: "搜索与评估学术信息",
        theme: "需求获取中的生成式 AI",
        objective:
          "查找、筛选并评估关于生成式 AI 在软件需求获取中应用的学术资料。",
        summary:
          "报告综合 Google Scholar、IEEE Xplore、ScienceDirect、MDPI 和 arXiv 的资料，重点关注 2023-2025 年。",
        process: [
          "确定关键词和学术数据库。",
          "评估资料的可信度、研究方法和时效性。",
          "总结幻觉、可复现性和人类参与等风险。",
        ],
        outcome:
          "报告建立了 LLMs 在需求工程中的研究视角，并将提示词能力识别为核心技能。",
        tags: ["Research", "Requirements Engineering", "GenAI"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-2.docx",
        evidence: [],
        artifactIds: ["artifact-research-table"],
      },
      {
        id: "bai-3",
        number: "03",
        title: "学习中的高效提示词",
        theme: "提示词工程",
        objective:
          "比较基础、改进和高级提示词在摘要、概念解释和测验生成中的效果。",
        summary:
          "练习说明角色、语境、输出结构和目标读者会显著影响 AI 回答质量。",
        process: [
          "为气候变化、量子计算和第二次世界大战设计三层提示词。",
          "比较普通提示词与结构化提示词的输出质量。",
          "提炼 5C 框架：Character、Context、Clear Instructions、Constraints、Chain of thought。",
        ],
        outcome:
          "作业形成了一套可复用的学习和复习提示词框架。",
        tags: ["Prompt", "LLM", "Learning"],
        filters: ["ai"],
        sourceFile: "/files/bai-3.docx",
        evidence: [],
        artifactIds: ["artifact-prompt-framework"],
      },
      {
        id: "bai-4",
        number: "04",
        title: "使用在线协作工具",
        theme: "Notion + Trello 模拟流程",
        objective:
          "模拟使用项目协作工具进行任务分配、进度跟踪、会议记录和文件共享。",
        summary:
          "第 4 项作业使用模拟数据：学习小组工作区包含任务看板、时间线、会议记录、文档状态和协作规则。",
        process: [
          "创建包含项目文档、看板和证据清单的虚拟工作区。",
          "分配研究、撰写、设计、审阅和提交角色。",
          "通过 To do、In progress、Review 和 Done 跟踪进度。",
        ],
        outcome:
          "模拟证据说明在线协作如何帮助小组协调工作和管理进度。",
        tags: ["Collaboration", "Notion", "Trello"],
        filters: ["collab"],
        sourceFile: "/files/bai-4-mock-collaboration.md",
        evidence: evidence.bai4,
        artifactIds: ["artifact-bai4-board"],
      },
      {
        id: "bai-5",
        number: "05",
        title: "使用 AI 创作内容",
        theme: "AI 与教育博客",
        objective:
          "创作一篇关于 AI 对现代教育影响的博客文章，结合文本、图像和人工编辑。",
        summary:
          "作业使用 Gemini 生成大纲和草稿，使用 DALL-E 3 生成图像，并用 Canva AI 优化视觉布局。",
        process: [
          "使用 AI 写作工具生成大纲和核心文本。",
          "创建辅助图像、修正问题，并使用 AI 设计工具制作封面。",
          "编辑文本，使其更贴近越南学习者的语境。",
        ],
        outcome:
          "作品展示了 human-in-the-loop 流程：AI 生成草稿，学习者验证并完善最终成果。",
        tags: ["Creative AI", "Blog", "Canva"],
        filters: ["ai"],
        sourceFile: "/files/bai-5.docx",
        evidence: evidence.bai5,
        artifactIds: ["artifact-bai5-cover", "artifact-bai5-docx"],
      },
      {
        id: "bai-6",
        number: "06",
        title: "学习中负责任地使用 AI",
        theme: "RMIT 政策分析",
        objective:
          "分析大学如何指导学生在学习、研究和评估中使用 AI。",
        summary:
          "报告重点关注验证、透明度、数据保护，以及避免用 AI 替代学生思考。",
        process: [
          "阅读学术诚信政策和 AI 学习指南。",
          "使用 AI 辅助研究框架，然后对照官方来源核查观点。",
          "建立个人安全、负责任使用 AI 的原则。",
        ],
        outcome:
          "作业形成了一套实践原则，帮助把 AI 作为支持工具，而不是替代作者。",
        tags: ["Responsible AI", "Academic integrity", "Policy"],
        filters: ["ai", "ethics", "research"],
        sourceFile: "/files/bai-6.docx",
        evidence: evidence.bai6,
        artifactIds: ["artifact-bai6-policy"],
      },
      {
        id: "bai-7",
        number: "07",
        title: "AI 辅助科学文献综述",
        theme: "用于 CO2 捕获的 MOFs",
        objective:
          "使用 Consensus 和 Elicit 查找、提取并比较关于 MOF 材料捕获 CO2 的科学文献。",
        summary:
          "作业比较六篇论文以及 ZIFs、HKUST-1、Mg-MOF-74、CALF-20、UiO-66 和 MIL-101 等材料。",
        process: [
          "确定关于工业烟气 CO2 捕获的研究问题。",
          "从论文中提取方法、材料、结果、优点和限制。",
          "总结三个研究方向：耐湿稳定性、CO2 亲和力和机器学习筛选。",
        ],
        outcome:
          "练习说明 AI 可以加速文献综述，但仍需要人类进行验证和解释。",
        tags: ["Literature review", "MOFs", "CO2 capture"],
        filters: ["research", "ai"],
        sourceFile: "/files/bai-7.docx",
        evidence: [],
        artifactIds: ["artifact-mof-map"],
      },
    ],
    artifactsIntro: {
      title: "作品与证据",
      description:
        "这里收集截图、博客封面、模拟看板，以及之后可替换的成品展示位置。",
    },
    artifacts: [
      {
        id: "artifact-bai1-screens",
        title: "Windows 操作截图",
        kind: "截图集合",
        description: "12 张截图展示文件创建、复制、移动、删除和恢复过程。",
        image: evidence.bai1[0],
        source: "/files/bai-1.docx",
        assignmentId: "bai-1",
      },
      {
        id: "artifact-bai4-board",
        title: "协作模拟看板",
        kind: "生成模拟",
        description: "用于在线协作作业的虚拟 Notion + Trello 风格工作区。",
        image: "/artifacts/generated/bai-4-collaboration-board.png",
        source: "/files/bai-4-mock-collaboration.md",
        assignmentId: "bai-4",
      },
      {
        id: "artifact-bai5-cover",
        title: "AI 教育博客封面",
        kind: "生成封面",
        description: "16:9 封面图，可在网站中用 HTML 添加博客标题。",
        image: "/artifacts/generated/bai-5-ai-education-cover.png",
        source: "/files/bai-5.docx",
        assignmentId: "bai-5",
      },
      {
        id: "artifact-bai6-policy",
        title: "负责任 AI 政策笔记",
        kind: "文档证据",
        description: "用于负责任 AI 政策分析的证据图片和报告文件。",
        image: evidence.bai6[0],
        source: "/files/bai-6.docx",
        assignmentId: "bai-6",
      },
      {
        id: "artifact-replace-1",
        title: "产品图片位置",
        kind: "可替换",
        description: "预留给之后要添加的成品或截图。",
        placeholder: true,
      },
      {
        id: "artifact-replace-2",
        title: "视频或演示链接位置",
        kind: "可替换",
        description: "预留给演示视频、Canva 链接、博客链接或补充文档。",
        placeholder: true,
      },
    ],
    summary: {
      title: "学习总结",
      statement:
        "这个作品集不只是文件存储，而是把分散的作业转化为一个结构清晰、有证据支持、并强调责任意识的学习叙事。",
      pillars: [
        {
          title: "数字基础能力",
          description:
            "从文件操作到证据管理，我练习了如何组织信息以便审阅。",
        },
        {
          title: "AI 作为学习伙伴",
          description:
            "AI 可以支持构思、总结、图像生成和批判性反馈，但最终成果仍需要人类验证。",
        },
        {
          title: "诚信与责任",
          description:
            "这些作业强调透明说明辅助来源、检查可信度，并保持学生本人的作者身份。",
        },
      ],
    },
    contact: {
      title: "个人联系",
      description:
        "以下链接使用模拟数据，以保持布局完整。准备好后可在数据文件中替换为真实信息。",
    },
    footer: {
      note: "使用 Next.js 构建的数字技术与 AI 入门多语言作品集。",
    },
  },
};
