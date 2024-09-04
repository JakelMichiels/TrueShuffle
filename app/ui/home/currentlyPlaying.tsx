
import { getCurrentlyPlaying } from "@/app/lib/actions";

export default async function CurrentlyPlaying() {
 try {
    const trackData = await getCurrentlyPlaying();

    if ('message' in trackData) {
      return <p>{trackData.message}</p>;
    }
  console.log(trackData)
  return (
    <div>
      <p className="text-white-200">track</p>
    </div>
  );
} catch (error: any) {
    return <p>Error fetching current track: {error.message}</p>;
  }
}
