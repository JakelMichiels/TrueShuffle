"use client";

import Link from "next/link";
import NavLinks from "@/app/ui/home/nav-links";
import { signOut } from "next-auth/react";
import SpoToolyLogo from "@/app/ui/SpoTooly-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

export default function SideNav() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex h-full flex-col px-3 py-4 md:px-1 rounded-md bg-gray-700"
      onMouseEnter={() => {
        setIsHovered(true);
        console.log(isHovered);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Link
        className="flex h-[48px] items-center justify-center gap-2 p-3 text-sm font-medium md:p-2 md:px-3"
        href="/"
      >
        <div className="flex item-center justify-center w-6 text-white ">
          <PowerIcon />
        </div>
      </Link>
      <div className="flex border-t border-gray-500 grow items-center flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks isHovered={isHovered} />
        <div className="hidden h-auto w-full grow md:block"></div>

        <button
          onClick={handleLogout}
          className="h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3"
        >
          <div className="flex items-center justify-center">
            <PowerIcon className="w-6" />
          </div>

          <div className="hidden md:block"></div>
        </button>
      </div>
    </div>
  );
}
