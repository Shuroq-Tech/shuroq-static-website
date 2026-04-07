// Translation system for FaaS page
const translations = {
  en: {
    // Hero Section
    herotitle: "FaaS — Function as a Service",
    heropara: "Serverless Architecture for Infinite Scale and Zero Operational Overhead",
    serverspan: "Zero Infrastructure",
    autospan: "Auto-scaling",
    costspan: "Pay-per-use",
    
    // Overview Section
    overviewtitle: "Serverless Computing Revolution",
    overviewpara: "Function as a Service represents a paradigm shift in cloud computing where developers can run code without provisioning or managing servers. This serverless approach enables businesses to focus on writing code that delivers business value while the cloud provider handles all infrastructure management, scaling, and operations.",
    whytitle: "Why FaaS Matters",
    whydesc: "FaaS eliminates the need for server provisioning, patching, and operational management. Developers can deploy individual functions that automatically scale with demand, pay only for actual compute time, and benefit from built-in fault tolerance and high availability. This model significantly reduces time-to-market and operational costs while enabling teams to focus on innovation rather than infrastructure.",
    shuroqtitle: "Shuroq's FaaS Expertise",
    shuroqdesc: "Our FaaS specialists help organizations harness the power of serverless computing across major cloud platforms. We design event-driven architectures, implement best practices for function development, and optimize for performance and cost. Our comprehensive FaaS services cover everything from initial architecture design to implementation, monitoring, and ongoing optimization.",
    
    // Benefits
    benefitstitle: "Key Benefits",
    benefit1strong: "Zero Server Management:",
    benefit1: "No servers to patch, update, or manage",
    benefit2strong: "Automatic Scaling:",
    benefit2: "Scales from zero to millions of requests automatically",
    benefit3strong: "Cost Efficiency:",
    benefit3: "Pay only for actual execution time, not idle time",
    benefit4strong: "High Availability:",
    benefit4: "Built-in redundancy and fault tolerance",
    benefit5strong: "Faster Development:",
    benefit5: "Focus on code, not infrastructure",
    
    // Services Section
    servicestitle: "FaaS Services & Capabilities",
    service1title: "Serverless Function Development",
    service1desc: "Developing custom functions using Node.js, Python, Go, and other runtimes optimized for serverless execution with proper error handling, logging, and monitoring.",
    service2title: "Event-Driven Architecture Design",
    service2desc: "Designing loosely coupled, event-driven systems using message queues, event buses, and streaming platforms for asynchronous communication between services.",
    service3title: "API Integration with Serverless",
    service3desc: "Integrating serverless functions with APIs using API Gateway, HTTP endpoints, and GraphQL for seamless connectivity with external systems.",
    service4title: "Cold Start Optimization",
    service4desc: "Implementing strategies to minimize cold start latency through function warming, provisioned concurrency, and optimized packaging techniques.",
    service5title: "Serverless Security Best Practices",
    service5desc: "Implementing security best practices including IAM roles, VPC configuration, encryption, input validation, and compliance frameworks.",
    service6title: "Multi-Cloud Serverless Strategy",
    service6desc: "Designing cloud-agnostic serverless solutions that can run across AWS Lambda, Azure Functions, and Google Cloud Functions for vendor flexibility.",
    
    // Benefits Section
    benefitstitle2: "Business Benefits",
    benefitcard1title: "Zero server management",
    benefitcard1desc: "Eliminate the need for server provisioning, patching, and operational management completely.",
    benefitcard2title: "Pay-per-execution pricing model",
    benefitcard2desc: "Pay only for the exact compute time your functions consume, reducing costs significantly.",
    benefitcard3title: "Automatic scaling to millions of requests",
    benefitcard3desc: "Automatically scale from zero to handle millions of concurrent requests without manual intervention.",
    benefitcard4title: "Faster development cycles",
    benefitcard4desc: "Accelerate development by focusing on business logic rather than infrastructure management.",
    
    // Technology Stack Section
    techtitle: "Technology Stack",
    tech1title: "Serverless Platforms",
    tech2title: "API & Event Services",
    tech3title: "Development Frameworks",
    tech4title: "Monitoring & Observability",
    
    // Use Cases Section
    usecasetitle: "Use Cases",
    usecase1title: "Real-time File Processing",
    usecase1desc: "Process uploaded files, images, and documents in real-time using serverless functions that trigger automatically on file uploads to S3 or other storage services.",
    usecase2title: "IoT Backend Processing",
    usecase2desc: "Handle data from IoT devices and sensors using serverless functions that process telemetry data, trigger alerts, and update dashboards in real-time.",
    usecase3title: "Scheduled Data Processing Jobs",
    usecase3desc: "Run periodic data processing tasks, ETL jobs, and batch operations using scheduled serverless functions that execute on defined intervals.",
    usecase4title: "Webhook Processors",
    usecase4desc: "Create webhook handlers that respond to events from third-party services, payment gateways, and SaaS platforms with custom business logic.",
    
    // CTA Section
    ctatitle: "Ready to Embrace Serverless Architecture?",
    ctadesc: "Let's discuss how our FaaS expertise can help you build scalable, cost-effective applications with zero operational overhead",
    ctabutton: "Get Started Today",
    ctabutton2: "Back to Product Engineering"
  },
  ar: {
    // Hero Section
    herotitle: "الخدمة كوظيفة - الخدمة",
    heropara: "هندسة بلا خوادم للتوسع اللانهائي وتقليل العبء التشغيلي إلى صفر",
    serverspan: "بنية تحتية صفرية",
    autospan: "تحجيم التلقائي",
    costspan: "الدفع حسب الاستخدام",
    
    // Overview Section
    overviewtitle: "ثورة الحوسبة بلا خوادم",
    overviewpara: "الخدمة كوظيفة - الخدمة تمثل تحولاً جذرياً في الحوسبة السحابية حيث يمكن للمطورين تشغيل التعليمات البرمجية بدون توفير أو إدارة الخوادم. هذا النهج بلا خوادم يمكّن الشركات من التركيز على كتابة التعليمات البرمجية التي تسلم قيمة تجارية بينما يتعامل مزود الخدمة السحابي مع جميع إدارة البنية التحتية والتوسع والعمليات.",
    whytitle: "لماذا الخدمة كوظيفة - الخدمة مهمة",
    whydesc: "الخدمة كوظيفة - الخدمة تلغي الحاجة إلى توفير الخوادم وتحديثها وإدارتها التشغيلية. يمكن للمطورين نشر وظائف فردية تتوسع تلقائياً مع الطلب، والدفع فقط لوقت الحوسبة الفعلي، والاستفادة من التسامح مع الأخطاء والتوافر العالي المدمج. هذا النموذج يقلل بشكل كبير من وقت الوصول إلى السوق والتكاليف التشغيلية مع تمكين الفرق من التركيز على الابتكار بدلاً من البنية التحتية.",
    shuroqtitle: "خبرة شروق في الخدمة كوظيفة - الخدمة",
    shuroqdesc: "يساعد متخصصو الخدمة كوظيفة - الخدمة في شروق المؤسسات على استغلال قوة الحوسبة بلا خوادم عبر منصات السحاب الرئيسية. نصمم هندسات مدفوعة بالأحداث، ونطبق أفضل الممارسات لتطوير الوظائف، ونحسن للأداء والتكلفة. تشمل خدمات الخدمة كوظيفة - الخدمة الشاملة لدينا كل شيء من التصميم المعماري الأولي إلى التنفيذ والمراقبة والتحسين المستمر.",
    
    // Benefits
    benefistitle: "الفوائد الرئيسية",
    benefi1strong: "إدارة خوادم صفرية:",
    benefi1: "لا حاجة لتوفير الخوادم أو تحديثها أو إدارتها",
    benefi2strong: "التوسع التلقائي:",
    benefi2: "يتوسع تلقائياً من الصفر إلى ملايين الطلبات",
    benefi3strong: "كفاءة التكاليف:",
    benefi3: "ادفع فقط لوقت التنفيذ الفعلي، ليس لوقت الخمول",
    benefi4strong: "التوافر العالي:",
    benefi4: "تكرار مدمج وتسامح مع الأخطاء مدمج",
    benefi5strong: "تطوير أسرع:",
    benefi5: "التركيز على التعليمات البرمجية، وليس البنية التحتية",
    
    // Services Section
    servicestitle: "خدمات وقدرات الخدمة كوظيفة - الخدمة",
    service1title: "تطوير الوظائف بلا خوادم",
    service1desc: "تطوير وظائف مخصصة باستخدام Node.js و Python و Go وبيئات تشغيل أخرى محسّنة للتنفيذ بلا خوادم مع معالجة الأخطاء المناسبة والتسجيل والمراقبة.",
    service2title: "تصميم هندسة مدفوعة بالأحداث",
    service2desc: "تصميم أنظمة غير مترابطة بشكل فضفاء ومدفوعة بالأحداث باستخدام قوائم الرسائل وحافلات الأحداث والمنصات البث للتواصل غير المتزامن بين الخدمات.",
    service3title: "تكامل API مع الخدمة كوظيفة - الخدمة",
    service3desc: "تكامل وظائف بلا خوادم مع واجهات برمجة التطبيقات باستخدام بوابة API ونقاط النهاية HTTP و GraphQL للتواصل السلس مع الأنظمة الخارجية.",
    service4title: "تحسين بدء التشغيل البارد",
    service4desc: "تنفيذ استراتيجيات لتقليل زمن الوصول البارد من خلال تسخين الوظائف والتزامن المزود والعبوات المحسّنة.",
    service5title: "أفضل ممارسات أمان الخدمة كوظيفة - الخدمة",
    service5desc: "تنفيذ أفضل ممارسات الأمان بما في ذلك أدوار IAM وتكوين VPC والتشفير والتحقق من المدخلات وأطر الامتثال.",
    service6title: "استراتيجية الخدمة كوظيفة - الخدمة متعددة السحابة",
    service6desc: "تصميم حلول الخدمة كوظيفة - الخدمة محايدة للسحابة يمكن تشغيلها عبر AWS Lambda و Azure Functions و Google Cloud Functions لمرونة المورّد.",
    
    // Benefits Section
    benefistitle2: "الفوائد التجارية",
    beneficard1title: "إدارة خوادم صفرية",
    beneficard1desc: "إلغاء الحاجة الكاملة لتوفير الخوادم وتحديثها وإدارتها التشغيلية.",
    beneficard2title: "نموذج تسعير الدفع حسب التنفيذ",
    beneficard2desc: "ادفع فقط لوقت التنفيذ الدقيق الذي تستهلكه وظائفك، مما يقلل التكاليف بشكل كبير.",
    beneficard3title: "التوسع التلقائي إلى ملايين الطلبات",
    beneficard3desc: "يتوسع تلقائياً من الصفر للتعامل مع ملايين الطلبات المتزامنة بدون تدخل يدوي.",
    beneficard4title: "دورات تطوير أسرع",
    beneficard4desc: "تسريع التطوير من خلال التركيز على المنطق التجاري بدلاً من إدارة البنية التحتية.",
    
    // Technology Stack Section
    techtitle: "مجموعة التقنيات",
    tech1title: "منصات الخدمة كوظيفة - الخدمة",
    tech2title: "خدمات API والأحداث",
    tech3title: "أطر التطوير",
    tech4title: "المراقبة وقابلية المراقبة",
    
    // Use Cases Section
    usecasetitle: "حالات الاستخدام",
    usecase1title: "معالجة الملفات في الوقت الفعلي",
    usecase1desc: "معالجة الملفات والصور والمستندات في الوقت الفعلي باستخدام وظائف بلا خوادم يتم تشغيلها تلقائياً عند رفع الملفات إلى S3 أو خدمات التخزين الأخرى.",
    usecase2title: "معالجة بيانات إنترنت الأشياء",
    usecase2desc: "معالجة البيانات من أجهزة إنترنت الأشياء والمستشعرات باستخدام وظائف بلا خوادم تعالج بيانات القياس وتشغيل التنبيهات وتحديث لوحات المعلومات في الوقت الفعلي.",
    usecase3title: "وظائف معالجة البيانات المجدولة",
    usecase3desc: "تشغيل مهام معالجة البيانات الدورية ووظائف ETL والعمليات المجمعة باستخدام وظائف بلا خوادم مجدولة تنفذ في فترات محددة.",
    usecase4title: "معالجات الويب هوك",
    usecase4desc: "إنشاء معالجات ويب هوك تستجيب للأحداث من خدمات الطرف الثالث وبوابات الدفع والمنصات SaaS مع منطق تجاري مخصص.",
    
    // CTA Section
    ctatitle: "هل أنت مستعد لتبني هندسة بلا خوادم؟",
    ctadesc: "دعنا نناقش كيف يمكن لخبرة شروق في الخدمة كوظيفة - الخدمة مساعدتك في بناء تطبيقات قابلة للتوسع وفعالة من حيث التكلفة مع عدم وجود عبء تشغيلي",
    ctabutton: "ابدأ اليوم",
    ctabutton2: "العودة إلى هندسة المنتجات"
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

