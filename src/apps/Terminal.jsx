import React, { useContext } from 'react'
import { TabContext } from "./Tab";


const Terminal = () => {
  const {setWhtTab,whtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={() => setWhtTab([...whtTab,"terminal"])} src="/terminal.svg" />
      Terminal
    </div>
  )
}

export default Terminal