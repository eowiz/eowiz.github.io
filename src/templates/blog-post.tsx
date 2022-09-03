import { graphql, PageProps } from "gatsby";
import React from "react";
import Header from "components/header";
import Comments from "components/comments";
import * as head from "components/head";
import * as articleStyles from "styles/article.module.css";
import { parse, format } from "date-fns";
import { IoMdCalendar } from "react-icons/io";
import TableOfContents from "components/table-of-contents";
import Footer from "components/footer";
import Iframely from "components/iframely";

import "styles/iframely.css";
require("katex/dist/katex.min.css");

const BlogPostTemplate = ({
  data,
}: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { markdownRemark } = data;
  const publishedAt =
    markdownRemark?.frontmatter?.published_at &&
    parse(markdownRemark?.frontmatter?.published_at, "yyyy-M-d", new Date());

  return (
    <>
      <Header />
      <div className="flex max-w-5xl w-full mx-auto my-8 px-4">
        <div className="mx-auto"></div>
        <article className="flex w-full max-w-2xl mx-auto">
          <div className="flex flex-col pr-3 w-full max-w-2xl">
            <h1 className={articleStyles.title}>
              {markdownRemark?.frontmatter?.title}
            </h1>
            {publishedAt && (
              <section className={articleStyles.published_at}>
                <IoMdCalendar className="mr-1" />
                {format(publishedAt, "yyyy月MM月dd日")}
              </section>
            )}
            {markdownRemark?.frontmatter?.description && (
              <section
                className={articleStyles?.description}
                itemProp="backstory"
              >
                {markdownRemark.frontmatter.description}
              </section>
            )}
            <section
              className="text-sm mt-3"
              dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }}
            />
            <hr className="mt-12 mb-8" />
            <section>
              <Comments />
            </section>
          </div>
        </article>
        <TableOfContents html={markdownRemark?.tableOfContents ?? ""} />
      </div>
      <Footer />
      <Iframely />
    </>
  );
};

export const Head = ({ data }: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { markdownRemark } = data;

  return (
    <>
      <head.Head
        title={markdownRemark?.frontmatter?.title ?? ""}
        description={markdownRemark?.excerpt ?? ""}
      />
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(truncate: true)
      tableOfContents(maxDepth: 4)
      frontmatter {
        title
        description
        published_at
      }
    }
  }
`;
