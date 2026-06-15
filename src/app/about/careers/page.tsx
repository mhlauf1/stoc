import React from "react";
import Hero from "@/components/about/careers/Hero";
import { sanityFetch } from "@/sanity/lib/client";
import { JOB_POSTINGS_QUERY } from "@/sanity/lib/queries";
import type { JobPostingDoc } from "@/sanity/lib/types";

const page = async () => {
  const jobPostings = await sanityFetch<JobPostingDoc[]>({
    query: JOB_POSTINGS_QUERY,
  });

  return (
    <>
      <Hero jobPostings={jobPostings} />
    </>
  );
};

export default page;
