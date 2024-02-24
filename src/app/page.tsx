import { revalidatePath } from "next/cache";
import Image from "next/image";

import { isAuth } from "@/libs";
import { getArticle, removeImage, updateArticle } from "@/actions";
import { Article, Button, Form, FormField } from "@/components";

import styles from "./page.module.scss";

export const metadata = {
  title: "Two Worlds: Home",
};

export default async function HomePage() {
  const articleName = "home_welcome";
  const article = await getArticle(articleName);
  const auth = isAuth();

  const onUpdateArticle: ActionHandler = async (formData) => {
    "use server";

    const result = await updateArticle(formData, articleName);

    if (result.status === "success") {
      revalidatePath("/", "layout");

      return;
    }

    return result;
  };

  const onRemoveImage = async (formData: FormData) => {
    "use server";

    await removeImage(formData, articleName);
    revalidatePath("/", "layout");
  };

  return (
    <>
      {auth && (
        <Form action={onUpdateArticle}>
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
          <FormField label="Image">
            <input type="file" name="image" accept="image/*" />
          </FormField>
        </Form>
      )}
      <Article title={article.title}>
        {article.content.map((paragraph, id) => {
          return <p key={id}>{paragraph}</p>;
        })}
        {article.images.map((image, id) => {
          return (
            <div key={id} className={styles.image}>
              <Image
                src={`/${image}`}
                alt={image}
                sizes="(max-width: 768px) 100vw"
                fill
                priority
              />
              {auth && (
                <form action={onRemoveImage}>
                  <input type="hidden" name="image-filename" value={image} />
                  <Button className={styles.button} type="submit">
                    REMOVE
                  </Button>
                </form>
              )}
            </div>
          );
        })}
      </Article>
    </>
  );
}
