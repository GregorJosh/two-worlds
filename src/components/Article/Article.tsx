import { PropsWithChildren, ReactElement } from "react";

import styles from "./Article.module.scss";

interface Props extends PropsWithChildren {
  title: string;
}

export const Article = (props: Props) => {
  return (
    <article className={styles.article}>
      <h1>{props.title}</h1>
      {props.children}
    </article>
  );
};
