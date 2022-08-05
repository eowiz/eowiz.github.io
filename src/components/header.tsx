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

  const [state, setState] = React.useState(true);
  const toggle = React.useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  const navToggle = (
    <button
      className="nav__toggle"
      area-expand={String(state)}
      type="button"
      onClick={toggle}
    >
      menu
    </button>
  );

  const navWrapper = (
    <ul className={"nav__wrapper" + (state ? "" : " active")}>
      <li className="nav__item">
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link to="/">{site?.siteMetadata?.title}</Link>
        <nav className="nav">
          {navToggle}
          {navWrapper}
        </nav>
      </div>
    </header>
  );
};

export default Header;
