import { useEffect, useState } from 'react';
import './App.css';
import Contact from './apps/Contact';
import Projects from './apps/Projects';
import Resume from './apps/Resume';
import About from './apps/About';
import Tab from './apps/Tab';
import Terminal from './apps/Terminal';

const App = () => {
  const [time, setTime] = useState('');
  const [presentDate, setPresentDate] = useState('');
  const [showPc, setShowPc] = useState(false); 

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const pDate = now.toDateString().slice(4);
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
      setPresentDate(pDate);
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="screen">
      <Tab>
        <div className="desktop">
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Terminal />
        </div>
      </Tab>
      <div className="footer">
        <div className="taskbar">
          <div
            className="taskIcon"
            onClick={() => setShowPc(!showPc)} 
          >
            <img className="taskIconImg" src="/pc.svg" alt="pc icon" />
          </div>
          {showPc && ( 
            <div className="pc-popup">Manoj's PC</div>
          )}
        </div>
        <div id="clock">
          <div className="time">
            <img src="/clock.svg" alt="clock icon" />
            {time}
          </div>
          <div>{presentDate}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
