/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import {  leaderships } from "../constant"
import { DarkCard, DarkColor, LightCard, LightColor } from "../theme"



export const Leaders = () => {
const isDarkModeEnable = useSelector((state)=>state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor} pt-4 pb-4 `}>

<h1 className="text-center text-3xl font-semibold pt-4">Leadership</h1>

<div className="container flex flex-wrap gap-4 px-4 py-8 justify-center">
  {
    leaderships?.map((leader)=>{
      return (<LeaderCard key={leader.id} {...leader}/>)
    })
  }
</div>

    </div>
  )
}





 const LeaderCard = ({name,profile,url,past}) => {
const isDarkModeEnable = useSelector((state)=>state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkCard:LightCard}  px-2 py-4 sm:w-full w-72 sm:px-2 `}>

<div className=" flex gap-2 items-center w-72 justify-center  ">
<div className="img w-full rounded-full ">
<img src={url} alt={name} className="object-fill w-32 h-32 sm:w-24 sm:h-24  " />
</div>
<div className="content  flex flex-col w-full gap-2 px-1 ">
  <h1 className="text-lg font-semibold px-0.5">{name}</h1>
  <p className="text-sm  ">{profile}</p>
</div>
</div>
<p className="text-sm py-2">{past}</p>
    </div>
  )
}