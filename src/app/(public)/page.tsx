import { CSSProperties } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/libs";
import { Article, Form, FormField } from "@/components";
import { getArticleByTitle, updateArticleByTitle } from "@/actions";

export const metadata = {
  title: "Two Worlds: Home",
};

export default async function HomePage() {
  const isAuth = isAuthenticated();
  const article = await getArticleByTitle("Two Worlds");
  const styledP: CSSProperties = {
    textAlign: "left",
  };

  if (!article) {
    return <p>No data</p>;
  }

  const updateArticle = async (formData: FormData) => {
    "use server";

    await updateArticleByTitle(article.title, formData);

    redirect("/");
  };

  return (
    <>
      {isAuth && (
        <Form action={updateArticle}>
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
          return (
            <p style={styledP} key={id}>
              {paragraph}
            </p>
          );
        })}
      </Article>
    </>
  );
}
