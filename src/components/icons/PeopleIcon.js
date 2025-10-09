import React from "react";

const PeopleIcon = ({ size = 24, color = "#1C274C" }) => {
  const styles = {
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className="people-icon"
    >
      {/* Pessoa central */}
      <circle
        cx="18"
        cy="13"
        r="4.5"
        stroke={color}
        strokeWidth="2.8"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 27C10 22.5 13.5 19 18 19C22.5 19 26 22.5 26 27"
        stroke={color}
        strokeWidth="2.8"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pessoa esquerda */}
      <circle
        cx="8.5"
        cy="15"
        r="3.2"
        stroke={color}
        strokeWidth="2.4"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 27C3 23.5 5.5 21 8.5 21C11.5 21 14 23.5 14 27"
        stroke={color}
        strokeWidth="2.4"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pessoa direita */}
      <circle
        cx="27.5"
        cy="15"
        r="3.2"
        stroke={color}
        strokeWidth="2.4"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 27C22 23.5 24.5 21 27.5 21C30.5 21 33 23.5 33 27"
        stroke={color}
        strokeWidth="2.4"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleIcon;
