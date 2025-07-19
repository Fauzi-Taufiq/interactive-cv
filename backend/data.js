// backend/data.js
// Data ini akan kita pindah ke backend nanti
const educationHistory = [
  {
    id: 1,
    period: "2022 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 - Informatika",
  },
  {
    id: 2,
    period: "2019 - 2022",
    institution: "SMK Negeri 1 Bantul Yogyakarta",
    major: "Rekayasa Perangkat Lunak",
  },
];
const skills = [
  { name: "Vue.js", level: "Mahir" },
  { name: "JavaScript", level: "Mahir" },
  { name: "Tailwind CSS", level: "Mahir" },
  { name: "Node.js", level: "Menengah" },
  { name: "Express.js", level: "Menengah" },
  { name: "PostgreSQL", level: "Menengah" },
  { name: "Git & GitHub", level: "Mahir" },
  { name: "HTML5 & CSS3", level: "Mahir" },
];
const projects = [
  {
    title: "Website Toko Akun Game Online",
    image: "/img/nexakun-logo.png",
    description: "Platform e-commerce dengan fitur payment gateway dan escrow system.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    link: "https://github.com/Fauzi-Taufiq/nexakun-accountstore.git",
  },
  {
    title: "Website Penjualan Tiket Bioskop",
    image: "/img/movietix.png",
    description: "Website penjualan tiket bioskop dengan fitur pemesanan dan pembayaran online.",
    tech: ["PHP", "Mysql", "Bootstrap"],
    link: "https://github.com/Fauzi-Taufiq/movietix.git",
  },
];
module.exports = { educationHistory, skills, projects };
