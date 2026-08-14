import { type SchemaTypeDefinition } from "sanity";

import { insight } from "./insight";
import { pressRelease } from "./pressRelease";
import { jobPosting } from "./jobPosting";
import { officeLocation } from "./officeLocation";
import { teamMember } from "./teamMember";
import { service } from "./service";
import { industry } from "./industry";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    insight,
    pressRelease,
    jobPosting,
    officeLocation,
    teamMember,
    service,
    industry,
  ],
};
