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
  mission_description: "Our mission is to bridge the gap between complex engineering and practical execution by delivering scalable cloud infrastructure, robust DevOps practices, and high-performance platform engineering solutions. We work closely with founders and product teams to design, automate, and optimize systems that reduce operational overhead, enhance reliability, and accelerate innovation — transforming ideas into production-ready platforms that support sustainable growth",
  vision_title:"Our Vision",
  vision_description: "Our vision is to become a trusted engineering partner for ambitious startups and growing enterprises worldwide — enabling them to scale with confidence through resilient, intelligent, and future-ready technology foundations. We envision a digital ecosystem where businesses are empowered by infrastructure that is secure, automated, and built for long-term sustainability rather than short-term survival.",
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
  mission_description: "مهمتنا هي سد الفجوة بين الهندسة المعقدة والتنفيذ العملي من خلال تقديم بنية تحتية سحابية قابلة للتوسع، وممارسات DevOps قوية، وحلول هندسة منصات عالية الأداء. نعمل بشكل وثيق مع المؤسسين والفرق المنتجة لتصميم وأتمتة وتحسين الأنظمة التي تقلل النفقات التشغيلية، وتعزز الموثوقية، وتسرع الابتكار — محولين الأفكار إلى منصات جاهزة للإنتاج التي تدعم النمو المستدام.",
  vision_title: "رؤيتنا",
  vision_description: "في شروق، تتمثل رؤيتنا في أن نكون الشريك الهندسي الموثوق للشركات الناشئة والطموحة والمؤسسات المتنامية حول العالم، من خلال تمكينها من التوسع بثقة عبر بنية تقنية مرنة وذكية وجاهزة للمستقبل. نطمح إلى بناء منظومة رقمية تعتمد على أسس هندسية قوية تضمن الاستدامة طويلة المدى، بدلاً من الحلول المؤقتة قصيرة الأجل.",
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
