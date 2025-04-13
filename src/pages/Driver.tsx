
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Driver = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleDriverRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Example validation
    if (!firstName || !lastName || !email || !phone || !password || !vehicleType || !vehicleNumber || !drivingLicense) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (!agreedToTerms) {
      toast.error('You must agree to the terms and conditions');
      return;
    }
    
    // Simulate registration success
    console.log('Driver registration with:', { firstName, lastName, email, phone, vehicleType, vehicleNumber, drivingLicense });
    toast.success('Registration submitted successfully! We will review your application and contact you shortly.');
    
    // Redirect to login after a short delay
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-logistics-teal p-3 rounded-full">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Become a Driver Partner</CardTitle>
              <CardDescription className="text-center">
                Register as a driver to start earning and be your own boss
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDriverRegistration}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicleType">Vehicle Type*</Label>
                    <Select value={vehicleType} onValueChange={setVehicleType} required>
                      <SelectTrigger id="vehicleType">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mini_truck">Mini Truck (Up to 600 kg)</SelectItem>
                        <SelectItem value="pickup_truck">Pickup Truck (Up to 1 Ton)</SelectItem>
                        <SelectItem value="tata_407">Tata 407 (Up to 2.5 Tons)</SelectItem>
                        <SelectItem value="container_truck">Container Truck</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicleNumber">Vehicle Registration Number*</Label>
                    <Input 
                      id="vehicleNumber" 
                      placeholder="MH 01 AB 1234" 
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="drivingLicense">Driving License Number*</Label>
                    <Input 
                      id="drivingLicense" 
                      placeholder="DL-1420110012345" 
                      value={drivingLicense}
                      onChange={(e) => setDrivingLicense(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password*</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password*</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms} 
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)} 
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-logistics-teal hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-logistics-teal hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-6 bg-logistics-teal hover:bg-logistics-blue">
                  Register as Driver
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <span className="text-gray-600">Already have an account?</span>{' '}
                <Link to="/login" className="text-logistics-teal hover:underline font-medium">
                  Log in
                </Link>
              </div>
            </CardContent>
          </Card>
          
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

export default Driver;
