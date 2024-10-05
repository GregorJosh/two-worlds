"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { removeTrack } from "@/actions";
import { usePlayer } from "@/context";
import { Button } from "..";

import playIcon from "public/images/play.svg";
import deleteIcon from "public/images/alternate-trash.svg";

import styles from "./TrackCard.module.scss";

export const TrackCardOptions = ({
  track,
}: {
  track: Documents.Track;
}): React.JSX.Element => {
  const router = useRouter();
  const { setURL } = usePlayer();

  const handlePlay = () => {
    setURL(track.url);
  };

  const handleDelete = async () => {
    const formData = new FormData();
    formData.set("title", track.title);

    await removeTrack(formData);

    router.refresh();
  };

  return (
    <div className={styles.options}>
      <Button onClick={handlePlay}>
        <Image className={styles.icon} src={playIcon} alt="Play" />
      </Button>
      <Button onClick={handleDelete}>
        <Image className={styles.icon} src={deleteIcon} alt="Delete" />
      </Button>
    </div>
  );
};
