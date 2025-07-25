// Toggle class active
const navbarNav = document.querySelector(" .navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hanmburger = document.querySelector("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hanmburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
