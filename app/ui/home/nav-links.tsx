"use client";
import Link from "next/link";
import { HomeIcon, FireIcon } from "@heroicons/react/24/outline";
import { ShuffleIcon, LooperIcon } from "@/app/ui/icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/home", icon: HomeIcon },
  {
    name: "TrueShuffle",
    href: "/home/trueshuffle",
    icon: ShuffleIcon,
  },
  { name: "SongSwipe", href: "/home/songswipe", icon: FireIcon },
  { name: "Looper", href: "/home/looper", icon: LooperIcon },
];

interface NavProps {
  isHovered: boolean;
}

export default function NavLinks({ isHovered }: NavProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] w-full items-center justify-start gap-2 p-3 text-sm font-medium hover:bg-gray-300 md:p-2 md:px-3",
              {
                "bg-grey-100": pathname === link.href,
              },
              { "text-black": pathname !== link.href }
            )}
          >
            <div className="flex flex-row items-center">
              <LinkIcon className=" w-6 stroke-1 " />
              <p className="hidden md:block">
                <span
                  className={
                    "ml-2 overflow-hidden md:inline ml-2 opacity-0 transition-opacity duration-500 group-hover:w-auto group-hover:opacity-100"
                  }
                >
                  {isHovered ? link.name : ""}
                </span>
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
