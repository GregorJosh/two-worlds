"use server";

import { db } from "@/libs";

export const getArticle = async (name: string) => {
  const article = await db.Article.findOne({ name }).lean();

  if (!article) {
    throw `Get Article: Article with name ${name} does not exist!`;
  }

  return article;
};

export const updateArticle = async (formData: FormData, name: string) => {
  try {
    const article = await db.Article.findOne({ name });

    if (!article) {
      throw `Update Article: Article with name ${name} does not exist!`;
    }

    article.title = formData.get("title") as string;
    article.content = formData.getAll("paragraph") as string[];

    await article.save();

    return {
      status: "success" as ActionResultStatus,
      message: `Article ${name} successfully updated!`,
    };
  } catch (error: any) {
    return {
      status: "error" as ActionResultStatus,
      message: error.message ?? error,
    };
  }
};
