const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    bk_eyebrow: "Resource Product",
    bk_hero_title: "Botkube Enterprise",
    bk_hero_subtitle: "ChatOps for Kubernetes with enterprise governance, alert intelligence, and response automation.",
    bk_hero_lead: "Shuroq helps teams adopt and operate Botkube Enterprise to reduce MTTR, remove noisy alerts, and run consistent incident workflows across Slack, Teams, and cloud-native toolchains.",
    bk_hero_cta_primary: "Talk to Shuroq",
    bk_hero_cta_secondary: "Back to Resources",
    bk_capabilities_heading: "What You Can Do with Botkube Enterprise",
    bk_cap1_title: "Alert Intelligence",
    bk_cap1_text: "Route high-signal Kubernetes events and suppress low-value noise with policy-driven filters.",
    bk_cap2_title: "Unified ChatOps",
    bk_cap2_text: "Run operations from collaboration tools with command controls, auditability, and role boundaries.",
    bk_cap3_title: "Governed Access",
    bk_cap3_text: "Enforce least-privilege execution and approval flows for production-safe day-2 operations.",
    bk_cap4_title: "Faster Incident Response",
    bk_cap4_text: "Trigger runbooks, enrich alerts with context, and speed up triage and remediation actions.",
    bk_usecases_heading: "Common Enterprise Use Cases",
    bk_uc1_title: "Platform Teams",
    bk_uc1_point1: "Standardize Kubernetes alert flows across clusters and environments",
    bk_uc1_point2: "Expose safe commands to app teams with audit logs",
    bk_uc1_point3: "Improve SRE handoffs with shared incident channels",
    bk_uc2_title: "DevOps Teams",
    bk_uc2_point1: "Investigate deployment failures directly from ChatOps tools",
    bk_uc2_point2: "Link alerts to dashboards, logs, and runbook actions",
    bk_uc2_point3: "Reduce context switching during on-call operations",
    bk_uc3_title: "Security and Compliance",
    bk_uc3_point1: "Track command execution history for governance reviews",
    bk_uc3_point2: "Restrict privileged operations by role and channel",
    bk_uc3_point3: "Improve response consistency for operational risk events",
    bk_delivery_heading: "How Shuroq Delivers Botkube Enterprise",
    bk_step1: "Readiness Assessment: cluster topology, current alerting, and incident process mapping.",
    bk_step2: "Design and Integration: ChatOps architecture, RBAC model, and observability integrations.",
    bk_step3: "Implementation: policy setup, channel routing, command governance, and runbook automation.",
    bk_step4: "Enablement and Optimization: playbooks, on-call coaching, KPI tuning, and operational handover.",
    bk_cta_heading: "Need production-grade ChatOps for Kubernetes?",
    bk_cta_text: "Shuroq can implement Botkube Enterprise with the governance and reliability standards your teams require.",
    bk_cta_button: "Start a Discussion"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    bk_eyebrow: "منتج الموارد",
    bk_hero_title: "بوتكيوب للمؤسسات",
    bk_hero_subtitle: "تشات أوبس لكوبرنيتيس مع حوكمة المؤسسات، وذكاء التنبيهات، وأتمتة الاستجابة.",
    bk_hero_lead: "تساعد شروق الفرق على تبني وتشغيل بوتكيوب للمؤسسات لتقليل متوسط وقت التعافي، وإزالة التنبيهات المزعجة، وتشغيل مهام سير الحوادث المتسقة عبر سلاك وفرق وأدوات السحابة الأصلية.",
    bk_hero_cta_primary: "تحدث مع شروق",
    bk_hero_cta_secondary: "العودة إلى الموارد",
    bk_capabilities_heading: "ما يمكنك فعله مع بوتكيوب للمؤسسات",
    bk_cap1_title: "ذكاء التنبيهات",
    bk_cap1_text: "وجه أحداث كوبرنيتيس عالية الإشارة وقمع الضوضاء ذات القيمة المنخفضة باستخدام فلاتر مدفوعة بالسياسة.",
    bk_cap2_title: "تشات أوبس موحد",
    bk_cap2_text: "شغّل العمليات من أدوات التعاون مع ضوابط الأوامر وقابلية التدقيق وحدود الأدوار.",
    bk_cap3_title: "وصول محكوم",
    bk_cap3_text: "فرض التنفيذ بأقل امتياز وتدفقات الموافقة لعمليات يوم 2 الآمنة للإنتاج.",
    bk_cap4_title: "استجابة أسرع للحوادث",
    bk_cap4_text: "أطلق دفاتر التشغيل، وأثرِ التنبيهات بالسياق، وسرّع فرز الإجراءات والعلاجات.",
    bk_usecases_heading: "حالات الاستخدام الشائعة للمؤسسات",
    bk_uc1_title: "فرق المنصات",
    bk_uc1_point1: "توحيد تدفقات تنبيهات كوبرنيتيس عبر المجموعات والبيئات",
    bk_uc1_point2: "كشف الأوامر الآمنة لفرق التطبيقات مع سجلات التدقيق",
    bk_uc1_point3: "تحسين تسليم مهندسي موثوقية الموقع مع قنوات الحوادث المشتركة",
    bk_uc2_title: "فرق ديف أوبس",
    bk_uc2_point1: "تحقق من فشل النشر مباشرة من أدوات تشات أوبس",
    bk_uc2_point2: "ربط التنبيهات بلوحات المعلومات والسجلات وإجراءات دفاتر التشغيل",
    bk_uc2_point3: "تقليل تبديل السياق أثناء العمليات في الخدمة",
    bk_uc3_title: "الأمان والامتثال",
    bk_uc3_point1: "تتبع سجل تنفيذ الأوامر لمراجعات الحوكمة",
    bk_uc3_point2: "تقييد العمليات المميزة حسب الدور والقناة",
    bk_uc3_point3: "تحسين اتساق الاستجابة لأحداث المخاطر التشغيلية",
    bk_delivery_heading: "كيف تسلم شروق بوتكيوب للمؤسسات",
    bk_step1: "تقييم الجاهزية: طوبولوجيا المجموعة، والتنبيهات الحالية، ورسم خرائط عمليات الحوادث.",
    bk_step2: "التصميم والتكامل: بنية تشات أوبس، ونموذج RBAC، وعمليات تكامل المراقبة.",
    bk_step3: "التنفيذ: إعداد السياسات، وتوجيه القنوات، وحوكمة الأوامر، وأتمتة دفاتر التشغيل.",
    bk_step4: "التمكين والتحسين: دفاتر التشغيل، والتدريب أثناء الخدمة، وضبط مؤشرات الأداء الرئيسية، وتسليم التشغيل.",
    bk_cta_heading: "هل تحتاج إلى تشات أوبس من فئة الإنتاج لكوبرنيتيس؟",
    bk_cta_text: "يمكن لشروق تنفيذ بوتكيوب للمؤسسات بمعايير الحوكمة والموثوقية التي تتطلبها فرقك.",
    bk_cta_button: "ابدأ مناقشة"
  }
}

// Toggle dropdown visibility
document.getElementById("langBtn").addEventListener("click", () => {
  const langMenu = document.getElementById("langMenu");
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

// Change language function
function changeLanguage(lang) {
  // Update text content based on selected language
  document.querySelectorAll("[data-i18n]").forEach(element => {
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