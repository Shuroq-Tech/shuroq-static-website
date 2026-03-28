const translations = {
  en: {
   nav_company: "Company",
    nav_aboutus: "About Us",
    nav_shuroqway: "The Shuroq Way",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_solutions: "Solutions",
    nav_careers: "Careers",
    nav_resources: "Resources",
    nav_blogs: "Blogs",
    nav_webinars: "Webinars",
    nav_events: "Events",
    nav_skillrubrics: "Skill Rubrics",
    nav_contact: "Contact-Us",
    events_badge: "Shuroq Events",
    events_hero_title: "Learn, Connect, and Build with Our Community Events",
    events_hero_subtitle: "Explore upcoming sessions focused on cloud-native engineering, DevOps excellence, platform reliability, and AI-enabled delivery.",
    events_upcoming_title: "Upcoming Events",
    events_get_updates: "Get Updates",
    events_hackathon_tag: "Upcoming Hackathon",
    events_hackathon_title: "Shuroq Build Sprint 2026",
    events_hackathon_desc: "Our company hackathon is coming soon. Teams will build practical cloud, AI, and automation solutions and present them to engineering mentors.",
    events_coming_soon: "Coming Soon",
    events_full_day: "Full Day Event",
    events_hybrid: "Hybrid",
    events_early_access: "Get Early Access",
    events_webinar_tag: "Featured Webinar",
    events_webinar_title: "Kubernetes Reliability Playbook 2026",
    events_webinar_desc: "Deep-dive session on production readiness, observability baselines, and SRE runbooks for modern teams.",
    events_online: "Online",
    events_reserve_spot: "Reserve Spot",
    events_workshop_tag: "Workshop",
    events_workshop_title: "Platform Engineering in Practice",
    events_workshop_desc: "Hands-on workshop to build internal developer platforms and improve developer experience at scale.",
    events_live_session: "Live Session",
    events_register: "Register",
    events_talk_tag: "Talk",
    events_talk_title: "AI + DevOps: Smarter Delivery Pipelines",
    events_talk_desc: "How AI-assisted workflows can improve CI/CD efficiency, testing velocity, and release confidence.",
    events_community_talk: "Community Talk",
    events_join_event: "Join Event",
    events_why_title: "Why Attend Shuroq Events?",
    events_practical_title: "Practical Sessions",
    events_practical_desc: "Actionable insights you can apply immediately to engineering systems and team workflows.",
    events_expert_title: "Expert Speakers",
    events_expert_desc: "Learn from practitioners who run real cloud-native platforms and production-grade systems.",
    events_networking_title: "Peer Networking",
    events_networking_desc: "Connect with engineers, leaders, and teams solving similar technical and operational challenges.",
    events_newsletter_title: "Never Miss an Event",
    events_newsletter_desc: "Get upcoming event announcements and session invites directly from our team.",
    events_subscribe: "Subscribe for Updates"
  },
  ar: {
    nav_company: "الشركة",
    nav_shuroqway: "طريق شروق",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "المدونات",
    nav_careers: "وظائف",
    nav_solutions: "الحلول",
    nav_blogs: "المدونات",
    nav_webinars: "ندوات عبر الإنترنت",
    nav_events: "الأحداث",
    nav_skillrubrics: "معايير المهارات",
    nav_contact: "اتصل بنا",
    events_badge: "فعاليات شروق",
    events_hero_title: "تعلم وتواصل وابنِ مع فعاليات مجتمعنا",
    events_hero_subtitle: "استكشف الجلسات القادمة المركزة على الهندسة السحابية الأصلية، وتميز ديف أوبس، وموثوقية المنصات، والتسليم المدعوم بالذكاء الاصطناعي.",
    events_upcoming_title: "الفعاليات القادمة",
    events_get_updates: "احصل على التحديثات",
    events_hackathon_tag: "هاكاثون قادم",
    events_hackathon_title: "سبع البناء في شروق 2026",
    events_hackathon_desc: "هاكاثون شركتنا قريباً. ستبني الفرق حلولاً سحابية وذكاء اصطناعياً وأتمتة عملية وتقدمها للمرشدين الهندسيين.",
    events_coming_soon: "قريباً",
    events_full_day: "حدث ليوم كامل",
    events_hybrid: "مختلط",
    events_early_access: "احصل على وصول مبكر",
    events_webinar_tag: "ندوة ويب مميزة",
    events_webinar_title: "دليل موثوقية كوبرنيتيس 2026",
    events_webinar_desc: "جلسة معمقة حول الجاهزية للإنتاج، وخطوط أساس إمكانية المراقبة، ودفاتر تشغيل مهندسي موثوقية الموقع للفرق الحديثة.",
    events_online: "عبر الإنترنت",
    events_reserve_spot: "احجز مكانك",
    events_workshop_tag: "ورشة عمل",
    events_workshop_title: "هندسة المنصات في الممارسة",
    events_workshop_desc: "ورشة عمل عملية لبناء منصات المطورين الداخلية وتحسين تجربة المطور على نطاق واسع.",
    events_live_session: "جلسة مباشرة",
    events_register: "سجل",
    events_talk_tag: "محاضرة",
    events_talk_title: "الذكاء الاصطناعي + ديف أوبس: خطوط تسليم أذكى",
    events_talk_desc: "كيف يمكن لسير العمل المدعومة بالذكاء الاصطناعي تحسين كفاءة CI/CD وسرعة الاختبار وثقة الإصدار.",
    events_community_talk: "محاضرة مجتمعية",
    events_join_event: "انضم للفعالية",
    events_why_title: "لماذا تحضر فعاليات شروق؟",
    events_practical_title: "جلسات عملية",
    events_practical_desc: "رؤى قابلة للتنفيذ يمكنك تطبيقها فوراً على الأنظمة الهندسية وسير عمل الفرق.",
    events_expert_title: "متحدثون خبراء",
    events_expert_desc: "تعلم من الممارسين الذين يشغلون منصات سحابية أصلية حقيقية وأنظمة من فئة الإنتاج.",
    events_networking_title: "التواصل مع الأقران",
    events_networking_desc: "تواصل مع المهندسين والقادة والفرق الذين يحلون تحديات تقنية وتشغيلية مماثلة.",
    events_newsletter_title: "لا تفوت أي فعالية",
    events_newsletter_desc: "احصل على إعلانات الفعاليات القادمة ودعوات الجلسات مباشرة من فريقنا.",
    events_subscribe: "اشترك للحصول على التحديثات"
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
    // Preserve Font Awesome icons by updating only the text content
    const icon = element.querySelector('i.fas, i.fab, i.fa, i.far, i.fal');
    if (icon) {
      // Keep the icon and update the text after it
      const iconHTML = icon.outerHTML;
      element.innerHTML = iconHTML + ' ' + translations[lang][key];
    } else {
      // No icon, just update the text
      element.textContent = translations[lang][key];
    }
  });

  // Update navigation translations
  if (typeof translateNavigation === 'function') {
    translateNavigation(lang);
  }

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
