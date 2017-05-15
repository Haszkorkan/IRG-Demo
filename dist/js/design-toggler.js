// Construct design toggler checkbox if .designs element is present
var elements = document.getElementsByClassName('designs');
var designsContainer = elements[0];
if (designsContainer != null) {
  var checkbox = document.createElement("div");
  checkbox.className = "design-toggler";
  var checked = (sessionStorage.getItem('showDesigns') != undefined) ? " checked" : "";
  checkbox.innerHTML = '<input type="checkbox" id="toggler" onclick="toggleDesigns();"' + checked +' title="Toggle design overlay">';
  designsContainer.parentNode.insertBefore(checkbox, designsContainer.nextSibling);
}
toggleDesigns();

// Apply or not apply designs
function toggleDesigns() {
  if (document.getElementById('toggler').checked) {
    document.body.classList.add("show-designs");
    sessionStorage.setItem('showDesigns', true);
  } else {
    document.body.classList.remove("show-designs");
    sessionStorage.removeItem('showDesigns', false);
  }
}
// This simple script is writen in pure Javascript to avoid use of jQuery.
