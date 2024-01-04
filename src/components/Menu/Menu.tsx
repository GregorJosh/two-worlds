import { MenuItem } from "..";

import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/dev">Dev World</MenuItem>
        <MenuItem href="/music">Music World</MenuItem>
      </ul>
    </nav>
  );
};
