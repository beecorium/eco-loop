export default function BetaEventLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function updateStep() {
                document.querySelectorAll('.step').forEach(function (step) {
                  var no = step.querySelector('.no');
                  var title = step.querySelector('h3');
                  var desc = step.querySelector('p');
                  if (no && no.textContent.trim() === 'STEP 02' && title && title.textContent.trim() === '직접 플레이' && desc) {
                    desc.textContent = '교구 파일을 다운로드해 출력한 뒤, 안내선에 따라 간단히 잘라 준비해 주세요. 준비한 미션카드와 순환 아이템으로 직접 플레이해 봅니다.';
                  }
                });
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateStep);
              } else {
                updateStep();
              }
            })();
          `,
        }}
      />
    </>
  );
}
