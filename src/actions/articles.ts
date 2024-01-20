"use server";

import { db, query } from "@/libs";

const queryForArticleByTitle = (title: string) => {
  const result = query(db.Article, { title });

  if (!result) {
    throw `Article with ${title} title does not exist!`;
  }

  return result;
};

export const getArticleByTitle = (title: string) => {
  const article = queryForArticleByTitle(title);

  return article.lean();
};

export const updateArticleByTitle = async (
  title: string,
  formData: FormData
) => {
  const article = await queryForArticleByTitle(title);

  if (article) {
    article.title = formData.get("title") as string;
    article.content = formData.getAll("paragraph") as string[];
    await article.save();
  }
};
