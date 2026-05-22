/**
 * platformengineering.js
 * JavaScript for Platform Engineering page
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
    if (typeof window.initializeNavigation === 'function') {
      window.initializeNavigation();
    }
    
    const currentLang = localStorage.getItem('preferredLanguage') || '~EN';
    if (typeof translateNavigation === 'function') {
      translateNavigation(currentLang);
    }
    
    // Update language button
    if (window.ShuroqI18n && typeof window.ShuroqI18n.updateLanguageButton === 'function') {
      window.ShuroqI18n.updateLanguageButton(currentLang);
    }
  };

  // ===================================
  // PAGE INITIALIZATION
  // ===================================
  
  // Initialize page when DOM is ready
  const initializePage = () => {
    // Load navigation
    fetchNavigation();
    
    // Add page-specific interactions
    addPageInteractions();
    
    // Initialize scroll animations
    initializeScrollAnimations();
  };

  // ===================================
  // PAGE-SPECIFIC FUNCTIONALITY
  // ===================================
  
  const addPageInteractions = () => {
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Button click animations
    const buttons = document.querySelectorAll('.service-btn, .cta-section button');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  };

  // ===================================
  // SCROLL ANIMATIONS
  // ===================================
  
  const initializeScrollAnimations = () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.service-card, .highlight, .benefit-card, .sub-service'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Scroll progress indicator
    const scrollProgress = document.querySelector('.platformengineering-scroll-progress');
    if (scrollProgress) {
      window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
      });
    }
  };

  // ===================================
  // INITIALIZATION
  // ===================================
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    initializePage();
  }
  
})();
