/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { advisors } from "../constant"
import { DarkCard, DarkColor, LightCard, LightColor } from "../theme"

export const Learders = () => {
const isDarkModeEnable = useSelector((state)=>state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor} pt-4 pb-4 `}>

<h1 className="text-center text-3xl font-semibold pt-4">Leadership</h1>

<div className="container flex flex-wrap gap-4 px-4 py-8 justify-center">
  {
    advisors?.map((leader)=>{
      return (<LeaderCard key={leader.id} {...leader}/>)
    })
  }
</div>

    </div>
  )
}





 const LeaderCard = ({name,profile,url}) => {
const isDarkModeEnable = useSelector((state)=>state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkCard:LightCard}  px-2 py-4 flex gap-2 items-center w-max justify-center sm:w-full sm:px-2 `}>
<div className="img w-full rounded-full ">
<img src={url} alt={name} className="object-fill w-32 h-32 sm:w-24 sm:h-24  " />

</div>
<div className="content  flex flex-col w-full gap-2 ">
  <h1 className="text-lg font-semibold">{name}</h1>
  <p className="text-sm ">{profile}</p>
</div>
    </div>
  )
}