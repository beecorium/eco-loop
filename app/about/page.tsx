import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "게임소개", description: "ECO LOOP 자원순환 보드게임의 목표와 핵심 경험을 소개합니다." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero about-hero"><p className="eyebrow">ABOUT THE GAME</p><h1>자원 문제를 발견하고<br /><em>순환의 길을 설계하는 게임</em></h1><p>ECO LOOP는 정답 암기보다 관찰·연결·설명을 통해 생활 속 자원순환을 이해하도록 설계된 참여형 보드게임입니다.</p></section>
      <section className="story-section">
        <div className="story-number">01</div>
        <div><p className="section-kicker">THE STORY</p><h2>도시에 자원괴물이 나타났어요</h2><p>버려진 종이, 뒤섞인 포장재, 한 번 쓰고 사라지는 물건들. 참가자는 도시 곳곳의 자원 문제를 괴물의 모습으로 마주합니다. 문제의 원인을 읽고 가진 아이템의 역할을 연결해 가장 실행 가능한 해결 경로를 찾아야 합니다.</p></div>
      </section>
      <section className="game-facts">
        <article><span>참여 인원</span><strong>2–4명 또는 2–4팀</strong><p>개인전과 팀 활동 모두 가능합니다.</p></article>
        <article><span>권장 미션</span><strong>5–10개 선택</strong><p>수업 시간과 참가자의 수준에 맞춥니다.</p></article>
        <article><span>핵심 활동</span><strong>관찰 · 추론 · 설명</strong><p>선택한 해결법의 이유를 함께 나눕니다.</p></article>
      </section>
      <section className="learning-section">
        <div><p className="eyebrow">LEARNING GOALS</p><h2>게임을 통해 배우는 것</h2></div>
        <div className="learning-list">
          <article><span>01</span><div><h3>자원 문제를 구체적으로 관찰합니다</h3><p>장소, 물건의 상태, 배출 방식과 사용 습관을 함께 살펴봅니다.</p></div></article>
          <article><span>02</span><div><h3>아이템과 행동의 쓰임을 연결합니다</h3><p>어떤 도구가 왜 필요한지, 순환 과정에서 어떤 역할을 하는지 추론합니다.</p></div></article>
          <article><span>03</span><div><h3>여러 해결법을 비교하고 설명합니다</h3><p>안전성과 실행 가능성을 기준으로 대안을 검토하고 자신의 선택을 말합니다.</p></div></article>
          <article><span>04</span><div><h3>수업 밖의 실천으로 확장합니다</h3><p>게임에서 찾은 해결법을 학교와 가정에서 할 수 있는 행동으로 바꿉니다.</p></div></article>
        </div>
      </section>
      <section className="page-cta"><div><p>READY TO PLAY?</p><h2>이제 게임을 시작해 볼까요?</h2></div><a className="light-button" href="/guide">이용가이드 보기 →</a></section>
      <SiteFooter />
    </main>
  );
}

