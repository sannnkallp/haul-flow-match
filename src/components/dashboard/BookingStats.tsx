
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const bookingData = [
  { month: 'Jan', bookings: 15 },
  { month: 'Feb', bookings: 18 },
  { month: 'Mar', bookings: 25 },
  { month: 'Apr', bookings: 22 },
  { month: 'May', bookings: 30 },
  { month: 'Jun', bookings: 28 },
  { month: 'Jul', bookings: 35 },
  { month: 'Aug', bookings: 40 },
  { month: 'Sep', bookings: 38 },
  { month: 'Oct', bookings: 45 },
  { month: 'Nov', bookings: 50 },
  { month: 'Dec', bookings: 48 },
];

const truckTypeData = [
  { name: 'Mini Trucks', value: 35, color: '#0B3954' },
  { name: 'Medium Trucks', value: 30, color: '#087E8B' },
  { name: 'Heavy Trucks', value: 20, color: '#FF5A5F' },
  { name: 'Container Trucks', value: 10, color: '#FFD166' },
  { name: 'Refrigerated Trucks', value: 5, color: '#5D576B' },
];

const BookingStats = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Booking Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bookingData}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                  formatter={(value) => [`${value} bookings`, 'Bookings']}
                />
                <Bar 
                  dataKey="bookings" 
                  fill="#087E8B" 
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Truck Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={truckTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {truckTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: 'none'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Savings Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Backhaul Optimizations</span>
                <span className="text-green-600 font-medium">₹42,500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Bundle Discounts</span>
                <span className="text-green-600 font-medium">₹15,800</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Loyalty Rewards</span>
                <span className="text-green-600 font-medium">₹8,200</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Savings</span>
                  <span className="text-green-600 font-bold">₹66,500</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingStats;
