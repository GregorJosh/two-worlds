"use client";

import Link from "next/link";

import { useAuth } from "@/context";

import { Container } from "..";

import styles from "./Footer.module.scss";

export const Footer = (props: PropsWithClassName): React.JSX.Element => {
  const isAuth = useAuth();

  return (
    <footer className={`${styles.footer} ${props.className}`}>
      <Container className={styles.container}>
        <p>
          © 2024{" "}
          {!isAuth ? (
            <Link href="/signin" scroll={false} prefetch={false}>
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
