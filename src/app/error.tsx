"use client";

import { useEffect } from "react";

import { Container, Button } from "@/components";

import styles from "./error.module.scss";

interface Props {
  error?: Error;
  reset?: Fun;
}

export default function HomeErrorPage(props: Props) {
  const { error, reset } = props;

  useEffect(() => {
    error && console.error(error.message);
  }, [error]);

  return (
    <Container className={styles.container}>
      <h2>Something went wrong!</h2>
      {error && <p>{error.message}</p>}
      {reset && <Button onClick={() => reset()}>Try again</Button>}
    </Container>
  );
}
