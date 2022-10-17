import { PageHelpers } from "lume/core.ts";
import type { PageData } from "lume/core.ts";
import type { Data } from "../../_data.ts";

export interface PostPageData extends PageData, Data {
  date: Date;
}

export const layout = "layouts/main.tsx";

export default (
  { title, date, children, comp, toc }: PostPageData,
  filters: PageHelpers
) => (
  <main className="post flex justify-center mx-auto">
    <article className="max-w-2xl flex-auto">
      <section className="mb-6">
        <h1>{title}</h1>
        <div className="flex mb-2 items-center text-gray-800">
          <span className="ion-calendar mr-2"></span>
          <span>{filters.date(date, "yyyy年MM月dd日")}</span>
        </div>
      </section>
      <section className="mb-6">{children}</section>
      <section>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-slate-400"></div>
          <span className="flex-shrink mx-4 text-slate-700">Comments</span>
          <div className="flex-grow border-t border-slate-400"></div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: comp.comments() }}></div>
      </section>
    </article>
    <aside className="toc sticky top-0 text-sm mb-auto pl-4 py-2 hidden lg:flex lg:flex-col">
      <div className="text-lg font-bold">目次</div>
      <div
        className="text-sm text-gray-400"
        dangerouslySetInnerHTML={{ __html: comp.toc({ toc: toc }) }}
      ></div>
    </aside>
    <script src="/js/toc.js"></script>
  </main>
);
