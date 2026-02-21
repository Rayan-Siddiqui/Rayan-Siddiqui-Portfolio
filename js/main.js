/*
Name: Rayan Siddiqui
Student ID: 953391424
Course: IST 256
Assignment: DOM Portfolio Enhancement
Submission Date: 02/07/2025
Portfolio URL: https://rayan-siddiqui.github.io/Rayan-Siddiqui-Portfolio/
*/

document.addEventListener('DOMContentLoaded', () => {
  // ----- Contact form toast (centered) -----
  const contactForm = document.getElementById('contactForm');
  const toastEl = document.getElementById('liveToast');
  let contactToast;

  if (toastEl) {
    contactToast = new bootstrap.Toast(toastEl, { autohide: true, delay: 3000 });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Demo: prevent actual submission
      if (contactForm.checkValidity()) {
        if (contactToast) contactToast.show();
        contactForm.reset();
        // reset character counter after form send (handled below)
        const charCount = document.getElementById('charCount');
        if (charCount) charCount.textContent = `0 / ${document.getElementById('message').getAttribute('maxlength') || 300}`;
      } else {
        contactForm.reportValidity();
      }
    });
  }

  // ----- Character counter for textarea -----
  const messageEl = document.getElementById('message');
  const charCountEl = document.getElementById('charCount');
  if (messageEl && charCountEl) {
    const max = messageEl.getAttribute('maxlength') || 300;
    // initialize
    charCountEl.textContent = `${messageEl.value.length} / ${max}`;
    messageEl.addEventListener('input', () => {
      charCountEl.textContent = `${messageEl.value.length} / ${max}`;
    });
  }

  // ----- Dark / Light theme toggle (persist in localStorage) -----
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      if (themeToggle) { themeToggle.textContent = 'Light'; themeToggle.setAttribute('aria-pressed', 'true'); }
    } else {
      document.documentElement.classList.remove('dark-theme');
      if (themeToggle) { themeToggle.textContent = 'Dark'; themeToggle.setAttribute('aria-pressed', 'false'); }
    }
  }
//dsad//
  // restore saved theme or respect system preference
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-theme');
      const newTheme = isDark ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // ----- Scroll-to-top button -----
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    // show/hide based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});