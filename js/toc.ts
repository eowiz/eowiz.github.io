const headingLevel = 4;
const headingsSelector = [...Array(headingLevel + 1).keys()]
                           .filter(level => level > 1)
                           .map(level => `h${level}`)
                           .join(",");
const $headings = [...document.querySelectorAll(headingsSelector)];
const $headingMap = new Map($headings.map($heading => [$heading.id, $heading ]));

const $toc = [...document.querySelectorAll(".toc a")];

const activate = (index) => {
  if ($toc[index].classList.contains("active")) {
    $toc[index].classList.remove("active");
    $toc[Math.max(0, index-1)].classList.add("active");
  } else {
    $toc.forEach($a => $a.classList.remove("active"));
    $toc[index].classList.add("active");
  }
};

$toc.forEach(($a) => {
  $a.addEventListener('click', (e) => {
    e.preventDefault();
    const $heading = $headingMap.get($a.hash.replace("#", ""));
    $heading.scrollIntoView({ behavior: "smooth" });
  });
});

const observer = new IntersectionObserver((entries) => {
  let activeIndex = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $toc.forEach(($a, index) => {
        if ($a.hash == `#${entry.target.id}`) {
          activeIndex = index;
        }
      });

      activate(activeIndex);
    }
  });
}, { rootMargin: "-1% 0px -99% 0px" });

$headings.forEach(($heading) => {
  observer.observe($heading);
});


