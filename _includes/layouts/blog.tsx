import { PageData } from "lume/core.ts";
import { PageHelpers } from "lume/core.ts";

export const layout = "layouts/main.tsx";

export interface BlogPageData extends PageData {}

export default ({ results }: BlogPageData, filters: PageHelpers) => {
  return (
    <main className="flex flex-col w-full max-w-3xl mx-auto">
      <h1 className="mx-2 text-2xl font-railway text-center">Recent Posts</h1>
      <div className="w-full max-w-xl mx-auto">
        <ol className="relative border-l border-gray-200 mx-4 my-16">
          {results?.map((page) => {
            return (
              page.data.url && (
                <li className="mt-8 mb-8 pb-4 ml-4" key={page.data.url}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    {filters?.date(page.data.date, "yyyy年MM月dd日")}
                  </time>
                  <a href={page.data.url} key={page.data.url}>
                    <h3 className="text-lg font-sans font-semibold text-gray-900">
                      {page.data.title}
                    </h3>
                    <p className="text-base font-normal text-gray-500 ">
                      {page.data.description}
                    </p>
                  </a>
                </li>
              )
            );
          })}
        </ol>
      </div>
    </main>
  );
};
