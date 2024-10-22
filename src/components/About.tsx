import React from "react";

const About: React.FC = () => {
    return (
        <main className="about-container">
            <section className="about-section">
                <h1>About Me</h1>
                <p className="introduction">
                    Hi, I'm Vishnu, a passionate software developer with a knack for creating engaging web applications. 
                    With experience in both frontend and backend technologies, I love turning ideas into reality through code.
                </p>
            </section>

            <section className="skills-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>Java</li>
                    <li>SpringBoot</li>
                    <li>Nest.js</li>
                    <li>React with TS</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Python</li>
                </ul>
            </section>

            <section className="experience-section">
                <h2>Experience</h2>
                <div className="experience-item">
                    <h3>Software Developer A1</h3>
                    <h4>UST Global | 2024 - Present</h4>
                    <p>Worked on developing user-friendly web applications using React and Node.js</p>
                </div>
            </section>

            <section className="interests-section">
                <h2>Interests</h2>
                <p>
                    In my free time, I enjoy exploring new technologies, contributing to open-source projects, and learning about AI and machine learning.
                </p>
            </section>
        </main>
    );
};

export default About;
