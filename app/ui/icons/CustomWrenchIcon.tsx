import * as React from "react";

interface CustomWrenchIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CustomWrenchIcon: React.FC<CustomWrenchIconProps> = ({
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 39.392 5.144 C 39.393 7.781 37.136 9.853 34.508 9.628 C 33.432 9.537 32.244 9.699 31.558 10.532 L 5.431 38.471 C 4.187 39.987 1.768 39.588 1.077 37.753 C 0.692 36.731 1.001 35.577 1.845 34.885 L 29.504 8.478 C 30.337 7.792 30.499 6.604 30.408 5.528 C 30.114 2.104 33.612 -0.373 36.744 1.042 L 33.468 4.318 C 33.727 5.436 34.6 6.309 35.718 6.568 L 38.994 3.292 C 39.25 3.857 39.392 4.484 39.392 5.144 Z"
      style={{
        fillRule: "nonzero",
        paintOrder: "stroke markers",
      }}
    />
  </svg>
);

export default CustomWrenchIcon;
