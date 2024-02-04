import { revalidatePath } from "next/cache";

import { isAuth } from "@/libs";
import { Article, Form, FormField } from "@/components";
import { getArticle, updateArticle } from "@/actions";

export const metadata = {
  title: "Two Worlds: Home",
};

export default async function HomePage() {
  const articleName = "home_welcome";
  const article = await getArticle(articleName);
  const auth = isAuth();

  const updateArticleAction = async (formData: FormData) => {
    "use server";

    const result = await updateArticle(formData, articleName);
    revalidatePath("/");

    return result;
  };

  return (
    <>
      {auth && (
        <Form action={updateArticleAction}>
          <FormField label="Title">
            <input type="text" name="title" defaultValue={article.title} />
          </FormField>
          <>
            {article.content.map((paragraph, id) => {
              return (
                <FormField key={id} label="Paragraph">
                  <textarea
                    name="paragraph"
                    defaultValue={paragraph}
                  ></textarea>
                </FormField>
              );
            })}
          </>
        </Form>
      )}
      <Article title={article.title}>
        {article.content.map((paragraph, id) => {
          return <p key={id}>{paragraph}</p>;
        })}
      </Article>
    </>
  );
}
