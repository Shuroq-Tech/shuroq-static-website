// Navigation Translations
const navTranslations = {
  en: {
    nav_company: "Company",
    nav_aboutus: "About Us",
    nav_careers: "Careers",
    nav_shuroqway: "The Shuroq Way",
    nav_contact: "Contact Us",
    nav_services: "Services",
    nav_allservices: "All Services",
    nav_cuttingedge: "Cutting Edge",
    nav_assurance: "Assurance",
    nav_automate: "Automate",
    nav_vision: "Vision",
    nav_industries: "Industries",
    nav_telecom: "Telecom",
    nav_automotive: "Automotive",
    nav_bfsi: "BFSI",
    nav_healthcare: "Healthcare",
    nav_finance: "Finance",
    nav_productengineering: "Product Engineering",
    nav_cloudnative: "Cloud Native Product Development",
    nav_faas: "FaaS",
    nav_monolith: "Monolith Microservice",
    nav_platformengineering: "Platform Engineering",
    nav_platformservices: "Platform Engineering Services",
    nav_productservices: "Product Engineering Services",
    nav_backstage: "Backstage Consulting",
    nav_cicd: "CI/CD & Dev Experience",
    nav_progressive: "Progressive Delivery",
    nav_sre: "Site Reliability Engineering",
    nav_sreconsultancy: "SRE Consultancy",
    nav_servicemesh: "Service Mesh Consulting",
    nav_linkerd: "Linkerd Consulting",
    nav_terraform: "Terraform Consulting",
    nav_observability: "Observability & DevSecOps",
    nav_devsecops: "DevSecOps Consult",
    nav_observabilityadoption: "Observability and Adoption",
    nav_grafana: "Grafana Consulting",
    nav_prometheus: "Prometheus Consulting",
    nav_solutions: "Solutions",
    nav_fission: "AI Marketplace",
    nav_botkube: "Botkube Enterprise",
    nav_managed: "Managed Services for Kubernetes",
    nav_resources: "Resources",
    nav_blogs: "Blogs",
    nav_events: "Events",
    nav_skillrubrics: "Skill Rubrics"
  },
  ar: {
    nav_company: "الشركة",
    nav_aboutus: "معلومات عنا",
    nav_careers: "وظائف",
    nav_shuroqway: "طريق شروق",
    nav_contact: "اتصل بنا",
    nav_services: "الخدمات",
    nav_allservices: "جميع الخدمات",
    nav_cuttingedge: "الطليعة",
    nav_assurance: "التأكيد",
    nav_automate: "الأتمتة",
    nav_vision: "الرؤية",
    nav_industries: "الصناعات",
    nav_telecom: "الاتصالات",
    nav_automotive: "السيارات",
    nav_bfsi: "الخدمات المالية المصرفية",
    nav_healthcare: "الرعاية الصحية",
    nav_finance: "التمويل",
    nav_productengineering: "هندسة المنتجات",
    nav_cloudnative: "تطوير المنتجات السحابية الأصلية",
    nav_faas: "الخدمة كخدمة",
    nav_monolith: "الوحيد المصغر",
    nav_platformengineering: "هندسة المنصات",
    nav_platformservices: "خدمات هندسة المنصات",
    nav_productservices: "خدمات هندسة المنتجات",
    nav_backstage: "استشارات باكستيج",
    nav_cicd: "التكامل المستمر/التسليم المستمر وتجربة المطور",
    nav_progressive: "التسليم التدريجي",
    nav_sre: "هندسة موثوقية الموقع",
    nav_sreconsultancy: "استشارات هندسة موثوقية الموقع",
    nav_servicemesh: "استشارات شبكة الخدمات",
    nav_linkerd: "استشارات لينكرد",
    nav_terraform: "استشارات تيرافورم",
    nav_observability: "إمكانية المراقبة وأمان التطوير",
    nav_devsecops: "استشارات أمان التطوير",
    nav_observabilityadoption: "إمكانية المراقبة والتبني",
    nav_grafana: "استشارات جرافانا",
    nav_prometheus: "استشارات بروميثيوس",
    nav_solutions: "الحلول",
    nav_fission: "سوق الذكاء الاصطناعي",
    nav_botkube: "بوتكيوب للمؤسسات",
    nav_managed: "الخدمات المدارة لكوبرنيتيس",
    nav_resources: "الموارد",
    nav_blogs: "المدونات",
    nav_events: "الفعاليات",
    nav_skillrubrics: "معايير المهارات"
  }
};

