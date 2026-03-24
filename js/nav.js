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
            
            console.log('Services clicked, mobile viewport:', isMobileViewport()); // Debug log
            
            // Check if we're in mobile viewport
            if (isMobileViewport()) {
                // Show sub-menu instead of dropdown
                console.log('Showing Services sub-menu'); // Debug log
                showServicesSubmenu();
            } else {
                // Use regular dropdown for desktop
                console.log('Using desktop dropdown'); // Debug log
                toggleDropdown(servicesDropdown, servicesDropdownMenu, servicesLink);
            }
        });
        
        // Services Submenu Toggle Functionality (for desktop only)
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

// Function to show Services sub-menu in mobile
function showServicesSubmenu() {
    console.log('showServicesSubmenu() called'); // Debug log
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) {
        console.log('navLinks not found'); // Debug log
        return;
    }
    
    console.log('Creating Services sub-menu HTML'); // Debug log
    
    // Create sub-menu HTML with categorized Services items
    const submenuHTML = `
        <div class="services-submenu">
            <div class="submenu-header">
                <button class="back-btn" id="services-back-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <h3>Services</h3>
            </div>
            <div class="submenu-items">
                <!-- All Services Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="all-services">
                        <i class="fas fa-th-large"></i> All Services
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="all-services-dropdown">
                        <a href="/cutting-edge" class="submenu-item">
                            <i class="fas fa-rocket"></i> Cutting Edge
                        </a>
                        <a href="/assurance/" class="submenu-item">
                            <i class="fas fa-shield-alt"></i> Assurance
                        </a>
                        <a href="/automate" class="submenu-item">
                            <i class="fas fa-cogs"></i> Automate
                        </a>
                        <a href="/vision/" class="submenu-item">
                            <i class="fas fa-chart-line"></i> Vision
                        </a>
                    </div>
                </div>
                
                <!-- Industries Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="industries">
                        <i class="fas fa-industry"></i> Industries
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="industries-dropdown">
                        <a href="/industries/" class="submenu-item">
                            <i class="fas fa-industry"></i> Industries
                        </a>
                        <a href="/industries/#telecom" class="submenu-item">
                            <i class="fas fa-phone-alt"></i> Telecom
                        </a>
                        <a href="/industries/#automotive" class="submenu-item">
                            <i class="fas fa-car"></i> Automotive
                        </a>
                        <a href="/industries/#bfsi" class="submenu-item">
                            <i class="fas fa-university"></i> BFSI
                        </a>
                        <a href="/industries/#healthcare" class="submenu-item">
                            <i class="fas fa-heartbeat"></i> Healthcare
                        </a>
                        <a href="/industries/#finance" class="submenu-item">
                            <i class="fas fa-coins"></i> Finance
                        </a>
                    </div>
                </div>
                
                <!-- Product Engineering Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="product-engineering">
                        <i class="fas fa-cube"></i> Product Engineering
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="product-engineering-dropdown">
                        <a href="/product-engineering/" class="submenu-item">
                            <i class="fas fa-cube"></i> Product Engineering Services
                        </a>
                        <a href="/cloud-native/" class="submenu-item">
                            <i class="fas fa-cloud"></i> Cloud Native Product Development
                        </a>
                        <a href="/faas/" class="submenu-item">
                            <i class="fas fa-layer-group"></i> FaaS
                        </a>
                        <a href="/monolith/" class="submenu-item">
                            <i class="fas fa-cubes"></i> Monolith Microservice
                        </a>
                    </div>
                </div>
                
                <!-- Platform Engineering Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="platform-engineering">
                        <i class="fas fa-server"></i> Platform Engineering
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="platform-engineering-dropdown">
                        <a href="/platformengineering/" class="submenu-item">
                            <i class="fas fa-server"></i> Platform Engineering
                        </a>
                        <a href="/platform-services/" class="submenu-item">
                            <i class="fas fa-server"></i> Platform Engineering Services
                        </a>
                        <a href="/backstage/" class="submenu-item">
                            <i class="fas fa-comments"></i> Backstage Consulting
                        </a>
                        <a href="/ci-cd-dev/" class="submenu-item">
                            <i class="fas fa-infinity"></i> CI/CD & Dev Experience
                        </a>
                        <a href="/progressive-delivery/" class="submenu-item">
                            <i class="fas fa-rocket"></i> Progressive Delivery
                        </a>
                    </div>
                </div>
                
                <!-- Site Reliability Engineering Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="site-reliability">
                        <i class="fas fa-shield-virus"></i> Site Reliability Engineering
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="site-reliability-dropdown">
                        <a href="/sre-consultancy/" class="submenu-item">
                            <i class="fas fa-handshake"></i> SRE Consultancy
                        </a>
                        <a href="/service-mesh/" class="submenu-item">
                            <i class="fas fa-network-wired"></i> Service Mesh Consulting
                        </a>
                        <a href="/cloud-native-network/" class="submenu-item">
                            <i class="fas fa-cloud"></i> Cloud Native Network
                        </a>
                        <a href="/linkerd-services/" class="submenu-item">
                            <i class="fas fa-link"></i> Linkerd Consulting
                        </a>
                        <a href="/terraform/" class="submenu-item">
                            <i class="fas fa-cube"></i> Terraform Consulting
                        </a>
                    </div>
                </div>
                
                <!-- Observability & DevSecOps Category -->
                <div class="submenu-category">
                    <a href="#" class="submenu-item has-submenu" data-category="observability">
                        <i class="fas fa-eye"></i> Observability & DevSecOps
                        <i class="fas fa-chevron-right submenu-arrow"></i>
                    </a>
                    <div class="submenu-dropdown" id="observability-dropdown">
                        <a href="/devsec-ops/" class="submenu-item">
                            <i class="fas fa-shield-alt"></i> DevSecOps Consult
                        </a>
                        <a href="/observability-consult/" class="submenu-item">
                            <i class="fas fa-chart-line"></i> Observability and Adoption
                        </a>
                        <a href="/grafana/" class="submenu-item">
                            <i class="fas fa-chart-bar"></i> Grafana Consulting
                        </a>
                        <a href="/prometheus/" class="submenu-item">
                            <i class="fas fa-fire"></i> Prometheus Consulting
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Store original menu content
    const originalContent = navLinks.innerHTML;
    navLinks.setAttribute('data-original-content', originalContent);
    
    // Replace with sub-menu
    navLinks.innerHTML = submenuHTML;
    
    // Add active class for styling
    navLinks.classList.add('submenu-active');
    
    // Add event listener to back button
    const backBtn = document.getElementById('services-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideServicesSubmenu();
        });
    }
    
    // Add event listeners for category dropdowns
    initializeServiceCategoryDropdowns();
}

// Function to initialize service category dropdowns
function initializeServiceCategoryDropdowns() {
    const categoryToggles = document.querySelectorAll('.services-submenu .has-submenu');
    
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const category = this.getAttribute('data-category');
            const dropdown = document.getElementById(category + '-dropdown');
            const arrow = this.querySelector('.submenu-arrow');
            
            if (dropdown) {
                // Close all other dropdowns first
                document.querySelectorAll('.services-submenu .submenu-dropdown').forEach(openDropdown => {
                    if (openDropdown.id !== category + '-dropdown') {
                        openDropdown.classList.remove('active');
                        const otherArrow = openDropdown.previousElementSibling.querySelector('.submenu-arrow');
                        if (otherArrow) {
                            otherArrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Toggle current dropdown
                const isOpen = dropdown.classList.contains('active');
                if (isOpen) {
                    // Close this dropdown
                    dropdown.classList.remove('active');
                    if (arrow) {
                        arrow.style.transform = 'rotate(0deg)';
                    }
                } else {
                    // Open this dropdown
                    dropdown.classList.add('active');
                    if (arrow) {
                        arrow.style.transform = 'rotate(90deg)';
                    }
                }
            }
        });
    });
    
    // Prevent dropdown item clicks from closing dropdown
    const dropdownItems = document.querySelectorAll('.services-submenu .submenu-dropdown .submenu-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}

// Function to hide Services sub-menu and return to main menu
function hideServicesSubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Restore original content
    const originalContent = navLinks.getAttribute('data-original-content');
    if (originalContent) {
        navLinks.innerHTML = originalContent;
        navLinks.removeAttribute('data-original-content');
    }
    
    // Remove active class
    navLinks.classList.remove('submenu-active');
    
    // Re-initialize only dropdowns, not full navigation
    initializeDropdowns();
    
    // Re-initialize language functionality
    initializeLanguage();
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
            
            // Check if we're in mobile viewport
            if (isMobileViewport()) {
                // Show sub-menu instead of dropdown
                showCompanySubmenu();
            } else {
                // Use regular dropdown for desktop
                toggleDropdown(companyDropdown, companyDropdownMenu, companyLink);
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        companyDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Function to show Company sub-menu in mobile
function showCompanySubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Create sub-menu HTML
    const submenuHTML = `
        <div class="company-submenu">
            <div class="submenu-header">
                <button class="back-btn" id="company-back-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <h3>Company</h3>
            </div>
            <div class="submenu-items">
                <a href="/about/" class="submenu-item">
                    <i class="fas fa-building"></i> About Us
                </a>
                <a href="/careers/" class="submenu-item">
                    <i class="fas fa-briefcase"></i> Careers
                </a>
                <a href="/shuroq-way/" class="submenu-item">
                    <i class="fas fa-star"></i> The Shuroq Way
                </a>
                <a href="/contact/" class="submenu-item">
                    <i class="fas fa-envelope"></i> Contact Us
                </a>
            </div>
        </div>
    `;
    
    // Store original menu content
    const originalContent = navLinks.innerHTML;
    navLinks.setAttribute('data-original-content', originalContent);
    
    // Replace with sub-menu
    navLinks.innerHTML = submenuHTML;
    
    // Add active class for styling
    navLinks.classList.add('submenu-active');
    
    // Add event listener to back button
    const backBtn = document.getElementById('company-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideCompanySubmenu();
        });
    }
}

// Function to hide Company sub-menu and return to main menu
function hideCompanySubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Restore original content
    const originalContent = navLinks.getAttribute('data-original-content');
    if (originalContent) {
        navLinks.innerHTML = originalContent;
        navLinks.removeAttribute('data-original-content');
    }
    
    // Remove active class
    navLinks.classList.remove('submenu-active');
    
    // Re-initialize only dropdowns, not full navigation
    initializeDropdowns();
    
    // Re-initialize language functionality
    initializeLanguage();
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
            
            // Check if we're in mobile viewport
            if (isMobileViewport()) {
                // Show sub-menu instead of dropdown
                showSolutionsSubmenu();
            } else {
                // Use regular dropdown for desktop
                toggleDropdown(solutionsDropdown, solutionsDropdownMenu, solutionsLink);
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        solutionsDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Function to show Solutions sub-menu in mobile
function showSolutionsSubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Create sub-menu HTML
    const submenuHTML = `
        <div class="solutions-submenu">
            <div class="submenu-header">
                <button class="back-btn" id="solutions-back-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <h3>Solutions</h3>
            </div>
            <div class="submenu-items">
                <a href="/fission/" class="submenu-item">
                    <i class="fas fa-atom"></i> Fission Enterprise
                </a>
                <a href="/botkube/" class="submenu-item">
                    <i class="fas fa-robot"></i> Botkube Enterprise
                </a>
                <a href="/kubernetes-services/" class="submenu-item">
                    <i class="fas fa-dharmachakra"></i> Managed Services for Kubernetes
                </a>
            </div>
        </div>
    `;
    
    // Store original menu content
    const originalContent = navLinks.innerHTML;
    navLinks.setAttribute('data-original-content', originalContent);
    
    // Replace with sub-menu
    navLinks.innerHTML = submenuHTML;
    
    // Add active class for styling
    navLinks.classList.add('submenu-active');
    
    // Add event listener to back button
    const backBtn = document.getElementById('solutions-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideSolutionsSubmenu();
        });
    }
}

// Function to hide Solutions sub-menu and return to main menu
function hideSolutionsSubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Restore original content
    const originalContent = navLinks.getAttribute('data-original-content');
    if (originalContent) {
        navLinks.innerHTML = originalContent;
        navLinks.removeAttribute('data-original-content');
    }
    
    // Remove active class
    navLinks.classList.remove('submenu-active');
    
    // Re-initialize only dropdowns, not full navigation
    initializeDropdowns();
    
    // Re-initialize language functionality
    initializeLanguage();
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
            
            // Check if we're in mobile viewport
            if (isMobileViewport()) {
                // Show sub-menu instead of dropdown
                showResourcesSubmenu();
            } else {
                // Use regular dropdown for desktop
                toggleDropdown(resourcesDropdown, resourcesDropdownMenu, resourcesLink);
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        resourcesDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Function to show Resources sub-menu in mobile
function showResourcesSubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Create sub-menu HTML
    const submenuHTML = `
        <div class="resources-submenu">
            <div class="submenu-header">
                <button class="back-btn" id="resources-back-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <h3>Resources</h3>
            </div>
            <div class="submenu-items">
                <a href="/resources/" class="submenu-item">
                    <i class="fas fa-folder"></i> Resources
                </a>
                <a href="/blogs/blogs.html" class="submenu-item">
                    <i class="fas fa-newspaper"></i> Blogs
                </a>
                <a href="/events/" class="submenu-item">
                    <i class="fas fa-calendar-days"></i> Events
                </a>
                <a href="/skill-rubrics/" class="submenu-item">
                    <i class="fas fa-chart-column"></i> Skill Rubrics
                </a>
            </div>
        </div>
    `;
    
    // Store original menu content
    const originalContent = navLinks.innerHTML;
    navLinks.setAttribute('data-original-content', originalContent);
    
    // Replace with sub-menu
    navLinks.innerHTML = submenuHTML;
    
    // Add active class for styling
    navLinks.classList.add('submenu-active');
    
    // Add event listener to back button
    const backBtn = document.getElementById('resources-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideResourcesSubmenu();
        });
    }
}

// Function to hide Resources sub-menu and return to main menu
function hideResourcesSubmenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Restore original content
    const originalContent = navLinks.getAttribute('data-original-content');
    if (originalContent) {
        navLinks.innerHTML = originalContent;
        navLinks.removeAttribute('data-original-content');
    }
    
    // Remove active class
    navLinks.classList.remove('submenu-active');
    
    // Re-initialize only dropdowns, not full navigation
    initializeDropdowns();
    
    // Re-initialize language functionality
    initializeLanguage();
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
        // Always re-attach the event listener for mobile menu
        // Remove any existing listeners to prevent duplicates
        const newLangBtn = langBtn.cloneNode(true);
        langBtn.parentNode.replaceChild(newLangBtn, langBtn);
        
        // Add fresh event listener
        newLangBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Re-attach menu click listener
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
