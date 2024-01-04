import { Container } from "..";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>© 2024 Grzegorz Jóźwiak</p>
      </Container>
    </footer>
  );
};
