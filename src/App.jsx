import React from 'react'
import NavPage from './components/navComponents/NavPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Tarjeta from './pages/Tarjeta.jsx'
import { Route, Routes } from 'react-router-dom'
import Home2 from './pages/Home2.jsx'
import HomeOfrecimientos from './pages/HomeOfrecimientos.jsx'
import BoxGrande from './pages/BoxGrande.jsx'
import Testimonios from './pages/Testimonios.jsx'



function App() {
  let textoDummy= `Lorem Ipsum is simply dummy text 
  of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's 
  standard dummy text ever since the 
  1500s`

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <NavPage />
            <Home />
            <Home2 />
            
              <div class="cards">
                {Tarjeta('Compañerismo',textoDummy)}
                {Tarjeta('Ten claras tus metas',textoDummy)}
                {Tarjeta('Liderazgo de equipo',textoDummy)}
              </div>
            <HomeOfrecimientos />
            <div class="Box">
                {BoxGrande('Administrar tus tareas personales',' hola \n esto es un salto en linea')}
                {BoxGrande('Crea tu equipo personal',textoDummy)}
              </div>
              <Testimonios />
              <div class="cards">
                {Tarjeta('',textoDummy)}
                {Tarjeta('',textoDummy)}
                {Tarjeta('',textoDummy)}
              </div>
          </div>
          
        }/>
        <Route path='/about' element={
          <div>
            <NavPage />
            <About />
          </div>
        }/>
        <Route path='/contact' element={
          <div>
            <NavPage />
            <Contact />
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default App
