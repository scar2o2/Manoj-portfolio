import React, { useContext } from 'react'
import { TabContext } from "./Tab";


const Resume = () => {
  const {setWhtTab,whtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={() => setWhtTab([...whtTab,"resume"])} src="src\assets\file.svg"  />
      Resume
    </div>
  )
}

export default Resume