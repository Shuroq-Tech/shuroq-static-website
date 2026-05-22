const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    
    // Enhanced Hero
    gc_hero_title: "Grafana Consulting",
    gc_hero_desc: "Design Grafana dashboards and alerting workflows for better operational insight and quicker decisions.",
    gc_hero_subdesc: "Transform your data into actionable insights with real-time visualizations that help teams monitor performance, detect anomalies, and make informed decisions faster than ever before.",
    
    // Why Grafana Matters
    gc_why_title: "Why Grafana Matters",
    gc_why_card1_title: "Real-Time Data Visualization",
    gc_why_card1_desc: "Transform complex metrics into intuitive visualizations that teams can understand and act upon instantly.",
    gc_why_card2_title: "Faster Decision Making",
    gc_why_card2_desc: "Reduce decision time from hours to minutes with comprehensive dashboards that provide complete operational context.",
    gc_why_card3_title: "Proactive Issue Detection",
    gc_why_card3_desc: "Identify trends and anomalies before they become critical issues through intelligent alerting and visual analysis.",
    
    // Expanded Service Scope
    gc_service_title: "Service Scope",
    gc_card1_title: "Dashboard Design",
    gc_card1_desc: "Role-specific dashboards for platform, application, and business visibility.",
    gc_card1_subdesc: "Create tailored dashboards that meet the specific needs of different teams and stakeholders across your organization.",
    gc_card1_feature1: "Executive dashboards with KPI tracking",
    gc_card1_feature2: "Technical infrastructure monitoring views",
    gc_card1_feature3: "Application performance dashboards",
    gc_card1_feature4: "Business analytics and reporting panels",
    gc_card1_impact: "Business Impact: 70% faster data-driven decisions and improved stakeholder satisfaction.",
    
    gc_card2_title: "Alerting and On-Call Views",
    gc_card2_desc: "Actionable alerts with context-rich troubleshooting panels.",
    gc_card2_subdesc: "Implement intelligent alerting systems that provide the right information to the right people at the right time.",
    gc_card2_feature1: "Multi-level alerting with escalation policies",
    gc_card2_feature2: "Context-rich incident response panels",
    gc_card2_feature3: "On-call handoff and runbook integration",
    gc_card2_feature4: "Silence and acknowledgment workflows",
    gc_card2_impact: "Business Impact: 60% reduction in incident response time and 80% fewer false alerts.",
    
    gc_card3_title: "Reporting and Governance",
    gc_card3_desc: "Versioned dashboard standards and review workflows.",
    gc_card3_subdesc: "Establish governance frameworks that ensure dashboard quality, consistency, and compliance across your organization.",
    gc_card3_feature1: "Dashboard version control and change management",
    gc_card3_feature2: "Peer review and approval workflows",
    gc_card3_feature3: "Performance and usage analytics",
    gc_card3_feature4: "Compliance and audit trail documentation",
    gc_card3_impact: "Business Impact: 90% dashboard consistency and improved regulatory compliance.",
    
    // Grafana Capabilities
    gc_capabilities_title: "Grafana Capabilities",
    gc_cap1_title: "Real-Time Dashboards",
    gc_cap1_desc: "Live data visualization with sub-second refresh rates for immediate operational awareness.",
    gc_cap1_example: "Live metrics, streaming data, instant updates",
    gc_cap2_title: "Multi-Data Source Integration",
    gc_cap2_desc: "Connect to multiple data sources for comprehensive visibility across your entire stack.",
    gc_cap2_example: "Prometheus, Loki, Elasticsearch, InfluxDB",
    gc_cap3_title: "Custom Visualizations",
    gc_cap3_desc: "Tailored charts and panels designed specifically for your unique data and business needs.",
    gc_cap3_example: "Heatmaps, gauges, custom panels, geomaps",
    gc_cap4_title: "Advanced Alerting",
    gc_cap4_desc: "Intelligent alerting with machine learning and predictive analytics capabilities.",
    gc_cap4_example: "Threshold alerts, anomaly detection, predictive alerts",
    
    // Tools & Technologies
    gc_tools_title: "Tools & Integrations",
    gc_tool1: "Prometheus",
    gc_tool2: "Loki",
    gc_tool3: "Elasticsearch",
    gc_tool4: "OpenTelemetry",
    gc_tool5: "InfluxDB",
    gc_tool6: "Kubernetes",
    gc_tool7: "CloudWatch",
    gc_tool8: "Docker",
    
    // Our Approach
    gc_approach_title: "Our Approach",
    gc_step1_title: "Assessment",
    gc_step1_desc: "Evaluate your current monitoring setup and identify key metrics and visualization needs.",
    gc_step2_title: "Design",
    gc_step2_desc: "Create custom dashboard layouts and alerting strategies tailored to your team requirements.",
    gc_step3_title: "Deployment",
    gc_step3_desc: "Implement Grafana instances, configure data sources, and deploy dashboards across your organization.",
    gc_step4_title: "Optimization",
    gc_step4_desc: "Fine-tune dashboards and alerts based on user feedback and evolving business needs.",
    
    // Business Benefits
    gc_benefits_title: "Business Benefits",
    gc_benefit1_title: "Improved Visibility",
    gc_benefit1_desc: "Gain comprehensive insights into system performance and business metrics with intuitive visualizations.",
    gc_benefit2_title: "Faster Incident Response",
    gc_benefit2_desc: "Reduce mean time to resolution (MTTR) by 65% with context-rich alerting and troubleshooting panels.",
    gc_benefit3_title: "Better Operational Efficiency",
    gc_benefit3_desc: "Increase team productivity by 45% through automated monitoring and streamlined workflows.",
    gc_benefit4_title: "Enhanced Collaboration",
    gc_benefit4_desc: "Improve cross-team communication with shared dashboards and common data sources.",
    
    // Use Cases
    gc_usecases_title: "Use Cases",
    gc_usecase1_title: "Infrastructure Monitoring",
    gc_usecase1_desc: "Monitor servers, containers, and network infrastructure for optimal performance and availability.",
    gc_usecase2_title: "Application Performance Monitoring",
    gc_usecase2_desc: "Track application metrics, response times, and user experience across all environments.",
    gc_usecase3_title: "Business Analytics Dashboards",
    gc_usecase3_desc: "Visualize business KPIs, revenue metrics, and customer analytics for strategic decision-making.",
    gc_usecase4_title: "DevOps and CI/CD Monitoring",
    gc_usecase4_desc: "Monitor deployment pipelines, build metrics, and development velocity for continuous improvement.",
    
    // Enhanced CTA
    gc_cta_title: "Transform Your Data Visualization",
    gc_cta_desc: "Get focused Grafana consulting to improve signal quality and operational confidence across your entire organization.",
    gc_cta_reason1: "Expert Grafana architects with proven enterprise experience",
    gc_cta_reason2: "Custom dashboards tailored to your specific needs",
    gc_cta_reason3: "Comprehensive training and knowledge transfer",
    gc_cta_button: "Start Your Project",
    gc_cta_demo: "Request Demo"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    
    // Enhanced Hero
    gc_hero_title: "استشارات غرفانا",
    gc_hero_desc: "تصميم لوحات تحكم وتدفقات تنبيه غرفانا لرؤى تشغيلية أفضل وقرارات أسرع.",
    gc_hero_subdesc: "حول بياناتك إلى رؤى قابلة للتنفيذ مع تصورات في الوقت الفعلي تساعد الفرق على مراقبة الأداء وكشف الشذوذ واتخاذ قرارات مستنيرة بشكل أسرع من أي وقت مضى.",
    
    // Why Grafana Matters
    gc_why_title: "لماذا غرفانا مهمة",
    gc_why_card1_title: "تصور البيانات في الوقت الفعلي",
    gc_why_card1_desc: "حول المقاييس المعقدة إلى تصورات بديهية يمكن للفرق فهمها والتصرف بناءً عليها فوراً.",
    gc_why_card2_title: "اتخاذ قرارات أسرع",
    gc_why_card2_desc: "قلل وقت اتخاذ القرار من ساعات إلى دقائق مع لوحات معلومات شاملة توفر سياق تشغيلي كامل.",
    gc_why_card3_title: "كشف المشاكل بشكل استباقي",
    gc_why_card3_desc: "حدد الاتجاهات والشذوذ قبل أن تصبح مشاكل حرجة من خلال التنبيه الذكي والتحليل البصري.",
    
    // Expanded Service Scope
    gc_service_title: "نطاق الخدمة",
    gc_card1_title: "تصميم لوحة التحكم",
    gc_card1_desc: "لوحات تحكم خاصة بالدور والمنصة والتطبيق ورؤية الأعمال.",
    gc_card1_subdesc: "إنشاء لوحات تحكم مخصصة تلبي الاحتياجات المحددة للفرق وأصحاب المصلحة عبر مؤسستك.",
    gc_card1_feature1: "لوحات تحكم تنفيذية مع تتبع مؤشرات الأداء الرئيسية",
    gc_card1_feature2: "طرق عرض مراقبة البنية التحتية التقنية",
    gc_card1_feature3: "لوحات تحكم أداء التطبيقات",
    gc_card1_feature4: "لوحات تحليلات الأعمال والتقارير",
    gc_card1_impact: "الأثر التجاري: 70% أسرع في القرارات القائمة على البيانات وتحسين رضا أصحاب المصلحة.",
    
    gc_card2_title: "التنبيهات وطرق عرض عند الاتصال",
    gc_card2_desc: "تنبيهات قابلة للتنفيذ مع لوحات استكشاف أخطاء غنية بالسياق.",
    gc_card2_subdesc: "تنفيذ أنظمة تنبيه ذكية توفر المعلومات الصحيحة للأشخاص المناسبين في الوقت المناسب.",
    gc_card2_feature1: "تنبيهات متعددة المستويات مع سياسات التصعيد",
    gc_card2_feature2: "لوحات استجابة الحوادث الغنية بالسياق",
    gc_card2_feature3: "تسليم عند الاتصال وتكامل دليل التشغيل",
    gc_card2_feature4: "سير عمل الصمت والاعتراف",
    gc_card2_impact: "الأثر التجاري: 60% تقليل في وقت استجابة الحوادث و 80% أقل تنبيهات كاذبة.",
    
    gc_card3_title: "التقارير والحوكمة",
    gc_card3_desc: "معايير لوحة التحكم المنسقة وسير عمل المراجعة.",
    gc_card3_subdesc: "إنشاء أطر حوكمة تضمن جودة لوحات التحكم والاتساق والامتثال عبر مؤسستك.",
    gc_card3_feature1: "التحكم في إصدارات لوحة التحكم وإدارة التغييرات",
    gc_card3_feature2: "سير عمل المراجعة من الأقران والموافقة",
    gc_card3_feature3: "تحليلات الأداء والاستخدام",
    gc_card3_feature4: "توثيق الامتثال ومسارات التدقيق",
    gc_card3_impact: "الأثر التجاري: 90% اتساق في لوحات التحكم وتحسين الامتثال التنظيمي.",
    
    // Grafana Capabilities
    gc_capabilities_title: "قدرات غرفانا",
    gc_cap1_title: "لوحات التحكم في الوقت الفعلي",
    gc_cap1_desc: "تصور البيانات المباشرة بمعدلات تحديث أقل من الثانية للوعي التشغيلي الفوري.",
    gc_cap1_example: "المقاييس المباشرة، البيانات المتدفقة، التحديثات الفورية",
    gc_cap2_title: "تكامل مصادر البيانات المتعددة",
    gc_cap2_desc: "الاتصال بمصادر بيانات متعددة لرؤية شاملة عبر البنية التحتية بأكملها.",
    gc_cap2_example: "بروميثيوس، لوكي، إيلاستك سيرش، إنفلوكس دي بي",
    gc_cap3_title: "التصورات المخصصة",
    gc_cap3_desc: "مخططات ولوحات مصممة خصيصاً لبياناتك واحتياجات عملك الفريدة.",
    gc_cap3_example: "خرائط الحرارة، المقاييس، لوحات مخصصة، الخرائط الجغرافية",
    gc_cap4_title: "التنبيه المتقدم",
    gc_cap4_desc: "تنبيه ذكي مع قدرات التعلم الآلي والتحليل التنبؤي.",
    gc_cap4_example: "تنبيهات العتب، كشف الشذوذ، التنبيهات التنبؤية",
    
    // Tools & Technologies
    gc_tools_title: "الأدوات والتكاملات",
    gc_tool1: "بروميثيوس",
    gc_tool2: "لوكي",
    gc_tool3: "إيلاستك سيرش",
    gc_tool4: "أوبن تيليمتري",
    gc_tool5: "إنفلوكس دي بي",
    gc_tool6: "كوبرنيتيس",
    gc_tool7: "كلودواتش",
    gc_tool8: "دوكر",
    
    // Our Approach
    gc_approach_title: "نهجنا",
    gc_step1_title: "التقييم",
    gc_step1_desc: "قيم إعداد المراقبة الحالي وحدد المقاييس الرئيسية واحتياجات التصور.",
    gc_step2_title: "التصميم",
    gc_step2_desc: "إنشاء تخطيطات لوحات تحكم واستراتيجيات تنبيه مخصصة لمتطلبات فريقك.",
    gc_step3_title: "النشر",
    gc_step3_desc: "نفذ مثيلات غرفانا، تكوين مصادر البيانات، ونشر لوحات التحكم عبر مؤسستك.",
    gc_step4_title: "التحسين",
    gc_step4_desc: "ضبط لوحات التحكم والتنبيهات بناءً على التغذية الراجعة التشغيلية والاحتياجات المتطورة.",
    
    // Business Benefits
    gc_benefits_title: "الفوائد التجارية",
    gc_benefit1_title: "رؤية محسنة",
    gc_benefit1_desc: "احصل على رؤى شاملة في أداء النظام ومقاييس الأعمال مع تصورات بديهية.",
    gc_benefit2_title: "استجابة حوادث أسرع",
    gc_benefit2_desc: "قلل متوسط وقت الحل بنسبة 65% مع لوحات استجابة حوادث غنية بالسياق ولوحات استكشاف الأخطاء.",
    gc_benefit3_title: "كفاءة تشغيلية أفضل",
    gc_benefit3_desc: "زدد إنتاجية الفريق بنسبة 45% من خلال المراقبة المؤتمتة وسير العمل المبسط.",
    gc_benefit4_title: "تعاون محسن",
    gc_benefit4_desc: "حسن التواصل بين الفرق مع لوحات تحكم مشتركة ومصادر بيانات مشتركة.",
    
    // Use Cases
    gc_usecases_title: "حالات الاستخدام",
    gc_usecase1_title: "مراقبة البنية التحتتية",
    gc_usecase1_desc: "راقب الخوادم والحاويات والبنية التحتية للأداء الأمثل والتوفر.",
    gc_usecase2_title: "مراقبة أداء التطبيقات",
    gc_usecase2_desc: "تتبع مقاييس التطبيق وأوقت الاستجابة وتجربة المستخدم عبر جميع البيئات.",
    gc_usecase3_title: "لوحات تحليلات الأعمال",
    gc_usecase3_desc: "تصور مؤشرات الأعمال ومقاييس الإيرادات وتحليلات العملاء لاتخاذ قرارات استراتيجية.",
    gc_usecase4_title: "مراقبة ديف أوبس والتكامل المستمر/التسليم المستمر",
    gc_usecase4_desc: "راقب خطوط النشر ومقاييس البناء وسرعة التطوير للتحسين المستمر.",
    
    // Enhanced CTA
    gc_cta_title: "حول تصور بياناتك",
    gc_cta_desc: "احصل على استشارات غرفانا مركزة لتحسين جودة الإشارة وثقة التشغيل عبر مؤسستك بأكملها.",
    gc_cta_reason1: "خبراء معماري غرفانا مع خبرة مثبتة في المؤسسات",
    gc_cta_reason2: "لوحات تحكم مخصصة لاحتياجاتك الفريدة",
    gc_cta_reason3: "تدريب شامل ونقل المعرفة",
    gc_cta_button: "ابدأ مشروعك",
    gc_cta_demo: "طلب عرض توضيحي"
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
