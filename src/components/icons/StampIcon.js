import React from 'react';

const StampIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Borda do selo (efeito recortado) */}
    <path
      d="
        M4 3.5
        C4.6 4 5.4 4 6 3.5
        C6.6 3 7.4 3 8 3.5
        C8.6 4 9.4 4 10 3.5
        C10.6 3 11.4 3 12 3.5
        C12.6 4 13.4 4 14 3.5
        C14.6 3 15.4 3 16 3.5
        C16.6 4 17.4 4 18 3.5
        C18.6 3 19.4 3 20 3.5
        V16.5
        C19.4 16 18.6 16 18 16.5
        C17.4 17 16.6 17 16 16.5
        C15.4 16 14.6 16 14 16.5
        C13.4 17 12.6 17 12 16.5
        C11.4 16 10.6 16 10 16.5
        C9.4 17 8.6 17 8 16.5
        C7.4 16 6.6 16 6 16.5
        C5.4 17 4.6 17 4 16.5
        V3.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Ícone interno (pequena estrela/crachá simbolizando selo) */}
    <path
      d="M12 7L13.2 9.6L16 10L14 12L14.5 15L12 13.6L9.5 15L10 12L8 10L10.8 9.6L12 7Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default StampIcon;
