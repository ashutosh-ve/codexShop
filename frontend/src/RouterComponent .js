import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import { ProductDesPage } from './components/ProductDesPage'
import { ProductPage } from './screens/ProductPage'
import { CartScreen } from './screens/CartScreen'

export const RouterComponent = () => {
  return (
   <Routes>
              <Route path='/' element={<> <HomeScreen/>  </>}/>
              <Route path='/product/:id' element={<ProductPage/>}/>
              <Route path='/cart' element={<CartScreen/>}/>
  </Routes>
  )
}



