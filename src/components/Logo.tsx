import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customWidth?: string;
  customHeight?: string;
  showText?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  customWidth,
  customHeight,
  showText = true,
}: LogoProps) {
  // Determine dimensions based on size prop
  let width = '120px';
  let height = '120px';

  if (size === 'sm') {
    width = '50px';
    height = '50px';
  } else if (size === 'md') {
    width = '120px';
    height = '120px';
  } else if (size === 'lg') {
    width = '180px';
    height = '180px';
  } else if (size === 'xl') {
    width = '260px';
    height = '260px';
  } else if (size === 'custom' && customWidth && customHeight) {
    width = customWidth;
    height = customHeight;
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} id="depaola-logo-container">
      {/* High-fidelity Vector representation of the official logo */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
        id="depaola-logo-svg"
      >
        {/* Dark Circle Base */}
        <circle cx="100" cy="100" r="95" fill="#090909" stroke="#E2E8F0" strokeWidth="1.5" strokeOpacity="0.1" />
        
        {/* Main Golden Circle Borders */}
        <circle cx="100" cy="100" r="88" stroke="#C8A15A" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="84" stroke="#C8A15A" strokeWidth="0.5" strokeDasharray="1 1" strokeOpacity="0.6" />
        
        {/* Monogram / Profile Center Group */}
        <g transform="translate(100, 72) scale(0.9)">
          {/* Subtle gold radial glow background */}
          <circle cx="0" cy="-5" r="30" fill="url(#goldGlow)" opacity="0.15" />

          {/* Styled DP Monogram with Silhouette Face */}
          {/* Woman's profile silhouette facing left that forms the curve of 'D' */}
          <path
            d="M -15,-25 
               C -15,-25 -10,-28 -5,-28 
               C 5,-28 15,-20 15,-8 
               C 15,4 8,14 -4,14 
               C -8,14 -12,12 -15,10"
            stroke="#C8A15A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Facial Profile Details (Nose, Lips, Chin) inside 'D' */}
          <path
            d="M -15,-18
               C -11,-18 -9,-15 -9,-12
               C -9,-10 -11,-9 -13,-9
               C -11,-9 -10,-7 -11,-5
               C -12,-3 -14,-3 -15,-3
               C -12,-3 -11,-1 -13,1
               C -14,2 -16,1 -17,0"
            stroke="#C8A15A"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Eyelash detail */}
          <path
            d="M -11,-14 C -10,-14.5 -9,-14.2 -9,-14"
            stroke="#C8A15A"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Hair flow lines and Back of head/neck forming vertical line of 'D' */}
          <path
            d="M -17,-26 
               C -23,-20 -24,-10 -24,-2
               C -24,6 -21,12 -17,14"
            stroke="#C8A15A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* 'P' Character overlapping with 'D' */}
          <path
            d="M -1, -22 
               L -1, 18 
               M -1, -12
               C 8, -12 12, -22 3, -22
               C -1, -22 -1, -22 -1, -22"
            stroke="#C8A15A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Elegant serif feet for P and D */}
          <path d="M -4, 18 L 2, 18" stroke="#C8A15A" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M -20, -26 L -14, -26" stroke="#C8A15A" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        
        {/* "De'Paola" Text */}
        <text
          x="100"
          y="126"
          textAnchor="middle"
          fill="#C8A15A"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="23"
          fontWeight="400"
          letterSpacing="0.05em"
          id="logo-text-depaola"
        >
          De'Paola
        </text>
        
        {/* "STUDIO" with decorative lines */}
        {/* Left Line */}
        <line x1="38" y1="140" x2="68" y2="140" stroke="#C8A15A" strokeWidth="0.8" opacity="0.6" />
        {/* Text */}
        <text
          x="100"
          y="143"
          textAnchor="middle"
          fill="#DDBE78"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="8"
          fontWeight="400"
          letterSpacing="0.35em"
          id="logo-text-studio"
        >
          STUDIO
        </text>
        {/* Right Line */}
        <line x1="132" y1="140" x2="162" y2="140" stroke="#C8A15A" strokeWidth="0.8" opacity="0.6" />
        
        {/* "ESPECIALISTAS EN MANICURA" */}
        {/* Left Star */}
        <path d="M 33 157 L 34.5 158.5 L 33 160 L 31.5 158.5 Z" fill="#C8A15A" />
        {/* Text */}
        <text
          x="100"
          y="161"
          textAnchor="middle"
          fill="#C7C7C7"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="5"
          fontWeight="500"
          letterSpacing="0.15em"
          id="logo-text-specialists"
        >
          ESPECIALISTAS EN MANICURA
        </text>
        {/* Right Star */}
        <path d="M 167 157 L 168.5 158.5 L 167 160 L 165.5 158.5 Z" fill="#C8A15A" />

        {/* Delicate Hand Line Drawing at the very bottom center */}
        <g transform="translate(100, 180) scale(0.65)" opacity="0.85">
          {/* Sparkles / Stars around hand */}
          <path d="M -22 -12 L -21 -10.5 L -22 -9 L -23 -10.5 Z" fill="#C8A15A" opacity="0.7" />
          <path d="M 22 -14 L 23.5 -12.5 L 22 -11 L 20.5 -12.5 Z" fill="#C8A15A" opacity="0.7" />
          
          {/* Hand lines */}
          <path
            d="M -12, 10 
               C -12, 5 -10, -5 -8, -12
               C -7.5, -14 -6, -14 -6, -11
               C -6, -5 -8, 5 -8, 10
               
               M -7, 5
               C -7, 0 -4, -10 -2, -18
               C -1.5, -20 0, -20 0, -17
               C 0, -10 -4, 2 -4, 10
               
               M -3, 6
               C -3, 2 1, -8 3, -15
               C 3.5, -17 5, -17 5, -14
               C 5, -8 1, 3 1, 10
               
               M 1, 8
               C 1, 5 5, -2 7, -8
               C 7.5, -10 9, -10 9, -7
               C 9, -2 5, 6 5, 10
               
               M -15, 8
               C -18, 5 -20, 0 -22, -4
               C -23, -6 -21, -8 -19, -6
               C -17, -4 -13, 3 -11, 8"
            stroke="#C8A15A"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8A15A" stopOpacity="1" />
            <stop offset="100%" stopColor="#C8A15A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
