
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Truck, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-logistics-teal" />
            <Link to="/" className="text-xl font-bold text-logistics-blue">
              HaulFlow
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-logistics-teal transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-logistics-teal transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-logistics-teal transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-logistics-teal transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </Link>
            </Button>
            <Button asChild>
              <Link to="/signup">
                <User className="mr-2 h-4 w-4" />
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-logistics-teal focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-logistics-teal transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-logistics-teal transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-gray-700 hover:text-logistics-teal transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-logistics-teal transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <div className="pt-2 flex flex-col space-y-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login" onClick={toggleMenu}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/signup" onClick={toggleMenu}>
                  <User className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
