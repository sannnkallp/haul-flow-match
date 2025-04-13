
import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ArrowRight, Navigation, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import NearbyTrucksMap from './NearbyTrucksMap';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-mobile';

// Mock truck types data
const truckTypes = [
  { id: 'mini', name: 'Mini Truck', capacity: 'Up to 600 kg', icon: '🚚', price: '₹450' },
  { id: 'pickup', name: 'Pickup Truck', capacity: 'Up to 1 Ton', icon: '🛻', price: '₹650' },
  { id: 'tata407', name: 'Tata 407', capacity: 'Up to 2.5 Tons', icon: '🚛', price: '₹950' },
  { id: 'container', name: 'Container Truck', capacity: 'Varies', icon: '🚚', price: '₹1450' },
  { id: 'custom', name: 'Customize Truck', capacity: 'Custom requirements', icon: '⚙️', price: 'Custom' },
];

// Mock driver data
const mockDriver = {
  name: 'Suresh Kumar',
  phone: '+91 9876543210',
  rating: 4.8,
  truckDetails: 'Tata 407 XL • MH 04 AK 7890',
  eta: '12 mins',
};

const TruckBookingInterface = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupTime, setPickupTime] = useState('Now');
  const [selectedTruckType, setSelectedTruckType] = useState(truckTypes[0].id);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [showDriverSheet, setShowDriverSheet] = useState(false);
  const [estimatedFare, setEstimatedFare] = useState('₹550 - ₹650');
  
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Simulate getting user's current location
  const getCurrentLocation = () => {
    toast.info('Getting your current location...');
    setTimeout(() => {
      setPickupLocation('Current Location, Mumbai');
      toast.success('Location detected!');
    }, 1000);
  };

  // Calculate fare based on locations and truck type
  const calculateFare = () => {
    // In a real app, this would call an API to get accurate pricing
    const selectedTruck = truckTypes.find(truck => truck.id === selectedTruckType);
    return selectedTruck?.price || '₹0';
  };

  const handleBookNow = () => {
    if (!pickupLocation || !dropLocation) {
      toast.error('Please enter both pickup and drop-off locations');
      return;
    }
    
    toast.success('Booking confirmed! Finding nearby trucks...');
    setIsBookingSubmitted(true);
    
    // Simulate finding a driver
    setTimeout(() => {
      setShowDriverSheet(true);
    }, 2000);
  };

  const handleScheduleLater = () => {
    if (!pickupLocation || !dropLocation) {
      toast.error('Please enter both pickup and drop-off locations');
      return;
    }
    
    // Show date/time picker dialog
    toast.info('This feature is coming soon!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Card className="shadow-lg border-logistics-teal border-t-4">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-logistics-blue mb-6">Where do you need to move your goods?</h2>
          
          <div className="space-y-4">
            {/* Pickup Location */}
            <div className="relative">
              <Input
                placeholder="Enter pickup address"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="pl-10 pr-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-logistics-teal h-4 w-4" />
              <button 
                onClick={getCurrentLocation}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-logistics-blue"
              >
                <Navigation className="h-4 w-4" />
              </button>
            </div>
            
            {/* Drop-off Location */}
            <div className="relative">
              <Input
                placeholder="Enter drop-off address"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 h-4 w-4" />
            </div>
            
            {/* Date & Time */}
            <div className="relative">
              <Input
                placeholder="Choose pickup time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="pl-10"
              />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-logistics-teal h-4 w-4" />
            </div>
          </div>
          
          {/* Truck Options Carousel */}
          <div className="my-6">
            <h3 className="text-sm font-medium mb-2">Select Truck Type</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {truckTypes.map((truck) => (
                  <CarouselItem key={truck.id} className="md:basis-1/3 lg:basis-1/5">
                    <div 
                      className={`p-3 border rounded-md cursor-pointer text-center h-full flex flex-col justify-between ${
                        selectedTruckType === truck.id ? 'border-logistics-teal bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedTruckType(truck.id)}
                    >
                      <div className="text-2xl mb-2">{truck.icon}</div>
                      <div className="font-medium text-sm">{truck.name}</div>
                      <div className="text-xs text-gray-500">{truck.capacity}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          {/* Estimated Fare Preview */}
          <div className="bg-gray-50 p-3 rounded-md mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Estimated Fare:</span>
              <span className="font-bold text-logistics-blue">{calculateFare()}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={handleBookNow}
              className="bg-logistics-teal hover:bg-logistics-blue"
            >
              Book Truck Now
            </Button>
            <Button 
              onClick={handleScheduleLater}
              variant="outline" 
              className="border-logistics-teal text-logistics-teal hover:bg-logistics-teal hover:text-white"
            >
              Schedule for Later
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Map view showing available trucks */}
      {isBookingSubmitted && (
        <div className="mt-8" id="map-section">
          <NearbyTrucksMap pickupLocation={pickupLocation} deliveryLocation={dropLocation} />
        </div>
      )}
      
      {/* Driver Details Bottom Sheet */}
      {isMobile ? (
        <Drawer open={showDriverSheet} onOpenChange={setShowDriverSheet}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Driver on the way</DrawerTitle>
            </DrawerHeader>
            <DriverDetailsContent driver={mockDriver} onCancel={() => setShowDriverSheet(false)} />
          </DrawerContent>
        </Drawer>
      ) : (
        <Sheet open={showDriverSheet} onOpenChange={setShowDriverSheet}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Driver on the way</SheetTitle>
            </SheetHeader>
            <DriverDetailsContent driver={mockDriver} onCancel={() => setShowDriverSheet(false)} />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

// Driver details content component (reused in both mobile and desktop views)
const DriverDetailsContent = ({ 
  driver, 
  onCancel 
}: { 
  driver: typeof mockDriver, 
  onCancel: () => void 
}) => {
  return (
    <div className="py-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">{driver.name}</h3>
          <div className="flex items-center gap-2 text-sm">
            <span>⭐ {driver.rating}</span>
            <span>•</span>
            <span>{driver.eta} away</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <Truck className="h-6 w-6" />
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">Truck Details</p>
        <p className="font-medium">{driver.truckDetails}</p>
      </div>
      
      {/* Mini Map for live tracking */}
      <div className="bg-gray-100 h-40 rounded-md mb-4 flex items-center justify-center">
        <p className="text-gray-500">Live tracking map</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Button className="bg-logistics-teal hover:bg-logistics-blue">
          Call Driver
        </Button>
        <Button 
          variant="outline" 
          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          onClick={onCancel}
        >
          Cancel Booking
        </Button>
      </div>
    </div>
  );
};

export default TruckBookingInterface;
