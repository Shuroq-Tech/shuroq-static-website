// Translation system for Progressive Delivery page
const translations = {
  en: {
    // Hero Section
    herotitle: "Progressive Delivery",
    heropara: "Deploy with confidence using advanced delivery strategies that enable zero-downtime releases and automated rollback",
    flags_feature: "Feature Flags",
    canary_feature: "Canary Releases",
    rollback_feature: "Automated Rollback",
    
    // Feature Flags Section
    flags_title: "Feature Flags",
    flags_para: "Control feature releases dynamically with intelligent flag management systems",
    flags_approach_title: "Dynamic Feature Control",
    flags_approach_para: "We implement comprehensive feature flag systems that enable dynamic control over feature releases. Our approach includes real-time flag management, user segmentation, gradual rollouts, and comprehensive analytics. This allows you to test features in production, control exposure, and rollback instantly without redeployment.",
    flags_strategy_title: "Strategic Flag Management",
    flags_strategy_para: "Our feature flag strategy focuses on business value delivery while minimizing risk. We implement proper flag lifecycle management, user targeting based on attributes, gradual exposure controls, and automated cleanup. This ensures your feature delivery is both safe and efficient while providing maximum flexibility for your product teams.",
    
    // Flag Features
    flags_features_title: "Flag Capabilities",
    realtime_title: "Real-time Control:",
    realtime_desc: "Instant feature toggling without deployment",
    segmentation_title: "User Segmentation:",
    segmentation_desc: "Target specific user groups for testing",
    gradual_title: "Gradual Rollout:",
    gradual_desc: "Controlled exposure to manage risk",
    analytics_title: "Analytics Integration:",
    analytics_desc: "Measure feature impact and usage",
    cleanup_title: "Automated Cleanup:",
    cleanup_desc: "Remove obsolete flags automatically",
    
    // Flag Technologies
    flags_tech_title: "Flag Technologies",
    tech_launchdarkly: "LaunchDarkly",
    tech_splitio: "Split.io",
    tech_flagsmith: "Flagsmith",
    tech_unleash: "Unleash",
    tech_optimizely: "Optimizely",
    
    // Flag Benefits
    flags_benefits_title: "Benefits",
    flags_benefit1_title: "Instant Feature Control",
    flags_benefit1_desc: "Enable/disable features without redeployment",
    flags_benefit2_title: "Targeted Testing",
    flags_benefit2_desc: "Test features with specific user segments",
    flags_benefit3_title: "Risk Reduction",
    flags_benefit3_desc: "Gradual rollouts minimize failure impact",
    
    // Canary Releases Section
    canary_title: "Canary Releases",
    canary_para: "Gradual rollout with real-time monitoring and automated rollback capabilities",
    canary_approach_title: "Intelligent Gradual Rollout",
    canary_approach_para: "We implement sophisticated canary release strategies that balance innovation speed with production stability. Our approach includes intelligent traffic routing, comprehensive monitoring, automated rollback triggers, and gradual user base expansion. This ensures you can test new features with real users while minimizing potential impact.",
    canary_monitoring_title: "Real-time Monitoring and Analysis",
    canary_monitoring_para: "Our canary implementation includes comprehensive real-time monitoring and analysis systems. We track performance metrics, error rates, user behavior, and business KPIs. This data-driven approach ensures informed decisions about when to promote, rollback, or adjust canary configurations for optimal results.",
    
    // Canary Features
    canary_features_title: "Canary Capabilities",
    traffic_routing_title: "Smart Traffic Routing:",
    traffic_routing_desc: "Direct users based on weighted algorithms",
    realtime_monitoring_title: "Real-time Monitoring:",
    realtime_monitoring_desc: "Live performance and error rate tracking",
    automated_rollback_title: "Automated Rollback:",
    automated_rollback_desc: "Instant recovery on threshold breaches",
    gradual_expansion_title: "Gradual Expansion:",
    gradual_expansion_desc: "Controlled user base growth",
    performance_analysis_title: "Performance Analysis:",
    performance_analysis_desc: "Compare canary vs baseline metrics",
    
    // Canary Technologies
    canary_tech_title: "Canary Technologies",
    tech_argocd: "Argo Rollouts",
    tech_flagger: "Flagger",
    tech_istio: "Istio",
    tech_linkerd: "Linkerd",
    tech_smi: "Service Mesh Interface",
    
    // Canary Benefits
    canary_benefits_title: "Benefits",
    canary_benefit1_title: "Reduced Risk",
    canary_benefit1_desc: "Test with small user groups before full rollout",
    canary_benefit2_title: "Data-driven Decisions",
    canary_benefit2_desc: "Make informed choices based on real metrics",
    canary_benefit3_title: "User Safety",
    canary_benefit3_desc: "Minimize impact of potential issues",
    
    // Automated Rollback Section
    rollback_title: "Automated Rollback",
    rollback_para: "Instant recovery mechanisms that ensure service reliability and quick failure resolution",
    rollback_approach_title: "Comprehensive Recovery Strategy",
    rollback_approach_para: "We implement robust automated rollback systems that ensure instant recovery from deployment failures. Our approach includes pre-deployment snapshots, automated health checks, intelligent failure detection, and multi-level rollback triggers. This ensures your services maintain high availability while minimizing manual intervention.",
    rollback_safety_title: "Safety Nets and Monitoring",
    rollback_safety_para: "Safety is fundamental to our rollback strategy. We implement multiple safety nets including circuit breakers, gradual rollback mechanisms, comprehensive logging, and post-rollback analysis. This multi-layered approach ensures that rollback operations are safe, predictable, and provide valuable insights for continuous improvement.",
    
    // Rollback Features
    rollback_features_title: "Rollback Capabilities",
    instant_rollback_title: "Instant Rollback:",
    instant_rollback_desc: "Immediate recovery to previous stable state",
    health_checks_title: "Health Checks:",
    health_checks_desc: "Automated validation post-deployment",
    circuit_breakers_title: "Circuit Breakers:",
    circuit_breakers_desc: "Prevent cascade failures with automatic stops",
    gradual_rollback_title: "Gradual Rollback:",
    gradual_rollback_desc: "Controlled traffic shifting for safety",
    rollback_analytics_title: "Rollback Analytics:",
    rollback_analytics_desc: "Track rollback frequency and success rates",
    
    // Rollback Technologies
    rollback_tech_title: "Rollback Technologies",
    tech_kubernetes: "Kubernetes",
    tech_helm: "Helm",
    tech_velero: "Velero",
    tech_argocd_rollback: "Argo CD",
    tech_prometheus: "Prometheus",
    tech_grafana: "Grafana",
    
    // Rollback Benefits
    rollback_benefits_title: "Benefits",
    rollback_benefit1_title: "Rapid Recovery",
    rollback_benefit1_desc: "Restore services in seconds, not hours",
    rollback_benefit2_title: "High Availability",
    rollback_benefit2_desc: "Maintain service uptime during failures",
    rollback_benefit3_title: "Operational Insights",
    rollback_benefit3_desc: "Learn from failures to prevent recurrence",
    
    // CTA Section
    cta_title: "Ready to Transform Your Deployment Strategy?",
    cta_description: "Let's discuss how our progressive delivery expertise can enable zero-downtime releases and automated rollback capabilities",
    cta_button: "Implement Progressive Delivery"
  },
  ar: {
    // Hero Section
    herotitle: "التسليم التدريجي",
    heropara: "انشر بثقة باستخدام استراتيجيات التسليم المتقدمة التي تمكن الإصدارات بدون توقف والتراجع المؤتمت",
    flags_feature: "أعلامات الميزات",
    canary_feature: "الإصدارات الكنارية",
    rollback_feature: "التراجع المؤتمت",
    
    // Feature Flags Section
    flags_title: "أعلامات الميزات",
    flags_para: "تحكم في إصدارات الميزات ديناميكياً مع أنظمة إدارة الأعلامات الذكية",
    flags_approach_title: "التحكم الدينامي في الميزات",
    flags_approach_para: "ننفذ أنظمة شاملة لأعلامات الميزات التي تمكن التحكم الدينامي في إصدارات الميزات. يتضمن نهجنا إدارة الأعلامات في الوقت الفعلي، وتقسيم المستخدمين، والإصدارات التدريجية، والتحليلات الشاملة. يتيح لك هذا اختبار الميزات في الإنتاج، والتحكم في التعرض، والتراجع فوراً دون إعادة النشر.",
    flags_strategy_title: "الإدارة الاستراتيجية للأعلامات",
    flags_strategy_para: "تركز استراتيجية الأعلامات لدينا على تسليم القيمة التجارية مع تقليل المخاطر. ننفذ إدارة دورة حياة الأعلامات المناسبة، واستهداف المستخدمين بناءً على السمات، وضوابط التعرض التدريجي، والتنظيف المؤتمت. يضمن هذا أن تسليم الميزات آمن وفعال مع توفير أقصى مرونة لفرق المنتجات لديك.",
    
    // Flag Features
    flags_features_title: "قدرات الأعلامات",
    realtime_title: "التحكم في الوقت الفعلي:",
    realtime_desc: "تبديل الميزات الفوري بدون نشر",
    segmentation_title: "تقسيم المستخدمين:",
    segmentation_desc: "استهداف مجموعات مستخدمين محددة للاختبار",
    gradual_title: "الإصدار التدريجي:",
    gradual_desc: "التحكم في التعرض لإدارة المخاطر",
    analytics_title: "تكامل التحليلات:",
    analytics_desc: "قياس تأثير الميزات والاستخدام",
    cleanup_title: "التنظيف المؤتمت:",
    cleanup_desc: "إزالة الأعلامات القديمة تلقائياً",
    
    // Flag Technologies
    flags_tech_title: "تقنيات الأعلامات",
    tech_launchdarkly: "LaunchDarkly",
    tech_splitio: "Split.io",
    tech_flagsmith: "Flagsmith",
    tech_unleash: "Unleash",
    tech_optimizely: "Optimizely",
    
    // Flag Benefits
    flags_benefits_title: "الفوائد",
    flags_benefit1_title: "التحكم الفوري في الميزات",
    flags_benefit1_desc: "تمكين/تعطيل الميزات بدون إعادة النشر",
    flags_benefit2_title: "الاختبار المستهدف",
    flags_benefit2_desc: "اختبار الميزات مع شرائح مستخدمين محددة",
    flags_benefit3_title: "تقليل المخاطر",
    flags_benefit3_desc: "الإصدارات التدريجية تقلل من تأثير الفشل",
    
    // Canary Releases Section
    canary_title: "الإصدارات الكنارية",
    canary_para: "الإصدار التدريجي مع المراقبة في الوقت الفعلي وقدرات التراجع المؤتمت",
    canary_approach_title: "الإصدار التدريجي الذكي",
    canary_approach_para: "ننفذ استراتيجيات إصدار كنارية متطورة توازن بين سرعة الابتكار واستقرار الإنتاج. يتضمن نهجنا توجيه حركة المرور الذكي، والمراقبة الشاملة، ومشغلات التراجع المؤتمت، وتوسيع قاعدة المستخدمين التدريجي. يضمن هذا أنه يمكنك اختبار ميزات جديدة مع مستخدمين حقيقيين مع تقليل التأثير المحتمل.",
    canary_monitoring_title: "المراقبة والتحليل في الوقت الفعلي",
    canary_monitoring_para: "يتضمن تنفيذ الإصدارات الكنارية لدينا أنظمة مراقبة وتحليل شاملة في الوقت الفعلي. نتتبع مقاييس الأداء، ومعدلات الأخطاء، وسلوك المستخدم، ومؤشرات الأداء الرئيسية التجارية. يضمن هذا النهج القائم على البيانات اتخاذ قرارات مستنيرة حول何时 الترويج أو التراجع أو تعديل تكوينات الإصدارات الكنارية للحصول على نتائج مثالية.",
    
    // Canary Features
    canary_features_title: "قدرات الإصدارات الكنارية",
    traffic_routing_title: "توجيه حركة المرور الذكي:",
    traffic_routing_desc: "توجيه المستخدمين بناءً على الخوارزميات المرجحة",
    realtime_monitoring_title: "المراقبة في الوقت الفعلي:",
    realtime_monitoring_desc: "تتبع أداء ومعدل الخطأ المباشر",
    automated_rollback_title: "التراجع المؤتمت:",
    automated_rollback_desc: "الاسترداد الفوري عند تجاوز العتبات",
    gradual_expansion_title: "التوسع التدريجي:",
    gradual_expansion_desc: "نمو قاعدة المستخدمين الموجه",
    performance_analysis_title: "تحليل الأداء:",
    performance_analysis_desc: "مقارنة مقاييس الإصدار الكناري مقابل الأساس",
    
    // Canary Technologies
    canary_tech_title: "تقنيات الإصدارات الكنارية",
    tech_argocd: "Argo Rollouts",
    tech_flagger: "Flagger",
    tech_istio: "Istio",
    tech_linkerd: "Linkerd",
    tech_smi: "واجهة شبكة الخدمات",
    
    // Canary Benefits
    canary_benefits_title: "الفوائد",
    canary_benefit1_title: "تقليل المخاطر",
    canary_benefit1_desc: "اختبار مع مجموعات مستخدمين صغيرة قبل الإصدار الكامل",
    canary_benefit2_title: "قرارات قائمة على البيانات",
    canary_benefit2_desc: "اتخاذ خيارات مستنيرة بناءً على مقاييس حقيقية",
    canary_benefit3_title: "سلامة المستخدم",
    canary_benefit3_desc: "تقليل تأثير المشاكل المحتملة",
    
    // Automated Rollback Section
    rollback_title: "التراجع المؤتمت",
    rollback_para: "آليات الاسترداد الفوري التي تضمن موثوقية الخدمة وحل سريع للفشل",
    rollback_approach_title: "استراتيجية الاسترداد الشاملة",
    rollback_approach_para: "ننفذ أنظمة تراجع مؤتمت قوية تضمن الاسترداد الفوري من فشل النشر. يتضمن نهجنا لقطات ما قبل النشر، وفحوصاً صحية مؤتمتة، واكتشاف فشل ذكي، ومشغلات تراجع متعددة المستويات. يضمن هذا أن خدماتك تحافظ على توفر عالي مع تقليل التدخل اليدوي.",
    rollback_safety_title: "شبكات الأمان والمراقبة",
    rollback_safety_para: "السلامة أساسية لاستراتيجية التراجع لدينا. ننفذ شبكات أمان متعددة بما في ذلك قواطع الدائرة، وآليات تراجع تدريجية، وتسجيل شامل، وتحليل ما بعد التراجع. يضمن هذا النهج متعدد الطبقات أن عمليات التراجع آمنة وقابلة للتنبؤ وتوفر رؤى قيمة للتحسين المستمر.",
    
    // Rollback Features
    rollback_features_title: "قدرات التراجع",
    instant_rollback_title: "التراجع الفوري:",
    instant_rollback_desc: "الاسترداد الفوري إلى الحالة المستقرة السابقة",
    health_checks_title: "الفحوص الصحية:",
    health_checks_desc: "التحقق المؤتمت بعد النشر",
    circuit_breakers_title: "قواطع الدائرة:",
    circuit_breakers_desc: "منع الفشل المتتالي مع التوقفات التلقائية",
    gradual_rollback_title: "التراجع التدريجي:",
    gradual_rollback_desc: "تحويل حركة المرور الموجه للسلامة",
    rollback_analytics_title: "تحليلات التراجع:",
    rollback_analytics_desc: "تتبع تكرار ومعدلات نجاح التراجع",
    
    // Rollback Technologies
    rollback_tech_title: "تقنيات التراجع",
    tech_kubernetes: "Kubernetes",
    tech_helm: "Helm",
    tech_velero: "Velero",
    tech_argocd_rollback: "Argo CD",
    tech_prometheus: "Prometheus",
    tech_grafana: "Grafana",
    
    // Rollback Benefits
    rollback_benefits_title: "الفوائد",
    rollback_benefit1_title: "الاسترداد السريع",
    rollback_benefit1_desc: "استعادة الخدمات في ثوانٍ، وليس ساعات",
    rollback_benefit2_title: "التوفر العالي",
    rollback_benefit2_desc: "الحفاظ على تشغيل الخدمة خلال الفشل",
    rollback_benefit3_title: "رؤى تشغيلية",
    rollback_benefit3_desc: "التعلم من الفشل لمنع التكرار",
    
    // CTA Section
    cta_title: "هل أنت مستعد لتحويل استراتيجية النشر لديك؟",
    cta_description: "دعنا نناقش كيف يمكن لخبرتنا في التسليم التدريجي تمكين الإصدارات بدون توقف وقدرات التراجع المؤتمت",
    cta_button: "نفذ التسليم التدريجي"
  }
};

// Initialize language from localStorage or browser preference
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  // Wait a bit for navigation to load, then apply initial language
  setTimeout(() => {
    changeLanguage(savedLanguage);
  }, 100);
});
