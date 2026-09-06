function formatRupiah(n) {
  return 'Rp' + Number(n).toLocaleString('id-ID');
}

export default function Paket({ items = [] }) {
  return (
    <section id="paket">
      <div className="container">
        <div className="section-head">
          <h2>Pilih nilai iuran mingguan</h2>
          <p>Nilai dan keterangan paket dikelola langsung lewat Supabase, tanpa perlu ubah kode.</p>
        </div>
        <div className="table-scroll">
          <table className="ledger">
            <thead>
              <tr><th>Paket</th><th>Iuran / minggu</th><th>Catatan</th></tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={3} className="note">
                    Belum ada paket. Tambahkan lewat tabel <code>paket</code> di Supabase.
                  </td>
                </tr>
              )}
              {items.map((p) => (
                <tr key={p.id} className={p.unggulan ? 'featured' : undefined}>
                  <td className="plan">{p.nama}</td>
                  <td className="price">{formatRupiah(p.nilai_mingguan)}</td>
                  <td className="note">
                    {p.unggulan && <b>Paling banyak dipilih </b>}
                    {p.catatan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tiers-cta">
          Ingin memilih salah satu paket? <a href="#kontak" className="link">Hubungi kami di bagian kontak.</a>
        </p>
      </div>
    </section>
  );
}
