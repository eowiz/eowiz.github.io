import { PageData } from "lume/core.ts";
import { Data } from "../_data.ts";
import { Node } from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";

export interface TocSubPageData extends PageData, Data {
  toc: Node[];
}

export default ({ toc, comp }: TocSubPageData) => {
  if (toc.length === 0) {
    return <></>;
  }

  return (
    <>
      {toc.map((item) => (
        <li key={item.url}>
          <a href={item.url} className="border-l-2 border-slate-300 pl-2">
            {item.text}
          </a>
          <ul
            dangerouslySetInnerHTML={{
              __html: comp.toc_sub({ toc: item.children }),
            }}
          ></ul>
        </li>
      ))}
    </>
  );
};
