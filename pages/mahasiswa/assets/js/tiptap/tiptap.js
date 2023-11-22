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
    class: "text-gray-900 min-h-[180px]",
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

const editorBimbingan = new Editor({
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
const actionsBimbingan = [
  {
    id: "#hs-editor-tiptap [data-hs-editor-bold]",
    fn: () => editorBimbingan.chain().focus().toggleBold().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-italic]",
    fn: () => editorBimbingan.chain().focus().toggleItalic().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-underline]",
    fn: () => editorBimbingan.chain().focus().toggleUnderline().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-strike]",
    fn: () => editorBimbingan.chain().focus().toggleStrike().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-link]",
    fn: () => {
      const url = window.prompt("URL");
      editorBimbingan
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-ol]",
    fn: () => editorBimbingan.chain().focus().toggleOrderedList().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-ul]",
    fn: () => editorBimbingan.chain().focus().toggleBulletList().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-blockquote]",
    fn: () => editorBimbingan.chain().focus().toggleBlockquote().run(),
  },
  {
    id: "#hs-editor-tiptap [data-hs-editor-code]",
    fn: () => editorBimbingan.chain().focus().toggleCode().run(),
  },
];

actionsBimbingan.forEach(({ id, fn }) => {
  const actionBimbingan = document.querySelector(id);

  if (actionBimbingan === null) return;

  actionBimbingan.addEventListener("click", fn);
});
