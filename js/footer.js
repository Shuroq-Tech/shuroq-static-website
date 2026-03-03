/**
 * Dynamic Footer Component
 * Generates footer links dynamically based on navigation structure
 */

// Footer Links Data Structure
const footerData = {
    company: [
        { text: 'About Us', href: 'aboutus.html', icon: 'fas fa-info-circle' },
        { text: 'The Shuroq Way', href: 'shuroq_way.html', icon: 'fas fa-star' },
        { text: 'Careers', href: '#', icon: 'fas fa-briefcase' }
    ],
    services: [
        { text: 'All Services', href: 'services.html', icon: 'fas fa-th-large' },
        { text: 'Cutting Edge', href: 'cuttingedge.html', icon: 'fas fa-rocket' },
        { text: 'Assurance', href: 'assurance.html', icon: 'fas fa-shield-alt' },
        { text: 'Automate', href: 'automate.html', icon: 'fas fa-cogs' },
        { text: 'Vision', href: 'vision.html', icon: 'fas fa-chart-line' }
    ],
    resources: [
        { text: 'Blogs', href: 'blogs.html', icon: 'fas fa-newspaper' },
        { text: 'Events', href: '#', icon: 'fas fa-calendar-days' },
        { text: 'Skill Rubrics', href: '#', icon: 'fas fa-chart-column' },
        { text: 'Webinars', href: '#', icon: 'fas fa-video' }
    ],
    contact: [
        { text: 'Contact Us', href: 'contact.html', icon: 'fas fa-envelope' },
        { text: 'Support', href: '#', icon: 'fas fa-headset' },
        { text: 'Locations', href: '#', icon: 'fas fa-map-marker-alt' }
    ]
};

// Footer Translations
const footerTranslations = {
    en: {
        company: 'Company',
        services: 'Services', 
        resources: 'Resources',
        contact: 'Contact',
        title: 'Technology Services & Digital Engineering Company',
        description: 'Empowering businesses with cutting-edge technology solutions, cloud infrastructure, and digital transformation services.',
        copyright: '© 2026 Shuroq Technology Services. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
    },
    ar: {
        company: 'الشركة',
        services: 'الخدمات',
        resources: 'الموارد', 
        contact: 'اتصل',
        title: 'شركة خدمات التكنولوجيا والهندسة الرقمية',
        description: 'تمكين الشركات من خلال حلول تكنولوجية متطورة، وبنية تحتية سحابية، وخدمات التحول الرقمي.',
        copyright: '© 2026 شروق للتقنية والخدمات. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        cookies: 'سياسة ملفات تعريف الارتباط'
    }
};

/**
 * Generate footer links dynamically
 */
function generateFooterLinks() {
    // Generate links for each section
    Object.keys(footerData).forEach(section => {
        const container = document.getElementById(`footer-${section}-links`);
        if (container) {
            container.innerHTML = '';
            
            footerData[section].forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                
                a.href = link.href;
                a.textContent = link.text;
                
                if (link.icon) {
                    const icon = document.createElement('i');
                    icon.className = link.icon;
                    a.prepend(icon);
                }
                
                li.appendChild(a);
                container.appendChild(li);
            });
        }
    });
}

/**
 * Update footer translations
 */
function updateFooterTranslations(lang = 'en') {
    const translations = footerTranslations[lang] || footerTranslations.en;
    
    // Update section titles
    Object.keys(translations).forEach(key => {
        if (key !== 'title' && key !== 'description' && key !== 'copyright' && 
            key !== 'privacy' && key !== 'terms' && key !== 'cookies') {
            const element = document.querySelector(`.footer-section-title`);
            if (element && element.textContent.toLowerCase().includes(key)) {
                element.textContent = translations[key];
            }
        }
    });
    
    // Update brand section
    const titleElement = document.querySelector('.footer-title');
    if (titleElement) titleElement.textContent = translations.title;
    
    const descElement = document.querySelector('.footer-description');
    if (descElement) descElement.textContent = translations.description;
    
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) copyrightElement.textContent = translations.copyright;
    
    // Update legal links
    const legalLinks = document.querySelectorAll('.footer-legal a');
    if (legalLinks[0]) legalLinks[0].textContent = translations.privacy;
    if (legalLinks[1]) legalLinks[1].textContent = translations.terms;
    if (legalLinks[2]) legalLinks[2].textContent = translations.cookies;
}

/**
 * Initialize footer component
 */
function initializeFooter() {
    // Generate links
    generateFooterLinks();
    
    // Apply current language
    const currentLang = document.body.classList.contains('rtl') ? 'ar' : 'en';
    updateFooterTranslations(currentLang);
    
    // Add hover effects dynamically
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ffffff';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#94a3b8';
        });
    });
    
    // Add social media hover effects
    const socialLinks = document.querySelectorAll('.footer-social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.background = '#3b82f6';
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Load footer component into page
 */
function loadFooterComponent() {
    // Check if footer already exists
    if (document.getElementById('dynamic-footer')) {
        initializeFooter();
        return;
    }
    
    // Load footer HTML
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            // Append footer to footer container instead of main
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const footer = tempDiv.querySelector('#dynamic-footer');
            
            if (footer) {
                // Find footer container and append footer there
                const footerContainer = document.getElementById('footer-container');
                if (footerContainer) {
                    footerContainer.appendChild(footer);
                } else {
                    // Fallback to main if container not found
                    const mainContent = document.querySelector('main') || document.getElementById('main');
                    if (mainContent) {
                        mainContent.appendChild(footer);
                    } else {
                        document.body.appendChild(footer);
                    }
                }
                initializeFooter();
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}

/**
 * Update footer when language changes
 */
function updateFooterLanguage(lang) {
    updateFooterTranslations(lang);
}

// Initialize footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure other components are loaded
    setTimeout(loadFooterComponent, 100);
});

// Make functions globally available
window.footerUtils = {
    updateFooterLanguage,
    generateFooterLinks,
    updateFooterTranslations
};

// Listen for language changes
if (typeof changeLanguage === 'function') {
    const originalChangeLanguage = changeLanguage;
    changeLanguage = function(lang) {
        originalChangeLanguage(lang);
        updateFooterLanguage(lang);
    };
}
