import React from 'react';

const LightbulbIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Corpo da lâmpada */}
    <path
      d="M12 3.5C9.5 3.5 7.5 5.5 7.5 8C7.5 9.7 8.3 11 9.1 11.9C9.8 12.7 10.2 13.4 10.4 14.2
         H13.6C13.8 13.4 14.2 12.7 14.9 11.9C15.7 11 16.5 9.7 16.5 8C16.5 5.5 14.5 3.5 12 3.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Filamento */}
    <path
      d="M10 8.5C10.4 9.3 11.1 9.8 12 9.8C12.9 9.8 13.6 9.3 14 8.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Base da lâmpada */}
    <path
      d="M10.5 14.5V16.2C10.5 16.8 11 17.3 11.6 17.3H12.4C13 17.3 13.5 16.8 13.5 16.2V14.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Rosca */}
    <path
      d="M10.2 18H13.8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.5 19H13.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default LightbulbIcon;
