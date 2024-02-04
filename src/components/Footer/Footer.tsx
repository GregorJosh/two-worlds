"use client";

import { useContext } from "react";
import Link from "next/link";

import { Container, IsAuthContext } from "..";

import styles from "./Footer.module.scss";

export const Footer = (props: PropsWithClassName) => {
  const isAuth = useContext(IsAuthContext);

  return (
    <footer className={`${styles.footer} ${props.className}`}>
      <Container className={styles.container}>
        <p>
          © 2024{" "}
          {!isAuth ? (
            <Link href="/signin" scroll={false}>
              Grzegorz Jóźwiak
            </Link>
          ) : (
            "Grzegorz Jóźwiak"
          )}
        </p>
      </Container>
    </footer>
  );
};
