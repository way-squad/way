// Optional: If you want to add a class to the navbar when the user starts scrolling
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  