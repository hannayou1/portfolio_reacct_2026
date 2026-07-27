// Created: 2026-07-27 16:32 — 프로젝트 그리드 + 카테고리 필터
import { useState } from 'react';
import { FILTERS, PROJECTS } from '../data/projects';

function ProjectCard({ p, filter }) {
  const hidden = filter !== 'all' && !p.cats.includes(filter);
  return (
    <div className={`wcard${p.vibe ? ' vibe' : ''} fade-up${p.delay ? ` ${p.delay}` : ''}${hidden ? ' hidden' : ''}`}>
      <a className="wcard-thumb shot" href={p.href} target="_blank" rel="noopener noreferrer">
        {p.vibe && <span className="vibe-badge">Vibe Coded</span>}
        <img src={p.img} alt={p.alt} loading="lazy" />
        <span className="thumb-overlay">실제 페이지 보기 ↗</span>
      </a>
      <div className="wcard-body">
        <span className={`cat-tag${p.tagClass ? ` ${p.tagClass}` : ''}`}>{p.tag}</span>
        <h3>{p.title}</h3>
        <div className="metric-list">
          <div className="metric"><span>역할</span><span className="af">{p.role}</span></div>
          <div className="metric"><span>기술</span><span className="af">{p.tech}</span></div>
          <div className="metric"><span>특징</span><span className="af">{p.feature}</span></div>
        </div>
        <div className={`role-chip${p.vibe ? ' vibe-chip' : ''}`}>{p.chip}</div>
        {p.codeUrl && (
          <a className="code-link" href={p.codeUrl} target="_blank" rel="noopener noreferrer">💻 코드 보기 ↗</a>
        )}
      </div>
    </div>
  );
}

export default function Works() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="works">
      <div className="sec-eyebrow fade-up">Projects</div>
      <div className="sec-title fade-up d1">대표 프로젝트</div>
      <div className="sec-sub fade-up d2">
        9년간 실무로 쌓은 프론트엔드 개발 경험 — 대학·그룹웨어·문서보안부터 React·Vue 전환, 그리고 AI로 직접 만든 개인 서비스까지
      </div>
      <div className="filter-row fade-up d2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`f-btn${f.vibe ? ' f-vibe' : ''}${filter === f.key ? ' on' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="works-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} filter={filter} />
        ))}
      </div>
      <p className="works-note fade-up">* 카드 썸네일은 실제 산출물 화면 캡처이며, 클릭하면 라이브 페이지가 새 창으로 열립니다.</p>
    </section>
  );
}
