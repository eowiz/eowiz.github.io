import * as React from "react";
import { Link, graphql, PageProps, useStaticQuery } from "gatsby";

import Header from "components/header";
import * as head from "components/head";

const BlogIndex = ({ data }: PageProps<Queries.BlogIndexQuery>) => {
  const { allMarkdownRemark } = data;

  return (
    <>
      <Header></Header>
      <div>記事</div>
      {allMarkdownRemark.nodes.map(
        (node) =>
          node.fields?.slug && (
            <Link to={node.fields.slug} key={node.fields.slug}>
              <div>{node.frontmatter?.title}</div>
            </Link>
          )
      )}
    </>
  );
};

export const Head = () => {
  return <head.Head title="Blog" />;
};

export default BlogIndex;

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark(
      sort: { fields: [frontmatter___published_at], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          published_at
          title
        }
      }
    }
  }
`;
