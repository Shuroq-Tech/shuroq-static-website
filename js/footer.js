/**
 * Dynamic Footer Component
 * Generates footer links dynamically based on navigation structure
 */

// Footer Links Data Structure
const footerData = {
    company: [
        { text: 'About Us', href: '/about/', icon: 'fas fa-info-circle' },
        { text: 'The Shuroq Way', href: '/shuroq-way/', icon: 'fas fa-star' },
        { text: 'Careers', href: '/careers/', icon: 'fas fa-briefcase' }
    ],
    services: [
        { text: 'All Services', href: '/services/', icon: 'fas fa-th-large' },
        { text: 'Cutting Edge', href: '/cutting-edge', icon: 'fas fa-rocket' },
        { text: 'Assurance', href: '/assurance/', icon: 'fas fa-shield-alt' },
        { text: 'Automate', href: '/automate', icon: 'fas fa-cogs' },
        { text: 'Data Analytics', href: '/Data Analytics', icon: 'fas fa-chart-line' }
    ],
    resources: [
        { text: 'Blogs', href: '/blogs/blogs.html', icon: 'fas fa-newspaper' },
        { text: 'Events', href: '/events/', icon: 'fas fa-calendar-days' },
        { text: 'Skill Rubrics', href: '/skill-rubrics/', icon: 'fas fa-chart-column' },
        // { text: 'Webinars', href: '#', icon: 'fas fa-video' }
    ],
    contact: [
        { text: 'Contact Us', href: '/contact/', icon: 'fas fa-envelope' },
        { text: 'Support', href: '/contact/', icon: 'fas fa-headset' },
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
    // Links generation disabled - footer now shows only main topics
    // The dynamic link lists have been removed from footer.html
    console.log('Footer links generation disabled - showing main topics only');
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

function getFooterAssetPath(assetName) {
    const path = window.location.pathname.replace(/\\/g, '/');
    const isRootPage =
        path === '/' ||
        /\/index\.html$/i.test(path) ||
        /^[^/]+\.html$/i.test(path);

    return isRootPage ? assetName : `../${assetName}`;
}

function updateFooterAssetPaths(footerElement) {
    const logo = footerElement.querySelector('.footer-logo img');
    if (logo) {
        logo.src = getFooterAssetPath('image.png');
    }
}

function ensureFooterContainer() {
    let footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.classList.add('footer-host');
        return footerContainer;
    }

    footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    footerContainer.className = 'footer-host';

    const mainContent = document.querySelector('main') || document.getElementById('main');
    if (mainContent && mainContent.parentNode) {
        mainContent.insertAdjacentElement('afterend', footerContainer);
    } else {
        document.body.appendChild(footerContainer);
    }

    return footerContainer;
}

async function fetchFooterMarkup() {
    const candidates = ['footer.html', '../footer.html', '../../footer.html'];

    for (const path of candidates) {
        try {
            const response = await fetch(path);
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            // Try the next candidate path.
        }
    }

    throw new Error('Unable to load footer.html from known paths');
}

/**
 * Load footer component into page
 */
async function loadFooterComponent() {
    // Check if footer already exists
    if (document.getElementById('dynamic-footer')) {
        initializeFooter();
        return;
    }
    
    try {
        const html = await fetchFooterMarkup();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const footer = tempDiv.querySelector('#dynamic-footer');

        if (footer) {
            const footerContainer = ensureFooterContainer();
            updateFooterAssetPaths(footer);
            footerContainer.appendChild(footer);
            initializeFooter();
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
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