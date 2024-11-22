import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from 'lucide-react';

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return (
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <User className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2">
        <img
          src={user.picture}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible">
        <div className="px-4 py-2 border-b border-gray-100">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <div className="px-4 py-2">
          <button className="text-gray-600 hover:text-gray-800">Profile</button>
        </div>
      </div>
    </div>
  );
}