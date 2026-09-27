import type { Metadata } from "next";
import MissionGrid from "../components/MissionGrid";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import missions from "../data/missions.json";

export const metadata: Metadata = { title: "미션자세히보기", description: "ECO LOOP 26개 미션의 문제와 아이템 선정 이유를 확인합니다." };

export default function MissionsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero mission-list-hero"><p className="eyebrow">MISSION DETAIL</p><h1>카드 뒤에 담긴<br /><em>순환의 이유를 확인하세요</em></h1><p>미션 번호 또는 자원괴물 이름을 선택하면 문제의 원인, 아이템 선정 이유, 순환 과정과 오늘의 실천을 확인할 수 있습니다.</p></section>
      <section className="mission-section mission-archive-page">
        <div className="section-heading"><div><p className="eyebrow">ALL MISSIONS</p><h2>미션자세히보기</h2></div><p>카드 QR의 고유 주소는 그대로 유지됩니다.</p></div>
        <MissionGrid missions={missions} />
      </section>
      <SiteFooter />
    </main>
  );
}

