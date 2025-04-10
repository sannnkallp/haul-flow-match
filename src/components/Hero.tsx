
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Award, BarChart, Navigation } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div 
          className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-logistics-teal to-logistics-blue opacity-30"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-logistics-blue mb-6 leading-tight">
              Intelligent Truck Booking & Logistics Optimization
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Book trucks efficiently with our AI-powered platform that eliminates empty return trips. 
              Save on transport costs and reduce carbon emissions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button asChild size="lg" className="bg-logistics-teal hover:bg-logistics-blue">
                <Link to="/book">
                  Book a Truck 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/driver">
                  Register as Driver
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <Truck className="h-8 w-8 text-logistics-teal mb-2" />
                <span className="text-sm font-medium">1000+ Trucks</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <Award className="h-8 w-8 text-logistics-teal mb-2" />
                <span className="text-sm font-medium">Top Rated</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <BarChart className="h-8 w-8 text-logistics-teal mb-2" />
                <span className="text-sm font-medium">30% Cost Savings</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <Navigation className="h-8 w-8 text-logistics-teal mb-2" />
                <span className="text-sm font-medium">Live Tracking</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg shadow-xl overflow-hidden animate-fade-up">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Logistics truck on highway" 
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-logistics-blue/40 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center space-x-2 text-logistics-teal mb-2">
                <Navigation className="h-5 w-5" />
                <span className="font-semibold">Return Trip Matched!</span>
              </div>
              <p className="text-sm text-gray-600">
                AI found a return trip from Mumbai to Delhi. Saved ₹15,000 on transport cost!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
