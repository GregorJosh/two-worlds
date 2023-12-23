import Link from "next/link";
import { JSX } from "react";

import { Container } from "..";

import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href="/">My Two Worlds</Link>
            </li>
            <li>
              <Link href="/dev">My Developer World</Link>
            </li>
            <li>
              <Link href="/music">My Music World</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
