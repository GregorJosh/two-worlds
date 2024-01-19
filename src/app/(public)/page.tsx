import { CSSProperties } from "react";

import { isAuthenticated } from "@/libs";
import { Article, Form, FormField } from "@/components";
import { getArticleByTitle } from "@/actions";

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

  return (
    <>
      {isAuth && (
        <Form>
          <FormField label="Title">
            <input type="text" name="title" value={article.title} />
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
