import React from 'react';

const ProIcon = ({ size = 32, color = '#000000', strokeWidth = 30 }) => (
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
        <title>Pro</title>

        {/* Estrela premium (PRO) */}
        <path d="
            M256 96
            L296 192
            L400 208
            L324 272
            L348 368
            L256 320
            L164 368
            L188 272
            L112 208
            L216 192
            Z
        " />

    </svg>
);

export default ProIcon;
