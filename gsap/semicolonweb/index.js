import("./index.css");

import firstImage from "./public/images/1.jpg";

const hello = "hello";
console.log("hello");

const imgTest = document.createElement("img");
imgTest.src = firstImage;
document.querySelector(".app").appendChild(imgTest);
