import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Button,Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import {deleteFromCart} from '../slices/cartSlice'


export const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {cartItems} = useSelector(state=>state.cart)
    const handleClick=(item)=>{
      console.log(item)
      dispatch(deleteFromCart(item))
    }

  return (
    <Row>
      <Col md={8}>
      <h1 style={{marginBottom: '20px'}}>Shopping Cart</h1>
      {cartItems.length===0? (
        <Message>
          Your cart is empty <Link to='/'>Go Back</Link>
        </Message>
      ): (
        <ListGroup variant='flush'>
            {cartItems.map((item)=>(
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                  </Col >
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link> 
                  </Col>
                  <Col md={2}>${item.price}
                  </Col>
                  <Col md={2}>Quentity: {item.qty}
                  </Col>
                  <Button onClick={()=>handleClick(item._id)}>
                      Delete
                  </Button>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup varient='flush'>
            <ListGroup.Item>
              <h2>
               Subtotal ({cartItems.reduce((acc,item)=> acc+item.qty,0)})
               $({cartItems.reduce((acc,item)=>acc+item.price*item.qty,0).toFixed(2)})
              </h2>
            </ListGroup.Item>
            <ListGroup>
              {cartItems.length>0?(
                <Button type='button' className='btn-block'>
                  Proceed to checkout
                </Button>
              ):''}
              
            </ListGroup>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}
