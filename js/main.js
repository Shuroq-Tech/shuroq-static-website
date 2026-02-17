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

    // ============================================
    // 3D TILT EFFECT FOR FLOATING CARD
    // ============================================
    
    /**
     * Initializes 3D tilt effect on the floating card
     * Creates an interactive 3D perspective that follows mouse movement
     */
    const initFloatingCardTilt = () => {
      // Select the floating card element
      const floatingCard = document.querySelector('.floating-card');
      
      // Exit if floating card doesn't exist
      if (!floatingCard) {
        console.log('Floating card not found');
        return;
      }

      // Mouse move event handler - calculates and applies 3D rotation
      floatingCard.addEventListener('mousemove', (e) => {
        // Get the position and dimensions of the card
        const rect = floatingCard.getBoundingClientRect();
        
        // Calculate mouse position relative to the card
        const mouseX = e.clientX - rect.left;  // X position within card
        const mouseY = e.clientY - rect.top;   // Y position within card
        
        // Calculate the center point of the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation values based on mouse distance from center
        // Divide by 10 to create subtle, smooth rotation
        const rotateX = (mouseY - centerY) / 10;  // Tilt up/down
        const rotateY = (centerX - mouseX) / 10;  // Tilt left/right
        
        // Apply 3D transformation with perspective
        // perspective(1000px) creates the 3D depth effect
        // rotateX tilts on X-axis (up/down)
        // rotateY tilts on Y-axis (left/right)
        floatingCard.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1, 1, 1)
        `;
      });

      // Mouse leave event handler - resets card to original position
      floatingCard.addEventListener('mouseleave', () => {
        // Reset all transformations when mouse leaves the card
        floatingCard.style.transform = `
          perspective(1000px) 
          rotateX(0deg) 
          rotateY(0deg) 
          scale3d(1, 1, 1)
        `;
      });

      
    };

    // Initialize the 3D tilt effect
    initFloatingCardTilt();
  };//floatingCardTilt effect completes here

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
