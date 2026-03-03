/**
 * faas.js
 * JavaScript for FaaS page
 * Includes: Navigation loading, page-specific functionality
 */

(() => {
  // ===================================
  // NAVIGATION LOADING
  // ===================================
  
  // Fetch navigation from nav.html
  const fetchNavigation = async () => {
    try {
      const response = await fetch('nav.html');
      if (response.ok) {
        const navHTML = await response.text();
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
          navContainer.innerHTML = navHTML;
          
          // Initialize navigation after nav is loaded
          setTimeout(() => {
            if (typeof initializeNavigation === 'function') {
              initializeNavigation();
            }
            if (typeof changeLanguage === 'function') {
              changeLanguage('en');
            }
          }, 300);
        }
      } else {
        console.error('Failed to load navigation');
      }
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  };

  // ===================================
  // PAGE INITIALIZATION
  // ===================================
  
  // Initialize page when DOM is ready
  const initPage = () => {
    // Load navigation
    fetchNavigation();
    
    // Add any page-specific functionality here
    console.log('FaaS page initialized');
  };

  // ===================================
  // DOM READY HANDLER
  // ===================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }
})();
