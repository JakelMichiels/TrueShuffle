import { SideBar, CurrentlyPlaying } from "@/app/ui/home";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen md:overflow-hidden">
      <div className="absolute h-screen w-auto">
        <div className="group w-full h-full flex-none md:hover:w-64 md:w-14 transition-all hover:duration-500">
          <SideBar />
        </div>
      </div>

      <div className="flex-grow pl-2 md:overflow-y-auto pr-2 md:ml-14">
        <div className="absolute w-full">
          <div className="bg-gray-700 rounded-md z-10 p-1 mb-1">
            <CurrentlyPlaying />
          </div>
        </div>
        <div className="mt-16">

          {children}
        </div>
      </div>
    </div>
  );
}
