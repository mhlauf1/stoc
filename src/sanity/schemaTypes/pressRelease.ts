import { defineType, defineField } from "sanity";
import { BellIcon } from "@sanity/icons";

export const pressRelease = defineType({
  name: "pressRelease",
  title: "Press Release",
  type: "document",
  icon: BellIcon,
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
      name: "publishDate",
      title: "Publication Date",
      type: "date",
      description: "Displayed as a full date (e.g. August 13, 2026).",
      options: { dateFormat: "MMMM D, YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateline",
      title: "Dateline",
      type: "string",
      description: "City shown at the start of the release, e.g. DALLAS, TX.",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description:
        "1–2 sentence summary shown on the card and in search results.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
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
      name: "sourceUrl",
      title: "Wire / Source URL",
      type: "url",
      description:
        "Original distribution link (e.g. BusinessWire), shown as attribution on the release page.",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Surface this release first in the News & Press section.",
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
      subtitle: "publishDate",
      media: "coverImage",
    },
  },
});
