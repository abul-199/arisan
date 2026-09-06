import './globals.css';

export const metadata = {
  title: 'Arisan Sejahtera — Iuran, Peraturan & Jadwal',
  description: 'Arisan mingguan dengan pencatatan terbuka dan peraturan yang sama untuk semua anggota.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
