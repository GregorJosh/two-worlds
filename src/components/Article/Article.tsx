import { PropsWithChildren } from "react";

import styles from "./Article.module.scss";

interface Props extends PropsWithChildren {
  content: string;
}

export const Article = (props: Props) => {
  const contentHTML = {
    __html: props.content,
  };

  return (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={contentHTML}
    ></article>
  );
};
