import { useStaticQuery, graphql, PageProps, Link } from "gatsby";
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
      <Link to="/">{site?.siteMetadata?.title}</Link>
    </div>
  );
};

export default Header;
