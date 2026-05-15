import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 5V19C4 20.381 7.582 21.5 12 21.5C16.418 21.5 20 20.381 20 19V5"
      fill="#0288D1"
      stroke="#01579B"
      strokeWidth="0.75"
    />
    <ellipse
      cx="12"
      cy="5"
      rx="8"
      ry="2.5"
      fill="#039BE5"
      stroke="#01579B"
      strokeWidth="0.75"
    />
    <path
      d="M4 10C4 11.381 7.582 12.5 12 12.5C16.418 12.5 20 11.381 20 10"
      fill="none"
      stroke="#01579B"
      strokeWidth="0.75"
    />
    <path
      d="M4 15C4 16.381 7.582 17.5 12 17.5C16.418 17.5 20 16.381 20 15"
      fill="none"
      stroke="#01579B"
      strokeWidth="0.75"
    />
  </svg>
);

export { Sql };
