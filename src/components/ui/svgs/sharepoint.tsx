import type { SVGProps } from "react";

const SharePoint = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <circle cx="8.5" cy="7.5" r="5.5" fill="#036C70" />
    <circle cx="15" cy="13" r="5" fill="#1A9BA1" />
    <circle cx="11" cy="18" r="3.5" fill="#37C6D0" />
    <path
      d="M6.5 5.5H10.5C11 5.5 11 6 11 6V9C11 9.5 10.5 9.5 10.5 9.5H6.5V5.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export { SharePoint };
