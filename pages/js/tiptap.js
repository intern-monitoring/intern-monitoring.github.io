// Tiptap
import { Editor } from "https://esm.sh/@tiptap/core";
import StarterKit from "https://esm.sh/@tiptap/starter-kit";
import Paragraph from "https://esm.sh/@tiptap/extension-paragraph";
import Bold from "https://esm.sh/@tiptap/extension-bold";
import Underline from "https://esm.sh/@tiptap/extension-underline";
import Link from "https://esm.sh/@tiptap/extension-link";
import BulletList from "https://esm.sh/@tiptap/extension-bullet-list";
import OrderedList from "https://esm.sh/@tiptap/extension-ordered-list";
import ListItem from "https://esm.sh/@tiptap/extension-list-item";
import Blockquote from "https://esm.sh/@tiptap/extension-blockquote";

const paragraphExtension = Paragraph.configure({
  name: "customParagraph",
  HTMLAttributes: {
    class: "text-gray-900",
  },
});
const boldExtension = Bold.configure({
  name: "customBold",
  HTMLAttributes: {
    class: "font-bold",
  },
});
const linkExtension = Link.configure({
  name: "customLink",
  HTMLAttributes: {
    class:
      "inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-white",
  },
});
const bulletListExtension = BulletList.configure({
  name: "customBulletList",
  HTMLAttributes: {
    class: "list-disc list-inside text-gray-800 dark:text-white",
  },
});
const orderedListExtension = OrderedList.configure({
  name: "customOrderedList",
  HTMLAttributes: {
    class: "list-decimal list-inside text-gray-800 dark:text-white",
  },
});
const blockquoteExtension = Blockquote.configure({
  name: "customBlockquote",
  HTMLAttributes: {
    class: "text-gray-800 sm:text-xl dark:text-white",
  },
});

const editorDeskripsi = new Editor({
  element: document.querySelector("#hs-editor-tiptap [data-hs-editor-field]"),
  extensions: [
    StarterKit.configure({
      paragraph: false,
      bold: false,
      underline: false,
      link: false,
      bulletList: false,
      orderedList: false,
      listItem: false,
      blockquote: false,
    }),
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
const actionsDeskripsi = [
  {
    id: "#hs-editor-tiptap [data-hs-editor-bold]",
    fn: () => editorDeskripsi.chain().focus().toggleBold().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-italic]",
    fn: () => editorDeskripsi.chain().focus().toggleItalic().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-underline]",
    fn: () => editorDeskripsi.chain().focus().toggleUnderline().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-strike]",
    fn: () => editorDeskripsi.chain().focus().toggleStrike().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-link]",
    fn: () => {
      const url = window.prompt("URL");
      editorDeskripsi
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-ol]",
    fn: () => editorDeskripsi.chain().focus().toggleOrderedList().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-ul]",
    fn: () => editorDeskripsi.chain().focus().toggleBulletList().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-blockquote]",
    fn: () => editorDeskripsi.chain().focus().toggleBlockquote().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-code]",
    fn: () => editorDeskripsi.chain().focus().toggleCode().run(),
  },
];

actionsDeskripsi.forEach(({ id, fn }) => {
  const actionDeskripsi = document.querySelector(id);

  if (actionDeskripsi === null) return;

  actionDeskripsi.addEventListener("click", fn);
});

const editorInfo = new Editor({
  element: document.querySelector(
    "#hs-editor-tiptap-info [data-hs-editor-field-info]"
  ),
  extensions: [
    StarterKit.configure({
      paragraph: false,
      bold: false,
      underline: false,
      link: false,
      bulletList: false,
      orderedList: false,
      listItem: false,
      blockquote: false,
    }),
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
const actionsInfo = [
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-bold]",
    fn: () => editorInfo.chain().focus().toggleBold().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-italic]",
    fn: () => editorInfo.chain().focus().toggleItalic().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-underline]",
    fn: () => editorInfo.chain().focus().toggleUnderline().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-strike]",
    fn: () => editorInfo.chain().focus().toggleStrike().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-link]",
    fn: () => {
      const url = window.prompt("URL");
      editorInfo
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-ol]",
    fn: () => editorInfo.chain().focus().toggleOrderedList().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-ul]",
    fn: () => editorInfo.chain().focus().toggleBulletList().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-blockquote]",
    fn: () => editorInfo.chain().focus().toggleBlockquote().run(),
  },
  {
    id: "#hs-editor-tiptap-info [data-hs-editor-code]",
    fn: () => editorInfo.chain().focus().toggleCode().run(),
  },
];

actionsInfo.forEach(({ id, fn }) => {
  const actionInfo = document.querySelector(id);

  if (actionInfo === null) return;

  actionInfo.addEventListener("click", fn);
});
