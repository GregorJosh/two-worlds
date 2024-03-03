"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { updateArticle } from "@/actions";

import { Form, FormField } from "..";

export const ArticleEditor = ({ article }: { article: ArticleDocument }) => {
  const RichTextEditor = dynamic(
    () => import("../RichTextEditor/RichTextEditor"),
    { ssr: false }
  );

  const { name, title, content, images } = article;
  const router = useRouter();

  const onUpdateArticle: ActionHandler = async (formData) => {
    const result = await updateArticle(formData, name);

    if (result.status === "success") {
      router.refresh();
      return;
    }

    return result;
  };

  return (
    <>
      <Form action={onUpdateArticle}>
        <FormField label="Title">
          <input type="text" name="title" defaultValue={title} />
        </FormField>
        <>
          {content.map((paragraph, id) => {
            return (
              <FormField key={id} label="Paragraph">
                <textarea name="paragraph" defaultValue={paragraph}></textarea>
              </FormField>
            );
          })}
        </>
        <FormField label="Image">
          <input type="file" name="image" accept="image/*" />
        </FormField>
      </Form>
      <RichTextEditor />
    </>
  );
};
