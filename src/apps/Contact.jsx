import React, { useContext } from 'react'
import { TabContext } from './Tab'
const Contact = () => {
  const {whtTab,setWhtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={()=>{setWhtTab([...whtTab,'contact'])}} src="/mail.svg"/>
      Contact
    </div>
  )
}

export default Contact