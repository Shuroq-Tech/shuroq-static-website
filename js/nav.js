// Navigation Dropdown Functionality for All Pages
// This file handles all dropdown functionality to be reused across HTML files
// Note: initializeNavigation() is called manually after navigation is loaded

// Removed automatic DOMContentLoaded initialization
// document.addEventListener('DOMContentLoaded', function() {
//     initializeNavigation();
// });

function initializeNavigation() {
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
                const servicesDropdown = document.querySelector('.services-dropdown');
                const servicesLink = servicesDropdown?.querySelector('.services-link');
                if (servicesDropdown) {
                    servicesDropdown.classList.remove('submenu-open');
                    if (servicesLink) {
                        servicesLink.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        };

        mobileMenuBtn.addEventListener('click', function() {
            setMenuOpen(!document.body.classList.contains('nav-open'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!document.body.classList.contains('nav-open')) return;
            
            const target = event.target;
            if (!(target instanceof Element)) return;
            
            const clickedInsideNav = target.closest('nav');
            
            // Close ONLY if clicked OUTSIDE nav
            if (!clickedInsideNav) {
                setMenuOpen(false);
            }
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

    // Services dropdown functionality
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesLink = document.querySelector('.services-link');
    const servicesDropdownMenu = document.querySelector('.services-dropdown .dropdown-menu');
    
    if (servicesDropdown && servicesLink && servicesDropdownMenu) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the dropdown visibility
            servicesDropdown.classList.toggle('submenu-open');
            
            // Rotate chevron icon
            const chevron = servicesLink.querySelector('i');
            if (chevron) {
                chevron.style.transform = servicesDropdown.classList.contains('submenu-open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!servicesDropdown.contains(e.target)) {
                servicesDropdown.classList.remove('submenu-open');
                const chevron = servicesLink.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        });
    }

    // Services Submenu Toggle Functionality (BELOW positioning)
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
                    openSubmenu.previousElementSibling.querySelector('.submenu-arrow').style.transform = 'rotate(0)';
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

    // Company dropdown functionality
    const companyDropdown = document.querySelector('.company-dropdown');
    const companyLink = document.querySelector('.company-link');
    const companyDropdownMenu = document.querySelector('.company-dropdown-menu');
    
    if (companyDropdown && companyLink && companyDropdownMenu) {
        companyLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the dropdown visibility
            const isOpen = companyDropdownMenu.style.display === 'block' || 
                          companyDropdown.classList.contains('submenu-open');
            
            if (isOpen) {
                // Close the dropdown
                companyDropdownMenu.style.display = 'none';
                companyDropdown.classList.remove('submenu-open');
            } else {
                // Open the dropdown
                companyDropdownMenu.style.display = 'block';
                companyDropdown.classList.add('submenu-open');
            }
            
            // Rotate chevron icon
            const chevron = companyLink.querySelector('i');
            if (chevron) {
                chevron.style.transform = companyDropdown.classList.contains('submenu-open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!companyDropdown.contains(e.target)) {
                companyDropdownMenu.style.display = 'none';
                companyDropdown.classList.remove('submenu-open');
                const chevron = companyLink.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        companyDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Solutions dropdown functionality
    const solutionsDropdown = document.querySelector('.solutions-dropdown');
    const solutionsLink = document.querySelector('.solutions-link');
    const solutionsDropdownMenu = document.querySelector('.solutions-dropdown-menu');
    
    if (solutionsDropdown && solutionsLink && solutionsDropdownMenu) {
        solutionsLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the dropdown visibility
            const isOpen = solutionsDropdownMenu.style.display === 'block' || 
                          solutionsDropdown.classList.contains('submenu-open');
            
            if (isOpen) {
                // Close the dropdown
                solutionsDropdownMenu.style.display = 'none';
                solutionsDropdown.classList.remove('submenu-open');
            } else {
                // Open the dropdown
                solutionsDropdownMenu.style.display = 'block';
                solutionsDropdown.classList.add('submenu-open');
            }
            
            // Rotate chevron icon
            const chevron = solutionsLink.querySelector('i');
            if (chevron) {
                chevron.style.transform = solutionsDropdown.classList.contains('submenu-open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!solutionsDropdown.contains(e.target)) {
                solutionsDropdownMenu.style.display = 'none';
                solutionsDropdown.classList.remove('submenu-open');
                const chevron = solutionsLink.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        solutionsDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Resources dropdown functionality
    const resourcesDropdown = document.querySelector('.resources-dropdown');
    const resourcesLink = document.querySelector('.resources-link');
    const resourcesDropdownMenu = document.querySelector('.resources-dropdown-menu');
    
    if (resourcesDropdown && resourcesLink && resourcesDropdownMenu) {
        resourcesLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the dropdown visibility
            const isOpen = resourcesDropdownMenu.style.display === 'block' || 
                          resourcesDropdown.classList.contains('submenu-open');
            
            if (isOpen) {
                // Close the dropdown
                resourcesDropdownMenu.style.display = 'none';
                resourcesDropdown.classList.remove('submenu-open');
            } else {
                // Open the dropdown
                resourcesDropdownMenu.style.display = 'block';
                resourcesDropdown.classList.add('submenu-open');
            }
            
            // Rotate chevron icon
            const chevron = resourcesLink.querySelector('i');
            if (chevron) {
                chevron.style.transform = resourcesDropdown.classList.contains('submenu-open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!resourcesDropdown.contains(e.target)) {
                resourcesDropdownMenu.style.display = 'none';
                resourcesDropdown.classList.remove('submenu-open');
                const chevron = resourcesLink.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0)';
                }
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        resourcesDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Language switching functionality
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Mark as initialized by nav.js
        langBtn.setAttribute('data-nav-initialized', 'true');
        
        // Close language menu when clicking outside
        document.addEventListener('click', function() {
            langMenu.style.display = 'none';
        });
        
        langMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Mobile viewport detection
function isMobileViewport() {
    return window.innerWidth <= 768;
}
