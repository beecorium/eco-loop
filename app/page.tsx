import MissionGrid from "./components/MissionGrid";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import missions from "./data/missions.json";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="world-video-section" aria-labelledby="world-video-title">
        <div className="world-video-copy">
          <p className="eyebrow">ECO LOOP WORLD FILM</p>
          <h2 id="world-video-title">도시의 이상 신호가<br />루프링커를 깨웁니다</h2>
          <p>
            버려진 자원이 괴물이 되어 도시를 덮치고, 서로의 선택을 연결한 루프링커가
            다시 순환의 길을 엽니다. 게임을 시작하기 전 함께 보면 미션의 세계관과
            ‘하나의 LOOP’가 필요한 이유를 자연스럽게 이해할 수 있습니다.
          </p>
          <div className="world-video-links">
            <span>1분 8초 · 수업 도입 추천</span>
          </div>
        </div>
        <div className="world-video-frame">
          <video controls playsInline preload="metadata" poster="/video/eco-loop-intro-poster.jpg" aria-label="ECO LOOP 세계관 소개영상">
            <source src="https://greenloop-missions.beecorium.chatgpt.site/video/eco-loop-intro.mp4" type="video/mp4" />
            브라우저가 동영상 재생을 지원하지 않습니다.
          </video>
        </div>
      </section>

      <section className="official-hero">
        <div className="hero-copy">
          <p className="eyebrow">RESOURCE CIRCULATION BOARD GAME</p>
          <h1>도시의 자원괴물을<br /><em>함께 해결하는 보드게임</em></h1>
          <p className="hero-description">
            ECO LOOP는 생활 속 자원 문제를 발견하고, 아이템을 연결해 해결 경로를 만드는
            참여형 환경교육 보드게임입니다. 정답을 맞히는 데서 멈추지 않고 자원이 다시
            순환하는 이유까지 이야기합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/about">게임 소개 보기 <span>→</span></a>
            <a className="text-button" href="/guide">이용가이드</a>
          </div>
        </div>

        <div className="board-showcase" aria-label="ECO LOOP 보드게임 플레이 개념">
          <div className="board-caption"><span>PLAY</span><span>THINK</span><span>LOOP</span></div>
          <div className="board-grid" aria-hidden="true">
            <div className="board-tile tile-a">관찰</div><div className="board-tile tile-b">비우기</div><div className="board-tile tile-c">다회용</div>
            <div className="board-tile tile-d">분리배출</div><div className="board-tile tile-center">ECO<br />LOOP</div><div className="board-tile tile-e">재사용</div>
            <div className="board-tile tile-f">수리</div><div className="board-tile tile-g">나눔</div><div className="board-tile tile-h">순환</div>
          </div>
          <p>문제를 발견하고 · 아이템을 고르고 · 순환의 이유를 말해요</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-heading"><p className="eyebrow">WHY ECO LOOP?</p><h2>놀이가 수업이 되고,<br />선택이 실천이 됩니다</h2></div>
        <div className="intro-copy">
          <p>참가자는 자원괴물이 나타난 장소와 문제를 살펴보고, 제한된 아이템 카드로 가장 안전하고 실행 가능한 해결법을 설계합니다. 서로 다른 선택을 비교하고 설명하는 과정에서 자원순환을 하나의 시스템으로 이해하게 됩니다.</p>
          <a href="/about" className="inline-link">게임의 교육 목표 알아보기 ↗</a>
        </div>
      </section>

      <section className="feature-section" aria-label="ECO LOOP 핵심 경험">
        <article><span>01</span><h3>발견하기</h3><p>생활 공간 속 자원 문제와 원인을 카드의 단서로 관찰합니다.</p></article>
        <article><span>02</span><h3>연결하기</h3><p>아이템의 역할과 순환 과정을 연결해 해결 경로를 만듭니다.</p></article>
        <article><span>03</span><h3>설명하기</h3><p>선택한 이유를 나누고 오늘 실천할 행동으로 확장합니다.</p></article>
      </section>

      <section className="mission-section home-missions" id="missions">
        <div className="section-heading">
          <div><p className="eyebrow">MISSION DETAIL</p><h2>미션 자세히 보기</h2></div>
          <div className="section-heading-side"><p>카드 뒷면 QR과 같은 고유 주소로 상세한 해결 이유를 확인할 수 있습니다.</p><a href="/missions">전체 미션 보기 →</a></div>
        </div>
        <MissionGrid missions={missions.slice(0, 8)} />
      </section>

      <section className="resource-banner">
        <div><p className="eyebrow">FOR EDUCATORS</p><h2>수업에 바로 활용하세요</h2><p>게임 진행 안내와 보드게임 출력 자료를 한곳에서 확인할 수 있습니다.</p></div>
        <a className="light-button" href="/resources">자료실 바로가기 →</a>
      </section>
      <SiteFooter />
    </main>
  );
}

