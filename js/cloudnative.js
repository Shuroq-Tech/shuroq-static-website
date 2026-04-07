/**
 * cloudnative.js
 * JavaScript for Cloud Native Product Engineering page
 * Includes: Navigation loading, page-specific functionality
 */

(() => {
  // ===================================
  // NAVIGATION LOADING
  // ===================================
  
  // Fetch navigation from nav.html
  const fetchNavigation = async () => {
    try {
      const response = await fetch('../nav.html');
      if (response.ok) {
        const navHTML = await response.text();
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
          navContainer.innerHTML = navHTML;
          initializeNavigation();
        }
      }
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  };

  // Initialize navigation after loading
  const initializeNavigation = () => {
    // Re-initialize navigation functionality
    if (typeof window.initializeNavigation === 'function') {
      window.initializeNavigation();
    }
    
    // Apply current language to navigation
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    if (typeof translateNavigation === 'function') {
      translateNavigation(currentLang);
    }
    
    // Update language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = currentLang === 'ar' ? '🌐~AR' : '🌐~EN';
    }
  };

  // ===================================
  // PAGE INITIALIZATION
  // ===================================
  
  // Initialize page when DOM is ready
  const initializePage = () => {
    // Load navigation
    fetchNavigation();
    
    // Add page-specific functionality
    addPageInteractions();
  };

  // Add page-specific interactions
  const addPageInteractions = () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Service cards hover effect
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Benefit cards animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe benefit cards
    document.querySelectorAll('.benefit-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    // Tech items hover effect
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      });
    });
  };

  // ===================================
  // DOM READY INITIALIZATION
  // ===================================
  
  // Initialize when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    initializePage();
  }
})();
