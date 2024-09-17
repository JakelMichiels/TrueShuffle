import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { Track } from "@/app/lib/definitions";

function mapTracks(item:any): Track {
    return {
        name: item.name,
        artists: item.artists.map((artist: { name: string }) => artist.name),
        album: item.album.name,
        uri: item.uri,
        link: item.external_urls.spotify,
        image_url: item.album.images[0].url,
        height : item.album.images[0].height,
        width : item.album.images[0].width
    }
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.token.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/queue", {
      headers: {
        Authorization: `Bearer ${session.token.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    const queue: Track[] = data.queue.map(mapTracks);

    console.log(queue);

    return NextResponse.json({
      queue: queue,
      message: "response recieved",
    });
  } catch (error) {
    console.error("Error fetching queue", error);
    return NextResponse.json(
      { error: "Failed to fetch queue" },
      { status: 500 }
    );
  }
}
