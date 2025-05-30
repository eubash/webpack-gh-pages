function render(hash?: string) {
  const href = window.location.href;

  document.querySelector("#app")!.textContent = hash
      ? href.includes("#")
          ? href.replace(/#.*/, hash)
          : href + hash
      : window.location.href;
}

if (PRODUCTION) {
  document.querySelectorAll("a").forEach((link) => {
    link.href = PREFIX + link.pathname;
  });
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    ev.preventDefault();

    const link = (<HTMLAnchorElement>ev.target).href;

    window.history.pushState({}, '', link);

    render();
  }
});

// render();
