import React, { Fragment } from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function Footer() {
    return (
        
        <Fragment>
            
            <Navbar expand="lg" variant="light" bg="dark" fixed="bottom" className="text-center">
                <Container>
                    <Navbar.Brand href="#" className="text-weight" text='white'>@copy right</Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    )
}
