// Created: 2026-07-27 16:32
const STEPS = [
  { no: '01', ico: '💬', title: '기획 · 구조 설계', tool: 'Claude', desc: '대화로 요구사항을 정리하고 화면 구조·플로우를 설계합니다.', delay: 'd1' },
  { no: '02', ico: '🎨', title: 'UI 디자인', tool: 'Claude · Figma', desc: '화면 시안과 디자인 시스템을 AI로 잡고 개발자의 눈으로 다듬습니다.', delay: 'd2' },
  { no: '03', ico: '⚡', title: '개발 · 구현', tool: 'Claude Code', desc: 'Claude Code를 활용해 반응형·웹표준 화면을 빠르게 구현합니다.', delay: 'd3' },
  { no: '04', ico: '🚀', title: '배포 · 운영', tool: 'Vercel · Netlify', desc: 'Git으로 버전 관리하고 원클릭으로 배포·수정 반영합니다.', delay: 'd4' },
];

export default function AiFlow() {
  return (
    <section id="ai">
      <div className="ai-head">
        <div className="ai-eyebrow fade-up">AI Workflow</div>
        <h2 className="fade-up d1">AI를 <em>제대로</em> 쓰는 프론트엔드 개발자<br />— 기획부터 배포까지 혼자 끝냅니다</h2>
        <p className="ai-sub fade-up d2">
          "AI를 쓴다"가 아니라 "AI로 완성한다". 9년간의 프론트엔드 실무 감각으로 AI 산출물을 코드 레벨에서 검수·리팩토링해, 실제 배포 가능한 품질까지 끌어올립니다.
        </p>
      </div>
      <div className="ai-flow">
        {STEPS.map((s) => (
          <div key={s.no} className={`ai-step fade-up ${s.delay}`}>
            <span className="st-no">{s.no}</span>
            <div className="ico">{s.ico}</div>
            <h3>{s.title}</h3>
            <span className="tool">{s.tool}</span>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="ai-proof">
        <span className="pf fade-up d1">🔁 레거시 화면 → AI 리디자인 <b>3종</b></span>
        <span className="pf fade-up d2">⏱️ 아이디어 → 라이브 링크 <b>D+1</b></span>
        <span className="pf fade-up d3">✅ 이 포트폴리오도 <b>Claude Code</b>로 제작</span>
      </div>
    </section>
  );
}
