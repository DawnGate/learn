import("./index.css");

import gsap from "gsap";

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

const map = function (x, a, b, c, d) {
  return ((x - a) * (d - c)) / (b - a) + c;
};

const lerp = function (a, b, n) {
  return (1 - n) * a + n * b;
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// grid items

const gridItems = Array.from(
  document.querySelectorAll(".image_grid .grid_item")
).map((item) => ({
  target: item,
  randomData: {
    xRand: getRandomArbitrary(15, 60),
    yRand: getRandomArbitrary(30, 90),
    rRand: getRandomArbitrary(-15, 15),
  },
}));

window.onload = function () {
  gsap.fromTo(
    ".grid_item",
    {
      opacity: 0,
      scale: 0.7,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: {
        amount: 1,
        grid: "auto",
        from: "center",
      },
    }
  );
};

function handleMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;

  const w = window.innerWidth;
  const h = window.innerHeight;

  gridItems.map((item) => {
    const { xRand, yRand, rRand } = item.randomData;
    const translateX = map(x, 0, w, -xRand, xRand);
    const translateY = map(y, 0, h, -yRand, yRand);
    const rotate = map(x, 0, w, -rRand, rRand);
    gsap.to(item.target, {
      x: translateX,
      y: translateY,
      rotate,
      duration: 1,
      opacity: 0.8,
      ease: "power1.out",
      stagger: {
        amount: 0.6,
      },
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
