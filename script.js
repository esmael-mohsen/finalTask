document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleBtn = document.querySelector('.nav__toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
        }
      }
    });
  });

  // Mobile menu toggle
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  // Active link highlighting on scroll
  const sections = [...document.querySelectorAll('section[id]')];
  const setActive = () => {
    const scrollPos = window.scrollY + 90; // account for sticky nav
    let currentId = sections[0]?.id;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    }
    navLinks.forEach((l) => {
      const isActive = l.getAttribute('href') === `#${currentId}`;
      l.style.opacity = isActive ? '1' : '';
      l.style.textDecoration = isActive ? 'underline' : '';
      l.style.textUnderlineOffset = isActive ? '6px' : '';
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // IntersectionObserver reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Footer links enhancements: open Gmail compose with fallback
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      // Try opening Gmail compose in a new tab; if popup blocked, fallback to mailto
      const gmailUrl = emailLink.getAttribute('href');
      const mailto = emailLink.getAttribute('data-mailto') || emailLink.textContent.trim();
      const win = window.open(gmailUrl, '_blank', 'noopener');
      if (!win) {
        // Popup blocked, use mailto
        window.location.href = mailto.startsWith('mailto:') ? mailto : `mailto:${mailto}`;
      }
      e.preventDefault();
    });
  }
});
