import React from 'react';

const JusticeScaleIcon = ({ size = 32, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Justice Scale</title>

        {/* Poste central */}
        <path d="M256 96 V400" />

        {/* Base */}
        <path d="M176 400 H336" />

        {/* Barra horizontal */}
        <path d="M128 192 H384" />

        {/* Hastes das bandejas */}
        <path d="M160 192 L120 280" />
        <path d="M352 192 L392 280" />

        {/* Bandeja esquerda */}
        <path d="
            M80 280
            C80 320 120 340 160 340
            C200 340 240 320 240 280
            Z
        " />

        {/* Bandeja direita */}
        <path d="
            M272 280
            C272 320 312 340 352 340
            C392 340 432 320 432 280
            Z
        " />

    </svg>
);

export default JusticeScaleIcon;
