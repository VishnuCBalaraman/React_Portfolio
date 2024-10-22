import React from "react";


const Home: React.FC = () => {
    return (
        <main className="home-container">
            <section className="hero-section">
                <h1 className="welcome-text">Welcome to My Portfolio!</h1>
                <h2 className="name-text">I am Vishnu</h2>
                <p className="description-text">
                    A passionate developer specializing in creating dynamic and beautiful web applications.
                </p>
                <a href="#projects" className="cta-button">View My Work</a>
            </section>

            <section className="about-section">
                <h2>About Me</h2>
                <p>
                    I'm a software engineer with a focus on full-stack development. I love turning ideas into reality using code.
                </p>
            </section>

            <section className="projects-section" id="projects">
                <h2>My Projects</h2>
                <div className="project-grid">
                   
                    <div className="project-item">
                        <h3>Money Management Application</h3>
                        <p>This application is used to track the daily expenses.</p>
                    </div>
                    <div className="project-item">
                        <h3>LMS Platform</h3>
                        <p>This application is used to provide students a better platform for learning.</p>
                    </div>
                    <div className="project-item">
                        <h3>AI Recruitment Platform</h3>
                        <p>This application provides a platform for the company to recruit the job seekers through assessment.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
