import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ChaoticNavbar = () =>
  (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Chaotic Design
        </Navbar.Brand>
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://github.com/mkevanz">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/mkevanz/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="mailto:mkevanz@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )

export default ChaoticNavbar