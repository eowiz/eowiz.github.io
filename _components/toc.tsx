import { PageData } from "lume/core.ts";
import { Data } from "../_data.ts";
import { Node } from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";

export interface TocPageData extends PageData, Data {
  toc: Node;
}

export default ({ toc, comp }: TocPageData) => <ul>{comp.toc_sub({ toc })}</ul>;
