import { graphql, PageProps } from "gatsby";
import React from "react";
import Header from "components/header";
import Comments from "components/comments";
import * as head from "components/head";
import { parse, format } from "date-fns";
import { IoMdCalendar } from "react-icons/io";
import TableOfContents from "components/table-of-contents";
import Footer from "components/footer";
import Iframely from "components/iframely";

import "styles/article.css";
import "styles/markdown.css";
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
      <div className="article-wrap">
        <article className="markdown">
          <h1 className="title">{markdownRemark?.frontmatter?.title}</h1>
          {publishedAt && (
            <section className="published_at">
              <IoMdCalendar className="icon" />
              {format(publishedAt, "yyyy月MM月dd日")}
            </section>
          )}
          {markdownRemark?.frontmatter?.description && (
            <section className="description" itemProp="backstory">
              {markdownRemark.frontmatter.description}
            </section>
          )}
          <section
            dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }}
          />
          <hr />
          <section>
            <Comments />
          </section>
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
