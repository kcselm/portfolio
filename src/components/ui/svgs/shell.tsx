import type { SVGProps } from "react";

const Shell = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      fill="#1E1E1E"
      stroke="#4D4D4D"
      strokeWidth="1"
    />
    <rect x="2" y="4" width="20" height="3" rx="2" fill="#2D2D2D" />
    <circle cx="4.5" cy="5.5" r="0.5" fill="#FF5F56" />
    <circle cx="6.5" cy="5.5" r="0.5" fill="#FFBD2E" />
    <circle cx="8.5" cy="5.5" r="0.5" fill="#27C93F" />
    <path
      d="M5 11L7.5 13.5L5 16"
      stroke="#4AF626"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 16.5H14"
      stroke="#4AF626"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { Shell };
