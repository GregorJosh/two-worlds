import { Container, MenuItem } from "..";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <ul className={styles.menu}>
            <MenuItem href="/">My Two Worlds</MenuItem>
            <MenuItem href="/dev">My Developer World</MenuItem>
            <MenuItem href="/music">My Music World</MenuItem>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
