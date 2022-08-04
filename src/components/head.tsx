import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";

export type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = (props: HeadProps) => {
  const { site } = useStaticQuery(graphql`
    query Head {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {props.title && `${props.title} | `}
        {site?.siteMetadata.title}
      </title>
      {props.description && (
        <meta name="description" content={props.description}></meta>
      )}
    </>
  );
};
