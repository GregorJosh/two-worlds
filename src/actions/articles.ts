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

export const updateArticle = async (formData: FormData, name: string) => {
  const article = await db.Article.findOne({ name });

  if (!article) {
    throw `Update Article: Article with name ${name} does not exist!`;
  }

  const images = [...article.images];

  article.content = formData.get("content") as string;

  for (const filename of images) {
    if (!article.content.includes(filename)) {
      const index = article.images.indexOf(filename);

      article.images.splice(index, 1);
      await removeImage(filename);
    }
  }

  await article.save();
};

type URL = string;

export const addImage = async (
  fromData: FormData,
  articleName: string
): Promise<URL> => {
  const article = await db.Article.findOne({ name: articleName });

  if (!article) {
    throw `Add Image: Article with name ${articleName} does not exist!`;
  }

  const imageFile = fromData.get("image") as File;
  const imageData = Buffer.from(await imageFile.arrayBuffer());
  const imagePath = join(process.cwd(), "public", imageFile.name);
  const url = "/" + imageFile.name;

  await writeFile(imagePath, imageData);
  article.images.push(imageFile.name);
  await article.save();

  return url;
};

export const removeImage = async (filename: string) => {
  const imagePath = join(process.cwd(), "public", filename);

  await access(imagePath);
  await unlink(imagePath);
};
