const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    
    // Enhanced Hero
    sm_hero_title: "Service Mesh Consulting",
    sm_hero_desc: "Introduce service mesh architecture to improve traffic management, service security, and policy-driven reliability.",
    sm_hero_subdesc: "Transform your microservices landscape with intelligent traffic management, zero-trust security, and comprehensive observability that enables confident scaling and resilient operations across complex distributed systems.",
    
    // Why Service Mesh Matters
    sm_why_title: "Why Service Mesh Matters",
    sm_why_card1_title: "Microservices Communication Challenges",
    sm_why_card1_desc: "Overcome the complexity of service discovery, load balancing, and failure handling in distributed systems.",
    sm_why_card2_title: "Enhanced Security & mTLS",
    sm_why_card2_desc: "Implement zero-trust security with automatic encryption and identity-based access control.",
    sm_why_card3_title: "Traffic Control & Resilience",
    sm_why_card3_desc: "Gain granular control over traffic flow with canary deployments and intelligent failover mechanisms.",
    
    // Expanded Service Scope
    sm_service_title: "Service Scope",
    sm_card1_title: "Architecture and Rollout Plan",
    sm_card1_desc: "Mesh topology decisions and phased adoption strategy.",
    sm_card1_subdesc: "Design a comprehensive service mesh architecture that scales with your business needs while ensuring minimal disruption to existing services during implementation.",
    sm_card1_feature1: "Mesh topology design and traffic flow optimization",
    sm_card1_feature2: "Phased rollout strategy with risk mitigation",
    sm_card1_feature3: "Performance testing and capacity planning",
    sm_card1_feature4: "Integration with existing infrastructure components",
    sm_card1_impact: "Business Impact: 75% faster service deployment and 90% reduction in communication failures.",
    
    sm_card2_title: "Traffic Controls",
    sm_card2_desc: "Canary routing, retries, and failover policy design.",
    sm_card2_subdesc: "Implement intelligent traffic management that enables safe deployments, gradual rollouts, and automatic recovery from failures without manual intervention.",
    sm_card2_feature1: "Canary deployment strategies and traffic splitting",
    sm_card2_feature2: "Automatic retry mechanisms with circuit breaking",
    sm_card2_feature3: "Failover policies and traffic shifting",
    sm_card2_feature4: "Load balancing and traffic mirroring",
    sm_card2_impact: "Business Impact: 85% reduction in deployment failures and 60% faster incident recovery.",
    
    sm_card3_title: "mTLS and Policy",
    sm_card3_desc: "Secure east-west communication and enforce runtime policies.",
    sm_card3_subdesc: "Establish zero-trust security with automatic encryption and comprehensive policy enforcement that protects data in transit and ensures compliance with security standards.",
    sm_card3_feature1: "Automatic mTLS certificate management",
    sm_card3_feature2: "Identity-based access control and authorization",
    sm_card3_feature3: "Network policies and traffic rules enforcement",
    sm_card3_feature4: "Compliance and audit trail capabilities",
    sm_card3_impact: "Business Impact: 100% encryption in-transit and 95% reduction in security incidents.",
    
    // Core Capabilities
    sm_capabilities_title: "Core Capabilities of Service Mesh",
    sm_cap1_title: "Traffic Management",
    sm_cap1_desc: "Intelligent routing and load balancing for optimal service performance.",
    sm_cap1_example: "Load balancing, traffic splitting, mirroring",
    sm_cap2_title: "Security (mTLS)",
    sm_cap2_desc: "Zero-trust encryption and identity-based access control.",
    sm_cap2_example: "Certificate management, identity policies, SPIFFE",
    sm_cap3_title: "Observability",
    sm_cap3_desc: "Comprehensive monitoring and tracing for distributed systems.",
    sm_cap3_example: "Distributed tracing, metrics collection, health checks",
    sm_cap4_title: "Policy Enforcement",
    sm_cap4_desc: "Access control, rate limiting, resource quotas",
    sm_cap4_example: "Access control, rate limiting, resource quotas",
    
    // Tools & Technologies
    sm_tools_title: "Tools & Technologies",
    sm_tool1: "Istio",
    sm_tool2: "Linkerd",
    sm_tool3: "Consul",
    sm_tool4: "Kubernetes",
    sm_tool5: "Envoy Proxy",
    sm_tool6: "Prometheus",
    sm_tool7: "Grafana",
    
    // Our Approach
    sm_approach_title: "Our Approach",
    sm_step1_title: "Assessment",
    sm_step1_desc: "Evaluate your current microservices architecture and identify service mesh opportunities.",
    sm_step2_title: "Design",
    sm_step2_desc: "Create a tailored service mesh architecture aligned with your business requirements.",
    sm_step3_title: "Pilot Rollout",
    sm_step3_desc: "Implement service mesh in a controlled environment to validate approach.",
    sm_step4_title: "Full Deployment",
    sm_step4_desc: "Scale service mesh across your entire infrastructure with confidence.",
    
    // Business Benefits
    sm_benefits_title: "Business Benefits",
    sm_benefit1_title: "Improved Reliability",
    sm_benefit1_desc: "Achieve 99.9% service availability through intelligent traffic management and automatic failover.",
    sm_benefit2_title: "Enhanced Security",
    sm_benefit2_desc: "Implement zero-trust security with automatic encryption and identity-based access control.",
    sm_benefit3_title: "Better Traffic Control",
    sm_benefit3_desc: "Gain granular control over traffic flow with canary deployments and intelligent routing.",
    sm_benefit4_title: "Reduced Operational Complexity",
    sm_benefit4_desc: "Simplify operations through automation and centralized policy management.",
    
    // Use Cases
    sm_usecases_title: "Use Cases",
    sm_usecase1_title: "Microservices Architectures",
    sm_usecase1_desc: "Enable seamless communication between services in complex distributed systems.",
    sm_usecase2_title: "Kubernetes Environments",
    sm_usecase2_desc: "Optimize traffic flow and security in containerized orchestration platforms.",
    sm_usecase3_title: "Multi-Cloud Deployments",
    sm_usecase3_desc: "Connect services across different cloud providers with consistent networking.",
    sm_usecase4_title: "Enterprise Platforms",
    sm_usecase4_desc: "Scale service mesh across large-scale enterprise environments.",
    
    // Enhanced CTA
    sm_cta_title: "Adopt Service Mesh Safely",
    sm_cta_desc: "Get expert guidance for rollout planning that protects production reliability while maximizing service mesh benefits.",
    sm_cta_reason1: "Certified service mesh architects with production experience",
    sm_cta_reason2: "Proven rollout strategies for zero-downtime deployments",
    sm_cta_reason3: "Comprehensive training and knowledge transfer",
    sm_cta_button: "Start Your Journey",
    sm_cta_demo: "Request Assessment"
  },
  ar: {
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_resources: "الموارد",
    nav_careers: "وظائف",
    nav_contact: "اتصل بنا",
    
    // Enhanced Hero
    sm_hero_title: "استشارات شبكة الخدمة",
    sm_hero_desc: "قدم بنية شبكة خدمة لتحسين إدارة الحركة، أمان الخدمة، والموثوقية القائمة على السياسات.",
    sm_hero_subdesc: "حول منظومة الخدمات المصغرة الخاصة بك مع إدارة ذكية للحركة، وأمان بدون ثقة، وقابلية رصد شامل يمكّن التشغيلات بثقة في الأنظمة الموزعة المعقدة.",
    
    // Why Service Mesh Matters
    sm_why_title: "لماذا شبكة الخدمة مهمة",
    sm_why_card1_title: "تحديات الاتصال الخدمات المصغرة",
    sm_why_card1_desc: "تغلب تعقيد اكتشاف الخدمة، موازنة الحمل، والتعامل مع الفشل في الأنظمة الموزعة.",
    sm_why_card2_title: "الأمان المحسّن ومTLS",
    sm_why_card2_desc: "نفذ أمان بدون ثقة مع التشفير التلقائي والتحكم في الوصول القائم على الهوية.",
    sm_why_card3_title: "تحكم الحركة والمرونة",
    sm_why_card3_desc: "احصل على تحكم دقيق في تدفق الحركة مع عمليات النشر التدريجي والتعافي الذكي للفشل.",
    
    // Expanded Service Scope
    sm_service_title: "نطاق الخدمة",
    sm_card1_title: "الهندسة ونشر الخطة",
    sm_card1_desc: "قرارات طوبولوجيا شبكة الخدمة واستراتيجية التبنيج.",
    sm_card1_subdesc: "صمم تصميم شامل لهندسة شبكة الخدمة تتوسع مع احتياجات عملك مع ضمن الحد الأقل من الإزعاج للخدمات الموجودة أثناء التنفيذ.",
    sm_card1_feature1: "تصميم طوبولوجيا شبكة الخدمة وتحسين تدفق الحركة",
    sm_card1_feature2: "استراتيجية النشر التدريجي مع تخفيف المخاطر",
    sm_card1_feature3: "اختبار الأداء والتخطيط السعة",
    sm_card1_feature4: "التكامل مع مكونات البنية التحتية الموجودة",
    sm_card1_impact: "الأثر التجاري: 75% أسرع في نشر الخدمات و 90% تقليل في فشل الاتصالات.",
    
    sm_card2_title: "ضوابط الحركة",
    sm_card2_desc: "توجيه الكناري، إعادة المحاولات، وتصميم سياسات الفشل.",
    sm_card2_subdesc: "نفذ إدارة حركة ذكية تمكن عمليات النشر التدريجي والتعافي التلقائي من الفشل بدون تدخل يدوي.",
    sm_card2_feature1: "استراتيجيات النشر التدريجي وتقسيم الحركة",
    sm_card2_feature2: "آلية إعادة المحاولات مع كسر الدائرة",
    sm_card2_feature3: "سياسات الفشل والتحويل",
    sm_card2_feature4: "موازنة الحركة وتحويل الحركة",
    sm_card2_impact: "الأثر التجاري: 85% تقليل في فشل النشر و 60% أسرع في استجابة الحوادث.",
    
    sm_card3_title: "mTLS والسياسات",
    sm_card3_desc: "تأمان الاتصالات الشرق-غرب وتطبيق سياسات التشغيل.",
    sm_card3_subdesc: "أنشئ أمان بدون ثقة مع التشفير التلقائي والتحكم في الوصول القائم على الهوية وضمان الامتثال للبيانات في النقل.",
    sm_card3_feature1: "إدارة شهادات mTLS تلقائي",
    sm_card3_feature2: "التحكم في الوصول القائم على الهوية والتفويض",
    sm_card3_feature3: "سياسات الشبكة وقواعد القواعد",
    sm_card3_feature4: "الامتثال والتدقيق",
    sm_card3_impact: "الأثر التجاري: 100% تشفير في النقل و 95% تقليل في الحوادث الأمنية.",
    
    // Core Capabilities
    sm_capabilities_title: "القدرات الأساسية لشبكة الخدمة",
    sm_cap1_title: "إدارة الحركة",
    sm_cap1_desc: "التوجيه الذكي وتوازين الحمل الأمثل لأداء الخدمة.",
    sm_cap1_example: "موازنة الحركة، تقسيم الحركة، المرآة",
    sm_cap2_title: "الأمان (mTLS)",
    sm_cap2_desc: "التشفير التلقائي والتحكم في الوصول القائم على الهوية.",
    sm_cap2_example: "إدارة الشهادات، سياسات الهوية، SPIFFE",
    sm_cap3_title: "قابلية الرصد",
    sm_cap3_desc: "مراقبة شامل للأنظمة الموزعة وتتبع التتبع.",
    sm_cap3_example: "التتبع الموزع، جمع المقاييس، فحوص الحالة",
    sm_cap4_title: "فرض السياسات",
    sm_cap4_desc: "التحكم في الوصول ومعدل المعدلات والموار",
    sm_cap4_example: "التحكم في الوصول، تحديد المعدلات، حصص الموار",
    
    // Tools & Technologies
    sm_tools_title: "الأدوات والتقنيات",
    sm_tool1: "إستيو",
    sm_tool2: "لينكرد",
    sm_tool3: "كونسول",
    sm_tool4: "كوبرنيتيس",
    sm_tool5: "إنفوي بوكسي",
    sm_tool6: "بروميثيوس",
    sm_tool7: "جرافانا",
    
    // Our Approach
    sm_approach_title: "نهجنا",
    sm_step1_title: "التقييم",
    sm_step1_desc: "قيم هندسة الخدمات المصغرة وحدد فرص شبكة الخدمة.",
    sm_step2_title: "التصميم",
    sm_step2_desc: "إنشاء هندسة شبكة خدمة مخصصة تتوافق مع متطلبات عملك.",
    sm_step3_title: "النشر التجريبي",
    sm_step3_desc: "نفذ شبكة الخدمة في بيئة محكوّد للتحقق من النهج.",
    sm_step4_title: "النشر الكامل",
    sm_step4_desc: "وسع شبكة الخدمة عبر بنيتك التحتية بالكامل.",
    
    // Business Benefits
    sm_benefits_title: "الفوائد التجارية",
    sm_benefit1_title: "موثوقية محسنة",
    sm_benefit1_desc: "حقق توفر 99.9% توفر الخدمة من خلال إدارة الحركة الذكية واستعادة الفشل التلقائي.",
    sm_benefit2_title: "أمان محسّن",
    sm_benefit2_desc: "نفذ أمان بدون ثقة مع التشفير التلقائي والتحكم في الوصول القائم على الهوية.",
    sm_benefit3_title: "تحكم أفضل للحركة",
    sm_benefit3_desc: "احصل على تحكم دقيق في تدفق الحركة مع عمليات النشر التدريجي والتعافي الذكي للفشل.",
    sm_benefit4_title: "تقليل التعقيد التشغيلي",
    sm_benefit4_desc: "بسط العمليات من خلال الأتمتة وإدارة مركزي السياسات.",
    
    // Use Cases
    sm_usecases_title: "حالات الاستخدام",
    sm_usecase1_title: "هياكل الخدمات المصغرة",
    sm_usecase1_desc: "تمكين الاتصال السلس بين الخدمات في الأنظمة الموزعة المعقدة.",
    sm_usecase2_title: "بيئات كوبرنيتيس",
    sm_usecase2_desc: "تحسين تدفق الحركة والأمان في منصات الحاوية المنظمة.",
    sm_usecase3_title: "النشر متعدد السحابة",
    sm_usecase3_desc: "ربط الخدمات عبر مقدمي سحابة مختلفة مع شبكة اتصال ثابت.",
    sm_usecase4_title: "منصات المؤسسات",
    sm_usecase4_desc: "وسع شبكة الخدمة عبر البيئات الكبيرة.",
    
    // Enhanced CTA
    sm_cta_title: "تبنى شبكة الخدمة بأمان",
    sm_cta_desc: "احصل على إرشاد خبير لتخطيط النشر الذي يحمي موثوقية الإنتاج مع تعظيم فوائد شبكة الخدمة.",
    sm_cta_reason1: "مستشاركو شبكة خدمة مع خبرة في الإنتاج",
    sm_cta_reason2: "استراتيجيات نشر مثبتة لنشر بدون توقف",
    sm_cta_reason3: "تدريب شامل ونقل المعرفة",
    sm_cta_button: "ابدأ رحلتك",
    sm_cta_demo: "طلب تقييم"
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
