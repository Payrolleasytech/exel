// components/NewsletterForm.tsx
"use client";

import { useState } from 'react';
import { ButtonExel } from './ButtonExel';
import { CiMail } from "react-icons/ci";


const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // This would call your API route
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // if (!response.ok) {
      //   throw new Error('Subscription failed');
      // }
     alert('Subscription successful!'); // Simulating success for demo purposes
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError(`Failed to subscribe. Please try again, ${err}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">


         <div className="w-full">
           <div className="relative ">
            {/* Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
              <CiMail size={20} />
            </div>

            {/* Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to get the latest news..."
              aria-label="Email address"
              className={`w-full pl-10 pr-4 py-3 h-10 rounded-lg border focus:outline-none ${error ? 'border-red-500' : 'border-gray-300 focus:shadow-outline focus:shadow-2xl focus:border-white'
                }`}
              disabled={isSubmitting}
            />

          </div>
            {/* Error Message */}
            {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
         </div>

          <ButtonExel
            type="submit"
            variant={isSubmitting ? 'outline' : 'form'}
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg font-medium `}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
          </ButtonExel>
        </form>
      )}
      <p className="mt-1 text-xs text-gray-200">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;