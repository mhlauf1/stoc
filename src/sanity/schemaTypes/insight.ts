import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

import { INDUSTRY_OPTIONS, CONTENT_TYPE_OPTIONS } from "./constants";

export const insight = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: { list: [...INDUSTRY_OPTIONS] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contentType",
      title: "Content Type",
      type: "string",
      options: { list: [...CONTENT_TYPE_OPTIONS], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishDate",
      title: "Publication Date",
      type: "date",
      description: "Displayed as Month Year (e.g. June 2026).",
      options: { dateFormat: "MMMM YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "2–3 sentences summarizing the piece.",
      validation: (rule) => rule.required().max(400),
    }),
    // Content source: PDF upload OR external URL. Toggle decides which is shown.
    defineField({
      name: "sourceType",
      title: "Content Source",
      type: "string",
      options: {
        list: [
          { title: "PDF Upload", value: "pdf" },
          { title: "External URL", value: "url" },
        ],
        layout: "radio",
      },
      initialValue: "pdf",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: { accept: ".pdf" },
      hidden: ({ parent }) => parent?.sourceType !== "pdf",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { sourceType?: string };
          if (parent?.sourceType === "pdf" && !value) {
            return "Upload a PDF or switch the source to External URL.";
          }
          return true;
        }),
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.sourceType !== "url",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { sourceType?: string };
          if (parent?.sourceType === "url" && !value) {
            return "Add a URL or switch the source to PDF Upload.";
          }
          return true;
        }),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Surface this piece in the featured block at the top.",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Publication Date, New → Old",
      name: "publishDateDesc",
      by: [{ field: "publishDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "contentType",
      media: "coverImage",
    },
  },
});
