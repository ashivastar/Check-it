const legacySection = document.getElementById('legacy');
const header = legacySection.querySelector('header');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('animate-header');
      observer.unobserve(legacySection);
    }
  });
});

observer.observe(legacySection);