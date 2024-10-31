import {useEffect} from 'react'
import Herosection from './Components/Herosection'
import { useGlobalContext } from './context'

const About = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <>
    <Herosection />
    </>
  )
}

export default About