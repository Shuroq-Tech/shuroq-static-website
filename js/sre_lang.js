// Translation system for SRE Consultancy page
const translations = {
  en: {
    // Hero Section
    sre_consult_hero_title: "SRE Consultancy",
    sre_consult_hero_desc: "Build a practical SRE program with SLO frameworks, incident processes, and reliability roadmaps aligned to business priorities.",
    sre_consult_hero_subdesc: "Transform your operations from reactive firefighting to proactive reliability engineering, where systems are designed to be resilient, scalable, and continuously improving through data-driven decisions.",
    
    // Why SRE Matters
    sre_consult_why_title: "Why SRE Matters",
    sre_consult_why_card1_title: "Reliability Engineering vs Traditional Operations",
    sre_consult_why_card1_desc: "Shift from reactive incident response to proactive system design that prevents failures before they impact users.",
    sre_consult_why_card2_title: "Reduced Downtime & Better SLAs",
    sre_consult_why_card2_desc: "Achieve measurable reliability targets with error budgets and SLOs that balance innovation with stability.",
    sre_consult_why_card3_title: "Proactive Systems & Automation",
    sre_consult_why_card3_desc: "Eliminate toil through automation and build systems that self-heal, scale, and adapt to changing demands.",
    
    // Service Scope Section
    sre_consult_scope_title: "Service Scope",
    sre_consult_card1_title: "SLO and Error Budget Design",
    sre_consult_card1_desc: "Define measurable service objectives and governance for engineering decisions.",
    sre_consult_card1_subdesc: "Establish clear reliability targets that align with business goals and provide data-driven guidance for engineering investments.",
    sre_consult_card1_feature1: "Service Level Objective (SLO) definition and measurement",
    sre_consult_card1_feature2: "Error budget policies and burn rate monitoring",
    sre_consult_card1_feature3: "SLI (Service Level Indicator) selection and implementation",
    sre_consult_card1_feature4: "Reliability governance and decision frameworks",
    sre_consult_card1_impact: "Business Impact: 85% improvement in service reliability and 60% reduction in customer-impacting incidents.",
    
    sre_consult_card2_title: "Incident Management",
    sre_consult_card2_desc: "Runbook design, escalation policies, and post-incident review practices.",
    sre_consult_card2_subdesc: "Build comprehensive incident response capabilities that minimize downtime and maximize learning from failures.",
    sre_consult_card2_feature1: "Automated runbook design and execution",
    sre_consult_card2_feature2: "Incident escalation and communication protocols",
    sre_consult_card2_feature3: "Post-mortem and blameless review processes",
    sre_consult_card2_feature4: "War room coordination and crisis management",
    sre_consult_card2_impact: "Business Impact: 70% faster incident resolution and 90% reduction in repeat incidents.",
    
    sre_consult_card3_title: "Reliability Improvement Backlog",
    sre_consult_card3_desc: "Prioritized actions that reduce toil and improve platform resilience.",
    sre_consult_card3_subdesc: "Create a systematic approach to eliminating operational toil and building self-healing, resilient systems.",
    sre_consult_card3_feature1: "Toil identification and automation opportunities",
    sre_consult_card3_feature2: "Capacity planning and scaling strategies",
    sre_consult_card3_feature3: "Chaos engineering and failure testing",
    sre_consult_card3_feature4: "Performance optimization and bottleneck elimination",
    sre_consult_card3_impact: "Business Impact: 50% reduction in operational overhead and 3x improvement in system resilience.",
    
    // Core SRE Principles
    sre_consult_principles_title: "Core SRE Principles",
    sre_consult_principle1_title: "Automation",
    sre_consult_principle1_desc: "Eliminate repetitive manual tasks through intelligent automation that scales with your infrastructure.",
    sre_consult_principle1_example: "Auto-remediation, CI/CD, infrastructure as code",
    sre_consult_principle2_title: "Monitoring & Observability",
    sre_consult_principle2_desc: "Gain deep insights into system behavior with comprehensive monitoring and proactive alerting.",
    sre_consult_principle2_example: "SLO tracking, error budgets, system health metrics",
    sre_consult_principle3_title: "Error Budgets",
    sre_consult_principle3_desc: "Balance innovation and stability through data-driven risk management and controlled failure tolerance.",
    sre_consult_principle3_example: "SLO compliance, burn rate monitoring, release policies",
    sre_consult_principle4_title: "Reliability Culture",
    sre_consult_principle4_desc: "Foster a culture of learning, blameless post-mortems, and continuous improvement.",
    sre_consult_principle4_example: "Blameless reviews, learning from failures, knowledge sharing",
    
    // Tools & Technologies
    sre_consult_tools_title: "Tools & Technologies",
    sre_consult_tool1: "Prometheus",
    sre_consult_tool2: "Grafana",
    sre_consult_tool3: "PagerDuty",
    sre_consult_tool4: "Kubernetes",
    sre_consult_tool5: "Terraform",
    sre_consult_tool6: "Jenkins",
    sre_consult_tool7: "Chaos Monkey",
    sre_consult_tool8: "Runbooks",
    
    // Our Approach
    sre_consult_approach_title: "Our Approach",
    sre_consult_step1_title: "Assessment",
    sre_consult_step1_desc: "Evaluate your current reliability posture and identify critical improvement opportunities.",
    sre_consult_step2_title: "Design",
    sre_consult_step2_desc: "Create tailored SRE frameworks, SLOs, and reliability targets aligned with your business goals.",
    sre_consult_step3_title: "Implementation",
    sre_consult_step3_desc: "Deploy monitoring systems, automate processes, and establish incident response capabilities.",
    sre_consult_step4_title: "Continuous Improvement",
    sre_consult_step4_desc: "Refine processes, expand automation, and evolve reliability practices based on operational insights.",
    
    // Business Benefits
    sre_consult_benefits_title: "Business Benefits",
    sre_consult_benefit1_title: "Increased Uptime",
    sre_consult_benefit1_desc: "Achieve 99.9%+ availability through proactive reliability engineering and automated failure recovery.",
    sre_consult_benefit2_title: "Better Incident Response",
    sre_consult_benefit2_desc: "Reduce mean time to resolution (MTTR) by 80% with automated runbooks and coordinated response.",
    sre_consult_benefit3_title: "Reduced Operational Toil",
    sre_consult_benefit3_desc: "Eliminate 70% of repetitive tasks through automation and self-healing systems.",
    sre_consult_benefit4_title: "Enhanced Team Productivity",
    sre_consult_benefit4_desc: "Increase engineering velocity by 3x with reliable infrastructure and streamlined processes.",
    
    // Use Cases
    sre_consult_usecases_title: "Use Cases",
    sre_consult_usecase1_title: "High-Traffic Applications",
    sre_consult_usecase1_desc: "Ensure reliability for applications handling millions of requests with automated scaling and failure recovery.",
    sre_consult_usecase2_title: "Cloud-Native Systems",
    sre_consult_usecase2_desc: "Build resilient microservices architectures with comprehensive observability and self-healing capabilities.",
    sre_consult_usecase3_title: "Enterprise Platforms",
    sre_consult_usecase3_desc: "Establish enterprise-grade reliability standards across complex, multi-team environments.",
    sre_consult_usecase4_title: "Critical Infrastructure",
    sre_consult_usecase4_desc: "Implement zero-downtime deployments and disaster recovery for mission-critical systems.",
    
    // Enhanced CTA
    sre_consult_cta_title: "Transform Your Operations",
    sre_consult_cta_desc: "Move from reactive operations to predictable reliability engineering with expert SRE guidance and proven frameworks.",
    sre_consult_cta_reason1: "Certified SRE consultants with enterprise experience",
    sre_consult_cta_reason2: "Proven SRE frameworks tailored to your needs",
    sre_consult_cta_reason3: "Hands-on implementation and knowledge transfer",
    sre_consult_cta_button: "Start Your SRE Journey",
    sre_consult_cta_demo: "Request Assessment"
  },
  ar: {
    // Hero Section
    sre_consult_hero_title: "استشارات هندسة موثوقية الموقع",
    sre_consult_hero_desc: "ابني برنامج SRE عملي مع أطر SLO، وعمليات الحوادث، والخرائط الطرق للموثوقية المتوافقة مع أولويات العمل.",
    sre_consult_hero_subdesc: "حول عملياتك من مكافحة الحرائق التفاعلية إلى هندسة الموثوقية الاستباقية، حيث يتم تصميم الأنظمة لتكون مرنة وقابلة للتطوير وتتحسن باستمرار من خلال القرارات القائمة على البيانات.",
    
    // Why SRE Matters
    sre_consult_why_title: "لماذا SRE مهم",
    sre_consult_why_card1_title: "هندسة الموثوقية مقابل العمليات التقليدية",
    sre_consult_why_card1_desc: "انتقل من استجابة الحوادث التفاعلية إلى تصميم النظام الاستباقي الذي يمنع الفشل قبل أن يؤثر على المستخدمين.",
    sre_consult_why_card2_title: "تقليل وقت التوقف وتحسين اتفاقيات مستوى الخدمة",
    sre_consult_why_card2_desc: "حقق أهداف موثوقية قابلة للقياس مع ميزانيات الخطأ و SLOs التي توازن بين الابتكار والاستقرار.",
    sre_consult_why_card3_title: "أنظمة استباقية وأتمتة",
    sre_consult_why_card3_desc: "قضِ على العمل المتكرر من خلال الأتمتة وابني أنظمة تلتئم ذاتياً وتتوسع وتتكيف مع المتطلبات المتغيرة.",
    
    // Service Scope Section
    sre_consult_scope_title: "نطاق الخدمة",
    sre_consult_card1_title: "تصميم SLO وميزانية الخطأ",
    sre_consult_card1_desc: "حدد أهداف الخدمة القابلة للقياس والحوكمة لقرارات الهندسة.",
    sre_consult_card1_subdesc: "أنشئ أهداف موثوقية واضحة تتوافق مع أهداف العمل وتوفر إرشادات قائمة على البيانات للاستثمارات الهندسية.",
    sre_consult_card1_feature1: "تعريف وقياس هدف مستوى الخدمة (SLO)",
    sre_consult_card1_feature2: "سياسات ميزانية الخطأ ومراقبة معدل الاحتراق",
    sre_consult_card1_feature3: "اختيار وتنفيذ مؤشر مستوى الخدمة (SLI)",
    sre_consult_card1_feature4: "حوكمة الموثوقية وأطر القرار",
    sre_consult_card1_impact: "الأثر التجاري: 85% تحسين في موثوقية الخدمة و 60% تقليل في الحوادث المؤثرة على العملاء.",
    
    sre_consult_card2_title: "إدارة الحوادث",
    sre_consult_card2_desc: "تصميم دليل التشغيل، وسياسات التصعيد، وممارسات المراجعة بعد الحادث.",
    sre_consult_card2_subdesc: "ابني قدرات استجابة حوادث شاملة تقلل من وقت التوقف وتزيد التعلم من الفشل.",
    sre_consult_card2_feature1: "تصميم وتنفيذ دليل التشغيل المؤتمت",
    sre_consult_card2_feature2: "بروتوكولات تصعيد الحوادث والتواصل",
    sre_consult_card2_feature3: "عمليات المراجعة بعد الحادث وبدون لوم",
    sre_consult_card2_feature4: "تنسيق غرفة الحرب وإدارة الأزمات",
    sre_consult_card2_impact: "الأثر التجاري: 70% أسرع في حل الحوادث و 90% تقليل في الحوادث المتكررة.",
    
    sre_consult_card3_title: "قائمة تحسين الموثوقية",
    sre_consult_card3_desc: "إجراءات أولوية تقلل من العمل المتكرر وتحسن مرونة المنصة.",
    sre_consult_card3_subdesc: "أنشئ نهجاً منهجياً للقضاء على العمل التشغيلي وبناء أنظمة ذاتية الشفاء ومرنة.",
    sre_consult_card3_feature1: "تحديد العمل المتكرر وفرص الأتمتة",
    sre_consult_card3_feature2: "تخطيط السعة واستراتيجيات التوسع",
    sre_consult_card3_feature3: "هندسة الفوضى واختبار الفشل",
    sre_consult_card3_feature4: "تحسين الأداء وإزالة الاختناقات",
    sre_consult_card3_impact: "الأثر التجاري: 50% تقليل في النفقات التشغيلية و 3x تحسن في مرونة النظام.",
    
    // Core SRE Principles
    sre_consult_principles_title: "مبادئ SRE الأساسية",
    sre_consult_principle1_title: "الأتمتة",
    sre_consult_principle1_desc: "قضِ على المهام اليدوية المتكررة من خلال الأتمتة الذكية التي تتوسع مع بنيتك التحتية.",
    sre_consult_principle1_example: "العلاج الذاتي، CI/CD، البنية التحتية كرمز",
    sre_consult_principle2_title: "المراقبة وقابلية الرصد",
    sre_consult_principle2_desc: "احصل على رؤى عميقة في سلوك النظام مع المراقبة الشاملة والإنذار الاستباقي.",
    sre_consult_principle2_example: "تتبع SLO، مراقبة ميزانية الخطأ، مقاييس صحة النظام",
    sre_consult_principle3_title: "ميزانيات الخطأ",
    sre_consult_principle3_desc: "وازن بين الابتكار والاستقرار من خلال إدارة المخاطر القائمة على البيانات وتحمل الفشل المcontrolled.",
    sre_consult_principle3_example: "امتثال SLO، مراقبة معدل الاحتراق، سياسات الإصدار",
    sre_consult_principle4_title: "ثقافة الموثوقية",
    sre_consult_principle4_desc: "عزز ثقافة التعلم، والمراجعات بعد الحادث بدون لوم، والتحسين المستمر.",
    sre_consult_principle4_example: "مراجعات بدون لوم، التعلم من الفشل، مشاركة المعرفة",
    
    // Tools & Technologies
    sre_consult_tools_title: "الأدوات والتقنيات",
    sre_consult_tool1: "بروميثيوس",
    sre_consult_tool2: "جرافانا",
    sre_consult_tool3: "بيجرديوتي",
    sre_consult_tool4: "كوبرنيتيس",
    sre_consult_tool5: "تيرا فورم",
    sre_consult_tool6: "جينكينز",
    sre_consult_tool7: "شوس مونكي",
    sre_consult_tool8: "دليل التشغيل",
    
    // Our Approach
    sre_consult_approach_title: "نهجنا",
    sre_consult_step1_title: "التقييم",
    sre_consult_step1_desc: "قيم وضع الموثوقية الحالي وحدد فرص التحسين الحرجة.",
    sre_consult_step2_title: "التصميم",
    sre_consult_step2_desc: "أنشئ أطر SLOs مخصصة، وأهداف موثوقية متوافقة مع أهداف عملك.",
    sre_consult_step3_title: "التنفيذ",
    sre_consult_step3_desc: "نشر أنظمة المراقبة، وأتمتة العمليات، وإنشاء قدرات استجابة الحوادث.",
    sre_consult_step4_title: "التحسين المستمر",
    sre_consult_step4_desc: "حسّن العمليات، وسعّع الأتمتة، وطور ممارسات الموثوقية بناءً على الرؤى التشغيلية.",
    
    // Business Benefits
    sre_consult_benefits_title: "الفوائد التجارية",
    sre_consult_benefit1_title: "زيادة وقت التشغيل",
    sre_consult_benefit1_desc: "حقق توفر 99.9%+ من خلال هندسة الموثوقية الاستباقية واستعادة الفشل المؤتمتة.",
    sre_consult_benefit2_title: "استجابة حوادث أفضل",
    sre_consult_benefit2_desc: "قلل متوسط وقت الحل بنسبة 80% مع دليل التشغيل المؤتمت والاستجابة المنسقة.",
    sre_consult_benefit3_title: "تقليل العمل التشغيلي",
    sre_consult_benefit3_desc: "قضِ على 70% من المهام المتكررة من خلال الأتمتة والأنظمة ذاتية الشفاء.",
    sre_consult_benefit4_title: "تحسين إنتاجية الفريق",
    sre_consult_benefit4_desc: "زد سرعة الهندسة 3 مرات مع البنية التحتية الموثوقة والعمليات المبسطة.",
    
    // Use Cases
    sre_consult_usecases_title: "حالات الاستخدام",
    sre_consult_usecase1_title: "التطبيقات عالية الزيارات",
    sre_consult_usecase1_desc: "ضمن الموثوقية للتطبيقات التي تتعامل مع ملايين الطلبات مع التوسع المؤتمت واستعادة الفشل.",
    sre_consult_usecase2_title: "الأنظمة السحابية الأصلية",
    sre_consult_usecase2_desc: "ابني هياكل الخدمات المصغرة المرنة مع قابلية الرصد الشاملة والقدرات ذاتية الشفاء.",
    sre_consult_usecase3_title: "منصات المؤسسات",
    sre_consult_usecase3_desc: "أنشئ معايير موثوقية على مستوى المؤسسات عبر البيئات المعقدة متعددة الفرق.",
    sre_consult_usecase4_title: "البنية التحتية الحرجة",
    sre_consult_usecase4_desc: "نفذ عمليات النشر بدون توقف واستعادة الكوارث للأنظمة المهمة للمهمة.",
    
    // Enhanced CTA
    sre_consult_cta_title: "حول عملياتك",
    sre_consult_cta_desc: "انتقل من العمليات التفاعلية إلى هندسة الموثوقية المتوقعة مع إرشاد SRE خبير وأطر مثبتة.",
    sre_consult_cta_reason1: "مستشارو SRE معتمدون مع خبرة في المؤسسات",
    sre_consult_cta_reason2: "أطر SRE مثبتة مصممة لاحتياجاتك",
    sre_consult_cta_reason3: "تنفيذ عملي ونقل المعرفة",
    sre_consult_cta_button: "ابدأ رحلة SRE",
    sre_consult_cta_demo: "طلب تقييم"
  }
};

// Change language function
function changeLanguage(lang){
  // Refactored: shared i18n DOM update logic lives in js/i18n_helper.js.
  window.ShuroqI18n.applyLanguage(lang, translations, { updateNavigation: false, skipMissing: true });
}


// Load English by default
document.addEventListener('DOMContentLoaded', function() {
  changeLanguage(window.ShuroqI18n.getSavedLanguage());
});

// Make translations available globally
window.translations = translations;
