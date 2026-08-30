/* ============================================================
   ✏️✏️✏️  BAGIAN 1 — DATA UNDANGAN (SATU-SATUNYA TEMPAT
   YANG PERLU ANDA UBAH)  ✏️✏️✏️
   Ganti nilai di bawah ini sesuai data Anda.
   Setiap kelompok sudah diberi tanda komentar.
   Tamu TIDAK bisa mengubah bagian ini — hanya Anda
   yang memegang file ini (mis. lewat GitHub).
============================================================ */
const DATA_UNDANGAN = {

  /* ---------- [SAMPUL & TEKS UMUM] ---------- */
  coupleTitle : "Rama & Ayu",                 // nama besar di sampul (format: Nama & Nama)
  coverDate   : "RABU, 14 OKTOBER 2026",      // tanggal yang tampil di sampul
  quoteText   : "\u201CWahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.\u201D",
  quoteSource : "(Rgveda : X.85.42)",         // sumber kutipan
  heroImg     : "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/3466bd6a6-d3bf-48ab-871a-e97b70eb60ec6740.png", // foto sampul & thumbnail video

  /* ---------- [MEMPELAI WANITA] ---------- */
  brideName : "Ni Putu Ayu Lestari",
  brideDesc : "Putri pertama dari\nBapak Mempelai & Ibu Mempelai\nGianyar, Bali",   // \n = baris baru
  brideIg   : "https://instagram.com",
  brideImg  : "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/7466bd6a6-d3bf-48ab-871a-e97b70eb60ec2320.png",

  /* ---------- [MEMPELAI PRIA] ---------- */
  groomName : "I Made Rama Pratama",
  groomDesc : "Putra pertama dari\nBapak Mempelai & Ibu Mempelai\nDenpasar, Bali",
  groomIg   : "https://instagram.com",
  groomImg  : "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/0466bd6a6-d3bf-48ab-871a-e97b70eb60ec1033.png",

  /* ---------- [WAKTU ACARA] (untuk hitung mundur & kalender) ---------- */
  eventISO : "2026-10-14T09:00:00",          // format: TTTT-BB-HH TJAM:MENIT:DETIK

  /* ---------- [AKAD NIKAH] ---------- */
  akadDate  : "Rabu, 14 Oktober 2026",
  akadTime  : "09:00 - 11:00",
  akadVenue : "The Royal Garden",
  akadAddr  : "Jl. Pantai Indah No. 8, Bali",
  akadMap   : "https://maps.google.com/?q=The+Royal+Garden+Bali",

  /* ---------- [RESEPSI] ---------- */
  resepsiDate  : "Rabu, 14 Oktober 2026",
  resepsiTime  : "18:00 - Selesai",
  resepsiVenue : "The Royal Garden",
  resepsiAddr  : "Jl. Pantai Indah No. 8, Bali",
  resepsiMap   : "https://maps.google.com/?q=The+Royal+Garden+Bali",

  /* ---------- [HADIAH / REKENING] ---------- */
  giftDesc : "Tanpa mengurangi rasa hormat, bagi tamu yang ingin mengirimkan hadiah kasih dapat melalui rekening berikut.",
  bank1Name : "BCA",     bank1No : "1234567890", bank1Owner : "Ayu Lestari",
  bank2Name : "Mandiri", bank2No : "0987654321", bank2Owner : "Rama Pratama",

  /* ---------- [GALERI] satu link foto per baris ---------- */
  galleryUrls : [
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/4466bd6a6-d3bf-48ab-871a-e97b70eb60ec6130.png",
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/2466bd6a6-d3bf-48ab-871a-e97b70eb60ec3998.png",
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/4466bd6a6-d3bf-48ab-871a-e97b70eb60ec1468.png",
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/4466bd6a6-d3bf-48ab-871a-e97b70eb60ec3219.png",
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/8466bd6a6-d3bf-48ab-871a-e97b70eb60ec5515.png",
    "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/2466bd6a6-d3bf-48ab-871a-e97b70eb60ec7042.png"
  ].join("\n"),
  videoUrl : "https://www.youtube.com/watch?v=ScMzIvxBSi4",  // link video YouTube

  /* ---------- [MUSIK LATAR] ganti dengan link .mp3 Anda ---------- */
  musicUrl : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

  /* ---------- [TAMPILAN] font & warna dasar ---------- */
  fontHead : "Poppins",        // pilihan: Poppins | Montserrat | Playfair Display | Cormorant Garamond | Marcellus
  fontBody : "Poppins",        // pilihan sama seperti di atas
  accent   : "#c2892e",        // warna aksen (kode hex)

  /* ---------- [PENUTUP & KONTAK] ---------- */
  thankText : "Terima Kasih",
  footerImg : "https://image.qwenlm.ai/public_source/af47cc50-02da-4090-89a4-f4f42ddd0577/3466bd6a6-d3bf-48ab-871a-e97b70eb60ec6740.png",
  footIg  : "https://instagram.com",
  footWa  : "https://wa.me/6281234567890",
  footWeb : "https://semarastory.id"
};

