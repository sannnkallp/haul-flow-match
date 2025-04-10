
import React from 'react';
import { 
  Truck, 
  BarChart3, 
  Navigation, 
  Clock, 
  Shield, 
  Smartphone, 
  MessageSquare,
  Map
} from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-10 w-10 text-logistics-teal" />,
    title: 'Intelligent Truck Matching',
    description: 'Our AI-powered system matches your cargo with the right type of truck based on size, weight, and special requirements.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-logistics-teal" />,
    title: 'Return Trip Optimization',
    description: 'Eliminate empty return trips with our backhaul optimization that matches return journeys with new bookings.'
  },
  {
    icon: <Navigation className="h-10 w-10 text-logistics-teal" />,
    title: 'Real-Time Tracking',
    description: 'Track your shipment in real-time with precise GPS location and estimated arrival times.'
  },
  {
    icon: <Clock className="h-10 w-10 text-logistics-teal" />,
    title: 'Instant Price Quotes',
    description: 'Get immediate fare estimates based on distance, truck type, and current demand.'
  },
  {
    icon: <Shield className="h-10 w-10 text-logistics-teal" />,
    title: 'Verified Drivers',
    description: 'All our drivers are verified professionals with proper documentation and training.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-logistics-teal" />,
    title: 'Mobile App Access',
    description: 'Manage bookings, track shipments, and communicate with drivers from our convenient mobile app.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-logistics-teal" />,
    title: 'In-App Communication',
    description: 'Message or call drivers directly through the platform for seamless coordination.'
  },
  {
    icon: <Map className="h-10 w-10 text-logistics-teal" />,
    title: 'Route Optimization',
    description: 'Our system calculates the most efficient routes to save time, fuel, and costs.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-logistics-blue mb-4">
            Powerful Features for Efficient Logistics
          </h2>
          <p className="text-lg text-gray-600">
            Our platform combines advanced technology with logistics expertise to provide you with a seamless truck booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-logistics-blue mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
