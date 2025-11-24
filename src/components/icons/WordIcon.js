import React from 'react';

const WordIcon = ({ size = 30, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Word</title>

        {/* Caixa / marcador de texto */}
        <path d="
            M120 160
            H392
            C420 160 440 180 440 208
            V304
            C440 332 420 352 392 352
            H120
            C92 352 72 332 72 304
            V208
            C72 180 92 160 120 160
            Z
        " />

        {/* Letra estilizada (A) */}
        <path d="M220 308 L256 200 L292 308" />
        <path d="M232 268 H280" />

    </svg>
);

export default WordIcon;
