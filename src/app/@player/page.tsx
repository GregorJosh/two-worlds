"use client";

import ReactPlayer from "react-player";

import { usePlayer } from "@/context/PlayerContext";

import styles from "./page.module.scss";

export default function PlayerPage() {
  const { url } = usePlayer();

  console.log(`Rendering player page with url: ${url}...`);

  if (url) {
    return <ReactPlayer className={styles.player} url={url} controls />;
  }

  return null;
}
