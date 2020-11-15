import React from 'react'
import { Container, Navbar, Form, Button } from 'react-bootstrap'

export const NavBar: React.FC = (props) => {
    const uid = localStorage.getItem('id')


    return (
        <Container fluid className="p-0">
            <Navbar bg="dark" className = "justify-content-between">
                <Navbar.Brand style={{color: "white"}}>Reference Manager</Navbar.Brand>
                <Form inline>
                    <h6 className="px-3" style={{color: "white"}}>{uid}</h6>
                    <Button type="submit" onClick={()=>localStorage.removeItem('id')}>Log Out</Button>
                </Form>
            </Navbar>
        </Container>
    )
}