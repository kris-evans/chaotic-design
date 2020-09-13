import React from "react"
import Container from 'react-bootstrap/Container'
import ChaoticNavbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

const ChaoticLayout = ({children}) => 
  (
    <div className="chaotic">
      <ChaoticNavbar></ChaoticNavbar>
      <Container>
        { children }
      </Container>
    </div>
  )

export default ChaoticLayout