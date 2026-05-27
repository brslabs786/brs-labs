// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Listen for scroll
  window.addEventListener('scroll', revealOnScroll);

  // Form Submission Mock
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      
      btn.textContent = 'Sending...';
      btn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(45deg, #00ff88, #00b8ff)';
        form.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }
});
