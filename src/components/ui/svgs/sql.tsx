import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <ellipse
      cx="12"
      cy="5"
      rx="8"
      ry="3"
      fill="#00618A"
      stroke="#00618A"
      strokeWidth="0.5"
    />
    <path
      d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5"
      stroke="#00618A"
      strokeWidth="1.5"
      fill="#0288D1"
    />
    <path
      d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
      stroke="#00618A"
      strokeWidth="1.5"
      fill="#0288D1"
    />
  </svg>
);

export { Sql };
