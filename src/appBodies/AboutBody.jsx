import React from 'react'

const AboutBody = () => {
  return (
    <div className='About'>
        <div className="upperSection">
            <img src="/pfp.jpg"/>
            <h2>Manoj Cherukuri</h2>
            <p>Full Stack Developer & Cloud Enthusiast</p>
        </div>
        <div className="aboutMe">
            <h2>About Me</h2>
            I'm a Computer Science and Engineering undergraduate with
             a passion for building end-to-end digital solutions. As a
              full-stack developer, I enjoy working across the stack—from
               crafting responsive, user-friendly frontends to designing 
               scalable backends and APIs. <br /> <br />
            I'm also a cloud computing enthusiast, exploring platforms like 
            Azure and AWS to deploy, manage, and scale applications in real-world
             environments. <br /> <br />
            My interests lie in modern web technologies and 
            cloud-native architectures, and Im constantly learning to bridge 
            the gap between development and deployment.
        </div>
        <div className="technicalSkills">
            <h2>Technical Skills</h2>
            <div className='tSkill'>React</div>
            <div className='tSkill'>HTML5</div>
            <div className='tSkill'>CSS3</div>
            <div className='tSkill'>JavaScript</div>
            <div className='tSkill'>Node.js</div>
            <div className='tSkill'>MySQL</div>
            <div className='tSkill'>Docker</div>
            <div className='tSkill'>Git</div>
            <div className='tSkill'>Microsoft Azure Cloud</div>
            <div className='tSkill'>C</div>
            <div className='tSkill'>Python</div>
            <div className="tSkill">Java</div>
        </div>
        <div className="interests">
            <h2>Interests and Hobbies</h2>
            <div className="interest">
                <img src="/code.png"/>
                Full-Stack Development
            </div>
            <div className="interest">
                <img src="/cloud.png"/>
                Cloud
            </div>
            <div className="interest">
                <img src="/book.png"/>
                Novels
            </div>
            <div className="interest">
                <img src="/game.png"/>
                Gaming
            </div>
        </div>
        <div className="languages">
            <h2>Languages</h2>
            <div className="lang">English</div>
            <div className="lang">Telugu</div>
            <div className="lang">Hindi</div>
        </div>
    </div>
  )
}

export default AboutBody