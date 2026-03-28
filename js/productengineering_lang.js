// Translation system for Product Engineering page
const translations = {
  en: {
    // Hero Section
    hero_title: "Product Engineering Excellence",
    hero_subtitle: "Transform your ideas into scalable, high-performance products with our comprehensive product engineering services",
    
    // Introduction Section
    intro_title: "Transform Your Ideas into Scalable Products",
    intro_description: "At Shuroq, we specialize in building robust, scalable, and cloud-native products that drive business growth. Our comprehensive product engineering services span from initial concept to deployment and ongoing optimization, ensuring your products are built with modern best practices and cutting-edge technologies.",
    
    // Highlights
    highlight1_title: "Fast Time-to-Market",
    highlight1_desc: "Accelerated development cycles with agile methodologies",
    highlight2_title: "Scalable Architecture",
    highlight2_desc: "Future-proof solutions that grow with your business",
    highlight3_title: "Cloud-Native First",
    highlight3_desc: "Built for cloud from day one",
    highlight4_title: "Enterprise Security",
    highlight4_desc: "Security and compliance built into every layer",
    
    // Services
    cloud_native_title: "Cloud Native Product Engineering",
    
    // FaaS Section
    faas_title: "FaaS — Function as a Service",
    faas_subtitle: "Serverless Architecture for Infinite Scale and Zero Operational Overhead",
    faas_description: "Embrace serverless computing with event-driven, auto-scaling functions that eliminate infrastructure overhead and reduce operational costs significantly.",
    faas_functions: "Serverless Functions",
    faas_functions_desc: "Event-driven, auto-scaling code",
    faas_events: "Event Architecture",
    faas_events_desc: "Loosely coupled, event-driven systems",
    faas_cost: "Cost Optimization",
    faas_cost_desc: "Pay-per-execution pricing model",
    faas_button: "Explore FaaS",
    
    // Monolith Section
    monolith_title: "Monolith to Microservice Migration",
    monolith_subtitle: "Modernize Legacy Systems with Confidence and Precision",
    monolith_description: "Transform legacy monolithic applications into agile, independently deployable microservices — enabling faster releases, better scalability, and improved fault isolation.",
    monolith_migration: "Migration Strategy",
    monolith_migration_desc: "Phased, risk-managed transformation",
    monolith_decomposition: "Domain Decomposition",
    monolith_decomposition_desc: "DDD-based service boundaries",
    monolith_integration: "Service Integration",
    monolith_integration_desc: "Seamless inter-service communication",
    monolith_button: "Explore Migration",
    
    // Why Choose Shuroq Section
    why_choose_title: "Why Choose Shuroq for Product Engineering?",
    
    // Benefits Section
    benefit1_title: "Expert Team",
    benefit1_desc: "Seasoned engineers with deep expertise in modern technologies and best practices",
    benefit2_title: "Agile Process",
    benefit2_desc: "Iterative development with continuous feedback and rapid adaptation",
    benefit3_title: "Proven Track Record",
    benefit3_desc: "Successful delivery of complex products across various industries",
    benefit4_title: "Partnership Approach",
    benefit4_desc: "We work as an extension of your team, committed to your success",
    
    // CTA Section
    cta_title: "Ready to Build Your Next Product?",
    cta_description: "Let's discuss how our product engineering expertise can help bring your vision to life",
    cta_button: "Get in Touch"
  },
  ar: {
    // Hero Section
    hero_title: "تميز هندسة المنتجات",
    hero_subtitle: "حول أفكارك إلى منتجات قابلة للتطوير وعالية الأداء مع خدمات هندسة المنتجات الشاملة لدينا",
    
    // Introduction Section
    intro_title: "حول أفكارك إلى منتجات قابلة للتوسع",
    intro_description: "في شروق، نتخصص في بناء منتجات قوية وقابلة للتوسع وسحابية أصلية تدفع نمو الأعمال. تشمل خدمات هندسة المنتجات الشاملة لدينا من المفهوم الأولي إلى النشر والتحسين المستمر، مما يضمن بناء منتجاتك بأفضل الممارسات الحديثة والتقنيات المتطورة.",
    
    // Highlights
    highlight1_title: "وصول سريع إلى السوق",
    highlight1_desc: "دورات تطوير معجلة بالمنهجيات الرشيقة",
    highlight2_title: "هندسة قابلة للتوسع",
    highlight2_desc: "حلول مستقبلية تنمو مع عملك",
    highlight3_title: "سحابية أصلية أولاً",
    highlight3_desc: "مبنية للسحابة من اليوم الأول",
    highlight4_title: "أمان المؤسسات",
    highlight4_desc: "الأمان والامتثال مدمجان في كل طبقة",
    
    // Services
    cloud_native_title: "هندسة المنتجات السحابية الأصلية",
    
    // FaaS Section
    faas_title: "FaaS — الخدمة كدالة",
    faas_subtitle: "هندسة بلا خوادم للتوسع اللانهائي وتقليل الحمل التشغيلي إلى الصفر",
    faas_description: "احتض computing بلا خوادم مع دوال مدفوعة بالأحداث وقابلة للتوسع التلقائي التي تلغي الحمل التحتي وتقلل التكاليف التشغيلية بشكل كبير.",
    faas_functions: "دوال بلا خوادم",
    faas_functions_desc: "كود مدفوع بالأحداث وقابل للتوسع التلقائي",
    faas_events: "هندسة الأحداث",
    faas_events_desc: "أنظمة مرتخلة بشكل فضفائي ومدفوعة بالأحداث",
    faas_cost: "تحسين التكاليف",
    faas_cost_desc: "نموذج تسعير يدفع لكل تنفيذ",
    faas_button: "استكشاف FaaS",
    
    // Monolith Section
    monolith_title: "تحويل العملاق إلى الخدمات المصغرة",
    monolith_subtitle: "حدث الأنظمة القديمة بثقة ودقة",
    monolith_description: "حول التطبيقات العملاقية القديمة إلى خدمات مصغرة رشيقة وقابلة للنشر بشكل مستقل — مما يتيح إصدارات أسرع وقابلية توسع أفضل وعزل أعطال أفضل.",
    monolith_migration: "استراتيجية الهجرة",
    monolith_migration_desc: "تحول مرحلي ومُدار بالمخاطر",
    monolith_decomposition: "تفكيك المجال",
    monolith_decomposition_desc: "حدود الخدمة القائمة على التصميم المدفوع بالمجال",
    monolith_integration: "تكامل الخدمات",
    monolith_integration_desc: "تواصل بين الخدمات سلس وخالٍ من العيوب",
    monolith_button: "استكشاف الهجرة",
    
    // Why Choose Shuroq Section
    why_choose_title: "لماذا تختار شروق لهندسة المنتجات؟",
    
    // Benefits Section
    benefit1_title: "فريق خبراء",
    benefit1_desc: "مهندسون ذوو خبرة عميقة في التقنيات الحديثة وأفضل الممارسات",
    benefit2_title: "العملية الرشيقة",
    benefit2_desc: "تطوير تكراري مع تغذية مستمرة وتكيف سريع",
    benefit3_title: "سجل حقيقي مثبت",
    benefit3_desc: "تسليم ناجح للمنتجات المعقدة عبر مختلف الصناعات",
    benefit4_title: "نهج الشراكة",
    benefit4_desc: "نعمل كامتداد لفريقك، ملتزمون بنجاحك",
    cta_title: "هل أنت مستعد لبناء منتجك التالي؟",
    cta_description: "دعنا نناقش كيف يمكن لخبرة هندسة المنتجات لدينا مساعدتك في إحياء رؤيتك",
    cta_button: "تواصل معنا"
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
