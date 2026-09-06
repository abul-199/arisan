import { getSupabase } from '@/lib/supabase';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import Tentang from '@/components/Tentang';
import Paket from '@/components/Paket';
import Peraturan from '@/components/Peraturan';
import Jadwal from '@/components/Jadwal';
import Kontak from '@/components/Kontak';
import Footer from '@/components/Footer';

// Selalu ambil data terbaru dari Supabase, jangan di-cache antar request.
export const revalidate = 0;

async function getPaket() {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('paket')
    .select('*')
    .order('urutan', { ascending: true });
  if (error) {
    console.error('Gagal memuat paket:', error.message);
    return [];
  }
  return data ?? [];
}

async function getJadwal() {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('jadwal')
    .select('*')
    .order('minggu_ke', { ascending: true });
  if (error) {
    console.error('Gagal memuat jadwal:', error.message);
    return [];
  }
  return data ?? [];
}

export default async function Home() {
  const [paket, jadwal] = await Promise.all([getPaket(), getJadwal()]);

  return (
    <>
      <SiteNav />
      <Hero />
      <Tentang />
      <Paket items={paket} />
      <Peraturan />
      <Jadwal items={jadwal} />
      <Kontak />
      <Footer />
    </>
  );
}
