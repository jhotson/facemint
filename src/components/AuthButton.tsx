import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, LogOut, Loader } from 'lucide-react';

export default function AuthButton() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
        <Loader className="w-4 h-4 animate-spin" />
        Loading...
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Log Out
      </button>
    );
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
    >
      <LogIn className="w-4 h-4" />
      Log In
    </button>
  );
}