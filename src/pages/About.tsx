
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Globe, Award, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-logistics-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">About HaulFlow</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're revolutionizing logistics with intelligent truck booking and backhaul optimization.
            </p>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-logistics-blue mb-6">Our Mission & Vision</h2>
                <p className="text-gray-600 mb-6">
                  At HaulFlow, our mission is to revolutionize the logistics industry by eliminating inefficiencies in truck transportation through intelligent matching and optimization.
                </p>
                <p className="text-gray-600 mb-6">
                  We envision a future where no truck travels empty, reducing costs for businesses, increasing earnings for drivers, and minimizing the environmental impact of logistics operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-logistics-teal mr-3 mt-1" />
                    <p className="text-gray-700">Create a more sustainable logistics ecosystem</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-logistics-teal mr-3 mt-1" />
                    <p className="text-gray-700">Reduce logistics costs for businesses of all sizes</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-logistics-teal mr-3 mt-1" />
                    <p className="text-gray-700">Empower truck drivers with consistent, fair-paying work</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Logistics map planning" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-logistics-orange text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">30% reduction in empty miles</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-logistics-blue mb-12 text-center">Our Key Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <TrendingUp className="h-12 w-12 text-logistics-teal mb-4" />
                <h3 className="text-xl font-semibold text-logistics-blue mb-3">Efficiency</h3>
                <p className="text-gray-600">
                  We constantly seek ways to eliminate wastage in the logistics chain, making transportation more efficient for everyone involved.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Globe className="h-12 w-12 text-logistics-teal mb-4" />
                <h3 className="text-xl font-semibold text-logistics-blue mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  By reducing empty miles, we're helping to lower carbon emissions and create a more sustainable future for logistics.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-logistics-teal mb-4" />
                <h3 className="text-xl font-semibold text-logistics-blue mb-3">Reliability</h3>
                <p className="text-gray-600">
                  We're committed to ensuring reliable service for both shippers and carriers, building trust throughout the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-logistics-blue mb-12 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amit Patel",
                  role: "CEO & Co-Founder",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  description: "Former logistics executive with 15+ years experience transforming supply chains."
                },
                {
                  name: "Sarah Chen",
                  role: "CTO & Co-Founder",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  description: "AI specialist with background in route optimization algorithms and machine learning."
                },
                {
                  name: "Raj Mehta",
                  role: "Chief Operations Officer",
                  image: "https://randomuser.me/api/portraits/men/62.jpg",
                  description: "Transportation industry veteran focused on scaling operations and driver partnerships."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-logistics-blue">{member.name}</h3>
                  <p className="text-logistics-teal font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-logistics-blue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <Truck className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <p className="text-gray-300">Trucks Onboarded</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30%</div>
                <p className="text-gray-300">Average Cost Savings</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <p className="text-gray-300">Cities Covered</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-gray-300">Business Clients</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
