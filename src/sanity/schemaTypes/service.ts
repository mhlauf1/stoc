import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

import { ICON_OPTIONS } from "./constants";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: CogIcon,
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
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longDesc",
      title: "Long Description",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "href",
      title: "Page Path",
      type: "string",
      description: 'Route for this service, e.g. "/services/transaction-advisory-services".',
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
    select: { title: "title", subtitle: "href", media: "image" },
  },
});
