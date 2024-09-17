import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { Playlist } from "@/app/lib/definitions";

function mapPlaylists(item: any): Playlist {
  return {
    name: item.name,
    uri: item.uri,
    image_url: item.images[0].url,
    height: item.images[0].height,
    width: item.images[0].width,
    num_tracks: item.tracks.total,
  };
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.token.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${session.token.accessToken}`,
        limit: "50"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    
    let playlists: Playlist[] = data.items.map(mapPlaylists);
    
    while (data.next) {
      try {
        const response = await fetch(data.next, {
          headers: {
            Authorization: `Bearer ${session.token.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        data = await response.json();
        playlists = playlists.concat(data.items.map(mapPlaylists));
        
        
      } catch (error) {
        console.error("Error fetching playlists", error);
        return NextResponse.json(
          { error: "Failed to fetch playlists" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      message: "response recieved",
      playlists: playlists,
    });
  } catch (error) {
    console.error("Error fetching playlists", error);
    return NextResponse.json(
      { error: "Failed to fetch playlists" },
      { status: 500 }
    );
  }
}
