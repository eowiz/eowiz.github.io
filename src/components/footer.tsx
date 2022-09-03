import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import "styles/footer.css";

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  return (
    <footer>
      <div className="copyright">&copy; 2022 {site.siteMetadata.copyright}</div>
    </footer>
  );
};

export default Footer;
