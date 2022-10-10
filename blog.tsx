import { PageData } from "lume/core.ts";

export const title = "Blog";
export const layout = "layouts/blog.tsx";

const url = (n: number) => {
  if (n === 1) {
    return "/blog/";
  }

  return `/blog/${n}`;
};

export default function* ({ search, paginate }: PageData) {
  const posts = search.pages("type=posts", "date=desc");
  const options = {
    url,
    size: 10,
  };

  for (const page of paginate(posts, options)) {
    yield page;
  }
}
