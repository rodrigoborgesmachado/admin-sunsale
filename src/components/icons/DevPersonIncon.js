import React from "react";

const DevPersonIncon = ({ size = 24, color = "#1C274C" }) => {
  const styles = {
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    color, // habilita currentColor no CSS
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className="dev-person-icon"
    >
      {/* <  ...  > */}
      <path
        d="M8 7L4 11.5L8 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M16 7L20 11.5L16 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />

      {/* Pessoa (cabeça + tronco) centralizada */}
      {/* cabeça */}
      <circle
        cx="12"
        cy="9"
        r="2.25"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />
      {/* tronco/ombros */}
      <path
        d="M7.75 16.25C8.6 14.7 10.2 13.75 12 13.75C13.8 13.75 15.4 14.7 16.25 16.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
    </svg>
  );
};

export default DevPersonIncon;
