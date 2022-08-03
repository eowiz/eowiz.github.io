import { graphql, PageProps } from "gatsby";
import React from "react";

const BlogPostTemplate = ({
  data,
}: PageProps<Queries.BlogPostTemplateQuery>) => {
  const { markdownRemark } = data;

  return (
    <div>
      <section
        dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? "" }}
      />
    </div>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        published_at
      }
    }
  }
`;
