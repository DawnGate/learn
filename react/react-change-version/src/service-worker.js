self.addEventListener("install", (event) => {
  console.log("this is sw install ");
});

self.addEventListener("activate", (event) => {
  console.log("this is sw activate");
});
