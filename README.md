# Arisan Sejahtera

Situs arisan (Next.js + Supabase), siap di-deploy ke Vercel. Paket iuran dan jadwal diambil
langsung dari Supabase; peraturan dan surat peringatan tetap teks statis di dalam kode.

## 1. Siapkan Supabase

1. Buat project baru di https://supabase.com (atau pakai project yang sudah Anda punya).
2. Buka **SQL Editor** di dashboard Supabase, tempel seluruh isi file `supabase/schema.sql`,
   lalu klik **Run**. Ini akan membuat tabel `paket` dan `jadwal`, mengaktifkan Row Level
   Security (hanya bisa dibaca publik, tidak bisa diubah publik), dan mengisi beberapa contoh data.
3. Buka **Project Settings > API**. Salin dua nilai ini:
   - **Project URL**
   - **anon public key**

## 2. Jalankan di komputer

```bash
npm install
cp .env.example .env.local
```

Isi `.env.local` dengan nilai dari langkah di atas:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=isi-anon-key-anda
```

Lalu jalankan:

```bash
npm run dev
```

Buka http://localhost:3000 — bila tabel masih kosong, halaman Paket dan Jadwal akan menampilkan
pesan "belum ada data" sebagai penanda, bukan error.

## 3. Kelola data sehari-hari

Nilai iuran dan jadwal **tidak perlu ubah kode** — cukup lewat Supabase dashboard:
**Table Editor > paket** atau **Table Editor > jadwal**, tambah/ubah/hapus baris seperti
mengedit spreadsheet. Perubahan langsung tampil di situs setelah reload halaman.

Situs publik hanya bisa **membaca** kedua tabel ini. Hanya orang yang login ke dashboard
Supabase project ini yang bisa mengubah datanya — pengunjung situs tidak bisa.

Isi Peraturan dan Surat Peringatan masih teks tetap di `components/Peraturan.js`. Ubah
langsung di file itu (nomor surat, nilai denda, dll) bila ada perubahan aturan.

## 4. Deploy ke Vercel

**Lewat dashboard:**
1. Push folder ini ke repo GitHub.
2. Buka https://vercel.com/new, import repo tersebut. Next.js akan terdeteksi otomatis.
3. Saat diminta **Environment Variables**, isi `NEXT_PUBLIC_SUPABASE_URL` dan
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` dengan nilai yang sama seperti di `.env.local`.
4. Klik **Deploy**.

**Lewat CLI:**
```bash
npm i -g vercel
vercel
```
Ikuti prompt-nya, lalu jalankan `vercel env add NEXT_PUBLIC_SUPABASE_URL` dan
`vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY` (atau isi lewat dashboard Vercel) sebelum
`vercel --prod`.

## Struktur proyek

```
app/            Halaman & layout (Next.js App Router)
  layout.js     Bungkus <html>/<body> + metadata judul halaman
  page.js       Ambil data dari Supabase, susun semua komponen
  globals.css   Semua styling (tema dark blue, tabel, surat peringatan, dll)
components/     Satu file per bagian halaman (Hero, Paket, Peraturan, dst.)
lib/supabase.js Koneksi ke Supabase, dipakai app/page.js
supabase/schema.sql  Skema tabel — jalankan sekali di SQL Editor
```

## Lanjutan yang bisa ditambahkan

- Panel admin dengan login (Supabase Auth) agar pengurus bisa mengubah data lewat situs
  itu sendiri, bukan lewat dashboard Supabase.
- Tabel `pembayaran` untuk mencatat status bayar tiap anggota per minggu secara rinci
  (saat ini status keterlambatan dicatat manual, belum otomatis dari log pembayaran).
