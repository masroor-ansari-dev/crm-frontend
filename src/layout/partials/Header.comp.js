import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/logo.png";

export const Header = () => {
    return(
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
            <img src={logo} alt="logo" width="50px"></img>
            </Navbar.Brand>
            <Navbar.Toggle>
                
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}