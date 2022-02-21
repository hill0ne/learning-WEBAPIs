let screen = document.querySelector(".screen-value");
let outer = document.querySelector(".outer-value");
let inner = document.querySelector(".inner-value");

let item = document.querySelectorAll(".view-value");
console.log(item);
item.forEach(
  (item) =>
    (item.style.cssText =
      "position: relative; width: 10em; margin-top: 0.2em; font-size: 1.2em; background-color: #9999dd;")
);

let calculate = function () {
  screen.innerHTML = `window.screen.width: ${window.screen.width}, window.screen.height: ${window.screen.height}`;
  outer.innerHTML = `window.outerWith: ${window.outerWidth}, window.outerHiehgt: ${window.outerHeight}`;
  inner.innerHTML = `window.innerWith: ${window.innerWidth}, window.innerHiehgt: ${window.innerHeight}`;
};

window.addEventListener("resize", calculate);
