"use server";

import { db } from "@/libs";

export const getArticleByTitle = async (title: string) => {
  const article = await db.Article.findOne<Article>({ title }).lean<Article>();

  if (!article) {
    throw `Article with ${title} title does not exist!`;
  }

  return article;
};
