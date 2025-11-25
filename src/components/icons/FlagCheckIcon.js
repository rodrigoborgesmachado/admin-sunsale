import React from 'react';

const FlagCheckIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Haste da bandeira */}
    <path
      d="M5 3V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Bandeira */}
    <path
      d="M5 4H15C16.5 4 18 5 18 6.5C18 8 16.5 9 15 9H5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Check */}
    <path
      d="M10 6.5L11.5 8L14 5.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default FlagCheckIcon;
