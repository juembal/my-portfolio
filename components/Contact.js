function Contact() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [showEmail, setShowEmail] = React.useState(false);
    const [showPhone, setShowPhone] = React.useState(false);

    const openContactModal = () => {
        setIsModalOpen(true);
    };

    const closeContactModal = () => {
        setIsModalOpen(false);
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        setShowEmail(!showEmail);
    };

    const handlePhoneClick = (e) => {
        e.preventDefault();
        setShowPhone(!showPhone);
    };

    return (
        <>
            <section className="mk-contact" id="contact">
                <div className="mk-contact-zebra-img" style={{backgroundImage: 'url(/assets/arrow-sample.svg)'}}></div>
                <div className="mk-contact-box">
                    <div className="container flex-center flex-column">
                        <div className="mk-contact-box-width">
                            <div className="mk-contact-label">Get in touch</div>
                            <div className="mk-contact-title">Let's Work Together</div>
                            <div className="mk-contact-text">
                                I'm open for new opportunities - especially ambitious or large projects. However, my inbox is always open. 
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </div>
                            <div className="mk-contact-button">
                                <button className="mk-button" onClick={openContactModal}>
                                    Say Hello
                                </button>
                            </div>
                            <div className="mk-contact-git-section">
                                <div className="mk-contact-social-links">
                                    <a href="https://github.com/juembal" target="_blank" rel="noopener noreferrer" className="mk-social-link">
                                        <i className="fab fa-github"></i>
                                        <span>GitHub</span>
                                    </a>
                                    <a href="http://linkedin.com/in/joembalingit" target="_blank" rel="noopener noreferrer" className="mk-social-link">
                                        <i className="fab fa-linkedin"></i>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href="#" onClick={handleEmailClick} className="mk-social-link">
                                        <i className="fas fa-envelope"></i>
                                        <span>{showEmail ? 'joembalingit15@gmail.com' : 'Email'}</span>
                                    </a>
                                    <a href="#" onClick={handlePhoneClick} className="mk-social-link">
                                        <i className="fas fa-phone"></i>
                                        <span>{showPhone ? '+63 991 814 6061' : 'Phone'}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
}