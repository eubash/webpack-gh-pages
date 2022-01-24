function render() {
  document.querySelector("#app").innerHTML = window.location.href;
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    render();
  }
});

render();
