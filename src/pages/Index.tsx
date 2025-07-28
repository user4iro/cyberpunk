import React from 'react';
import Navbar from '@/components/custom/Navbar';
import Hero from '@/components/custom/Hero';
import Services from '@/components/custom/Services';
import Process from '@/components/custom/Process';
import Testimonials from '@/components/custom/Testimonials';
import WhatsAppContact from '@/components/custom/WhatsAppContact';
import Footer from '@/components/custom/Footer';
import WhatsAppButton from '@/components/custom/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Process Section */}
        <Process />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* WhatsApp Contact Section */}
        <WhatsAppContact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
