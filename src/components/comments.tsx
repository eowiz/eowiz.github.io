import React, { useEffect } from "react";

const COMMENTS_ID = "comments-container";

const Comments = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    // Replace with the repo on which you configured Utterances
    script.setAttribute("repo", "eowiz/eowiz.github.io");
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("label", ":speech_balloon: comments");
    script.async = true;
    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);
  }, []);

  return <div id={COMMENTS_ID} />;
};

export default Comments;
