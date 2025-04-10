
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Truck, Info, Package } from 'lucide-react';
import { toast } from 'sonner';

const truckTypes = [
  { id: 'mini', name: 'Mini Truck', capacity: '1 ton', size: 'Small' },
  { id: 'medium', name: 'Medium Truck', capacity: '3-5 tons', size: 'Medium' },
  { id: 'heavy', name: 'Heavy Truck', capacity: '10-15 tons', size: 'Large' },
  { id: 'container', name: 'Container Truck', capacity: '20+ tons', size: 'Extra Large' },
  { id: 'refrigerated', name: 'Refrigerated Truck', capacity: 'Varies', size: 'Temperature Controlled' },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    deliveryDate: '',
    truckType: '',
    cargoWeight: '',
    cargoDescription: '',
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
    console.log('Booking data:', formData);
    
    // Example validation
    if (!formData.pickupLocation || !formData.deliveryLocation || !formData.pickupDate || !formData.truckType) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Success message
    toast.success('Your booking request has been submitted! We will find the best truck for you.');
    
    // In a real app, you would send this data to your backend
  };

  return (
    <Card className="shadow-lg max-w-4xl mx-auto">
      <CardHeader className="bg-logistics-blue text-white rounded-t-lg">
        <CardTitle className="text-2xl">Book a Truck</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup Location */}
            <div className="space-y-2">
              <Label htmlFor="pickupLocation" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-logistics-teal" />
                Pickup Location*
              </Label>
              <Input 
                id="pickupLocation" 
                name="pickupLocation" 
                placeholder="Enter pickup address" 
                value={formData.pickupLocation}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Delivery Location */}
            <div className="space-y-2">
              <Label htmlFor="deliveryLocation" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-logistics-teal" />
                Delivery Location*
              </Label>
              <Input 
                id="deliveryLocation" 
                name="deliveryLocation" 
                placeholder="Enter delivery address" 
                value={formData.deliveryLocation}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Pickup Date */}
            <div className="space-y-2">
              <Label htmlFor="pickupDate" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-logistics-teal" />
                Pickup Date & Time*
              </Label>
              <Input 
                id="pickupDate" 
                name="pickupDate" 
                type="datetime-local" 
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Expected Delivery Date */}
            <div className="space-y-2">
              <Label htmlFor="deliveryDate" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-logistics-teal" />
                Expected Delivery Date & Time
              </Label>
              <Input 
                id="deliveryDate" 
                name="deliveryDate" 
                type="datetime-local" 
                value={formData.deliveryDate}
                onChange={handleChange}
              />
            </div>
            
            {/* Truck Type */}
            <div className="space-y-2">
              <Label htmlFor="truckType" className="flex items-center">
                <Truck className="h-4 w-4 mr-2 text-logistics-teal" />
                Truck Type*
              </Label>
              <Select 
                value={formData.truckType} 
                onValueChange={(value) => handleSelectChange('truckType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select truck type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {truckTypes.map(truck => (
                      <SelectItem key={truck.id} value={truck.id}>
                        {truck.name} ({truck.capacity})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            {/* Cargo Weight */}
            <div className="space-y-2">
              <Label htmlFor="cargoWeight" className="flex items-center">
                <Package className="h-4 w-4 mr-2 text-logistics-teal" />
                Cargo Weight (tons)
              </Label>
              <Input 
                id="cargoWeight" 
                name="cargoWeight" 
                type="number" 
                placeholder="Enter cargo weight" 
                value={formData.cargoWeight}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {/* Cargo Description */}
          <div className="mt-6 space-y-2">
            <Label htmlFor="cargoDescription" className="flex items-center">
              <Info className="h-4 w-4 mr-2 text-logistics-teal" />
              Cargo Description
            </Label>
            <Input 
              id="cargoDescription" 
              name="cargoDescription" 
              placeholder="Brief description of your cargo" 
              value={formData.cargoDescription}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button type="submit" className="bg-logistics-teal hover:bg-logistics-blue">
              Get Price Estimate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
