// Navigation Dropdown Functionality for All Pages
// This file handles all dropdown functionality to be reused across HTML files
// Note: initializeNavigation() is called manually after navigation is loaded

// Removed automatic DOMContentLoaded initialization
// document.addEventListener('DOMContentLoaded', function() {
//     initializeNavigation();
// });

// Global click handler for dropdowns - single listener to prevent conflicts
let globalClickHandler = null;

function initializeNavigation() {
    // Remove existing global click handler if it exists
    if (globalClickHandler) {
        document.removeEventListener('click', globalClickHandler);
    }
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        // Set ARIA attributes for accessibility
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('type', 'button');

        const setMenuOpen = (open) => {
            document.body.classList.toggle('nav-open', open);
            mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            mobileMenuBtn.classList.toggle('is-open', open);
            mobileMenuBtn.textContent = open ? '✕' : '☰';

            // Close any open dropdowns when menu is closed
            if (!open) {
                closeAllDropdowns();
            }
        };

        mobileMenuBtn.addEventListener('click', function() {
            setMenuOpen(!document.body.classList.contains('nav-open'));
        });

        // Close menu when clicking on nav links (in mobile)
        navLinks.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            
            const link = target.closest('a');
            if (!link) return;
            
            if (isMobileViewport()) {
                setMenuOpen(false);
            }
        });

        // Close menu on window resize to desktop
        window.addEventListener('resize', () => {
            if (!isMobileViewport()) {
                setMenuOpen(false);
            }
        });
    }

    // Initialize all dropdowns
    initializeDropdowns();
    
    // Initialize language functionality
    initializeLanguage();
    
    // Create single global click handler
    globalClickHandler = function(e) {
        handleGlobalClick(e);
    };
    document.addEventListener('click', globalClickHandler);
}

// Function to close all dropdowns
function closeAllDropdowns() {
    const dropdowns = [
        { selector: '.services-dropdown', menuSelector: '.dropdown-menu', linkSelector: '.services-link' },
        { selector: '.company-dropdown', menuSelector: '.company-dropdown-menu', linkSelector: '.company-link' },
        { selector: '.solutions-dropdown', menuSelector: '.solutions-dropdown-menu', linkSelector: '.solutions-link' },
        { selector: '.resources-dropdown', menuSelector: '.resources-dropdown-menu', linkSelector: '.resources-link' }
    ];
    
    dropdowns.forEach(dropdown => {
        const element = document.querySelector(dropdown.selector);
        const menu = document.querySelector(dropdown.menuSelector);
        const link = document.querySelector(dropdown.linkSelector);
        
        if (element && menu) {
            element.classList.remove('submenu-open');
            menu.style.display = 'none';
            
            if (link) {
                link.setAttribute('aria-expanded', 'false');
                const chevron = link.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        }
    });
}

// Function to initialize all dropdowns
function initializeDropdowns() {
    // Services dropdown
    initializeServicesDropdown();
    
    // Company dropdown
    initializeCompanyDropdown();
    
    // Solutions dropdown
    initializeSolutionsDropdown();
    
    // Resources dropdown
    initializeResourcesDropdown();
}

// Services dropdown functionality
function initializeServicesDropdown() {
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesLink = document.querySelector('.services-link');
    const servicesDropdownMenu = document.querySelector('.services-dropdown .dropdown-menu');
    
    if (servicesDropdown && servicesLink && servicesDropdownMenu) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            toggleDropdown(servicesDropdown, servicesDropdownMenu, servicesLink);
        });
        
        // Services Submenu Toggle Functionality
        const submenuToggles = document.querySelectorAll('.services-dropdown .dropdown-menu .has-submenu');
        
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Find submenu (next element)
                const submenu = this.nextElementSibling;
                const arrow = this.querySelector('.submenu-arrow');
                
                if (submenu && submenu.classList.contains('submenu')) {
                    // Check if this submenu is currently open
                    const isCurrentlyOpen = submenu.classList.contains('active');
                    
                    // Close ALL submenus first (accordion behavior)
                    document.querySelectorAll('.services-dropdown .dropdown-menu .submenu.active').forEach(openSubmenu => {
                        openSubmenu.classList.remove('active');
                        openSubmenu.previousElementSibling.classList.remove('active');
                        const openArrow = openSubmenu.previousElementSibling.querySelector('.submenu-arrow');
                        if (openArrow) {
                            openArrow.style.transform = 'rotate(0)';
                        }
                    });
                    
                    // If this submenu wasn't open, open it
                    if (!isCurrentlyOpen) {
                        submenu.classList.add('active');
                        this.classList.add('active');
                        if (arrow) {
                            arrow.style.transform = 'rotate(90deg)';
                        }
                    }
                }
            });
        });
        
        // Prevent submenu clicks from closing parent dropdown
        const allSubmenus = document.querySelectorAll('.services-dropdown .dropdown-menu .submenu');
        allSubmenus.forEach(submenu => {
            submenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    }
}

