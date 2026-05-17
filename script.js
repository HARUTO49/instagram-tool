const sections = document.querySelectorAll('.fade-section:not(.is-visible)');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = `${index * 80}ms`;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
