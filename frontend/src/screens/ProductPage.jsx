import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import '../assets/styles/product.css'

export const ProductPage = () => {
    const {id: productId} = useParams();
    const product= products.find((p)=>p._id === productId);
    console.log(product)

    const handleClick=()=>{
        alert('iinn Stcok')
    }



  return (
  
      <div className="product-container">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <h1>{product.name}</h1>

        <p className="product-brand">
          Brand: <strong>{product.brand}</strong>
        </p>

        <p className="product-price">
          ₹{product.price}
        </p>

        <p className="product-rating">
          ⭐ {product.rating} ({product.numReviews} reviews)
        </p>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-stock">
          {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button disabled={product.countInStock===0}  className="add-cart-btn" onClick={handleClick}>
          Add To Cart
        </button>

      </div>

    </div>
  );

}
