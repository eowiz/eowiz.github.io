import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Binah</title>
      <h1>タイトル</h1>
      <Link to="/blog">Blog</Link>
    </main>
  );
};

export default IndexPage;
