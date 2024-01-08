function handleClickBtn() {
  alert("click");
}

window.addEventListener("load", function () {
  document
    .getElementById("about-btn")
    .addEventListener("click", handleClickBtn);
});
