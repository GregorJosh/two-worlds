"use server";

import { db } from "@/libs";

export const getArticle = async (name: string) => {
  const article = await db.Article.findOne({ name }).lean();

  if (!article) {
    throw `Get Article: Article with name ${name} does not exist!`;
  }

  return article;
};

export const updateArticle = async (name: string, formData: FormData) => {
  const article = await db.Article.findOne({ name });

  if (!article) {
    throw `Update Article: Article with name ${name} does not exist!`;
  }

  article.title = formData.get("title") as string;
  article.content = formData.getAll("paragraph") as string[];

  await article.save();
};
