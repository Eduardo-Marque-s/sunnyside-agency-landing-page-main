const hamburger = document.getElementById("icon-hamburger");
const mobile = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function () {
  if (mobile.style.display === "none") {
    mobile.style.display = "Block";
  } else {
    mobile.style.display = "none";
  }
});
