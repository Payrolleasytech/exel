
import React from 'react';

export const HeroSection = () => {
  return (
    // <section className="bg-blue-600 text-white py-20 text-center">
    <section className="bg-primary text-white px-4 py-8 md:px-8 xl:px-14 2xl:px-20 flex flex-col justify-center items-center min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-center">We&apos;re Here to Make Your Business Run Smoother</h1>
        <p className="text lg:text-xl max-w-2xl mx-auto text-center">
          Sign yourself to complexity and bias, we simplify the complex so you can focus on growth.
        </p>
      </div>
    </section>
  );
};