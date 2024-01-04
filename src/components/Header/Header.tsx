import { Container, Menu } from "..";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Menu />
      </Container>
    </header>
  );
};
