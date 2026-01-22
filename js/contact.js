// Clear form function
function clearForm() {
    document.getElementById("contactForm").reset();
    console.log('Form cleared');
}
//mobilemenu
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
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();




// Submit form function
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;

    // Validate form
    if (!name || !email || !phone || !subject) {
        alert('Please fill out all fields');
        return;
    }

    // Create form data object
    const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        timestamp: new Date().toISOString()
    };

    // Log the data (replace with your S3 endpoint)
    

    //TODO: Send to S3 endpoint
    // Replace 'YOUR_S3_ENDPOINT_HERE' with your actual S3 endpoint
    
    fetch('https://jsonplaceholder.typicode.com/posts'

, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        clearForm();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message');
    });
  

    // For now, just show success message

    clearForm();
}