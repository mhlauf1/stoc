import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "seusdtab",
    dataset: "production",
  },
  studioHost: "stoc-advisory",
});
