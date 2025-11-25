import React from 'react';

const KeyIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cabeça da chave */}
    <circle
      cx="9"
      cy="10"
      r="4"
      stroke={color}
      strokeWidth="2"
    />

    {/* Corpo da chave */}
    <path
      d="M13 10H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Dentes da chave */}
    <path
      d="M17 10V12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 10V13"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

  </svg>
);

export default KeyIcon;
