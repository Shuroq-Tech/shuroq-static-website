const translations = {
    en:{
    nav_aboutus:"About Us",
    nav_services:"Services",
    nav_industries:"Industries",
    nav_careers: "Careers",
    nav_contact: "Contact-Us",
    automatetitle:"Automation & DevOps Services",
    automate_hero_description: "Streamline and accelerate your operations with intelligent automation and modern DevOps practices that drive efficiency and innovation",
  automate_hero_feature1: "70% Faster Deployment",
  automate_hero_feature2: "Intelligent Automation",
  automate_hero_feature3: "Continuous Integration",
  devops_title: "DevOps Solutions",
  devops_subtitle: "Comprehensive DevOps services that bridge the gap between development and operations for seamless software delivery",
  devops_overview_title: "DevOps Culture and Practices",
  devops_overview_description: "We foster a DevOps culture that emphasizes collaboration, automation, measurement, and sharing (CAMS) principles. Our approach transforms your software development lifecycle, enabling faster delivery, higher quality, and improved reliability through continuous integration and deployment practices.",
  devops_pillar1_title: "Collaboration",
  devops_pillar1_description: "Breaking down silos between development and operations teams",
  devops_pillar2_title: "Automation",
  devops_pillar2_description: "Automating repetitive tasks to increase efficiency and reduce errors",
  devops_pillar3_title: "Measurement",
  devops_pillar3_description: "Data-driven insights to continuously improve processes",
  devops_pillar4_title: "Sharing",
  devops_pillar4_description: "Knowledge sharing and best practices across teams",
  devops_cicd_title: "Continuous Integration/Continuous Deployment (CI/CD)",
  devops_cicd_description: "Our CI/CD pipeline solutions automate the entire software delivery process, from code commit to production deployment, ensuring rapid and reliable releases.",
  devops_cicd_stage1_title: "Code Commit",
  devops_cicd_stage1_description: "Automated code validation and quality checks",
  devops_cicd_stage2_title: "Build",
  devops_cicd_stage2_description: "Automated compilation and packaging",
  devops_cicd_stage3_title: "Test",
  devops_cicd_stage3_description: "Automated testing and quality assurance",
  devops_cicd_stage4_title: "Deploy",
  devops_cicd_stage4_description: "Automated deployment to production",
  devops_infrastructure_title: "Infrastructure Automation",
  devops_infrastructure_service1_title: "Infrastructure as Code (IaC)",
  devops_infrastructure_service1_description: "Automated provisioning and management of infrastructure using code",
  devops_infrastructure_service1_item1: "Terraform and CloudFormation",
  devops_infrastructure_service1_item2: "Version-controlled infrastructure",
  devops_infrastructure_service1_item3: "Automated scaling and recovery",
  devops_infrastructure_service2_title: "Configuration Management",
  devops_infrastructure_service2_description: "Automated configuration and maintenance of systems",
  devops_infrastructure_service2_item1: "Ansible and Puppet automation",
  devops_infrastructure_service2_item2: "Consistent environment setup",
  devops_infrastructure_service2_item3: "Automated patch management",
  devops_infrastructure_service3_title: "Containerization",
  devops_infrastructure_service3_description: "Container orchestration with Docker and Kubernetes",
  devops_infrastructure_service3_item1: "Microservices architecture",
  devops_infrastructure_service3_item2: "Auto-scaling containers",
  devops_infrastructure_service3_item3: "Service mesh implementation",
  devops_monitoring_title: "Monitoring and Logging Solutions",
  devops_monitoring_item1_title: "Application Performance Monitoring",
  devops_monitoring_item1_description: "Real-time monitoring of application performance and user experience",
  devops_monitoring_item2_title: "Centralized Logging",
  devops_monitoring_item2_description: "Aggregated logging and log analysis for troubleshooting",
  devops_monitoring_item3_title: "Alert Management",
  devops_monitoring_item3_description: "Intelligent alerting and incident response automation",
  devops_tools_title: "DevOps Tools & Technologies",
  devops_tools_category1_title: "CI/CD Tools",
  devops_tools_category1_tool1: "Jenkins",
  devops_tools_category1_tool2: "GitLab CI",
  devops_tools_category1_tool3: "Azure DevOps",
  devops_tools_category1_tool4: "GitHub Actions",
  devops_tools_category1_tool5: "CircleCI",
  devops_tools_category2_title: "Infrastructure Tools",
  devops_tools_category2_tool1: "Terraform",
  devops_tools_category2_tool2: "Ansible",
  devops_tools_category2_tool3: "Kubernetes",
  devops_tools_category2_tool4: "Docker",
  devops_tools_category2_tool5: "Helm",
  devops_tools_category3_title: "Monitoring Tools",
  devops_tools_category3_tool1: "Prometheus",
  devops_tools_category3_tool2: "Grafana",
  devops_tools_category3_tool3: "ELK Stack",
  devops_tools_category3_tool4: "DataDog",
  devops_tools_category3_tool5: "New Relic",
  devops_benefits_title: "Benefits",
  devops_benefits_item1_title: "Faster Deployment",
  devops_benefits_item1_description: "Reduce deployment time from weeks to minutes with automated pipelines",
  devops_benefits_item2_title: "Reduced Errors",
  devops_benefits_item2_description: "Minimize human errors through automation and standardized processes",
  devops_benefits_item3_title: "Better Collaboration",
  devops_benefits_item3_description: "Improved teamwork and communication between development and operations",
  agile_title: "Agile Methodology",
  agile_subtitle: "Adaptive project management approaches that deliver value faster and respond effectively to change",
  agile_principles_title: "Agile Principles and Practices",
  agile_principles_description: "We embrace agile methodologies that prioritize customer collaboration, working software, and responding to change over rigid processes and comprehensive documentation.",
  agile_principles_item1_title: "Individuals and Interactions",
  agile_principles_item1_description: "Valuing team collaboration and communication over processes and tools",
  agile_principles_item2_title: "Working Software",
  agile_principles_item2_description: "Focusing on functional software that delivers real value",
  agile_principles_item3_title: "Customer Collaboration",
  agile_principles_item3_description: "Working closely with customers throughout the development process",
  agile_principles_item4_title: "Responding to Change",
  agile_principles_item4_description: "Embracing change to deliver competitive advantage",
  agile_frameworks_title: "Scrum and Kanban Frameworks",
  agile_frameworks_scrum_title: "Scrum Framework",
  agile_frameworks_scrum_description: "Iterative approach with fixed-length sprints and defined roles",
  agile_frameworks_scrum_item1: "Sprint planning and execution",
  agile_frameworks_scrum_item2: "Daily stand-ups and sprint reviews",
  agile_frameworks_scrum_item3: "Product backlog management",
  agile_frameworks_scrum_item4: "Velocity tracking and improvement",
  agile_frameworks_scrum_metric: "40% Faster Delivery",
  agile_frameworks_kanban_title: "Kanban Framework",
  agile_frameworks_kanban_description: "Visual workflow management with continuous flow and limited work in progress",
  agile_frameworks_kanban_item1: "Visual workflow boards",
  agile_frameworks_kanban_item2: "Work in progress limits",
  agile_frameworks_kanban_item3: "Continuous delivery",
  agile_frameworks_kanban_item4: "Flow metrics and optimization",
  agile_frameworks_kanban_metric: "60% Improved Efficiency",
  agile_sprint_title: "Sprint Planning and Execution",
  agile_sprint_stage1_title: "Sprint Planning",
  agile_sprint_stage1_description: "Define sprint goals and select backlog items",
  agile_sprint_stage2_title: "Daily Stand-ups",
  agile_sprint_stage2_description: "Daily coordination and progress updates",
  agile_sprint_stage3_title: "Sprint Review",
  agile_sprint_stage3_description: "Demonstrate completed work and gather feedback",
  agile_sprint_stage4_title: "Sprint Retrospective",
  agile_sprint_stage4_description: "Reflect and improve processes",
  agile_coaching_title: "Agile Coaching and Training",
  agile_coaching_item1_title: "Agile Training",
  agile_coaching_item1_description: "Comprehensive training programs for teams and leadership",
  agile_coaching_item1_item1: "Scrum Master certification",
  agile_coaching_item1_item2: "Product Owner training",
  agile_coaching_item1_item3: "Team workshops",
  agile_coaching_item2_title: "Agile Coaching",
  agile_coaching_item2_description: "Hands-on coaching to transform teams and organizations",
  agile_coaching_item2_item1: "Team transformation",
  agile_coaching_item2_item2: "Process optimization",
  agile_coaching_item2_item3: "Cultural change management",
  agile_scaled_title: "Scaled Agile for Enterprises",
  agile_scaled_item1_title: "SAFe (Scaled Agile Framework)",
  agile_scaled_item1_description: "Enterprise-scale agile implementation for large organizations",
  agile_scaled_item2_title: "LeSS (Large-Scale Scrum)",
  agile_scaled_item2_description: "Scaling Scrum across multiple teams and products",
  agile_scaled_item3_title: "Nexus",
  agile_scaled_item3_description: "Scaling Scrum for complex product development",
  agile_tools_title: "Collaboration Tools and Practices",
  agile_tools_item1: "Jira",
  agile_tools_item2: "Trello",
  agile_tools_item3: "Slack",
  agile_tools_item4: "Microsoft Teams",
  agile_tools_item5: "Confluence",
  agile_benefits_title: "Benefits",
  agile_benefits_card1_title: "Flexibility",
  agile_benefits_card1_description: "Adapt quickly to changing requirements and market conditions",
  agile_benefits_card2_title: "Faster Delivery",
  agile_benefits_card2_description: "Deliver value to customers faster with iterative development",
  agile_benefits_card3_title: "Customer Satisfaction",
  agile_benefits_card3_description: "Higher customer satisfaction through continuous feedback",
  agile_benefits_card4_title: "Transparency",
  agile_benefits_card4_description: "Improved visibility into project progress and challenges",
  process_title: "Process Automation",
  process_subtitle: "Intelligent automation solutions that streamline workflows, eliminate manual tasks, and boost productivity",
  process_rpa_title: "Robotic Process Automation (RPA)",
  process_rpa_description: "Deploy software robots to automate repetitive, rule-based tasks across applications, freeing up human workers for higher-value activities.",
  process_rpa_feature1_title: "Intelligent Bots",
  process_rpa_feature1_description: "AI-powered bots that learn and adapt to process variations",
  process_rpa_feature2_title: "Desktop Automation",
  process_rpa_feature2_description: "Automate GUI-based tasks across multiple applications",
  process_rpa_feature3_title: "Cloud RPA",
  process_rpa_feature3_description: "Scalable cloud-based automation for enterprise processes",
  process_business_title: "Business Process Optimization",
  process_business_item1_title: "Process Analysis",
  process_business_item1_description: "Identify inefficiencies and optimization opportunities",
  process_business_item1_item1: "Process mapping and documentation",
  process_business_item1_item2: "Bottleneck identification",
  process_business_item1_item3: "Performance metrics analysis",
  process_business_item2_title: "Process Redesign",
  process_business_item2_description: "Redesign processes for maximum efficiency",
  process_business_item2_item1: "Workflow optimization",
  process_business_item2_item2: "Role and responsibility clarification",
  process_business_item2_item3: "Technology integration planning",
  process_business_item3_title: "Continuous Improvement",
  process_business_item3_description: "Ongoing optimization and performance monitoring",
  process_business_item3_item1: "KPI tracking and reporting",
  process_business_item3_item2: "Process refinement cycles",
  process_business_item3_item3: "Change management support",
  process_workflow_title: "Workflow Automation",
  process_workflow_type1_title: "Document Workflow",
  process_workflow_type1_description: "Automate document processing, approval, and routing",
  process_workflow_type1_stat: "80% Reduction in Processing Time",
  process_workflow_type2_title: "Financial Workflow",
  process_workflow_type2_description: "Streamline invoice processing, payments, and reconciliation",
  process_workflow_type2_stat: "90% Accuracy Improvement",
  process_workflow_type3_title: "HR Workflow",
  process_workflow_type3_description: "Automate employee onboarding, payroll, and performance management",
  process_workflow_type3_stat: "70% Administrative Time Saved",
  process_ai_title: "Intelligent Automation with AI/ML",
  process_ai_item1_title: "Cognitive Automation",
  process_ai_item1_description: "AI-powered automation that handles complex decision-making",
  process_ai_item1_item1: "Natural language processing",
  process_ai_item1_item2: "Predictive analytics",
  process_ai_item1_item3: "Computer vision",
  process_ai_item2_title: "Predictive Automation",
  process_ai_item2_description: "Anticipate needs and automate proactively",
  process_ai_item2_item1: "Demand forecasting",
  process_ai_item2_item2: "Anomaly detection",
  process_ai_item2_item3: "Risk assessment",
  process_ai_item3_title: "Learning Automation",
  process_ai_item3_description: "Self-improving automation that learns from experience",
  process_ai_item3_item1: "Machine learning models",
  process_ai_item3_item2: "Process optimization",
  process_ai_item3_item3: "Continuous improvement",
  process_custom_title: "Custom Automation Solutions",
  process_custom_item1_title: "Integration Automation",
  process_custom_item1_description: "Automate data flow between disparate systems and applications",
  process_custom_item2_title: "API Automation",
  process_custom_item2_description: "Automate API testing, monitoring, and integration",
  process_custom_item3_title: "Data Automation",
  process_custom_item3_description: "Automate data extraction, transformation, and loading",
  process_custom_item4_title: "Security Automation",
  process_custom_item4_description: "Automate security monitoring, threat detection, and response",
  process_benefits_title: "Benefits",
  process_benefits_stat1_title: "Efficiency Gains",
  process_benefits_stat1_description: "Achieve up to 80% improvement in process efficiency through automation",
  process_benefits_stat2_title: "Cost Reduction",
  process_benefits_stat2_description: "Reduce operational costs by up to 60% through streamlined processes",
  process_benefits_stat3_title: "Error Elimination",
  process_benefits_stat3_description: "Near-zero error rates with automated, standardized processes",
  process_benefits_stat4_title: "Employee Productivity",
  process_benefits_stat4_description: "Free up employee time for strategic, high-value activities",
  cta_title: "Transform Your Operations with Automation",
  cta_description: "Let's discuss how our comprehensive automation solutions can revolutionize your business processes",
  cta_button1: "Start Automation Journey",
  cta_button2: "Back to Services",
  
    
    },
    ar:{
    nav_aboutus: "معلومات عنا",
    nav_services:"الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
    automatetitle:"خدمات الأتمتة و DevOps",
    automate_hero_description: "بسط وسرع عملياتك من خلال الأتمتة الذكية وممارسات DevOps الحديثة التي تعزز الكفاءة والابتكار",
  automate_hero_feature1: "نشر أسرع بنسبة 70٪",
  automate_hero_feature2: "أتمتة ذكية",
  automate_hero_feature3: "تكامل مستمر",
  devops_title: "حلول DevOps",
  devops_subtitle: "خدمات DevOps شاملة تعمل على سد الفجوة بين التطوير والعمليات لتسليم برمجي سلس",
  devops_overview_title: "ثقافة وممارسات DevOps",
  devops_overview_description: "نعزز ثقافة DevOps التي تؤكد على مبادئ التعاون والأتمتة والقياس والمشاركة (CAMS). نهجنا يحول دورة حياة تطوير البرمجيات الخاصة بك، مما يمكن من التسليم الأسرع، وجودة أعلى، وموثوقية محسنة من خلال ممارسات التكامل والنشر المستمر.",
  devops_pillar1_title: "التعاون",
  devops_pillar1_description: "تفكيك العوازل بين فرق التطوير والعمليات",
  devops_pillar2_title: "الأتمتة",
  devops_pillar2_description: "أتمتة المهام المتكررة لزيادة الكفاءة وتقليل الأخطاء",
  devops_pillar3_title: "القياس",
  devops_pillar3_description: "رؤى مدفوعة بالبيانات لتحسين العمليات باستمرار",
  devops_pillar4_title: "المشاركة",
  devops_pillar4_description: "مشاركة المعرفة وأفضل الممارسات عبر الفرق",
  devops_cicd_title: "التكامل المستمر / النشر المستمر (CI/CD)",
  devops_cicd_description: "حلول خط أنابيب CI/CD الخاصة بنا تؤتمت عملية تسليم البرمجيات بأكملها، من إيداع الكود إلى النشر في الإنتاج، مما يضمن إصدارات سريعة وموثوقة.",
  devops_cicd_stage1_title: "إيداع الكود",
  devops_cicd_stage1_description: "التحقق الآلي من الكود وفحص الجودة",
  devops_cicd_stage2_title: "البناء",
  devops_cicd_stage2_description: "تجميع وتعبئة آلية",
  devops_cicd_stage3_title: "الاختبار",
  devops_cicd_stage3_description: "اختبار آلي وفحص جودة",
  devops_cicd_stage4_title: "النشر",
  devops_cicd_stage4_description: "نشر آلي إلى الإنتاج",
  devops_infrastructure_title: "أتمتة البنية التحتية",
  devops_infrastructure_service1_title: "البنية التحتية ككود (IaC)",
  devops_infrastructure_service1_description: "توفير وإدارة البنية التحتية تلقائيًا باستخدام الكود",
  devops_infrastructure_service1_item1: "Terraform و CloudFormation",
  devops_infrastructure_service1_item2: "بنية تحتية متحكم بها بالإصدار",
  devops_infrastructure_service1_item3: "توسيع واستعادة تلقائية",
  devops_infrastructure_service2_title: "إدارة التكوين",
  devops_infrastructure_service2_description: "تكوين وصيانة الأنظمة تلقائيًا",
  devops_infrastructure_service2_item1: "أتمتة Ansible و Puppet",
  devops_infrastructure_service2_item2: "إعداد بيئة متسقة",
  devops_infrastructure_service2_item3: "إدارة التحديثات الآلية",
  devops_infrastructure_service3_title: "الحاوية",
  devops_infrastructure_service3_description: "تنظيم الحاويات مع Docker و Kubernetes",
  devops_infrastructure_service3_item1: "هندسة الخدمات الصغيرة",
  devops_infrastructure_service3_item2: "حاويات ذات توسع تلقائي",
  devops_infrastructure_service3_item3: "تنفيذ شبكة الخدمات",
  devops_monitoring_title: "حلول المراقبة والتسجيل",
  devops_monitoring_item1_title: "مراقبة أداء التطبيقات",
  devops_monitoring_item1_description: "مراقبة في الوقت الفعلي لأداء التطبيق وتجربة المستخدم",
  devops_monitoring_item2_title: "تسجيل مركزي",
  devops_monitoring_item2_description: "تسجيل مجمع وتحليل السجلات لاستكشاف الأخطاء",
  devops_monitoring_item3_title: "إدارة التنبيهات",
  devops_monitoring_item3_description: "تنبيه ذكي وأتمتة الاستجابة للحوادث",
  devops_tools_title: "أدوات وتقنيات DevOps",
  devops_tools_category1_title: "أدوات CI/CD",
  devops_tools_category1_tool1: "Jenkins",
  devops_tools_category1_tool2: "GitLab CI",
  devops_tools_category1_tool3: "Azure DevOps",
  devops_tools_category1_tool4: "GitHub Actions",
  devops_tools_category1_tool5: "CircleCI",
  devops_tools_category2_title: "أدوات البنية التحتية",
  devops_tools_category2_tool1: "Terraform",
  devops_tools_category2_tool2: "Ansible",
  devops_tools_category2_tool3: "Kubernetes",
  devops_tools_category2_tool4: "Docker",
  devops_tools_category2_tool5: "Helm",
  devops_tools_category3_title: "أدوات المراقبة",
  devops_tools_category3_tool1: "Prometheus",
  devops_tools_category3_tool2: "Grafana",
  devops_tools_category3_tool3: "ELK Stack",
  devops_tools_category3_tool4: "DataDog",
  devops_tools_category3_tool5: "New Relic",
  devops_benefits_title: "المزايا",
  devops_benefits_item1_title: "نشر أسرع",
  devops_benefits_item1_description: "تقليل وقت النشر من أسابيع إلى دقائق مع خطوط الأنابيب الآلية",
  devops_benefits_item2_title: "أخطاء أقل",
  devops_benefits_item2_description: "تقليل الأخطاء البشرية من خلال الأتمتة والعمليات القياسية",
  devops_benefits_item3_title: "تعاون أفضل",
  devops_benefits_item3_description: "تحسين العمل الجماعي والتواصل بين التطوير والعمليات",
  agile_title: "منهجية Agile",
  agile_subtitle: "أساليب إدارة المشاريع التكيفية التي توفر قيمة أسرع وتستجيب بفعالية للتغيير",
  agile_principles_title: "مبادئ وممارسات Agile",
  agile_principles_description: "نتبنى منهجيات Agile التي تعطي الأولوية للتعاون مع العملاء، والبرمجيات العاملة، والاستجابة للتغيير بدلاً من العمليات الصارمة والتوثيق الشامل.",
  agile_principles_item1_title: "الأفراد والتفاعلات",
  agile_principles_item1_description: "تقدير التعاون والتواصل ضمن الفريق على العمليات والأدوات",
  agile_principles_item2_title: "برمجيات عاملة",
  agile_principles_item2_description: "التركيز على البرمجيات الوظيفية التي توفر قيمة حقيقية",
  agile_principles_item3_title: "تعاون العملاء",
  agile_principles_item3_description: "العمل عن كثب مع العملاء خلال عملية التطوير",
  agile_principles_item4_title: "الاستجابة للتغيير",
  agile_principles_item4_description: "احتضان التغيير لتقديم ميزة تنافسية",
  agile_frameworks_title: "أطر Scrum و Kanban",
  agile_frameworks_scrum_title: "إطار Scrum",
  agile_frameworks_scrum_description: "نهج تكراري مع سباقات ذات طول محدد وأدوار محددة",
  agile_frameworks_scrum_item1: "تخطيط وتنفيذ السباقات",
  agile_frameworks_scrum_item2: "الاجتماعات اليومية ومراجعات السباقات",
  agile_frameworks_scrum_item3: "إدارة قائمة المهام",
  agile_frameworks_scrum_item4: "تتبع وتحسين السرعة",
  agile_frameworks_scrum_metric: "تسليم أسرع بنسبة 40٪",
  agile_frameworks_kanban_title: "إطار Kanban",
  agile_frameworks_kanban_description: "إدارة سير العمل المرئي مع تدفق مستمر وعمل محدود قيد التقدم",
  agile_frameworks_kanban_item1: "لوحات سير العمل المرئية",
  agile_frameworks_kanban_item2: "حدود العمل قيد التقدم",
  agile_frameworks_kanban_item3: "تسليم مستمر",
  agile_frameworks_kanban_item4: "مقاييس وتحسين التدفق",
  agile_frameworks_kanban_metric: "تحسين الكفاءة بنسبة 60٪",
  agile_sprint_title: "تخطيط وتنفيذ السباقات",
  agile_sprint_stage1_title: "تخطيط السباق",
  agile_sprint_stage1_description: "تحديد أهداف السباق واختيار عناصر قائمة المهام",
  agile_sprint_stage2_title: "الاجتماعات اليومية",
  agile_sprint_stage2_description: "تنسيق يومي وتحديثات التقدم",
  agile_sprint_stage3_title: "مراجعة السباق",
  agile_sprint_stage3_description: "عرض العمل المكتمل وجمع الملاحظات",
  agile_sprint_stage4_title: "الاستعراض الرجعي للسباق",
  agile_sprint_stage4_description: "التفكير وتحسين العمليات",
  agile_coaching_title: "تدريب وتأهيل Agile",
  agile_coaching_item1_title: "تدريب Agile",
  agile_coaching_item1_description: "برامج تدريبية شاملة للفرق والقيادة",
  agile_coaching_item1_item1: "شهادة Scrum Master",
  agile_coaching_item1_item2: "تدريب Product Owner",
  agile_coaching_item1_item3: "ورش عمل الفريق",
  agile_coaching_item2_title: "تأهيل Agile",
  agile_coaching_item2_description: "تأهيل عملي لتحويل الفرق والمنظمات",
  agile_coaching_item2_item1: "تحويل الفريق",
  agile_coaching_item2_item2: "تحسين العمليات",
  agile_coaching_item2_item3: "إدارة التغيير الثقافي",
  agile_scaled_title: "Agile للمؤسسات الكبيرة",
  agile_scaled_item1_title: "SAFe (إطار Agile للمؤسسات)",
  agile_scaled_item1_description: "تنفيذ Agile على مستوى المؤسسة للمنظمات الكبيرة",
  agile_scaled_item2_title: "LeSS (Scrum للمؤسسات الكبيرة)",
  agile_scaled_item2_description: "توسيع نطاق Scrum عبر فرق ومنتجات متعددة",
  agile_scaled_item3_title: "Nexus",
  agile_scaled_item3_description: "توسيع نطاق Scrum لتطوير المنتجات المعقدة",
  agile_tools_title: "أدوات وممارسات التعاون",
  agile_tools_item1: "Jira",
  agile_tools_item2: "Trello",
  agile_tools_item3: "Slack",
  agile_tools_item4: "Microsoft Teams",
  agile_tools_item5: "Confluence",
  agile_benefits_title: "المزايا",
  agile_benefits_card1_title: "المرونة",
  agile_benefits_card1_description: "التكيف السريع مع المتطلبات المتغيرة وظروف السوق",
  agile_benefits_card2_title: "تسليم أسرع",
  agile_benefits_card2_description: "تسليم قيمة للعملاء بشكل أسرع مع التطوير التكراري",
  agile_benefits_card3_title: "رضا العملاء",
  agile_benefits_card3_description: "رضا أعلى للعملاء من خلال التغذية الراجعة المستمرة",
  agile_benefits_card4_title: "الشفافية",
  agile_benefits_card4_description: "تحسين الرؤية في تقدم المشروع والتحديات",
  process_title: "أتمتة العمليات",
  process_subtitle: "حلول الأتمتة الذكية التي تبسط سير العمل، وتلغي المهام اليدوية، وتعزز الإنتاجية",
  process_rpa_title: "أتمتة العمليات الروبوتية (RPA)",
  process_rpa_description: "نشر روبوتات برمجية لأتمتة المهام المتكررة والقائمة على القواعد عبر التطبيقات، مما يحرر العاملين البشريين للأنشطة ذات القيمة الأعلى.",
  process_rpa_feature1_title: "روبوتات ذكية",
  process_rpa_feature1_description: "روبوتات مدعومة بالذكاء الاصطناعي تتعلم وتتكيف مع تباينات العمليات",
  process_rpa_feature2_title: "أتمتة سطح المكتب",
  process_rpa_feature2_description: "أتمتة المهام القائمة على واجهة المستخدم عبر تطبيقات متعددة",
  process_rpa_feature3_title: "RPA السحابي",
  process_rpa_feature3_description: "أتمتة قابلة للتوسع قائمة على السحابة لعمليات المؤسسة",
  process_business_title: "تحسين عمليات الأعمال",
  process_business_item1_title: "تحليل العمليات",
  process_business_item1_description: "تحديد أوجه القصور وفرص التحسين",
  process_business_item1_item1: "رسم خرائط العمليات والتوثيق",
  process_business_item1_item2: "تحديد الاختناقات",
  process_business_item1_item3: "تحليل مقاييس الأداء",
  process_business_item2_title: "إعادة تصميم العمليات",
  process_business_item2_description: "إعادة تصميم العمليات لأقصى كفاءة",
  process_business_item2_item1: "تحسين سير العمل",
  process_business_item2_item2: "توضيح الأدوار والمسؤوليات",
  process_business_item2_item3: "تخطيط تكامل التكنولوجيا",
  process_business_item3_title: "التحسين المستمر",
  process_business_item3_description: "تحسين مستمر ومراقبة الأداء",
  process_business_item3_item1: "تتبع وإعداد تقارير مؤشرات الأداء الرئيسية",
  process_business_item3_item2: "دورات تحسين العمليات",
  process_business_item3_item3: "دعم إدارة التغيير",
  process_workflow_title: "أتمتة سير العمل",
  process_workflow_type1_title: "سير عمل المستندات",
  process_workflow_type1_description: "أتمتة معالجة المستندات والموافقة عليها وتوجيهها",
  process_workflow_type1_stat: "انخفاض 80٪ في وقت المعالجة",
  process_workflow_type2_title: "سير العمل المالي",
  process_workflow_type2_description: "تبسيط معالجة الفواتير والمدفوعات والمطابقة",
  process_workflow_type2_stat: "تحسين الدقة بنسبة 90٪",
  process_workflow_type3_title: "سير عمل الموارد البشرية",
  process_workflow_type3_description: "أتمتة إدماج الموظفين وكشوف المرتبات وإدارة الأداء",
  process_workflow_type3_stat: "توفير 70٪ من الوقت الإداري",
  process_ai_title: "أتمتة ذكية بالذكاء الاصطناعي والتعلم الآلي",
  process_ai_item1_title: "أتمتة معرفية",
  process_ai_item1_description: "أتمتة مدعومة بالذكاء الاصطناعي تتعامل مع اتخاذ القرارات المعقدة",
  process_ai_item1_item1: "معالجة اللغة الطبيعية",
  process_ai_item1_item2: "تحليلات تنبؤية",
  process_ai_item1_item3: "رؤية الحاسوب",
  process_ai_item2_title: "أتمتة تنبؤية",
  process_ai_item2_description: "توقع الاحتياجات والأتمتة الاستباقية",
  process_ai_item2_item1: "توقع الطلب",
  process_ai_item2_item2: "كشف الشذوذ",
  process_ai_item2_item3: "تقييم المخاطر",
  process_ai_item3_title: "أتمتة تعليمية",
  process_ai_item3_description: "أتمتة ذاتية التحسن تتعلم من الخبرة",
  process_ai_item3_item1: "نماذج التعلم الآلي",
  process_ai_item3_item2: "تحسين العمليات",
  process_ai_item3_item3: "تحسين مستمر",
  process_custom_title: "حلول أتمتة مخصصة",
  process_custom_item1_title: "أتمتة التكامل",
  process_custom_item1_description: "أتمتة تدفق البيانات بين الأنظمة والتطبيقات المختلفة",
  process_custom_item2_title: "أتمتة API",
  process_custom_item2_description: "أتمتة اختبار ومراقبة وتكامل واجهات البرمجة (API)",
  process_custom_item3_title: "أتمتة البيانات",
  process_custom_item3_description: "أتمتة استخراج البيانات وتحويلها وتحميلها",
  process_custom_item4_title: "أتمتة الأمان",
  process_custom_item4_description: "أتمتة مراقبة الأمان والكشف عن التهديدات والاستجابة",
  process_benefits_title: "المزايا",
  process_benefits_stat1_title: "مكاسب الكفاءة",
  process_benefits_stat1_description: "تحقيق تحسين بنسبة تصل إلى 80٪ في كفاءة العمليات من خلال الأتمتة",
  process_benefits_stat2_title: "تخفيض التكاليف",
  process_benefits_stat2_description: "تقليل التكاليف التشغيلية بنسبة تصل إلى 60٪ من خلال العمليات المبسطة",
  process_benefits_stat3_title: "القضاء على الأخطاء",
  process_benefits_stat3_description: "معدلات أخطاء قريبة من الصفر مع عمليات آلية وموحدة",
  process_benefits_stat4_title: "إنتاجية الموظفين",
  process_benefits_stat4_description: "تحرير وقت الموظفين للأنشطة الاستراتيجية عالية القيمة",
  cta_title: "حول عملياتك بالأتمتة",
  cta_description: "لنتحدث عن كيفية تحويل حلول الأتمتة الشاملة لدينا لعمليات أعمالك",
  cta_button1: "ابدأ رحلة الأتمتة",
  cta_button2: "العودة إلى الخدمات",
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
