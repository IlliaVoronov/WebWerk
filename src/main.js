import './style.css'
import { setupCounter } from './counter.js'

// setupCounter(document.querySelector('#counter'));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Displaying/Hiding burger menu
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('hidden')) return;

  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !document.querySelector('#menu').contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }

});





// Add active class to navigation links
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-600');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-blue-600');
    }
  });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
});

