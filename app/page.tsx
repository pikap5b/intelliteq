'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative text-[#F8F9FA] overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/T36WyH5x/Chat-GPT-Image-Jun-13-2025-04-11-57-PM.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/90 via-[#0D1321]/90 to-[#0A0F1C]/90"></div>
      </div>
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