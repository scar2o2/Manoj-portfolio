import React from 'react'

const ResumeBody = () => {
  return (
    <div className='Resume'>
        <div className='upperSec'>
            <div className='pDetails'>
                <div className='name'>Manoj Cherukuri</div>
                <div className='role'>Full-Stack Developer</div>
                <div className='contact'>
                    <div className='location'>
                        <img src="/location1.svg" width='20px'/>
                        <p>Hyderabad,Telangana,India</p>
                    </div>
                    <div className='mail'>
                        <img src="/mail1.svg" width='20px'/>
                        <p>manojcherukuri202@gmail.com</p>
                    </div>
                    <div className='phoneNo'>
                        <img src="/phone1.svg" width='20px'/>
                        <p>8247604907</p>
                    </div>
                </div>
            </div>
            <div className='download'>
                <button className='download-btn'>
                    <img src="/download.png"/>
                    Download
                </button>
            </div>
        </div>
        
        <div className='proSummary'>
            <h2>Professional Summary</h2>
            <p>
                I am a <span>Computer Science Undergraduate</span> with Strong
                 Programming Skills Seeking Internship Opportunity,
                  eager to explore real-world industry experience 
                  through an internship. I'm looking for an 
                  opportunity where I can learn from experienced 
                  professionals, contribute meaningfully to projects, 
                  and grow both technically and personally.
                  I'm currently improving my skills as a <span>MERN Stack 
                  Developer</span> and am looking for internship opportunities
                  in that field. 
            </p>
        </div>
        <div className='proExp'>
            <h2>Professional Experience</h2>
            <div className='expCont'>
                <div className='jobDet'>
                    <div className='mainDet'>
                        <div className='role'>
                            Azure Developer Associate(Intern)
                        </div>
                        <div className='comp'>
                            <img src="/building.svg" />
                            SITER Academy Norway
                        </div>
                    </div>
                    <div className='duration'>
                        <img src="/calendar.svg"/>
                        Jul,2025-Present
                    </div>
                </div>
                <div className='jobDesc'>
                    <ul>
                        <li>
                            Design, build, and deploy cloud applications by leveraging Azure services such as Functions, App Service, Containers, and Logic Apps.
                        </li>
                        <li>
                            Integrate and manage Azure resources including storage, databases, APIs, and identity solutions .
                        </li>
                        <li>
                            Monitor, optimize, and secure applications to ensure scalability, performance, and compliance within Azure environments.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='education'>
            <h2>Education</h2>
            <div className='allEduCont'>
                <div className='eduCont'>
                    <div className='degree'>
                        Bachelor of Technology in Computer Science and Engineering
                    </div>
                    <div className='institution'>
                        <img src="/building.svg"/>
                        Vel Tech Rangarajan Dr. Sagunthala R&D Institute, Avadi, Chennai, Tamilnadu
                    </div>
                    <div className='duration'>
                        <img src="/calendar.svg"/>
                        2025-2027
                    </div>
                </div>
                <div className='eduCont'>
                    <div className='degree'>
                        Intermediate in MPC
                    </div>
                    <div className='institution'>
                        <img src="/building.svg"/>
                        Resonance Eduventures, KPHB, Hyderabad, Telangana
                    </div>
                    <div className='duration'>
                        <img src="/calendar.svg"/>
                        2021-2023
                    </div>
                </div>
                <div className='eduCont'>
                    <div className='degree'>
                        Schooling in Secondary Education
                    </div>
                    <div className='institution'>
                        <img src="/building.svg"/>
                        Vikas The Concept School, Bachupally, Hyderabad, Telangana
                    </div>
                    <div className='duration'>
                        <img src="/calendar.svg"/>
                        Graduated in 2021
                    </div>
                </div>
            </div>
        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <div className='skill'>MERN Stack Development</div>
            <div className='skill'>MySQL</div>
            <div className='skill'>C,Python,Java</div>
            <div className='skill'>Github</div>
            <div className='skill'>Microsoft Azure Cloud Services</div>
            <div className="skill">Docker</div>
            <div className='skill'>Render,Vercel</div>
        </div>
    </div>
  )
}

export default ResumeBody