// Navigation Functionality
(() => {
  const init = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesLink = servicesDropdown?.querySelector('.services-link');
    const dropdownMenu = servicesDropdown?.querySelector('.dropdown-menu');
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');

    if (servicesLink) {
      servicesLink.setAttribute('aria-haspopup', 'true');
      servicesLink.setAttribute('aria-expanded', 'false');
    }

    if (dropdownMenu) {
      dropdownMenu.setAttribute('role', 'menu');
    }

    if (!mobileMenuBtn || !navLinks) {
      return;
    }

    // Language dropdown toggle functionality
    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // Toggle dropdown visibility
        const isVisible = langMenu.style.display === 'block';
        langMenu.style.display = isVisible ? 'none' : 'block';
      });
    }

    // Close language dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (langMenu && langMenu.style.display === 'block') {
        const clickedInsideLangDropdown = event.target.closest('.lang-btn-container');
        if (!clickedInsideLangDropdown) {
          langMenu.style.display = 'none';
        }
      }
    });

    const setMenuOpen = (open) => {
      document.body.classList.toggle('nav-open', open);
      mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMenuBtn.classList.toggle('is-open', open);
      mobileMenuBtn.textContent = open ? '✕' : '☰';

      if (!open && servicesDropdown) {
        servicesDropdown.classList.remove('submenu-open');
        if (servicesLink) {
          servicesLink.setAttribute('aria-expanded', 'false');
        }
      }
    };

    const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches;

    mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('type', 'button');

    mobileMenuBtn.addEventListener('click', (event) => {
      event.preventDefault();
      setMenuOpen(!document.body.classList.contains('nav-open'));
    });

    if (servicesLink && servicesDropdown) {
      servicesLink.addEventListener('click', (event) => {
        if (!isMobileViewport()) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        servicesDropdown.classList.toggle('submenu-open');
        servicesLink.setAttribute(
          'aria-expanded',
          servicesDropdown.classList.contains('submenu-open') ? 'true' : 'false'
        );
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!document.body.classList.contains('nav-open')) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickedInsideNav = target.closest('nav');

      // Close ONLY if clicked OUTSIDE nav
      if (!clickedInsideNav) {
        setMenuOpen(false);
      }
    });

    // Close menu when clicking on nav links
    navLinks.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a');
      if (!link) {
        return;
      }

      // Close mobile menu when link is clicked
      if (isMobileViewport()) {
        setMenuOpen(false);
      }
    });

    // Handle escape key to close menus
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        // Also close language dropdown
        if (langMenu) {
          langMenu.style.display = 'none';
        }
      }
    });
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
  
// Navigation Translation Function
function translateNavigation(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (navTranslations[lang] && navTranslations[lang][key]) {
      // Preserve Font Awesome icons by updating only the text content
      const icon = element.querySelector('i.fas, i.fab, i.fa, i.far, i.fal');
      if (icon) {
        // Keep the icon and update the text after it
        const iconHTML = icon.outerHTML;
        element.innerHTML = iconHTML + ' ' + navTranslations[lang][key];
      } else {
        // No icon, just update the text
        element.textContent = navTranslations[lang][key];
      }
    }
  });
}

// Global Language Change Function
function changeLanguage(lang) {
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update language button
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? '🌐ar' : '🌐en';
  }
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Toggle RTL for Arabic
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
  
  // Translate navigation
  translateNavigation(lang);
  
  // Translate page content if page-specific translations are available
  if (typeof translations !== 'undefined' && translations[lang]) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
  
  // Automatically close language dropdown after selection
  const langMenu = document.getElementById('langMenu');
  if (langMenu) {
    langMenu.style.display = 'none';
  }
}
 