const translations = {
    
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
        qualitytitle:"Quality Engineering Services",
        assurance_hero_description: "Comprehensive quality assurance and testing solutions that ensure excellence at every step of your software development lifecycle",
  assurance_hero_stat1: "Defect Detection Rate",
  assurance_hero_stat2: "Faster Release Cycles",
  assurance_hero_stat3: "Reduced Production Issues",
  philosophy_title: "Quality Assurance Philosophy",
  philosophy_subtitle: "Our approach to quality engineering goes beyond traditional testing to ensure excellence throughout the entire development lifecycle",
  philosophy_item1_title: "Shift-Left Testing",
  philosophy_item1_description: "Integrating quality practices early in the development process to identify and resolve issues before they become costly problems",
  philosophy_item2_title: "Continuous Quality",
  philosophy_item2_description: "Embedding quality checks throughout the CI/CD pipeline to ensure consistent excellence in every release",
  philosophy_item3_title: "User-Centric Approach",
  philosophy_item3_description: "Focusing on end-user experience and business outcomes to deliver solutions that truly meet customer needs",
  philosophy_item4_title: "Data-Driven Quality",
  philosophy_item4_description: "Using analytics and metrics to drive continuous improvement and informed decision-making",
  testing_services_title: "Comprehensive Testing Services",
  testing_services_subtitle: "End-to-end testing solutions covering every aspect of software quality assurance",
  testing_service1_title: "Functional Testing",
  testing_service1_description: "Comprehensive validation of all functional requirements to ensure your application works as intended",
  testing_service1_item1: "Unit testing and integration testing",
  testing_service1_item2: "System testing and end-to-end testing",
  testing_service1_item3: "Regression testing for existing functionality",
  testing_service1_item4: "User acceptance testing (UAT)",
  testing_service1_metric1: "40% faster defect resolution",
  testing_service1_metric2: "95% defect detection rate",
  testing_service2_title: "Performance Testing",
  testing_service2_description: "Ensuring your application performs optimally under various load conditions and user scenarios",
  testing_service2_item1: "Load testing and stress testing",
  testing_service2_item2: "Scalability and capacity planning",
  testing_service2_item3: "Endurance and spike testing",
  testing_service2_item4: "Performance monitoring and optimization",
  testing_service2_metric1: "3x performance improvement",
  testing_service2_metric2: "1M+ concurrent users tested",
  testing_service3_title: "Security Testing",
  testing_service3_description: "Identifying vulnerabilities and ensuring your application meets the highest security standards",
  testing_service3_item1: "Vulnerability assessment and penetration testing",
  testing_service3_item2: "Security code review and analysis",
  testing_service3_item3: "Authentication and authorization testing",
  testing_service3_item4: "Compliance testing (PCI, HIPAA, GDPR)",
  testing_service3_metric1: "100% security compliance",
  testing_service3_metric2: "500+ vulnerabilities identified",
  testing_service4_title: "Automation Testing",
  testing_service4_description: "Implementing robust automated testing frameworks to accelerate testing cycles and improve accuracy",
  testing_service4_item1: "Test automation framework development",
  testing_service4_item2: "Selenium, Appium, and Cypress automation",
  testing_service4_item3: "API testing and microservices testing",
  testing_service4_item4: "Continuous integration testing pipelines",
  testing_service4_metric1: "80% reduction in testing time",
  testing_service4_metric2: "1000+ automated test cases",
  testing_service5_title: "Mobile App Testing",
  testing_service5_description: "Comprehensive testing across devices, platforms, and network conditions to ensure flawless mobile experiences",
  testing_service5_item1: "iOS and Android compatibility testing",
  testing_service5_item2: "Device fragmentation testing",
  testing_service5_item3: "Network and performance testing",
  testing_service5_item4: "Usability and accessibility testing",
  testing_service5_metric1: "500+ device combinations",
  testing_service5_metric2: "4.8/5 user satisfaction",
  testing_service6_title: "API Testing",
  testing_service6_description: "Thorough validation of APIs and microservices to ensure seamless integration and data flow",
  testing_service6_item1: "RESTful and SOAP API testing",
  testing_service6_item2: "API performance and load testing",
  testing_service6_item3: "Contract testing and documentation",
  testing_service6_item4: "Microservices integration testing",
  testing_service6_metric1: "1000+ APIs validated",
  testing_service6_metric2: "Sub-second response times",
  testing_service7_title: "User Acceptance Testing (UAT)",
  testing_service7_description: "Coordinating with stakeholders to ensure the solution meets business requirements and user expectations",
  testing_service7_item1: "UAT planning and test case design",
  testing_service7_item2: "Stakeholder coordination and training",
  testing_service7_item3: "Business requirement validation",
  testing_service7_item4: "Go-live readiness assessment",
  testing_service7_metric1: "95% stakeholder approval",
  testing_service7_metric2: "200+ users trained",
  quality_processes_title: "Quality Processes & Methodology",
  quality_processes_subtitle: "Structured processes and methodologies that ensure consistent quality delivery",
  process_step1_title: "Test Strategy & Planning",
  process_step1_description: "Comprehensive test planning aligned with business objectives and technical requirements",
  process_step1_item1: "Risk-based test approach",
  process_step1_item2: "Resource planning and allocation",
  process_step1_item3: "Test environment setup",
  process_step1_item4: "Success criteria definition",
  process_step2_title: "Test Case Design & Management",
  process_step2_description: "Creating comprehensive test cases that cover all functional and non-functional requirements",
  process_step2_item1: "Requirement traceability matrix",
  process_step2_item2: "Test case documentation",
  process_step2_item3: "Test data management",
  process_step2_item4: "Version control and maintenance",
  process_step3_title: "Test Execution & Reporting",
  process_step3_description: "Systematic test execution with detailed reporting and real-time visibility",
  process_step3_item1: "Automated and manual execution",
  process_step3_item2: "Real-time dashboards",
  process_step3_item3: "Detailed defect reporting",
  process_step3_item4: "Progress tracking and metrics",
  process_step4_title: "Defect Tracking & Management",
  process_step4_description: "Comprehensive defect lifecycle management from identification to resolution",
  process_step4_item1: "Defect classification and prioritization",
  process_step4_item2: "Root cause analysis",
  process_step4_item3: "Resolution tracking",
  process_step4_item4: "Quality metrics and KPIs",
  process_step5_title: "Continuous Testing in CI/CD",
  process_step5_description: "Integrating automated testing into continuous integration and deployment pipelines",
  process_step5_item1: "Pipeline integration",
  process_step5_item2: "Parallel test execution",
  process_step5_item3: "Automated quality gates",
  process_step5_item4: "Release readiness assessment",
  tools_title: "Tools & Frameworks",
  tools_subtitle: "Industry-leading tools and custom frameworks to deliver exceptional quality assurance",
  tools_category1_title: "Automation Tools",
  tools_category1_item1: "Selenium WebDriver",
  tools_category1_item2: "Appium",
  tools_category1_item3: "Cypress",
  tools_category1_item4: "Playwright",
  tools_category1_item5: "Robot Framework",
  tools_category2_title: "Performance Tools",
  tools_category2_item1: "JMeter",
  tools_category2_item2: "LoadRunner",
  tools_category2_item3: "K6",
  tools_category2_item4: "Gatling",
  tools_category2_item5: "BlazeMeter",
  tools_category3_title: "Security Tools",
  tools_category3_item1: "OWASP ZAP",
  tools_category3_item2: "Burp Suite",
  tools_category3_item3: "Nessus",
  tools_category3_item4: "Veracode",
  tools_category3_item5: "Checkmarx",
  tools_category4_title: "Custom Frameworks",
  tools_category4_item1: "Shuroq Test Framework",
  tools_category4_item2: "Mobile Test Suite",
  tools_category4_item3: "API Test Platform",
  tools_category4_item4: "Performance Dashboard",
  tools_category4_item5: "CI/CD Integration Kit",
  benefits_title: "Benefits of Our Quality Engineering",
  benefits_subtitle: "Transform your software development with comprehensive quality assurance that delivers measurable results",
  benefit1_title: "Reduced Defects & Production Issues",
  benefit1_description: "Early detection and prevention of defects reduces production issues by up to 85%, ensuring stable and reliable applications",
  benefit1_label: "Fewer Production Issues",
  benefit2_title: "Faster Release Cycles",
  benefit2_description: "Automated testing and continuous quality practices accelerate release cycles by up to 60% while maintaining quality standards",
  benefit2_label: "Faster Releases",
  benefit3_title: "Enhanced User Satisfaction",
  benefit3_description: "Comprehensive testing ensures flawless user experiences, leading to higher customer satisfaction and retention rates",
  benefit3_label: "User Satisfaction",
  benefit4_title: "Cost Savings",
  benefit4_description: "Early defect detection and automated testing reduce overall development costs by up to 40% through efficient resource utilization",
  benefit4_label: "Cost Reduction",
  cta_title: "Ensure Quality Excellence in Your Software",
  cta_description: "Let's discuss how our comprehensive quality engineering services can transform your development process",
  cta_button1: "Get Quality Assessment",
  cta_button2: "Back to Services"
    },
    ar:{
        nav_aboutus: "معلومات عنا",
    nav_services:"الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
        qualitytitle:"خدمات هندسة الجودة",
        assurance_hero_description: "حلول شاملة لضمان الجودة والاختبار تضمان التميز في كل خطوة من دورة حياة تطوير البرمجيات",
  assurance_hero_stat1: "معدل اكتشاف العيوب",
  assurance_hero_stat2: "دورات إصدار أسرع",
  assurance_hero_stat3: "انخفاض مشاكل الإنتاج",
  philosophy_title: "فلسفة ضمان الجودة",
  philosophy_subtitle: "نهجنا في هندسة الجودة يتجاوز الاختبار التقليدي لضمان التميز طوال دورة التطوير بأكملها",
  philosophy_item1_title: "اختبار التحول إلى اليسار",
  philosophy_item1_description: "دمج ممارسات الجودة مبكرًا في عملية التطوير لتحديد المشكلات وحلها قبل أن تصبح مشكلات مكلفة",
  philosophy_item2_title: "جودة مستمرة",
  philosophy_item2_description: "تضمين فحوص الجودة في خط أنابيب CI/CD لضمان التميز المستمر في كل إصدار",
  philosophy_item3_title: "نهج يركز على المستخدم",
  philosophy_item3_description: "التركيز على تجربة المستخدم النهائي ونتائج الأعمال لتقديم حلول تلبي احتياجات العملاء حقًا",
  philosophy_item4_title: "جودة مدفوعة بالبيانات",
  philosophy_item4_description: "استخدام التحليلات والمقاييس لدفع التحسين المستمر واتخاذ القرارات المستنيرة",
  testing_services_title: "خدمات اختبار شاملة",
  testing_services_subtitle: "حلول اختبار شاملة تغطي كل جانب من جوانب ضمان جودة البرمجيات",
  testing_service1_title: "اختبار الوظائف",
  testing_service1_description: "التحقق الشامل من جميع المتطلبات الوظيفية لضمان عمل التطبيق كما هو مقصود",
  testing_service1_item1: "اختبار الوحدات واختبار التكامل",
  testing_service1_item2: "اختبار النظام والاختبار الشامل",
  testing_service1_item3: "اختبار الانحدار للوظائف الحالية",
  testing_service1_item4: "اختبار قبول المستخدم (UAT)",
  testing_service1_metric1: "حل أسرع بنسبة 40٪ للعيوب",
  testing_service1_metric2: "معدل اكتشاف عيوب 95٪",
  testing_service2_title: "اختبار الأداء",
  testing_service2_description: "ضمان أداء التطبيق بشكل أمثل تحت ظروف تحميل مختلفة وسيناريوهات المستخدم",
  testing_service2_item1: "اختبار التحميل واختبار الضغط",
  testing_service2_item2: "التخطيط للتوسع والقدرة",
  testing_service2_item3: "اختبار التحمل واختبار الذروة",
  testing_service2_item4: "مراقبة الأداء والتحسين",
  testing_service2_metric1: "تحسين أداء بمقدار 3 أضعاف",
  testing_service2_metric2: "اختبار أكثر من 1 مليون مستخدم متزامن",
  testing_service3_title: "اختبار الأمان",
  testing_service3_description: "تحديد الثغرات وضمان تطبيقك يلبي أعلى معايير الأمان",
  testing_service3_item1: "تقييم الثغرات واختبار الاختراق",
  testing_service3_item2: "مراجعة وتحليل كود الأمان",
  testing_service3_item3: "اختبار المصادقة والتفويض",
  testing_service3_item4: "اختبار الامتثال (PCI، HIPAA، GDPR)",
  testing_service3_metric1: "امتثال أمان بنسبة 100٪",
  testing_service3_metric2: "تم تحديد أكثر من 500 ثغرة",
  testing_service4_title: "اختبار الأتمتة",
  testing_service4_description: "تنفيذ أطر اختبار آلية قوية لتسريع دورات الاختبار وتحسين الدقة",
  testing_service4_item1: "تطوير أطر أتمتة الاختبار",
  testing_service4_item2: "أتمتة Selenium و Appium و Cypress",
  testing_service4_item3: "اختبار واجهات البرمجة واختبار الخدمات الصغيرة",
  testing_service4_item4: "خطوط أنابيب اختبار التكامل المستمر",
  testing_service4_metric1: "تقليل وقت الاختبار بنسبة 80٪",
  testing_service4_metric2: "أكثر من 1000 حالة اختبار آلية",
  testing_service5_title: "اختبار تطبيقات الجوال",
  testing_service5_description: "اختبار شامل عبر الأجهزة والمنصات وظروف الشبكة لضمان تجارب جوال خالية من العيوب",
  testing_service5_item1: "اختبار توافق iOS و Android",
  testing_service5_item2: "اختبار تجزئة الأجهزة",
  testing_service5_item3: "اختبار الشبكة والأداء",
  testing_service5_item4: "اختبار سهولة الاستخدام وإمكانية الوصول",
  testing_service5_metric1: "أكثر من 500 تركيبة جهاز",
  testing_service5_metric2: "رضا المستخدم 4.8/5",
  testing_service6_title: "اختبار واجهات البرمجة",
  testing_service6_description: "تحقق شامل من واجهات البرمجة والخدمات الصغيرة لضمان التكامل السلس وتدفق البيانات",
  testing_service6_item1: "اختبار واجهات RESTful و SOAP",
  testing_service6_item2: "اختبار أداء وعبء واجهات البرمجة",
  testing_service6_item3: "اختبار العقد والتوثيق",
  testing_service6_item4: "اختبار تكامل الخدمات الصغيرة",
  testing_service6_metric1: "تم التحقق من أكثر من 1000 واجهة برمجة",
  testing_service6_metric2: "أوقات استجابة أقل من ثانية",
  testing_service7_title: "اختبار قبول المستخدم (UAT)",
  testing_service7_description: "التنسيق مع أصحاب المصلحة لضمان أن الحل يلبي متطلبات الأعمال وتوقعات المستخدم",
  testing_service7_item1: "تخطيط UAT وتصميم حالات الاختبار",
  testing_service7_item2: "تنسيق وتدريب أصحاب المصلحة",
  testing_service7_item3: "التحقق من متطلبات الأعمال",
  testing_service7_item4: "تقييم جاهزية الإطلاق",
  testing_service7_metric1: "موافقة أصحاب المصلحة بنسبة 95٪",
  testing_service7_metric2: "تدريب أكثر من 200 مستخدم",
  quality_processes_title: "عمليات ومنهجيات الجودة",
  quality_processes_subtitle: "عمليات ومنهجيات منظمة تضمان تسليم جودة متسقة",
  process_step1_title: "إستراتيجية وتخطيط الاختبار",
  process_step1_description: "تخطيط اختبار شامل يتماشى مع أهداف الأعمال والمتطلبات الفنية",
  process_step1_item1: "نهج اختبار قائم على المخاطر",
  process_step1_item2: "تخطيط الموارد وتخصيصها",
  process_step1_item3: "إعداد بيئة الاختبار",
  process_step1_item4: "تعريف معايير النجاح",
  process_step2_title: "تصميم وإدارة حالات الاختبار",
  process_step2_description: "إنشاء حالات اختبار شاملة تغطي جميع المتطلبات الوظيفية وغير الوظيفية",
  process_step2_item1: "مصفوفة تتبع المتطلبات",
  process_step2_item2: "توثيق حالات الاختبار",
  process_step2_item3: "إدارة بيانات الاختبار",
  process_step2_item4: "التحكم في الإصدار والصيانة",
  process_step3_title: "تنفيذ الاختبار وإعداد التقارير",
  process_step3_description: "تنفيذ منهجي للاختبار مع تقارير مفصلة ورؤية في الوقت الفعلي",
  process_step3_item1: "تنفيذ آلي ويدوي",
  process_step3_item2: "لوحات تحكم في الوقت الفعلي",
  process_step3_item3: "تقارير عيوب مفصلة",
  process_step3_item4: "تتبع التقدم والمقاييس",
  process_step4_title: "تتبع وإدارة العيوب",
  process_step4_description: "إدارة دورة حياة العيوب الشاملة من التعريف إلى الحل",
  process_step4_item1: "تصنيف العيوب وتحديد أولوياتها",
  process_step4_item2: "تحليل السبب الجذري",
  process_step4_item3: "تتبع الحل",
  process_step4_item4: "مقاييس الجودة ومؤشرات الأداء الرئيسية",
  process_step5_title: "اختبار مستمر في CI/CD",
  process_step5_description: "دمج الاختبار الآلي في خطوط أنابيب التكامل والنشر المستمر",
  process_step5_item1: "تكامل خطوط الأنابيب",
  process_step5_item2: "تنفيذ اختبار متوازي",
  process_step5_item3: "بوابات جودة آلية",
  process_step5_item4: "تقييم جاهزية الإصدار",
  tools_title: "الأدوات والأطر",
  tools_subtitle: "أدوات رائدة في الصناعة وأطر مخصصة لتقديم ضمان جودة استثنائي",
  tools_category1_title: "أدوات الأتمتة",
  tools_category1_item1: "Selenium WebDriver",
  tools_category1_item2: "Appium",
  tools_category1_item3: "Cypress",
  tools_category1_item4: "Playwright",
  tools_category1_item5: "Robot Framework",
  tools_category2_title: "أدوات الأداء",
  tools_category2_item1: "JMeter",
  tools_category2_item2: "LoadRunner",
  tools_category2_item3: "K6",
  tools_category2_item4: "Gatling",
  tools_category2_item5: "BlazeMeter",
  tools_category3_title: "أدوات الأمان",
  tools_category3_item1: "OWASP ZAP",
  tools_category3_item2: "Burp Suite",
  tools_category3_item3: "Nessus",
  tools_category3_item4: "Veracode",
  tools_category3_item5: "Checkmarx",
  tools_category4_title: "أطر مخصصة",
  tools_category4_item1: "إطار اختبار شروق",
  tools_category4_item2: "مجموعة اختبار الجوال",
  tools_category4_item3: "منصة اختبار واجهات البرمجة",
  tools_category4_item4: "لوحة تحكم الأداء",
  tools_category4_item5: "مجموعة تكامل CI/CD",
  benefits_title: "فوائد هندسة الجودة لدينا",
  benefits_subtitle: "حوّل تطوير برمجياتك بضمان جودة شامل يحقق نتائج قابلة للقياس",
  benefit1_title: "تقليل العيوب ومشاكل الإنتاج",
  benefit1_description: "الكشف المبكر عن العيوب والوقاية منها يقلل من مشاكل الإنتاج بنسبة تصل إلى 85٪، مما يضمن تطبيقات مستقرة وموثوقة",
  benefit1_label: "مشاكل إنتاج أقل",
  benefit2_title: "دورات إصدار أسرع",
  benefit2_description: "الاختبار الآلي وممارسات الجودة المستمرة تسرع دورات الإصدار بنسبة تصل إلى 60٪ مع الحفاظ على معايير الجودة",
  benefit2_label: "إصدارات أسرع",
  benefit3_title: "تحسين رضا المستخدم",
  benefit3_description: "الاختبار الشامل يضمن تجارب مستخدم خالية من العيوب، مما يؤدي إلى ارتفاع رضا العملاء ومعدلات الاحتفاظ",
  benefit3_label: "رضا المستخدم",
  benefit4_title: "توفير التكاليف",
  benefit4_description: "الكشف المبكر عن العيوب والاختبار الآلي يقلل من تكاليف التطوير الإجمالية بنسبة تصل إلى 40٪ من خلال الاستخدام الفعال للموارد",
  benefit4_label: "تخفيض التكاليف",
  cta_title: "ضمان التميز في جودة برمجياتك",
  cta_description: "لنتحدث عن كيفية تحويل خدمات هندسة الجودة الشاملة لدينا لعملية التطوير الخاصة بك",
  cta_button1: "احصل على تقييم الجودة",
  cta_button2: "العودة إلى الخدمات"
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
