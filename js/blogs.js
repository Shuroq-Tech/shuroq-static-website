/**
 * Blog Listing Page JavaScript
 * Handles navigation to individual blog posts
 */

// Open blog function - redirects to blog page with ID
function openBlog(blogId) {
    // Add smooth transition effect
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Redirect to blog page with ID parameter
    setTimeout(() => {
        window.location.href = `blog.html?id=${blogId}`;
    }, 300);
}

// Add hover effects to blog cards
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach((card, index) => {
        // Stagger animation for cards
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(59, 130, 246, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = card.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('blog-card')) {
        const blogId = e.target.getAttribute('onclick').match(/\d+/)[0];
        openBlog(parseInt(blogId));
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add page visibility handling for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.querySelectorAll('.blog-card').forEach(card => {
            card.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page is visible
        document.querySelectorAll('.blog-card').forEach(card => {
            card.style.animationPlayState = 'running';
        });
    }
});

// Add loading indicator for better UX
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Add error handling for navigation
window.addEventListener('error', function(e) {
    console.error('Navigation error:', e);
    document.body.style.opacity = '1';
});

// Performance optimization - lazy load blog cards
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.blog-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
