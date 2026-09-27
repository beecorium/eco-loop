"use client";

import { useState } from "react";

export default function CopyLinkButton({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = new URL(path, window.location.origin).toString();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const succeeded = document.execCommand("copy");
      textarea.remove();
      if (succeeded) {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } else {
        window.prompt("아래 주소를 복사해 주세요.", url);
      }
    }
  }

  return (
    <button className="copy-button" type="button" onClick={copyLink} aria-live="polite">
      {copied ? "복사 완료 ✓" : "링크 복사"}
    </button>
  );
}

