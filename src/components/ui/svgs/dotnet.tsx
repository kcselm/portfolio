import type { SVGProps } from "react";

const DotNet = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#512BD4" />
    <text
      x="16"
      y="22"
      textAnchor="middle"
      fontSize="11"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
      fontWeight="700"
      letterSpacing="-0.5"
      fill="#FFFFFF"
    >
      .NET
    </text>
  </svg>
);

export { DotNet };
