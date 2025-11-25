import React from 'react';

const CarIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Corpo do carro – mais alto */}
    <path
      d="M4 14V11.5C4 10.7 4.4 9.9 5.1 9.5L7.5 8.2C8.3 7.8 9.3 7.5 10.2 7.5H13.8C14.7 7.5 15.7 7.8 16.5 8.2L18.9 9.5C19.6 9.9 20 10.7 20 11.5V14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Rodas grandes */}
    <circle
      cx="7"
      cy="16.5"
      r="2.3"
      stroke={color}
      strokeWidth="2"
    />

    <circle
      cx="17"
      cy="16.5"
      r="2.3"
      stroke={color}
      strokeWidth="2"
    />

    {/* Base do carro */}
    <path
      d="M4 14H20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Parabrisa mais destacado */}
    <path
      d="M10 7.5L11.3 10.5H12.7L14 7.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default CarIcon;
