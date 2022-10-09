import type { PageData } from "lume/core.ts";

export interface Data {
  siteMetadata: {
    title: string;
    copyright: string;
  };
  header: ReadonlyArray<{
    name: string;
    link: string;
  }>;
}

const data: Data & { layout: string } = {
  layout: "layouts/main.tsx",
  siteMetadata: {
    title: "skhole",
    copyright: "eowiz",
  },
  header: [
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
  ],
} as const;

export default data;
