export default function Tentang() {
  return (
    <section id="tentang">
      <div className="container about">
        <div>
          <h2>Cara kerja arisan ini</h2>
          <p>
            Setiap anggota membayar iuran dengan nilai yang sama tiap minggu. Dana yang terkumpul
            diserahkan bergilir kepada satu anggota per minggu, sampai seluruh anggota kebagian
            giliran. Siklus baru dapat dimulai lagi bila kelompok sepakat melanjutkan.
          </p>
          <p>
            Karena arisan berjalan di atas kepercayaan, kelompok ini menuliskan peraturannya (lihat
            bagian Peraturan) agar kewajiban dan konsekuensi bagi setiap anggota sudah jelas sejak
            awal, bukan diputuskan sepihak saat muncul masalah.
          </p>
        </div>
        <div className="about-list">
          <div>
            <h4>Pencatatan terbuka</h4>
            <p>Status bayar dan jadwal giliran dapat dilihat semua anggota, bukan hanya pengurus.</p>
          </div>
          <div>
            <h4>Jadwal tetap</h4>
            <p>Tanggal pencairan ditentukan di awal siklus dan tidak berubah tanpa kesepakatan bersama.</p>
          </div>
          <div>
            <h4>Aturan mengikat</h4>
            <p>Denda dan sanksi berlaku sama untuk semua anggota, tanpa pengecualian.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
