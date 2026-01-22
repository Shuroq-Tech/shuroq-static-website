const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    about_hero_title: "About Shuroq",
  about_hero_description: "Learn more about our mission, vision, and commitment to excellence",
  company_overview_title: "About Shuroq",
  company_overview_description: "Shuroq is a service-based technology company delivering reliable, scalable, and future-ready digital solutions for enterprises and growing businesses. We specialize in DevOps, Cloud, AI, data, and digital engineering services that enable organizations to modernize platforms, automate operations, and accelerate innovation.",
  mission_title: "Our Mission",
  mission_description: "To empower organizations with intelligent, secure, and scalable technology solutions that drive operational excellence, accelerate innovation, and enable sustainable business growth.",
  vision_title: "Our Vision",
  vision_description: "To be a trusted global technology services partner, recognized for delivering impact-driven digital transformation through engineering excellence and continuous innovation.",
  cta_title: "Ready to Transform Your Business?",
  cta_description: "Let's discuss how we can help you achieve your digital transformation goals",
  cta_button: "Contact Us",
  },
  ar:{
    nav_aboutus: "معلومات عنا",
    nav_services:"الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
    visiontitle:"الرؤية وتحليلات البيانات",
    about_hero_title: "من نحن - شروق",
  about_hero_description: "تعرف على مهمتنا ورؤيتنا والتزامنا بالتميز",
  company_overview_title: "عن شروق",
  company_overview_description: "شروق هي شركة تكنولوجية قائمة على الخدمات تقدم حلولًا رقمية موثوقة وقابلة للتطوير وجاهزة للمستقبل للمؤسسات والشركات الناشئة. نحن متخصصون في خدمات DevOps والسحابة والذكاء الاصطناعي والبيانات والهندسة الرقمية التي تمكن المؤسسات من تحديث المنصات وأتمتة العمليات وتسريع الابتكار.",
  mission_title: "مهمتنا",
  mission_description: "تمكين المؤسسات بحلول تكنولوجية ذكية وآمنة وقابلة للتطوير تقود التميز التشغيلي وتسريع الابتكار وتمكن النمو التجاري المستدام.",
  vision_title: "رؤيتنا",
  vision_description: "أن نكون شريكًا موثوقًا عالميًا لخدمات التكنولوجيا، معترفًا بتقديم التحول الرقمي القائم على التأثير من خلال التميز الهندسي والابتكار المستمر.",
  cta_title: "هل أنت مستعد لتحويل عملك؟",
  cta_description: "لنتناقش حول كيف يمكننا مساعدتك في تحقيق أهداف التحول الرقمي الخاصة بك",
  cta_button: "اتصل بنا",
  }
}


// Toggle dropdown visibility
document.getElementById("langBtn").addEventListener("click", () => {
  const langMenu = document.getElementById("langMenu");
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});




// Change language function
function changeLanguage(lang){
  // Update text content based on selected language
  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });

  // Apply RTL for Arabic
  if (lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  // Close dropdown after selection
  document.getElementById("langMenu").style.display = "none";
}


// Load English by default
changeLanguage("en");

(() => {
  const init = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesLink = servicesDropdown?.querySelector('.services-link');
    const dropdownMenu = servicesDropdown?.querySelector('.dropdown-menu');

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

    // document.addEventListener('click', (event) => {
    //   if (!document.body.classList.contains('nav-open')) {
    //     return;
    //   }

    //   const target = event.target;
    //   if (!(target instanceof Element)) {
    //     return;
    //   }

    //   const clickedInsideNav = !!target.closest('nav');
    //   if (!clickedInsideNav) {
    //     setMenuOpen(false);
    //   }
    // });
document.addEventListener('click', (event) => {
  if (!document.body.classList.contains('nav-open')) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const clickedInsideNav = target.closest('nav');

  // ✅ Close ONLY if clicked OUTSIDE nav
  if (!clickedInsideNav) {
    setMenuOpen(false);
  }
});
    navLinks.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a');
      if (!link) {
        return;
      }

      if (isMobileViewport()) {
        setMenuOpen(false);
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobileViewport()) {
        setMenuOpen(false);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
