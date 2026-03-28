// Fission Page Specific JavaScript
// This file contains only fission-specific functionality
// All navigation functionality is handled by nav.js

let currentLanguage = 'en';

// Load Navigation
async function loadNavigation() {
    try {
        const response = await fetch('nav.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navHTML = await response.text();
        
        // Replace the existing navigation
        const existingNav = document.querySelector('nav');
        if (existingNav) {
            existingNav.innerHTML = navHTML;
        }
        
        // Initialize navigation functionality
        setTimeout(() => {
            initializeNavigation(); // nav.js function for hamburger menu
            initializeFissionNavigation(); // fission.js function for language only
        }, 300); // Increased timeout for better reliability
        
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

// Initialize Navigation Functionality
function initializeFissionNavigation() {
    // Language switching - handled by nav.js
    // Page-specific functionality only
    
    // Update page content with current language
    applyTranslations();
    
    // Verify language button setup
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    
    if (langBtn && langMenu) {
        // Test if button is actually clickable
        langBtn.addEventListener('click', function(e) {
            // Button click test - working fine
        });
        
        // Also test dropdown items
        const dropdownItems = langMenu.querySelectorAll('div');
        
        // Fallback: If nav.js didn't set up the event, set it up here
        if (!langBtn.hasAttribute('data-nav-initialized')) {
            langBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const currentDisplay = langMenu.style.display;
                langMenu.style.display = currentDisplay === 'block' ? 'none' : 'block';
            });
            langBtn.setAttribute('data-nav-initialized', 'fallback');
        }
        
    } else {
        // Retry after a delay
        setTimeout(() => {
            const retryBtn = document.getElementById('langBtn');
            const retryMenu = document.getElementById('langMenu');
            if (retryBtn && retryMenu) {
                // Initialize again
                initializeFissionNavigation();
            }
        }, 500);
    }
}

// Change Language Function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('fissionLanguage', lang);
    applyTranslations();
    
    // Update language button text
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? '🌐~en' : '🌐~ar';
    }
    
    // Close language menu
    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
        langMenu.style.display = 'none';
    }
}

// Apply Translations Function
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Translations Object
const translations = {
    en: {
        // Navigation
        nav_aboutus: "About Us",
        nav_services: "Services",
        nav_industries: "Industries",
        nav_resources: "Resources",
        nav_careers: "Careers",
        nav_contact: "Contact Us",
        nav_company: "Company",
        nav_shuroqway: "The Shuroq Way",
        
        // Hero Section
        hero_title: "Fission Enterprise Platform",
        hero_subtitle: "A unified enterprise platform designed to streamline operations, enhance productivity, and enable intelligent decision-making across organizations.",
        cta_getStarted: "Get Started",
        
        // Features Section
        features_title: "Key Features",
        feature1_title: "Unified Dashboard",
        feature1_desc: "Centralized control over all enterprise operations with real-time insights and analytics.",
        feature2_title: "Workflow Automation",
        feature2_desc: "Automate complex business processes and reduce manual intervention with intelligent workflow management.",
        feature3_title: "Resource Management",
        feature3_desc: "Optimize resource allocation and track utilization across departments and projects.",
        feature4_title: "Employee Management",
        feature4_desc: "Comprehensive employee database with performance tracking and skill management.",
        
        // Modules Section
        modules_title: "Core Modules",
        module1_title: "Operations Hub",
        module1_desc: "Central command center for daily operations and strategic planning.",
        module2_title: "Analytics Engine",
        module2_desc: "Advanced analytics and reporting for data-driven decision making.",
        module3_title: "Communication Center",
        module3_desc: "Integrated messaging, video conferencing, and collaboration tools.",
        
        // Benefits Section
        benefits_title: "Why Choose Fission?",
        benefit1_title: "Scalability",
        benefit1_desc: "Grows with your business from startup to enterprise level.",
        benefit2_title: "Integration",
        benefit2_desc: "Seamlessly integrates with existing systems and workflows.",
        benefit3_title: "Security",
        benefit3_desc: "Enterprise-grade security with role-based access control.",
        
        // CTA Section
        cta_title: "Transform Your Business",
        cta_subtitle: "Ready to experience the future of enterprise management?",
        cta_demo: "Request Demo",
        cta_contact: "Contact Sales"
    },
    ar: {
        // Navigation
        nav_aboutus: "من نحن",
        nav_services: "الخدمات",
        nav_industries: "الصناعات",
        nav_resources: "الموارد",
        nav_careers: "الوظائف",
        nav_contact: "اتصل بنا",
        nav_company: "الشركة",
        nav_shuroqway: "طريق شروق",
        
        // Hero Section
        hero_title: "منصة فيزيون للمؤسسات",
        hero_subtitle: "منصة مؤسسات موحدة مصممة لتبسيط العمليات وتعزيز الإنتاجية وتمكين اتخاذ القرارات الذكية عبر المؤسسات.",
        cta_getStarted: "ابدأ",
        
        // Features Section
        features_title: "الميزات الرئيسية",
        feature1_title: "لوحة التحكم الموحدة",
        feature1_desc: "تحكم مركزي في جميع عمليات المؤسسات مع رؤى وتحليلات في الوقت الفعلي.",
        feature2_title: "أتمتة سير العمل",
        feature2_desc: "أتمتة عمليات الأعمال المعقدة وتقليل التدخل اليدوي مع إدارة سير العمل الذكية.",
        feature3_title: "إدارة الموارد",
        feature3_desc: "تحسين تخصيص الموارد وتتبع الاستخدام عبر الأقسام والمشاريع.",
        feature4_title: "إدارة الموظفين",
        feature4_desc: "قاعدة بيانات شاملة للموظفين مع تتبع الأداء وإدارة المهارات.",
        
        // Modules Section
        modules_title: "الوحدات الأساسية",
        module1_title: "مركز العمليات",
        module1_desc: "مركز قيادة مركزي للعمليات اليومية والتخطيط الاستراتيجي.",
        module2_title: "محرك التحليلات",
        module2_desc: "تحليلات وتقارير متقدمة لاتخاذ القرارات المستندة على البيانات.",
        module3_title: "مركز الاتصالات",
        module3_desc: "أدوات مراسلة ومؤتمرات فيديو وتعاون متكامل.",
        
        // Benefits Section
        benefits_title: "لماذا تختار فيزيون؟",
        benefit1_title: "قابلية التوسع",
        benefit1_desc: "ينمو مع عملك من البداية إلى مستوى المؤسسات.",
        benefit2_title: "التكامل",
        benefit2_desc: "يتكامل بسلا مع الأنظمة وسير العمل الموجودة.",
        benefit3_title: "الأمان",
        benefit3_desc: "أمان على مستوى المؤسسات مع تحكم في الوصول بناء على الأدوار.",
        
        // CTA Section
        cta_title: "حول أعمالك",
        cta_subtitle: "هل أنت مستعد لتجربة مستقبل إدارة المؤسسات؟",
        cta_demo: "اطلب عرض توضيحي",
        cta_contact: "اتصل بالمبيعات"
    }
};

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.capability-card, .module-card, .user-card, .usecase-card, .benefit-card, .why-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('fissionLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // Load navigation
    loadNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
});
