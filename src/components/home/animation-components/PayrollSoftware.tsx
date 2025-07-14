"use client";
// import React from 'react';
// import animationData from '../../../../public/animations/payroll-software.json';
// import Lottie from 'lottie-react';

// const PayrollSoftware = () => {
//   return (
//     <div className="jitter-container">
//       <Lottie
//         animationData={animationData}
//         rendererSettings={{
//           filterSize: {
//             width: '200%',
//             height: '200%',
//             x: '-50%',
//             y: '-50%',
//           }
//         }}
//         className="w-full h-[50vh]"
//       />
//     </div>
//   );
// };


// export default PayrollSoftware;

import React, { useEffect, useRef, useState } from 'react';
import animationData from '../../../../public/animations/payroll-software-re.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

const PayrollSoftware = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const currentContainer = containerRef.current;

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
      lottieRef.current?.goToAndStop(0, true);
    }
  }, [inView]);

  return (
    <div ref={containerRef} className="jitter-container">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={true}
        rendererSettings={{
          filterSize: {
            width: '200%',
            height: '200%',
            x: '-50%',
            y: '-50%',
          }
        }}
        className="w-full h-[50vh]"
      />
    </div>
  );
};

export default PayrollSoftware;
