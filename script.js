document.addEventListener('DOMContentLoaded', () => {
  // Nav active state on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));

  // Card click logging
  document.querySelectorAll('.work-card, .exhibition-card, .featured-work').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3, h4')?.textContent || '';
      console.log(`Card clicked: ${title} — detail page coming soon`);
    });
  });

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector('.hero-scroll');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
