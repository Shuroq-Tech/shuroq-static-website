const translations = {
  en: {
    nav_aboutus: "About Us",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact",
    visiontitle:"Vision & Data Analytics",
    vision_hero_description: "Transform data into strategic advantage with analytics, AI, and intelligent insights that power faster, smarter decisions.",
  vision_highlight_analytics: "End-to-End Analytics",
  vision_highlight_ai: "AI-Powered Insights",
  vision_highlight_realtime: "Real-Time Decisioning",
  data_strategy_title: "Data Strategy",
  data_strategy_description: "Building a robust foundation for data-driven decision making through comprehensive data strategy and governance frameworks.",
  governance_title: "Governance & Management",
  governance_item1: "Data governance and stewardship models",
  governance_item2: "Data architecture design and standards",
  governance_item3: "Data quality assessment and cleansing",
  governance_item4: "Master data management (MDM)",
  governance_item5: "Data lifecycle management policies",
  strategic_outcomes_title: "Strategic Outcomes",
  strategic_outcomes_description: "We align your data initiatives with business goals, ensuring data assets are trusted, secure, and ready for analytics at scale.",
  metric_accuracy_value: "90%",
  metric_accuracy_label: "Improved data accuracy",
  metric_speed_value: "3x",
  metric_speed_label: "Faster insight delivery",
  analytics_services_title: "Analytics Services",
  analytics_services_description: "Transform raw data into actionable insights with our comprehensive analytics services spanning the entire analytics maturity curve.",
  descriptive_analytics_title: "Descriptive Analytics",
  descriptive_analytics_description: "Understand what happened through historical data analysis and reporting.",
  diagnostic_analytics_title: "Diagnostic Analytics",
  diagnostic_analytics_description: "Discover why it happened through root-cause analysis and exploration.",
  predictive_analytics_title: "Predictive Analytics",
  predictive_analytics_description: "Forecast what will happen using statistical models and machine learning.",
  prescriptive_analytics_title: "Prescriptive Analytics",
  prescriptive_analytics_description: "Recommend actions based on data insights and optimization engines.",
  realtime_analytics_title: "Real-time Analytics",
  realtime_analytics_description: "Instant insights for immediate decision-making and response.",
  business_intelligence_title: "Business Intelligence",
  business_intelligence_description: "Empower your teams with intuitive business intelligence solutions that make data accessible and actionable for everyone.",
  bi_capabilities_title: "BI Capabilities",
  bi_capability1: "Interactive dashboards and reports",
  bi_capability2: "Data visualization and storytelling",
  bi_capability3: "Self-service BI tools implementation",
  bi_capability4: "Executive reporting and KPI tracking",
  bi_capability5: "Operational reporting and ad-hoc analysis",
  bi_capability6: "Embedded analytics solutions",
  core_technologies_title: "Core Technologies",
  tech_power_bi: "Power BI",
  tech_tableau: "Tableau",
  tech_qlik: "Qlik",
  tech_looker: "Looker",
  tech_sap: "SAP BusinessObjects",
  core_tech_description: "We build BI ecosystems that align to your data estate, enabling confident, role-based decisioning.",
  advanced_analytics_title: "Advanced Analytics & AI",
  advanced_analytics_description: "Leverage cutting-edge AI and machine learning technologies to unlock hidden patterns and drive innovation.",
  ml_ops_title: "Machine Learning & MLOps",
  ml_ops_description: "Model development, deployment, monitoring, and continuous optimization.",
  ai_automation_title: "AI-Powered Automation",
  ai_automation_description: "Intelligent assistants and decision automation for faster outcomes.",
  big_data_title: "Big Data Analytics",
  big_data_description: "Distributed processing for massive data volumes and complex queries.",
  nlp_vision_title: "NLP & Computer Vision",
  nlp_vision_description: "Text intelligence and visual pattern recognition for advanced insights.",
  anomaly_detection_title: "Anomaly Detection",
  anomaly_detection_description: "Identify fraud, outages, and operational risks in real time.",
  recommendation_engines_title: "Recommendation Engines",
  recommendation_engines_description: "Personalized experiences and upsell strategies driven by AI.",
  tech_python: "Python",
  tech_r: "R",
  tech_tensorflow: "TensorFlow",
  tech_pytorch: "PyTorch",
  tech_spark: "Apache Spark",
  tech_hadoop: "Hadoop",
  tech_azure_ml: "Azure ML",
  tech_aws_sagemaker: "AWS SageMaker",
  data_engineering_title: "Data Engineering",
  data_engineering_description: "Build scalable and reliable data infrastructure that supports your analytics and AI initiatives.",
  data_engineering_capabilities_title: "Core Capabilities",
  data_capability1: "Data pipeline design and implementation",
  data_capability2: "ETL/ELT processes and automation",
  data_capability3: "Data warehouse and data lake solutions",
  data_capability4: "Cloud data platforms and modernization",
  data_capability5: "Data catalog and metadata management",
  data_capability6: "Real-time data streaming architectures",
  cloud_platforms_title: "Cloud Platforms",
  cloud_snowflake: "Snowflake",
  cloud_databricks: "Databricks",
  cloud_bigquery: "BigQuery",
  cloud_azure_synapse: "Azure Synapse",
  cloud_aws_redshift: "AWS Redshift",
  cloud_platforms_description: "We ensure your pipelines are secure, resilient, and optimized for performance.",
  industry_applications_title: "Industry Applications",
  industry_applications_description: "Tailored analytics solutions designed for your industry's unique challenges and opportunities.",
  customer_analytics_title: "Customer Analytics",
  customer_analytics_description: "Customer lifetime value, churn prediction, and sentiment analysis.",
  operational_analytics_title: "Operational Analytics",
  operational_analytics_description: "Supply chain optimization, predictive maintenance, process efficiency.",
  financial_analytics_title: "Financial Analytics",
  financial_analytics_description: "Risk modeling, fraud detection, and revenue forecasting.",
  marketing_analytics_title: "Marketing Analytics",
  marketing_analytics_description: "Campaign effectiveness, attribution modeling, and ROI measurement.",
  hr_analytics_title: "HR Analytics",
  hr_analytics_description: "Talent acquisition, retention, and workforce planning.",
  key_benefits_title: "Key Benefits",
  key_benefits_description: "Unlock measurable outcomes and sustained business impact through analytics excellence.",
  benefit_data_driven_title: "Data-Driven Decision Making",
  benefit_data_driven_description: "Move from intuition to insight-based strategies.",
  benefit_competitive_title: "Competitive Advantage",
  benefit_competitive_description: "Stay ahead with predictive and prescriptive insights.",
  benefit_cost_title: "Cost Optimization",
  benefit_cost_description: "Identify inefficiencies and optimization opportunities.",
  benefit_revenue_title: "Revenue Growth",
  benefit_revenue_description: "Uncover new revenue streams and market opportunities.",
  benefit_operational_title: "Operational Excellence",
  benefit_operational_description: "Streamline processes through data-driven optimization.",
  benefit_risk_title: "Risk Mitigation",
  benefit_risk_description: "Identify and address risks proactively.",
  benefit_customer_title: "Enhanced Customer Experience",
  benefit_customer_description: "Understand and anticipate customer needs.",
  approach_title: "Our Approach",
  approach_description: "A proven methodology to take your organization from discovery to lasting analytics transformation.",
  step1_title: "Discovery & Assessment",
  step1_description: "Understanding your data landscape and business objectives.",
  step2_title: "Strategy Development",
  step2_description: "Creating a roadmap aligned with business goals.",
  step3_title: "Solution Design",
  step3_description: "Architecting the right analytics solution.",
  step4_title: "Implementation",
  step4_description: "Building and deploying analytics platforms.",
  step5_title: "Enablement",
  step5_description: "Training teams and establishing analytics culture.",
  step6_title: "Continuous Improvement",
  step6_description: "Iterating and optimizing for maximum value.",
  cta_title: "Start Your Data Journey",
  cta_description: "Accelerate your analytics transformation with Shuroq's data and AI experts.",
  cta_button_primary: "Request a Consultation",
  cta_button_secondary: "Back to Services",

  },
  ar:{
    nav_aboutus: "معلومات عنا",
    nav_services:"الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
    visiontitle:"الرؤية وتحليلات البيانات",
    vision_hero_description: "حوّل البيانات إلى ميزة استراتيجية باستخدام التحليلات والذكاء الاصطناعي والرؤى الذكية التي تمكن اتخاذ قرارات أسرع وأكثر ذكاءً.",
  vision_highlight_analytics: "تحليلات شاملة",
  vision_highlight_ai: "رؤى مدعومة بالذكاء الاصطناعي",
  vision_highlight_realtime: "اتخاذ قرارات فورية",
  data_strategy_title: "استراتيجية البيانات",
  data_strategy_description: "بناء أساس قوي لصنع القرارات المدعومة بالبيانات من خلال أطر عمل شاملة لاستراتيجية البيانات والحوكمة.",
  governance_title: "الحوكمة والإدارة",
  governance_item1: "نماذج حوكمة البيانات والإشراف",
  governance_item2: "تصميم ومعايير بنية البيانات",
  governance_item3: "تقييم جودة البيانات وتنظيفها",
  governance_item4: "إدارة البيانات الرئيسية (MDM)",
  governance_item5: "سياسات إدارة دورة حياة البيانات",
  strategic_outcomes_title: "النتائج الاستراتيجية",
  strategic_outcomes_description: "نحن ننسق مبادرات البيانات الخاصة بك مع أهداف الأعمال، مما يضمن أن أصول البيانات موثوقة وآمنة وجاهزة للتحليلات على نطاق واسع.",
  metric_accuracy_value: "90%",
  metric_accuracy_label: "تحسين دقة البيانات",
  metric_speed_value: "3x",
  metric_speed_label: "تسليم رؤى أسرع",
  analytics_services_title: "خدمات التحليلات",
  analytics_services_description: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام خدمات التحليلات الشاملة التي تغطي منحنى النضج التحليلي بأكمله.",
  descriptive_analytics_title: "التحليلات الوصفية",
  descriptive_analytics_description: "افهم ما حدث من خلال تحليل البيانات التاريخية وإعداد التقارير.",
  diagnostic_analytics_title: "التحليلات التشخيصية",
  diagnostic_analytics_description: "اكتشف سبب حدوث ذلك من خلال تحليل السبب الجذري والاستكشاف.",
  predictive_analytics_title: "التحليلات التنبؤية",
  predictive_analytics_description: "توقع ما سيحدث باستخدام النماذج الإحصائية والتعلم الآلي.",
  prescriptive_analytics_title: "التحليلات التوجيهية",
  prescriptive_analytics_description: "قم بالتوصية بإجراءات بناءً على رؤى البيانات ومحركات التحسين.",
  realtime_analytics_title: "التحليلات الفورية",
  realtime_analytics_description: "رؤى فورية لاتخاذ القرار والاستجابة الفورية.",
  business_intelligence_title: "ذكاء الأعمال",
  business_intelligence_description: "مكن فرقك باستخدام حلول ذكاء الأعمال البديهية التي تجعل البيانات في متناول الجميع وقابلة للتنفيذ.",
  bi_capabilities_title: "قدرات ذكاء الأعمال",
  bi_capability1: "لوحات التحكم التفاعلية والتقارير",
  bi_capability2: "تصور البيانات وسرد القصص",
  bi_capability3: "تنفيذ أدوات ذكاء الأعمال الذاتية",
  bi_capability4: "تقارير الإدارة وتتبع مؤشرات الأداء الرئيسية",
  bi_capability5: "التقارير التشغيلية والتحليل المخصص",
  bi_capability6: "حلول التحليلات المدمجة",
  core_technologies_title: "التقنيات الأساسية",
  tech_power_bi: "Power BI",
  tech_tableau: "Tableau",
  tech_qlik: "Qlik",
  tech_looker: "Looker",
  tech_sap: "SAP BusinessObjects",
  core_tech_description: "نحن نبني أنظمة ذكاء أعمال تتوافق مع بيئة البيانات الخاصة بك، مما يتيح اتخاذ قرارات واثقة قائمة على الأدوار.",
  advanced_analytics_title: "التحليلات المتقدمة والذكاء الاصطناعي",
  advanced_analytics_description: "استفد من تقنيات الذكاء الاصطناعي والتعلم الآلي المتطورة لفتح الأنماط الخفية ودفع الابتكار.",
  ml_ops_title: "التعلم الآلي وعمليات ML",
  ml_ops_description: "تطوير النماذج، النشر، المراقبة، والتحسين المستمر.",
  ai_automation_title: "الأتمتة المدعومة بالذكاء الاصطناعي",
  ai_automation_description: "مساعدين أذكياء وأتمتة القرارات لتحقيق نتائج أسرع.",
  big_data_title: "تحليلات البيانات الضخمة",
  big_data_description: "معالجة موزعة لحجوم بيانات ضخمة واستعلامات معقدة.",
  nlp_vision_title: "معالجة اللغات الطبيعية ورؤية الكمبيوتر",
  nlp_vision_description: "ذكاء النصوص والتعرف على الأنماط المرئية لرؤى متقدمة.",
  anomaly_detection_title: "كشف الشذوذ",
  anomaly_detection_description: "تحديد الاحتيال، الأعطال، والمخاطر التشغيلية في الوقت الفعلي.",
  recommendation_engines_title: "محركات التوصية",
  recommendation_engines_description: "تجارب مخصصة واستراتيجيات بيع إضافية مدفوعة بالذكاء الاصطناعي.",
  tech_python: "Python",
  tech_r: "R",
  tech_tensorflow: "TensorFlow",
  tech_pytorch: "PyTorch",
  tech_spark: "Apache Spark",
  tech_hadoop: "Hadoop",
  tech_azure_ml: "Azure ML",
  tech_aws_sagemaker: "AWS SageMaker",
  data_engineering_title: "هندسة البيانات",
  data_engineering_description: "بناء بنية تحتية للبيانات قابلة للتطوير وموثوقة تدعم مبادرات التحليلات والذكاء الاصطناعي الخاصة بك.",
  data_engineering_capabilities_title: "القدرات الأساسية",
  data_capability1: "تصميم وتنفيذ خطوط أنابيب البيانات",
  data_capability2: "عمليات ETL/ELT والأتمتة",
  data_capability3: "حلول مستودعات البيانات وبحيرات البيانات",
  data_capability4: "منصات البيانات السحابية والتحديث",
  data_capability5: "فهرس البيانات وإدارة البيانات الوصفية",
  data_capability6: "بنيات تدفق البيانات الفوري",
  cloud_platforms_title: "المنصات السحابية",
  cloud_snowflake: "Snowflake",
  cloud_databricks: "Databricks",
  cloud_bigquery: "BigQuery",
  cloud_azure_synapse: "Azure Synapse",
  cloud_aws_redshift: "AWS Redshift",
  cloud_platforms_description: "نضمن أن خطوط الأنابيب الخاصة بك آمنة وقادرة على الصمود ومحسنة للأداء.",
  industry_applications_title: "التطبيقات الصناعية",
  industry_applications_description: "حلول تحليلية مصممة خصيصًا للتحديات والفرص الفريدة لقطاعك.",
  customer_analytics_title: "تحليلات العملاء",
  customer_analytics_description: "قيمة العميل مدى الحياة، التنبؤ بالانسحاب، وتحليل المشاعر.",
  operational_analytics_title: "تحليلات العمليات",
  operational_analytics_description: "تحسين سلسلة التوريد، الصيانة التنبؤية، وكفاءة العمليات.",
  financial_analytics_title: "تحليلات مالية",
  financial_analytics_description: "نمذجة المخاطر، كشف الاحتيال، والتنبؤ بالإيرادات.",
  marketing_analytics_title: "تحليلات التسويق",
  marketing_analytics_description: "فعالية الحملات، نمذجة الإسناد، وقياس العائد على الاستثمار.",
  hr_analytics_title: "تحليلات الموارد البشرية",
  hr_analytics_description: "اكتساب المواهب، الاحتفاظ، وتخطيط القوى العاملة.",
  key_benefits_title: "الفوائد الرئيسية",
  key_benefits_description: "افتح النتائج القابلة للقياس والتأثير التجاري المستدام من خلال التميز في التحليلات.",
  benefit_data_driven_title: "صنع القرارات المستند إلى البيانات",
  benefit_data_driven_description: "انتقل من الحدس إلى الاستراتيجيات القائمة على الرؤى.",
  benefit_competitive_title: "الميزة التنافسية",
  benefit_competitive_description: "ابقَ في المقدمة مع رؤى تنبؤية وتوجيهية.",
  benefit_cost_title: "تحسين التكاليف",
  benefit_cost_description: "حدد أوجه القصور وفرص التحسين.",
  benefit_revenue_title: "نمو الإيرادات",
  benefit_revenue_description: "اكتشف تيارات إيرادات جديدة وفرص سوقية.",
  benefit_operational_title: "التميز التشغيلي",
  benefit_operational_description: "بسّط العمليات من خلال التحسين القائم على البيانات.",
  benefit_risk_title: "التخفيف من المخاطر",
  benefit_risk_description: "حدد المخاطر وتعامل معها بشكل استباقي.",
  benefit_customer_title: "تحسين تجربة العملاء",
  benefit_customer_description: "افهم واحتسب احتياجات العملاء.",
  approach_title: "نهجنا",
  approach_description: "منهجية مثبتة لنقل مؤسستك من الاكتشاف إلى التحول التحليلي الدائم.",
  step1_title: "الاكتشاف والتقييم",
  step1_description: "فهم بيئة البيانات الخاصة بك والأهداف التجارية.",
  step2_title: "تطوير الاستراتيجية",
  step2_description: "إنشاء خارطة طريق تتماشى مع الأهداف التجارية.",
  step3_title: "تصميم الحلول",
  step3_description: "تصميم حل التحليلات المناسب.",
  step4_title: "التنفيذ",
  step4_description: "بناء ونشر منصات التحليلات.",
  step5_title: "التمكين",
  step5_description: "تدريب الفرق وإنشاء ثقافة التحليلات.",
  step6_title: "التحسين المستمر",
  step6_description: "التكرار والتحسين لتحقيق أقصى قيمة.",
  cta_title: "ابدأ رحلتك مع البيانات",
  cta_description: "عجل بتحولك التحليلي مع خبراء البيانات والذكاء الاصطناعي في شروق.",
  cta_button_primary: "اطلب استشارة",
  cta_button_secondary: "العودة إلى الخدمات",
  }
  
}

// Toggle dropdown visibility
document.getElementById("langBtn").addEventListener("click", () => {
  const langMenu = document.getElementById("langMenu");
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});




// Change language function
function changeLanguage(lang){
  // Update text content based on selected language
  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });

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