/* ============================================================
   ⛔ BAGIAN 2 — MESIN SISTEM (TIDAK PERLU DIUBAH)
   Semua fungsi di bawah bekerja otomatis membaca DATA_UNDANGAN.
============================================================ */
const config = DATA_UNDANGAN;

/* ---------- 2.1 Terapkan data ke halaman (sistem data-bind) ---------- */
const musik = document.getElementById("musikBg");
function terapkan() {
  document.querySelectorAll("[data-bind]").forEach(el => {
    if (config[el.dataset.bind] !== undefined) el.textContent = config[el.dataset.bind];
  });
  document.querySelectorAll("[data-bind-src]").forEach(el => {
    if (config[el.dataset.bindSrc]) el.src = config[el.dataset.bindSrc];
  });
  document.querySelectorAll("[data-bind-href]").forEach(el => {
    if (config[el.dataset.bindHref]) el.href = config[el.dataset.bindHref];
  });

  // Pecah "NamaA & NamaB" untuk sampul
  const [a, b] = config.coupleTitle.split("&").map(s => s.trim());
  document.getElementById("coverNamaA").textContent = a || "";
  document.getElementById("coverNamaB").textContent = b || "";

  // Font & warna dari kelompok [TAMPILAN]
  const root = document.documentElement.style;
  root.setProperty("--font-judul", `'${config.fontHead}', sans-serif`);
  root.setProperty("--font-teks",  `'${config.fontBody}', sans-serif`);
  root.setProperty("--aksen", config.accent);

  musik.src = config.musicUrl;
  renderGaleri();
  buatLinkKalender();
}

/* ---------- 2.2 Sampul: buka undangan + nama tamu dari ?to= ---------- */
document.getElementById("namaTamu").textContent =
  new URLSearchParams(location.search).get("to") || "Tamu Undangan";

document.getElementById("btnBuka").addEventListener("click", () => {
  document.body.classList.add("dibuka");
  document.getElementById("cover").classList.add("sembunyi");
  musik.play().catch(() => {});
  perbaruiIkonMusik();
});

/* ---------- 2.3 Tombol musik melayang ---------- */
const btnMusik = document.getElementById("btnMusik");
btnMusik.addEventListener("click", () => { musik.paused ? musik.play() : musik.pause(); });
function perbaruiIkonMusik() { btnMusik.classList.toggle("jeda", musik.paused); }
musik.addEventListener("play", perbaruiIkonMusik);
musik.addEventListener("pause", perbaruiIkonMusik);

/* ---------- 2.4 Hitung mundur & link Google Calendar ---------- */
function tickHitungMundur() {
  const s = Math.max(0, Math.floor((new Date(config.eventISO).getTime() - Date.now()) / 1000));
  const isi = (id, v) => document.getElementById(id).textContent = String(v).padStart(2, "0");
  isi("cdHari", Math.floor(s / 86400));
  isi("cdJam",  Math.floor(s / 3600) % 24);
  isi("cdMenit", Math.floor(s / 60) % 60);
  isi("cdDetik", s % 60);
}
setInterval(tickHitungMundur, 1000); tickHitungMundur();

function buatLinkKalender() {
  const d = new Date(config.eventISO), e = new Date(d.getTime() + 2 * 3600e3);
  const p = n => String(n).padStart(2, "0");
  const f = x => `${x.getFullYear()}${p(x.getMonth()+1)}${p(x.getDate())}T${p(x.getHours())}${p(x.getMinutes())}00`;
  document.getElementById("btnKalender").href =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text="  + encodeURIComponent("Pernikahan " + config.coupleTitle) +
    "&dates=" + f(d) + "/" + f(e) +
    "&location=" + encodeURIComponent(config.akadAddr);
}

