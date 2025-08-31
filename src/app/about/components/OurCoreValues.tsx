// components/ValuesSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { SubTitle, Title } from './Utils.about';







interface ValueCardProps {
  src: string; 
  title: string;
  description: string;
}



export const ValueCard: React.FC<ValueCardProps> = ({ src, title, description }) => {
  return (
    <Card className="text-center p-6 shadow-lg">
      <CardHeader className="flex flex-col justify-center items-center">
        <Image src={`${src}`} alt={title} width={100} height={100} className="mb-4" />
        
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};




export const ValuesSection = () => {
  return (
    <section className="px-4 py-8 md:px-8 xl:px-14 2xl:px-20 min-h-[60vh]">
      <div className="container mx-auto px-4 text-center">
        <SubTitle title="OUR CORE VALUES" />
        <Title title='What Drives Us Every Day' />
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard
            src={'/about/innovation.png'}
            title="Innovation"
            description="We continuously seek and apply new ideas, technologies, and processes to improve our services and create new value for our clients and stakeholders."
          />
          <ValueCard
            src={'/about/transparency.png'}
            title="Transparency"
            description="We believe in open and honest communication, operating with clarity in all our business dealings. This builds trust and fosters stronger relationships."
          />
          <ValueCard
            src={'/about/excellence.png'}
            title="Excellence"
            description="We pursue the highest standards in everything we do, delivering superior quality in our services, processes, and customer experiences. We are committed to continuous improvement."
          />
        </div>
      </div>
    </section>
  );
};