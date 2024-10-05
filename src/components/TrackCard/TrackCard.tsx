import Image from "next/image";

import { Track } from "@/models";
import { TrackCardOptions } from "./TrackCardOptions";

import trackCoverIcon from "public/images/media-album-track.svg";

import styles from "./TrackCard.module.scss";

export const TrackCard = ({
  track,
}: {
  track: Documents.Track;
}): React.JSX.Element => {
  return (
    <section className={styles.track} key={track.title}>
      <header className={styles.header}>
        <Image
          className={styles.cover}
          src={trackCoverIcon}
          alt={`${track.title} cover`}
        />
        <div>
          <p>{track.artist}</p>
          <p className={styles.title}>{track.title}</p>
        </div>
      </header>
      <div className={styles.details}>
        <span>{track.style}</span>
        <span>{track.duration}</span>
      </div>
      <TrackCardOptions track={track} />
    </section>
  );
};
