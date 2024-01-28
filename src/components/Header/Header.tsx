import { Container, Menu } from "..";

import styles from "./Header.module.scss";

export const Header = (props: PropsWithClassName) => {
  return (
    <header className={`${styles.header} ${props.className}`}>
      <Container className={styles.container}>
        <Menu navClassName={styles.nav} ulClassName={styles.menu} />
      </Container>
    </header>
  );
};
