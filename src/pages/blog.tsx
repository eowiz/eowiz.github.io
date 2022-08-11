import * as React from "react";
import { Link, graphql, PageProps, useStaticQuery } from "gatsby";
import { parse, format } from "date-fns";

import Header from "components/header";
import * as head from "components/head";
import Footer from "components/footer";

const BlogIndex = ({ data }: PageProps<Queries.BlogIndexQuery>) => {
  const { allMarkdownRemark } = data;

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header></Header>
        <main className="flex flex-col mb-auto">
          <div className="w-max-2lx my-8 px-4">
            <h1 className="mx-auto text-center text-2xl font-railway">
              Recent Posts
            </h1>
            <ol className="relative border-l border-gray-200 w-max-xl my-8">
              {allMarkdownRemark.nodes.map((node) => {
                const publishedAt =
                  node.frontmatter?.published_at &&
                  parse(node.frontmatter?.published_at, "yyyy-M-d", new Date());

                return (
                  node.fields?.slug && (
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      {publishedAt && (
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                          {format(publishedAt, "yyyy月MM月dd日")}
                        </time>
                      )}
                      <Link to={node.fields.slug} key={node.fields.slug}>
                        <h3 className="text-lg font-sans font-semibold text-gray-900">
                          {node.frontmatter?.title}
                        </h3>
                        {node.frontmatter?.description && (
                          <p className="text-base font-normal text-gray-500 ">
                            {node.frontmatter?.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  )
                );
              })}
            </ol>
          </div>
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
          title
          published_at
          description
        }
      }
    }
  }
`;
