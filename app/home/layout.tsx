import SideNav from "@/app/ui/home/side-bar";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen md:overflow-hidden">
      <div className="absolute h-screen w-auto">
        <div className="group w-full h-full flex-none md:hover:w-64 md:w-14 transition-all hover:duration-500">
          <SideNav />
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:ml-14 md:p-12">{children}</div>
    </div>
  );
}
