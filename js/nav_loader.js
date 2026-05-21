// Shared navigation loader extracted from repeated page scripts.
// Keeps the same fetch path, initialization delay, and error logging behavior.
window.ShuroqNav = window.ShuroqNav || {};

window.ShuroqNav.loadNavigation = async function loadNavigation(options) {
  const settings = Object.assign({
    path: '../nav.html',
    containerId: 'nav-container',
    delay: 300,
    applyDefaultLanguage: true
  }, options || {});

  try {
    const response = await fetch(settings.path);
    if (response.ok) {
      const navHTML = await response.text();
      const navContainer = document.getElementById(settings.containerId);
      if (navContainer) {
        navContainer.innerHTML = navHTML;

        setTimeout(() => {
          if (typeof initializeNavigation === 'function') {
            initializeNavigation();
          }
          if (settings.applyDefaultLanguage && typeof changeLanguage === 'function') {
            changeLanguage(window.ShuroqI18n.getSavedLanguage());
          }
        }, settings.delay);
      }
    } else {
      console.error('Failed to load navigation');
    }
  } catch (error) {
    console.error('Error loading navigation:', error);
  }
};
