import React from 'react';

const ExamPaperIcon = ({ size = 24, color = '#023E7D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Contorno da folha */}
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />

    {/* Linha do título */}
    <path
      d="M8 7H16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Linha 1 */}
    <path
      d="M8 11H12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Check da linha 1 */}
    <path
      d="M14 10.5L15 11.5L17 9.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Linha 2 */}
    <path
      d="M8 15H12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Check da linha 2 */}
    <path
      d="M14 14.5L15 15.5L17 13.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ExamPaperIcon;
