import { revalidatePath } from "next/cache";

import { Article, Form, FormField } from "@/components";
import { getIsAuth, getArticle, updateArticle } from "@/actions";

export const metadata = {
  title: "Two Worlds: Home",
};

export default async function HomePage() {
  const isAuth = getIsAuth();
  const article = await getArticle("home_welcome");

  const onSubmit = async (formData: FormData) => {
    "use server";

    await updateArticle(article.name, formData);
    revalidatePath("/");
  };

  return (
    <>
      {isAuth && (
        <Form action={onSubmit}>
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
