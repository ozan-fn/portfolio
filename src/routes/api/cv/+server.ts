import PDFDocument from "pdfkit";
import type { RequestHandler } from "./$types";

const A4 = { width: 595.28, height: 841.89 };
const MARGIN = 60;
const PRIMARY = "#2a78ee";
const MUTED = "#6b707f";

const DATA = {
  name: "AKHMAD FAUZAN",
  title: "Full-Stack Developer",
  location: "Purbalingga, Indonesia · available for work",
  about:
    "Developer yang suka bikin produk end-to-end — dari backend Go/Rust, frontend Svelte/Next.js, sampai deploy sendiri. Fokus di web performance, developer experience, dan tooling yang bikin kerja lebih efisien.",
  experience: [
    {
      role: "Full-Stack Developer — Freelance",
      period: "2023 — sekarang",
      detail:
        "Membangun aplikasi web custom untuk klien: sistem booking, dashboard admin, dan tools internal. Menangani dari requirement, arsitektur, hingga deployment.",
    },
    {
      role: "Software Engineer — Personal Projects",
      period: "2021 — 2023",
      detail:
        "Eksplorasi berbagai stack: Wails desktop app, mini game online, URL shortener, dan tools kolaborasi realtime. Belajar sambil membangun.",
    },
  ],
  projects: [
    {
      name: "Color Match — realtime multiplayer game",
      detail: "Game tebak warna multiplayer via MQTT. Svelte 5 + shadcn-svelte di frontend.",
      tech: ["Svelte", "MQTT", "WebSocket"],
    },
    {
      name: "This portfolio — SvelteKit",
      detail: "Portfolio dengan auth, blog, CRUD project, upload file ke S3, dan mode gelap.",
      tech: ["SvelteKit", "Prisma", "Better Auth"],
    },
  ],
  skills: ["Go", "Rust", "Next.js", "Svelte", "Wails", "PostgreSQL", "Docker", "AWS S3"],
};

function sectionTitle(doc: PDFKit.PDFDocument, title: string) {
  const y = doc.y + 8;
  if (y > A4.height - MARGIN - 40) doc.addPage();
  doc
    .moveDown(1.5)
    .fillColor(PRIMARY)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(`// ${title}`, MARGIN, undefined, { characterSpacing: 1.5 })
    .moveDown(0.5)
    .strokeColor("#e0e0e6")
    .lineWidth(0.7)
    .moveTo(MARGIN, doc.y)
    .lineTo(A4.width - MARGIN, doc.y)
    .stroke()
    .moveDown(0.8);
}

export const GET: RequestHandler = async () => {
  const doc = new PDFDocument({ size: "A4", margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } });
  const chunks: Buffer[] = [];
  doc.on("data", (c) => chunks.push(c));
  const done = new Promise<void>((resolve) => doc.on("end", resolve));

  // Name
  doc.fillColor("#0d0d14").font("Helvetica-Bold").fontSize(26).text(DATA.name, { characterSpacing: 1 });
  // Title
  doc.fillColor(PRIMARY).fontSize(12).moveDown(0.2).text(DATA.title);
  // Location
  doc.fillColor(MUTED).fontSize(8).moveDown(0.5).text(DATA.location, { characterSpacing: 1 });

  sectionTitle(doc, "about");
  doc.fillColor("#40424d").font("Helvetica").fontSize(10).text(DATA.about);

  sectionTitle(doc, "experience");
  for (const exp of DATA.experience) {
    doc
      .fillColor("#0d0d14")
      .font("Helvetica-Bold")
      .fontSize(10.5)
      .text(exp.role, { continued: true })
      .fillColor(MUTED)
      .font("Helvetica")
      .fontSize(8.5)
      .text(`  ${exp.period}`, { align: "right" });
    doc.fillColor("#40424d").fontSize(9.5).text(exp.detail, { lineGap: 2 });
    doc.moveDown(0.8);
  }

  sectionTitle(doc, "selected projects");
  for (const p of DATA.projects) {
    doc.fillColor("#0d0d14").font("Helvetica-Bold").fontSize(10.5).text(`> ${p.name}`);
    doc.fillColor("#40424d").font("Helvetica").fontSize(9.5).text(p.detail, { lineGap: 2 });
    doc.fillColor(MUTED).font("Helvetica").fontSize(8).text(p.tech.join("  ·  "));
    doc.moveDown(0.8);
  }

  sectionTitle(doc, "tech stack");
  doc.fillColor("#40424d").font("Helvetica").fontSize(10).text(DATA.skills.join("   ·   "));

  doc.end();
  await done;

  return new Response(Buffer.concat(chunks), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="cv-akhmad-fauzan.pdf"',
      "Cache-Control": "no-store",
    },
  });
};
