// Managed Services for Kubernetes - Page-specific JavaScript

// Handle any page-specific interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Managed services page loaded - applying translations...');
    
    // Apply default English translation when page loads
    if (typeof changeLanguage === 'function') {
        console.log('changeLanguage function found, applying English translations...');
        // Small delay to ensure DOM is ready and navigation is loaded
        setTimeout(() => {
            console.log('Applying English translations...');
            changeLanguage(window.ShuroqI18n.getSavedLanguage());
            console.log('English translations applied');
        }, 1000); // Increased delay to 1 second for debugging
    } else {
        console.error('changeLanguage function not found!');
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .plan');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});