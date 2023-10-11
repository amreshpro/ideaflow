import { useSelector } from "react-redux"
import { Hero } from "./Hero"
import { DarkColor, LightColor } from "../theme"
import { Hero2 } from "./Hero2"
import { Hero3 } from "./Hero3"


export const Home = () => {

    const isDarkModeEnable = useSelector((state)=>state.darkMode)


  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor}`}>
<Hero/>
<Hero2/>
<Hero3/>
    </div>
  )
}