
const ContactBody = () => {
  const mailTo= `mailto:${import.meta.env.VITE_MAIL_ID}`
  return (
    <div className="Contact">
        <div className="upperSec">
            <h2>Get In Touch</h2>
            <p>
                I'd love to hear from you. Send me a message 
                and I'll respond as soon as possible.
            </p>
        </div>
        <div className="lowerSec">
            <div className="infoBox">
                <h2>Contact Information</h2>
                <div className="info">
                    <a href={mailTo}>
                      <img src="src\assets\mail.svg"/>
                      <div>
                        <h4>Email</h4>
                        <p>manojcherukuri202@gmail.com</p>
                      </div>
                    </a>
                </div>
                <div className="info">
                    <img src="src\assets\phone.svg"/>
                    <div>
                        <h4>Phone</h4>
                        <p>8247604907</p>
                    </div>
                </div>
                <div className="info">
                  <a href="https://www.linkedin.com/in/manoj-cherukuri-093615369/" target="_blank">
                    <img src="src\assets\linkedin.svg"/>
                    <div>
                        <h4>LinkedIn</h4>
                        <p>200+ Connections</p>
                    </div>
                  </a>
                </div>
                <div className="info">
                    <img src="src\assets\location.svg"/>
                    <div>
                        <h4>Location</h4>
                        <p>Hyderabad,Telangana,India</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactBody