import type { SVGProps } from "react";

const Perl = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="13" rx="9" ry="8" fill="#0298BF" />
    <ellipse cx="12" cy="13" rx="6" ry="5.5" fill="#FFFFFF" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="7"
      fontFamily="sans-serif"
      fontWeight="bold"
      fill="#0298BF"
    >
      P
    </text>
    <path
      d="M9 4C9 4 11 2 12 2C13 2 15 4 15 4L13 5L12 4L11 5L9 4Z"
      fill="#0298BF"
    />
  </svg>
);

export { Perl };
