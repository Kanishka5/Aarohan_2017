var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("wrapper-p");
var popup = document.getElementById("popup");
var button2 = document.getElementById("button2");
// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
button2.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}
