"use client";
import { signIn, signOut } from "next-auth/react";
import SpoToolyLogo from "@/app/ui/SpoTooly-logo";

export default function Page() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/home" });
  };

  const handleLogout = () => {
    signOut();
  };

  return (
 <div className="min-h-screen flex flex-col item-center bg-gray-800 relative">
      <header className="p-4 flex item-center justify-center">
        <SpoToolyLogo />
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="flex-col flex space-y-4">
          <button onClick={handleLogin} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-80" >
            Connect to Spotify
          </button>
        </div>
      </main>
    </div>
  );
}
