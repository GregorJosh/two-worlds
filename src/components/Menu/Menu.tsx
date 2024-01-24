import { Container, MenuItem } from "..";

import defaultStyles from "./Menu.module.scss";

interface Props extends PropsWithClassName {
  customStyles?: Styles;
}

export const Menu = (props: Props) => {
  const styles = props.customStyles || defaultStyles;

  return (
    <nav className={`${styles.nav} ${props.className}`}>
      <Container className={styles.container}>
        <ul className={styles.ul}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/dev">Dev World</MenuItem>
          <MenuItem href="/music">Music World</MenuItem>
        </ul>
      </Container>
    </nav>
  );
};
