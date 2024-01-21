"use server";

import { db, query } from "@/libs";

const queryForArticleByTitle = (title: string) => {
  const result = query(db.Article, { title });

  if (!result) {
    db.errors.push(`Article with ${title} title does not exist!`);

    return null;
  }

  return result;
};

export const getArticleByTitle = async (
  title: string
): Promise<ActionResult<ArticleDocument>> => {
  const article = queryForArticleByTitle(title);

  if (!article) {
    return [null, db.errors];
  }

  return [await article.lean(), null];
};

export const updateArticleByTitle = async (
  title: string,
  formData: FormData
) => {
  const article = await queryForArticleByTitle(title);

  if (!article) {
    return [null, db.errors];
  }

  article.title = formData.get("title") as string;
  article.content = formData.getAll("paragraph") as string[];
  await article.save();
};
