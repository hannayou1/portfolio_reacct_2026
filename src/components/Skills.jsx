// Created: 2026-07-27 16:32 — 스킬 바 + 툴 칩 + 경력 타임라인
import { useEffect, useRef, useState } from 'react';

const BARS = [
  { label: 'JavaScript · React · Vue', width: 80 },
  { label: 'AI 활용 개발 (Claude Code)', width: 90 },
  { label: '프롬프트 설계 · AI 디자인 (Claude)', width: 85 },
  { label: 'HTML · CSS / SCSS · 웹표준 · 접근성', width: 95 },
];

const CHIPS = [
  'Claude Code', 'Claude (디자인 · 기획)', '프롬프트 엔지니어링', 'HTML5', 'CSS3 / SCSS',
  'JavaScript (ES6)', 'React.js', 'Vue.js (Vuex · Router)', 'Figma', '워드프레스', 'Git · Vercel · Netlify',
];

const TIMELINE = [
  {
    year: 'NOW',
    role: 'AI 활용 프론트엔드 개발자',
    desc: <>Claude Code로 개발 생산성을 높이고, AI 산출물은 코드 레벨에서 직접 검증·리팩토링.<br />기획부터 개발·배포까지 풀사이클로 완성합니다 (이 포트폴리오 포함).</>,
  },
  {
    year: 'GROWTH',
    role: 'React · Vue 전환 & 기업 시스템 개발',
    desc: <>AIP Migration 등 레거시 → React/SCSS 전환, 삼성DS 일정동기화,<br />LG하이프라자 메일시스템 등 기업 시스템 프론트엔드 100% 전담.</>,
  },
  {
    year: 'START',
    role: '대학 · 교육기관 웹 UI 개발',
    desc: <>한양사이버대, 숭실사이버대, 연세대 등 UI/UX 개발.<br />재직 당시 웹접근성 인증 획득 — 웹표준·접근성 기본기의 출발점.</>,
  },
];

export default function Skills() {
  const barsRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="sec-eyebrow fade-up">Skills & Career</div>
      <div className="sec-title fade-up d1">스킬 & 경력</div>
      <div className="sec-sub fade-up d2">9년간 쌓은 프론트엔드 개발 역량 위에 AI 활용 개발을 더한 성장 과정</div>
      <div className="skills-grid">
        <div className="fade-up d1">
          <div className="skill-bars" ref={barsRef}>
            {BARS.map((b) => (
              <div key={b.label}>
                <div className="sk-label"><span>{b.label}</span><span>{b.width}%</span></div>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: animated ? `${b.width}%` : 0 }} />
                </div>
              </div>
            ))}
          </div>
          <div className="tools-wrap">
            <div className="tools-title">사용 기술 · 툴</div>
            <div className="tools-chips">
              {CHIPS.map((c) => <div key={c} className="chip">{c}</div>)}
            </div>
          </div>
        </div>
        <div className="timeline fade-up d2">
          {TIMELINE.map((t) => (
            <div key={t.year} className="tl-item">
              <div className="tl-col"><div className="tl-dot"></div><div className="tl-line"></div></div>
              <div>
                <div className="tl-year">{t.year}</div>
                <div className="tl-role">{t.role}</div>
                <div className="tl-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
