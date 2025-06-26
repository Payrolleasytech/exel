// components/JitterAnimation.jsx
// import dynamic from 'next/dynamic';

"use client";
import React from 'react';
import animationData from '../../../public/animations/payroll-software.json';
import Lottie from 'lottie-react';

const PayrollSoftware = () => {
  return (
    <div className="jitter-container">
      <Lottie
        animationData={animationData}
        rendererSettings={{
          filterSize: {
            width: '200%',
            height: '200%',
            x: '-50%',
            y: '-50%',
          }
        }}
        className="w-full h-auto"
      />
    </div>
  );
};


export default PayrollSoftware;