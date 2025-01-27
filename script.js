function onLoad() {
  const html = "<div id='menu' class='menu'>" +
               "  <a href='' class='closebutton' onclick='closeMenu()'>&times;</a>" +
               "  <a href='default.html'>Start</a>" +
               "  <a href='persons.html'>Personer</a>" +
               "  <a href='places.html'>Platser</a>" +
               "  <a href='occupations.html'>Yrken</a>" +
               "  <a href='photos1.html'>Bilder</a>" +
               "</div>" +
               "<div class='header'>" +
               "  <div class='header_menu' onclick='openMenu()'>&#9776;</div>" +
               "  <div class='header_title'>sara</div>" +
               "</div>" +
               "<div id='popup_window' class='popup_window'>" +
               "  <div class='close_button' onclick='ClosePhoto()'></div>" +
               "  <img id='popup_photo' class='photo' onclick='ClosePhoto()' src='' alt=''>" +
               "</div>";

  document.getElementById("header").innerHTML = html;

  const root = document.getElementById("root");
  if (root != null) {
    const rootRect = root.getBoundingClientRect();
    const scrollAreaRect = document.getElementById("scroll_area").getBoundingClientRect();
    const y = -scrollAreaRect.top + rootRect.top - (rootRect.height/3);
    scroll_area.scroll (0, y);
  }
}

function openMenu() {
  document.getElementById("menu").style.width = "11em";
  document.getElementById("menu").style.visibility = "visible";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.visibility = "hidden";
}

function onClickBox(url) {
  location.href = url;
}

function onClickPhoto(element) {
  document.getElementById("popup_photo").src = element.src;
  document.getElementById("popup_window").style.visibility = "visible";
}

function ClosePhoto() {
  document.getElementById("popup_window").style.visibility = "hidden";
}
