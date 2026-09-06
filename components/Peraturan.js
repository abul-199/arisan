export default function Peraturan() {
  return (
    <section id="peraturan">
      <div className="container">
        <div className="section-head">
          <h2>Peraturan yang mengikat setiap anggota terdaftar</h2>
          <p>
            Peraturan berikut berlaku sejak anggota membayar iuran pertama. Tidak ada pengecualian
            bagi anggota mana pun, termasuk pengurus.
          </p>
        </div>
        <div className="clauses">
          <div className="clause">
            <span className="clause-num">Pasal 1</span>
            <div>
              <h4>Waktu pembayaran</h4>
              <p>Iuran dibayarkan setiap minggu sesuai jadwal yang telah disepakati bersama seluruh anggota.</p>
            </div>
          </div>
          <div className="clause">
            <span className="clause-num">Pasal 2</span>
            <div>
              <h4>Denda keterlambatan</h4>
              <p>Keterlambatan pembayaran dikenakan denda sebesar 5% dari nilai iuran mingguan, dihitung untuk setiap minggu keterlambatan yang berjalan.</p>
            </div>
          </div>
          <div className="clause">
            <span className="clause-num">Pasal 3</span>
            <div>
              <h4>Kewajiban setelah menerima giliran</h4>
              <p>Anggota yang telah menerima giliran pencairan tetap wajib melanjutkan pembayaran iuran sampai seluruh siklus arisan selesai.</p>
            </div>
          </div>
          <div className="clause critical">
            <span className="clause-num">Pasal 4</span>
            <div>
              <h4>Sanksi bagi anggota yang menghilang setelah menerima dana</h4>
              <p>Anggota yang mengundurkan diri sepihak, menghilang, atau tidak dapat dihubungi setelah menerima dana arisan akan dikenakan sanksi: identitas dan kronologi kejadian disampaikan secara terbuka kepada seluruh anggota grup serta jaringan komunitas terkait, sebagai peringatan bersama.</p>
            </div>
          </div>
          <div className="clause critical">
            <span className="clause-num">Pasal 5</span>
            <div>
              <h4>Proses hukum</h4>
              <p>Penggelapan dana arisan atau pelanggaran berat terhadap peraturan ini akan diproses secara hukum, sesuai ketentuan pidana dan/atau perdata yang berlaku di Indonesia.</p>
            </div>
          </div>
          <div className="clause">
            <span className="clause-num">Pasal 6</span>
            <div>
              <h4>Persetujuan anggota</h4>
              <p>Dengan mendaftar dan membayar iuran pertama, anggota dianggap telah membaca, memahami, dan menyetujui seluruh peraturan ini.</p>
            </div>
          </div>
        </div>

        <div className="notice-head">
          <h3>Surat peringatan resmi</h3>
          <p>Versi cetak dari peraturan di atas, lengkap dengan nomor surat dan kolom tanda tangan pengurus.</p>
        </div>
        <div className="paper">
          <div className="seal-stamp">RESMI<br />&amp; MENGIKAT</div>
          <div className="paper-head">
            <div className="brand">ARISAN SEJAHTERA</div>
            <div className="addr">
              Jl, Limau manis, Medan, Sumatera Utara<br />
              WA 0895359602861<br />
              arisansejahtera99@gmail.com
            </div>
          </div>
          <div className="paper-title">SURAT PERINGATAN</div>
          <div className="paper-num">Nomor 000/000/IX/2026</div>
          <p><strong>Perihal:</strong> Peringatan resmi kepatuhan peraturan arisan</p>
          <p>
            Kepada Yth.<br />
            Seluruh anggota terdaftar Arisan Sejahtera<br />
            di tempat
          </p>
          <p>Dengan hormat,</p>
          <p>
            Sehubungan dengan kesepakatan bersama dalam pelaksanaan arisan ini, kami selaku pengurus
            menyampaikan peringatan resmi dan mengikat kepada seluruh anggota terdaftar, sebagai berikut:
          </p>
          <ol>
            <li>Setiap anggota wajib membayar iuran secara tepat waktu sesuai jadwal yang telah disepakati bersama.</li>
            <li>Keterlambatan pembayaran dikenakan denda 5% (lima persen) dari nilai iuran mingguan untuk setiap minggu keterlambatan.</li>
            <li>Anggota yang terbukti mengundurkan diri, menghilang, atau tidak dapat dihubungi setelah menerima dana arisan akan dikenakan sanksi berupa penyampaian identitas secara terbuka kepada seluruh anggota dan jaringan komunitas terkait, serta diproses secara hukum sesuai peraturan perundang-undangan yang berlaku.</li>
            <li>Segala bentuk penggelapan dana arisan merupakan pelanggaran berat dan akan ditindaklanjuti secara hukum tanpa kecuali.</li>
            <li>Surat ini berlaku sejak tanggal diterbitkan dan mengikat bagi seluruh anggota yang telah terdaftar dalam arisan ini.</li>
          </ol>
          <p>
            Demikian surat peringatan ini disampaikan untuk dipatuhi dan dilaksanakan sebagaimana
            mestinya. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.
          </p>
          <div className="paper-sign">
            <div className="date">[L.Pakam], [06/09/2026]</div>
            <div className="name-line">Ashabul Rihan.P</div>
            <div className="role">Ketua Pelaksana, Arisan Sejahtera</div>
          </div>
        </div>
      </div>
    </section>
  );
}
