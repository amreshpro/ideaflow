import { Link } from "react-router-dom"
import { contacts, latestUpdates, rabbithole } from "../constant"
import { useSelector } from "react-redux"
import { DarkColor, LightColor } from "../theme"

export const Footer = () => {

  const isDarkModeEnable = useSelector((state)=>state.darkMode)


  return (
    <footer className={`${isDarkModeEnable ? DarkColor:LightColor}`}>
   <h1 className="text-center pt-4"> <Link to="/" className="text-3xl font-mono  font-semibold hover:underline">Ideaflow</Link></h1>
    <div className="footer-container flex gap-4 flex-wrap justify-evenly md:justify-start mt-4 px-4 py-4">
      <div className="rabbithole flex flex-col gap-2">
<h1 className="font-semibold text-lg ">#rabbithole</h1>

{
rabbithole?.map((item)=>{
  return   <Link to={item.url} key={item.id} className="hover:underline">{item.title} </Link>
})
}

      </div>
      <div className="latest-updates flex flex-col gap-2">

      <h1 className="font-semibold text-lg">Latest updates</h1>

{
latestUpdates?.map((item)=>{
  return   <Link to={item.url} key={item.id} className="hover:underline">{item.title} </Link>
})
}

      </div>
      <div className="contact flex flex-col gap-2">

      <h1 className="font-semibold text-lg">Contact</h1>

{
contacts?.map((item)=>{
  return   <Link to={item.url} key={item.id} className="hover:underline">{item.title} </Link>
})
}


      </div>
    </div>
    <h1 className="text-center px-2 py-4">Copyright © 2020 Ideaflow, Inc. All rights reserved.</h1>
    </footer>
  )
}