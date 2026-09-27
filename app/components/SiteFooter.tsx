export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><a href="/" className="brand"><img className="brand-logo footer-logo" src="/eco-loop-logo.webp" alt="ECO LOOP" /></a><p>생활 속 선택을 자원순환의 시작으로 만드는 참여형 환경교육 보드게임</p></div>
      <nav aria-label="하단 메뉴"><a href="/about">게임소개</a><a href="/guide">이용가이드</a><a href="/resources">자료실</a><a href="/missions">미션자세히보기</a></nav>
      <small>실제 배출 시에는 거주 지역의 최신 분리배출 기준을 먼저 확인해 주세요.</small>
    </footer>
  );
}

