function Hero() {
    const [displayedName, setDisplayedName] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(true);
    const fullName = 'Jose Emmanuel "Joem" T. Balingit';
    
    React.useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        
        const getTypingSpeed = () => {
            // Vary typing speed to make it more natural
            const baseSpeed = isDeleting ? 30 : 80;
            const variation = Math.random() * 40; // Add randomness
            return baseSpeed + variation;
        };
        
        const typeCharacter = () => {
            if (!isDeleting) {
                // Typing forward
                if (currentIndex < fullName.length) {
                    setDisplayedName(fullName.slice(0, currentIndex + 1));
                    currentIndex++;
                    setTimeout(typeCharacter, getTypingSpeed());
                } else {
                    // Finished typing, pause then start deleting
                    setIsTyping(false);
                    setTimeout(() => {
                        isDeleting = true;
                        setIsTyping(true);
                        typeCharacter();
                    }, 3000); // Pause for 3 seconds at full name
                }
            } else {
                // Deleting backward
                if (currentIndex > 0) {
                    currentIndex--;
                    setDisplayedName(fullName.slice(0, currentIndex));
                    setTimeout(typeCharacter, getTypingSpeed());
                } else {
                    // Finished deleting, pause then start typing again
                    isDeleting = false;
                    setIsTyping(true);
                    setTimeout(typeCharacter, 800); // Pause before restarting
                }
            }
        };
        
        // Start the typing effect
        setTimeout(typeCharacter, 500); // Initial delay
        
        return () => {
            // Cleanup handled by the recursive setTimeout approach
        };
    }, []);

    return (
        <section className="mk-hero" id="home">
            <div className="container">
                <div className="mk-hero-container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="mk-hero-content">
                                <div className="mk-hero-greeting" data-aos="fade-down-right">
                                    Hello, I'm
                                </div>
                                <div className="mk-hero-name" data-aos="zoom-in-right">
                                    <span className="name-container">
                                        {displayedName}<span className={`typing-cursor ${isTyping ? 'typing' : ''}`}>|</span>
                                    </span>
                                </div>
                                <div className="mk-hero-title" data-aos="zoom-in-right">
                                    BS Computer Science Graduate | Aspiring Software Developer & DevOps Engineer | Entry-Level QA Enthusiast
                                </div>
                                <div className="mk-hero-description" data-aos="zoom-in-left">
                                    I'm a Computer Science graduate passionate about building and optimizing software systems. I specialize in software development, DevOps engineering,
                                    and quality assurance. From developing full-stack web applications to implementing automated testing and managing cloud deployment pipelines, 
                                    I enjoy creating reliable and scalable solutions that make a real impact. Whether coding, testing, or deploying, I focus on writing clean code, 
                                    solving real-world problems, and continuously learning new technologies.

                                </div>
                                <div className="mk-hero-buttons" data-aos="zoom-in-left">
                                    <button className="mk-button-primary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Get In Touch</button>
                                    <button className="mk-button-secondary" onClick={() => document.getElementById('my-work').scrollIntoView({behavior: 'smooth'})}>View My Work</button>
                                </div>
                                <div className="mk-hero-social" data-aos="zoom-in-left">
                                    <a href="https://github.com/juembal" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="http://linkedin.com/in/joembalingit" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        // Try mailto first, fallback to copying email
                                        const email = 'joembalingit15@gmail.com';
                                        if (navigator.userAgent.includes('Mobile')) {
                                            // On mobile, mailto usually works better
                                            window.location.href = `mailto:${email}`;
                                        } else {
                                            // On desktop, copy to clipboard and show notification
                                            navigator.clipboard.writeText(email).then(() => {
                                                alert('Email address copied to clipboard: ' + email);
                                            }).catch(() => {
                                                // Fallback if clipboard doesn't work
                                                prompt('Copy this email address:', email);
                                            });
                                        }
                                    }} title="Get my email address">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="mk-hero-profile-wrapper" data-aos="zoom-in-right">
                                <div className="mk-hover-image mk-hero-profile-parent">
                                    <div className="mk-hover-image-border"></div>
                                    <div className="mk-hover-image-filter"></div>
                                    <img alt="Jose Emmanuel T. Balingit" className="mk-hover-profile mk-hero-profile" src="/assets/profile-dark.jpg" id="hero-profile-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}