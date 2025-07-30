function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isVerifyingEmail, setIsVerifyingEmail] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');
    const [abortController, setAbortController] = React.useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 🔍 Verify email existence via Mailboxlayer
    const verifyEmail = async (email, signal) => {
        const apiKey = '049fd7236915c031056d9c43135ad70b';
        const response = await fetch(`https://apilayer.net/api/check?access_key=${apiKey}&email=${email}&smtp=1&format=1`, {
            signal
        });
        const data = await response.json();
        return data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        // Create abort controller for email verification
        const controller = new AbortController();
        setAbortController(controller);

        try {
            // Step 1: Show email verification status
            setIsVerifyingEmail(true);
            setSubmitStatus('verifying');
            
            const emailCheck = await verifyEmail(formData.email, controller.signal);
            
            setIsVerifyingEmail(false);
            setAbortController(null);

            if (!emailCheck.smtp_check) {
                setSubmitStatus('email-error');
                setIsSubmitting(false);
                return;
            }

            // Step 2: Show sending status and proceed with sending the form
            setSubmitStatus('sending');
            
            const formData2 = new FormData();
            formData2.append('access_key', '80d81eb1-5ccc-41db-a714-d8111f87707e');
            formData2.append('name', formData.name);
            formData2.append('email', formData.email);
            formData2.append('subject', `Portfolio Contact: ${formData.subject}`);
            formData2.append('message', `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from portfolio contact form`);
            formData2.append('from_name', 'Portfolio Contact Form');
            formData2.append('replyto', formData.email);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData2
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                setTimeout(() => {
                    onClose();
                    setSubmitStatus('');
                }, 3000);
            } else {
                throw new Error('Failed to send message');
            }

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Email verification was cancelled');
                setSubmitStatus('');
            } else {
                console.error('Error sending email:', error);
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
            setIsVerifyingEmail(false);
            setAbortController(null);
        }
    };

    const handleCancel = () => {
        // If email verification is in progress, abort it
        if (abortController) {
            abortController.abort();
        }
        onClose();
    };

    const getSubmitButtonContent = () => {
        if (isVerifyingEmail) {
            return (
                <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Verifying Email...
                </>
            );
        }
        
        if (isSubmitting && submitStatus === 'sending') {
            return (
                <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending Message...
                </>
            );
        }
        
        return (
            <>
                <i className="fas fa-paper-plane"></i>
                Send Message
            </>
        );
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                <div className="contact-modal-header">
                    <h2>Get In Touch</h2>
                    <button className="contact-modal-close" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="contact-modal-content">
                    <p>I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.</p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project or just say hello!"
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={handleCancel}
                                disabled={isSubmitting && !isVerifyingEmail}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={isSubmitting || isVerifyingEmail}
                            >
                                {getSubmitButtonContent()}
                            </button>
                        </div>

                        {/* Email verification failed */}
                        {submitStatus === 'email-error' && (
                            <div className="status-message error">
                                <i className="fas fa-exclamation-circle"></i>
                                The email address does not appear to exist. Please check and try again.
                            </div>
                        )}

                        {/* Success status */}
                        {submitStatus === 'success' && (
                            <div className="status-message success">
                                <i className="fas fa-check-circle"></i>
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {/* General error status */}
                        {submitStatus === 'error' && (
                            <div className="status-message error">
                                <i className="fas fa-exclamation-circle"></i>
                                Failed to send message. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}