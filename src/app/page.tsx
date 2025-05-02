'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSections/HeroSection';
import BenefitsSection from '@/components/Benefits'; 
import ProofSection from '@/components/ProofSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WaitlistSection from '@/components/WaitlistSection';
import AboutUsPage from '@/components/About';
import HowItWorksSection from '@/components/HowItWorksSection'; 
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProofSection />
      <HowItWorksSection />
      <PricingSection />
      <WaitlistSection />
      <AboutUsPage />
      <FaqSection />
      <Footer />
    </>
  );
}
