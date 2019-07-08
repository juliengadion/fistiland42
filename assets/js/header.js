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

/* modal */


var modal = document.getElementById('modal');
var closeBtn = document.getElementById("closeBtn");
var openBtn = document.getElementById("btnLogin");
var openMob = document.getElementById("openMob")

openMob.onclick = function () {
  modal.style.display = "block";	
}

openBtn.onclick = function () {
  modal.style.display = "block";	
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}