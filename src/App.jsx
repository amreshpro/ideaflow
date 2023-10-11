import { Route, Routes } from "react-router-dom"
import {Navbar, Footer, Career, About, Home, PrivacyPolicy } from "./components"



const App = () => {
  return (
    <div>

<Navbar/>

<main>

  <Routes>
<Route exact path='/' element={<Home/>} />

<Route path='/about' element={<About/>} />
<Route path='/career' element={<Career/>} />
<Route path='/privacy' element={<PrivacyPolicy/>} />

  </Routes>
</main>

<Footer/>


    </div>
  )
}
export default App