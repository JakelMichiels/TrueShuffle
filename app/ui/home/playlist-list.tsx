"use client";

import { useEffect, useState } from "react";
import { Playlist } from "@/app/lib/definitions";
import Image from "next/image";

export default function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  const fetchPlaylists = async () => {
    try {
      const response = await fetch("/api/getPlaylists");
      if (!response.ok) {
        throw new Error("Failed to fetch current track");
      }
      const data = await response.json();
      setPlaylists(data.playlists);

    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  if (!playlists) {
    return <div>No Playlists found</div>;
  }

      console.log(playlists);
  return (
    <div>
      {playlists.map((playlist) => {
        return (
          <Image
            src={playlist.image_url}
            height="200"
            width="200"
            alt={playlist.name}
          />
        );
      })}
    </div>
  );
}
