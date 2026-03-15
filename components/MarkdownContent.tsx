"use client";

import Markdown from "markdown-to-jsx";

export default function MarkdownContent({ children }: { children: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          p: {
            props: { className: "mb-4 leading-relaxed text-neutral-700" },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
}
