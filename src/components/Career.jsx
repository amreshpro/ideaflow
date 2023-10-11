import { useSelector } from "react-redux";
import { DarkColor, LightColor } from "../theme";
import { OurMission } from "./OurMission";
import { Advisors } from "./Advisors";
import { Learders } from "./Leaders";


export const Career = () => {


const isDarkModeEnable = useSelector((state)=>state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor} `}>

<OurMission/>
<Advisors/>
<Learders/>
    </div>
  )
}