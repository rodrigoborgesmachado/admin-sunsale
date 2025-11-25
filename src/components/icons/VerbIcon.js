import React from 'react';

const VerbIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Balão de fala */}
    <path
      d="M12 4C7.6 4 4 6.8 4 10C4 13.2 7.6 16 12 16C12.8 16 13.6 15.9 14.3 15.7L17 17V14.5C18.8 13.4 20 11.8 20 10C20 6.8 16.4 4 12 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Relâmpago representando "ação" */}
    <path
      d="M11 7L9 11H12L11 15L15 10H12L13 7H11Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default VerbIcon;
