import { TabContext } from "../apps/Tab"
import { useContext, useEffect, useState } from "react";
import ProjectsBody from "../appBodies/ProjectsBody";

const ProjectsTab = ({tabName}) => {
  const { setWhtTab, whtTab ,zOrders, bringToFront} = useContext(TabContext);
  const [maxi,setMaxi] = useState(true);
  const [offset, setOffset] = useState({ top: 100, left: 100 });

  useEffect(() => {
    const windows = document.querySelectorAll('.window');
    const count = windows.length; 
    setOffset({
      top: 100 - count * 15,
      left: 100 + count * 30
    });
  }, []); 

  useEffect(() => {
    const taskbar = document.querySelector('.taskbar');
    if (!taskbar) return;

    if (!taskbar.querySelector('#ProjectsTask')) {
      const minTask = document.createElement('div');
      minTask.className = "miniTask";
      minTask.id = "ProjectsTask"; 

      const img = document.createElement('img');
      img.src = "/folder.svg";
      img.width = 12;

      minTask.appendChild(img);
      minTask.appendChild(document.createTextNode("Projects"));

      minTask.addEventListener("click", () => {
        const win = document.querySelector('.projectsWindow');
        if (win) {
          win.style.display =
            win.style.display === "none" ? "inline-block" : "none";
        }
      });

      taskbar.appendChild(minTask);
    }
  }, []);

  const minimizeTab = () => {
    const win = document.querySelector('.projectsWindow');
    if (win) win.style.display = 'none';
    setMaxi(true);
  };

  const closeTab = () => {
    const ProjectsTask = document.querySelector('#ProjectsTask');
    if (ProjectsTask) ProjectsTask.remove();
    setWhtTab(prev => prev.filter(item => item !== "projects"));
  };

  const maxiView = () => {
    const win = document.querySelector('.projectsWindow');
    win.style.width = '90%';
    win.style.height = '90%';
    win.style.top = '0';
    win.style.left = '0';
    setMaxi(false);
  };

  const miniView = () => {
    const win = document.querySelector('.projectsWindow');
    win.style.width = '770px';
    win.style.height = '500px';
    win.style.top = `${offset.top}px`;
    win.style.left = `${offset.left}px`;
    setMaxi(true);
  };
  const handleDrag = (e) => {
    e.preventDefault(); 

    const win = e.currentTarget.parentNode;         
    const desktop = document.querySelector('.desktop');
    if (!win || !desktop) return;

    const desktopRect = desktop.getBoundingClientRect();
    const winRect = win.getBoundingClientRect();

    const shiftX = e.clientX - winRect.left;  
    const shiftY = e.clientY - winRect.top;

    function moveAt(clientX, clientY) {
      let newLeft = clientX - desktopRect.left - shiftX;
      let newTop  = clientY - desktopRect.top  - shiftY;

      newLeft = Math.max(0, Math.min(newLeft, desktopRect.width  - winRect.width));
      newTop  = Math.max(0, Math.min(newTop,  desktopRect.height - winRect.height));

      win.style.left = newLeft + 'px';
      win.style.top  = newTop  + 'px';
    }

    const onMouseMove = (ev) => moveAt(ev.clientX, ev.clientY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  };



  return (
    <div className="projectsWindow window" onMouseDown={() => bringToFront(tabName)} style={{ top: `${offset.top}px`, left: `${offset.left}px` , zIndex: zOrders[tabName] || 1}}>
      <div className="header" onMouseDown={handleDrag} style={{ cursor: "grab" }}>
        <p className="tabTitle">
          <img src="/folder.svg" />
          Projects
        </p>
        <div className="tabTools">
          <img src="/minimize.svg" onClick={minimizeTab} />
          {maxi ? (
            <img src="/maxiView.svg" onClick={maxiView} />
          ) : (
            <img src="/miniView.svg" onClick={miniView} />
          )}
          <img src="/cross.svg" onClick={closeTab} />
        </div>
      </div>
      <ProjectsBody/>
    </div>
  );
};

export default ProjectsTab
