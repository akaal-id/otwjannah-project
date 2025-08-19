// Debounce utility
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY === 0) {
    navbar.classList.remove('solid');
  } else {
    navbar.classList.add('solid');
  }
}

window.addEventListener('scroll', debounce(handleNavbar, 10));
window.addEventListener('DOMContentLoaded', handleNavbar);
