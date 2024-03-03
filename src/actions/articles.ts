"use server";

import { unlink, writeFile, access } from "fs/promises";
import { join } from "path";

import { db } from "@/libs";

export const getArticle = async (name: string) => {
  const result = await db.Article.findOne({ name }).lean();

  if (!result) {
    throw `Get Article: Article with name ${name} does not exist!`;
  }

  const { _id, ...article } = result;

  return article;
};

export const updateArticle = async (
  formData: FormData,
  name: string
): Promise<ActionResult> => {
  try {
    const article = await db.Article.findOne({ name });

    if (!article) {
      throw `Update Article: Article with name ${name} does not exist!`;
    }

    article.title = formData.get("title") as string;
    article.content = formData.getAll("paragraph") as string[];

    const images = formData.getAll("image") as File[];

    for (const image of images) {
      const { name } = image;

      if (name !== "undefined") {
        const imageData = Buffer.from(await image.arrayBuffer());
        const path = join(process.cwd(), "public", name);

        await writeFile(path, imageData);

        article.images.push(name);
      }
    }

    await article.save();

    return {
      status: "success",
      message: `Article ${name} successfully updated!`,
    };
  } catch (error: any) {
    return {
      status: "error",
      message: error.message ?? error,
    };
  }
};

export const removeImage = async (formData: FormData, articleName: string) => {
  const article = await db.Article.findOne({ name: articleName });

  const imageFilename = formData.get("image-filename") as string;
  const imagePath = join(process.cwd(), "public", imageFilename);

  if (!article) {
    throw `Remove Image: Article with name ${articleName} does not exist!`;
  }

  article.images.splice(article.images.indexOf(imageFilename), 1);
  await article.save();

  try {
    await access(imagePath);
    await unlink(imagePath);
  } catch {}
};


