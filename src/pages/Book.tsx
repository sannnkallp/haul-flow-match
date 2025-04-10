
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { MapPin } from 'lucide-react';

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold text-logistics-blue mb-4">Book a Truck</h1>
            <p className="text-gray-600">
              Fill in the details below to get an instant quote and book your truck. Our AI will optimize for return trips to save you money.
            </p>
          </div>
          
          <BookingForm />
          
          <div className="mt-16 bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-logistics-blue mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-logistics-teal" />
              Popular Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Mumbai to Delhi", 
                "Delhi to Kolkata", 
                "Bangalore to Chennai",
                "Ahmedabad to Mumbai",
                "Hyderabad to Bangalore",
                "Chennai to Coimbatore"
              ].map((route, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-sm border border-gray-100">
                  {route}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
