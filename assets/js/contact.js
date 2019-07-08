window.onscroll = function() {stickyNav()};


var navbar = document.getElementById("navbar");
var drop = document.getElementById("dropdownMenu")

var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-fixed")
    dropdownMenu.classList.add("dropdown-fixed")
  } else {
    navbar.classList.remove("navbar-fixed");
    dropdownMenu.classList.remove("dropdown-fixed")
  }
} 