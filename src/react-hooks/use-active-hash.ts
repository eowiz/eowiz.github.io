// see: https://stackoverflow.com/questions/60833907/gatsby-syncing-the-table-of-contents-with-the-page-scroll-and-style-the-active-l

import { useEffect, useState } from "react";

export const useActiveHash = (itemIds: string[], rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: rootMargin || "0% 0% -100% 0%" }
    );

    itemIds.forEach((id) => {
      const elm = document.getElementById(decodeURI(id));
      if (elm) {
        observer.observe(elm);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        const elm = document.getElementById(decodeURI(id));
        if (elm) {
          observer.unobserve(elm);
        }
      });
    };
  }, []);

  return activeHash;
};
