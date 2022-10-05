export default ({ title, siteMetadata, children, comp }) => (
  <html lang="ja">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content="" />
      <link rel="stylesheet" href="/windi.css" />
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="/post.css" />
      <script async src="https://cdn.iframe.ly/embed.js"></script>
    </head>
    <body>
      <div className="flex flex-col h-screen justify-between">
        <div dangerouslySetInnerHTML={{ __html: comp.header() }}></div>
        {children}
        <div dangerouslySetInnerHTML={{ __html: comp.footer() }}></div>
      </div>
    </body>
  </html>
);
