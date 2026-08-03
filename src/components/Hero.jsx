// Created: 2026-07-27 16:32
import { useEffect, useRef, useState } from "react";

const KPIS = [
  { target: 9, suffix: "년+", label: "프론트엔드 실무 경력" },
  { target: 24, suffix: "개", label: "제작 프로젝트" },
  { target: 100, suffix: "%", label: "AI 활용 개발" },
];

function useCountUp(target, started, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const step = 16;
    const inc = target / (duration / step);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setValue(Math.round(cur));
      if (cur >= target) clearInterval(t);
    }, step);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return value;
}

function KpiCard({ target, suffix, label, started }) {
  const value = useCountUp(target, started);
  return (
    <div className="kpi-card">
      <div className="num">
        {value}
        {suffix}
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function Hero() {
  const kpiRowRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = kpiRowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero">
      <div>
        <div className="hero-eyebrow fade-up">
          AI 활용에 강한 프론트엔드 개발자 · Frontend Developer
        </div>
        <h1 className="fade-up d1">
          AI를 활용해
          <br />
          <em>아이디어를 서비스</em>로 만듭니다.
        </h1>
        <p className="hero-desc fade-up d2">
          9년간의 웹 프론트엔드 실무 경험에 AI를 더했습니다 —<br />
          Claude Code로 개발 속도를 높이고 코드 품질은 직접 검증해, 기획부터
          개발·배포까지 완성합니다.
        </p>
        <div className="kpi-row fade-up d2" ref={kpiRowRef}>
          {KPIS.map((k) => (
            <KpiCard key={k.label} {...k} started={started} />
          ))}
        </div>
        <div className="hero-btns fade-up d3">
          <a href="#works" className="btn-solid">
            프로젝트 보기 ↓
          </a>
          {/* <a href="" className="btn-outline">
            연락하기
          </a> */}
        </div>
      </div>
      <div className="hero-photo fade-up d2">
        <img src="/contents/images/img01.png" alt="유한나 프로필" />
      </div>
    </section>
  );
}
