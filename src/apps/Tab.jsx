import { createContext, useState } from 'react';
import ResumeTab from '../tabs/ResumeTab';
import AboutTab from '../tabs/AboutTab';
import ContactTab from '../tabs/ContactTab';
import ProjectsTab from '../tabs/ProjectsTab';
import TerminalTab from '../tabs/TerminalTab';


export const TabContext = createContext();

const Tab = ({ children }) => {
  const [whtTab, setWhtTab] = useState([]);
  const [highestZ, setHighestZ] = useState(1);
  const [zOrders, setZOrders] = useState({});

  const bringToFront = (tabName) => {
    setHighestZ(prev => {
      setZOrders(prevZ => ({ ...prevZ, [tabName]: prev + 1 }));
      return prev + 1;
    });
  };

  return (
    <TabContext.Provider value={{ whtTab, setWhtTab, zOrders, bringToFront }}>
      {children}
      <div>
        {whtTab.includes('resume') && <ResumeTab tabName="resume" />}
        {whtTab.includes('about') && <AboutTab tabName="about" />}
        {whtTab.includes('contact') && <ContactTab tabName="contact" />}
        {whtTab.includes('projects') && <ProjectsTab tabName="projects" />}
        {whtTab.includes('terminal') && <TerminalTab tabName="terminal" />}
      </div>
    </TabContext.Provider>
  );
};

export default Tab;
