import type { Metadata } from "next";
import CopyLinkButton from "../components/CopyLinkButton";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import missions from "../data/missions.json";

export const metadata: Metadata = {
  title: "26개 미션 개별 링크",
  description: "QR 제작에 사용할 ECO LOOP 26개 미션의 고유 주소 모음입니다.",
};

export default function LinkArchive() {
  return (
    <main>
      <SiteHeader />

      <section className="links-hero">
        <p className="eyebrow">DIRECT LINK ARCHIVE</p>
        <h1>26개 미션<br /><em>개별 링크 모음</em></h1>
        <p>각 주소는 해당 미션으로 바로 연결됩니다. ‘링크 복사’를 눌러 QR 제작 도구에 붙여 넣으세요.</p>
      </section>

      <section className="link-archive" aria-label="미션별 개별 링크">
        {missions.map((mission) => {
          const path = `/missions/${mission.slug}`;
          return (
            <article className="link-row" key={mission.id}>
              <a className="link-row-main" href={path}>
                <span>{mission.id}</span>
                <div><strong>{mission.monster}</strong><small>{mission.location} · {mission.title}</small></div>
                <i aria-hidden="true">↗</i>
              </a>
              <CopyLinkButton path={path} />
            </article>
          );
        })}
      </section>

      <SiteFooter />
    </main>
  );
}

