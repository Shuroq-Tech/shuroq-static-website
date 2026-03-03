// Translation system for Monolith Microservice page
const translations = {
  en: {
    // Hero Section
    herotitle: "Monolith to Microservice Architecture",
    heropara: "Transform legacy monolithic applications into scalable microservice architectures for better maintainability and deployment",
    architecturepan: "Architecture Transformation",
    scalabilitypan: "Enhanced Scalability",
    deploymentpan: "Modern Deployment",
    migratespan: "Phased Migration",
    decomposespan: "Domain Decomposition",
    integratespan: "Service Integration",
    
    // Overview Section
    overviewtitle: "Architecture Modernization",
    overviewpara: "Monolith to microservice transformation represents a fundamental shift in application architecture, breaking down large, tightly-coupled applications into smaller, independent services. This approach enables organizations to achieve better scalability, maintainability, and deployment flexibility while preserving business functionality and improving development velocity.",
    whytitle: "Why Microservice Transformation",
    whydesc: "Microservices offer numerous advantages over traditional monolithic architectures including independent scaling, fault isolation, technology diversity, and team autonomy. This transformation allows businesses to deploy changes faster, scale specific components based on demand, and adopt new technologies without affecting the entire system.",
    shuroqtitle: "Shuroq's Transformation Expertise",
    shuroqdesc: "Our microservice transformation specialists help organizations systematically decompose monolithic applications into well-defined service boundaries. We employ proven patterns like Strangler Fig, Database per Service, and API Gateway patterns to ensure smooth, incremental migration with minimal business disruption and maximum architectural benefits.",
    
    // Benefits
    benefitstitle: "Key Benefits",
    benefit1strong: "Independent Scaling:",
    benefit1: "Scale individual services based on specific demand patterns",
    benefit2strong: "Fault Isolation:",
    benefit2: "Service failures don't cascade to entire application",
    benefit3strong: "Technology Diversity:",
    benefit3: "Use different technologies for different services",
    benefit4strong: "Team Autonomy:",
    benefit4: "Teams can work independently on different services",
    benefit5strong: "Faster Deployment:",
    benefit5: "Deploy individual services without full application rebuild",
    
    // Services Section
    servicestitle: "Transformation Services & Capabilities",
    service1title: "Monolith Analysis & Decomposition",
    service1desc: "Analyzing existing monolithic applications to identify natural service boundaries, dependencies, and data flows. We create detailed decomposition strategies that minimize coupling and maximize service independence while preserving business logic integrity.",
    service2title: "Service Boundary Definition",
    service2desc: "Defining clear service boundaries based on business capabilities, data ownership, and change frequency. Our approach ensures services are loosely coupled, independently deployable, and aligned with organizational structure.",
    service3title: "Database per Service Pattern",
    service3desc: "Implementing database-per-service patterns to ensure data isolation and independence. We design data access strategies that maintain consistency while allowing each service to choose its optimal database technology.",
    service4title: "API Gateway Implementation",
    service4desc: "Creating API gateways to handle cross-cutting concerns like authentication, rate limiting, and routing. Our gateway implementations provide unified service access while maintaining security and observability.",
    service5title: "Strangler Fig Pattern",
    service5desc: "Gradually replacing monolith functionality with microservices using the Strangler Fig pattern. This approach allows incremental migration with minimal risk and continuous business value delivery.",
    service6title: "Service Mesh Architecture",
    service6desc: "Implementing service mesh for inter-service communication, traffic management, and security. We deploy solutions like Istio, Linkerd, or Consul for advanced microservice orchestration.",
    
    // Process Section
    processtitle: "Transformation Process",
    step1title: "Assessment & Planning",
    step1desc: "Analyze current monolith architecture, identify service boundaries, and create detailed migration roadmap with risk assessment and success metrics.",
    step2title: "Domain-Driven Design",
    step2desc: "Apply DDD principles to identify bounded contexts, define service boundaries, and establish clear ownership and communication patterns.",
    step3title: "Strangler Fig Pattern",
    step3desc: "Implement gradual migration using strangler fig pattern, incrementally replacing monolith components with microservices while maintaining system stability.",
    step4title: "Service Implementation",
    step4desc: "Build microservices with proper API design, data management, monitoring, and security following cloud-native best practices.",
    step5title: "Integration & Testing",
    step5desc: "Establish service communication, implement comprehensive testing, and ensure data consistency between monolith and microservices.",
    
    // Technology Stack Section
    techtitle: "Technology Stack",
    tech1title: "Container Platforms",
    tech2title: "Orchestration Tools",
    tech3title: "API Management",
    tech4title: "Service Mesh",
    
    // Benefits Section
    benefitstitle2: "Business Benefits",
    benefitcard1title: "Improved scalability and performance",
    benefitcard1desc: "Scale individual components based on specific demand patterns rather than scaling entire application.",
    benefitcard2title: "Enhanced development velocity",
    benefitcard2desc: "Teams can work independently on different services, enabling parallel development and faster feature delivery.",
    benefitcard3title: "Better fault isolation and reliability",
    benefitcard3desc: "Service failures are contained within individual services, preventing cascading failures across the entire application.",
    benefitcard4title: "Technology flexibility and innovation",
    benefitcard4desc: "Different services can use different technologies, allowing teams to choose the best tools for specific problems.",
    
    // CTA Section
    ctatitle: "Ready to Transform Your Monolith?",
    ctadesc: "Let's discuss how our microservice transformation expertise can help you modernize your architecture for better scalability and maintainability",
    ctabutton: "Start Transformation",
    ctabutton2: "Back to Product Engineering"
  },
  ar: {
    // Hero Section
    herotitle: "تحويل العملاق إلى الخدمات المصغرة",
    heropara: "حول التطبيقات العملاقية القديمة إلى هندسة الخدمات المصغرة القابلة للتطوير والصيانة الأفضل",
    architecturepan: "تحويل الهندسة",
    scalabilitypan: "قابلية التوسع المحسّنة",
    deploymentpan: "النشر الحديث",
    migratespan: "الهجرة المرحلية",
    decomposespan: "تفكيك المجال",
    integratespan: "تكامل الخدمات",
    
    // Overview Section
    overviewtitle: "تحديث البنية",
    overviewpara: "تحويل العملاق إلى الخدمات المصغرة يمثل تحولاً أساسياً في هندسة التطبيقات، حيث يتم تقسيم التطبيقات الكبيرة والمترابطة بإحكام إلى خدمات أصغر ومستقلة. يتيح هذا النهج للمؤسسات تحقيق قابلية التوسع والصيانة ومرونة النشر الأفضل مع الحفاظ على وظائف الأعمال وتحسين سرعة التطوير.",
    whytitle: "لماذا تحويل الخدمات المصغرة",
    whydesc: "توفر الخدمات المصغرة العديد من المزايا على هندسة العملاق التقليدية بما في ذلك التوسع المستقل وعزل الأخطاء وتنوع التكنولوجيا واستقلالية الفرق. يسمح هذا التحول للشركات بنشر التغييرات بشكل أسرع وتوسع مكونات محددة بناءً على الطلب وتبني تكنولوجيات جديدة دون التأثير على النظام بأكمله.",
    shuroqtitle: "خبرة شروق في التحول",
    shuroqdesc: "يساعد متخصصو تحويل الخدمات المصغرة في شروق المؤسسات على تفكيك التطبيقات العملاقية بشكل منهجي إلى حدود خدمية محددة جيداً. نستخدم أنماط مثبتة مثل نمط Strangler Fig ونمط قاعدة البيانات لكل خدمة ونمط بوابة API لضمان هجرة سلسة مع الحد الأدنى لاضطراب الأعمال وتحقيق أقصى الفوائد المعمارية.",
    
    // Benefits
    benefistitle: "الفوائد الرئيسية",
    benefi1strong: "التوسع المستقل:",
    benefi1: "وسّع الخدمات الفردية بناءً على أنماط الطلب المحددة",
    benefi2strong: "عزل الأخطاء:",
    benefi2: "أعطال الخدمات لا تتتأرجع إلى التطبيق بأكمله",
    benefi3strong: "تنوع التكنولوجيا:",
    benefi3: "استخدم تكنولوجيات مختلفة لخدمات مختلفة",
    benefi4strong: "استقلالية الفريق:",
    benefi4: "يمكن للفرق العمل بشكل مستقل على خدمات مختلفة",
    benefi5strong: "النشر الأسرع:",
    benefi5: "انشر الخدمات الفردية بدون إعادة بناء التطبيق بأكمله",
    
    // Services Section
    servicestitle: "خدمات التحول والقدرات",
    service1title: "تحليل وتفكيك العملاق",
    service1desc: "تحليل التطبيقات العملاقية الحالية لتحديد حدود الخدمة الطبيعية والتبعيات وتدفقات البيانات. ننشئ استراتيجيات تفكيك مفصلة تقلل من الاقتران وتعظيم استقلالية الخدمة مع الحفاظ على سلامة منطق الأعمال.",
    service2title: "تعريف حدود الخدمة",
    service2desc: "تحديد حدود خدمة واضحة بناءً على قدرات الأعمال وملكية البيانات وتواتر التغيير. يضمن نهجنا أن الخدمات غير مترابطة بإحكام وقابلة للنشر بشكل مستقل ومتوافقة مع الهيكل التنظيمي.",
    service3title: "نمط قاعدة البيانات لكل خدمة",
    service3desc: "تنفيذ أنماط قاعدة البيانات لكل خدمة لضمان عزل البيانات والاستقلالية. نصمم استراتيجيات الوصول إلى البيانات تحافظ على الاتساق مع السماح لكل خدمة باختيار تقنية قاعدة البيانات المثلى.",
    service4title: "تنفيذ بوابة API",
    service4desc: "إنشاء بوابات API للتعامل مع الاهتمامات المشتركة مثل المصادقة وتحديد المعدل والتوجيه. تنفيذات البوابة لدينا توفر وصول خدمة موحد مع الحفاظ على الأمان وقابلية المراقبة.",
    service5title: "نمط Strangler Fig",
    service5desc: "استبدال وظائف العملاق تدريجياً بالخدمات المصغرة باستخدام نمط Strangler Fig. يتيح هذا النهج الهجرة التدريجية بأدنى مخاطر وتسليم قيمة الأعمال المستمر.",
    service6title: "هندسة شبكة الخدمات",
    service6desc: "تنفيذ شبكة الخدمات للتواصل بين الخدمات وإدارة حركة المرور والأمان. ننشر حلول مثل Istio و Linkerd أو Consul لتنسيق الخدمات المصغرة المتقدم.",
    
    // Process Section
    processtitle: "عملية التحول",
    step1title: "التقييم والتخطيط",
    step1desc: "حلل هندسة العملاق الحالية، وحدد حدود الخدمة، وأنشئ خريطة هجرة مفصلة مع تقييم المخاطر ومقايير النجاح.",
    step2title: "التصميم المدفوع بالمجال",
    step2desc: "طبق مبادئ DDD لتحديد السياقات المحدودة، وحدد حدود الخدمة، وأنشئ ملكية واضحة وأنماط الاتصال.",
    step3title: "نمط Strangler Fig",
    step3desc: "نفذ هجرة تدريجية باستخدام نمط strangler fig، واستبدل مكونات العملاق تدريجياً بالخدمات المصغرة مع الحفاظ على استقرار النظام.",
    step4title: "تنفيذ الخدمة",
    step4desc: "ابني خدمات مصغرة بتصميم API مناسب، وإدارة بيانات، ومراقبة، وأمان تتبع أفضل الممارسات السحابية الأصلية.",
    step5title: "التكامل والاختبار",
    step5desc: "أنشئ تواصل الخدمة، ونفذ اختبار شامل، وضمن اتساق البيانات بين العملاق والخدمات المصغرة.",
    
    // Technology Stack Section
    techtitle: "مجموعة التقنيات",
    tech1title: "منصات التحويم",
    tech2title: "أدوات التنسيق",
    tech3title: "إدارة API",
    tech4title: "شبكة الخدمات",
    
    // Benefits Section
    benefistitle2: "الفوائد التجارية",
    beneficard1title: "تحسين قابلية التوسع والأداء",
    beneficard1desc: "وسّع المكونات الفردية بناءً على أنماط الطلب المحددة بدلاً من توسع التطبيق بأكمله.",
    beneficard2title: "تحسين سرعة التطوير",
    beneficard2desc: "يمكن للفرق العمل بشكل مستقل على خدمات مختلفة، مما يتيح التطوير المتوازي وتسليم الميزات بشكل أسرع.",
    beneficard3title: "عزل أفضل للأخطاء والموثوقية",
    beneficard3desc: "أعطال الخدمات محصورة داخل خدمات فردية، مما يمنع الأعطال المتتالية عبر التطبيق بأكمله.",
    beneficard4title: "مرونة التكنولوجيا والابتكار",
    beneficard4desc: "يمكن للخدمات المختلفة استخدام تكنولوجيات مختلفة، مما يسمح للفرق باختيار الأدوات الأفضل للمشاكل المحددة.",
    
    // CTA Section
    ctatitle: "هل أنت مستعد لتحويل عملاقك؟",
    ctadesc: "دعنا نناقش كيف يمكن لخبرة شروق في تحويل الخدمات المصغرة مساعدتك في تحديث بنيتك لقابلية التوسع والصيانة الأفضل",
    ctabutton: "ابدأ التحول",
    ctabutton2: "العودة إلى هندسة المنتجات"
  }
};

// Language change function
function changeLanguage(lang) {
  // Update content translations
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update language button
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? '🌐ar' : '🌐en';
  }
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Toggle RTL for Arabic
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
  
  // Re-initialize navigation with new language
  if (typeof translateNavigation === 'function') {
    translateNavigation(lang);
  }
}

// Initialize language from localStorage or browser preference
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(savedLanguage);
});
