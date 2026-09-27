import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "이용가이드",
  description: "ECO LOOP 보드게임의 사전 준비, 난이도별 진행, 점수 계산과 최종 미션을 안내합니다.",
};

const playSteps = [
  ["원인 이야기하기", "미션카드 앞면의 괴물과 장소를 살펴보고, 자원 문제가 발생한 원인을 함께 이야기합니다."],
  ["아이템 선택하기", "미션카드의 숫자를 확인한 뒤 선택한 난이도에 따라 적절한 아이템만 남기고 나머지는 접어 보이지 않게 합니다."],
  ["해법 확인하기", "미션카드를 뒤집어 기본 해법과 비교하고, 선택한 아이템이 자원의 순환을 어떻게 다시 연결하는지 설명합니다."],
  ["미션카드 획득하기", "난이도별 기준에 따라 가장 빠르고 정확하게 해결한 플레이어 또는 팀이 미션카드를 획득합니다."],
  ["점수 계산하기", "게임이 끝나면 획득한 미션카드에 표시된 숫자를 모두 더합니다. 숫자의 합이 가장 높은 플레이어가 개인전 우승자가 됩니다."],
];

export default function GuidePage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero guide-hero">
        <p className="eyebrow">HOW TO PLAY</p>
        <h1>처음 플레이해도,<br /><em>한 번에 진행할 수 있도록</em></h1>
        <p>카드 준비부터 난이도 조절, 점수 계산과 습관괴물 최종 미션까지 실제 수업 순서대로 안내합니다.</p>
      </section>

      <section className="guide-summary" aria-label="게임 기본 정보">
        <article><span>PLAYERS</span><strong>2–4명 또는 팀</strong><p>개인전과 팀전 모두 가능</p></article>
        <article><span>PLAY TIME</span><strong>20–30분</strong><p>수업 시간에 따라 카드 수 조절</p></article>
        <article><span>MISSION</span><strong>미션카드 27장</strong><p>번호 순서와 관계없이 선택</p></article>
        <article><span>ITEM</span><strong>아이템카드 Ⅰ·Ⅱ</strong><p>개인 또는 팀별 한 세트</p></article>
      </section>

      <section className="guide-intro-video">
        <div>
          <p className="eyebrow">01 · WORLD FILM</p>
          <h2>세계관 영상으로<br />루프링커를 깨워 주세요</h2>
        </div>
        <div>
          <p>게임 전 세계관 영상을 함께 보면 도시의 자원괴물이 나타난 이유와 루프링커의 역할을 자연스럽게 이해할 수 있습니다. 영상을 본 참여자는 도시의 순환을 다시 연결하는 루프링커가 됩니다.</p>
          <a className="inline-link" href="/#world-video-title">세계관 영상 보기 ↗</a>
        </div>
      </section>

      <section className="prepare-section">
        <div className="section-heading">
          <div><p className="eyebrow">02 · BEFORE PLAY</p><h2>게임 전 준비와 세팅</h2></div>
          <p>카드를 처음 사용할 때 아래 순서대로 준비하면 진행이 훨씬 빨라집니다.</p>
        </div>
        <div className="prepare-grid guide-prepare-grid">
          <article><span>01</span><h3>아이템카드 접기</h3><p>순환 아이템카드를 접는 선 기준 중앙에 맞춰 안쪽으로 접었다가 다시 펼쳐 주세요.</p></article>
          <article><span>02</span><h3>미션카드 놓기</h3><p>선택한 미션카드는 괴물이 보이는 앞면이 위로 향하도록 중앙에 놓습니다.</p></article>
          <article><span>03</span><h3>수준에 맞게 선택</h3><p>참여자의 연령, 이해도와 수업 시간에 따라 카드 수와 종류를 선택합니다. 번호 순서대로 놓을 필요는 없습니다.</p></article>
          <article><span>04</span><h3>아이템 나누기</h3><p>개인 또는 팀별로 순환 아이템카드 Ⅰ·Ⅱ 한 세트를 나누어 갖습니다.</p></article>
          <article><span>05</span><h3>최종 카드 분리</h3><p>습관괴물 최종 미션 카드는 일반 미션에 섞지 않고 마지막까지 별도로 둡니다.</p></article>
          <article className="prepare-tip"><span>TIP</span><h3>빠르게 접는 방법</h3><p>여러 겹이 한쪽으로 몰리지 않도록 위·아래로 나누어 접으면 빠른 미션 수행에 도움이 됩니다.</p></article>
        </div>
      </section>

      <section className="step-section">
        <div className="section-heading">
          <div><p className="eyebrow">03 · PLAY FLOW</p><h2>한 미션은 이렇게 진행합니다</h2></div>
          <p>이야기하고, 선택하고, 비교하고, 설명하는 과정이 한 번의 순환을 만듭니다.</p>
        </div>
        <ol className="guide-steps">
          {playSteps.map((step, index) => (
            <li key={step[0]}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></li>
          ))}
        </ol>
        <aside className="qr-guide-note">
          <strong>미션을 더 깊이 이해하려면</strong>
          <p>미션카드 후면의 QR을 스캔해 자원 문제의 원인, 기본 해법, 자원순환 과정과 참고자료를 확인하세요.</p>
          <a href="/missions">미션별 상세 해설 보기 →</a>
        </aside>
      </section>

      <section className="level-section">
        <div className="section-heading">
          <div><p className="eyebrow">04 · THREE LEVELS</p><h2>참여자 수준에 맞춘 난이도</h2></div>
          <p>처음에는 쉬움으로 규칙을 익히고, 익숙해지면 보통과 어려움으로 확장하세요.</p>
        </div>
        <div className="level-grid detailed-level-grid">
          <article>
            <div><span>LEVEL 1</span><strong>쉬움</strong></div>
            <h3>해법을 보고 빠르게 접기</h3>
            <p>미션카드를 먼저 뒤집어 후면의 아이템을 확인합니다. 적절한 아이템만 남기고 나머지를 접어 가장 빠르고 정확하게 완성한 플레이어가 미션카드를 획득합니다.</p>
            <small>추천 · 초등 저학년, 첫 플레이</small>
          </article>
          <article>
            <div><span>LEVEL 2</span><strong>보통</strong></div>
            <h3>앞면에서 예측하고 비교하기</h3>
            <p>미션카드를 뒤집기 전에 적절한 아이템만 남기고 나머지를 접습니다. 이후 후면의 기본 해법과 비교해 적절한 아이템을 가장 많이 선택한 플레이어가 카드를 획득합니다.</p>
            <small>추천 · 기본 수업, 문제해결 활동</small>
          </article>
          <article>
            <div><span>LEVEL 3</span><strong>어려움</strong></div>
            <h3>아이템에 없는 해법까지 제안하기</h3>
            <p>보통과 같은 방식으로 진행한 뒤, 아이템카드에 없는 새로운 해결 방법을 포스트잇에 적어 추가합니다. 기본 해법의 적중도와 대안의 실행 가능성, 설명을 함께 비교합니다.</p>
            <small>추천 · 초등 고학년 이상, 토론 수업</small>
          </article>
        </div>
      </section>

      <section className="score-section">
        <div>
          <p className="eyebrow">05 · SCORE & JUDGEMENT</p>
          <h2>점수보다 먼저,<br />선택의 이유를 확인합니다</h2>
          <p>획득한 미션카드의 숫자를 합산해 우승자를 정합니다. 그러나 ECO LOOP의 판정은 정답 개수만으로 끝나지 않습니다.</p>
        </div>
        <div className="score-guide">
          <article><span>01</span><div><strong>점수 계산</strong><p>획득한 미션카드에 표시된 숫자의 합이 가장 높은 플레이어 또는 팀이 개인전 우승자가 됩니다.</p></div></article>
          <article><span>02</span><div><strong>새로운 해법 인정</strong><p>후면과 달라도 안전하고 실행 가능하며, 자원이 다음 쓰임으로 이어지는 이유를 설명할 수 있다면 인정할 수 있습니다.</p></div></article>
          <article><span>03</span><div><strong>의견이 다를 때</strong><p>바로 다수결로 결정하지 않습니다. 선택한 아이템과 주체별 역할, 자원순환 과정을 설명한 뒤 충분히 의견을 나눕니다.</p></div></article>
        </div>
      </section>

      <section className="final-mission-section">
        <div>
          <p className="eyebrow">06 · FINAL MISSION</p>
          <h2>습관괴물을 봉인하라!</h2>
          <p><strong>거울에 보이는 사람이 괴물이라는 뜻은 아니에요.</strong> 습관괴물은 누구에게나 몰래 붙어 자원의 순환을 끊어 놓는 나쁜 습관입니다. 괴물은 일상의 습관을 통해 다시 돌아올 수 있습니다.</p>
        </div>
        <ol>
          <li><span>01</span><p><strong>최종 카드 공개</strong> · 점수 1위 플레이어가 최종 미션 카드를 뒤집습니다.</p></li>
          <li><span>02</span><p><strong>습관괴물 선택</strong> · 각자 자신에게 자주 나타나는 습관괴물 하나를 고릅니다.</p></li>
          <li><span>03</span><p><strong>아이템으로 봉인</strong> · 게임에서 사용한 순환 아이템카드를 접어 선택한 괴물 위에 놓습니다.</p></li>
          <li><span>04</span><p><strong>필살기 선언</strong> · “나는 오늘부터 __________을/를 __________해서 자원이 다시 순환하도록 돕겠습니다.”라고 외칩니다.</p></li>
          <li><span>05</span><p><strong>공동 미션 성공</strong> · 모두가 아이템을 놓고 필살기를 외치면 에코루프 방패가 완성됩니다. 개인전 승패와 별개로 전체 플레이어가 최종 미션에 성공합니다.</p></li>
        </ol>
        <div className="final-mission-images">
          <img src="/final-mission-reveal.png" alt="최종 보스의 정체를 밝히는 최종 미션 카드" />
          <img src="/habit-monster-card.png" alt="여섯 가지 습관괴물과 중앙 거울이 있는 최종 보스 카드" />
        </div>
      </section>

      <section className="classroom-section">
        <div className="section-heading">
          <div><p className="eyebrow">07 · CLASSROOM MODE</p><h2>수업 규모에 맞게 확장하세요</h2></div>
          <p>개인 경쟁형부터 학급 전체 공동 미션까지 같은 교구로 운영할 수 있습니다.</p>
        </div>
        <div className="classroom-grid">
          <article><span>TEAM PLAY</span><h3>대형 스크린 공동 미션</h3><p>팀워크 중심의 수업에서는 대형 스크린으로 미션을 공개하고, 대형 순환 아이템카드를 참여자들이 함께 접는 방식으로 진행할 수 있습니다.</p></article>
          <article><span>TEACHER RESOURCE</span><h3>교사용 자료 활용</h3><p>웹사이트에서 수업지도안, 대형 스크린용 미션카드 PDF, 미션별 상세 해설과 보드게임 출력용 PDF를 확인할 수 있습니다.</p><a className="inline-link" href="/resources">자료실 바로가기 ↗</a></article>
        </div>
      </section>

      <section className="caution-section">
        <div><p className="eyebrow">PLEASE NOTE</p><h2>교구 사용 유의사항</h2></div>
        <ul>
          <li><span>01</span><p><strong>손가락과 카드가 다치지 않도록</strong>순환 아이템카드를 접거나 펼칠 때 무리하게 당기지 않으며, 손가락이 접히는 부분에 끼이지 않도록 주의합니다. 여러 겹이 한쪽 방향으로 몰리면 접기 어려울 수 있으므로 위아래로 분산하여 접습니다.</p></li>
          <li><span>02</span><p><strong>실제 배출 전 최신 기준 확인</strong>교구에 제시된 분리배출 기준은 2026년 8월 4일을 기준으로 적용했습니다. 실제 배출 시에는 지역별 최신 기준을 확인합니다.</p></li>
          <li><span>03</span><p><strong>판정은 설명과 대화로</strong>판정 의견이 다를 때에는 바로 다수결로 결정하지 않고, 각 플레이어가 선택한 아이템과 주체별 역할, 자원순환 과정을 설명한 뒤 충분히 의견을 나눕니다.</p></li>
        </ul>
      </section>

      <section className="reprint-section">
        <div>
          <p className="eyebrow">USE IT AGAIN</p>
          <h2>카드가 없어지거나<br />마모되어도 괜찮아요</h2>
        </div>
        <div>
          <p>ECO LOOP 카드와 게임 구성물을 인쇄할 수 있는 보드게임 출력용 PDF를 제공합니다. 분실하거나 마모된 카드는 내려받아 다시 출력하면 보드게임을 더 오래 사용할 수 있습니다.</p>
          <a className="light-button" href="/resources">출력자료 확인하기 →</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

