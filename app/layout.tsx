import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ECO LOOP | 자원순환 보드게임",
    template: "%s | ECO LOOP",
  },
  description: "생활 속 자원 문제를 발견하고 해결 경로를 만드는 참여형 자원순환 교육 보드게임 ECO LOOP",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

