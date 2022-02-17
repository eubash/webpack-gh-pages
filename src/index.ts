function render() {
  document.querySelector("#app").innerHTML = window.location.href;
}

document.body.addEventListener("click", (ev) => { 
 if ((ev.target as HTMLElement).matches("a")) {
   ev.preventDefault();
   const url = (ev.target as HTMLElement).getAttribute("href");
   if (window.history) {
     window.history.pushState({}, "", url);
   } else {
     throw new Error("Sorry, youer browser not support history api");
   }
        render(); 
 } 
});

render();
