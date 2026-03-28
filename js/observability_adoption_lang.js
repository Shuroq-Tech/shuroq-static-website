const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    
    // Enhanced Hero
    oa_hero_title: "Observability and Adoption",
    oa_hero_desc: "Define observability standards and operating models that help teams detect and resolve issues faster.",
    oa_hero_subdesc: "In today's complex distributed systems, observability is the key to understanding system behavior, predicting failures, and maintaining optimal performance across your entire infrastructure.",
    
    // Why Observability Matters
    oa_why_title: "Why Observability Matters",
    oa_why_card1_title: "Beyond Traditional Monitoring",
    oa_why_card1_desc: "Move from basic metrics to deep insights that explain unknown unknowns in your system behavior.",
    oa_why_card2_title: "Faster Problem Resolution",
    oa_why_card2_desc: "Reduce mean time to resolution (MTTR) by up to 70% with comprehensive observability data.",
    oa_why_card3_title: "Enhanced User Experience",
    oa_why_card3_desc: "Proactively identify and resolve issues before they impact your customers' experience.",
    
    // Expanded Service Scope
    oa_service_title: "Service Scope",
    oa_card1_title: "Telemetry Strategy",
    oa_card1_desc: "Metrics, logs, traces, and event conventions for consistent visibility.",
    oa_card1_subdesc: "Establish a unified telemetry foundation that provides comprehensive insights across all services and applications.",
    oa_card1_feature1: "Standardized metric collection and naming conventions",
    oa_card1_feature2: "Structured logging with correlation IDs",
    oa_card1_feature3: "Distributed tracing implementation",
    oa_card1_feature4: "Event streaming for real-time monitoring",
    oa_card1_impact: "Business Impact: 60% faster incident detection and 40% reduction in debugging time.",
    
    oa_card2_title: "SLO and Alerting Model",
    oa_card2_desc: "Alerting tuned to user impact and operational priorities.",
    oa_card2_subdesc: "Implement service level objectives and intelligent alerting that focuses on what matters most to your users.",
    oa_card2_feature1: "Service Level Objective (SLO) definition",
    oa_card2_feature2: "Error budget management and burn rate alerts",
    oa_card2_feature3: "Multi-level alerting with escalation policies",
    oa_card2_feature4: "Business impact correlation",
    oa_card2_impact: "Business Impact: 80% reduction in alert fatigue and 50% improvement in service reliability.",
    
    oa_card3_title: "Adoption Playbook",
    oa_card3_desc: "Enablement plans that drive adoption across product teams.",
    oa_card3_subdesc: "Create a comprehensive adoption strategy that empowers teams to leverage observability effectively.",
    oa_card3_feature1: "Team training and skill development programs",
    oa_card3_feature2: "Observability maturity assessment",
    oa_card3_feature3: "Custom dashboards and reporting templates",
    oa_card3_feature4: "Best practices documentation and guidelines",
    oa_card3_impact: "Business Impact: 90% team adoption rate and 3x improvement in operational efficiency.",
    
    // Observability Pillars
    oa_pillars_title: "Observability Pillars",
    oa_pillar1_title: "Metrics",
    oa_pillar1_desc: "Quantitative measurements that provide insights into system performance, resource utilization, and business KPIs.",
    oa_pillar1_example: "CPU, Memory, Response Time, Error Rate",
    oa_pillar2_title: "Logs",
    oa_pillar2_desc: "Timestamped records of events that provide detailed context for debugging and auditing system behavior.",
    oa_pillar2_example: "Application Logs, Audit Trails, Error Events",
    oa_pillar3_title: "Traces",
    oa_pillar3_desc: "Distributed tracking that follows requests as they flow through multiple services in your architecture.",
    oa_pillar3_example: "Request Flow, Service Dependencies, Latency Analysis",
    
    // Tools & Technologies
    oa_tools_title: "Tools & Technologies",
    oa_tool1: "Prometheus",
    oa_tool2: "Grafana",
    oa_tool3: "OpenTelemetry",
    oa_tool4: "Jaeger",
    oa_tool5: "Fluentd",
    oa_tool6: "Elasticsearch",
    oa_tool7: "AlertManager",
    oa_tool8: "Kubernetes",
    
    // Our Approach
    oa_approach_title: "Our Approach",
    oa_step1_title: "Assessment",
    oa_step1_desc: "Evaluate your current observability maturity and identify gaps in your monitoring capabilities.",
    oa_step2_title: "Strategy Design",
    oa_step2_desc: "Create a comprehensive observability strategy aligned with your business objectives and technical requirements.",
    oa_step3_title: "Implementation",
    oa_step3_desc: "Deploy observability tools and establish data collection pipelines across your infrastructure.",
    oa_step4_title: "Optimization",
    oa_step4_desc: "Continuously refine dashboards, alerts, and processes based on operational feedback and evolving needs.",
    
    // Business Benefits
    oa_benefits_title: "Business Benefits",
    oa_benefit1_title: "Reduced Downtime",
    oa_benefit1_desc: "Decrease system downtime by up to 85% through proactive issue detection and rapid resolution.",
    oa_benefit2_title: "Improved Customer Satisfaction",
    oa_benefit2_desc: "Enhance user experience with 40% fewer performance-related issues and faster response times.",
    oa_benefit3_title: "Cost Optimization",
    oa_benefit3_desc: "Optimize resource utilization and reduce operational costs by 30% through better visibility.",
    oa_benefit4_title: "Accelerated Innovation",
    oa_benefit4_desc: "Enable faster deployment cycles with confidence through comprehensive system observability.",
    
    // Use Cases
    oa_usecases_title: "Use Cases",
    oa_usecase1_title: "Microservices Architecture",
    oa_usecase1_desc: "Gain end-to-end visibility across distributed services and complex interaction patterns.",
    oa_usecase2_title: "Cloud-Native Applications",
    oa_usecase2_desc: "Monitor dynamic scaling, container orchestration, and cloud resource utilization effectively.",
    oa_usecase3_title: "E-commerce Platforms",
    oa_usecase3_desc: "Track user journeys, transaction flows, and payment processing in real-time.",
    oa_usecase4_title: "Financial Services",
    oa_usecase4_desc: "Ensure compliance, audit trails, and real-time fraud detection with comprehensive logging.",
    
    // Enhanced CTA
    oa_cta_title: "Transform Your Observability Strategy",
    oa_cta_desc: "Turn observability from tooling into a measurable engineering capability that drives business value.",
    oa_cta_reason1: "Expert guidance on observability best practices",
    oa_cta_reason2: "Customized implementation for your unique needs",
    oa_cta_reason3: "Proven track record of successful transformations",
    oa_cta_button: "Start Your Journey",
    oa_cta_demo: "Request Assessment"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    
    // Enhanced Hero
    oa_hero_title: "المراقبة والتبني",
    oa_hero_desc: "حدد معايير المراقبة التشغيلية التي تساعد الفرق على كشف المشاكل وحلها بشكل أسرع.",
    oa_hero_subdesc: "في الأنظمة الموزعة المعقدة اليوم، تعد المراقبة مفتاح فهم سلوك النظام والتنبؤ بالأخطاء والحفاظ على الأداء الأمثل عبر البنية التحتية بأكملها.",
    
    // Why Observability Matters
    oa_why_title: "لماذا المراقبة مهمة",
    oa_why_card1_title: "ما وراء المراقبة التقليدية",
    oa_why_card1_desc: "انتقل من المقاييس الأساسية إلى رؤى عميقة تشرح المجهول في سلوك نظامك.",
    oa_why_card2_title: "حل أسرع للمشاكل",
    oa_why_card2_desc: "قلل متوسط وقت الحل بنسبة تصل إلى 70% مع بيانات المراقبة الشاملة.",
    oa_why_card3_title: "تجربة مستخدم محسنة",
    oa_why_card3_desc: "حدد وحل المشاكل بشكل استباقي قبل أن تؤثر على تجربة عملائك.",
    
    // Expanded Service Scope
    oa_service_title: "نطاق الخدمة",
    oa_card1_title: "استراتيجية القياس",
    oa_card1_desc: "مقاييس وسجلات وأحداث وتتبع للموافقة الموحدة.",
    oa_card1_subdesc: "أسس أساس موحد للقياس يوفر رؤى شاملة عبر جميع الخدمات والتطبيقات.",
    oa_card1_feature1: "جمع المقاييس القياسية وتسميات الموافقة",
    oa_card1_feature2: "تسجيل منظم مع معرفات الارتباط",
    oa_card1_feature3: "تنفيذ التتبع الموزع",
    oa_card1_feature4: "تدفق الأحداث للمراقبة في الوقت الفعلي",
    oa_card1_impact: "الأثر التجاري: 60% أسرع في كشف الحوادث و 40% تقليل في وقت التصحيح.",
    
    oa_card2_title: "نموذج التنبيهات والأولويات",
    oa_card2_desc: "تنبيهات مخصصة للأثر المهم على المستخدمين.",
    oa_card2_subdesc: "نفذ أهداف مستوى الخدمة والتنبيه الذكي الذي يركز على ما يهم أكثر لمستخدميك.",
    oa_card2_feature1: "تعريف هدف مستوى الخدمة (SLO)",
    oa_card2_feature2: "إدارة ميزانية الخطأ وتنبيهات معدل الاستهلاك",
    oa_card2_feature3: "تنبيهات متعددة المستويات مع سياسات التصعيد",
    oa_card2_feature4: "ارتباط الأثر التجاري",
    oa_card2_impact: "الأثر التجاري: 80% تقليل في إرهاق التنبيه و 50% تحسين في موثوقية الخدمة.",
    
    oa_card3_title: "خطة التبني",
    oa_card3_desc: "خطط مدروسة لزيادة تبني المراقبة.",
    oa_card3_subdesc: "إنشاء استراتيجية تبني شاملة تمكن الفرق من استخدام المراقبة بفعالية.",
    oa_card3_feature1: "برامج تدريب الفرق وتطوير المهارات",
    oa_card3_feature2: "تقييم نضج المراقبة",
    oa_card3_feature3: "قوالب لوحات معلومات وتقارير مخصصة",
    oa_card3_feature4: "توثيق أفضل الممارسات والإرشادات",
    oa_card3_impact: "الأثر التجاري: 90% معدل تبني الفرق و 3x تحسين في الكفاءة التشغيلية.",
    
    // Observability Pillars
    oa_pillars_title: "أعمدة المراقبة",
    oa_pillar1_title: "المقاييس",
    oa_pillar1_desc: "قياسات كمية توفر رؤى في أداء النظام واستخدام الموارد ومؤشرات الأداء الرئيسية.",
    oa_pillar1_example: "وحدة المعالجة المركزية، الذاكرة، وقت الاستجابة، معدل الخطأ",
    oa_pillar2_title: "السجلات",
    oa_pillar2_desc: "سجلات مؤقتة للأحداث توفر سياقاً مفصلاً لتصحيح ومراجعة سلوك النظام.",
    oa_pillar2_example: "سجلات التطبيق، مسارات التدقيق، أحداث الخطأ",
    oa_pillar3_title: "التتبعات",
    oa_pillar3_desc: "تتبع موزع يتبع الطلبات كما تتدفق عبر خدمات متعددة في بنيتك.",
    oa_pillar3_example: "تدفق الطلب، تبعيات الخدمة، تحليل زمن الوصول",
    
    // Tools & Technologies
    oa_tools_title: "الأدوات والتقنيات",
    oa_tool1: "بروميثيوس",
    oa_tool2: "جرافانا",
    oa_tool3: "أوبن تيليمتري",
    oa_tool4: "جيجر",
    oa_tool5: "فلونتد",
    oa_tool6: "إلاستك سيرش",
    oa_tool7: "أليرت مانجر",
    oa_tool8: "كوبرنيتيس",
    
    // Our Approach
    oa_approach_title: "نهجنا",
    oa_step1_title: "التقييم",
    oa_step1_desc: "قيم نضج المراقبة الحالي وحدد الفجوات في قدرات المراقبة.",
    oa_step2_title: "تصميم الاستراتيجية",
    oa_step2_desc: "إنشاء استراتيجية مراقبة شاملة متوافقة مع أهداف عملك ومتطلباتك التقنية.",
    oa_step3_title: "التنفيذ",
    oa_step3_desc: "نشر أدوات المراقبة وإنشاء خطوط جمع البيانات عبر البنية التحتية.",
    oa_step4_title: "التحسين",
    oa_step4_desc: "صقل لوحات المعلومات والتنبيهات والعمليات باستمرار بناءً على التغذية الراجعة التشغيلية والاحتياجات المتطورة.",
    
    // Business Benefits
    oa_benefits_title: "الفوائد التجارية",
    oa_benefit1_title: "تقليل وقت التوقف",
    oa_benefit1_desc: "قلل وقت توقف النظام بنسبة تصل إلى 85% من خلال كشف المشاكل بشكل استباقي وحل سريع.",
    oa_benefit2_title: "تحسين رضا العملاء",
    oa_benefit2_desc: "عزز تجربة المستخدم مع 40% أقل من المشاكل المتعلقة بالأداء وأوقت استجابة أسرع.",
    oa_benefit3_title: "تحسين التكاليف",
    oa_benefit3_desc: "حسن استخدام الموارد وقلل التكاليف التشغيلية بنسبة 30% من خلال رؤية أفضل.",
    oa_benefit4_title: "تسريع الابتكار",
    oa_benefit4_desc: "مكن دورات نشر أسرع بثقة من خلال مراقبة النظام الشاملة.",
    
    // Use Cases
    oa_usecases_title: "حالات الاستخدام",
    oa_usecase1_title: "بنية الخدمات المصغرة",
    oa_usecase1_desc: "اكسب رؤية شاملة من طرف إلى طرف عبر الخدمات الموزعة وأنماط التفاعل المعقدة.",
    oa_usecase2_title: "التطبيقات السحابية الأصلية",
    oa_usecase2_desc: "راقب التحجيم الديناميكي وتنسيق الحاويات واستخدام الموارد السحابية بفعالية.",
    oa_usecase3_title: "منصات التجارة الإلكترونية",
    oa_usecase3_desc: "تتبع رحلات المستخدم وتدفقات المعاملات ومعالجة الدفعات في الوقت الفعلي.",
    oa_usecase4_title: "الخدمات المالية",
    oa_usecase4_desc: "ضمان الامتثال ومسارات التدقيق وكشف الاحتيال في الوقت الفعلي مع التسجيل الشامل.",
    
    // Enhanced CTA
    oa_cta_title: "حول استراتيجية المراقبة",
    oa_cta_desc: "حول المراقبة من مجرد أدوات إلى قدرة هندسية قابلة للقياس تدفع القيمة التجارية.",
    oa_cta_reason1: "إرشاد خبراء في أفضل ممارسات المراقبة",
    oa_cta_reason2: "تنفيذ مخصص لاحتياجاتك الفريدة",
    oa_cta_reason3: "سجل مثبت للتحولات الناجحة",
    oa_cta_button: "ابدأ رحلتك",
    oa_cta_demo: "طلب تقييم"
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
