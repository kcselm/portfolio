import type { SVGProps } from "react";

const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path d="M12 1L2 4.5L3.5 17L12 22L20.5 17L22 4.5L12 1Z" fill="#DD0031" />
    <path d="M12 1V22L20.5 17L22 4.5L12 1Z" fill="#C3002F" />
    <path
      d="M12 4L5.5 18H8L9.3 14.7H14.7L16 18H18.5L12 4ZM13.9 12.6H10.1L12 8L13.9 12.6Z"
      fill="#FFFFFF"
    />
  </svg>
);

export { Angular };
