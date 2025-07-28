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
                    <a href="mailto:joembalingit15@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <p style={{marginTop: '20px', fontSize: '0.9rem', opacity: '0.8'}}>
                    Built with React.js | Designed for modern web experiences
                </p>
            </div>
        </footer>
    );
}