"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Track } from "@/app/lib/definitions";

export default function SongQueue() {
  const [queue, setQueue] = useState<Track[] | null>(null);
  const fetchQueue = async () => {
    try {
      const response = await fetch("/api/getQueue");

      if (!response.ok) {
        throw new Error("Failed to fetch current track");
      }
      const data = await response.json();

      setQueue(data.queue);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);
  if (!queue) {
    return <div>placeholder</div>;
  }
  return (
    <div className="flex h-full gap-1 bg-gray-600 rounded-md w-full ml-20 mr-20 p-2 flex-col">
      {queue.map((item: Track, index: number) => {
        return (
          <div className="flex w-full gap-1">
            <div className="flex rounded-md p-1 bg-gray-500 w-6 items-center justify-center">
              {index + 1}
            </div>
            <div className="flex flex-grow flex-row p-1 rounded-md bg-gray-500 ">
              <Image
                src={item.image_url}
                width={35}
                height={35}
                alt={item.album}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
