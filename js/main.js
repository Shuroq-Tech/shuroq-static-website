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
