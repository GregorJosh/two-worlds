import { PropsWithChildren } from "react";

import { getArticle, getIsAuth } from "@/actions";
import { ArticleEditor } from "..";

import styles from "./Article.module.scss";

interface Props extends PropsWithChildren {
  name: string;
}

export const Article = async (props: Props) => {
  const article = await getArticle(props.name);
  const isAuth = getIsAuth();

  const contentHTML = {
    __html: article.content,
  };

  return (
    <>
      {isAuth ? (
        <ArticleEditor article={article} />
      ) : (
        <article
          className={styles.article}
          dangerouslySetInnerHTML={contentHTML}
        ></article>
      )}
    </>
  );
};
