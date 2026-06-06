export const locales = ["vi", "en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type ContactPlatform =
  | "phone"
  | "email"
  | "github"
  | "linkedin"
  | "facebook"
  | "instagram"
  | "music";

export type ContactLink = {
  platform: ContactPlatform;
  label: string;
  value: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  status: string;
};

export type Track = {
  title: string;
  mood: string;
  year: string;
  platform: string;
  description: string;
  href: string;
};

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  body: string[];
};

export type PersonalSiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    signal: string;
    bio: string;
    academic: string;
    work: string;
    music: string;
    notes: string;
    contact: string;
  };
  ui: {
    language: string;
    exploreStory: string;
    contactMe: string;
    viewNote: string;
    backHome: string;
    previousNote: string;
    nextNote: string;
    currentMode: string;
    focusAreas: string;
    selectedTracks: string;
    latestNotes: string;
    sendSignal: string;
    viewGithub: string;
    listenMusic: string;
  };
  hero: {
    alias: string;
    name: string;
    roles: string;
    line: string;
    status: string;
  };
  bio: {
    title: string;
    lead: string;
    quote: string;
    facts: { label: string; value: string }[];
  };
  academic: {
    title: string;
    institution: string;
    institutionShort: string;
    major: string;
    description: string;
    focus: string[];
    signal: string;
  };
  work: {
    title: string;
    company: string;
    role: string;
    period: string;
    description: string;
    focus: string[];
    projects: Project[];
  };
  music: {
    title: string;
    description: string;
    tracks: Track[];
  };
  notes: {
    title: string;
    description: string;
    posts: Note[];
  };
  contact: {
    title: string;
    description: string;
    closing: string;
    links: ContactLink[];
  };
  footer: string;
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const contacts: ContactLink[] = [
  {
    platform: "phone",
    label: "Phone",
    value: "+84 942 491 051",
    href: "tel:+84942491051",
  },
  {
    platform: "email",
    label: "Email",
    value: "kamureii.official@gmail.com",
    href: "mailto:kamureii.official@gmail.com",
  },
  {
    platform: "github",
    label: "GitHub",
    value: "github.com/kamureii",
    href: "https://github.com/kamureii",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/kamureii/",
    href: "https://www.linkedin.com/in/kamureii/",
  },
  {
    platform: "facebook",
    label: "Facebook",
    value: "facebook.com/tqhsiuuu/",
    href: "https://web.facebook.com/tqhsiuuu/",
  },
  {
    platform: "instagram",
    label: "Instagram",
    value: "rxidointhugs",
    href: "https://www.instagram.com/rxidointhugs",
  },
  {
    platform: "music",
    label: "SoundCloud",
    value: "soundcloud.com/kamureii",
    href: "https://soundcloud.com/kamureii",
  },
];

