
import { useEffect } from 'react'
import Herosection from './Components/Herosection'
import { useGlobalContext } from './context'



const Home = () => {

 

  const {updateHomePage} = useGlobalContext();

 useEffect(() => updateHomePage(), []);

  return (
    <>
    <Herosection />
    </>
  )
}

export default Home