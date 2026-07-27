// Created: 2026-07-27 16:32
const BADGES = [
  '🤖 Claude Code · Claude 활용 개발',
  '✅ 웹접근성 인증 (숭실 · 한양사이버대)',
  '⚛️ React · Vue 전환 경험',
  '🚀 기획→배포 원스톱 제작',
];

export default function Story() {
  return (
    <section id="story">
      <div className="sec-eyebrow fade-up">About Me</div>
      <div className="sec-title fade-up d1">나의 이야기</div>
      <div className="sec-sub fade-up d2">AI와 함께 만드는 9년차 프론트엔드 개발자</div>
      <div className="story-layout">
        <div className="story-photo fade-up d1">
          <img src="/contents/images/img02.png" alt="유한나 프로필 사진" />
        </div>
        <div className="story-text fade-up d2">
          <h3>아이디어가 있으면, 바로 만들어보는 사람입니다</h3>
          <p>
            9년간 대학·교육기관부터 기업 시스템, React 전환까지 수많은 화면을 직접 개발했습니다.<br />
            그 경험 위에 지금은 Claude Code로 개발 속도를 높이고 코드 품질은 직접 검증하며,<br />
            기획·디자인·개발·배포를 혼자 오가는 프론트엔드 개발자로 일합니다.<br />
            "이런 게 있으면 좋겠다"는 생각을 다음 날 링크로 보여줄 수 있는 것 — 그게 제 방식입니다.
          </p>
          <div className="badge-row">
            {BADGES.map((b) => <div key={b} className="st-badge">{b}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
