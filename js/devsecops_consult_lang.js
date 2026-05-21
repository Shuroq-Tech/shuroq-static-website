const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    
    // Enhanced Hero
    dc_hero_title: "DevSecOps Consult",
    dc_hero_desc: "Integrate security controls across the software lifecycle without slowing engineering velocity.",
    dc_hero_subdesc: "Transform your security posture with automated compliance, continuous monitoring, and developer-friendly security practices that scale with your organization.",
    
    // Why DevSecOps Matters
    dc_why_title: "Why DevSecOps Matters",
    dc_why_card1_title: "Security Without Speed Loss",
    dc_why_card1_desc: "Integrate security early in the pipeline to catch vulnerabilities without compromising delivery velocity.",
    dc_why_card2_title: "Compliance Automation",
    dc_why_card2_desc: "Automate policy enforcement and compliance checks across all development stages.",
    dc_why_card3_title: "Risk Reduction",
    dc_why_card3_desc: "Proactively identify and mitigate security risks before they reach production.",
    
    // Expanded Service Scope
    dc_service_title: "Service Scope",
    dc_card1_title: "Secure SDLC",
    dc_card1_desc: "Threat modeling and control placement from planning through release.",
    dc_card1_feature1: "Security requirements analysis",
    dc_card1_feature2: "Design threat modeling",
    dc_card1_feature3: "Code review automation",
    dc_card2_title: "CI/CD Security Guardrails",
    dc_card2_desc: "Automated scanning, policy checks, and release gates.",
    dc_card2_feature1: "Static application security testing",
    dc_card2_feature2: "Dynamic application security testing",
    dc_card2_feature3: "Container image scanning",
    dc_card3_title: "Runtime Security",
    dc_card3_desc: "Container posture management and rapid vulnerability response.",
    dc_card3_feature1: "Runtime threat detection",
    dc_card3_feature2: "Vulnerability management",
    dc_card3_feature3: "Incident response automation",
    dc_card4_title: "Security Operations",
    dc_card4_desc: "Continuous monitoring and security incident response.",
    dc_card4_feature1: "Security monitoring dashboards",
    dc_card4_feature2: "Log analysis and correlation",
    dc_card4_feature3: "Automated alerting",
    
    // Tools & Technologies
    dc_tools_title: "Tools & Technologies",
    dc_tool1: "SAST Tools",
    dc_tool2: "DAST Tools",
    dc_tool3: "Container Security",
    dc_tool4: "SIEM Solutions",
    dc_tool5: "Git Security",
    dc_tool6: "Cloud Security",
    
    // Our Approach
    dc_approach_title: "Our Approach",
    dc_step1_title: "Assessment",
    dc_step1_desc: "Evaluate current security posture and identify gaps in your DevSecOps maturity.",
    dc_step2_title: "Strategy Design",
    dc_step2_desc: "Create a tailored DevSecOps roadmap aligned with your business objectives.",
    dc_step3_title: "Implementation",
    dc_step3_desc: "Deploy security tools, processes, and training across your development lifecycle.",
    dc_step4_title: "Optimization",
    dc_step4_desc: "Continuously monitor, measure, and improve security practices and tool effectiveness.",
    
    // Business Benefits
    dc_benefits_title: "Business Benefits",
    dc_benefit1_title: "Faster Time to Market",
    dc_benefit1_desc: "Security integrated early prevents delays and rework in later stages.",
    dc_benefit2_title: "Cost Reduction",
    dc_benefit2_desc: "Early vulnerability detection reduces remediation costs by up to 80%.",
    dc_benefit3_title: "Enhanced Security Posture",
    dc_benefit3_desc: "Comprehensive security coverage across the entire application lifecycle.",
    dc_benefit4_title: "Team Empowerment",
    dc_benefit4_desc: "Developers become security-aware with proper tools and training.",
    
    // Use Cases
    dc_usecases_title: "Use Cases",
    dc_usecase1_title: "Financial Services",
    dc_usecase1_desc: "Meet regulatory compliance while maintaining rapid innovation cycles.",
    dc_usecase2_title: "Healthcare Applications",
    dc_usecase2_desc: "Ensure HIPAA compliance and protect sensitive patient data.",
    dc_usecase3_title: "E-commerce Platforms",
    dc_usecase3_desc: "Protect customer data and payment information without affecting user experience.",
    dc_usecase4_title: "SaaS Applications",
    dc_usecase4_desc: "Build secure multi-tenant applications with automated security controls.",
    
    // Enhanced CTA
    dc_cta_title: "Ready to Transform Your DevSecOps?",
    dc_cta_desc: "Let's build a security-first culture that accelerates innovation while protecting your digital assets.",
    dc_cta_button: "Schedule Consultation",
    dc_cta_demo: "Request Demo"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    
    // Enhanced Hero
    dc_hero_title: "استشارة ديف سي أوبس",
    dc_hero_desc: "دمج ضوابط الأمان عبر دورة حياة البرمجيات دون إبطاء سرعة الهندسة.",
    dc_hero_subdesc: "حول وضعك الأمني مع الامتثال المؤتمت، والمراقبة المستمرة، وممارسات الأمان الموجهة للمطورين التي تتسع مع مؤسستك.",
    
    // Why DevSecOps Matters
    dc_why_title: "لماذا ديف سي أوبس مهم",
    dc_why_card1_title: "أمان دون فقدان السرعة",
    dc_why_card1_desc: "دمج الأمان مبكراً في خط الأنابيب لالتقاط الثغرات دون المساس بسرعة التسليم.",
    dc_why_card2_title: "أتمتة الامتثال",
    dc_why_card2_desc: "أتمتة فرض السياسات والتحقق من الامتثال عبر جميع مراحل التطوير.",
    dc_why_card3_title: "تقليل المخاطر",
    dc_why_card3_desc: "تحديد وتخفيف مخاطر الأمان بشكل استباقي قبل الوصول إلى الإنتاج.",
    
    // Expanded Service Scope
    dc_service_title: "نطاق الخدمة",
    dc_card1_title: "دورة حياة آمنة للتطوير",
    dc_card1_desc: "نمذجة التهديدات وتحديد الضوابط من التخطيط حتى الإصدار.",
    dc_card1_feature1: "تحليل متطلبات الأمان",
    dc_card1_feature2: "نمذجة تهديدات التصميم",
    dc_card1_feature3: "أتمتة مراجعة الكود",
    dc_card2_title: "حواجز أمان التكامل المستمر/التسليم المستمر",
    dc_card2_desc: "الفحص المؤتمت، والتحقق من السياسات، وبوابات الإصدار.",
    dc_card2_feature1: "اختبار أمان التطبيقات الثابت",
    dc_card2_feature2: "اختبار أمان التطبيقات الديناميكي",
    dc_card2_feature3: "فحص صور الحاويات",
    dc_card3_title: "أمان وقت التشغيل",
    dc_card3_desc: "إدارة وضع الحاويات والاستجابة السريعة للثغرات الأمنية.",
    dc_card3_feature1: "كشف التهديدات في وقت التشغيل",
    dc_card3_feature2: "إدارة الثغرات الأمنية",
    dc_card3_feature3: "أتمتة الاستجابة للحوادث",
    dc_card4_title: "عمليات الأمان",
    dc_card4_desc: "المراقبة المستمرة والاستجابة لحوادث الأمان.",
    dc_card4_feature1: "لوحات مراقبة الأمان",
    dc_card4_feature2: "تحليل السجلات والارتباط",
    dc_card4_feature3: "التنبيه المؤتمت",
    
    // Tools & Technologies
    dc_tools_title: "الأدوات والتقنيات",
    dc_tool1: "أدوات SAST",
    dc_tool2: "أدوات DAST",
    dc_tool3: "أمان الحاويات",
    dc_tool4: "حلول SIEM",
    dc_tool5: "أمان Git",
    dc_tool6: "أمان السحابة",
    
    // Our Approach
    dc_approach_title: "نهجنا",
    dc_step1_title: "التقييم",
    dc_step1_desc: "تقييم الوضع الأمني الحالي وتحديد الفجوات في نضج ديف سي أوبس.",
    dc_step2_title: "تصميم الاستراتيجية",
    dc_step2_desc: "إنشاء خريطة طريق ديف سي أوبس مخصصة متوافقة مع أهداف عملك.",
    dc_step3_title: "التنفيذ",
    dc_step3_desc: "نشر أدوات الأمان والعمليات والتدريب عبر دورة حياة التطوير.",
    dc_step4_title: "التحسين",
    dc_step4_desc: "مراقبة وقياس وتحسين ممارسات وأدوات الأمان بشكل مستمر.",
    
    // Business Benefits
    dc_benefits_title: "الفوائد التجارية",
    dc_benefit1_title: "وصول أسرع إلى السوق",
    dc_benefit1_desc: "الأمان المدمج مبكراً يمنع التأخير وإعادة العمل في المراحل اللاحقة.",
    dc_benefit2_title: "تقليل التكاليف",
    dc_benefit2_desc: "كشف الثغرات الأمنية مبكراً يقلل تكاليف العلاج بنسبة تصل إلى 80%.",
    dc_benefit3_title: "تعزيز الوضع الأمني",
    dc_benefit3_desc: "تغطية أمنية شاملة عبر دورة حياة التطبيق بأكملها.",
    dc_benefit4_title: "تمكين الفريق",
    dc_benefit4_desc: "يصبح المطورون واعين بالأمان مع الأدوات والتدريب المناسبين.",
    
    // Use Cases
    dc_usecases_title: "حالات الاستخدام",
    dc_usecase1_title: "الخدمات المالية",
    dc_usecase1_desc: "تلبية الامتثال التنظيمي مع الحفاظ على دورات الابتكار السريع.",
    dc_usecase2_title: "تطبيقات الرعاية الصحية",
    dc_usecase2_desc: "ضمان امتثال HIPAA وحماية بيانات المرضى الحساسة.",
    dc_usecase3_title: "منصات التجارة الإلكترونية",
    dc_usecase3_desc: "حماية بيانات العملاء ومعلومات الدفع دون التأثير على تجربة المستخدم.",
    dc_usecase4_title: "تطبيقات SaaS",
    dc_usecase4_desc: "بناء تطبيقات متعددة المستأجرين آمنة مع ضوابط أمان مؤتمتة.",
    
    // Enhanced CTA
    dc_cta_title: "هل أنت مستعد لتحويل ديف سي أوبس؟",
    dc_cta_desc: "دعنا نبني ثقافة الأمان أولاً التي تعزز الابتكار مع حماية أصولك الرقمية.",
    dc_cta_button: "جدولة استشارة",
    dc_cta_demo: "طلب عرض توضيحي"
  }
}

// Toggle dropdown visibility
document.getElementById("langBtn").addEventListener("click", () => {
  const langMenu = document.getElementById("langMenu");
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

// Change language function
function changeLanguage(lang){
  // Refactored: shared i18n DOM update logic lives in js/i18n_helper.js.
  window.ShuroqI18n.applyLanguage(lang, translations, { updateNavigation: true, skipMissing: false });
}


// Load English by default
changeLanguage(window.ShuroqI18n.getSavedLanguage());

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
