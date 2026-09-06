function formatTanggal(d) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Jadwal({ items = [] }) {
  return (
    <section id="jadwal">
      <div className="container">
        <div className="section-head">
          <h2>Jadwal pencairan</h2>
          <p>Jadwal ini diambil langsung dari data pengurus dan dapat berubah sewaktu-waktu.</p>
        </div>
        <div className="table-scroll">
          <table className="ledger">
            <thead>
              <tr><th>Minggu</th><th>Tanggal</th><th>Penerima giliran</th><th>Status</th></tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={4} className="note">
                    Jadwal belum diisi. Tambahkan lewat tabel <code>jadwal</code> di Supabase.
                  </td>
                </tr>
              )}
              {items.map((j) => (
                <tr key={j.id}>
                  <td>{j.minggu_ke}</td>
                  <td>{formatTanggal(j.tanggal)}</td>
                  <td>{j.nama_penerima || '—'}</td>
                  <td>{j.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
