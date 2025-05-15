import { Icons } from "@/components/icons";
import { Certificate } from "crypto";
import { HomeIcon, NotebookIcon, MailIcon } from "lucide-react";

export const DATA = {
  name: "Raehan",
  initials: "Raehan",
  url: "https://dillion.io",
  description:
    "Undergraduate Student of Informatics",
  summary:
    "Saya adalah seorang front-end programming and UI/UX design, termasuk kemahiran dalam HTML, CSS, dan JavaScript.Dengan pengalaman dalam menciptakan antarmuka yang menarik dan mudah digunakan. Saya berfokus pada desain yang mengutamakan pengalaman pengguna (user experience) yang intuitif, serta desain yang responsif untuk berbagai perangkat. Saya bekerja dengan tim Cloudline, di mana kami telah mengerjakan berbagai proyek web dan aplikasi yang bertujuan untuk meningkatkan kepuasan pengguna dan kinerja platform",
  avatarUrl: "/me.png",
  skills: [
    "Desain UI/UX",
    "Prototyping dan Wireframing (menggunakan Figma)",
    "Front-End Developer",
    "Uji Coba Pengguna dan Iterasi Desain",
    "Kolaborasi Tim dalam Pengembangan Produk",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    email: "raehan.ph@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-raehan-putra-h-2b04ab219/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/raehan.ptr",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raehan.ph@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cloudline",
      badges: [],
      location: "Remote",
      title: "Project Manager & UI/UX",
      logoUrl: "/cloudlineLogo.png",
      start: "Oktober 2024",
      end: "Present",
      description:
        "Sebagai Project Manager & UI/UX di Cloudline, saya mengelola proyek digital dari awal hingga akhir, memastikan setiap solusi yang dikembangkan sesuai dengan kebutuhan klien dan memberikan dampak bisnis yang nyata. Saya juga fokus pada desain pengalaman pengguna yang intuitif dan efisien, menciptakan antarmuka yang menarik dan mudah digunakan untuk mendukung pertumbuhan bisnis klien.",
    },
  ],
  education: [
    {
      school: "MULTIMEDIA NUSANTARA UNIVERSITY",
      href: "https://www.umn.ac.id/",
      degree: "UNDERGRADUATE STUDENT IN INFORMATICS",
      logoUrl: "/umnLogo.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "SMA Negeri 2 Sumedang",
      href: "https://sman2sumedang.sch.id/",
      degree: "SCIENCE MAJOR",
      logoUrl: "/sman2sumedangLogo.jpg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Hidupi",
      href: "https://chatcollect.com",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Platform layanan bagi keluarga yang ditinggalkan, dengan antarmuka intuitif untuk pemesanan pemakaman dan dokumen. Dirancang sederhana, elegan, dan empatik, menggabungkan desain web dengan nilai kemanusiaan.",
      technologies: ["UI/UX", "FRONT-END DEVELOPER"],
      links: [
        {
          type: "Figma",
          href: "https://chatcollect.com",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/hidupiLogo.png",
      video: "",
    },
    {
      title: "Global Village",
      href: "https://magicui.design",
      dates: "Oct 2024 - Nov 2024",
      actie: true,
      description:
        "Membangun website modern dan intuitif untuk Global Village, perusahaan pertanian, dengan fitur edukatif seperti artikel, video, dan podcast. Proyek ini mencakup riset pengguna, wireframe, dan prototipe interaktif untuk mendukung edukasi pertanian berkelanjutan.",
      technologies: ["UI/UX"],
      links: [
        {
          type: "Figma",
          href: "https://magicui.design",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/gvLogo.png",
      video: "",
    },
    {
      title: "Lorem Ipsum",
      href: "https://llm.report",
      dates: "",
      active: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Lorem Ipsum",
      href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Adsync",
      dates: "16 - 29 Maret, 2025",
      location: "Hackathon 12",
      description:
        "Platform iklan berbasis blockchain yang menghubungkan pengiklan dengan komunitas Web3 dan influencer. Menggunakan token untuk pembayaran, AI untuk penargetan, dan sistem terdesentralisasi untuk transparansi. Berfungsi sebagai marketplace yang memfasilitasi matching dan transaksi iklan secara modular dan data-driven.",
      image: "/adsyncLogo.png",
      links: [],
    },
    {
      title: "HCIA-AI V3.5 Course",
      dates: "Mei 17, 2024",
      location: "Huawei",
      description: "Sertifikat ini membuktikan bahwa saya telah menyelesaikan pelatihan HCIA-AI V3.5 yang diselenggarakan oleh Huawei Talent Online dan berhasil memperoleh nilai kelulusan. Pelatihan ini mencakup pemahaman dasar mengenai kecerdasan buatan dan aplikasinya di industri teknologi.",
      image:"/huawei.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certificate_huawei.png",
        },
        {
          title: "Certificate (Indonesia)",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certificate_huawei_indonesia.png",
        },
      ],
    },
    {
      title: "Introduction to Python",
      dates: "Maret 05, 2024",
      location: "SoloLearn",
      description:
        "Telah berhasil menyelesaikan kursus 'Introduction to Python' yang diselenggarakan oleh SoloLearn. Kursus ini mencakup pemahaman dasar-dasar pemrograman Python, mulai dari variabel, struktur kontrol, fungsi, hingga konsep dasar lainnya, baik secara teoritis maupun praktis.",
      image: "/sololearn.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certificate_sololearn.JPG",
        },
      ],
    },
  ],
} as const;
