const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
