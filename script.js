const targets = document.querySelectorAll('.fade-section:not(.is-visible)');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationDelay = `${idx * 60}ms`;
    entry.target.classList.add('is-visible');
    io.unobserve(entry.target);
  });
}, { threshold: 0.2 });

targets.forEach((el) => io.observe(el));
