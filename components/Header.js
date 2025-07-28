function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const [showCVOptions, setShowCVOptions] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
        
        // Change hero profile image based on theme with smooth transition
        const heroImage = document.getElementById('hero-profile-image');
        if (heroImage) {
            // Fade out
            heroImage.style.opacity = '0';
            
            setTimeout(() => {
                if (!isDarkMode) {
                    // Switching to light mode
                    heroImage.src = '/assets/profile-light.jpg';
                } else {
                    // Switching to dark mode
                    heroImage.src = '/assets/profile-dark.jpg';
                }
                
                // Fade in
                heroImage.style.opacity = '1';
            }, 250);
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 100;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const handleCVAction = (action) => {
        const cvPath = '/assets/Jose_Emmanuel_Balingit_CV.pdf'; // Update with your actual CV file path
        
        if (action === 'view') {
            // Open CV in new tab for viewing
            window.open(cvPath, '_blank');
        } else if (action === 'download') {
            // Create download link
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Jose_Emmanuel_Balingit_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        setShowCVOptions(false);
    };

    // Close CV dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.cv-button-container')) {
                setShowCVOptions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <header className="mk-header">
            <div className="mk-header-container">
                <div>
                    <div className="mk-logo-text">
                        <span className="mk-logo-initials">JETB</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <div className="cv-button-container">
                            <button className="mk-button-md mx-3 mx-lg-5" onClick={() => setShowCVOptions(!showCVOptions)}>
                                Curriculum Vitae | CV
                                <i className={`fas fa-chevron-down cv-arrow ${showCVOptions ? 'active' : ''}`}></i>
                            </button>
                            {showCVOptions && (
                                <div className="cv-dropdown">
                                    <button className="cv-option" onClick={() => handleCVAction('view')}>
                                        <i className="fas fa-eye"></i>
                                        View CV
                                    </button>
                                    <button className="cv-option" onClick={() => handleCVAction('download')}>
                                        <i className="fas fa-download"></i>
                                        Download CV
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mk-theme-toggle">
                        <button className="mk-theme-btn" onClick={toggleTheme} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>
                    </div>
                    <div className="mk-header-menu">
                        <svg 
                            className={`mk-hamburger-icon ${isMenuOpen ? 'active' : ''}`} 
                            width="30" 
                            height="30" 
                            viewBox="0 0 512 512"
                            onClick={toggleMenu}
                        >
                            <g>
                                <path d="M36.57,73.14h182.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57 C16.39,146.29,0,129.89,0,109.71C0,89.5,16.39,73.14,36.57,73.14z M292.57,365.71h182.86c20.21,0,36.57,16.36,36.57,36.57 c0,20.18-16.36,36.57-36.57,36.57H292.57c-20.18,0-36.57-16.39-36.57-36.57C256,382.07,272.39,365.71,292.57,365.71z M36.57,219.43h438.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57 C16.39,292.57,0,276.18,0,256C0,235.79,16.39,219.43,36.57,219.43z"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Navigation Menu */}
            <div className={`mk-nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mk-nav-menu-content">
                    <button className="mk-nav-item" onClick={() => scrollToSection('home')}>
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </button>
                    <button className="mk-nav-item" onClick={() => scrollToSection('about')}>
                        <i className="fas fa-user"></i>
                        <span>About</span>
                    </button>
                    <button className="mk-nav-item" onClick={() => scrollToSection('experience')}>
                        <i className="fas fa-briefcase"></i>
                        <span>Experience</span>
                    </button>
                    <button className="mk-nav-item" onClick={() => scrollToSection('my-work')}>
                        <i className="fas fa-code"></i>
                        <span>Projects</span>
                    </button>
                    <button className="mk-nav-item" onClick={() => scrollToSection('contact')}>
                        <i className="fas fa-envelope"></i>
                        <span>Contact</span>
                    </button>
                </div>
            </div>
            
            {/* Menu Overlay */}
            {isMenuOpen && <div className="mk-nav-overlay" onClick={toggleMenu}></div>}
        </header>
    );
}