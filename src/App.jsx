import React from 'react'
import { Auth } from './Auth'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
   
    <Routes>
          <Route path='/' element={<Auth/>} />
          <Route path='/home' element={<Home/>}/>
    </Routes>
    
    
    </>
    // <div>
    //   <Auth/>
    // </div>
  )
}

export default App