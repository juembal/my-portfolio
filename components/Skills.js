function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "fas fa-code",
            skills: ["Java", "JavaScript", "Python", "HTML5", "CSS3", "SQL"]
        },
        {
            title: "Frameworks & Libraries",
            icon: "fas fa-layer-group",
            skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "Bootstrap"]
        },
        {
            title: "DevOps & Tools",
            icon: "fas fa-tools",
            skills: ["Git", "Docker", "Jenkins", "AWS", "Linux", "Bash"]
        },
        {
            title: "Testing & QA",
            icon: "fas fa-bug",
            skills: ["Automated Testing", "Unit Testing", "Integration Testing", "Selenium", "Jest"]
        },
        {
            title: "Databases",
            icon: "fas fa-database",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            title: "Soft Skills",
            icon: "fas fa-users",
            skills: ["Problem Solving", "Team Collaboration", "Documentation", "Debugging", "Agile Methodology"]
        }
    ];

    return (
        <section className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>
                                <i className={category.icon}></i>
                                {category.title}
                            </h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}