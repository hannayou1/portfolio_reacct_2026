// Created: 2026-07-27 16:32
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#ai', label: 'AI 활용' },
  { href: '#works', label: '프로젝트' },
  { href: '#skills', label: '스킬' },
  { href: '#story', label: '소개' },
  { href: '#cta', label: '연락' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => {
      let cur = '';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 80) cur = s.id;
      });
      setActiveId(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header id="nav">
        <div className="nav-logo">유한나<span>.</span></div>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} style={activeId && `#${activeId}` === l.href ? { color: 'var(--primary)' } : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        {/* <a href="" className="nav-cta">연락하기 →</a> */}
        <div
          className="hamburger"
          aria-label="메뉴 열기"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </div>
      </header>
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
