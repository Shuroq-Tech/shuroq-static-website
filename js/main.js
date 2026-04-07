(() => {
  // 3D Floating Card Effect
  const initFloatingCardTilt = () => {
    const floatingCard = document.querySelector('.floating-card');
    
    if (!floatingCard) {
      return;
    }

    // Mouse move event handler - calculates and applies 3D rotation
    floatingCard.addEventListener('mousemove', (e) => {
      // Get position and dimensions of card
      const rect = floatingCard.getBoundingClientRect();
      
      // Calculate mouse position relative to card
      const mouseX = e.clientX - rect.left;  // X position within card
      const mouseY = e.clientY - rect.top;   // Y position within card
      
      // Calculate center point of card
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

  // Initialize the 3D tilt effect when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingCardTilt);
  } else {
    initFloatingCardTilt();
  }
})();

// Mobile Expertise Carousel for "What Makes Us Different" Section
document.addEventListener('DOMContentLoaded', function() {
    // Check if mobile screen
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Initialize carousel on mobile
    function initCarousel() {
        const differentLeft = document.querySelector('.different-left');
        const expertiseOverlay = document.querySelector('.expertise-overlay');
        
        if (!differentLeft || !expertiseOverlay || !isMobile()) return;

        const expertiseContent = expertiseOverlay.querySelector('.expertise-content');
        const expertiseItems = expertiseContent.querySelectorAll('.expertise-item');
        
        if (expertiseItems.length <= 1) return;

        // Create carousel structure
        const carousel = document.createElement('div');
        carousel.className = 'expertise-carousel';
        
        const track = document.createElement('div');
        track.className = 'expertise-track';
        
        // Create slides
        expertiseItems.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'expertise-slide';
            slide.appendChild(item.cloneNode(true));
            track.appendChild(slide);
        });

        // Create navigation dots
        const dots = document.createElement('div');
        dots.className = 'carousel-dots';
        
        expertiseItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to parent container
            goToSlide(index);
        });
            dots.appendChild(dot);
        });

        // Create navigation arrows
        const prevBtn = document.createElement('div');
        prevBtn.className = 'carousel-nav prev';
        prevBtn.innerHTML = '‹';
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to parent container
            goToSlide(currentSlide - 1);
        });

        const nextBtn = document.createElement('div');
        nextBtn.className = 'carousel-nav next';
        nextBtn.innerHTML = '›';
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to parent container
            goToSlide(currentSlide + 1);
        });

        // Assemble carousel
        carousel.appendChild(track);
        carousel.appendChild(dots);
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        // Replace original content
        expertiseOverlay.innerHTML = '';
        expertiseOverlay.appendChild(carousel);

        // Carousel state
        let currentSlide = 0;
        const totalSlides = expertiseItems.length;

        function goToSlide(index) {
            // Wrap around
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            
            currentSlide = index;
            
            // Update track position
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            const allDots = dots.querySelectorAll('.carousel-dot');
            allDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        // Auto-advance every 5 seconds
        let autoPlayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    goToSlide(currentSlide + 1); // Swipe left, go next
                } else {
                    goToSlide(currentSlide - 1); // Swipe right, go prev
                }
            }
        }

        // Initial setup
        goToSlide(0);
    }

    // Handle mobile toggle functionality
    function initMobileToggle() {
        const differentLeft = document.querySelector('.different-left');
        const differentContent = document.querySelector('.different-content-overlay');
        const expertiseOverlay = document.querySelector('.expertise-overlay');
        
        if (!differentLeft || !differentContent || !expertiseOverlay) return;

        let isExpanded = false;
        let isCarousel = false;

        // Toggle between main content and expertise carousel - ONLY for expertise container
        differentLeft.addEventListener('click', function(e) {
            if (!isMobile()) return;
            
            e.preventDefault();
            e.stopPropagation(); // Prevent bubbling to document
            
            if (!isCarousel) {
                // First click - initialize carousel
                initCarousel();
                isCarousel = true;
            }
            
            // Toggle visibility
            if (!isExpanded) {
                differentContent.style.opacity = '0';
                differentContent.style.visibility = 'hidden';
                expertiseOverlay.style.opacity = '1';
                expertiseOverlay.style.visibility = 'visible';
            } else {
                differentContent.style.opacity = '1';
                differentContent.style.visibility = 'visible';
                expertiseOverlay.style.opacity = '0';
                expertiseOverlay.style.visibility = 'hidden';
            }
            
            isExpanded = !isExpanded;
        });

        // Close carousel when clicking outside the expertise container
        document.addEventListener('click', function(e) {
            if (!isMobile()) return;
            
            // Handle expertise container closing
            if (isExpanded) {
                const expertiseContainer = document.querySelector('.expertise-overlay');
                if (expertiseContainer && !expertiseContainer.contains(e.target) && !differentLeft.contains(e.target)) {
                    // Close the carousel
                    differentContent.style.opacity = '1';
                    differentContent.style.visibility = 'visible';
                    expertiseOverlay.style.opacity = '0';
                    expertiseOverlay.style.visibility = 'hidden';
                    isExpanded = false;
                }
            }
            
            // Handle differentiator items hover reset on mobile
            const differentiatorItems = document.querySelectorAll('.differentiator-item');
            differentiatorItems.forEach(item => {
                if (!item.contains(e.target)) {
                    item.classList.remove('active');
                }
            });
        });

        // Handle differentiator item clicks on mobile (instead of hover)
        const differentiatorItems = document.querySelectorAll('.differentiator-item');
        differentiatorItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (!isMobile()) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active class from all items
                differentiatorItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle active class on clicked item
                item.classList.toggle('active');
            });
        });

        // Add visual indicator for mobile users
        if (isMobile()) {
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                z-index: 5;
                pointer-events: none;
                animation: pulse 2s infinite;
            `;
            indicator.textContent = 'Tap to explore';
            differentLeft.appendChild(indicator);
        }
    }

    // Initialize on load
    if (isMobile()) {
        initMobileToggle();
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (isMobile()) {
                initMobileToggle();
            }
        }, 250);
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);
