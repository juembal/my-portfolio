function Projects() {
    const projects = [
        {
            title: "Batangas State University Interactive Navigation Map",
            description: "A desktop 3D navigation application for Batangas State University – Alangilan campus. As QA member, I conducted comprehensive testing including functional, usability, and compatibility testing to ensure optimal performance. I documented test cases, collaborated with developers to resolve defects, and validated navigation accuracy within the 3D environment. Additionally, I contributed to the project by modeling several 3D buildings for the campus map, combining both technical testing expertise and 3D design skills.",
            technologies: ["Quality Assurance", "3D Modeling", "Desktop Application Testing", "Bug Testing", "3D Navigation"],
            image: "/assets/navmap.jpg",
            alignment: "right"
        },
        {
            title: "Rakso CT - Billing Tracker Cloud Deployment",
            description: "During my internship at Rakso CTY, I served as Associate DevOps/Cloud Engineer for a PERN stack billing tracker application. I supported deployment and cloud infrastructure setup using Microsoft Azure services, configured Ubuntu-based virtual machines, and managed deployment pipelines. My responsibilities included Linux server configurations, environment setup, and ensuring smooth operation of backend and frontend services on the cloud platform.",
            technologies: ["Microsoft Azure", "Ubuntu Server", "PERN Stack", "DevOps", "Linux Administration"],
            image: "/assets/rakso.jpg",
            alignment: "left"
        }
    ];

    return (
        <section className="mk-projects" id="my-work">
            <div className="container">
                <div className="mk-projects-container">
                    <div data-aos="zoom-in-right" className="mk-views-title-container">
                        <div className="mk-views-title-text">Things I've Worked on, Some of Them</div>
                        <div className="mk-views-title-line-container">
                            <div className="mk-views-title-line"></div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {projects.map((project, index) => (
                            <div key={index} className="mk-projects-single">
                                <div className="row">
                                    {project.alignment === "right" && (
                                        <div className="col-6 d-none d-lg-block">
                                            <div className="mk-window-screen mk-projects-image-container mk-projects-image-container-right">
                                                <div>
                                                    <div className="mk-hover-image">
                                                        <div className="mk-hover-image-filter"></div>
                                                        <img alt={project.image} className="mk-hover-profile mk-image" src={project.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className={`col-12 col-lg-6 d-flex align-items-center ${project.alignment === "right" ? "order-first" : ""}`}>
                                        <div data-aos={project.alignment === "right" ? "fade-down-right" : "fade-down-left"} 
                                             className={`mk-projects-text-side ${project.alignment === "right" ? "mk-projects-text-side-right" : "mk-projects-text-side-left"}`}>
                                            <div data-aos={project.alignment === "right" ? "zoom-in-right" : "zoom-in-left"} 
                                                 className="mk-projects-text-featured">Featured Project</div>
                                            <div data-aos={project.alignment === "right" ? "zoom-in-right" : "zoom-in-left"} 
                                                 className="mk-projects-text-title">{project.title}</div>
                                            <div data-aos={project.alignment === "right" ? "zoom-in-right" : "zoom-in-left"} 
                                                 className="mk-projects-text-description text-left">
                                                {project.description}
                                            </div>
                                            <div data-aos={project.alignment === "right" ? "zoom-in-right" : "zoom-in-left"} 
                                                 className="mk-projects-text-tecs">
                                                {project.technologies.join(" | ")}
                                            </div>
                                        </div>
                                    </div>
                                    {project.alignment === "left" && (
                                        <div className="col-6 d-none d-lg-block">
                                            <div className="mk-window-screen mk-projects-image-container mk-projects-image-container-left">
                                                <div>
                                                    <div className="mk-hover-image">
                                                        <div className="mk-hover-image-filter"></div>
                                                        <img alt={project.image} className="mk-hover-profile mk-image" src={project.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}