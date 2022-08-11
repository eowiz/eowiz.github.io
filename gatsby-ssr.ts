exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "ja",
    itemScope: true,
    itemType: "http://schema.org/WebPage",
  });
};
