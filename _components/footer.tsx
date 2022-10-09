import type { PageData, Page } from "lume/core.ts";
import type { Data } from "../_data.ts";

export interface FooterPageData extends PageData, Data {}

export default ({ siteMetadata }: FooterPageData) => (
  <footer className="flex py-6 px-3 mt-4 bg-slate-700 font-raleway text-slate-200">
    <div className="mx-auto">&copy; 2022 {siteMetadata.copyright}</div>
  </footer>
);
