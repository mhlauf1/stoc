import { defineType, defineField } from "sanity";
import { PinIcon } from "@sanity/icons";

export const officeLocation = defineType({
  name: "officeLocation",
  title: "Office Location",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({
      name: "city",
      title: "City Label",
      type: "string",
      description: 'Heading shown on the Locations page, e.g. "Baltimore, MD".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "streetAddress",
      title: "Street Address",
      type: "string",
      description: "Street and suite, e.g. 600 Baltimore Ave., Suite 205.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cityStateZip",
      title: "City, State, ZIP",
      type: "string",
      description: "Rendered on its own line below the street address.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first (offices are listed A→Z).",
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
    select: { title: "city", subtitle: "streetAddress" },
  },
});
