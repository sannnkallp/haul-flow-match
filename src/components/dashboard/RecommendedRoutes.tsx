
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Truck, Calendar, ArrowRight, TrendingUp, Percent } from 'lucide-react';

const recommendedRoutes = [
  {
    id: 'RR-001',
    origin: 'Mumbai, Maharashtra',
    destination: 'Ahmedabad, Gujarat',
    distance: '525 km',
    savings: '28%',
    truckTypes: ['Mini Truck', 'Medium Truck'],
    availability: 'High',
    timing: 'Available next week',
    demand: 'High',
  },
  {
    id: 'RR-002',
    origin: 'Delhi, Delhi',
    destination: 'Chandigarh, Punjab',
    distance: '245 km',
    savings: '32%',
    truckTypes: ['Heavy Truck', 'Container Truck'],
    availability: 'Medium',
    timing: 'Available in 3 days',
    demand: 'Medium',
  },
  {
    id: 'RR-003',
    origin: 'Bangalore, Karnataka',
    destination: 'Hyderabad, Telangana',
    distance: '570 km',
    savings: '25%',
    truckTypes: ['Mini Truck', 'Medium Truck', 'Refrigerated Truck'],
    availability: 'Very High',
    timing: 'Available tomorrow',
    demand: 'Very High',
  }
];

const RecommendedRoutes = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">Recommended Routes</CardTitle>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">AI Optimized</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Based on your previous bookings and current market demand, these routes offer the best backhaul optimization potential.
        </p>
        
        <div className="space-y-5 mt-6">
          {recommendedRoutes.map((route) => (
            <div 
              key={route.id} 
              className="p-4 border rounded-md hover:shadow-md transition-all bg-gray-50"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-logistics-teal mr-2" />
                  <div className="font-medium">{route.origin} to {route.destination}</div>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0">
                  <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-100">
                    <Percent className="h-3 w-3 mr-1" /> {route.savings} Savings
                  </Badge>
                  <Badge className={`
                    ${route.availability === 'High' || route.availability === 'Very High' 
                      ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' 
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-100'}
                  `}>
                    {route.availability} Availability
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-gray-500 mr-2" />
                  <div className="text-sm">
                    <span className="font-medium">Distance:</span> {route.distance}
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center text-sm">
                  <span className="font-medium mr-2">Truck Types:</span>
                  {route.truckTypes.map((type, index) => (
                    <span key={type} className="mr-1">
                      {type}{index < route.truckTypes.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <div className="text-sm">{route.timing}</div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  className="bg-logistics-teal hover:bg-logistics-blue text-white"
                  size="sm"
                >
                  Book This Route <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedRoutes;
