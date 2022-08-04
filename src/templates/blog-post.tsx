import { graphql, PageProps } from "gatsby";
import React from "react";
import Header from "components/header";
import * as head from "components/head";
require("katex/dist/katex.min.css");

const BlogPostTemplate = ({
  data,
}: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { markdownRemark } = data;

  return (
    <div>
      <Header />
      <section
        dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }}
      />
    </div>
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
        published_at
      }
    }
  }
`;
