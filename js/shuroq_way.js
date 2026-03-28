// Translation system for Shuroq Way page
const translations = {
  en: {
    // Hero Section
    hero_title: "The Shuroq Way",
    hero_subtitle: "Structured Engineering. Automation-Driven. Outcome-Focused.",
    hero_intro: "At Shuroq, we believe technology should accelerate growth - not create operational complexity. The Shuroq Way defines how we consult, architect, implement, and deliver scalable digital systems for startups and enterprises.",
    
    // What Makes Us Different Section
    difference_heading: "What Makes Us Different",
    diff1_title: "Consulting with Engineering Depth",
    diff1_text: "Unlike traditional service providers, we don't just execute tasks. We begin with structured technical consulting to:",
    diff1_point1: "Understand business goals",
    diff1_point2: "Identify infrastructure bottlenecks",
    diff1_point3: "Design scalable architectures",
    diff1_point4: "Define automation strategies",
    diff2_title: "Automation-First Execution",
    diff2_text: "Automation is not an afterthought - it is foundational. We implement:",
    diff2_point1: "Infrastructure as Code (IaC)",
    diff2_point2: "CI/CD pipelines",
    diff2_point3: "Automated testing workflows",
    diff2_point4: "Cloud-native deployments",
    diff2_point5: "Monitoring & observability systems",
    diff3_title: "Agile & Iterative Delivery",
    diff3_text: "We follow Agile methodologies to ensure flexibility and transparency. Our approach includes:",
    diff3_point1: "Sprint-based execution",
    diff3_point2: "Continuous feedback loops",
    diff3_point3: "Rapid iteration cycles",
    diff3_point4: "Clear milestone tracking",
    diff4_title: "Project-Based Precision",
    diff4_text: "As a startup ourselves, we understand the importance of:",
    diff4_point1: "Clear scope definition",
    diff4_point2: "Timely delivery",
    diff4_point3: "Cost efficiency",
    diff4_point4: "Performance accountability",
    
    // How We Work Section
    process_heading: "How We Work",
    step1_title: "Discover & Define",
    step1_text: "We collaborate with stakeholders to understand product goals, analyze current infrastructure, identify scaling challenges, and define technical roadmaps.",
    step2_title: "Architect & Automate",
    step2_text: "We design cloud-native architectures built for scalability, security, observability, and performance. Automation pipelines are implemented from day one.",
    step3_title: "Implement & Integrate",
    step3_text: "We deliver production-ready systems through DevOps enablement, cloud deployment, platform engineering, and data & AI integration - all implemented with best engineering practices.",
    step4_title: "Optimize & Stabilize",
    step4_text: "Post-deployment, we ensure performance tuning, cost optimization, security hardening, and reliability engineering.",
    
    // Our Expertise Section
    expertise_heading: "Our Expertise",
    exp1: "DevOps Engineering",
    exp2: "Cloud Architecture & Migration",
    exp3: "Kubernetes & Containerization",
    exp4: "AI & Data Infrastructure",
    exp5: "Platform Engineering",
    exp6: "Infrastructure Modernization",
    exp7: "Observability & Monitoring",
    exp8: "Cloud Cost Optimization",
    
    // CTA Section
    cta_heading: "We build systems that scale with ambition.",
    cta_text: "Partner with Shuroq to transform complexity into structured, automated, and resilient digital infrastructure.",
    cta_button: "Partner With Shuroq"
  },
  ar: {
    // Hero Section
    hero_title: "طريق شروق",
    hero_subtitle: "هندسة منظمة. أتمتة بالأتمتة. تركز على النتائج.",
    hero_intro: "في شروق، نؤمن بأن التكنولوجيا يجب أن تسرع النمو - لا تخلق تعقيدًا تشغيليًا. طريق شروق يحدد كيف نستشير، ونصمم، وننفذ أنظمة رقمية قابلة للتوسع للشركات الناشئة والمؤسسات الكبرى.",
    
    // What Makes Us Different Section
    difference_heading: "ما يميزنا",
    diff1_title: "استشارات مع عمق هندسي",
    diff1_text: "على عكس مقدمي الخدمات التقليديين، لا ننفذ المهام فقط. نبدأ بالاستشارات الفنية المنظمة ل:",
    diff1_point1: "فهم الأهداف التجارية",
    diff1_point2: "تحديد اختنات البنية التحتية",
    diff1_point3: "تصميم هياكل قابلة للتوسع",
    diff1_point4: "تحديد استراتيجيات الأتمتة",
    diff2_title: "الأتمتة أولاً",
    diff2_text: "الأتمتة ليست فكرة لاحقة - إنها أساسية. ننفذ:",
    diff2_point1: "البنية التحتية كتعليمات برمجية (IaC)",
    diff2_point2: "خطوط التكامل المستمر/التسليم المستمر وتجربة المطور",
    diff2_point3: "سير عمل الاختبار المؤتمت",
    diff2_point4: "النشر السحابي الأصلي",
    diff2_point5: "أنظمة المراقبة وقابلية المراقبة",
    diff3_title: "التسليم المرن والتكراري",
    diff3_text: "نتبع منهجيات أجايل لضمان المرونة والشفافية. نهجنا يشمل:",
    diff3_point1: "التنفيذ القائم على السرعات",
    diff3_point2: "حلقات التغذية المستمرة",
    diff3_point3: "دورات التكرار السريع",
    diff3_point4: "تتبق المعالم الواضحة",
    diff4_title: "دقة المشروع",
    diff4_text: "بصفتنا شركة ناشئة، نفهم أهمية:",
    diff4_point1: "تعريف النطاق الواضح",
    diff4_point2: "التسليم في الوقت المناسب",
    diff4_point3: "كفاءة التكاليف",
    diff4_point4: "مساءلة الأداء",
    
    // How We Work Section
    process_heading: "كيف نعمل",
    step1_title: "اكتشف وتحديد",
    step1_text: "نتعاون مع أصحاب المصلحة لفهم أهداف المنتج، وتحليل البنية التحتية الحالية، وتحديد تحديات التوسع، وتحديد الخرائط الفنية.",
    step2_title: "التصميم والأتمتة",
    step2_text: "نصمم هياكل سحابية أصلية مبنية على قابلية التوسع، والأمان، وقابلية المراقبة، والأداء. يتم تطبيق خطوط الأتمتة من اليوم الأول.",
    step3_title: "التنفيذ والتكامل",
    step3_text: "نسلم أنظمة جاهزة للإنتاج من خلال تمكين DevOps، والنشر السحابي، وهندسة المنصات، وتكامل البيانات والذكاء الاصطناعي - كل ذلك يتم بتطبيق أفضل ممارسات الهندسة.",
    step4_title: "التحسين والتثبيت",
    step4_text: "بعد النشر، نضمان ضبط الأداء، وتحسين التكاليف، وتقوية الأمان، وهندسة الموثوقية.",
    
    // Our Expertise Section
    expertise_heading: "خبرتنا",
    exp1: "هندسة DevOps",
    exp2: "هندسة السحابة والهجرة",
    exp3: "Kubernetes والتأصنفة",
    exp4: "الذكاء الاصطناعي والبنية التحتية",
    exp5: "هندسة المنصات",
    exp6: "تحديث البنية التحتية",
    exp7: "قابلية المراقبة والمراقبة",
    exp8: "تحسين تكاليف السحابة",
    
    // CTA Section
    cta_heading: "نبني أنظمة تتوسع بالطموح.",
    cta_text: "تعاون مع شروق لتحويل التعقيد إلى بنية منظمة، ومؤتمتة، ومرنة للبنية الرقمية.",
    cta_button: "تعاون مع شروق"
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