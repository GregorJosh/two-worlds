import type { EditorConfig, PluginConstructor } from "@ckeditor/ckeditor5-core";
import type { EventInfo } from "@ckeditor/ckeditor5-utils";
import type { FileLoader, UploadResponse } from "@ckeditor/ckeditor5-upload";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5/ckeditor";

import "./ckeditor.scss";

interface Props {
  onReady?: (editor: Editor) => void;
  onImageUpload: (file: File) => Promise<UploadResponse>;
  content?: string;
}

function RichTextEditor({ onReady, onImageUpload, content }: Props) {
  class UploadAdapter {
    loader: FileLoader;

    constructor(loader: FileLoader) {
      this.loader = loader;
    }

    async upload(): Promise<UploadResponse> {
      try {
        const file = (await this.loader.file) as File;

        return await onImageUpload(file);
      } catch {
        return {};
      }
    }

    abort() {}
  }

  function UploadAdapterPlugin(editor: Editor) {
    const FileRepositoryPlugin = editor.plugins.get("FileRepository");

    FileRepositoryPlugin.createUploadAdapter = (loader) => {
      return new UploadAdapter(loader);
    };
  }

  const editorConfig: EditorConfig = {
    extraPlugins: [UploadAdapterPlugin as PluginConstructor],
  };

  const onFocus = (event: EventInfo, editor: Editor) => {
    event.stop();
  };

  return (
    <CKEditor
      editor={Editor}
      data={content}
      config={editorConfig}
      onReady={onReady}
      onFocus={onFocus}
    />
  );
}

export default RichTextEditor;
