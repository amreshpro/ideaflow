import { useSelector } from "react-redux"
import { DarkColor, LightColor } from "../theme"


export const Hero2 = () => {

  const isDarkModeEnable = useSelector((state)=>state.darkMode)

  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor}  flex gap-2  md:flex-col-reverse justify-between  px-2 py-4 w-full h-screen md:h-full`}>

<div className="content text-justify w-1/2 h-full py-4 md:w-full flex flex-col sm:gap-1 gap-4 items-center px-4">
  <h1 className="font-bold text-justify text-4xl">Connecting people with matching puzzle pieces</h1>
  <p>There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?</p>
<p>- Sir Tim Berners-Lee, Creator of the Web</p>
</div>

<div className="img p-2 rounded-full w-auto">
  <img src="/face2.jpeg" alt="face2" className="rounded-full w-96 h-96  sm:w-64 sm:h-64"  />
</div>

    </div>
  )
}