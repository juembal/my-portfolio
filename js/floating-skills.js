// Scroll-Responsive Skills Effect
function initScrollSkills() {
    const scrollSkills = document.querySelectorAll('.skill-scroll-item');
    
    if (scrollSkills.length === 0) return;
    
    let ticking = false;
    
    function updateSkillsPosition() {
        const scrollY = window.pageYOffset;
        const skillsContainer = document.getElementById('skills-container');
        
        if (!skillsContainer) return;
        
        const containerRect = skillsContainer.getBoundingClientRect();
        const containerTop = containerRect.top + scrollY;
        const windowHeight = window.innerHeight;
        
        // Check if skills section is in viewport
        if (containerRect.top < windowHeight && containerRect.bottom > 0) {
            scrollSkills.forEach((skill, index) => {
                const speed = parseFloat(skill.getAttribute('data-scroll-speed')) || 0.5;
                const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
                const columnDirection = index < 5 ? 1 : -1; // Different direction per column
                
                // Calculate scroll progress (0 to 1)
                const scrollProgress = Math.max(0, Math.min(1, 
                    (windowHeight - containerRect.top) / (windowHeight + containerRect.height)
                ));
                
                // Calculate parallax offset with wave effect
                const waveOffset = Math.sin(scrollProgress * Math.PI * 2 + index * 0.5) * 10;
                const parallaxOffset = (scrollY - containerTop) * speed * direction * 0.2;
                
                // Add subtle rotation and scale based on scroll
                const rotation = scrollProgress * 5 * columnDirection;
                const scale = 1 + (Math.sin(scrollProgress * Math.PI) * 0.05);
                
                // Apply transform with enhanced effects
                skill.style.transform = `
                    translateY(${parallaxOffset + waveOffset}px) 
                    rotate(${rotation}deg) 
                    scale(${scale})
                `;
                
                // Add opacity fade effect
                const opacity = Math.max(0.7, Math.min(1, scrollProgress * 2));
                skill.style.opacity = opacity;
            });
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateSkillsPosition);
            ticking = true;
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateSkillsPosition();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSkills);
} else {
    initScrollSkills();
}

// Re-initialize after a delay to ensure React components are rendered
setTimeout(initScrollSkills, 1000);