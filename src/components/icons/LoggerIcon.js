import React from 'react';

const LoggerIcon = ({ size = 32, color = '#000000', strokeWidth = 25 }) => (
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
        <title>Logger</title>

        {/* Documento */}
        <path d="
            M144 96
            H304
            L384 176
            V416
            C384 448 360 472 328 472
            H184
            C152 472 128 448 128 416
            V112
            C128 104 136 96 144 96
            Z
        " />

        {/* Linhas de log */}
        <path d="M192 224 H320" />
        <path d="M192 272 H320" />
        <path d="M192 320 H280" />

    </svg>
);

export default LoggerIcon;
