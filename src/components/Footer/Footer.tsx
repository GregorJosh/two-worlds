import Link from "next/link";

import { Container } from "..";

import styles from "./Footer.module.scss";

export const Footer = (props: PropsWithClassName) => {
  return (
    <footer className={`${styles.footer} ${props.className}`}>
      <Container className={styles.container}>
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
