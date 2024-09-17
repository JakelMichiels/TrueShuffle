"use client";

import { useEffect, useState } from "react";
import { Track } from "@/app/lib/definitions";
import Image from "next/image";


export default function CurrentlyPlaying() {
  const [currTrack, setCurrTrack] = useState<Track | null>(null);

  const fetchCurrentTrack = async () => {
    try {
      const response = await fetch("/api/getCurrentlyPlaying");

      if (!response.ok) {
        throw new Error("Failed to fetch current track");
      }
      const data = await response.json();

      setCurrTrack(data.track);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 20 * 1000);
    return () => clearInterval(interval);
  }, []);


  if (!currTrack) {
    return (
      <div>
        <p>Not Playing</p>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 w-full flex-row items-start justify-start">
        <Image className="rounded-md"
          src={currTrack.image_url}
          width="50"
          height="50"
          alt={currTrack.album}
        />
        <div className="flex flex-col">
          <p>{currTrack.name} - {currTrack.artists?.join(", ")}</p>
          <p>{currTrack.album}</p>
          
        </div>
      </div>
    );
  }
}
