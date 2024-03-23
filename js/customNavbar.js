document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navItems = document.querySelector('.nav-items');
  const navLinks = document.querySelectorAll('.nav-item');

  // Function to toggle nav menu on hamburger icon click
  hamburgerIcon.addEventListener('click', function () {
    navItems.style.right = navItems.style.right === '-100%' ? '0' : '-100%';
  });

  // Function to close navbar on scroll and on click of any nav item
  document.addEventListener('scroll', function () {
    navItems.style.right = '-100%';
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navItems.style.right = '-100%';
    });
  });
});
