import React from 'react';
import { Star, Download, Shield } from 'lucide-react';

interface AvatarProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  downloads: number;
  category: string;
}

export default function AvatarCard({ name, image, price, rating, downloads, category }: AvatarProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full">
          <span className="font-semibold text-indigo-600">${price}</span>
        </div>
        <div className="absolute top-3 left-3 bg-indigo-600/90 px-3 py-1 rounded-full">
          <span className="text-white text-sm">{category}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{downloads}k</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Licensed</span>
          </div>
        </div>
      </div>
    </div>
  );
}