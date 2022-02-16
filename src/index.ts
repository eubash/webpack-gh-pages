function render() {
  document.querySelector("#app").innerHTML = window.location.href; //рендерим ссылку из поискового запроса
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    ev.preventDefault();
    const url = (ev.target as HTMLElement).getAttribute("href");
    if (window.history) {
        window.history.pushState({}, url, url);
    } else {
      throw new Error("Sorry history api doesn't supported");
    }
    render();
  }
});

render();
