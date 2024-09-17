"use client";

import { Playlist } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link"
import { useCachedData } from "@/app/lib/hook/useCachedData";

export default function Playlists() {
  
  const { data, isLoading, isError } = useCachedData("getPlaylists");
    
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>No Playlists found</div>;
  }

  const playlists = data.playlists

  console.log(playlists);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-2 bg-gray-600 p-3 rounded-md">
      {playlists.map((playlist : Playlist ) => {
        return (
          <Link href={{
    pathname: `/playlist/${playlist.name}`,
    query: { uri: playlist.uri }
  }}  className="flex bg-gray-500 p-2 rounded-md gap-2">
            <Image
              src={playlist.image_url}
              height="200"
              width="200"
              alt={playlist.name}
            />
            <div className="flex w-15 flex-col">
              <p>{playlist.name}</p>
              <p>length: {playlist.num_tracks}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
