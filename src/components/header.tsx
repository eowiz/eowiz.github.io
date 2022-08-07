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
    <header className="bg-slate-700">
      <div className="flex max-w-3xl mx-auto">
        <Link to="/" className="title">
          {site?.siteMetadata?.title}
        </Link>
        <nav className="nav my-auto ml-3">
          <ul className="flex text-sm">
            {navItems.map((item) => (
              <li className="mr-3" key={item.href}>
                <Link
                  to={item.href}
                  className="inline-block px-3 text-slate-300 hover:text-white"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
