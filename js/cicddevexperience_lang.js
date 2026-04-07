// Translation system for CI/CD & Dev Experience page
const translations = {
  en: {
    // Hero Section
    herotitle: "CI/CD & Dev Experience",
    heropara: "Optimize developer workflows with modern CI/CD pipelines and enhanced developer experience",
    pipeline_feature: "Pipeline Optimization",
    devex_feature: "Developer Experience",
    deployment_feature: "Deployment Strategies",
    
    // Pipeline Section
    pipeline_title: "Pipeline Optimization",
    pipeline_para: "Build fast, reliable CI/CD pipelines that accelerate delivery and reduce friction",
    pipeline_approach_title: "Modern Pipeline Architecture",
    pipeline_approach_para: "We design and implement modern CI/CD pipelines that prioritize speed, reliability, and developer experience. Our pipeline architecture includes automated testing, parallel execution, intelligent caching, and comprehensive monitoring. We ensure your pipelines scale with your organization while maintaining security and compliance standards.",
    pipeline_optimization_title: "Performance Optimization",
    pipeline_optimization_para: "Our optimization approach focuses on reducing build times, improving test coverage, and accelerating deployment cycles. We implement advanced caching strategies, parallel processing, and intelligent resource allocation to ensure your pipelines run at maximum efficiency while maintaining quality and security standards.",
    
    // Pipeline Features
    pipeline_features_title: "Pipeline Features",
    parallel_title: "Parallel Execution:",
    parallel_desc: "Run multiple stages concurrently for speed",
    caching_title: "Smart Caching:",
    caching_desc: "Intelligent dependency and artifact caching",
    testing_title: "Automated Testing:",
    testing_desc: "Comprehensive test automation at every stage",
    monitoring_title: "Real-time Monitoring:",
    monitoring_desc: "Live pipeline status and performance metrics",
    security_title: "Security Scanning:",
    security_desc: "Built-in vulnerability and compliance checks",
    
    // Pipeline Technologies
    pipeline_tech_title: "Pipeline Technologies",
    tech_jenkins: "Jenkins",
    tech_github: "GitHub Actions",
    tech_gitlab: "GitLab CI",
    tech_azure: "Azure DevOps",
    tech_circleci: "CircleCI",
    
    // Pipeline Benefits
    pipeline_benefits_title: "Benefits",
    pipeline_benefit1_title: "70% Faster Builds",
    pipeline_benefit1_desc: "Optimized pipelines reduce build times significantly",
    pipeline_benefit2_title: "Early Bug Detection",
    pipeline_benefit2_desc: "Automated testing catches issues before production",
    pipeline_benefit3_title: "Higher Quality",
    pipeline_benefit3_desc: "Consistent quality gates ensure reliable releases",
    
    // Deployment Section
    deployment_title: "Deployment Strategies",
    deployment_para: "Advanced deployment patterns that enable zero-downtime releases and rapid rollback",
    deployment_approach_title: "Strategic Deployment Planning",
    deployment_approach_para: "We implement advanced deployment strategies that balance speed, safety, and reliability. Our approach includes blue-green deployments, canary releases, rolling updates, and automated rollback capabilities. We ensure your deployment process minimizes risk while maximizing deployment frequency and reliability.",
    deployment_safety_title: "Safety and Reliability",
    deployment_safety_para: "Safety is paramount in our deployment strategies. We implement comprehensive monitoring, automated rollback triggers, health checks, and gradual traffic shifting. Our approach ensures that any issues are detected early and resolved quickly with minimal impact on users.",
    
    // Deployment Strategies
    deployment_strategies_title: "Deployment Patterns",
    bluegreen_title: "Blue-Green:",
    bluegreen_desc: "Zero-downtime deployments with instant rollback",
    canary_title: "Canary:",
    canary_desc: "Gradual rollout with real-time monitoring",
    rolling_title: "Rolling:",
    rolling_desc: "Incremental updates with load balancing",
    feature_flags_title: "Feature Flags:",
    feature_flags_desc: "Dynamic feature toggling for controlled releases",
    rollback_title: "Automated Rollback:",
    rollback_desc: "Instant recovery on failure detection",
    
    // Deployment Tools
    deployment_tech_title: "Deployment Tools",
    deploy_kubernetes: "Kubernetes",
    deploy_argocd: "Argo CD",
    deploy_flux: "Flux",
    deploy_helm: "Helm",
    deploy_launchdarkly: "LaunchDarkly",
    
    // Deployment Benefits
    deployment_benefits_title: "Benefits",
    deployment_benefit1_title: "Zero Downtime",
    deployment_benefit1_desc: "Advanced strategies ensure seamless user experience",
    deployment_benefit2_title: "Instant Rollback",
    deployment_benefit2_desc: "Quick recovery from deployment failures",
    deployment_benefit3_title: "Reduced Risk",
    deployment_benefit3_desc: "Gradual rollouts minimize failure impact",
    
    // Developer Experience Section
    devex_title: "Developer Experience Enhancement",
    devex_para: "Create workflows and tools that developers love to use every day",
    devex_approach_title: "Developer-Centric Design",
    devex_approach_para: "We put developers at the center of our CI/CD and DevEx strategy. Our approach focuses on understanding developer pain points, automating repetitive tasks, and creating intuitive workflows. We ensure that every tool and process enhances productivity while reducing cognitive load and frustration.",
    devex_productivity_title: "Productivity and Satisfaction",
    devex_productivity_para: "Our DevEx solutions directly impact developer productivity and job satisfaction. We implement streamlined workflows, integrated development environments, automated documentation, and real-time feedback mechanisms. The result is happier, more productive developers who can focus on creating value rather than fighting with tools.",
    
    // DevEx Features
    devex_features_title: "DevEx Enhancements",
    ide_title: "Integrated IDE:",
    ide_desc: "Pre-configured development environments",
    templates_title: "Project Templates:",
    templates_desc: "Standardized project scaffolding",
    documentation_title: "Auto-Documentation:",
    documentation_desc: "Generated documentation from code",
    feedback_title: "Real-time Feedback:",
    feedback_desc: "Instant build and test results",
    collaboration_title: "Team Collaboration:",
    collaboration_desc: "Integrated code review and communication",
    
    // DevEx Technologies
    devex_tech_title: "DevEx Tools",
    devex_vscode: "VS Code",
    devex_intellij: "IntelliJ",
    devex_docker: "Docker Desktop",
    devex_k9s: "Lens",
    devex_postman: "Postman",
    
    // DevEx Benefits
    devex_benefits_title: "Benefits",
    devex_benefit1_title: "80% Developer Satisfaction",
    devex_benefit1_desc: "Tools and workflows developers actually love",
    devex_benefit2_title: "50% Faster Onboarding",
    devex_benefit2_desc: "New developers productive from day one",
    devex_benefit3_title: "40% More Code Time",
    devex_benefit3_desc: "Reduced context switching and tool friction",
    
    // CTA Section
    cta_title: "Ready to Transform Your CI/CD & Developer Experience?",
    cta_description: "Let's discuss how our CI/CD and DevEx expertise can accelerate your delivery and delight your developers",
    cta_button: "Optimize Your Development Workflow"
  },
  ar: {
    // Hero Section
    herotitle: "التكامل المستمر/التسليم المستمر وتجربة المطور",
    heropara: "قم بتحسين سير عمل المطورين باستخدام خطوط التكامل المستمر/التسليم المستمر الحديثة وتجربة المطور المحسنة",
    pipeline_feature: "تحسين خط الأنابيب",
    devex_feature: "تجربة المطور",
    deployment_feature: "استراتيجيات النشر",
    
    // Pipeline Section
    pipeline_title: "تحسين خط الأنابيب",
    pipeline_para: "ابني خطوط تكامل مستمر/تسليم مستمر سريعة وموثوقة لتسريع التسليم وتقليل الاحتكاك",
    pipeline_approach_title: "هندسة خطوط الأنابيب الحديثة",
    pipeline_approach_para: "نصمم ونطبق خطوط تكامل مستمر/تسليم مستمر حديثة تعطي الأولوية للسرعة والموثوقية وتجربة المطور. تشمل هندسة خطوط الأنابيب لدينا الاختبار المؤتمت، والتنفيذ المتوازي، والتخزين المؤقت الذكي، والمراقبة الشاملة. نضمن أن خطوط الأنابيب الخاصة بك تتوسع مع مؤسستك مع الحفاظ على معايير الأمان والامتثال.",
    pipeline_optimization_title: "تحسين الأداء",
    pipeline_optimization_para: "يركز نهج التحسين لدينا على تقليل أوقات البناء، وتحسين تغطية الاختبار، وتسريع دورات النشر. نطبق استراتيجيات التخزين المؤقت المتقدمة، والمعالجة المتوازية، وتخصيص الموارد الذكي لضمان تشغيل خطوط الأنابيب لديك بأقصى كفاءة مع الحفاظ على معايير الجودة والأمان.",
    
    // Pipeline Features
    pipeline_features_title: "ميزات خط الأنابيب",
    parallel_title: "التنفيذ المتوازي:",
    parallel_desc: "تشغيل مراحل متعددة بشكل متزامن للسرعة",
    caching_title: "التخزين المؤقت الذكي:",
    caching_desc: "التخزين المؤقت الذكي للاعتماديات والمصنوعات",
    testing_title: "الاختبار المؤتمت:",
    testing_desc: "أتمتة الاختبار الشاملة في كل مرحلة",
    monitoring_title: "المراقبة في الوقت الفعلي:",
    monitoring_desc: "حالة خط الأنابيب ومقاييس الأداء المباشرة",
    security_title: "مسح الأمان:",
    security_desc: "فحص الثغرات والامتثال المدمج",
    
    // Pipeline Technologies
    pipeline_tech_title: "تقنيات خط الأنابيب",
    tech_jenkins: "جينكينز",
    tech_github: "إجراءات جيت هب",
    tech_gitlab: "جيت لاب CI",
    tech_azure: "أزور ديف أوبس",
    tech_circleci: "سيركل CI",
    
    // Pipeline Benefits
    pipeline_benefits_title: "الفوائد",
    pipeline_benefit1_title: "بناء أسرع بنسبة 70%",
    pipeline_benefit1_desc: "خطوط الأنابيب المحسنة تقلل أوقات البناء بشكل كبير",
    pipeline_benefit2_title: "اكتشاف الأخطاء المبكر",
    pipeline_benefit2_desc: "الاختبار المؤتمت يكتشف المشاكل قبل الإنتاج",
    pipeline_benefit3_title: "جودة أعلى",
    pipeline_benefit3_desc: "بوابات الجودة المتسقة تضمن إصدارات موثوقة",
    
    // Deployment Section
    deployment_title: "استراتيجيات النشر",
    deployment_para: "أنماط نشر متقدمة تتيح إصدارات بدون توقف والتراجع السريع",
    deployment_approach_title: "تخطيط النشر الاستراتيجي",
    deployment_approach_para: "نطبق استراتيجيات نشر متقدمة توازن بين السرعة والسلامة والموثوقية. يشمل نهجنا عمليات النشر الأزرق-الأخضر، والإصدارات الكنارية، والتحديثات المتدرجة، وقدرات التراجع المؤتمت. نضمن أن عملية النشر لديك تقلل المخاطر مع تعظيم تكرار النشر والموثوقية.",
    deployment_safety_title: "السلامة والموثوقية",
    deployment_safety_para: "السلامة لها الأولوية القصوى في استراتيجيات النشر لدينا. نطبق مراقبة شاملة، ومشغلات التراجع المؤتمت، وفحوصات السلامة، ونقل الحركة التدريجي. يضمن نهجنا أن أي مشاكل يتم اكتشافها مبكراً وحلها بسرعة مع تأثير ضئيل على المستخدمين.",
    
    // Deployment Strategies
    deployment_strategies_title: "أنماط النشر",
    bluegreen_title: "الأزرق-الأخضر:",
    bluegreen_desc: "عمليات نشر بدون توقف مع تراجع فوري",
    canary_title: "الكناري:",
    canary_desc: "إطلاق تدريجي مع مراقبة في الوقت الفعلي",
    rolling_title: "المتدرج:",
    rolling_desc: "تحديثات تدريجية مع موازنة التحميل",
    feature_flags_title: "أعلامات الميزات:",
    feature_flags_desc: "تبديل الميزات الديناميكي للإصدارات الم контролة",
    rollback_title: "التراجع المؤتمت:",
    rollback_desc: "الاسترداد الفوري عند اكتشاف الفشل",
    
    // Deployment Tools
    deployment_tech_title: "أدوات النشر",
    deploy_kubernetes: "كوبرنيتيز",
    deploy_argocd: "أرغو CD",
    deploy_flux: "فلكس",
    deploy_helm: "هيلم",
    deploy_launchdarkly: "لانش داركلي",
    
    // Deployment Benefits
    deployment_benefits_title: "الفوائد",
    deployment_benefit1_title: "بدون توقف",
    deployment_benefit1_desc: "الاستراتيجيات المتقدمة تضمن تجربة مستخدم سلسة",
    deployment_benefit2_title: "تراجع فوري",
    deployment_benefit2_desc: "استعادة سريعة من فشل النشر",
    deployment_benefit3_title: "تقليل المخاطر",
    deployment_benefit3_desc: "الإطلاقات التدريجية تقلل من تأثير الفشل",
    
    // Developer Experience Section
    devex_title: "تحسين تجربة المطور",
    devex_para: "إنشاء سير عمل وأدوات يحب المطورون استخدامها يومياً",
    devex_approach_title: "تصميم يركز على المطور",
    devex_approach_para: "نضع المطورين في مركز استراتيجيتنا للتكامل المستمر/التسليم المستمر وتجربة المطور. يركز نهجنا على فهم نقاط ألم المطورين، وأتمتة المهام المتكررة، وإنشاء سير عمل بديهي. نضمن أن كل أداة وعملية تعزز الإنتاجية مع تقليل العبء المعرفي والإحباط.",
    devex_productivity_title: "الإنتاجية والرضا",
    devex_productivity_para: "حلول تجربة المطور لدينا تؤثر بشكل مباشر على إنتاجية المطور ورضاه الوظيفي. ننفذ سير عمل مبسط، وبيئات تطوير متكاملة، وتوثيق مؤتمت، وآليات تغذية راجعة في الوقت الفعلي. النتيجة هي مطورون أكثر سعادة وإنتاجية يمكنهم التركيز على خلق القيمة بدلاً من القتال مع الأدوات.",
    
    // DevEx Features
    devex_features_title: "تحسينات تجربة المطور",
    ide_title: "بيئة التطوير المتكاملة:",
    ide_desc: "بيئات تطوير مُهيأة مسبقاً",
    templates_title: "قوالب المشروع:",
    templates_desc: "هيكل المشروع الموحد",
    documentation_title: "التوثيق التلقائي:",
    documentation_desc: "توليد التوثيق من الكود",
    feedback_title: "التغذية الراجعة الفورية:",
    feedback_desc: "نتائج البناء والاختبار الفورية",
    collaboration_title: "تعاون الفريق:",
    collaboration_desc: "مراجعة الكود والتواصل المتكامل",
    
    // DevEx Technologies
    devex_tech_title: "أدوات تجربة المطور",
    devex_vscode: "VS Code",
    devex_intellij: "IntelliJ",
    devex_docker: "Docker Desktop",
    devex_k9s: "Lens",
    devex_postman: "Postman",
    
    // DevEx Benefits
    devex_benefits_title: "الفوائد",
    devex_benefit1_title: "80% رضا المطورين",
    devex_benefit1_desc: "أدوات وسير عمل يحبها المطورون بالفعل",
    devex_benefit2_title: "50% أسرع للإعداد",
    devex_benefit2_desc: "مطورون جد منتجون من اليوم الأول",
    devex_benefit3_title: "40% وقت برمجة أكثر",
    devex_benefit3_desc: "تقليل تبديل السياق واحتكاك الأدوات",
    
    // CTA Section
    cta_title: "هل أنت مستعد لتحويل التكامل المستمر/التسليم المستمر وتجربة المطور؟",
    cta_description: "دعنا نناقش كيف يمكن لخبرتنا في التكامل المستمر/التسليم المستمر وتجربة المطور تسريع تسليمك وإسعاد مطوريك",
    cta_button: "حسن سير عمل التطوير لديك"
  }
};

// Change language function
function changeLanguage(lang){
  // Update text content based on selected language
  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
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
    }
  });

  // Apply RTL for Arabic
  if (lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  // Close dropdown after selection
  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.style.display = "none";
  }
}

// Load English by default
document.addEventListener('DOMContentLoaded', function() {
  changeLanguage("en");
});

// Make translations available globally
window.translations = translations;
