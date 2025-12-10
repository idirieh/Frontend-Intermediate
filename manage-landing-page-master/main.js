// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.querySelector('.mobile-close');

function openMobileNav() {
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', openMobileNav);
}
if (mobileClose) {
  mobileClose.addEventListener('click', closeMobileNav);
}

// Close when a link in the mobile menu is clicked
document.querySelectorAll('.mobile-navlist a').forEach(a => {
  a.addEventListener('click', closeMobileNav);
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    closeMobileNav();
  }
});
