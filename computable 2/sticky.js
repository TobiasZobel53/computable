window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}