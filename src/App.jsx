import { Route, Routes } from "react-router-dom"
import {Hero,Navbar, Footer, Career, About } from "./components"



const App = () => {
  return (
    <div>

<Navbar/>

<main>

  <Routes>
<Route to='/' element={<Hero/>} />
<Route to='/about' element={<About/>} />
<Route to='/career' element={<Career/>} />
  </Routes>
</main>

<Footer/>


    </div>
  )
}
export default App