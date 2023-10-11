import { useSelector } from "react-redux"
import { DarkColor, LightColor } from "../theme"



export const OurMission = () => {


const isDarkModeEnable = useSelector((state)=>state.darkMode)
  return (
    <div className={`${isDarkModeEnable ? DarkColor:LightColor} px-4 py-4 h-screen md:h-full flex flex-col items-center gap-4 pb-4 `}>
      <h1 className="font-bold text-3xl underline ">Our Mission</h1>
      <ul className="content list-disc list-inside flex  flex-col gap-12 pt-4 px-4 text-justify">

<li>How can we solve problems too big to fit in any individual&apos;s head?</li>
<li>Ray Kurzweil projects that, by 2045, humanity will be hooked up to a &quote;shared neocortex in the cloud&quot; by brain-computer interfaces. We will leave the brain-computer interfaces to Elon Musk, but we believe it’s possible to build that &quot;shared brain&quote; now, and that it might look different than many imagine.</li>
<li>We&apos;re starting by creating a notebook that augments the user&apos;s intelligence.</li>
    <li>We want to create a future where nobody feels alone with their ideas, where intellectual soulmates find each other,  where superconnectors are empowered. We see our software as critical to creating the frame for humans and machines to work together to solve the world&apos;s most important problems.</li>
   <li>With a raise of $10 million and the backing of prominent thought-leaders in the field, we are ready to take on these challenges. We are looking for fearlessly creative individuals who can fall in love with personal information management systems with us – which we see as integral to the destiny of the Web.</li> 
      </ul>
    </div>
  )
}