export default ({ toc, comp }) => {
  if (toc.length === 0) {
    return <></>;
  }

  return (
    <>
      {toc.map((item) => (
        <li>
          <a href={item.url} className="border-l-2 border-slate-300 pl-2">
            {item.text}
          </a>
          <ul
            dangerouslySetInnerHTML={{
              __html: comp.toc_sub({ toc: item.children }),
            }}
          ></ul>
        </li>
      ))}
    </>
  );
};
