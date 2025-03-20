// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  initNavigation();

  // Add scroll animations
  initScrollAnimations();
});

// Initialize mobile navigation
function initNavigation() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });
  }

  // Set active navigation link
  const currentPage = getCurrentPage();
  const navItems = document.querySelectorAll('.nav-links a');

  navItems.forEach(item => {
      item.classList.remove('active');
      const itemPage = item.getAttribute('href').split('.')[0];
      if (itemPage === currentPage || (currentPage === '' && itemPage === 'index')) {
          item.classList.add('active');
      }
  });
}

// Get current page from URL
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop().split('.')[0];
  return page || 'index';
}

// Initialize scroll animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => {
      observer.observe(element);
  });
}
