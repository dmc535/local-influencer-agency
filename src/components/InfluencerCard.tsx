import React from 'react';
import { Instagram, Twitter, Star } from 'lucide-react';

interface InfluencerCardProps {
  name: string;
  image: string;
  category: string;
  followers: string;
  rating: number;
  location: string;
}

export default function InfluencerCard({ name, image, category, followers, rating, location }: InfluencerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <Instagram className="h-5 w-5 text-pink-500" />
            <span className="ml-2 text-sm text-gray-600">{followers}</span>
          </div>
          <div className="flex items-center">
            <Twitter className="h-5 w-5 text-blue-400" />
            <span className="ml-2 text-sm text-gray-600">{followers}</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}