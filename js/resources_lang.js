const translations = {
    en:{
         nav_aboutus:"About Us",
        nav_services:"Services",
        nav_industries:"Industries",
        nav_careers: "Careers",
        nav_contact: "Contact-Us",
         resources_page_title: "Resources & Insights - Shuroq",
            resources_meta_description: "Explore Shuroq's knowledge hub featuring industry insights, technology trends, and real-world success stories through our comprehensive blogs and case studies.",
            resources_meta_keywords: "technology blogs, case studies, digital transformation, DevOps insights, cloud computing, AI trends",
            resources_og_title: "Resources & Insights - Shuroq",
            resources_og_description: "Explore our knowledge hub featuring industry insights, technology trends, and real-world success stories",
            
            logo_shur: "Shur",
            logo_q: "q",
            nav_about_us: "About Us",
            nav_services: "Services",
            nav_cutting_edge: "Cutting Edge",
            nav_assurance: "Assurance",
            nav_automate: "Automate",
            nav_vision: "Vision",
            nav_industries: "Industries",
            nav_resources: "Resources",
            nav_careers: "Careers",
            nav_contact_us: "Contact-Us",
            
            lang_english: "English",
            lang_arabic: "العربية",
            
            resources_hero_title: "Resources & Insights",
            resources_hero_description: "Explore our knowledge hub featuring industry insights, technology trends, and real-world success stories",
            
            blogs_title: "Blogs & Insights",
            blogs_description1: "Stay ahead of the technology curve with Shuroq's comprehensive blog library. Our team of industry experts, engineers, and technology leaders regularly share in-depth insights, practical guides, and forward-thinking perspectives on the latest trends shaping the digital landscape.",
            blogs_description2: "From DevOps best practices and cloud architecture patterns to artificial intelligence applications and data analytics strategies, our blogs cover a wide spectrum of topics designed to help you navigate the complexities of digital transformation. Each article is crafted to provide actionable insights, real-world examples, and expert recommendations that you can apply directly to your business challenges.",
            blogs_description3: "Whether you're a CTO exploring new technologies, a project manager seeking agile implementation strategies, or a business leader planning your digital transformation journey, our blog content is tailored to provide value at every stage of your technology adoption lifecycle.",
            
            blog_categories_title: "What You'll Find in Our Blogs:",
            category1_title: "Technology Deep Dives",
            category1_description: "Comprehensive explorations of emerging technologies including AI, Machine Learning, Cloud Computing, IoT, and Blockchain",
            category2_title: "Best Practices & Methodologies",
            category2_description: "Proven frameworks for DevOps implementation, Agile transformation, quality engineering, and process automation",
            category3_title: "Industry Trends & Analysis",
            category3_description: "Expert commentary on market shifts, regulatory changes, and evolving customer expectations across multiple sectors",
            category4_title: "How-To Guides & Tutorials",
            category4_description: "Step-by-step instructions for implementing specific technologies, tools, and processes",
            category5_title: "Innovation Spotlights",
            category5_description: "Features on cutting-edge solutions, innovative applications, and future technology predictions",
            category6_title: "Tool Comparisons & Reviews",
            category6_description: "Objective evaluations of platforms, frameworks, and tools to help you make informed technology choices",
            
            blog_features_title: "Why Follow Shuroq's Blog:",
            feature1_title: "📚 Expert-Authored Content",
            feature1_description: "Every blog post is written or reviewed by certified professionals and industry veterans with years of hands-on experience",
            feature2_title: "🎯 Actionable Insights",
            feature2_description: "Move beyond theory with practical recommendations, code snippets, architecture diagrams, and implementation roadmaps",
            feature3_title: "🔄 Regular Updates",
            feature3_description: "New content published weekly, covering the latest technology releases, industry news, and emerging trends",
            feature4_title: "💡 Diverse Perspectives",
            feature4_description: "Content from multiple team members including architects, developers, QA specialists, data scientists, and project managers",
            feature5_title: "🌐 Real-World Application",
            feature5_description: "Insights drawn from actual client engagements and production environments across multiple industries",
            feature6_title: "📊 Data-Driven Analysis",
            feature6_description: "Research-backed articles featuring statistics, benchmarks, and performance metrics",
            
            blog_cta_title: "Stay Updated with Latest Insights",
            blog_cta_description: "Get the latest technology trends and expert advice delivered directly to your inbox",
            blog_cta_button1: "Explore All Blogs",
            blog_cta_button2: "Subscribe to Updates",
            
            case_studies_title: "Case Studies & Success Stories",
            case_studies_description1: "Discover how Shuroq has helped organizations across industries overcome complex technology challenges, achieve digital transformation goals, and drive measurable business outcomes. Our case studies provide detailed, transparent accounts of real-world projects, showcasing the methodologies, technologies, and innovative solutions we've deployed to deliver exceptional results.",
            case_studies_description2: "Each case study is more than just a success story—it's a comprehensive documentation of the journey from initial challenge identification through strategy development, implementation, and measurable outcomes. We believe in showcasing authentic experiences, including the obstacles we navigated, the decisions we made, and the lessons we learned along the way.",
            case_studies_description3: "These real-world examples demonstrate Shuroq's ability to understand unique business contexts, design tailored solutions, and execute complex technology initiatives that create lasting value. Whether you're facing similar challenges or simply want to understand how modern technology solutions are applied in practice, our case studies offer valuable insights and inspiration.",
            
            industry_case_studies_title: "Industry-Specific Case Studies:",
            telecom_case_studies: "🔹 Telecom Sector",
            telecom_case1: "Network infrastructure modernization and cloud migration",
            telecom_case2: "Customer experience platform transformation",
            telecom_case3: "IoT implementation for connected devices",
            telecom_case4: "Real-time analytics for network optimization",
            telecom_case5: "5G readiness and implementation",
            
            automotive_case_studies: "🔹 Automotive Industry",
            automotive_case1: "Connected vehicle platforms and telematics",
            automotive_case2: "Supply chain digitization and predictive maintenance",
            automotive_case3: "Manufacturing process automation",
            automotive_case4: "Quality control systems with AI/ML",
            automotive_case5: "Dealer management system modernization",
            
            bfsi_case_studies: "🔹 BFSI Sector",
            bfsi_case1: "Core banking system transformation",
            bfsi_case2: "Digital banking platform development",
            bfsi_case3: "Fraud detection using machine learning",
            bfsi_case4: "Regulatory compliance automation",
            bfsi_case5: "Customer 360 analytics implementation",
            
            healthcare_case_studies: "🔹 Healthcare",
            healthcare_case1: "Electronic Health Records (EHR) integration",
            healthcare_case2: "Telemedicine platform development",
            healthcare_case3: "Patient data analytics and population health management",
            healthcare_case4: "Healthcare IoT and remote monitoring",
            healthcare_case5: "HIPAA-compliant cloud infrastructure",
            
            finance_case_studies: "🔹 Finance",
            finance_case1: "Trading platform modernization",
            finance_case2: "Risk analytics and reporting systems",
            finance_case3: "Payment gateway integration",
            finance_case4: "Blockchain implementation for transactions",
            finance_case5: "Automated compliance and audit systems",
            
            technology_focused_title: "Technology-Focused Case Studies:",
            tech1_title: "Cloud Migration Success Stories",
            tech1_description: "Legacy infrastructure to AWS/Azure/GCP migrations with zero downtime",
            tech2_title: "DevOps Transformation",
            tech2_description: "CI/CD pipeline implementation reducing deployment time by 80%",
            tech3_title: "Data Analytics Initiatives",
            tech3_description: "Enterprise data warehouse and BI platform deployments delivering actionable insights",
            tech4_title: "Quality Engineering",
            tech4_description: "Test automation frameworks reducing QA cycles from weeks to days",
            tech5_title: "Process Automation",
            tech5_description: "RPA implementations eliminating manual processes and reducing errors by 95%",
            tech6_title: "AI/ML Applications",
            tech6_description: "Predictive models driving business decisions and customer personalization",
            
            measurable_impact_title: "Measurable Impact Across Our Case Studies:",
            metric1_title: "⚡ Performance Improvements",
            metric1_description: "Average 60-70% increase in system performance and response times",
            metric2_title: "💰 Cost Optimization",
            metric2_description: "30-50% reduction in infrastructure and operational costs",
            metric3_title: "🚀 Time-to-Market",
            metric3_description: "50-80% faster deployment cycles and feature releases",
            metric4_title: "📈 Business Growth",
            metric4_description: "Double-digit revenue growth and market share expansion",
            metric5_title: "✅ Quality Enhancement",
            metric5_description: "90%+ reduction in production defects and incidents",
            metric6_title: "👥 User Satisfaction",
            metric6_description: "Significant improvements in customer and employee experience scores",
            metric7_title: "🔒 Security & Compliance",
            metric7_description: "100% adherence to regulatory requirements with enhanced security postures",
            
            case_study_format_title: "Each Case Study Includes:",
            format1_title: "Executive Summary",
            format2_title: "Industry & Client Profile",
            format3_title: "Challenge Statement",
            format4_title: "Solution Overview",
            format5_title: "Technology Stack",
            format6_title: "Implementation Timeline",
            format7_title: "Results & Metrics",
            format8_title: "Client Testimonial",
            format9_title: "Key Takeaways",
            
            case_studies_cta_title: "Explore Real-World Success Stories",
            case_studies_cta_description: "See how we've helped organizations like yours achieve their digital transformation goals",
            case_studies_cta_button1: "View All Case Studies",
            case_studies_cta_button2: "Request Custom Consultation",
            
            additional_resources_title: "Additional Resources",
            resource1_title: "Whitepapers & Research Reports",
            resource1_description: "In-depth analysis and original research on industry trends, technology evaluations, and strategic frameworks",
            resource2_title: "Webinars & Videos",
            resource2_description: "Recorded sessions, demos, and video tutorials from our expert team",
            resource3_title: "eBooks & Guides",
            resource3_description: "Comprehensive downloadable guides on specific topics like cloud migration, DevOps adoption, and data strategy",
            resource4_title: "Infographics",
            resource4_description: "Visual representations of complex concepts, statistics, and process flows",
            resource5_title: "Tools & Templates",
            resource5_description: "Free resources including checklists, assessment frameworks, and project templates",
            
            cta_title: "Ready to Transform Your Business?",
            cta_description: "Let's discuss how we can help you achieve your digital transformation goals with our proven expertise and solutions",
            cta_button: "Contact Us",
    },
    ar:{
        nav_aboutus: "معلومات عنا",
        nav_services: "الخدمات",
        nav_industries: "الصناعات",
        nav_resources: "الموارد",
        nav_careers:"وظائف",
        nav_contact: "اتصل بنا",
        resources_hero_title: "الموارد والرؤى",
  resources_hero_description: "استكشف مركز المعرفة الخاص بنا الذي يضم رؤى الصناعة واتجاهات التكنولوجيا وقصص نجاح من العالم الحقيقي",
  
  blogs_title: "المدونات والرؤى",
  blogs_description1: "ابقَ متقدمًا على منحنى التكنولوجيا مع مكتبة المدونات الشاملة لشروق. يشارك فريقنا من خبراء الصناعة والمهندسين وقادة التكنولوجيا بانتظام رؤى متعمدة وأدلة عملية ومنظورات مستقبلية حول أحدث الاتجاهات التي تشكل المشهد الرقمي.",
  blogs_description2: "من أفضل ممارسات DevOps وأنماط بنية السحابة إلى تطبيقات الذكاء الاصطناعي واستراتيجيات تحليلات البيانات، تغطي مدوناتنا مجموعة واسعة من الموضوعات المصممة لمساعدتك على التنقل في تعقيدات التحول الرقمي. كل مقال مصمم لتقديم رؤى قابلة للتنفيذ وأمثلة من العالم الحقيقي وتوصيات خبراء يمكنك تطبيقها مباشرة على تحديات عملك.",
  blogs_description3: "سواء كنت CTO تستكشف تقنيات جديدة، أو مدير مشروع يبحث عن استراتيجيات تنفيذ رشيقة، أو قائد أعمال يخطط لرحلة التحول الرقمي الخاصة بك، فإن محتوى مدونتنا مصمم لتقديم القيمة في كل مرحلة من دورة حياة تبني التكنولوجيا الخاصة بك.",
  
  blog_categories_title: "ما ستجده في مدوناتنا:",
  category1_title: "غوص عميق في التكنولوجيا",
  category1_description: "استكشافات شاملة للتكنولوجيات الناشئة بما في ذلك الذكاء الاصطناعي والتعلم الآلي والحوسبة السحابية وإنترنت الأشياء والبلوكشين",
  category2_title: "أفضل الممارسات والمنهجيات",
  category2_description: "أطر عمل مثبتة لتنفيذ DevOps والتحول الرشيق والهندسة الجودة وأتمتة العمليات",
  category3_title: "اتجاهات الصناعة والتحليل",
  category3_description: "تعليقات خبراء حول التحولات السوقية والتغيرات التنظيمية وتوقعات العملاء المتطورة عبر قطاعات متعددة",
  category4_title: "أدلة إرشادية ودروس تعليمية",
  category4_description: "تعليمات خطوة بخطوة لتنفيذ تقنيات وأدوات وعمليات محددة",
  category5_title: "تسليط الضوء على الابتكار",
  category5_description: "ميزات حول حلول متطورة وتطبيقات مبتكرة وتنبؤات تقنية مستقبلية",
  category6_title: "مقارنات ومراجعات الأدوات",
  category6_description: "تقييمات موضوعية للمنصات وأطر العمل والأدوات لمساعدتك في اتخاذ خيارات تكنولوجية مستنيرة",
  
  blog_features_title: "لماذا تتابع مدونة شروق:",
  feature1_title: "📚 محتوى مكتوب من الخبراء",
  feature1_description: "كل مقالة مدونة مكتوبة أو مراجعة من قبل محترفين معتمدين ورواد صناعة لديهم سنوات من الخبرة العملية",
  feature2_title: "🎯 رؤى قابلة للتنفيذ",
  feature2_description: "انتقل إلى ما هو أبعد من النظرية مع توصيات عملية ومقتطفات التعليمات البرمجية ومخططات البنية والخرائط التنفيذية",
  feature3_title: "🔄 تحديثات منتظمة",
  feature3_description: "محتوى جديد ينشر أسبوعيًا، يغطي أحدث إصدارات التكنولوجيا وأخبار الصناعة والاتجاهات الناشئة",
  feature4_title: "💡 وجهات نظر متنوعة",
  feature4_description: "محتوى من أعضاء فريق متعددين بما في ذلك المهندسين المعماريين والمطورين وأخصائيي ضمان الجودة وعلماء البيانات ومديري المشاريع",
  feature5_title: "🌐 تطبيق في العالم الحقيقي",
  feature5_description: "رؤى مستمدة من مشاركات عملاء فعلية وبيئات إنتاج عبر صناعات متعددة",
  feature6_title: "📊 تحليل قائم على البيانات",
  feature6_description: "مقالات مدعومة بالبحث تتميز بإحصائيات ومعايير ومقاييس أداء",
  
  blog_cta_title: "ابقَ على اطلاع بأحدث الرؤى",
  blog_cta_description: "احصل على أحدث اتجاهات التكنولوجيا ونصائح الخبراء مباشرة إلى بريدك الإلكتروني",
  blog_cta_button1: "استكشف جميع المدونات",
  blog_cta_button2: "اشترك في التحديثات",
  
  case_studies_title: "دراسات الحالة وقصص النجاح",
  case_studies_description1: "اكتشف كيف ساعدت شروق المنظمات عبر الصناعات في التغلب على التحديات التكنولوجية المعقدة وتحقيق أهداف التحول الرقمي ودفع النتائج التجارية القابلة للقياس. تقدم دراسات الحالة الخاصة بنا حسابات مفصلة وشفافية للمشاريع في العالم الحقيقي، مما يوضح المنهجيات والتقنيات والحلول المبتكرة التي نشرناها لتقديم نتائج استثنائية.",
  case_studies_description2: "كل دراسة حالة هي أكثر من مجرد قصة نجاح - إنها توثيق شامل للرحلة من تحديد التحدي الأولي من خلال تطوير الاستراتيجية والتنفيذ والنتائج القابلة للقياس. نحن نؤمن بعرض تجارب حقيقية، بما في ذلك العقبات التي تخطيناها والقرارات التي اتخذناها والدروس التي تعلمناها على طول الطريق.",
  case_studies_description3: "تظهر هذه الأمثلة من العالم الحقيقي قدرة شروق على فهم السياقات التجارية الفريدة وتصميم حلول مخصصة وتنفيذ مبادرات تكنولوجية معقدة تخلق قيمة دائمة. سواء كنت تواجه تحديات مماثلة أو ترغب ببساطة في فهم كيفية تطبيق حلول التكنولوجيا الحديثة في الممارسة، فإن دراسات الحالة الخاصة بنا تقدم رؤى وإلهامًا قيِّمًا.",
  
  industry_case_studies_title: "دراسات الحالة الخاصة بالصناعة:",
  telecom_case_studies: "🔹 قطاع الاتصالات",
  telecom_case1: "تحديث البنية التحتية للشبكة والهجرة إلى السحابة",
  telecom_case2: "تحول منصة تجربة العملاء",
  telecom_case3: "تنفيذ إنترنت الأشياء للأجهزة المتصلة",
  telecom_case4: "تحليلات فورية لتحسين الشبكة",
  telecom_case5: "جاهزية 5G والتنفيذ",
  
  automotive_case_studies: "🔹 صناعة السيارات",
  automotive_case1: "منصات المركبات المتصلة والتليماتيكس",
  automotive_case2: "رقمنة سلسلة التوريد والصيانة التنبؤية",
  automotive_case3: "أتمتة عمليات التصنيع",
  automotive_case4: "أنظمة مراقبة الجودة مع الذكاء الاصطناعي/التعلم الآلي",
  automotive_case5: "تحديث نظام إدارة الوكالات",
  
  bfsi_case_studies: "🔹 قطاع الخدمات المصرفية والمالية والتأمينية",
  bfsi_case1: "تحول نظام الخدمات المصرفية الأساسي",
  bfsi_case2: "تطوير منصة الخدمات المصرفية الرقمية",
  bfsi_case3: "كشف الاحتيال باستخدام التعلم الآلي",
  bfsi_case4: "أتمتة الامتثال التنظيمي",
  bfsi_case5: "تنفيذ تحليلات 360 للعملاء",
  
  healthcare_case_studies: "🔹 الرعاية الصحية",
  healthcare_case1: "تكامل السجلات الصحية الإلكترونية",
  healthcare_case2: "تطوير منصة الطب عن بعد",
  healthcare_case3: "تحليلات بيانات المرضى وإدارة صحة السكان",
  healthcare_case4: "إنترنت الأشياء في الرعاية الصحية والمراقبة عن بُعد",
  healthcare_case5: "بنية تحتية سحابية متوافقة مع HIPAA",
  
  finance_case_studies: "🔹 المالية",
  finance_case1: "تحديث منصة التداول",
  finance_case2: "تحليلات المخاطر وأنظمة التقارير",
  finance_case3: "تكامل بوابة الدفع",
  finance_case4: "تنفيذ بلوكشين للمعاملات",
  finance_case5: "أنظمة امتثال ومراجعة مؤتمتة",
  
  technology_focused_title: "دراسات الحالة المرتكزة على التكنولوجيا:",
  tech1_title: "قصص نجاح الهجرة إلى السحابة",
  tech1_description: "هجرات البنية التحتية القديمة إلى AWS/Azure/GCP بدون وقت توقف",
  tech2_title: "تحول DevOps",
  tech2_description: "تنفيذ خطوط أنابيب CI/CD يقلل وقت النشر بنسبة 80%",
  tech3_title: "مبادرات تحليلات البيانات",
  tech3_description: "نشر مستودعات البيانات المؤسسية ومنصات ذكاء الأعمال التي توفر رؤى قابلة للتنفيذ",
  tech4_title: "هندسة الجودة",
  tech4_description: "أطر عمل أتمتة الاختبار تقلل دورات ضمان الجودة من أسابيع إلى أيام",
  tech5_title: "أتمتة العمليات",
  tech5_description: "تنفيذ RPA يلغي العمليات اليدوية ويقلل الأخطاء بنسبة 95%",
  tech6_title: "تطبيقات الذكاء الاصطناعي/التعلم الآلي",
  tech6_description: "نماذج تنبؤية تقود قرارات الأعمال وتخصيص العملاء",
  
  measurable_impact_title: "تأثير قابل للقياس عبر دراسات الحالة الخاصة بنا:",
  metric1_title: "⚡ تحسينات الأداء",
  metric1_description: "زيادة متوسطة بنسبة 60-70% في أداء النظام وأوقات الاستجابة",
  metric2_title: "💰 تحسين التكاليف",
  metric2_description: "خفض بنسبة 30-50% في تكاليف البنية التحتية والتكاليف التشغيلية",
  metric3_title: "🚀 وقت التسويق",
  metric3_description: "دورات نشر وإصدار ميزات أسرع بنسبة 50-80%",
  metric4_title: "📈 نمو الأعمال",
  metric4_description: "نمو إيرادات مزدوج الرقم وتوسع حصة السوق",
  metric5_title: "✅ تحسين الجودة",
  metric5_description: "خفض بنسبة 90%+ في عيوب الإنتاج والحوادث",
  metric6_title: "👥 رضا المستخدم",
  metric6_description: "تحسينات كبيرة في درجات تجربة العملاء والموظفين",
  metric7_title: "🔒 الأمان والامتثال",
  metric7_description: "الامتثال بنسبة 100% للمتطلبات التنظيمية مع مواقف أمان محسنة",
  
  case_study_format_title: "كل دراسة حالة تشمل:",
  format1_title: "ملخص تنفيذي",
  format2_title: "ملف الصناعة والعميل",
  format3_title: "بيان التحدي",
  format4_title: "نظرة عامة على الحل",
  format5_title: "مجموعة التكنولوجيا",
  format6_title: "جدول زمني للتنفيذ",
  format7_title: "النتائج والمقاييس",
  format8_title: "شهادة العميل",
  format9_title: "النقاط الرئيسية",
  
  case_studies_cta_title: "استكشف قصص النجاح في العالم الحقيقي",
  case_studies_cta_description: "شاهد كيف ساعدنا مؤسسات مثل مؤسستك في تحقيق أهداف التحول الرقمي",
  case_studies_cta_button1: "عرض جميع دراسات الحالة",
  case_studies_cta_button2: "طلب استشارة مخصصة",
  
  additional_resources_title: "موارد إضافية",
  resource1_title: "تقارير بيضاء وتقارير بحثية",
  resource1_description: "تحليل متعمق وبحث أصلي حول اتجاهات الصناعة وتقييمات التكنولوجيا والأطر الاستراتيجية",
  resource2_title: "ندوات عبر الإنترنت ومقاطع فيديو",
  resource2_description: "جلسات مسجلة وعروض توضيحية ودروس فيديو من فريق خبرائنا",
  resource3_title: "كتب إلكترونية وأدلة",
  resource3_description: "أدلة شاملة قابلة للتنزيل حول مواضيع محددة مثل الهجرة إلى السحابة وتبني DevOps واستراتيجية البيانات",
  resource4_title: "رسوم بيانية",
  resource4_description: "تمثيلات مرئية للمفاهيم المعقدة والإحصائيات وتدفقات العمليات",
  resource5_title: "أدوات وقوالب",
  resource5_description: "موارد مجانية تشمل قوائم مراجعة وأطر تقييم وقوالب مشاريع",
  
  cta_title: "هل أنت مستعد لتحويل عملك؟",
  cta_description: "لنتناقش حول كيف يمكننا مساعدتك في تحقيق أهداف التحول الرقمي الخاصة بك من خلال خبرتنا المثبتة وحلولنا",
  cta_button: "اتصل بنا",
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
