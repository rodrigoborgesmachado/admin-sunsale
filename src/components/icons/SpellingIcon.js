import React from 'react';

const SpellingIcon = ({ size = 24, color = '#023E7D' }) => (
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

    {/* Letras ABC dentro do balão */}
    <path
      d="M8 10L9 7.5L10 10M8.3 9H9.7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M11 7.5V10M11 7.5H12.5C13.2 7.5 13.7 8 13.7 8.6C13.7 9.3 13.2 9.7 12.5 9.7H11"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16 8C15.4 7.5 14.3 7.7 13.7 8.4C13 9.1 13 10 13.7 10.6C14.3 11.3 15.4 11.5 16 11"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default SpellingIcon;
