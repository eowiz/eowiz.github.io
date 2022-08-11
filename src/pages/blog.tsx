import * as React from "react";
import { Link, graphql, PageProps, useStaticQuery } from "gatsby";

import Header from "components/header";
import * as head from "components/head";
import Footer from "components/footer";

const BlogIndex = ({ data }: PageProps<Queries.BlogIndexQuery>) => {
  const { allMarkdownRemark } = data;

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header></Header>
        <main className="mb-auto">
          <div>記事</div>
          {allMarkdownRemark.nodes.map(
            (node) =>
              node.fields?.slug && (
                <Link to={node.fields.slug} key={node.fields.slug}>
                  <div>{node.frontmatter?.title}</div>
                </Link>
              )
          )}
        </main>
        <Footer />
      </div>
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
