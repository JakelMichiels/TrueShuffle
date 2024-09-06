
import {CurrentlyPlaying, SongQueue} from "@/app/ui/home"

export default function Page() {

   return (
      <div className="flex md:flex-row flex-col items-center justify-between gap-4">
         <div className="flex items-center justify-center bg-gray-500 w-full p-5 rounded-md">
       <CurrentlyPlaying />
         </div>
         <div className="flex items-center justify-center bg-gray-500 w-full p-5 rounded-md">
            <SongQueue />
         </div>
      </div>
  );
}

