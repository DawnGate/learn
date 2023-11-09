import("./index.css");

import gsap from "gsap";

import $ from "jquery";

// circle mouse
const circleMouseSvg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
const circleInner = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
circleInner.classList = "circle";
circleInner.setAttribute("cx", "20");
circleInner.setAttribute("cy", "20");
circleInner.setAttribute("r", "10");
circleMouseSvg.appendChild(circleInner);
circleMouseSvg.classList = "mouse-cursor";
circleMouseSvg.setAttribute("width", "40");
circleMouseSvg.setAttribute("height", "40");
circleMouseSvg.setAttribute("viewBox", "0 0 40 40");

document.querySelector("#app").appendChild(circleMouseSvg);

// grid items

const gridItems = Array.from(
  document.querySelectorAll(".image_grid .grid_item")
);

console.log(gridItems);

var map = function map(x, a, b, c, d) {
  return ((x - a) * (d - c)) / (b - a) + c;
};

var lerp = function lerp(a, b, n) {
  return (1 - n) * a + n * b;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const xMax = getRandomArbitrary(15, 60);
const yMax = getRandomArbitrary(30, 90);
const rMax = getRandomArbitrary(-15, 15);

console.log(xMax, yMax, rMax);

function handleMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;

  const w = window.innerWidth / 2;
  const h = window.innerHeight / 2;

  console.log(x, y, w, h);

  const translateX = lerp(0, map(x, 0, w, -xMax, xMax), 0.2);
  const translateY = lerp(0, map(y, 0, h, -yMax, yMax), 0.2);
  const rotate = lerp(0, map(x, 0, w, -rMax, rMax), 0.2);

  // console.log(translateX, translateY, rotate);

  gridItems.map((item) => {
    gsap.to(item, {
      x: translateX,
      y: translateY,
      rotate,
      duration: 0.5,
    });
  });

  gsap.to(circleMouseSvg, {
    x,
    y,
    yPercent: -50,
    xPercent: -50,
    duration: 0.2,
    opacity: 1,
  });
}
document.onmousemove = handleMouseMove;
