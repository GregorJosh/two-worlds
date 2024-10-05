"use client";

import { MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Editor from "ckeditor5/ckeditor";

import { updateArticle, addImage } from "@/actions";

import { Button } from "..";

export const ArticleEditor = ({
  article,
}: {
  article: Documents.Article;
}): React.JSX.Element => {
  const RichTextEditor = dynamic(
    () => import("../RichTextEditor/RichTextEditor"),
    { ssr: false }
  );

  const { name, content } = article;
  const router = useRouter();
  const editorRef = useRef<Editor>();

  const onEditorReady = (editor: Editor) => {
    editorRef.current = editor;
  };

  const onImageUpload = async (image: File) => {
    const formData = new FormData();
    formData.set("image", image);

    const imageURL = await addImage(formData, name);

    return { default: imageURL, "280": imageURL };
  };

  const onUpdateArticle: MouseEventHandler = async () => {
    const formData = new FormData();
    formData.set("content", editorRef.current!.getData());

    await updateArticle(formData, name);
    router.refresh();
  };

  return (
    <>
      <RichTextEditor
        content={content}
        onReady={onEditorReady}
        onImageUpload={onImageUpload}
      />
      <Button onClick={onUpdateArticle}>Save</Button>
    </>
  );
};
