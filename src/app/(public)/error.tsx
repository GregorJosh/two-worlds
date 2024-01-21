"use client";

import { useEffect } from "react";

import { Container, Button } from "@/components";

import styles from "./error.module.scss";

interface Props {
  error?: Error;
  reset?: () => void;
  errors?: ErrorMessages;
}

export default function HomeErrorPage(props: Props) {
  const { error, errors, reset } = props;

  useEffect(() => {
    error && console.error(error.message);
    errors && console.error(errors);
  }, [props.error]);

  return (
    <Container className={styles.container}>
      <h2>Something went wrong!</h2>
      {error && <p>{error.message}</p>}
      {errors && errors.map((error, id) => <p key={id}>{error}</p>)}
      {reset && <Button onClick={() => reset()}>Try again</Button>}
    </Container>
  );
}
