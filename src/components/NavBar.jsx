import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from 'react';



function NavBar() {
  const[scrolled,setScrolled]=useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
        console.log("Current scroll position:", window.scrollY); // Log scroll position
        if (window.scrollY > 50) {
            setScrolled(true);
            console.log("Scrolled down"); // Log when scrolled down
        } else {
            setScrolled(false);
            console.log("Scrolled back up"); // Log when scrolled back up
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup
    };
}, []);

  return (
    <Navbar className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}  variant="dark" fixed="top" expand="lg" >
      <Container fluid>
      
        <Navbar.Brand href="#" className='title'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0 custom-nav-margin" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/resume" >Resume</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" >
              <NavDropdown.Item onClick={()=>navigate("/skills")}>Skills</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate("projects")}> Projects</NavDropdown.Item>
           
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;