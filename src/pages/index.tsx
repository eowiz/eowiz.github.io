import * as React from "react";
import { graphql, Link } from "gatsby";
import Header from "components/header";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <title>Binah</title>
      <h1>タイトル</h1>
      <Link to="/blog">Blog</Link>
    </main>
  );
};

export default IndexPage;
