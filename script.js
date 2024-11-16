// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
//   // Dark Mode Toggle
//   const toggleButton = document.getElementById('darkModeToggle');
//   toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
//     toggleButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
//   });
  
  // Card Hover Animation
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('transform', 'scale-105');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('transform', 'scale-105');
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Sidebar Overlay Toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburger = document.getElementById('hamburger');
  
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  