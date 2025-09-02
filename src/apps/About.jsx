import {useContext} from 'react'
import { TabContext } from './Tab';

const About = () => {
  const {setWhtTab,whtTab}= useContext(TabContext);
  return (
    <div className='app'>
      <img onClick={() => setWhtTab([...whtTab,"about"])} src="src\assets\person.svg" alt="" />
      About
    </div>
  )
}

export default About