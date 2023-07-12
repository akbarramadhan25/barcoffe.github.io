

// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const menuButton = document.querySelector('#menu');

// When menu is clicked
menuButton.addEventListener('click', function() {
  navbarNav.classList.toggle('active');
});

// Close the sidebar when clicking outside
document.addEventListener('click', function(event) {
  const targetElement = event.target;

  if (!targetElement.closest('.navbar') && !targetElement.closest('.navbar-nav')) {
    navbarNav.classList.remove('active');
  }
});
