import React from 'react';

const LeafIcon = ({ size = 30, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Contorno da folha */}
    <path
      d="M12 20C9 18 6 14.5 6 11C6 8 8.2 5.5 12 4C15.8 5.5 18 8 18 11C18 14.5 15 18 12 20Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Nervura central */}
    <path
      d="M12 19V8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Nervuras laterais */}
    <path
      d="M12 12C10.8 12 10 11.5 9 10.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 14C13.2 14 14 13.5 15 12.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default LeafIcon;
