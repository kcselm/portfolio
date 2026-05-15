import type { SVGProps } from "react";

const PowerBI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="10" width="4" height="11" rx="0.5" fill="#F2C811" />
    <rect x="10" y="6" width="4" height="15" rx="0.5" fill="#E8A33D" />
    <rect x="17" y="2" width="4" height="19" rx="0.5" fill="#C87F0A" />
  </svg>
);

export { PowerBI };
