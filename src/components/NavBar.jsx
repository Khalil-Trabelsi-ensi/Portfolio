import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from 'react';



function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarScrollable, setIsNavbarScrollable] = useState(false); // Track if navbar is scrollable
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect scrolling inside navbar
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar) {
        const scrollTop = navbar.scrollTop;
        const scrollHeight = navbar.scrollHeight;
        const clientHeight = navbar.clientHeight;

        // Check if content exceeds navbar height
        if (scrollHeight > clientHeight) {
          setIsNavbarScrollable(true); // Indicate navbar is scrollable
        } else {
          setIsNavbarScrollable(false);
        }

        // Track scroll position for hiding scroll indicator
        setScrollPosition(scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} variant="dark" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='title'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className={isNavbarScrollable ? 'navbar-scrollable' : ''}>
          <Nav className="ms-auto my-2 my-lg-0 custom-nav-margin" style={{ maxHeight: '300px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/skills")}>Skills</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/projects")}>Projects</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {isNavbarScrollable && scrollPosition < 50 && (
          <div className="scroll-indicator">
            {/* You can add an icon or just use a simple circle */}
            <span>↓</span>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;