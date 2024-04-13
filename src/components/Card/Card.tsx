import { PropsWithChildren } from "react";

import styles from "./Card.module.scss";

interface Props extends PropsWithChildren {
  title: string;
}

export const Card = async (props: Props) => {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
