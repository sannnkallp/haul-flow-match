
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BookingProcess from '@/components/BookingProcess';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import TruckBookingInterface from '@/components/TruckBookingInterface';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto">
            <TruckBookingInterface />
          </div>
        </div>
        <Features />
        <BookingProcess />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
