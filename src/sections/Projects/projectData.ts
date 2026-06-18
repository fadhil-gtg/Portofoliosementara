import type { Language } from '../../components/Navbar'

export interface ProjectData {
  slug: string
  title: string
  description: string
  descriptionId: string
  stack: string[]
  githubUrl: string
  demoUrl: string
  accent: string
  imageUrl: string
  cinematic: string
  cinematicId: string
  features: string[]
  featuresId: string[]
  longDescription: string
  longDescriptionId: string
}

export const projectsData: ProjectData[] = [
  {
    slug: 'portfolio-motion-system',
    title: 'Komdigi',
    description:
      'I built a replica of the official website of Indonesia\'s Ministry of Communication and Digital Affairs with my team. The site covers current news, public services, digital transformation, and performance reports \u2014 completed as a group project for the TKJ4 class.',
    descriptionId:
      'Saya membangun replika website resmi Kementerian Komunikasi dan Digital RI bersama tim. Situs ini mencakup fitur berita terkini, layanan publik, transformasi digital, dan laporan kinerja \u2014 dikerjakan sebagai proyek kelompok kelas TKJ4.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Team Project'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://fadhil-gtg.github.io/komdigi-tkj4-klmpk3/',
    accent: 'from-[#FAFAF7] via-[#E8E8E3] to-[#9B9B8F]',
    imageUrl: '/assets/logos/Komdigi1.png',
    cinematic:
      'A full-scale government portal experience \u2014 multi-page architecture, structured navigation, and a civic digital identity rebuilt from the ground up.',
    cinematicId:
      'Pengalaman portal pemerintahan berskala penuh \u2014 arsitektur multi-halaman, navigasi terstruktur, dan identitas digital pemerintahan yang dibangun dari nol.',
    features: [
      'Multi-page government portal with structured site architecture',
      'Multi-level dropdown navigation across 5 main menu categories',
      'News & media hub covering press releases, hoax clarifications, and photo galleries',
      'Public service pages including scholarships, licensing, and emergency call 112',
      'Performance report section with financial, annual, and service documentation',
      'Digital transformation coverage across infrastructure, economy, and cybersecurity',
    ],
    featuresId: [
      'Portal pemerintahan multi-halaman dengan arsitektur situs terstruktur',
      'Navigasi dropdown multi-level di 5 kategori menu utama',
      'Hub berita & media mencakup siaran pers, klarifikasi hoaks, dan galeri foto',
      'Halaman layanan publik termasuk beasiswa, perizinan, dan panggilan darurat 112',
      'Bagian laporan kinerja dengan dokumentasi keuangan, tahunan, dan pelayanan',
      'Liputan transformasi digital mencakup infrastruktur, ekonomi, dan keamanan siber',
    ],
    longDescription:
      'I worked on this project with 6 team members as a group assignment for the TKJ4 class. The site consists of multiple pages covering various features such as News (press releases, hoax clarifications, photos, videos, magazines), Team Member Profiles, Performance Reports (financial, annual, service), Public Services (certification, scholarships, licensing, emergency call 112), and a Digital Transformation page discussing infrastructure, economy, and cybersecurity. All pages were built manually using pure HTML and CSS without any framework, with multi-level dropdown navigation that mirrors the structure of the actual government site.',
    longDescriptionId:
      'Proyek ini saya kerjakan bersama 6 anggota tim sebagai tugas kelompok kelas TKJ4. Situs terdiri dari banyak halaman yang mencakup berbagai fitur seperti halaman Berita (siaran pers, klarifikasi hoaks, foto, video, majalah), halaman Profil anggota tim, Laporan Kinerja (keuangan, tahunan, pelayanan), Layanan publik (sertifikasi, beasiswa, perizinan, panggilan darurat 112), hingga halaman Transformasi Digital yang membahas infrastruktur, ekonomi, dan keamanan siber. Seluruh halaman dibangun secara manual menggunakan HTML dan CSS murni tanpa framework, dengan navigasi dropdown multi-level yang menyerupai struktur situs pemerintah asli.',
  },
  {
    slug: 'linux-server-lab',
    title: 'Radnet Digital Indonesia',
    description:
      'I designed and developed a company profile website for PT Radnet Digital Indonesia. The site showcases their flagship services including EzySky, Internet Security, and RadneXt Internet, along with partner information and company contacts.',
    descriptionId:
      'Saya merancang dan mengembangkan website company profile untuk PT Radnet Digital Indonesia. Situs ini menampilkan layanan unggulan seperti EzySky, Internet Security, dan RadneXt Internet, beserta informasi mitra dan kontak perusahaan.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Company Profile'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://fadhil-gtg.github.io/Company-profile/',
    accent: 'from-[#D8E6FF] via-[#90B7FF] to-[#26324D]',
    imageUrl: '/assets/logos/PT2.png',
    cinematic:
      'A sleek corporate presence brought to life \u2014 professional layout, service-focused storytelling, and a digital face worthy of a multi-city technology company.',
    cinematicId:
      'Kehadiran korporat yang elegan dihidupkan \u2014 layout profesional, storytelling berfokus pada layanan, dan wajah digital yang layak untuk perusahaan teknologi multi-kota.',
    features: [
      'Clean corporate layout with professional service-focused storytelling',
      'Three core service showcases \u2014 EzySky, Internet Security, and RadneXt Internet',
      'Partner logo section featuring universities and vocational schools',
      'Multi-city office directory covering Surabaya, Bandung, and Jakarta',
      'Integrated WhatsApp CTA for direct client consultation',
      'Social media links connected to LinkedIn, Facebook, and Instagram',
    ],
    featuresId: [
      'Layout korporat bersih dengan storytelling berfokus pada layanan profesional',
      'Tiga showcase layanan inti \u2014 EzySky, Internet Security, dan RadneXt Internet',
      'Bagian logo mitra yang menampilkan universitas dan sekolah kejuruan',
      'Direktori kantor multi-kota mencakup Surabaya, Bandung, dan Jakarta',
      'Integrasi CTA WhatsApp untuk konsultasi klien langsung',
      'Tautan media sosial terhubung ke LinkedIn, Facebook, dan Instagram',
    ],
    longDescription:
      'I built this site as the official digital representation of PT Radnet Digital Indonesia, a company operating in connectivity services and digital solutions. The site includes a homepage showcasing three flagship services (EzySky, Internet Security, RadneXt Internet), an Employee page, and an About Us page with contact details and office locations in three cities \u2014 Surabaya, Bandung, and Jakarta. I also included official partner logos such as Unesa, SMKN 1 Surabaya, SMK Ketintang, and SMKN 6 Surabaya, along with direct WhatsApp button integration for client consultation.',
    longDescriptionId:
      'Saya membangun situs ini sebagai representasi digital resmi PT Radnet Digital Indonesia, perusahaan yang bergerak di bidang layanan konektivitas dan solusi digital. Situs mencakup halaman utama yang menampilkan tiga layanan unggulan (EzySky, Internet Security, RadneXt Internet), halaman Karyawan, serta halaman Tentang Kami dengan detail kontak dan lokasi kantor di tiga kota \u2014 Surabaya, Bandung, dan Jakarta. Saya juga menyertakan logo mitra resmi perusahaan seperti Unesa, SMKN 1 Surabaya, SMK Ketintang, dan SMKN 6 Surabaya, serta integrasi tombol WhatsApp langsung untuk konsultasi klien.',
  },
  {
    slug: 'network-troubleshooting-kit',
    title: 'ADHIKARACE',
    description:
      'I built my own sport motorcycle catalog website based in Surabaya. The site showcases premium brand lineups such as Ducati, BMW, Kawasaki, and Aprilia \u2014 complete with specifications, pricing, and WhatsApp purchasing.',
    descriptionId:
      'Saya membangun website katalog toko motor sport milik saya sendiri yang berbasis di Surabaya. Situs ini menampilkan lineup dari brand premium seperti Ducati, BMW, Kawasaki, dan Aprilia \u2014 lengkap dengan spesifikasi, harga, dan pembelian via WhatsApp.',
    stack: ['Google Sites', 'E-Commerce', 'Product Catalog'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://www.adhikarace.my.id/',
    accent: 'from-[#F7E7C6] via-[#D8A85C] to-[#3A2A16]',
    imageUrl: '/assets/logos/adhikarace3.png',
    cinematic:
      'A live sport bike marketplace with real products, real prices, and real transactions \u2014 where premium brands like Ducati and BMW meet frictionless WhatsApp commerce.',
    cinematicId:
      'Marketplace motor sport live dengan produk nyata, harga nyata, dan transaksi nyata \u2014 tempat brand premium seperti Ducati dan BMW bertemu perdagangan WhatsApp tanpa hambatan.',
    features: [
      'Live product catalog spanning 8 premium motorcycle brands',
      'Detailed technical specs per unit \u2014 power, torque, seat height, and engine size',
      'One-tap WhatsApp purchase with auto-filled brand and model message',
      'Customer testimonial section with real buyer reviews',
      'Custom domain with dedicated FAQ and privacy policy pages',
      'Multi-platform social presence across Instagram, YouTube, and TikTok',
    ],
    featuresId: [
      'Katalog produk live yang mencakup 8 brand motor premium',
      'Spesifikasi teknis detail per unit \u2014 power, torsi, tinggi jok, dan kapasitas mesin',
      'Pembelian satu ketuk via WhatsApp dengan pesan otomatis sesuai merk dan tipe',
      'Bagian testimoni pelanggan dengan ulasan pembeli asli',
      'Domain kustom dengan halaman FAQ dan kebijakan privasi khusus',
      'Kehadiran sosial multi-platform di Instagram, YouTube, dan TikTok',
    ],
    longDescription:
      'ADHIKARACE is my own sport motorcycle shop that I built from scratch using Google Sites with a custom domain at adhikarace.my.id. The site features a catalog of 8 premium motorcycle brands \u2014 Aprilia, Ducati, Honda, Yamaha, Suzuki, Triumph, BMW, and Kawasaki \u2014 each equipped with complete technical specifications including power (hp), torque (Nm), seat height, and engine capacity. Every product links directly to WhatsApp with auto-filled messages based on the brand and model. I also added buyer testimonial pages, FAQ, privacy policy, and connected Instagram, YouTube, and TikTok accounts as promotional channels.',
    longDescriptionId:
      'ADHIKARACE adalah toko motor sport milik saya yang saya bangun sendiri dari nol menggunakan Google Sites dengan domain kustom adhikarace.my.id. Situs ini menampilkan katalog dari 8 brand motor premium \u2014 Aprilia, Ducati, Honda, Yamaha, Suzuki, Triumph, BMW, dan Kawasaki \u2014 masing-masing dilengkapi spesifikasi teknis lengkap seperti power (hp), torque (Nm), seat height, dan kapasitas mesin. Setiap produk terhubung langsung ke WhatsApp dengan pesan otomatis sesuai merk dan tipe motor. Saya juga menambahkan halaman testimoni pembeli, FAQ, kebijakan privasi, dan menghubungkan akun Instagram, YouTube, serta TikTok sebagai saluran promosi.',
  },
  {
    slug: 'tkj-learning-hub',
    title: 'Server Monitoring Dashboard',
    description:
      'I led a team as Project Manager in building a DevOps-based server monitoring service for small and medium enterprises. The system monitors CPU, RAM, Disk, and network performance in real-time using Prometheus, Docker, and Node Exporter.',
    descriptionId:
      'Saya memimpin tim sebagai Project Manager dalam membangun layanan monitoring server berbasis DevOps untuk UMKM. Sistem ini memantau performa CPU, RAM, Disk, dan jaringan secara real-time menggunakan Prometheus, Docker, dan Node Exporter.',
    stack: ['Docker', 'Prometheus', 'DevOps', 'JavaScript', 'Linux'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://fadhil-gtg.github.io/ServerMonitoringDashboard/',
    accent: 'from-[#E8D7A8] via-[#C8A96E] to-[#2C2417]',
    imageUrl: '/assets/logos/monitoring4.png',
    cinematic:
      'A real-time DevOps command center \u2014 where Docker, Prometheus, and Node Exporter converge into a live dashboard that breathes with every server heartbeat.',
    cinematicId:
      'Pusat komando DevOps real-time \u2014 tempat Docker, Prometheus, dan Node Exporter bersatu dalam dashboard live yang berdenyut seiring setiap detak server.',
    features: [
      'Real-time monitoring of CPU, RAM, Disk, and network every 5 seconds',
      'Docker-based deployment on Linux Ubuntu 22.04 LTS',
      'Prometheus metrics collection integrated with Node Exporter v1.7.0',
      'Interactive live charts powered by Chart.js v4',
      'Dedicated client login page and interactive demo dashboard',
      'Full team role documentation \u2014 PM, NOC Engineer, DevOps, and Sales',
    ],
    featuresId: [
      'Monitoring real-time CPU, RAM, Disk, dan jaringan setiap 5 detik',
      'Deployment berbasis Docker di Linux Ubuntu 22.04 LTS',
      'Pengumpulan metrik Prometheus terintegrasi dengan Node Exporter v1.7.0',
      'Grafik live interaktif menggunakan Chart.js v4',
      'Halaman login klien khusus dan dashboard demo interaktif',
      'Dokumentasi peran tim lengkap \u2014 PM, NOC Engineer, DevOps, dan Sales',
    ],
    longDescription:
      'I worked on this project as a PKWU (Creative Products and Entrepreneurship) assignment for the Computer and Network Engineering vocational major with 3 team members. I served as Project Manager \u2014 leading the project, assigning tasks, and ensuring all milestones were completed on time. The system works with the following flow: deploy Docker on Linux Ubuntu 22.04 \u2192 configure Prometheus for metrics scraping \u2192 NOC configures LAN network \u2192 dashboard displays real-time data every 5 seconds via the Prometheus API. The technology stack includes Docker, Prometheus, Node Exporter v1.7.0, Chart.js v4, HTML5, CSS3, and JavaScript ES2022. The site features a client login page, an interactive demo dashboard, and a landing page that thoroughly explains the service, technology, workflow, and team structure.',
    longDescriptionId:
      'Proyek ini saya kerjakan sebagai tugas PKWU (Produk Kreatif dan Kewirausahaan) SMK jurusan TKJ bersama 3 anggota tim. Saya bertindak sebagai Project Manager \u2014 memimpin jalannya project, membagi tugas, dan memastikan semua tahap selesai tepat waktu. Sistem bekerja dengan alur: deploy Docker di Linux Ubuntu 22.04 \u2192 konfigurasi Prometheus untuk scraping metrics \u2192 konfigurasi jaringan LAN oleh NOC \u2192 dashboard menampilkan data real-time setiap 5 detik via Prometheus API. Stack teknologi yang digunakan meliputi Docker, Prometheus, Node Exporter v1.7.0, Chart.js v4, HTML5, CSS3, dan JavaScript ES2022. Situs memiliki halaman login client, halaman demo dashboard interaktif, serta landing page yang menjelaskan layanan, teknologi, cara kerja, dan struktur tim secara lengkap.',
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug)
}

export function getProjectDescription(project: ProjectData, language: Language): string {
  return language === 'id' ? project.descriptionId : project.description
}

export function getProjectFeatures(project: ProjectData, language: Language): string[] {
  return language === 'id' ? project.featuresId : project.features
}

export function getProjectLongDescription(project: ProjectData, language: Language): string {
  return language === 'id' ? project.longDescriptionId : project.longDescription
}

export function getProjectCinematic(project: ProjectData, language: Language): string {
  return language === 'id' ? project.cinematicId : project.cinematic
}
