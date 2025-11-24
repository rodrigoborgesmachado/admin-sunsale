import React from 'react';

const CarrotIcon = ({ size = 32, color = '#000000', strokeWidth = 30 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Carrot</title>

        {/* Corpo da cenoura */}
        <path d="
            M260 140
            C200 220 170 300 140 380
            C135 395 150 410 165 405
            C245 375 315 345 390 300
            C405 290 405 270 395 255
            C350 190 310 160 260 140
        " />

        {/* Linhas da cenoura */}
        <path d="M250 200 L300 240" />
        <path d="M230 250 L290 290" />
        <path d="M215 300 L270 330" />

        {/* Folhas */}
        <path d="M260 140 C255 110 275 90 300 100" />
        <path d="M260 140 C240 110 240 80 270 75" />
        <path d="M260 140 C220 120 210 90 235 70" />

    </svg>
);

export default CarrotIcon;
