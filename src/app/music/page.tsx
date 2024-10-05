import { Metadata } from "next";

import { getIsAuth, getTracks } from "@/actions";
import { Article, Card, Button, TrackCard } from "@/components";

export const metadata: Metadata = {
  title: "Two Worlds: Music",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MusicPage(): Promise<React.JSX.Element> {
  const isAuth: boolean = getIsAuth();
  const tracks: Documents.Track[] = await getTracks();

  console.log("Rendering music page...");

  return (
    <>
      <Article name="music_welcome" />
      <Card title="Tracks">
        {tracks.map((track) => (
          <TrackCard key={track.title} track={track} />
        ))}
      </Card>
      <Card title="DJ Mixes" />
      {isAuth && <Button redirectTo="/new-track">Add new track</Button>}
    </>
  );
}
