"use client";

import ReactPlayer from "react-player";

import { usePlayer } from "@/context/PlayerContext";

import styles from "./page.module.scss";
import { Container } from "@/components";

export default function PlayerPage() {
  const { url } = usePlayer();

  console.log(`Rendering player page with url: ${url}...`);

  if (url) {
    return (
      <Container className={styles.container}>
        <ReactPlayer className={styles.player} url={url} controls />
      </Container>
    );
  }

  return null;
}
