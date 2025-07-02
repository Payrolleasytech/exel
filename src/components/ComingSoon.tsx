
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle, Rocket, Users, Zap, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/useToast';


const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { triggerToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      triggerToast({
        title: "Email required",
        description: "Please enter your email address.",
        type: "error"
      });
      return;
    }

    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    triggerToast({
      title: "Thanks for subscribing!",
      description: "We'll notify you when this page is ready.",
      type: "success"
    });
  };

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Streamlined payroll processing in minutes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated team to help with all your needs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Automated solutions for modern businesses"
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 `}>
      {/* Header with back to home link */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-[#4682B4] hover:text-[#36648B] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#4682B4]/10 text-[#4682B4] rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              This Page is 
              <span className="text-[#4682B4]"> Under Construction</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re working hard to bring you this feature. Our team is putting the finishing touches 
              on this page to provide you with the best experience possible.
            </p>
          </div>

          {/* Email Subscription */}
          <Card className="mb-12 bg-white shadow-lg border-[#4682B4]/20">
            <CardContent className="p-8">
              <div className="max-w-md mx-auto">
                <Mail className="w-12 h-12 text-[#4682B4] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Get Notified When Ready
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to get notified when this page is ready and be among the first to access our new features!
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-center border-[#4682B4]/30 focus:border-[#4682B4]"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-[#4682B4] hover:bg-[#36648B] text-white"
                    >
                      Notify Me When Ready
                    </Button>
                  </form>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-green-600 mb-2">
                      You&apos;re all set!
                    </h4>
                    <p className="text-gray-600">
                      We&apos;ll send you an email as soon as this page is ready.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">What We&apos;re Building</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-[#4682B4]/20">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4682B4]/10 rounded-lg mb-4">
                      <div className="text-[#4682B4]">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              In the meantime, explore our other features
            </p>
            <Link href="/">
              <Button className="bg-[#4682B4] hover:bg-[#36648B] text-white px-8">
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-500">
            <p>© 2024 Form Craft Pathway. All rights reserved.</p>
            <p className="mt-2">Working hard to serve you better.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
