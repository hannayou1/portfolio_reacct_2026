// Created: 2026-07-27 16:32 — .fade-up 요소 스크롤 등장 애니메이션 (IntersectionObserver)
import { useEffect } from 'react';

export function useFadeUp() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
