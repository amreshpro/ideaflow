import { useSelector } from "react-redux"
import { DarkButton, DarkColor, LightColor } from "../theme"
import { Link } from "react-router-dom"


export const Hero3 = () => {

  const isDarkModeEnable = useSelector((state)=>state.darkMode)

  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor}  flex gap-2  md:flex-col-reverse justify-between  px-2 py-4 w-full h-screen md:h-full`}>

<div className="content text-justify w-1/2 h-full py-4 md:w-full flex flex-col sm:gap-1 gap-4  px-4">
  <h1 className="font-bold text-justify text-4xl">The auto-suggest layer for human thinking</h1>
  <p>Connect fragments of information from siloed sources faster than ever before.</p>
<p>
Your organization&apos;s collective memory at your fingertips.</p>
<Link to='' className={`${DarkButton}`}>Learn More</Link>
</div>

<div className="img p-2 rounded-full w-auto">
  <img src="/face3.jpeg" alt="face3" className="rounded-full w-96 h-96  sm:w-64 sm:h-64"  />
</div>

    </div>
  )
}