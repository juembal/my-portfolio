function Experience() {
    const [activeTab, setActiveTab] = React.useState(0);
    
    const experiences = [
        {
            title: "Educational Background",
            company: "Education",
            duration: "Academic Journey | 2015 - 2024",
            description: "Comprehensive educational background spanning from elementary excellence to university graduation in Computer Science, consistently demonstrating academic excellence and leadership throughout my academic career.",
            responsibilities: [
                "<strong>BS Computer Science</strong> - <em>Batangas State University</em> <span class='highlight-date'>(2021-2024)</span>: Graduated with GWA 1.5369, Dean's Lister for 3 consecutive semesters",
                "<strong>Senior High School</strong> - <em>Batangas State University ARASOF</em> <span class='highlight-date'>(2021)</span>: Graduated with Honors under STEM Curriculum",
                "<strong>Elementary</strong> - <em>Grand Prairie Learning School Inc.</em> <span class='highlight-date'>(2015)</span>: Valedictorian, Best in Computer Award",
                "Completed comprehensive CS curriculum: Programming, Data Structures, Algorithms, Mobile Computing, Networking",
                "Mastered advanced topics: Human-Computer Interaction, Data Analysis, Automata Theory, Numerical Methods"
            ]
        },
        {
            title: "Associate Cloud/DevOps Engineer (Intern)",
            company: "Internship Experience",
            duration: "Rakso CT | June-July 2024",
            description: "Gained hands-on experience in cloud technologies and DevOps practices at a creative technology company. Collaborated with development teams to build and deploy scalable web applications using modern technology stacks.",
            responsibilities: [
                "Collaborated with a team to develop and deploy a billing system using the <strong>PERN stack</strong> (PostgreSQL, Express.js, React, Node.js)",
                "Deployed the system using <strong>Microsoft Azure</strong> and Ubuntu virtual machines, handling configuration and server setup",
                "Assisted in backend integration and frontend development using <strong>React and Express.js</strong>",
                "Participated in basic <strong>DevOps tasks</strong> such as environment setup, testing, and version control using Git",
                "Documented deployment processes and contributed to bug fixing and feature enhancements"
            ]
        }
    ];
    
    return (
        <section className="mk-works" id="experience">
            <div className="container h100per-min100vh d-flex justify-content-center">
                <div data-aos="fade-down-left" className="mk-works-container">
                    <div data-aos="zoom-in-right" className="mk-views-title-container">
                        <div className="mk-views-title-text">Education & Internship Experience</div>
                        <div className="mk-views-title-line-container">
                            <div className="mk-views-title-line"></div>
                        </div>
                    </div>
                    <div className="mk-works-tab">
                        <div className="mk-works-left-border">
                            <div 
                                style={{transform: `translateY(${activeTab * 60}px)`, height: '60px'}} 
                                className="mk-works-left-border-selection"
                            ></div>
                        </div>
                        <div className="mk-works-tab-left">
                            {experiences.map((exp, index) => (
                                <div key={index} data-aos="zoom-in-left">
                                    <div 
                                        className={`mk-works-tab-left-button ${activeTab === index ? 'mk-works-tab-left-button-selected' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {exp.company}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mk-works-tab-right">
                            <div data-aos="zoom-in-right" className="mk-works-tab-right-title">
                                {experiences[activeTab].title}
                            </div>
                            <div data-aos="zoom-in-right" className="mk-works-tab-right-duration">
                                {experiences[activeTab].duration}
                            </div>
                            <div data-aos="zoom-in-right" className="mk-works-tab-right-description">
                                {experiences[activeTab].description}
                            </div>
                            <div data-aos="zoom-in-right" className="mk-works-tab-right-list">
                                {experiences[activeTab].responsibilities.map((responsibility, index) => (
                                    <div key={index} className="mk-works-tab-right-list-item" dangerouslySetInnerHTML={{__html: responsibility}}>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}