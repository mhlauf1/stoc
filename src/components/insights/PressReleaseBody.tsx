import React from "react";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-neutral-600 md:text-lg tracking-tight leading-relaxed">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-gambetta tracking-tight text-neutral-800 pt-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-gambetta tracking-tight text-neutral-800 pt-2">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#18598b] pl-5 text-neutral-600 md:text-lg tracking-tight leading-relaxed italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 flex flex-col gap-2 text-neutral-600 md:text-lg tracking-tight leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 flex flex-col gap-2 text-neutral-600 md:text-lg tracking-tight leading-relaxed">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#18598b] underline underline-offset-2 hover:text-[#16333A] transition-colors"
      >
        {children}
      </a>
    ),
  },
};

const PressReleaseBody: React.FC<{ body: unknown[] }> = ({ body }) => (
  <div className="flex flex-col gap-5 max-w-3xl">
    <PortableText value={body as PortableTextBlock[]} components={components} />
  </div>
);

export default PressReleaseBody;
