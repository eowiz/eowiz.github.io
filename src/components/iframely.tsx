import { Script } from "gatsby";
import React, { useEffect } from "react";

interface Window {
  iframely: { load?: () => void };
}
declare let window: Window;

const Iframely = () => {
  useEffect(() => {
    if (window && window.iframely && window.iframely.load) {
      console.log("load iframely");
      window.iframely.load();
    }
  }, []);

  return <Script async type="text/javascript" src="//cdn.iframe.ly/embed.js" />;
};

export default Iframely;
