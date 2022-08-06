import { useStaticQuery, graphql, PageProps, Link } from "gatsby";
import * as React from "react";
require("./header.css");

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
    <header className="bg-slate-700">
      <div className="flex max-w-3xl mx-auto">
        <Link
          to="/"
          className="title px-2 my-1.5 text-2xl text-slate-200 hover:text-white"
        >
          {site?.siteMetadata?.title}
        </Link>
        <nav className="nav my-auto ml-3">
          <ul className="flex text-sm">
            <li className="mr-3">
              <Link
                to="/blog"
                className="inline-block px-3 text-slate-300 hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li className="mr-3">
              <Link
                to="/about"
                className="inline-block px-3 text-slate-300 hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
