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
        solutions: 'Solutions',
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

    const footerLinks = document.querySelectorAll('.footer-link');
    if (footerLinks[0]) footerLinks[0].textContent = translations.company;
    if (footerLinks[1]) footerLinks[1].textContent = translations.services;
    if (footerLinks[2]) footerLinks[2].textContent = translations.solutions || 'Solutions';
    if (footerLinks[3]) footerLinks[3].textContent = translations.resources;

    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) copyrightElement.textContent = translations.copyright;
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

/**
 * Floating Contact CTA — injected on every page except /contact/
 */
function injectFloatingCTA() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/contact')) return;

    const style = document.createElement('style');
    style.textContent = `
        .floating-cta-wrap {
            position: fixed;
            right: 0;
            top: 65%;
            transform: translateY(-50%);
            z-index: 9000;
        }
        .floating-cta-link {
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 10px 0 0 10px;
            box-shadow: -3px 0 18px rgba(37,99,235,0.4);
            overflow: hidden;
            max-width: 52px;
            transition: max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
            white-space: nowrap;
        }
        .floating-cta-link:hover {
            max-width: 170px;
            box-shadow: -5px 0 26px rgba(37,99,235,0.55);
        }
        .floating-cta-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 52px;
            height: 52px;
            flex-shrink: 0;
        }
        .floating-cta-icon i {
            font-size: 1.35rem;
        }
        .floating-cta-text {
            font-family: 'Poppins', sans-serif;
            font-size: 0.85rem;
            font-weight: 600;
            padding-right: 16px;
            opacity: 0;
            transition: opacity 0.2s ease 0.15s;
        }
        .floating-cta-link:hover .floating-cta-text {
            opacity: 1;
        }
        @media (max-width: 480px) {
            .floating-cta-icon {
                min-width: 44px;
                height: 44px;
            }
            .floating-cta-link {
                max-width: 44px;
            }
        }
    `;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.className = 'floating-cta-wrap';
    wrap.innerHTML = `
        <a href="/contact/" class="floating-cta-link" aria-label="Contact Us">
            <span class="floating-cta-icon"><i class="fas fa-comment-dots"></i></span>
            <span class="floating-cta-text">Contact Us</span>
        </a>
    `;
    document.body.appendChild(wrap);
}

// Initialize footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure other components are loaded
    setTimeout(loadFooterComponent, 100);
    injectFloatingCTA();
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