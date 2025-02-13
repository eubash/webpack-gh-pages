function render(hash?: string) {
  const href = window.location.href;

  document.querySelector("#app")!.textContent = hash
      ? href.includes("#")
          ? href.replace(/#.*/, hash)
          : href + hash
      : window.location.href;
}

if (import.meta.env.MODE === "production") {
  document.querySelectorAll("a").forEach((link) => {
    link.href = import.meta.env.VITE_PREFIX + link.pathname;
  });
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    ev.preventDefault();
    const href = (ev.target as HTMLAnchorElement).href;
    window.history.pushState({}, "", href);
    render();
    // const hash = (ev.target as HTMLAnchorElement).hash;
    //
    // render(hash);
  }
});

render();