export const siteContent: Record<Locale, PersonalSiteContent> = {
  vi: {
    meta: {
      title: "KAMUREI | Trần Quốc Hưng",
      description:
        "Blog và portfolio cá nhân của Trần Quốc Hưng: Information Systems, network security, fullstack và âm nhạc.",
    },
    nav: {
      signal: "Tín hiệu",
      bio: "Tôi là ai",
      academic: "Học tập",
      work: "Công việc",
      music: "Âm nhạc",
      notes: "Ghi chép",
      contact: "Liên hệ",
    },
    ui: {
      language: "Ngôn ngữ",
      exploreStory: "Khám phá câu chuyện",
      contactMe: "Liên hệ",
      viewNote: "Đọc ghi chép",
      backHome: "Về trang chính",
      previousNote: "Bài trước",
      nextNote: "Bài sau",
      currentMode: "Chế độ hiện tại",
      focusAreas: "Hướng tập trung",
      selectedTracks: "Bản nhạc chọn lọc",
      latestNotes: "Ghi chép mới",
      sendSignal: "Gửi tín hiệu",
      viewGithub: "Xem GitHub",
      listenMusic: "Nghe nhạc",
    },
    hero: {
      alias: "KAMUREI",
      name: "Trần Quốc Hưng",
      roles: "Information Systems · Network Security · Music",
      line: "Tôi quan tâm đến hệ thống thông tin, an toàn mạng và những trải nghiệm số mang nhịp điệu riêng.",
      status: "learning / building / listening",
    },
    bio: {
      title: "Tôi thích những thứ có cấu trúc, nhưng vẫn để lại một nhịp riêng.",
      lead:
        "Tôi là Trần Quốc Hưng, sinh viên Hệ thống Thông tin đang tập trung vào an toàn mạng, hạ tầng bảo mật và kỹ thuật thực hành. Tôi thích xây những thứ vừa hữu dụng vừa có biểu cảm: hệ thống có cấu trúc, giao diện có nhịp điệu và câu chuyện để lại dấu vết.",
      quote:
        "Tôi học tốt nhất khi tự tay xây, quan sát cách mọi thứ vận hành, rồi viết lại điều mình hiểu bằng ngôn ngữ rõ ràng.",
      facts: [
        { label: "Tọa độ", value: "Việt Nam" },
        { label: "Đang học", value: "Hệ thống Thông tin" },
        { label: "Đang khám phá", value: "Network Security" },
        { label: "Ngoài giờ", value: "Làm nhạc" },
      ],
    },
    academic: {
      title: "Học cách nhìn hệ thống như một tổng thể.",
      institution: "Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội",
      institutionShort: "UET-VNU",
      major: "Hệ thống Thông tin",
      description:
        "Nền tảng học tập của tôi kết nối phần mềm, dữ liệu, mạng máy tính và tư duy hệ thống. Mục tiêu không chỉ là biết một công cụ, mà là hiểu cách các thành phần ảnh hưởng lẫn nhau.",
      focus: [
        "Information Systems",
        "Software Engineering",
        "Databases",
        "Networking",
        "Security Foundations",
        "System Thinking",
      ],
      signal: "Từ nền tảng số đến tư duy phòng thủ.",
    },
    work: {
      title: "Học phòng thủ từ những tín hiệu thật.",
      company: "VNPT Cyber Immunity",
      role: "Network Security Intern",
      period: "Từ tháng 3/2026",
      description:
        "Tôi đang học qua các bài toán an toàn mạng thực tế: cách hạ tầng được quan sát, bảo vệ và phân tích. Nội dung dưới đây được viết ở mức sanitized, không đề cập dự án, khách hàng hoặc dữ liệu nội bộ.",
      focus: ["Endpoint Security", "EDR/XDR", "EPP", "Forensic", "Kernel", "Windows"],
      projects: [
        {
          title: "Network Monitoring & Traffic Analysis",
          description:
            "Rèn cách đọc luồng mạng, tìm tín hiệu đáng chú ý và diễn giải quan sát kỹ thuật thành ghi chú rõ ràng.",
          contribution: "Khám phá và thực hành trong môi trường học tập nội bộ.",
          technologies: ["Traffic", "Telemetry", "Analysis"],
          status: "Exploring",
        },
        {
          title: "Endpoint Security Research",
          description:
            "Hệ thống hóa kiến thức về EDR/XDR, EPP và vai trò của telemetry trên endpoint.",
          contribution: "Tổng hợp khái niệm, so sánh cách tiếp cận và ghi lại câu hỏi nghiên cứu.",
          technologies: ["EDR/XDR", "EPP", "Windows"],
          status: "In progress",
        },
        {
          title: "Forensic Triage Practice",
          description:
            "Luyện tư duy timeline, artifacts và event logs để hiểu cách một dấu vết trở thành bằng chứng.",
          contribution: "Thực hành trên lab và viết lại quy trình quan sát.",
          technologies: ["Artifacts", "Event Logs", "Timeline"],
          status: "Lab notes",
        },
        {
          title: "Kernel & Windows Internals",
          description:
            "Tìm hiểu process, service, registry, driver và ranh giới giữa quan sát hợp lệ với thao tác có rủi ro.",
          contribution: "Xây nền tảng kiến thức và ghi chú kỹ thuật có kiểm chứng.",
          technologies: ["Kernel", "Drivers", "Internals"],
          status: "Learning",
        },
      ],
    },
    music: {
      title: "Âm nhạc cho tôi một cách khác để hiểu nhịp điệu.",
      description:
        "Ngoài security và systems, tôi làm nhạc. Nó khiến cách tôi xây giao diện và viết code trở nên có tiết tấu hơn: kiểm soát, cảm xúc, đôi lúc hơi lạ, nhưng luôn có chủ ý.",
      tracks: [
        {
          title: "Red Signal",
          mood: "Controlled intensity",
          year: "2026",
          platform: "SoundCloud",
          description: "Một bản nhạc giả lập cho khoảnh khắc tín hiệu đỏ bắt đầu thở.",
          href: "https://soundcloud.com/kamurei-placeholder",
        },
        {
          title: "Late Packet",
          mood: "Night infrastructure",
          year: "2026",
          platform: "YouTube",
          description: "Chậm, tối và có cảm giác một gói tin đến muộn nhưng đúng lúc.",
          href: "https://youtube.com",
        },
        {
          title: "Static Bloom",
          mood: "Soft distortion",
          year: "2026",
          platform: "Spotify",
          description: "Một khoảng nhiễu nhỏ nở thành giai điệu.",
          href: "https://spotify.com",
        },
      ],
    },
    notes: {
      title: "Field Notes",
      description:
        "Những ghi chép ngắn về security, học bằng cách xây và các ý tưởng nằm giữa cấu trúc với chuyển động.",
      posts: [
        {
          slug: "network-visibility",
          title: "Network visibility không chỉ là nhìn thấy nhiều hơn",
          excerpt:
            "Giá trị của telemetry nằm ở khả năng biến tín hiệu thành một câu hỏi điều tra tốt.",
          category: "Security",
          date: "05.06.2026",
          readingTime: "4 phút đọc",
          body: [
            "Visibility không có nghĩa là thu thập mọi thứ. Một hệ thống quan sát tốt giúp người phân tích hiểu tín hiệu nào đáng chú ý, tín hiệu nào cần thêm ngữ cảnh và điều gì chưa thể kết luận.",
            "Khi học về network và endpoint telemetry, tôi dần nhận ra chất lượng câu hỏi quan trọng không kém số lượng log. Một quan sát kỹ thuật chỉ thực sự có giá trị khi có thể dẫn tới bước kiểm chứng tiếp theo.",
            "Tôi đang luyện thói quen viết ghi chú theo chuỗi: quan sát, giả thuyết, bằng chứng cần tìm và giới hạn của kết luận. Cách viết này giúp tôi bình tĩnh hơn trước những tín hiệu có vẻ bất thường.",
          ],
        },
        {
          slug: "learning-by-building",
          title: "Học bằng cách xây, rồi tháo nó ra",
          excerpt:
            "Một prototype nhỏ thường dạy tôi nhiều hơn một danh sách khái niệm dài.",
          category: "Learning",
          date: "28.05.2026",
          readingTime: "3 phút đọc",
          body: [
            "Tôi thích bắt đầu từ một phiên bản nhỏ có thể chạy được. Khi một hệ thống vận hành trước mắt, những khái niệm trừu tượng bắt đầu có vị trí cụ thể.",
            "Sau khi xây, tôi thường quay lại tháo từng phần: dữ liệu đi đâu, trạng thái thay đổi lúc nào, lỗi xuất hiện ở ranh giới nào. Quá trình này biến việc làm sản phẩm thành một cách học.",
            "Điều quan trọng nhất không phải prototype đẹp ngay từ đầu. Nó cần đủ rõ để mình có thể giải thích vì sao nó hoạt động và biết mình chưa hiểu phần nào.",
          ],
        },
        {
          slug: "rhythm-in-interfaces",
          title: "Nhịp điệu trong một giao diện",
          excerpt:
            "Khoảng trống, chuyển động và thứ tự xuất hiện có thể kể chuyện mà không cần thêm lời.",
          category: "Music & Design",
          date: "17.05.2026",
          readingTime: "4 phút đọc",
          body: [
            "Làm nhạc khiến tôi chú ý nhiều hơn đến nhịp của giao diện. Một chuyển động đến quá sớm cũng gây khó chịu giống một âm thanh vào sai nhịp.",
            "Tôi thích những giao diện biết giữ im lặng. Không phải mọi thành phần đều cần phát sáng hoặc chuyển động; đôi khi khoảng trống là thứ làm cho chi tiết quan trọng trở nên rõ hơn.",
            "Với website này, tôi muốn mỗi section giống một cảnh phim ngắn: đủ khác để tạo ký ức, nhưng vẫn thuộc cùng một câu chuyện.",
          ],
        },
      ],
    },
    contact: {
      title: "Gửi một tín hiệu.",
      description:
        "Tôi luôn mở lòng với cơ hội học tập, cộng tác, internship, dự án security và những cuộc trò chuyện sáng tạo.",
      closing: "Security là cấu trúc. Âm nhạc là chuyển động. Tôi cố gắng xây ở khoảng giữa.",
      links: contacts,
    },
    footer: "KAMUREI / Trần Quốc Hưng · Built with care.",
  },
  en: {
    meta: {
      title: "KAMUREI | Trần Quốc Hưng",
      description:
        "The personal blog and portfolio of Trần Quốc Hưng: information systems, network security, fullstack learning, and music.",
    },
    nav: {
      signal: "Signal",
      bio: "Bio",
      academic: "Academic",
      work: "Work",
      music: "Music",
      notes: "Notes",
      contact: "Contact",
    },
    ui: {
      language: "Language",
      exploreStory: "Explore story",
      contactMe: "Contact me",
      viewNote: "Read note",
      backHome: "Back home",
      previousNote: "Previous note",
      nextNote: "Next note",
      currentMode: "Current mode",
      focusAreas: "Focus areas",
      selectedTracks: "Selected tracks",
      latestNotes: "Latest notes",
      sendSignal: "Send a signal",
      viewGithub: "View GitHub",
      listenMusic: "Listen to music",
    },
    hero: {
      alias: "KAMUREI",
      name: "Kamurei",
      roles: "Information Systems · Network Security · Music",
      line: "I shape digital experiences through systems thinking, security, and rhythm.",
      status: "learning / building / listening",
    },
    bio: {
      title: "I like structure, but I always leave room for a rhythm of my own.",
      lead:
        "I am Trần Quốc Hưng, an Information Systems student with a growing focus on network security, secure infrastructure, and practical engineering. I like building things that feel both useful and expressive: systems with structure, interfaces with rhythm, and stories that leave a trace.",
      quote:
        "I learn best by building, observing how things behave, and rewriting what I understand in clear language.",
      facts: [
        { label: "Based in", value: "Vietnam" },
        { label: "Studying", value: "Information Systems" },
        { label: "Exploring", value: "Network Security" },
        { label: "After hours", value: "Making music" },
      ],
    },
    academic: {
      title: "Learning to see systems as a whole.",
      institution: "University of Engineering and Technology, Vietnam National University, Hanoi",
      institutionShort: "UET-VNU",
      major: "Information Systems",
      description:
        "My academic foundation connects software, data, networking, and system thinking. The goal is not merely to know a tool, but to understand how the parts affect one another.",
      focus: [
        "Information Systems",
        "Software Engineering",
        "Databases",
        "Networking",
        "Security Foundations",
        "System Thinking",
      ],
      signal: "From digital foundations to a defensive mindset.",
    },
    work: {
      title: "Learning defense from real signals.",
      company: "VNPT Cyber Immunity",
      role: "Network Security Intern",
      period: "Since March 2026",
      description:
        "I am learning through practical network-security work: how infrastructure is monitored, protected, and analyzed. Everything below is sanitized and does not mention internal projects, customers, or data.",
      focus: ["Endpoint Security", "EDR/XDR", "EPP", "Forensic", "Kernel", "Windows"],
      projects: [
        {
          title: "Network Monitoring & Traffic Analysis",
          description:
            "Practicing how to read traffic, find notable signals, and turn technical observations into clear notes.",
          contribution: "Explored and practiced in an internal learning environment.",
          technologies: ["Traffic", "Telemetry", "Analysis"],
          status: "Exploring",
        },
        {
          title: "Endpoint Security Research",
          description:
            "Structuring knowledge around EDR/XDR, EPP, and the role of endpoint telemetry.",
          contribution: "Compared approaches, summarized concepts, and recorded research questions.",
          technologies: ["EDR/XDR", "EPP", "Windows"],
          status: "In progress",
        },
        {
          title: "Forensic Triage Practice",
          description:
            "Practicing timeline, artifact, and event-log thinking to understand how traces become evidence.",
          contribution: "Worked in labs and rewrote the observation process.",
          technologies: ["Artifacts", "Event Logs", "Timeline"],
          status: "Lab notes",
        },
        {
          title: "Kernel & Windows Internals",
          description:
            "Learning processes, services, registry, drivers, and the boundary between valid observation and risky action.",
          contribution: "Built foundational knowledge and verification-focused technical notes.",
          technologies: ["Kernel", "Drivers", "Internals"],
          status: "Learning",
        },
      ],
    },
    music: {
      title: "Music gives me another way to understand rhythm.",
      description:
        "Outside security and systems, I make music. It shapes how I build interfaces and write code: controlled, emotional, sometimes strange, but always intentional.",
      tracks: [
        {
          title: "Red Signal",
          mood: "Controlled intensity",
          year: "2026",
          platform: "SoundCloud",
          description: "A placeholder track for the moment a red signal begins to breathe.",
          href: "https://soundcloud.com/kamurei-placeholder",
        },
        {
          title: "Late Packet",
          mood: "Night infrastructure",
          year: "2026",
          platform: "YouTube",
          description: "Slow and dark, like a packet arriving late but exactly when needed.",
          href: "https://youtube.com",
        },
        {
          title: "Static Bloom",
          mood: "Soft distortion",
          year: "2026",
          platform: "Spotify",
          description: "A small field of noise opening into melody.",
          href: "https://spotify.com",
        },
      ],
    },
    notes: {
      title: "Field Notes",
      description:
        "Short notes on security, learning by building, and ideas between structure and motion.",
      posts: [
        {
          slug: "network-visibility",
          title: "Network visibility is not simply seeing more",
          excerpt:
            "The value of telemetry lies in its ability to turn a signal into a better investigation question.",
          category: "Security",
          date: "05.06.2026",
          readingTime: "4 min read",
          body: [
            "Visibility does not mean collecting everything. A useful observability system helps an analyst understand which signals matter, which need more context, and what cannot yet be concluded.",
            "While learning about network and endpoint telemetry, I have realized that the quality of a question matters as much as the quantity of logs. A technical observation becomes useful when it can guide the next verification step.",
            "I am practicing a simple note structure: observation, hypothesis, evidence to seek, and limits of the conclusion. It helps me stay calm around signals that initially look unusual.",
          ],
        },
        {
          slug: "learning-by-building",
          title: "Learning by building, then taking it apart",
          excerpt:
            "A small working prototype often teaches me more than a long list of concepts.",
          category: "Learning",
          date: "28.05.2026",
          readingTime: "3 min read",
          body: [
            "I like starting with a small version that can run. Once a system behaves in front of me, abstract concepts begin to occupy concrete places.",
            "After building, I return to take it apart: where data travels, when state changes, and where errors appear at boundaries. Product work becomes a way of learning.",
            "The prototype does not need to be beautiful immediately. It needs to be clear enough that I can explain why it works and identify what I still do not understand.",
          ],
        },
        {
          slug: "rhythm-in-interfaces",
          title: "Rhythm inside an interface",
          excerpt:
            "Spacing, motion, and sequence can tell a story without adding more words.",
          category: "Music & Design",
          date: "17.05.2026",
          readingTime: "4 min read",
          body: [
            "Making music makes me notice interface rhythm. Motion that arrives too early can feel as uncomfortable as a sound entering off beat.",
            "I like interfaces that know when to stay quiet. Not every element needs to glow or move; sometimes space is what makes the important detail visible.",
            "For this website, I want every section to feel like a short film scene: distinct enough to be remembered, but clearly part of the same story.",
          ],
        },
      ],
    },
    contact: {
      title: "Send a signal.",
      description:
        "Open to learning, collaboration, internships, security projects, and creative conversations.",
      closing: "Security is structure. Music is motion. I try to build somewhere between both.",
      links: contacts,
    },
    footer: "KAMUREI / Trần Quốc Hưng · Built with care.",
  },
  zh: {
    meta: {
      title: "KAMUREI | Trần Quốc Hưng",
      description: "Trần Quốc Hưng 的个人博客与作品集：信息系统、网络安全、全栈学习与音乐。",
    },
    nav: {
      signal: "信号",
      bio: "关于我",
      academic: "学习",
      work: "工作",
      music: "音乐",
      notes: "笔记",
      contact: "联系",
    },
    ui: {
      language: "语言",
      exploreStory: "探索故事",
      contactMe: "联系我",
      viewNote: "阅读笔记",
      backHome: "返回首页",
      previousNote: "上一篇",
      nextNote: "下一篇",
      currentMode: "当前模式",
      focusAreas: "关注方向",
      selectedTracks: "精选曲目",
      latestNotes: "最新笔记",
      sendSignal: "发送信号",
      viewGithub: "查看 GitHub",
      listenMusic: "听音乐",
    },
    hero: {
      alias: "KAMUREI",
      name: "陈国星",
      roles: "信息系统 · 网络安全 · 音乐",
      line: "我关注信息系统、网络安全，以及有节奏感的数字体验。",
      status: "学习 / 构建 / 聆听",
    },
    bio: {
      title: "我喜欢结构，也始终为自己的节奏留出空间。",
      lead:
        "我是 Trần Quốc Hưng，一名信息系统学生，正在专注于网络安全、安全基础设施和实践工程。我喜欢构建兼具实用性与表达力的事物：有结构的系统、有节奏的界面，以及会留下痕迹的故事。",
      quote: "我最擅长通过亲手构建、观察系统行为，并用清晰语言重写自己的理解来学习。",
      facts: [
        { label: "所在地", value: "越南" },
        { label: "学习方向", value: "信息系统" },
        { label: "探索方向", value: "网络安全" },
        { label: "业余时间", value: "制作音乐" },
      ],
    },
    academic: {
      title: "学习把系统视为一个整体。",
      institution: "越南国家大学河内校区 工程技术大学",
      institutionShort: "UET-VNU",
      major: "信息系统",
      description:
        "我的学术基础连接软件、数据、网络与系统思维。目标不仅是掌握工具，更是理解各个部分如何相互影响。",
      focus: ["信息系统", "软件工程", "数据库", "网络", "安全基础", "系统思维"],
      signal: "从数字基础走向防御思维。",
    },
    work: {
      title: "从真实信号中学习防御。",
      company: "VNPT Cyber Immunity",
      role: "网络安全实习生",
      period: "自 2026 年 3 月起",
      description:
        "我正在通过实际网络安全工作学习基础设施如何被监控、保护和分析。以下内容均经过脱敏，不涉及内部项目、客户或数据。",
      focus: ["Endpoint Security", "EDR/XDR", "EPP", "Forensic", "Kernel", "Windows"],
      projects: [
        {
          title: "网络监控与流量分析",
          description: "练习阅读流量、发现值得关注的信号，并把技术观察转化为清晰笔记。",
          contribution: "在内部学习环境中进行探索和练习。",
          technologies: ["Traffic", "Telemetry", "Analysis"],
          status: "探索中",
        },
        {
          title: "端点安全研究",
          description: "整理 EDR/XDR、EPP 以及端点遥测作用的相关知识。",
          contribution: "比较方法、总结概念并记录研究问题。",
          technologies: ["EDR/XDR", "EPP", "Windows"],
          status: "进行中",
        },
        {
          title: "取证分流练习",
          description: "练习时间线、artifacts 与事件日志思维，理解痕迹如何成为证据。",
          contribution: "在实验环境中练习并重写观察流程。",
          technologies: ["Artifacts", "Event Logs", "Timeline"],
          status: "实验笔记",
        },
        {
          title: "内核与 Windows 内部机制",
          description: "学习进程、服务、注册表、驱动，以及有效观察与风险操作之间的边界。",
          contribution: "建立基础知识并撰写重视验证的技术笔记。",
          technologies: ["Kernel", "Drivers", "Internals"],
          status: "学习中",
        },
      ],
    },
    music: {
      title: "音乐给了我另一种理解节奏的方式。",
      description:
        "在安全与系统之外，我也制作音乐。它影响我构建界面和编写代码的方式：克制、感性、偶尔有些奇怪，但始终有意图。",
      tracks: [
        {
          title: "Red Signal",
          mood: "Controlled intensity",
          year: "2026",
          platform: "SoundCloud",
          description: "一首关于红色信号开始呼吸的占位曲目。",
          href: "https://soundcloud.com/kamurei-placeholder",
        },
        {
          title: "Late Packet",
          mood: "Night infrastructure",
          year: "2026",
          platform: "YouTube",
          description: "缓慢而幽暗，像一个迟到却恰逢其时的数据包。",
          href: "https://youtube.com",
        },
        {
          title: "Static Bloom",
          mood: "Soft distortion",
          year: "2026",
          platform: "Spotify",
          description: "一小片噪声逐渐绽放为旋律。",
          href: "https://spotify.com",
        },
      ],
    },
    notes: {
      title: "Field Notes",
      description: "关于安全、通过构建学习，以及结构与运动之间想法的短笔记。",
      posts: [
        {
          slug: "network-visibility",
          title: "网络可见性不只是看到更多",
          excerpt: "遥测的价值，在于把信号变成更好的调查问题。",
          category: "安全",
          date: "05.06.2026",
          readingTime: "阅读 4 分钟",
          body: [
            "可见性并不意味着收集一切。优秀的观察系统能帮助分析人员理解哪些信号重要、哪些需要更多上下文，以及哪些结论仍然无法作出。",
            "在学习网络与端点遥测时，我逐渐意识到问题的质量与日志的数量同样重要。技术观察只有在能引导下一步验证时才真正有价值。",
            "我正在练习一种简单的笔记结构：观察、假设、需要寻找的证据，以及结论的边界。",
          ],
        },
        {
          slug: "learning-by-building",
          title: "通过构建学习，然后把它拆开",
          excerpt: "一个能运行的小原型，往往比一长串概念教会我更多。",
          category: "学习",
          date: "28.05.2026",
          readingTime: "阅读 3 分钟",
          body: [
            "我喜欢从一个能够运行的小版本开始。当系统在眼前运转时，抽象概念开始拥有具体位置。",
            "构建之后，我会重新拆解它：数据如何流动、状态何时改变、错误在哪些边界出现。产品工作因此成为一种学习方式。",
            "原型不需要一开始就很漂亮，但它需要足够清晰，让我能解释它为何工作，并知道自己还不理解什么。",
          ],
        },
        {
          slug: "rhythm-in-interfaces",
          title: "界面中的节奏",
          excerpt: "留白、运动和出现顺序，无需更多文字也能讲述故事。",
          category: "音乐与设计",
          date: "17.05.2026",
          readingTime: "阅读 4 分钟",
          body: [
            "制作音乐让我更关注界面的节奏。过早出现的动画，像一个进入错误拍点的声音一样令人不适。",
            "我喜欢懂得保持安静的界面。不是每个元素都需要发光或移动；有时留白才让重要细节变得清晰。",
            "我希望这个网站的每个 section 都像一段短片：足够不同，能被记住，同时属于同一个故事。",
          ],
        },
      ],
    },
    contact: {
      title: "发送一个信号。",
      description: "欢迎学习机会、合作、实习、安全项目和富有创造力的交流。",
      closing: "安全是结构，音乐是运动。我尝试在两者之间构建。",
      links: contacts,
    },
    footer: "KAMUREI / Trần Quốc Hưng · Built with care.",
  },
};
