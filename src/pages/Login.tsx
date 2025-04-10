import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Truck, User, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [driverEmail, setDriverEmail] = useState('');
  const [driverPassword, setDriverPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User login with:', { userEmail, userPassword, rememberMe });
    
    // Example validation
    if (!userEmail || !userPassword) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // Simulate login success
    toast.success('Login successful! Redirecting to dashboard...');
    // Redirect to dashboard after a short delay to allow the toast to be visible
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleDriverLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver login with:', { driverEmail, driverPassword, rememberMe });
    
    // Example validation
    if (!driverEmail || !driverPassword) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // Simulate login success
    toast.success('Driver login successful! Redirecting to driver dashboard...');
    // Redirect to dashboard after a short delay to allow the toast to be visible
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="user" className="flex items-center justify-center">
                <User className="mr-2 h-4 w-4" /> User
              </TabsTrigger>
              <TabsTrigger value="driver" className="flex items-center justify-center">
                <Truck className="mr-2 h-4 w-4" /> Driver
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <Card className="shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">User Login</CardTitle>
                  <CardDescription className="text-center">
                    Login to book trucks and manage your shipments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUserLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="userEmail">Email</Label>
                        <Input 
                          id="userEmail" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="userPassword">Password</Label>
                          <Link to="/forgot-password" className="text-sm text-logistics-teal hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="userPassword" 
                          type="password" 
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="userRemember" 
                          checked={rememberMe} 
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                        />
                        <label htmlFor="userRemember" className="text-sm text-gray-600 cursor-pointer">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-logistics-teal hover:bg-logistics-blue">
                      Login
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600">Don't have an account?</span>{' '}
                    <Link to="/signup" className="text-logistics-teal hover:underline font-medium">
                      Sign up
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="driver">
              <Card className="shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Driver Login</CardTitle>
                  <CardDescription className="text-center">
                    Login to manage your trips and earnings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDriverLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="driverEmail">Email</Label>
                        <Input 
                          id="driverEmail" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={driverEmail}
                          onChange={(e) => setDriverEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="driverPassword">Password</Label>
                          <Link to="/forgot-password" className="text-sm text-logistics-teal hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="driverPassword" 
                          type="password" 
                          value={driverPassword}
                          onChange={(e) => setDriverPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="driverRemember" 
                          checked={rememberMe} 
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                        />
                        <label htmlFor="driverRemember" className="text-sm text-gray-600 cursor-pointer">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-logistics-teal hover:bg-logistics-blue">
                      Login
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600">Not a driver yet?</span>{' '}
                    <Link to="/driver" className="text-logistics-teal hover:underline font-medium">
                      Register as driver
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-logistics-blue hover:text-logistics-teal inline-flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
