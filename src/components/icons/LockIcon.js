import React from 'react';

const LockIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Arco do cadeado */}
    <path
      d="M8 10V7.5C8 5 9.8 3 12 3C14.2 3 16 5 16 7.5V10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Corpo do cadeado */}
    <rect
      x="5"
      y="10"
      width="14"
      height="11"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />

    {/* Fecho */}
    <path
      d="M12 14V17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="13"
      r="1"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

export default LockIcon;
