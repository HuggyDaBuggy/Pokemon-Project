document.addEventListener(
  "contextmenu",
  function (rclick) {
    rclick.preventDefault();
  },
  false
);
document.addEventListener("contextmenu", contextMenu);
window.onclick = function () {
  document.getElementById("context-menu").style.display = "none";
};
window.onscroll = function () {
  document.getElementById("context-menu").style.display = "none";
};
function contextMenu(event) {
  document.getElementById("context-menu").style.left = event.clientX - 17 + "px";
  document.getElementById("context-menu").style.top = event.clientY - 17 + "px";
  document.getElementById("context-menu").style.display = "block";
}