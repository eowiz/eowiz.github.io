import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import * as React from "react";
import "styles/header.css";

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

  const navItems: { text: string; href: string }[] = [
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "About",
      href: "/about",
    },
  ];

  return (
    <header>
      <div className="wrap">
        <Link to="/blog" className="title">
          {site?.siteMetadata?.title}
        </Link>
        <nav>
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
