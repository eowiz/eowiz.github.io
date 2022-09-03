import React, { useEffect } from "react";

const COMMENTS_ID = "comments-container";

const Comments = () => {
  const commentsContainer = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (commentsContainer.current?.firstChild) {
      commentsContainer.current.removeChild(
        commentsContainer.current.firstChild
      );
    }

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    // Replace with the repo on which you configured Utterances
    script.setAttribute("repo", "eowiz/eowiz.github.io");
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("label", ":speech_balloon: comments");
    script.async = true;

    commentsContainer.current?.appendChild(script);
  }, []);

  return <div id={COMMENTS_ID} ref={commentsContainer} />;
};

export default Comments;
