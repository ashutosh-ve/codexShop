import React from 'react'
import {products} from '../products'
import { Col, Row } from 'react-bootstrap'
import { Products } from '../components/Products'
import { Routes, Route } from 'react-router-dom'
export const  HomeScreen = () => {
    const result = products.map((product)=>{
       return ( <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            < Products product={product}/>
        </Col>
       )
    }) 
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {result}
        </Row>

    </>
  )
}
