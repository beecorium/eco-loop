import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "자료실", description: "ECO LOOP 수업 및 보드게임 출력 자료를 확인합니다." };

const resources = [
  { type: "TEACHER GUIDE", title: "수업지도안", description: "수업 흐름, 난이도 조절, 최종 습관괴물, 평가와 유의사항을 담은 교사용 지도안입니다.", status: "PDF 다운로드", href: "/downloads/eco-loop-lesson-plan.pdf" },
  { type: "MISSION CARD", title: "대형 스크린용 미션카드 PDF", description: "26개 미션과 최종 습관괴물 활동을 수업 화면에서 활용할 수 있도록 구성한 자료입니다.", status: "PDF 다운로드", href: "/downloads/eco-loop-mission-cards.pdf" },
  { type: "PRINTABLE PDF", title: "보드게임 출력용 PDF", description: "ECO LOOP 카드와 게임 구성물을 인쇄할 수 있는 출력 파일입니다. 분실하거나 마모된 카드는 다운로드 받아 사용해주세요. 보드게임을 오래 사용하실 수 있습니다. 아래 양면인쇄 팁은 일반적인 내용으로 프린트 사양에 따라 다르게 적용될 수 있습니다.", status: "PDF 다운로드", href: "/downloads/eco-loop-boardgame-print.pdf" },
];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero resource-hero"><p className="eyebrow">DOWNLOAD CENTER</p><h1>수업 준비를 돕는<br /><em>ECO LOOP 자료실</em></h1><p>수업지도안, 26개 미션과 최종 습관괴물 발표 자료, 출력용 게임 파일을 바로 내려받아 수업에 활용하세요.</p></section>
      <section className="resource-list">
        <div className="resource-notice"><strong>자료 이용 안내</strong><p>인쇄 전 용지 크기와 양면 출력 방향을 확인해 주세요. 제공 자료는 ECO LOOP 교육 활동을 위한 용도로 사용해 주세요.</p></div>
        <div className="resource-grid">
          {resources.map((resource, index) => (
            <article className={`resource-card ${resource.href ? "" : "is-pending"}`} key={resource.title}>
              <div className="resource-card-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{resource.type}</small></div>
              <h2>{resource.title}</h2><p>{resource.description}</p>
              {resource.href ? <a href={resource.href} download>{resource.status} <span>↓</span></a> : <span className="pending-label">{resource.status}</span>}
            </article>
          ))}
        </div>
        <section className="print-tips" aria-labelledby="print-tips-title">
          <div><p className="eyebrow">DOUBLE-SIDED PRINT</p><h2 id="print-tips-title">양면인쇄 팁</h2><p>카드의 앞·뒤가 정확히 맞도록 전체 출력 전에 한 장을 먼저 시험해 보세요.</p></div>
          <ol>
            <li><span>01</span><p><strong>A4 · 실제 크기 100%</strong>로 설정하고 ‘페이지에 맞춤’ 또는 자동 확대·축소는 해제합니다.</p></li>
            <li><span>02</span><p>인쇄 위치는 <strong>용지 중앙</strong>으로 맞추고, 앞면 한 장과 뒷면 한 장을 시험 출력해 방향을 확인합니다.</p></li>
            <li><span>03</span><p>자동 양면인쇄 시 프린터에 맞는 <strong>긴 변 또는 짧은 변 넘김</strong>을 선택하고 앞·뒤가 같은 방향인지 확인합니다.</p></li>
            <li><span>04</span><p>후면이 한쪽으로 밀리면 프린터의 <strong>양면 위치 보정</strong>을 사용하거나 전면 전체 출력 후 용지를 뒤집어 수동 양면인쇄합니다.</p></li>
          </ol>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}

