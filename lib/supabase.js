import { createClient } from '@supabase/supabase-js';

// Dibuat lazy (baru dipanggil saat dibutuhkan), bukan langsung saat modul dimuat.
// Ini supaya proses build/preview tidak crash kalau env var Supabase belum diisi —
// halaman tetap ter-build, dan cukup menampilkan "belum ada data" sampai env var diisi.
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
