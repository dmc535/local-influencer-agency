import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Connect with Local
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Influencers
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Find authentic local voices to promote your business. Connect with influencers who understand your community and can tell your story.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
              Find Influencers
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
              I'm an Influencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}