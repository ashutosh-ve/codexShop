import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import { ProductDesPage } from './components/ProductDesPage'
import { ProductPage } from './screens/ProductPage'

export const RouterComponent = () => {
  return (
   <Routes>
              <Route path='/' element={<> <HomeScreen/> <ProductDesPage/> </>}/>
              <Route path='/product/:id' element={<ProductPage/>}/>
          </Routes>
  )
}
