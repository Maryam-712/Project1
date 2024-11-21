
import { useEffect } from 'react'
import Herosection from './Components/Herosection'
import { useGlobalContext } from './context'
import Service from './Service'
import Contact from './Contact'


const Home = () => {

 

  const {updateHomePage} = useGlobalContext();

 useEffect(() => updateHomePage(), []);

  return (
    <>
    <Herosection />
    <Service/>
    <Contact/>
   
    
    </>
  )
}

export default Home