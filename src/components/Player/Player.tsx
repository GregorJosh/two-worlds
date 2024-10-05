"use client";

import ReactPlayer from "react-player";

import styles from "./Player.module.scss";

export const Player = ({ url }: { url: string }): React.JSX.Element => {
  return <ReactPlayer className={styles.player} url={url} />;
};
