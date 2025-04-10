
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, User } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-logistics-blue to-logistics-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Logistics?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Join thousands of businesses and drivers who are already saving time and money with our intelligent truck booking platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="bg-white text-logistics-blue hover:bg-gray-100">
              <Link to="/book">
                <Truck className="mr-2 h-5 w-5" />
                Book a Truck
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/driver">
                <User className="mr-2 h-5 w-5" />
                Register as Driver
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="/business" className="text-white flex items-center underline hover:text-gray-200">
              Business solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
