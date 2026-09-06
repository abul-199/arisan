export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#beranda" className="mark">
              <span className="mark-glyph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="12" r="5.5" />
                  <circle cx="15" cy="12" r="5.5" />
                </svg>
              </span>
              Arisan Sejahtera
            </a>
            <p>Arisan mingguan dengan pencatatan terbuka dan peraturan yang sama untuk semua anggota.</p>
          </div>
          <div className="foot-links">
            <h5>Halaman</h5>
            <a href="#tentang">Tentang</a>
            <a href="#paket">Paket</a>
            <a href="#peraturan">Peraturan</a>
            <a href="#jadwal">Jadwal</a>
          </div>
          <div className="foot-links">
            <h5>Kontak</h5>
            <a href="https://wa.me/62895359602861">WhatsApp</a>
            <a href="mailto:arisansejahtera99@gmail.com">Email</a>
          </div>
        </div>
        <p className="foot-bottom">
          © 2026 Arisan Sejahtera. Ketentuan pada halaman ini tunduk pada kesepakatan bersama anggota
          dan peraturan perundang-undangan yang berlaku di Indonesia.
        </p>
      </div>
    </footer>
  );
}
