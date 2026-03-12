/**
 * progressivedelivery.js
 * JavaScript for Progressive Delivery page
 * Includes: Navigation loading, page-specific functionality
 */

(() => {
  // ===================================
  // NAVIGATION LOADING
  // ===================================
  
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

  const initializeNavigation = () => {
    if (typeof window.initializeNavigation === 'function') {
      window.initializeNavigation();
    }
    
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    if (typeof translateNavigation === 'function') {
      translateNavigation(currentLang);
    }
    
    // Update language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = currentLang === 'ar' ? '🌐ar' : '🌐en';
    }
  };

  // ===================================
  // PAGE INITIALIZATION
  // ===================================
  
  const initializePage = () => {
    fetchNavigation();
    addPageInteractions();
  };

  const addPageInteractions = () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Service cards hover
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Benefit cards animation
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.benefit-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  };

  // ===================================
  // DOM READY INITIALIZATION
  // ===================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    initializePage();
  }
})();
