-- Skema database untuk Arisan Sejahtera
-- Cara pakai: buka project Supabase > SQL Editor > New query, tempel semua isi file ini, lalu Run.
-- Aman dijalankan berkali-kali (pakai IF NOT EXISTS), tapi baris "insert" contoh data
-- sebaiknya hanya dijalankan sekali di awal.

create table if not exists paket (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  nilai_mingguan bigint not null,
  catatan text,
  unggulan boolean not null default false,
  urutan int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists jadwal (
  id uuid primary key default gen_random_uuid(),
  minggu_ke int not null,
  tanggal date not null,
  nama_penerima text,
  status text not null default 'terjadwal' check (status in ('terjadwal', 'selesai', 'tertunda')),
  created_at timestamptz not null default now()
);

-- Row Level Security: situs publik hanya boleh MEMBACA data, tidak boleh mengubah.
-- Tambah / ubah / hapus baris dilakukan lewat Table Editor di dashboard Supabase
-- (perlu login akun Supabase pengurus), bukan lewat situs publik.
alter table paket enable row level security;
alter table jadwal enable row level security;

drop policy if exists "Publik dapat membaca paket" on paket;
create policy "Publik dapat membaca paket" on paket for select using (true);

drop policy if exists "Publik dapat membaca jadwal" on jadwal;
create policy "Publik dapat membaca jadwal" on jadwal for select using (true);

grant select on paket to anon, authenticated;
grant select on jadwal to anon, authenticated;

-- Contoh data awal — boleh diedit atau dihapus lewat Table Editor kapan saja.
insert into paket (nama, nilai_mingguan, catatan, unggulan, urutan) values
  ('Hemat', 250000, 'Cocok untuk kelompok pemula, 10–20 anggota.', false, 1),
  ('Reguler', 500000, 'anggota saat ini.', true, 2),
  ('Utama', 1000000, 'Untuk anggota yang ingin nilai lebih besar tiap giliran.', false, 3),
  ('Premium', 2000000, 'Untuk komitmen jangka panjang dan kelompok kecil.', false, 4);

insert into jadwal (minggu_ke, tanggal, nama_penerima, status) values
  (1, '2026-09-12', 'Anggota 1', 'terjadwal'),
  (2, '2026-09-19', 'Anggota 2', 'terjadwal'),
  (3, '2026-09-26', 'Anggota 3', 'terjadwal'),
  (4, '2026-10-03', 'Anggota 4', 'terjadwal'),
  (5, '2026-10-10', 'Anggota 5', 'terjadwal'),
  (6, '2026-10-17', 'Anggota 6', 'terjadwal');
