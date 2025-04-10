
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Logistics Manager, ABC Enterprises',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The return trip optimization is revolutionary. We\'ve cut our logistics costs by almost 30% since starting with HaulFlow.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, Quick Delivery Services',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'As a logistics company, we\'ve been able to offer better rates to our clients while increasing our margins. The platform is incredibly easy to use.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Independent Truck Driver',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    content: 'I no longer have to worry about empty return trips. The app automatically finds me backhaul loads, doubling my earnings.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-logistics-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300">
            Join thousands of businesses and drivers who have transformed their logistics operations with HaulFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-logistics-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
