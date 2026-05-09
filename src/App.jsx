import React from 'react'
import { Auth } from './Auth'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home'
import Navbar from './Navbar'
import { Category } from './Category'
import { Products } from './products'

const App = () => {
  return (
    <>
   
    <Routes>
          <Route path='/' element={<Auth/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/category:name' element={<Products/>} />
    </Routes>
    
    
    </>
    // <div>
    //   <Auth/>
    // </div>
  )
}

export default App