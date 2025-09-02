import React from 'react'

const ProjectsBody = () => {
  return (
    <div className='Projects'>
        <h1>My Projects</h1>
        <p>
            A collection of projects I've built,
            showcasing various technologies and
            problem-solving approaches.
        </p>
        <div className="project">
            <h2>Personalized Crop Recommender</h2>
            <p>
                I built a personalized crop recommender system using
                HTML, CSS, JavaScript, and Flask that suggests 
                suitable crops, detects crop diseases, provides modern
                farming techniques, and includes an NPK advisor for soil
                nutrient-based fertilizer recommendations.
            </p>
            <span>Technologies Used:</span>
            <div className='technologies'>
                <div className="tech">Python</div>
                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaScript</div>
            </div>
            <div className="code-buttons">
                <a href="https://github.com/scar2o2/reco" target='_blank'>
                    <button className='git-btn'>
                        <img src="src\assets\github.png"/>
                        Code
                    </button>
                </a>
                <a href="https://reco-hit6.onrender.com" target='_blank'>
                    
                    <button className='live-btn'>
                        <img src="src\assets\open.png"/>
                        Live Demo
                    </button>
                </a>
            </div>
        </div>
        <div className="project">
            <h2>OS-Themed Interactive Portfolio</h2>
            <p>
                I developed an OS-themed portfolio website that replicates
                a desktop-like environment with interactive windows for About
                Me, Projects, Resume, Contact Me, Terminal, and Gallery. Each
                section functions like a desktop application, allowing users 
                to open, minimize, and switch between windows, creating a dynamic
                and engaging experience.
            </p>
            <span>Technologies Used:</span>
            <div className='technologies'>
                <div className="tech">React</div>
                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">JavaScript</div>
            </div>
            <div className="code-buttons">
                <a href="">
                    <button className='git-btn'>
                        <img src="src\assets\github.png"/>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectsBody