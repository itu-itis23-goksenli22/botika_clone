"use client";

interface ProgressCircleProps {
  isActive: boolean;
  size?: number;
}

export default function ProgressCircle({
  isActive,
  size = 100,
}: ProgressCircleProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="absolute inset-0 -rotate-90"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#c9c9c9"
        strokeWidth="2"
        opacity={0.3}
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={isActive ? 0 : circumference}
        className="progress-circle-animated"
        strokeLinecap="round"
      />
    </svg>
  );
}
