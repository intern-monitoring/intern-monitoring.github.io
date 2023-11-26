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

const editorPembimbing = new Editor({
  element: document.querySelector(
    "#hs-editor-tiptap-pembimbing [data-hs-editor-field-pembimbing]"
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
const actionsPembimbing = [
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-bold]",
    fn: () => editorPembimbing.chain().focus().toggleBold().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-italic]",
    fn: () => editorPembimbing.chain().focus().toggleItalic().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-underline]",
    fn: () => editorPembimbing.chain().focus().toggleUnderline().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-strike]",
    fn: () => editorPembimbing.chain().focus().toggleStrike().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-link]",
    fn: () => {
      const url = window.prompt("URL");
      editorPembimbing
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-ol]",
    fn: () => editorPembimbing.chain().focus().toggleOrderedList().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-ul]",
    fn: () => editorPembimbing.chain().focus().toggleBulletList().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-blockquote]",
    fn: () => editorPembimbing.chain().focus().toggleBlockquote().run(),
  },
  {
    id: "#hs-editor-tiptap-pembimbing [data-hs-editor-code]",
    fn: () => editorPembimbing.chain().focus().toggleCode().run(),
  },
];

actionsPembimbing.forEach(({ id, fn }) => {
  const actionPembimbing = document.querySelector(id);

  if (actionPembimbing === null) return;

  actionPembimbing.addEventListener("click", fn);
});

// Mentor
const editorMentor = new Editor({
  element: document.querySelector(
    "#hs-editor-tiptap-mentor [data-hs-editor-field-mentor]"
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
const actionsMentor = [
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-bold]",
    fn: () => editorMentor.chain().focus().toggleBold().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-italic]",
    fn: () => editorMentor.chain().focus().toggleItalic().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-underline]",
    fn: () => editorMentor.chain().focus().toggleUnderline().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-strike]",
    fn: () => editorMentor.chain().focus().toggleStrike().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-link]",
    fn: () => {
      const url = window.prompt("URL");
      editorMentor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-ol]",
    fn: () => editorMentor.chain().focus().toggleOrderedList().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-ul]",
    fn: () => editorMentor.chain().focus().toggleBulletList().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-blockquote]",
    fn: () => editorMentor.chain().focus().toggleBlockquote().run(),
  },
  {
    id: "#hs-editor-tiptap-mentor [data-hs-editor-code]",
    fn: () => editorMentor.chain().focus().toggleCode().run(),
  },
];

actionsMentor.forEach(({ id, fn }) => {
  const actionMentor = document.querySelector(id);

  if (actionMentor === null) return;

  actionMentor.addEventListener("click", fn);
});
