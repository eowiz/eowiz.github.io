import React from "react"

type Props = {
  siteTitle: string;
};

const Header = (props: Props) => {
  return (
    <div>
      <h1>{props.siteTitle}</h1>
      </div>
  );
};

export default Header;
