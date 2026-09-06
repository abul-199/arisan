'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#paket', label: 'Paket' },
  { href: '#peraturan', label: 'Peraturan' },
  { href: '#jadwal', label: 'Jadwal' },
  { href: '#kontak', label: 'Kontak' },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? 'masthead scrolled' : 'masthead'}>
        <div className="container">
          <a href="#beranda" className="mark">
            <span className="mark-glyph">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="12" r="5.5" />
                <circle cx="15" cy="12" r="5.5" />
              </svg>
            </span>
            Arisan Sejahtera
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <button className="nav-toggle" aria-label="Buka menu" onClick={() => setOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div
        className={open ? 'mobile-overlay open' : 'mobile-overlay'}
        onClick={() => setOpen(false)}
      />
      <nav className={open ? 'mobile-panel open' : 'mobile-panel'}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </>
  );
}
