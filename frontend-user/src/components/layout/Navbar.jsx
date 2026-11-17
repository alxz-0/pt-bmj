import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp, FaIndustry } from 'react-icons/fa';
import { waLink } from '../../utils/waLink';

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#projects' },
  { label: 'Klien', href: '#clients' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const drawerRef = useRef(null);

  // 1. Shadow saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2. Active section highlight
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, []);

  // 3. Lock scroll body saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 4. ESC untuk tutup drawer
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // 5. Klik di luar drawer → tutup
  useEffect(() => {
    const onClickOutside = (e) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* ========== NAVBAR UTAMA ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="PT. BMJ - Beranda"
          >
            <div className="w-10 h-10 rounded-lg bg-navy-blue flex items-center justify-center group-hover:bg-industrial-red transition-colors duration-300">
              <FaIndustry className="text-white text-lg" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-extrabold text-navy-blue text-lg tracking-tight">
                PT. <span className="text-industrial-red">BMJ</span>
              </span>
              <span className="block text-[10px] text-bmj-muted uppercase tracking-wider hidden sm:block">
                Brayat Makmur Jaya
              </span>
            </div>
          </a>

          {/* Menu Desktop + Tablet */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-3 lg:px-4 py-2 text-sm lg:text-[15px] font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-industrial-red'
                        : 'text-bmj-dark hover:text-industrial-red'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-3 right-3 lg:left-4 lg:right-4 -bottom-0.5 h-0.5 rounded-full bg-industrial-red transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            {/* CTA Desktop/Tablet */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-industrial-red text-white font-semibold px-4 lg:px-6 py-2.5 text-sm transition-all duration-200 hover:bg-red-800 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaWhatsapp className="text-base" />
              <span className="hidden lg:inline">Hubungi Kami</span>
              <span className="hidden md:inline lg:hidden">WhatsApp</span>
            </a>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-navy-blue hover:bg-bmj-light transition-colors"
              aria-label="Buka menu"
              aria-expanded={isOpen}
            >
              <HiMenu className="text-2xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* ========== DRAWER MOBILE ========== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-bmj-border">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-navy-blue flex items-center justify-center">
              <FaIndustry className="text-white text-sm" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-extrabold text-navy-blue text-base">
                PT. <span className="text-industrial-red">BMJ</span>
              </span>
              <span className="block text-[9px] text-bmj-muted uppercase tracking-wider">
                Brayat Makmur Jaya
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-navy-blue hover:bg-bmj-light transition-colors"
            aria-label="Tutup menu"
          >
            <HiX className="text-2xl" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-industrial-red/10 text-industrial-red'
                        : 'text-bmj-dark hover:bg-bmj-light hover:text-industrial-red'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-industrial-red' : 'bg-transparent'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="border-t border-bmj-border p-4 space-y-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-industrial-red text-white font-semibold px-6 py-3 hover:bg-red-800 transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Hubungi Kami
          </a>
          <p className="text-center text-xs text-bmj-muted">
            +62 857-7056-9705
          </p>
        </div>
      </aside>
    </>
  );
}