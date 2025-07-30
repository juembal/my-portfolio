function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {currentYear} Jose Emmanuel T. Balingit. All rights reserved.</p>
                <div className="footer-social">
                    <a href="https://github.com/joembalingit" target="_blank" rel="noopener noreferrer">
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
        </footer>
    );
}