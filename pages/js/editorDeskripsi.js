import { Editor } from "https://esm.sh/@tiptap/core";
import StarterKit from "https://esm.sh/@tiptap/starter-kit";
import Underline from "https://esm.sh/@tiptap/extension-underline";
import ListItem from "https://esm.sh/@tiptap/extension-list-item";
import {
  paragraphExtension,
  boldExtension,
  linkExtension,
  bulletListExtension,
  orderedListExtension,
  blockquoteExtension,
} from "./tiptap";

export const editorDeskripsi = new Editor({
  element: document.querySelector("#hs-editor-tiptap [data-hs-editor-field]"),
  extensions: [
    StarterKit,
    paragraphExtension,
    boldExtension,
    Underline,
    linkExtension,
    bulletListExtension,
    orderedListExtension,
    ListItem,
    blockquoteExtension,
  ],
});
