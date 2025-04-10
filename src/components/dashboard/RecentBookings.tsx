
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Truck, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const bookingsData = [
  {
    id: 'BK-2023-001',
    status: 'In Transit',
    pickupLocation: 'Mumbai, Maharashtra',
    deliveryLocation: 'Pune, Maharashtra',
    truckType: 'Medium Truck',
    pickupDate: '10 April, 2025 - 09:30 AM',
    deliveryDate: '10 April, 2025 - 02:00 PM',
    driver: 'Rajesh Kumar',
    driverPhone: '+91 98765 43210',
  },
  {
    id: 'BK-2023-002',
    status: 'Scheduled',
    pickupLocation: 'Delhi, Delhi',
    deliveryLocation: 'Jaipur, Rajasthan',
    truckType: 'Heavy Truck',
    pickupDate: '12 April, 2025 - 10:00 AM',
    deliveryDate: '12 April, 2025 - 06:00 PM',
    driver: 'Pending Assignment',
    driverPhone: 'N/A',
  },
  {
    id: 'BK-2023-003',
    status: 'Completed',
    pickupLocation: 'Bangalore, Karnataka',
    deliveryLocation: 'Chennai, Tamil Nadu',
    truckType: 'Container Truck',
    pickupDate: '08 April, 2025 - 08:00 AM',
    deliveryDate: '08 April, 2025 - 04:30 PM',
    driver: 'Suresh Patel',
    driverPhone: '+91 87654 32109',
  },
];

const RecentBookings = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">Recent Bookings</CardTitle>
        <Button variant="outline" size="sm" className="text-sm">
          View All <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookingsData.map((booking) => (
            <div 
              key={booking.id} 
              className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <div className="flex items-center">
                  <div className="font-medium">{booking.id}</div>
                  <Badge 
                    className={`ml-3 ${
                      booking.status === 'In Transit' 
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' 
                        : booking.status === 'Scheduled' 
                        ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' 
                        : 'bg-green-100 text-green-800 hover:bg-green-100'
                    }`}
                  >
                    {booking.status}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 md:mt-0 text-logistics-teal hover:text-logistics-blue"
                >
                  Track <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-logistics-teal mr-2 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Pickup</div>
                      <div className="text-sm text-gray-600">{booking.pickupLocation}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        {booking.pickupDate}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-logistics-orange mr-2 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Delivery</div>
                      <div className="text-sm text-gray-600">{booking.deliveryLocation}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        {booking.deliveryDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center text-sm text-gray-600">
                <Truck className="h-4 w-4 mr-2" />
                {booking.truckType} | Driver: {booking.driver} | {booking.driverPhone}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBookings;
