var url = window.location.href;
var urlsplit = url.split("?");
var pokemon = urlsplit[1];
if (pokemon == null) {
  window.location.replace("index.html");
}
