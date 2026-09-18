import React from 'react';

interface KryptonodeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  lightMode?: boolean;
}

export const KryptonodeLogo: React.FC<KryptonodeLogoProps> = ({ size = 'md', lightMode = false }) => {
  const dimensions = {
    sm: { textMain: 'text-lg', textSub: 'text-[9px]', iconSize: 36 },
    md: { textMain: 'text-xl', textSub: 'text-[10px]', iconSize: 44 },
    lg: { textMain: 'text-3xl', textSub: 'text-xs', iconSize: 58 },
    hero: { textMain: 'text-4xl', textSub: 'text-xs', iconSize: 76 },
  }[size];

  return (
    <div className="flex items-center gap-3 inline-flex select-none">
      {/* Official KTS Orbital Logo Image */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/kts-logo.png"
          alt="KTS Logo"
          style={{ width: dimensions.iconSize, height: dimensions.iconSize }}
          className="object-contain rounded-full shadow-forest-subtle"
        />
      </div>

      {/* Kryptonode Company Name Text */}
      <div className="flex flex-col text-left">
        <div className={`${dimensions.textMain} font-extrabold tracking-tight font-sans leading-none flex items-center`}>
          <span className={lightMode ? 'text-white' : 'text-forest-900'}>Kryptonode</span>
        </div>
        <span className={`${dimensions.textSub} font-mono tracking-[0.14em] uppercase mt-1 font-semibold ${
          lightMode ? 'text-gray-300' : 'text-emerald-muted'
        }`}>
          Tech Solutions Pvt Ltd
        </span>
      </div>
    </div>
  );
};
