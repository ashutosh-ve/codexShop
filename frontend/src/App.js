import React from 'react'
import { Header } from './components/Header'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { HomeScreen } from './screens/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import { ProductPage } from './screens/ProductPage'
import { ProductDesPage } from './components/ProductDesPage'
import { RouterComponent } from './RouterComponent '

export const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <RouterComponent/>
        </Container>
      </main>
      <Footer /> 
    </>         
  ) 
}
 