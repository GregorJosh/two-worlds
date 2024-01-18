import Link from "next/link";

import { Container } from "..";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          © 2024{" "}
          <Link href="/signin" scroll={false}>
            Grzegorz Jóźwiak
          </Link>
        </p>
      </Container>
    </footer>
  );
};
