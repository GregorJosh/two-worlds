import { JSX, ReactNode } from "react";

import styles from "./Container.module.scss";

interface Props {
  children: ReactNode;
}

export const Container = (props: Props): JSX.Element => {
  return <div className={styles.container}>{props.children}</div>;
};
