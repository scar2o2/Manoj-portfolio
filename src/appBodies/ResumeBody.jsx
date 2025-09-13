import html2pdf from "html2pdf.js";
import React, { useRef } from "react";
import { MapPin, Mail, Phone, Download, Building, Calendar } from "lucide-react";

const ResumeBody = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;

    // Clone node to exclude download button
    const clone = element.cloneNode(true);
    const downloadBtn = clone.querySelector(".download");
    if (downloadBtn) downloadBtn.remove();

    const opt = {
      margin: 0.5,
      filename: "Manoj_Cherukuri_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true, // allow cross-origin images
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(clone).save();
  };

  return (
    <div className="Resume" ref={resumeRef}>
      <div className="upperSec">
        <div className="pDetails">
          <div className="name">Manoj Cherukuri</div>
          <div className="role">Full-Stack Developer</div>
          <div className="contact">
            <div className="location">
              <MapPin size={20} />
              <p>Hyderabad,Telangana,India</p>
            </div>
            <div className="mail">
              <Mail size={20} />
              <p>manojcherukuri202@gmail.com</p>
            </div>
            <div className="phoneNo">
              <Phone size={20} />
              <p>8247604907</p>
            </div>
          </div>
        </div>

        {/* Button stays in UI but won't go to PDF */}
        <div className="download">
          <button className="download-btn" onClick={handleDownload}>
            <Download size={20} />
            Download
          </button>
        </div>
      </div>

      <div className="proSummary">
        <h2>Professional Summary</h2>
        <p>
          I am a <span>Computer Science Undergraduate</span> with Strong
          Programming Skills Seeking Internship Opportunity, eager to explore
          real-world industry experience through an internship. I'm looking for
          an opportunity where I can learn from experienced professionals,
          contribute meaningfully to projects, and grow both technically and
          personally. I'm currently improving my skills as a{" "}
          <span>MERN Stack Developer</span> and am looking for internship
          opportunities in that field.
        </p>
      </div>

      <div className="proExp">
        <h2>Professional Experience</h2>
        <div className="expCont">
          <div className="jobDet">
            <div className="mainDet">
              <div className="role">Azure Developer Associate(Intern)</div>
              <div className="comp">
                <Building size={20} />
                SITER Academy Norway
              </div>
            </div>
            <div className="duration">
              <Calendar size={20} />
              Jul,2025-Present
            </div>
          </div>
          <div className="jobDesc">
            <ul>
              <li>
                Design, build, and deploy cloud applications by leveraging Azure
                services such as Functions, App Service, Containers, and Logic
                Apps.
              </li>
              <li>
                Integrate and manage Azure resources including storage,
                databases, APIs, and identity solutions .
              </li>
              <li>
                Monitor, optimize, and secure applications to ensure scalability,
                performance, and compliance within Azure environments.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="allEduCont">
          <div className="eduCont">
            <div className="degree">
              Bachelor of Technology in Computer Science and Engineering
            </div>
            <div className="institution">
              <Building size={20} />
              Vel Tech Rangarajan Dr. Sagunthala R&D Institute, Avadi, Chennai,
              Tamilnadu
            </div>
            <div className="duration">
              <Calendar size={20} />
              2025-2027
            </div>
          </div>
          <div className="eduCont">
            <div className="degree">Intermediate in MPC</div>
            <div className="institution">
              <Building size={20} />
              Resonance Eduventures, KPHB, Hyderabad, Telangana
            </div>
            <div className="duration">
              <Calendar size={20} />
              2021-2023
            </div>
          </div>
          <div className="eduCont">
            <div className="degree">Schooling in Secondary Education</div>
            <div className="institution">
              <Building size={20} />
              Vikas The Concept School, Bachupally, Hyderabad, Telangana
            </div>
            <div className="duration">
              <Calendar size={20} />
              Graduated in 2021
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skill">MERN Stack Development</div>
        <div className="skill">MySQL</div>
        <div className="skill">TailwindCSS</div>
        <div className="skill">C,Python,Java</div>
        <div className="skill">Github</div>
        <div className="skill">Microsoft Azure Cloud Services</div>
        <div className="skill">Docker</div>
      </div>
    </div>
  );
};

export default ResumeBody;