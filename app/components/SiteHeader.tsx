"use client";

import { useEffect, useState } from "react";
import missions from "../data/missions.json";

const menuItems = [
  { number: "01", title: "게임소개", note: "ECO LOOP가 만드는 배움", href: "/about" },
  { number: "02", title: "이용가이드", note: "준비부터 마무리까지", href: "/guide" },
  { number: "03", title: "자료실", note: "교사용·출력용 자료", href: "/resources" },
  { number: "04", title: "미션자세히보기", note: "26개 미션 해설", href: "/missions" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [missionsOpen, setMissionsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { setMenuOpen(false); setMissionsOpen(false); }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleMenu() { setMenuOpen((open) => !open); setMissionsOpen(false); }
  function toggleMissions() { setMissionsOpen((open) => !open); setMenuOpen(false); }

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="global-menu" aria-label={menuOpen ? "전체 메뉴 닫기" : "전체 메뉴 열기"}>
            <span /><span /><span />
          </button>
          <a href="/" className="brand" aria-label="ECO LOOP 홈"><img className="brand-logo" src="/eco-loop-logo.webp" alt="ECO LOOP" /></a>
        </div>
        <button className="mission-quick-button" type="button" onClick={toggleMissions} aria-expanded={missionsOpen} aria-controls="mission-quick-panel">
          미션 바로가기 <span>{missionsOpen ? "↑" : "↓"}</span>
        </button>
      </header>

      {menuOpen && (
        <div className="nav-layer" onClick={() => setMenuOpen(false)}>
          <nav className="global-menu" id="global-menu" aria-label="전체 메뉴" onClick={(event) => event.stopPropagation()}>
            <div className="menu-intro"><p>RESOURCE CIRCULATION BOARD GAME</p><strong>배우고, 연결하고,<br />다시 순환하는 방법</strong></div>
            <div className="global-menu-grid">
              {menuItems.map((item) => <a href={item.href} key={item.number}><span>{item.number}</span><strong>{item.title}</strong><small>{item.note}</small><i>↗</i></a>)}
            </div>
          </nav>
        </div>
      )}

      {missionsOpen && (
        <div className="nav-layer mission-layer" onClick={() => setMissionsOpen(false)}>
          <section className="mission-quick-panel" id="mission-quick-panel" aria-label="미션 바로가기" onClick={(event) => event.stopPropagation()}>
            <div className="quick-panel-heading"><div><p className="eyebrow">MISSION QUICK MENU</p><h2>어떤 미션을 찾고 있나요?</h2></div><a href="/missions">전체 미션 보기 →</a></div>
            <div className="mission-quick-grid">{missions.map((mission) => <a href={`/missions/${mission.slug}`} key={mission.id}><span>{mission.id}</span><strong>{mission.monster}</strong></a>)}</div>
          </section>
        </div>
      )}
    </>
  );
}

