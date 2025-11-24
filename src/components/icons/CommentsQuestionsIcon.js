import React from 'react';

const CommentsQuestionsIcon = ({ size = 32, color = '#000000', strokeWidth = 30 }) => (
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
        <title>Comments Questions</title>

        {/* Balão de comentário */}
        <path d="
            M128 128
            H320
            C365 128 400 163 400 208
            V304
            C400 349 365 384 320 384
            H224
            L176 432
            V384
            H128
            C83 384 48 349 48 304
            V208
            C48 163 83 128 128 128
            Z
        " />

        {/* Interrogação dentro do balão */}
        <path d="
            M224 216
            C224 188 246 168 272 168
            C298 168 320 188 320 216
            C320 238 308 252 292 262
            C280 270 272 280 272 296
        " />

        {/* Ponto da interrogação */}
        <circle cx="272" cy="328" r="10" />
    </svg>
);

export default CommentsQuestionsIcon;
