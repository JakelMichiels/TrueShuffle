import { Playlists, ContentSwitcher, SongQueue } from "@/app/ui/home";

export default function Page() {
  return (
    <div>
      <ContentSwitcher>
        <Playlists />
        <SongQueue />
      </ContentSwitcher>
    </div>
  );
}
