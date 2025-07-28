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

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));