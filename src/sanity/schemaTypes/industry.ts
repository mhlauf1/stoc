import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

import { ICON_OPTIONS } from "./constants";

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  icon: TagIcon,
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
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...ICON_OPTIONS] },
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "badge",
      type: "string",
    }),
    defineField({
      name: "supportText",
      title: "Support Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "desc1",
      title: "Description (Paragraph 1)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "desc2",
      title: "Description (Paragraph 2)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "href",
      title: "Page Path",
      type: "string",
      description: 'Route, e.g. "/industries/healthcare".',
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "badge", media: "image" },
  },
});
