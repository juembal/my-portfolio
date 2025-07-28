function Hero() {
    const [displayedName, setDisplayedName] = React.useState('');
    const fullName = 'Jose Emmanuel "Joem" T. Balingit';
    
    React.useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        
        const typingInterval = setInterval(() => {
            if (!isDeleting) {
                // Typing forward
                if (currentIndex <= fullName.length) {
                    setDisplayedName(fullName.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    // Pause at full name, then start deleting
                    setTimeout(() => {
                        isDeleting = true;
                    }, 2000); // Pause for 2 seconds
                }
            } else {
                // Deleting backward
                if (currentIndex > 0) {
                    currentIndex--;
                    setDisplayedName(fullName.slice(0, currentIndex));
                } else {
                    // Reset to start typing again
                    isDeleting = false;
                    setTimeout(() => {
                        // Small pause before starting again
                    }, 500);
                }
            }
        }, isDeleting ? 50 : 100); // Faster deletion, slower typing
        
        return () => clearInterval(typingInterval);
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
                                    {displayedName}<span className="typing-cursor">|</span>
                                </div>
                                <div className="mk-hero-title" data-aos="zoom-in-right">
                                    BS Computer Science Graduate | Aspiring Software Developer & DevOps Engineer | Entry-Level QA Enthusiast
                                </div>
                                <div className="mk-hero-description" data-aos="zoom-in-left">
                                    I am a motivated and detail-oriented Computer Science graduate passionate about software development, 
                                    DevOps engineering, and quality assurance. My experience includes developing full-stack applications, 
                                    implementing automated testing frameworks, and managing deployment pipelines. I thrive in environments 
                                    where I can contribute to both building innovative solutions and ensuring their quality and reliability.
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
                                    <a href="mailto:joembalingit15@gmail.com">
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