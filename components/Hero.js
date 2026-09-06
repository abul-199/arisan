export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="container">
        <div className="hero-head">
          <h1>Menabung berkelompok, dengan aturan yang jelas dan mengikat bagi semua anggota.</h1>
          <p className="lead">
            Arisan Sejahtera menjalankan iuran mingguan yang dicairkan bergilir untuk kelompok yang
            sudah saling kenal. Nilai iuran, jadwal, dan sanksi keterlambatan dicatat terbuka di
            halaman ini, agar semua anggota memegang aturan yang sama sejak awal.
          </p>
          <div className="hero-actions">
            <a href="#paket" className="btn btn-fill">Lihat paket iuran</a>
            <a href="#peraturan" className="link">Baca peraturan lengkap</a>
          </div>
          <div className="hero-meta">
            <div><b>Mingguan</b><span>Siklus iuran dan pencairan</span></div>
            <div><b>4 pilihan</b><span>Nilai iuran per minggu</span></div>
            <div><b>5%</b><span>Denda tiap minggu bila telat</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
