// src/components/RichTextEditor.tsx
"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Import Quill secara dynamic untuk menghindari SSR issue
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-neutral-400">Loading editor...</span>
    </div>
  ),
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: number;
}

// Modules untuk Quill
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
];

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Tulis konten di sini...",
  height = 200,
}: RichTextEditorProps) {
  return (
    <div className="rich-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ height: height }}
      />
    </div>
  );
}
