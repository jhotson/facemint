import React from 'react';
import { Hash } from 'lucide-react';

const categories = [
  "All Avatars",
  "Professionals",
  "Influencers",
  "Athletes",
  "Artists",
  "Educators"
];

export default function CategoryFilter() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors whitespace-nowrap"
        >
          <Hash className="w-4 h-4" />
          {category}
        </button>
      ))}
    </div>
  );
}