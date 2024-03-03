import type { EditorConfig } from "@ckeditor/ckeditor5-core";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5/ckeditor";

const editorConfig: EditorConfig = {
  placeholder: "Article content...",
};

function RichTextEditor({ content }: { content?: string }) {
  return <CKEditor editor={Editor} data={content} config={editorConfig} />;
}

export default RichTextEditor;
