"use server";

import { db } from "@/libs";

export const getArticleByTitle = async (title: string) => {
  if (db.isConnected) {
    const article = await db.Article.findOne({
      title,
    }).lean<Article>();

    if (!article) {
      throw `Article with ${title} title does not exist!`;
    }

    return article;
  }

  return null;
};
