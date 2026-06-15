import { defineType, defineField } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const jobPosting = defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Role Title",
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
      name: "location",
      type: "reference",
      to: [{ type: "officeLocation" }],
      description: "Office this role is based in (or closest to).",
    }),
    defineField({
      name: "department",
      type: "string",
      description: "e.g. Transaction Advisory Services, Business Development.",
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
        layout: "radio",
      },
      initialValue: "full-time",
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Role summary, responsibilities, and requirements.",
    }),
    defineField({
      name: "applyUrl",
      title: "Apply URL",
      type: "url",
      description: "Link to an application form or posting.",
    }),
    defineField({
      name: "applyEmail",
      title: "Apply Email",
      type: "string",
      description: "Used if no Apply URL is provided.",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "postedDate",
      title: "Posted Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Uncheck to remove the role from the Careers page.",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Posted Date, New → Old",
      name: "postedDateDesc",
      by: [{ field: "postedDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", department: "department", active: "active" },
    prepare({ title, department, active }) {
      return {
        title,
        subtitle: `${department || "—"}${active ? "" : " (inactive)"}`,
      };
    },
  },
});
