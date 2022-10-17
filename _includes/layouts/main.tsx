import type { PageData } from "lume/core.ts";
import type { Data } from "../../_data.ts";

export interface MainPageData extends PageData, Data {}

export default ({
  title,
  description,
  siteMetadata,
  children,
  comp,
}: MainPageData) => {
  const titleText =
    title && title !== "undefined"
      ? `${title} | ${siteMetadata.title}`
      : siteMetadata.title;

  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{titleText}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/windi.css" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/post.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.css"
        />
        <script async src="https://cdn.iframe.ly/embed.js"></script>
      </head>
      <body>
        <div className="flex flex-col h-screen justify-between">
          <div
            dangerouslySetInnerHTML={{
              __html: comp.header(),
            }}
          ></div>
          <div className="mx-auto mt-8 mb-auto px-6 w-full max-w-5xl">
            {children}
          </div>
          <div dangerouslySetInnerHTML={{ __html: comp.footer() }}></div>
        </div>
      </body>
    </html>
  );
};
