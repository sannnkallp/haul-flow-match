
import React from 'react';
import { MapPin, Calendar, Truck, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MapPin className="h-10 w-10 text-white" />,
    title: 'Enter Locations',
    description: 'Enter your pickup and delivery locations with any additional stops.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-white" />,
    title: 'Select Date & Time',
    description: 'Choose when you need the truck for pickup and the expected delivery time.'
  },
  {
    icon: <Truck className="h-10 w-10 text-white" />,
    title: 'Choose Truck Type',
    description: 'Select the right truck based on your cargo size, weight, and special requirements.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-white" />,
    title: 'Confirm & Pay',
    description: 'Review booking details, receive fare estimate, and confirm with secure payment.'
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    title: 'Track Shipment',
    description: 'Track your shipment in real-time and stay in touch with the driver.'
  }
];

const BookingProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-logistics-blue mb-4">
            Simple Booking Process
          </h2>
          <p className="text-lg text-gray-600">
            Book a truck in just a few easy steps and let our system handle the complexity of logistics optimization.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-logistics-teal transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-logistics-teal mb-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-logistics-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
