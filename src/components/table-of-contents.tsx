import React, { useEffect, useMemo } from "react";
import { useActiveHash } from "react-hooks/use-active-hash";

const TableOfContents = ({ html }: { html: string }) => {
  const targetedIds = useMemo(() => {
    if (typeof document === "undefined") {
      return [];
    }

    const dummyDOM = document.createElement("html");
    dummyDOM.innerHTML = html;
    const justAnchors = dummyDOM.querySelectorAll("a");

    const val: string[] = [];
    justAnchors.forEach((a) => {
      val.push(a.hash.replace("#", ""));
    });

    return val;
  }, []);

  const activeHash = useActiveHash(targetedIds);

  useEffect(() => {
    const tocLinks = document.querySelectorAll(".toc a");

    tocLinks.forEach((a) => {
      a.classList.remove("active");
    });

    console.log(activeHash);

    const activeLink = document.querySelectorAll(
      `.toc a[href$="${"#" + encodeURI(activeHash)}"]`
    );

    if (activeLink.length) {
      activeLink[0].classList.add("active");
    }
  }, [activeHash]);

  return (
    <section className="toc flex flex-col text-sm py-2">
      <div className="sticky top-0">
        <div className="text-lg font-mono font-bold">目次</div>
        <div
          className="text-sm font-mono text-gray-500"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </section>
  );
};

export default TableOfContents;
