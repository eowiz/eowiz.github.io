import type { PageData } from "lume/core.ts";
import type { Data } from "../_data.ts";

export interface HeaderPageData extends PageData, Data {}

export default ({ siteMetadata, header }: HeaderPageData) => (
  <header className="bg-slate-700 px-3 py-4">
    <div className="flex max-w-3xl mx-auto">
      <a href="/">
        <div className="font-bungee_outline text-2xl text-slate-200 hover:text-white">
          {siteMetadata.title}
        </div>
      </a>
      <nav className="flex ml-8">
        {header.map((item) => (
          <a
            href={item.link}
            className="text-slate-300 hover:text-white py-auto"
            key={item.link}
          >
            <div className="font-raleway font-light mr-8 text-lg">
              {item.name}
            </div>
          </a>
        ))}
      </nav>
    </div>
  </header>
);
