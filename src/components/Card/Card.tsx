import { PropsWithChildren } from "react";

import styles from "./Card.module.scss";

interface Props extends PropsWithChildren {
  title: string;
  contentClassName?: string;
}

export const Card = async (props: Props) => {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <div className={`${styles.content} ${props.contentClassName}`}>
        {props.children}
      </div>
    </div>
  );
};
