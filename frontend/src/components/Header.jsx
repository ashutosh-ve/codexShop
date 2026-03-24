import React from 'react'
import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
export const Header = () => {

    const {cartItems} = useSelector((state)=> state.cart)

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                
                <Navbar.Brand as={Link} to="/">
                <img src={logo} alt='codexShop'/>
                    codexShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navvbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/cart'>
                            {
                                cartItems.length > 0 && (
                                    <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                        {cartItems.reduce((a,c)=>a+c.qty, 0)}

                                    </Badge>
                                )
                            }
                        <FaShoppingCart/> Cart
                        
                        </Nav.Link>
                        <Nav.Link as={Link} to='/'><FaUser/> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