/* ---------- 2.5 Galeri foto + lightbox (foto & video) ---------- */
function renderGaleri() {
  const grid = document.getElementById("galeriGrid");
  grid.innerHTML = "";
  config.galleryUrls.split("\n").map(u => u.trim()).filter(Boolean).forEach((url, i) => {
    const fig = document.createElement("figure");
    if (i === 0) fig.className = "lebar";
    fig.innerHTML = `<img src="${url}" alt="Galeri ${i + 1}" loading="lazy">`;
    fig.addEventListener("click", () => bukaLightbox(`<img src="${url}" alt="Foto">`));
    grid.appendChild(fig);
  });
}
function ytEmbed(url) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : null;
}
const lightbox = document.getElementById("lightbox");
const lbKonten = document.getElementById("lbKonten");
function bukaLightbox(html) { lbKonten.innerHTML = html; lightbox.classList.add("buka"); }
function tutupLightbox()    { lbKonten.innerHTML = "";   lightbox.classList.remove("buka"); }
document.getElementById("btnTutupLb").addEventListener("click", tutupLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) tutupLightbox(); });
document.getElementById("kartuVideo").addEventListener("click", () => {
  const emb = ytEmbed(config.videoUrl);
  emb ? bukaLightbox(`<iframe src="${emb}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`)
      : window.open(config.videoUrl, "_blank");
});

/* ---------- 2.6 Hadiah: tampil/sembunyi + tombol salin ---------- */
const areaHadiah = document.getElementById("areaHadiah");
document.getElementById("btnHadiah").addEventListener("click", () => {
  areaHadiah.classList.toggle("buka");
  document.getElementById("teksBtnHadiah").textContent =
    areaHadiah.classList.contains("buka") ? "Tutup Hadiah" : "Lihat Hadiah Pernikahan";
});
document.querySelectorAll(".btn-salin").forEach(btn => {
  btn.addEventListener("click", async () => {
    const teks = document.getElementById(btn.dataset.salin).textContent.replace(/\s/g, "");
    try { await navigator.clipboard.writeText(teks); }
    catch (e) {
      const t = document.createElement("textarea");
      t.value = teks; document.body.appendChild(t); t.select();
      document.execCommand("copy"); t.remove();
    }
    tampilToast("Nomor rekening tersalin ✔");
  });
});

/* ---------- 2.7 RSVP & ucapan (tersimpan di browser tamu) ---------- */
const KUNCI_UCAPAN = "semaraStoryUcapan";
let daftarUcapan = [];
try { daftarUcapan = JSON.parse(localStorage.getItem(KUNCI_UCAPAN) || "[]"); } catch (e) {}

document.getElementById("formRsvp").addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("rsvpNama").value.trim();
  if (!nama) return;
  daftarUcapan.unshift({
    nama,
    status : document.getElementById("rsvpStatus").value,
    teks   : document.getElementById("rsvpUcapan").value.trim(),
    waktu  : Date.now()
  });
  localStorage.setItem(KUNCI_UCAPAN, JSON.stringify(daftarUcapan));
  e.target.reset();
  renderUcapan();
  tampilToast("Terima kasih, konfirmasi Anda terkirim ❤");
});
function renderUcapan() {
  const wrap = document.getElementById("daftarUcapan");
  if (!daftarUcapan.length) {
    wrap.innerHTML = `<p class="ucapan-kosong">Belum ada ucapan. Jadilah yang pertama memberikan doa restu.</p>`;
    return;
  }
  wrap.innerHTML = daftarUcapan.map(u => {
    const kelas = u.status.startsWith("Hadir") ? "Hadir" : u.status.startsWith("Ragu") ? "Ragu" : "Tidak";
    const tgl = new Date(u.waktu).toLocaleString("id-ID",
      { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    return `<div class="kartu-ucapan"><div class="kepala"><b>${u.nama}</b>
      <span class="badge-status badge-${kelas}">${u.status}</span><time>${tgl}</time></div>
      ${u.teks ? `<p>${u.teks}</p>` : ""}</div>`;
  }).join("");
}

/* ---------- 2.8 Animasi muncul saat scroll ---------- */
const observer = new IntersectionObserver(entri => {
  entri.forEach(x => { if (x.isIntersecting) { x.target.classList.add("terlihat"); observer.unobserve(x.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ---------- 2.9 Notifikasi kecil (toast) ---------- */
let toastTimer;
function tampilToast(pesan) {
  const t = document.getElementById("toast");
  t.textContent = pesan; t.classList.add("tampil");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("tampil"), 2200);
}

/* ---------- 2.10 Jalankan saat halaman dimuat ---------- */
terapkan();
renderUcapan();