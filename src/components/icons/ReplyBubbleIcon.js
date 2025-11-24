import React from 'react';

const ReplyBubbleIcon = ({ size = 32, color = '#000000', strokeWidth = 30 }) => (
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
        <title>Reply Bubble</title>

        {/* Balão principal */}
        <path d="
            M112 112
            h224
            c44 0 80 36 80 80
            v96
            c0 44 -36 80 -80 80
            h-128
            l-72 64
            v-64
            c-32 0 -56 -24 -56 -56
            v-120
            c0 -44 36 -80 80 -80
            z
        " />

        {/* Linhas de texto dentro do balão */}
        <path d="M176 192 H336" />
        <path d="M176 240 H304" />

    </svg>
);

export default ReplyBubbleIcon;