// Company dropdown functionality
function initializeCompanyDropdown() {
    const companyDropdown = document.querySelector('.company-dropdown');
    const companyLink = document.querySelector('.company-link');
    const companyDropdownMenu = document.querySelector('.company-dropdown-menu');
    
    if (companyDropdown && companyLink && companyDropdownMenu) {
        companyLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            toggleDropdown(companyDropdown, companyDropdownMenu, companyLink);
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        companyDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Solutions dropdown functionality
function initializeSolutionsDropdown() {
    const solutionsDropdown = document.querySelector('.solutions-dropdown');
    const solutionsLink = document.querySelector('.solutions-link');
    const solutionsDropdownMenu = document.querySelector('.solutions-dropdown-menu');
    
    if (solutionsDropdown && solutionsLink && solutionsDropdownMenu) {
        solutionsLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            toggleDropdown(solutionsDropdown, solutionsDropdownMenu, solutionsLink);
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        solutionsDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Resources dropdown functionality
function initializeResourcesDropdown() {
    const resourcesDropdown = document.querySelector('.resources-dropdown');
    const resourcesLink = document.querySelector('.resources-link');
    const resourcesDropdownMenu = document.querySelector('.resources-dropdown-menu');
    
    if (resourcesDropdown && resourcesLink && resourcesDropdownMenu) {
        resourcesLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            toggleDropdown(resourcesDropdown, resourcesDropdownMenu, resourcesLink);
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        resourcesDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Generic dropdown toggle function
function toggleDropdown(dropdownElement, menuElement, linkElement) {
    const isOpen = menuElement.style.display === 'block' || 
                  dropdownElement.classList.contains('submenu-open');
    
    if (isOpen) {
        // Close the dropdown
        menuElement.style.display = 'none';
        dropdownElement.classList.remove('submenu-open');
        if (linkElement) {
            linkElement.setAttribute('aria-expanded', 'false');
        }
    } else {
        // Close other dropdowns first
        closeAllDropdowns();
        
        // Open this dropdown
        menuElement.style.display = 'block';
        dropdownElement.classList.add('submenu-open');
        if (linkElement) {
            linkElement.setAttribute('aria-expanded', 'true');
        }
    }
    
    // Rotate chevron icon
    const chevron = linkElement.querySelector('i');
    if (chevron) {
        chevron.style.transform = dropdownElement.classList.contains('submenu-open') ? 'rotate(180deg)' : 'rotate(0)';
    }
}

// Language switching functionality
function initializeLanguage() {
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    
    if (langBtn && langMenu) {
        // Only initialize if not already handled by main_lang.js
        if (!langBtn.getAttribute('data-nav-initialized')) {
            langBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
            });
            
            // Mark as initialized by nav.js
            langBtn.setAttribute('data-nav-initialized', 'true');
        }
        
        langMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Global click handler - single function to handle all outside clicks
function handleGlobalClick(e) {
    const target = e.target;
    if (!(target instanceof Element)) return;
    
    // Handle mobile menu close
    if (document.body.classList.contains('nav-open')) {
        const clickedInsideNav = target.closest('nav');
        if (!clickedInsideNav) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                document.body.classList.remove('nav-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.classList.remove('is-open');
                mobileMenuBtn.textContent = '☰';
                closeAllDropdowns();
            }
        }
    }
    
    // Handle dropdown close when clicking outside
    const dropdowns = [
        { selector: '.services-dropdown', menuSelector: '.dropdown-menu', linkSelector: '.services-link' },
        { selector: '.company-dropdown', menuSelector: '.company-dropdown-menu', linkSelector: '.company-link' },
        { selector: '.solutions-dropdown', menuSelector: '.solutions-dropdown-menu', linkSelector: '.solutions-link' },
        { selector: '.resources-dropdown', menuSelector: '.resources-dropdown-menu', linkSelector: '.resources-link' }
    ];
    
    dropdowns.forEach(dropdown => {
        const element = document.querySelector(dropdown.selector);
        if (element && !element.contains(target)) {
            const menu = document.querySelector(dropdown.menuSelector);
            const link = document.querySelector(dropdown.linkSelector);
            
            if (menu) {
                menu.style.display = 'none';
            }
            if (element) {
                element.classList.remove('submenu-open');
            }
            if (link) {
                link.setAttribute('aria-expanded', 'false');
                const chevron = link.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        }
    });
    
    // Handle language menu close
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    if (langBtn && langMenu && !langBtn.contains(target) && !langMenu.contains(target)) {
        langMenu.style.display = 'none';
    }
}

// Mobile viewport detection
function isMobileViewport() {
    return window.innerWidth <= 768;
}
