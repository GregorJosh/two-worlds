/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Image, ImageUpload } from "@ckeditor/ckeditor5-image";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Undo } from "@ckeditor/ckeditor5-undo";
declare class Editor extends ClassicEditor {
  static builtinPlugins: (
    | typeof Alignment
    | typeof Bold
    | typeof Essentials
    | typeof Heading
    | typeof Image
    | typeof ImageUpload
    | typeof Italic
    | typeof Link
    | typeof Paragraph
    | typeof Underline
    | typeof Undo
  )[];
  static defaultConfig: EditorConfig;
}
export default Editor;
