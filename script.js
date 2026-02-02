// Minimal interactivity: mobile nav toggle + contact form stub
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  // Update year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (stub)
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Replace with real form handling (Netlify, Formspree, serverless function, etc.)
      msg.textContent = 'Thanks — your message was captured (demo). Replace this handler with real submission.';
      form.reset();
    });
  }
});
