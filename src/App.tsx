import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import InfluencerCard from './components/InfluencerCard';

const featuredInfluencers = [
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    followers: "25.5K",
    rating: 4.8,
    location: "San Francisco, CA"
  },
  {
    name: "Marcus Rodriguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    followers: "18.2K",
    rating: 4.9,
    location: "Chicago, IL"
  },
  {
    name: "Emma Watson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fashion",
    followers: "32.1K",
    rating: 4.7,
    location: "New York, NY"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <SearchSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Influencers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredInfluencers.map((influencer, index) => (
            <InfluencerCard key={index} {...influencer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;