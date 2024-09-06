import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { Track, Context } from "@/app/lib/definitions";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.token.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${session.token.accessToken}`,
        },
      }
    );

    if (response.status === 204) {
      return NextResponse.json({ message: "No track currently playing" });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const track : Track = {
        name: data.item.name,
        artists: data.item.artists.map((artist: { name: string }) => artist.name),
        album: data.item.album.name,
        uri: data.item.uri,
        context: {
            type: data.context.type,
            uri: data.context.uri
            },
        link: data.item.external_urls.spotify,
        progress: data.progress_ms,
        is_playing: data.is_playing,
        image_url: data.item.album.images[0].url,
        height : data.item.album.images[0].height,
        width : data.item.album.images[0].width
    }

    return NextResponse.json(track);
  } catch (error) {
    console.error("Error fetching current track:", error);
    return NextResponse.json(
      { error: "Failed to fetch current track" },
      { status: 500 }
    );
  }
}
