import { getArticleSchema } from "@/schemas";
import { getArticleByTitle } from "@/actions";

export const getArticle = async (request: Request) => {
  const data = await request.json();
  const { title } = await getArticleSchema.validateAsync(data);

  return await getArticleByTitle(title);
};
