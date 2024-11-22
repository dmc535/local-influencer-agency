import React from 'react';
import { Search, MapPin, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              LocalInfluencer
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#discover" className="text-gray-700 hover:text-purple-600 transition-colors">
                Discover
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">
                How it Works
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-purple-600 transition-colors">
                Success Stories
              </a>
            </nav>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}