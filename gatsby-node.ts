import path, { resolve } from "path";
import { createFilePath } from "gatsby-source-filesystem";
import { CreatePagesArgs, GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const result: {
    errors?: any;
    data?: {
      allMarkdownRemark: { nodes: { id: string; fields: { slug?: string } }[] };
    };
  } = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___published_at], order: DESC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      "There was an error loading your blog posts",
      result.errors
    );
    return;
  }

  result.data?.allMarkdownRemark.nodes.forEach((node) => {
    const { id } = node;
    const { slug } = node.fields;
    if (!slug) {
      return;
    }

    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(__dirname, "./src/templates/blog-post.tsx"),
      context: {
        id,
      },
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: value.replace(/^\//, ""),
    });
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
      type Markdown implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
    
      type Frontmatter {
        title: String
        publishedAt: Date @dateformat
      }

      type Fields {
        slug: String
      }
    `);
  };
