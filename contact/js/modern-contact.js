// Modern Contact Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual implementation)
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, 2000);
    });
    
    // Form validation
    function validateForm(data) {
        let isValid = true;
        
        // Name validation
        if (data.name.trim().length < 2) {
            showFieldError('name', 'Please enter a valid name');
            isValid = false;
        } else {
            clearFieldError('name');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            clearFieldError('email');
        }
        
        // Subject validation
        if (data.subject.trim().length < 3) {
            showFieldError('subject', 'Please enter a subject');
            isValid = false;
        } else {
            clearFieldError('subject');
        }
        
        // Message validation
        if (data.message.trim().length < 10) {
            showFieldError('message', 'Please enter at least 10 characters');
            isValid = false;
        } else {
            clearFieldError('message');
        }
        
        return isValid;
    }
    
    // Show field error
    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        
        // Remove existing error
        clearFieldError(fieldId);
        
        // Add error styling
        field.style.borderColor = '#ef4444';
        
        // Create error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.85rem;
            margin-top: 5px;
            display: block;
        `;
        
        formGroup.appendChild(errorElement);
    }
    
    // Clear field error
    function clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        field.style.borderColor = '';
    }
    
    // Show success message
    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
        `;
        
        // Style the success message
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            text-align: center;
            min-width: 300px;
            animation: successPop 0.5s ease;
        `;
        
        // Add styles for success content
        const style = document.createElement('style');
        style.textContent = `
            @keyframes successPop {
                0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            
            .success-content i {
                font-size: 3rem;
                color: #10b981;
                margin-bottom: 1rem;
            }
            
            .success-content h3 {
                color: #1f2937;
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }
            
            .success-content p {
                color: #6b7280;
                margin-bottom: 0;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(successMessage);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            successMessage.style.animation = 'successPop 0.5s ease reverse';
            setTimeout(() => {
                successMessage.remove();
                style.remove();
            }, 500);
        }, 3000);
    }
    
    // Add input animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check initial state
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Social media link handlers
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media URLs here
            const socialUrls = {
                'linkedin': 'https://linkedin.com/company/shuroq',
                'github': 'https://github.com/shuroq',
                'twitter': 'https://twitter.com/shuroq'
            };
            
            const icon = this.querySelector('i');
            let platform = '';
            
            if (icon.classList.contains('fa-linkedin-in')) {
                platform = 'linkedin';
            } else if (icon.classList.contains('fa-github')) {
                platform = 'github';
            } else if (icon.classList.contains('fa-twitter')) {
                platform = 'twitter';
            }
            
            if (platform && socialUrls[platform]) {
                window.open(socialUrls[platform], '_blank');
            }
        });
    });
});

// Add floating label functionality
document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Check initial state
            if (input.value) {
                group.classList.add('has-value');
            }
            
            // Add event listeners
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                group.classList.remove('focused');
                if (input.value) {
                    group.classList.add('has-value');
                } else {
                    group.classList.remove('has-value');
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value) {
                    group.classList.add('has-value');
                } else {
                    group.classList.remove('has-value');
                }
            });
        }
    });
});
