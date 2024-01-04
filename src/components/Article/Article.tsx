import { ReactElement } from "react";

import styles from "./Article.module.scss";

interface Props {
  title: string;
  children?: ReactElement<HTMLParagraphElement>[];
}

export const Article = (props: Props) => {
  return (
    <article className={styles.article}>
      <h1>{props.title}</h1>
      {props.children}
    </article>
  );
};
