import React, { useContext } from 'react'
import { TabContext } from './Tab'
const Projects = () => {
  const {whtTab,setWhtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={()=>{setWhtTab([...whtTab,'projects'])}} src="src\assets\folder.svg" alt="" />
      Projects
    </div>
  )
}

export default Projects