import("./index.css");

import gsap from "gsap";

import firstImage from "./public/images/1.jpg";

const hello = "hello";
console.log("hello");

const boxDiv = document.createElement("div");
boxDiv.style =
  "width: 40px; height: 40px; border-radius: 4px; background-color: red;";
document.querySelector(".app").appendChild(boxDiv);

gsap.from(boxDiv, { x: 200, rotate: 180, duration: 2, yPercent: 50 });

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

document.querySelector(".app").appendChild(circleMouseSvg);

function handleMouseMove(event) {
  gsap.to(circleMouseSvg, {
    x: event.clientX,
    y: event.clientY,
    yPercent: -50,
    xPercent: -50,
    duration: 0.2,
    opacity: 1,
  });
}
document.onmousemove = handleMouseMove;
