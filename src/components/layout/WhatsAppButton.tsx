"use client";

import { BUSINESS } from "@/lib/business";

const WA_NUMBER = "447482225323";
const WA_MESSAGE = "Hi, I'd like a quote for car detailing please.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${BUSINESS.name}`}
      className="whatsapp-fab"
    >
      {/* WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.445-2.012A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm8.27 22.574c-.342.963-2 1.842-2.74 1.96-.7.112-1.582.159-2.55-.16-.588-.192-1.344-.447-2.306-.876-4.055-1.75-6.7-5.833-6.9-6.104-.198-.272-1.617-2.152-1.617-4.104s1.022-2.912 1.385-3.31c.363-.4.79-.5 1.054-.5.264 0 .527.002.758.014.243.012.569-.092.892.68.341.805 1.16 2.757 1.262 2.957.103.2.172.433.034.698-.137.266-.206.43-.41.662-.204.232-.43.519-.612.697-.204.2-.416.415-.179.815.237.4 1.052 1.734 2.258 2.808 1.55 1.382 2.856 1.81 3.258 2.012.4.2.634.167.868-.1.234-.267 1.002-1.167 1.269-1.567.267-.4.534-.333.902-.2.367.134 2.33 1.1 2.73 1.3.4.2.667.3.765.467.1.166.1.963-.242 1.927Z" />
      </svg>
    </a>
  );
}
