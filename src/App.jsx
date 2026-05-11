import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Auth } from './Auth'
import { Home } from './Home'
import Navbar from './Navbar'
import { Products } from './products'
import Footer from './Footer'
import { Cart } from './Cart'

const App = () => {
  const [search, setsearch] = useState('')

  return (
    <>
    {
      location.pathname !=='/'&& <Navbar search={search} setsearch={setsearch} />
    }
      

      <Routes>
        <Route path='/' element={<Auth />} />

        <Route path='/home' element={<Home search={search} />}>
          <Route path='cart' element={<Cart />} />
        </Route>

        <Route path='/category/:name' element={<Products search={search} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App