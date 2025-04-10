
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Truck, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const TruckMatcher = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    date: '',
    cargoType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pickupLocation || !formData.deliveryLocation) {
      toast.error('Please enter both pickup and delivery locations');
      return;
    }
    
    console.log('Form submitted:', formData);
    toast.success('Finding the best matches for your route!');
    navigate('/book', { state: formData });
  };

  return (
    <section className="py-10 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-logistics-blue mb-2">Quick Route Matcher</h2>
            <p className="text-gray-600">Get instant savings with our AI-powered backhaul optimization</p>
          </div>
          
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-logistics-teal mr-2" />
                      <span className="font-medium">Pickup Location</span>
                    </div>
                    <Input
                      placeholder="Enter city, state or pincode"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-logistics-orange mr-2" />
                      <span className="font-medium">Delivery Location</span>
                    </div>
                    <Input
                      placeholder="Enter city, state or pincode"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-logistics-teal mr-2" />
                      <span className="font-medium">When?</span>
                    </div>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 text-logistics-teal mr-2" />
                      <span className="font-medium">Cargo Type</span>
                    </div>
                    <Select
                      value={formData.cargoType}
                      onValueChange={(value) => handleSelectChange('cargoType', value)}
                    >
                      <SelectTrigger className="bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select cargo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Goods</SelectItem>
                        <SelectItem value="perishable">Perishable Items</SelectItem>
                        <SelectItem value="fragile">Fragile Items</SelectItem>
                        <SelectItem value="heavy">Heavy Machinery</SelectItem>
                        <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="pt-2 flex justify-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-logistics-blue hover:bg-logistics-teal text-white font-medium px-8 transition-all"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Find Optimized Routes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Save up to 40% with our smart backhaul matching technology
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Mumbai to Delhi", "Bangalore to Chennai", "Delhi to Kolkata", "Pune to Ahmedabad"].map((route) => (
              <Button
                key={route}
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-50 text-gray-700"
                onClick={() => {
                  const [origin, destination] = route.split(" to ");
                  setFormData(prev => ({
                    ...prev,
                    pickupLocation: origin,
                    deliveryLocation: destination
                  }));
                }}
              >
                {route}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckMatcher;
