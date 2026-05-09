import React, { useState } from 'react'
import { Auth } from './Auth'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home'
import Navbar from './Navbar'
import { Category } from './Category'
import { Products } from './products'
import Footer from './Footer'

const App = () => {
  const [search, setsearch]= useState('')
  return (
    <>
    <Navbar search={search} setsearch={setsearch} />
    <Routes>
          <Route path='/' element={<Auth/>} />
          <Route path='/home' element={<Home search={search} />}/>
          <Route path='/category/:name' element={<Products/>} />
    </Routes>
    <Footer/>
    
    
    </>
    // <div>
    //   <Auth/>
    // </div>
  )
}

export default App