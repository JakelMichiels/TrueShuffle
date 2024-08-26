"use client";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function Page() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/home" });
  };

  const handleLogout = () => {
    signOut();
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <button
        onClick={handleLogin}
        className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Connect
      </button>
      <button
        onClick={handleLogout}
        className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Disconnect
      </button>
    </div>
  );
}
