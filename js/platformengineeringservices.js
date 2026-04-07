/**
 * platformengineeringservices.js
 * JavaScript for Platform Engineering Services page
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
    
    // Add page-specific interactions
    addPageInteractions();
    
    // Initialize scroll animations
    initializeScrollAnimations();
  };

  // ===================================
  // PAGE-SPECIFIC FUNCTIONALITY
  // ===================================
  
  const addPageInteractions = () => {
    // Service section hover effects
    const serviceSections = document.querySelectorAll('.service-section');
    serviceSections.forEach(section => {
      section.addEventListener('mouseenter', function() {
        this.classList.add('section-hover');
      });
      
      section.addEventListener('mouseleave', function() {
        this.classList.remove('section-hover');
      });
    });

    // Benefit card animations
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate-on-scroll');
    });

    // Tech tag interactions
    const techTags = document.querySelectorAll('.tech-tags span');
    techTags.forEach(tag => {
      tag.addEventListener('click', function() {
        // Add pulse animation on click
        this.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
          this.style.animation = '';
        }, 300);
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

    // CTA button interactions
    const ctaButton = document.querySelector('.cta-section button');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
      });
      
      ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
    }

    // Section header animations
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      header.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.section-icon i');
        if (icon) {
          icon.style.transform = 'scale(1.1) rotate(5deg)';
          icon.style.transition = 'transform 0.3s ease';
        }
      });
      
      header.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.section-icon i');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }
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
      '.service-section, .benefit-card, .key-features, .tech-stack, .section-header'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.platformengineeringservices-hero');
    if (heroSection) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
          heroContent.style.opacity = 1 - (scrolled * 0.001);
        }
      });
    }

    // Progress indicator for service sections
    const serviceSections = document.querySelectorAll('.service-section');
    const createProgressIndicator = () => {
      const progressIndicator = document.createElement('div');
      progressIndicator.className = 'service-progress-indicator';
      document.body.appendChild(progressIndicator);
      
      window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollHeight) * 100;
        progressIndicator.style.width = `${scrollProgress}%`;
      });
    };
    
    createProgressIndicator();
  };

  // ===================================
  // UTILITY FUNCTIONS
  // ===================================
  
  // Add CSS animation keyframes dynamically
  const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
      }
      
      .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .section-hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
      }
      
      .service-progress-indicator {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #06b6d4);
        z-index: 9999;
        transition: width 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  };

  // ===================================
  // INITIALIZATION
  // ===================================
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addAnimationStyles();
      initializePage();
    });
  } else {
    addAnimationStyles();
    initializePage();
  }
  
})();
