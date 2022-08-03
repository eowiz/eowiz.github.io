import { useStaticQuery, graphql, PageProps } from "gatsby";
import React from "react";

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <h1>{site?.siteMetadata?.title}</h1>
    </div>
  );
};

export default Header;
