import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { MotionConfig } from "motion/react";
import { ToastContainer } from "react-toastify"



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-heading",
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: {
    default: 'Exel Consultancy | Your One-Stop Solution for Seamless Financial Management',
    template: '%s | Exel Consultancy'
  },
  description: 'Exel Consultancy connects you to HMRC-compliant payroll software, umbrella services, and accountancy solutions; saving you time, money, and compliance headaches.',
  keywords: ['umbrella services','best umbrella brokerage in the UK', 'connects you to HMRC-compliant payroll software', 'accountancy solutions', 'compliance', 'accountancy consulting'],
  metadataBase: new URL('https://www.exelconsultancy.co.uk/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Exel Consultancy | Your One-Stop Solution for Seamless Financial Management',
    description: 'Exel Consultancy connects you to HMRC-compliant payroll software, umbrella services, and accountancy solutions; saving you time, money, and compliance headaches.',
    url: 'https://www.exelconsultancy.co.uk/',
    siteName: 'Exel Consultancy',
    images: [
      {
        url: '/logo.jpg', // Absolute URL recommended
        width: 1200,
        height: 630,
        alt: 'Exel Consultancy - Your One-Stop Solution for Seamless Financial Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exel Consultancy | Your One-Stop Solution for Seamless Financial Management',
    description: 'Exel Consultancy connects you to HMRC-compliant payroll software, umbrella services, and accountancy solutions; saving you time, money, and compliance headaches.',
    images: ['https://www.exelconsultancy.co.uk/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: '',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        className={` antialiased flex flex-col min-h-screen`}
      >
        <MotionConfig reducedMotion="user">
        <Nav/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
        </MotionConfig>
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
      </body>
    </html>
  );
}
