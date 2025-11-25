import React from 'react';

const UserChatIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Cabeça do usuário */}
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke={color}
      strokeWidth="2"
    />

    {/* Corpo do usuário */}
    <path
      d="M6 20C6 16.8 8.7 15 12 15C15.3 15 18 16.8 18 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Balão de conversa */}
    <path
      d="M16.5 4C18.4 4 20 5.3 20 7C20 8.7 18.4 10 16.5 10C16.2 10 15.8 9.9 15.5 9.8L14 11V8.8C13.2 8.2 12.7 7.2 12.7 7C12.7 5.3 14.3 4 16.5 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>
);

export default UserChatIcon;
