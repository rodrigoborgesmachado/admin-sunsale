import React from 'react';

const PumpkinIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Corpo da abóbora */}
    <path
      d="M12 19C8 19 5 16 5 12C5 8 8 5 12 5C16 5 19 8 19 12C19 16 16 19 12 19Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Gomos da abóbora */}
    <path
      d="M9 6.5C8 8 7.5 10 7.5 12C7.5 14 8 16 9 17.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M15 6.5C16 8 16.5 10 16.5 12C16.5 14 16 16 15 17.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Talo */}
    <path
      d="M12 5V3.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

  </svg>
);

export default PumpkinIcon;
