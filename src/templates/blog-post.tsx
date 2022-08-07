import { graphql, PageProps } from "gatsby";
import React from "react";
import Header from "components/header";
import * as head from "components/head";
import * as articleStyles from "styles/article.module.css";
import { parse, format } from "date-fns";
import { IoMdCalendar } from "react-icons/io";
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
      <div className="flex max-w-4xl mx-auto my-8">
        <article
          className="flex flex-col max-w-lg mx-auto"
          itemScope
          itemType="http://schema.org/Article"
        >
          <h1 className={articleStyles.title} itemProp="headline">
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
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }}
          />
        </article>
      </div>
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
      frontmatter {
        title
        description
        published_at
      }
    }
  }
`;
