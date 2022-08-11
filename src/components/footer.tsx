import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <footer className="flex flex-col bg-slate-700 py-6 px-4">
      <div className="mx-auto text-slate-100">&copy; 2022 eowiz</div>
    </footer>
  );
};

export default Footer;
