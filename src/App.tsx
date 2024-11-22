import React from 'react';
import { Search, Menu, Bell, Sparkles, Shield, Download, Star } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import AvatarCard from './components/AvatarCard';
import CategoryFilter from './components/CategoryFilter';
import AuthButton from './components/AuthButton';
import UserProfile from './components/UserProfile';

const featuredAvatars = [
  {
    name: "Emma Anderson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    price: 299,
    rating: 4.9,
    downloads: 12.5,
    category: "Influencer"
  },
  {
    name: "David Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    price: 349,
    rating: 4.8,
    downloads: 8.2,
    category: "Professional"
  },
  {
    name: "Sarah Williams",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    price: 399,
    rating: 4.9,
    downloads: 15.7,
    category: "Educator"
  }
];

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold">AvatarAI</span>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search licensed avatars..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-600"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <UserProfile />
              <AuthButton />
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Licensed Digital Twins for Your Projects
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Access thousands of authentic AI avatars from real people who've licensed their likeness for your creative needs.
            </p>
            {!isLoading && (
              <button 
                onClick={() => window.location.href = '#featured'}
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                {isAuthenticated ? 'Start Creating' : 'Browse Avatars'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
          <CategoryFilter />
        </div>

        <div className="mb-12" id="featured">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Avatars</h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAvatars.map((avatar) => (
              <AvatarCard key={avatar.name} {...avatar} />
            ))}
          </div>
        </div>

        {/* License Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Licensing Made Simple</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-indigo-50 p-3 rounded-full w-fit mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Licensed Content</h3>
              <p className="text-gray-600">All avatars come with proper licensing and usage rights from the original person.</p>
            </div>
            <div>
              <div className="bg-indigo-50 p-3 rounded-full w-fit mb-4">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-600">Download high-quality avatar assets immediately after purchase.</p>
            </div>
            <div>
              <div className="bg-indigo-50 p-3 rounded-full w-fit mb-4">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every avatar meets our high standards for quality and authenticity.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;