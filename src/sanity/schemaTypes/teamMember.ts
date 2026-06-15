import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      description: 'e.g. "Dallas, TX".',
    }),
    defineField({
      name: "title",
      title: "Role Title",
      type: "string",
      description: 'e.g. "Co-Founder | Managing Partner".',
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
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
    select: { title: "name", subtitle: "title", media: "image" },
  },
});
