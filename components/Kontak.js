export default function Kontak() {
  return (
    <section id="kontak">
      <div className="container contact">
        <div>
          <h2>Tertarik bergabung?</h2>
          <p>Hubungi kami untuk mendaftar atau menanyakan paket iuran yang tersedia.</p>
          <div className="contact-lines">
            <div><h4>WhatsApp</h4><p>+62 895-3596-0286-1</p></div>
            <div><h4>Email</h4><p>info@arisansejahtera.id</p></div>
            <div><h4>Alamat</h4><p>Jl. Contoh Alamat No. 123, Kota Anda</p></div>
          </div>
        </div>
        <div className="contact-panel">
          <h3>Daftar sebagai anggota</h3>
          <p>Dengan mendaftar, Anda menyatakan telah membaca peraturan pada bagian sebelumnya.</p>
          <a
            href="https://wa.me/62895359602861"
            className="btn btn-fill"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textAlign: 'center' }}
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
