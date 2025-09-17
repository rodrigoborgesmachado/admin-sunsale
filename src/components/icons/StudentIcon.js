import React from "react";

const StudentIcon = ({ size = 24, color = "#1C274C" }) => {
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
      className="student-icon"
    >
      {/* chapéu (mortarboard) */}
      <path
        d="M12 3L4 7L12 11L20 7L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="transparent"
      />
      {/* faixa abaixo do chapéu */}
      <path
        d="M8.5 10.8H15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      {/* tassel */}
      <path
        d="M19.5 7.2V11.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      <circle
        cx="19.5"
        cy="12.2"
        r="0.9"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* cabeça */}
      <circle
        cx="12"
        cy="13.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* ombros/torso */}
      <path
        d="M7.5 20C8.7 17.7 10.2 16.5 12 16.5C13.8 16.5 15.3 17.7 16.5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
    </svg>
  );
};

export default StudentIcon;
