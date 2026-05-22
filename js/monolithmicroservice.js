/**
 * monolithmicroservice.js
 * JavaScript for Monolith Microservice page
 * Includes: Navigation loading, page-specific functionality
 */

(() => {
  // ===================================
  // PAGE INITIALIZATION
  // ===================================
  
  // Initialize page when DOM is ready
  const initPage = () => {
    // Load navigation
    window.ShuroqNav.loadNavigation();
    
    // Add any page-specific functionality here
    console.log('Monolith Microservice page initialized');
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
