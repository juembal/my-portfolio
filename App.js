const { useState, useEffect } = React;

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`app ${isLoaded ? 'loaded' : ''}`}>
            {/* Cursor Animation */}
            <div className="mk-cursor-line-box">
                <div className="mk-cursor-line-right-1"></div>
                <div className="mk-cursor-line-bottom-1"></div>
            </div>
            
            {/* Top Scroll Progress */}
            <div className="mk-top-scrolled">
                <div className="mk-top-scrolled-highlight" style={{transform: 'translateX(-100%)'}}></div>
            </div>
            
            <Header />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

// Render the app with error boundary
function ErrorBoundary({ children }) {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const handleError = (event) => {
            console.error('Error caught by boundary:', event.error);
            setHasError(true);
            setError(event.error);
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        return (
            <div style={{
                padding: '50px',
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                color: '#333'
            }}>
                <h1>Something went wrong</h1>
                <p>Error: {error?.message || 'Unknown error'}</p>
                <button 
                    onClick={() => window.location.reload()}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reload Page
                </button>
            </div>
        );
    }

    return children;
}

try {
    ReactDOM.render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>, 
        document.getElementById('root')
    );
    console.log('✓ Portfolio app rendered successfully');
} catch (error) {
    console.error('✗ Failed to render app:', error);
    document.getElementById('root').innerHTML = `
        <div style="padding: 50px; text-align: center; font-family: Arial;">
            <h1>Failed to Load Portfolio</h1>
            <p>Error: ${error.message}</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Reload Page
            </button>
        </div>
    `;
}