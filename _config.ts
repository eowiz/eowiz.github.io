import lume from "lume/mod.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import windi from "lume/plugins/windi_css.ts";
import esbuild from "lume/plugins/esbuild.ts";
import jsx from "lume/plugins/jsx.ts";

import * as minifier from "https://deno.land/x/minifier@v1.1.1/mod.ts";

// markdown
import toc from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";
import emoji from "https://jspm.dev/markdown-it-emoji";
import anchor from "https://jspm.dev/markdown-it-anchor";
import footnote from "https://jspm.dev/markdown-it-footnote";
import mark from "https://jspm.dev/markdown-it-mark";
import deflist from "https://jspm.dev/markdown-it-deflist";
import container from "https://jspm.dev/markdown-it-container";
import MarkdonwIt from "https://jspm.dev/markdown-it";
import katex from "lume/plugins/katex.ts";

// syntax highlight
import prism from "lume/plugins/prism.ts";

const md = new MarkdonwIt();

const markdown = {
  plugins: [
    toc,
    emoji,
    anchor,
    footnote,
    mark,
    deflist,
    [
      container,
      "warning",
      {
        validate: function (params) {
          return params.trim().match(/^message\s+(.*)$/);
        },
        render: function (tokens, idx) {
          const m = tokens[idx].info.trim().match(/^message\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            return (
              '<div class="message ' +
              md.utils.escapeHtml(m[1]) +
              '"><div class="message-body">'
            );
          } else {
            return "</div></div>";
          }
        },
      },
    ],
  ],
  keepDefaultPlugins: true,
  options: {
    html: true,
    breaks: true,
    linkify: true,
    typography: true,
  },
} as const;

const site = lume(
  {
    location: new URL("https://eowiz.github.io/"),
  },
  { markdown }
);

const minifyHTML = (page: { content: string }): void => {
  page.content = minifier.minifyHTML(page.content);
};

site
  .ignore("README.md")
  .use(resolveUrls())
  .use(
    slugifyUrls({
      lowercase: true,
      alphanumeric: true,
    })
  )
  .use(
    postcss({
      extensions: [".css", ".windi.css"],
    })
  )
  .use(
    windi({
      cssFile: "windi.css",
      minify: true,
      config: {
        theme: {
          extend: {
            fontFamily: {
              bungee_outline: ["'Bungee Outline'"],
              raleway: ["Raleway"],
              heading: ["'Noto Sans JP'", "ui-sans-serif", "sytem-ui"],
              body: [
                "'M PLUS Rounded 1c'",
                "'Helvetica Neue'",
                "Helvetica",
                "'Hiragino Sans'",
                "'Hiragino Kaku Gothic ProN'",
                "Arial",
                "'Yu Gothic'",
                "Meiryo",
                "sans-serif",
              ],
            },
          },
        },
      },
    })
  )
  .use(date())
  .use(
    prism({
      languages: ["java", "ts"],
    })
  )
  .use(katex())
  .use(jsx())
  .use(esbuild())
  .process([".html"], minifyHTML);

export default site;
