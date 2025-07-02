// components/LottieAnimation.jsx
import React, { useMemo } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: object;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, className }) => {
  const defaultOptions = useMemo(() => ({
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true, // Better for jitter-heavy animations
    }
  }), []);

  return (
    <Lottie 
      animationData={animationData}
      {...defaultOptions}
      className={className}
    />
  );
};

export default LottieAnimation;