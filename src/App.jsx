import React from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import PaintPage from './pages/PaintPage/PaintPage'
import NavBar from './Components/NavBar/NavBar.jsx'
import { Routes ,Route, useParams } from 'react-router-dom'
import './style.scss'




const App = () => {
  return (
    <>  
      <NavBar/>
      <Routes>
        <Route  path='/'  element={<HomePage/>}/>
        <Route   path=':name' element={<PaintPage info={useParams} />} />
      </Routes>
      

    </>
  )
}

export default App;
