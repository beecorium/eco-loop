import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import missions from "../../data/missions.json";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return missions.map((mission) => ({ slug: mission.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mission = missions.find((item) => item.slug === slug);
  if (!mission) return {};
  return { title: `${mission.id} ${mission.monster}`, description: mission.answer };
}

export default async function MissionDetail({ params }: PageProps) {
  const { slug } = await params;
  const index = missions.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();

  const mission = missions[index];
  const previous = index > 0 ? missions[index - 1] : null;
  const next = index < missions.length - 1 ? missions[index + 1] : null;
  const progress = Math.round(((index + 1) / missions.length) * 100);

  return (
    <main className="detail-page">
      <SiteHeader />

      <div className="progress-track" aria-label={`${missions.length}개 중 ${index + 1}번째 미션`}>
        <span style={{ width: `${progress}%` }} />
      </div>

      <article className="detail-shell">
        <header className="mission-hero">
          <div className="mission-identity">
            <span className="large-number">{mission.id}</span>
            <span className="location-chip">⌖ {mission.location}</span>
          </div>
          <p className="monster-label">오늘의 자원괴물</p>
          <h1>{mission.monster}</h1>
          <p className="mission-title">{mission.title}</p>
          <div className="answer-panel">
            <span>기본 해결법</span>
            <strong>{mission.answer}</strong>
          </div>
        </header>

        <section className="content-section problem-section">
          <p className="section-kicker">01 · PROBLEM</p>
          <h2>무엇이 문제였을까요?</h2>
          <p className="lead-copy">{mission.diagnosis}</p>
        </section>

        <section className="content-section">
          <p className="section-kicker">02 · ITEMS</p>
          <h2>왜 이 아이템을 선택했나요?</h2>
          <div className="reason-grid">
            {mission.reasons.map((reason, reasonIndex) => {
              const [name, ...description] = reason.split(":");
              return (
                <article className="reason-card" key={reason}>
                  <span className="reason-index">{String(reasonIndex + 1).padStart(2, "0")}</span>
                  <h3>{name}</h3>
                  <p>{description.join(":").trim()}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section flow-section">
          <p className="section-kicker">03 · LOOP</p>
          <h2>순환의 길</h2>
          <ol className="flow-list">
            {mission.flow.split(" → ").map((step, stepIndex) => (
              <li key={`${step}-${stepIndex}`}><span>{stepIndex + 1}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>

        <section className="action-grid">
          <div className="action-card today-card">
            <span className="action-icon">✓</span>
            <div><p>오늘 해볼 일</p><strong>{mission.action}</strong></div>
          </div>
          <div className="action-card caution-card">
            <span className="action-icon">!</span>
            <div><p>꼭 알아둘 점</p><strong>{mission.caution}</strong></div>
          </div>
        </section>

        <details className="source-panel">
          <summary>공식 자료로 더 알아보기 <span>+</span></summary>
          <ul>
            {mission.sources.map((source) => (
              <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>
            ))}
          </ul>
        </details>

        <nav className="mission-navigation" aria-label="미션 이동">
          {previous ? (
            <a href={`/missions/${previous.slug}`} className="nav-card previous">
              <small>← 이전 미션</small><strong>{previous.id} {previous.monster}</strong>
            </a>
          ) : <div className="nav-placeholder" />}
          {next ? (
            <a href={`/missions/${next.slug}`} className="nav-card next">
              <small>다음 미션 →</small><strong>{next.id} {next.monster}</strong>
            </a>
          ) : (
            <a href="/missions" className="nav-card next"><small>모험 완료</small><strong>전체 미션 보기</strong></a>
          )}
        </nav>
      </article>

      <SiteFooter />
    </main>
  );
}

