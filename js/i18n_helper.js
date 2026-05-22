// Shared i18n helper extracted from repeated page language files.
// Backup note: original page-specific changeLanguage wrappers keep their public name
// and any page-specific extras remain in the original files.
window.ShuroqI18n = window.ShuroqI18n || {};

window.ShuroqI18n.getSavedLanguage = function getSavedLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en';
};

window.ShuroqI18n.applyLanguage = function applyLanguage(lang, translations, options) {
  const settings = Object.assign({
    updateNavigation: false,
    skipMissing: false,
    updateLanguageButton: true
  }, options || {});

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const value = translations[lang] ? translations[lang][key] : undefined;

    if (value === undefined) {
      return;
    }

    const icon = element.querySelector('i.fas, i.fab, i.fa, i.far, i.fal');
    if (icon) {
      const iconHTML = icon.outerHTML;
      element.innerHTML = iconHTML + ' ' + value;
    } else {
      element.textContent = value;
    }
  });

  if (settings.updateNavigation && typeof translateNavigation === 'function') {
    translateNavigation(lang);
  }

  if (lang === 'ar') {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  localStorage.setItem('preferredLanguage', lang);

  if (settings.updateLanguageButton) {
    window.ShuroqI18n.updateLanguageButton(lang);
  }

  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.style.display = "none";
  }
};

window.ShuroqI18n.updateLanguageButton = function updateLanguageButton(lang) {
  const label = lang === 'ar' ? 'AR' : 'EN';
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.innerHTML = `🌐 ~ ${label} <i class="fas fa-chevron-down"></i>`;
  }
};
