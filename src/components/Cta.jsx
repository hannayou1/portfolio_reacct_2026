// Created: 2026-07-27 16:32
export default function Cta() {
  return (
    <section id="cta">
      <div className="cta-eyebrow fade-up">Contact</div>
      <h2 className="fade-up d1">아이디어, 함께 서비스로 만들어요</h2>
      <p className="fade-up d2">AI 활용 개발 기반 웹·앱 제작 · 프로젝트 협업 · 채용 문의 환영합니다</p>
      {/* <div className="cta-btns fade-up d2">
        <a href="" className="btn-cta-white">📩 이메일 보내기</a>
      </div> */}
      <div className="social-row fade-up d3">
        <a href="https://github.com/hannayou1" target="_blank" rel="noopener noreferrer" className="s-icon" aria-label="깃허브">Git</a>
      </div>
    </section>
  );
}
