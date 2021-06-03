import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import {AiOutlineLinkedin, AiOutlineGithub }from 'react-icons/ai'
import resume from '../Resume/Public_Resume.pdf'
import "./NavBar.css"


export default function NavBar () {

    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#2c3e50"}} fixed="top">
            <Navbar.Brand ><Link to="profile" spy={true} smooth={true}>
                <h5 className="brand-name" style={{color: "white", cursor: 'pointer'}}>Vitalii Kovtounenko</h5>
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="https://www.linkedin.com/in/vitalii-kovtounenko-6b0329177/" style={{color: "white"}}><AiOutlineLinkedin size={28}/></Nav.Link>
                <Nav.Link href="https://github.com/Vitko-SWE" style={{color: "white"}}><AiOutlineGithub size={28}/></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link to="aboutme" spy={true} smooth={true}>
                            <h5 className="brand-name" style={{color: "white", cursor: 'pointer'}}>About Me </h5>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="skills" spy={true} smooth={true}>
                            <h5 className="brand-name" style={{color: "white", cursor: 'pointer'}}>Skills </h5>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        
                        <Link to="projects" spy={true} smooth={true}>
                            <h5 className="brand-name" style={{color: "white", cursor: 'pointer'}}>Projects </h5>
                        </Link>  
                    </Nav.Link>
                    <Nav.Link href={resume}>
                        <h5 className="brand-name" style={{color: "white"}}>Resume </h5>
                    </Nav.Link>

                    <Nav.Link eventKey={2}>
                        <Link to="contact" spy={true} smooth={true}>
                            <h5 className="brand-name" style={{color: "white", cursor: 'pointer'}}>Contact</h5>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}