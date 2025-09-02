import React, { useContext } from 'react'
import { TabContext } from './Tab'
const Projects = () => {
  const {whtTab,setWhtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={()=>{setWhtTab([...whtTab,'projects'])}} src="/folder.svg"/>
      Projects
    </div>
  )
}

export default Projects