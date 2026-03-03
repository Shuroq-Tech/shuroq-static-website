const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    
    // Enhanced Hero
    pc_hero_title: "Prometheus Consulting",
    pc_hero_desc: "Engineer high-quality metrics systems with Prometheus for scalable monitoring and reliable alerting.",
    pc_hero_subdesc: "Build robust monitoring foundations that scale with your infrastructure, providing reliable metrics collection and intelligent alerting that keeps your systems running smoothly and efficiently.",
    
    // Why Prometheus Matters
    pc_why_title: "Why Prometheus Matters",
    pc_why_card1_title: "Scalable Metrics Collection",
    pc_why_card1_desc: "Handle millions of metrics per second with efficient pull-based architecture that grows with your needs.",
    pc_why_card2_title: "Reliable Monitoring",
    pc_why_card2_desc: "Ensure consistent data collection and storage with built-in high availability and disaster recovery capabilities.",
    pc_why_card3_title: "Real-Time Alerting",
    pc_why_card3_desc: "Get instant notifications about system issues with intelligent alerting that reduces false positives.",
    
    // Expanded Service Scope
    pc_service_title: "Service Scope",
    pc_card1_title: "Metrics Architecture",
    pc_card1_desc: "Scrape design, label strategy, and cardinality controls.",
    pc_card1_subdesc: "Design efficient metrics collection systems that provide meaningful insights while maintaining optimal performance and storage efficiency.",
    pc_card1_feature1: "Optimal scrape intervals and targets",
    pc_card1_feature2: "Consistent labeling strategies",
    pc_card1_feature3: "Cardinality control and management",
    pc_card1_feature4: "Custom exporters and instrumentation",
    pc_card1_impact: "Business Impact: 80% reduction in storage costs and 50% faster query performance.",
    
    pc_card2_title: "Recording and Alert Rules",
    pc_card2_desc: "Rules tuned for performance and actionable incident response.",
    pc_card2_subdesc: "Implement intelligent recording rules and alerting strategies that provide actionable insights without overwhelming your teams.",
    pc_card2_feature1: "High-performance recording rules",
    pc_card2_feature2: "Multi-tier alerting strategies",
    pc_card2_feature3: "Alertmanager integration",
    pc_card2_feature4: "Silencing and inhibition policies",
    pc_card2_impact: "Business Impact: 70% faster incident detection and 90% reduction in false alerts.",
    
    pc_card3_title: "Scale and Resilience",
    pc_card3_desc: "Federation, retention, and HA design for production growth.",
    pc_card3_subdesc: "Build resilient monitoring infrastructure that scales horizontally and maintains availability during failures.",
    pc_card3_feature1: "Prometheus federation architecture",
    pc_card3_feature2: "Long-term retention strategies",
    pc_card3_feature3: "High availability deployment",
    pc_card3_feature4: "Disaster recovery procedures",
    pc_card3_impact: "Business Impact: 99.9% uptime and seamless scaling to 10x load.",
    
    // Prometheus Capabilities
    pc_capabilities_title: "Prometheus Capabilities",
    pc_cap1_title: "Metrics Collection",
    pc_cap1_desc: "Efficient pull-based collection with HTTP and service discovery for dynamic environments.",
    pc_cap1_example: "HTTP endpoints, service discovery, custom exporters",
    pc_cap2_title: "Time-Series Storage",
    pc_cap2_desc: "Efficient time-series database with compression and retention policies for optimal storage usage.",
    pc_cap2_example: "TSDB, remote storage, data compression",
    pc_cap3_title: "Powerful Querying",
    pc_cap3_desc: "PromQL enables complex queries and aggregations for deep insights into system behavior.",
    pc_cap3_example: "PromQL, range vectors, instant vectors",
    pc_cap4_title: "Alertmanager Integration",
    pc_cap4_desc: "Sophisticated alerting with routing, inhibition, and escalation for effective incident management.",
    pc_cap4_example: "Alert routing, silencing, escalation",
    
    // Tools & Technologies
    pc_tools_title: "Tools & Integrations",
    pc_tool1: "Grafana",
    pc_tool2: "Kubernetes",
    pc_tool3: "Alertmanager",
    pc_tool4: "OpenTelemetry",
    pc_tool5: "Node Exporter",
    pc_tool6: "Blackbox Exporter",
    pc_tool7: "Docker",
    pc_tool8: "Consul",
    
    // Our Approach
    pc_approach_title: "Our Approach",
    pc_step1_title: "Assessment",
    pc_step1_desc: "Evaluate your current monitoring setup and identify key metrics and architectural needs.",
    pc_step2_title: "Design",
    pc_step2_desc: "Create a comprehensive Prometheus architecture tailored to your infrastructure and requirements.",
    pc_step3_title: "Implementation",
    pc_step3_desc: "Deploy Prometheus instances, configure exporters, and set up monitoring across your environment.",
    pc_step4_title: "Optimization",
    pc_step4_desc: "Fine-tune performance, optimize queries, and enhance alerting based on operational feedback.",
    
    // Business Benefits
    pc_benefits_title: "Business Benefits",
    pc_benefit1_title: "Improved Reliability",
    pc_benefit1_desc: "Achieve 99.9% system uptime with proactive monitoring and early issue detection.",
    pc_benefit2_title: "Faster Incident Detection",
    pc_benefit2_desc: "Reduce mean time to detection (MTTD) by 75% with intelligent alerting and monitoring.",
    pc_benefit3_title: "Scalable Monitoring Systems",
    pc_benefit3_desc: "Handle 10x growth in infrastructure without compromising monitoring performance.",
    pc_benefit4_title: "Cost Optimization",
    pc_benefit4_desc: "Reduce monitoring costs by 40% through efficient storage and query optimization.",
    
    // Use Cases
    pc_usecases_title: "Use Cases",
    pc_usecase1_title: "Cloud-Native Applications",
    pc_usecase1_desc: "Monitor microservices and containerized applications in dynamic cloud environments.",
    pc_usecase2_title: "Kubernetes Monitoring",
    pc_usecase2_desc: "Comprehensive monitoring of Kubernetes clusters, pods, and services for optimal performance.",
    pc_usecase3_title: "Infrastructure Monitoring",
    pc_usecase3_desc: "Monitor servers, networks, and storage systems for complete infrastructure visibility.",
    pc_usecase4_title: "Application Performance",
    pc_usecase4_desc: "Track application metrics, response times, and error rates for optimal user experience.",
    
    // Enhanced CTA
    pc_cta_title: "Strengthen Your Monitoring Stack",
    pc_cta_desc: "Build reliable Prometheus architecture and operations that scale with your business growth and ensure system reliability.",
    pc_cta_reason1: "Expert Prometheus architects with enterprise experience",
    pc_cta_reason2: "Custom solutions for your unique infrastructure",
    pc_cta_reason3: "Comprehensive training and knowledge transfer",
    pc_cta_button: "Start Your Project",
    pc_cta_demo: "Request Assessment"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    
    // Enhanced Hero
    pc_hero_title: "استشارات بروميثيوس",
    pc_hero_desc: "هندس أنظمة مقاييس عالية الجودة مع بروميثيوس للمراقبة الموثوقة والإنذار الموثوقة على نطاق واسع.",
    pc_hero_subdesc: "ابن أسس مراقبة قوية تنمو مع بنيتك التحتية، وتوفر جمع مقاييس موثوق وإنذار ذكي يحافظ على تشغيل أنظمتك بسلاسة وكفاءة.",
    
    // Why Prometheus Matters
    pc_why_title: "لماذا بروميثيوس مهم",
    pc_why_card1_title: "جمع المقاييس القابل للتوسع",
    pc_why_card1_desc: "تعامل مع ملايين المقاييس في الثانية مع بنية سحب فعالة تنمو مع احتياجاتك.",
    pc_why_card2_title: "مراقبة موثوقة",
    pc_why_card2_desc: "ضمن جمع البيانات والتخزين المتسق مع توافر عالي التوفر واستعادة الكوارث.",
    pc_why_card3_title: "إنذار في الوقت الفعلي",
    pc_why_card3_desc: "احصل على إشعارات فورية حول مشاكل النظام مع إنذار ذكي يقلل التنبيهات الكاذبة.",
    
    // Expanded Service Scope
    pc_service_title: "نطاق الخدمة",
    pc_card1_title: "هندسة المقاييس",
    pc_card1_desc: "تصميم كشط، استراتيجية العلامات، وضوابط التحكم في البطاقات.",
    pc_card1_subdesc: "صمم أنظمة جمع مقاييس فعالة توفر رؤى مفيدة مع الحفاظ على الأداء الأمثل وكفاءة التخزين.",
    pc_card1_feature1: "فترات كشط ومستهدفات مثالية",
    pc_card1_feature2: "استراتيجيات علامات متسقة",
    pc_card1_feature3: "التحكم في البطاقات وإدارتها",
    pc_card1_feature4: "مصدرات مخصصة وتجهيز",
    pc_card1_impact: "الأثر التجاري: 80% تقليل في تكاليف التخزين و 50% أسرع في أداء الاستعلام.",
    
    pc_card2_title: "قواعد التسجيل والإنذار",
    pc_card2_desc: "قواعد مخصصة للأداء العالي وموافقة الاستجابة للأحداث.",
    pc_card2_subdesc: "نفذ قواعد تسجيل ذكية واستراتيجيات إنذار توفر رؤى قابلة للتنفيذ دون إرهاق الفرق.",
    pc_card2_feature1: "قواعد تسجيل عالية الأداء",
    pc_card2_feature2: "استراتيجيات إنذار متعددة المستويات",
    pc_card2_feature3: "تكامل مدير الإنذار",
    pc_card2_feature4: "سياسات الصمت والإعاقة",
    pc_card2_impact: "الأثر التجاري: 70% أسرع في كشف الحوادث و 90% تقليل في التنبيهات الكاذبة.",
    
    pc_card3_title: "التوسع والموثوقية",
    pc_card3_desc: "تصميم للاستمرار، والاحتفاظ بالبيانات، وتوافر التوافر العالي لضمان نمو الإنتاج.",
    pc_card3_subdesc: "ابن بنية تحتية مراقبة مرنة تتسع أفقياً وتحافظ على التوفر أثناء الأعطال.",
    pc_card3_feature1: "بنية اتحاد بروميثيوس",
    pc_card3_feature2: "استراتيجيات احتفاظ طويلة الأمد",
    pc_card3_feature3: "نشر التوافر العالي",
    pc_card3_feature4: "إجراءات استعادة الكوارث",
    pc_card3_impact: "الأثر التجاري: 99.9% وقت تشغيل وتوسع سلس إلى 10x الحمل.",
    
    // Prometheus Capabilities
    pc_capabilities_title: "قدرات بروميثيوس",
    pc_cap1_title: "جمع المقاييس",
    pc_cap1_desc: "جمع فعال يعتمد على السحب مع HTTP واكتشاف الخدمات للبيئات الديناميكية.",
    pc_cap1_example: "نقاطف HTTP، اكتشاف الخدمات، مصدرات مخصصة",
    pc_cap2_title: "تخزين السلاسل الزمني",
    pc_cap2_desc: "قاعدة بيانات سلاسل زمنية فعالة مع ضغط واستراتيجيات احتفاظ للاستخدام التخزين الأمثل.",
    pc_cap2_example: "TSDB، تخزين بعيد، ضغط البيانات",
    pc_cap3_title: "استعلام قوي",
    pc_cap3_desc: "PromQL تمكن استعلامات وتجميعات معقدة للحصول على رؤى عميقة في سلوك النظام.",
    pc_cap3_example: "PromQL، متجهات النطاق، متجهات فورية",
    pc_cap4_title: "تكامل مدير الإنذار",
    pc_cap4_desc: "إنذار متطور مع التوجيه والإعاقة والتصعيد لإدارة الحوادث بفعالية.",
    pc_cap4_example: "توجيه الإنذار، الصمت، التصعيد",
    
    // Tools & Technologies
    pc_tools_title: "الأدوات والتكاملات",
    pc_tool1: "جرافانا",
    pc_tool2: "كوبرنيتيس",
    pc_tool3: "مدير الإنذار",
    pc_tool4: "أوبن تيليمتري",
    pc_tool5: "مصدر العقدة",
    pc_tool6: "مصدر الصندوق الأسود",
    pc_tool7: "دوكر",
    pc_tool8: "كونسول",
    
    // Our Approach
    pc_approach_title: "نهجنا",
    pc_step1_title: "التقييم",
    pc_step1_desc: "قيم إعداد المراقبة الحالي وحدد المقاييس الرئيسية والاحتياجات المعمارية.",
    pc_step2_title: "التصميم",
    pc_step2_desc: "إنشاء بنية بروميثيوس شاملة مصمصة لبنيتك التحتية ومتطلباتك.",
    pc_step3_title: "التنفيذ",
    pc_step3_desc: "نشر مثيلات بروميثيوس، تكوين المصدرات، وإعداد المراقبة عبر بيئتك.",
    pc_step4_title: "التحسين",
    pc_step4_desc: "ضبط الأداء، تحسين الاستعلامات، وتعزيز الإنذار بناءً على التغذية الراجعة التشغيلية.",
    
    // Business Benefits
    pc_benefits_title: "الفوائد التجارية",
    pc_benefit1_title: "موثوقية محسنة",
    pc_benefit1_desc: "حقق 99.9% وقت تشغيل النظام مع المراقبة الاستباقية وكشف المشاكل المبكر.",
    pc_benefit2_title: "كشف حوادث أسرع",
    pc_benefit2_desc: "قلل متوسط وقت الكشف بنسبة 75% مع الإنذار الذكي والمراقبة.",
    pc_benefit3_title: "أنظمة مراقبة قابلة للتوسع",
    pc_benefit3_desc: "تعامل مع نمو البنية التحتية 10 مرات دون المساس بأداء المراقبة.",
    pc_benefit4_title: "تحسين التكاليف",
    pc_benefit4_desc: "قلل تكاليف المراقبة بنسبة 40% من خلال التخزين الفعالي وتحسين الاستعلام.",
    
    // Use Cases
    pc_usecases_title: "حالات الاستخدام",
    pc_usecase1_title: "التطبيقات السحابية الأصلية",
    pc_usecase1_desc: "راقب الخدمات المصغرة والحاويات في البيئات السحابية الديناميكية.",
    pc_usecase2_title: "مراقبة كوبرنيتيس",
    pc_usecase2_desc: "مراقبة شامل لمجموعات كوبرنيتيس والقرونات والخدمات للأداء الأمثل.",
    pc_usecase3_title: "مراقبة البنية التحتية",
    pc_usecase3_desc: "راقب الخوادم والشبكات وأنظمة التخزين لرؤية البنية التحتية الكاملة.",
    pc_usecase4_title: "أداء التطبيق",
    pc_usecase4_desc: "تتبع مقاييس التطبيق وأوقات الاستجابة ومعدلات الخطأ لتجربة المستخدم الأمثل.",
    
    // Enhanced CTA
    pc_cta_title: "عززز مكدس المراقبة",
    pc_cta_desc: "ابن بنية بروميثيوس احترافية وموثوقة تنمو مع نمو عملك وتضمن موثوقية النظام.",
    pc_cta_reason1: "خبراء معماري بروميثيوس مع خبرة مثبتة في المؤسسات",
    pc_cta_reason2: "حلول مخصصة لبنيتك التحتية الفريدة",
    pc_cta_reason3: "تدريب شامل ونقل المعرفة",
    pc_cta_button: "ابدأ مشروعك",
    pc_cta_demo: "طلب تقييم"
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
