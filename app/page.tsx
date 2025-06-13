'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const FloatingElements = dynamic(() => import('@/components/FloatingElements'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#0D1321] to-[#0A0F1C] text-[#F8F9FA] overflow-x-hidden">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}