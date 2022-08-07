import * as React from "react";
import { graphql, Link } from "gatsby";
import Header from "components/header";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col max-w-3xl mx-auto py-4">
        <Link to="/blog">Blog</Link>
      </div>
    </main>
  );
};

export default IndexPage;
