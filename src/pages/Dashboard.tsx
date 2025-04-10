
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Truck, Clock, BarChart3, Star, MessageSquare } from 'lucide-react';
import RecentBookings from '@/components/dashboard/RecentBookings';
import BookingStats from '@/components/dashboard/BookingStats';
import RecommendedRoutes from '@/components/dashboard/RecommendedRoutes';
import FeedbackForm from '@/components/dashboard/FeedbackForm';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-logistics-blue">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your logistics activities.</p>
          </div>
          <Button 
            className="mt-4 md:mt-0 bg-logistics-teal hover:bg-logistics-blue"
            onClick={() => window.location.href = '/book'}
          >
            <Truck className="mr-2 h-4 w-4" /> Book a Truck
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500 mt-1">2 en route, 1 scheduled</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Distance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248 km</div>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Cost Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-logistics-teal">₹8,500</div>
              <p className="text-xs text-gray-500 mt-1">Via backhaul optimization</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center">
                4.8 <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Based on 27 reviews</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings" className="space-y-4">
            <RecentBookings />
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <BookingStats />
          </TabsContent>
          
          <TabsContent value="recommendations" className="space-y-4">
            <RecommendedRoutes />
          </TabsContent>
          
          <TabsContent value="feedback" className="space-y-4">
            <FeedbackForm />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
