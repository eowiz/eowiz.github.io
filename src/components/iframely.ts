import React, { useEffect } from "react";

interface Window {
  iframely: { load?: () => void };
}
declare let window: Window;

const Iframely = () => {
  useEffect(() => {
    if (window && window.iframely && window.iframely.load) {
      window.iframely.load();
    }
  }, []);

  return null;
};

export default Iframely;
