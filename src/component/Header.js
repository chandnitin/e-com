import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
            
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                    <Navbar.Brand href=""> <Nav.Link href="/">BHANGAR.COM</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Saller</Nav.Link>
                            <Nav.Link href="#pricing">Buyer</Nav.Link>
                            
                        </Nav>
                        <Nav>
                        <NavDropdown title="Nitt's S. Chand" id="collasible-nav-dropdown" className="mr-2">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.0">History</NavDropdown.Item>
                                <NavDropdown.Item href="/product/">Add Product</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Product Details</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="login">Logout</NavDropdown.Item>
                        </NavDropdown>
                            
                           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
