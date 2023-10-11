import { useSelector } from "react-redux"
import { DarkButton, DarkColor, LightColor } from "../theme"



export const Hero = () => {


const isDarkModeEnable = useSelector((state)=>state.darkMode)

  return (
    <header className={`${isDarkModeEnable ? DarkColor : LightColor}  flex gap-2  md:flex-col-reverse justify-between h-screen px-2 py-4 w-full md:h-full  `} >
  
  {/* hero content */}
   <div className="content text-justify w-1/2   md:w-full flex flex-col  sm:gap-1 gap-6 items-center px-4 py-8">
<h1 className="text-5xl sm:text-3xl text-start font-semibold py-1">The Intelligence Amplification Company</h1>

<p>We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.</p>
   
   <div className="btns w-full flex justify-start gap-4  flex-wrap items-center mt-4  ">
   <a href="#" className={`${DarkButton}`}>Try Ideaflow Notes</a>
    <a href="#" className={`${DarkButton}`}>iOS</a>
    <a href="#" className={`${DarkButton}`}>Guide</a>
    <a href="#" className={`${DarkButton}`}>Twitter</a>
    <a href="#" className={`${DarkButton}`}>Newsletter</a>
   </div>

   </div>

   {/*  hero image */}
<div className=" w-auto">
  <img src="/face.png" alt="face" className="w-96 mr-8 "  />
</div>



    </header>
  )
}