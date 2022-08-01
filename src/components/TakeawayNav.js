import React from "react";
import "./nav.css"
import { Navbar,Container } from 'react-bootstrap';
function TakeawayNav() {
   
  return (
    <>
       <Navbar style={{background:"rgb(0, 102, 167)"}}>
      <Container >
        <Navbar.Brand style={{color:"white"}} href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:"white"}}>
            Signed in as: <a style={{color:"white"}} href="#login">Sahil Singh Nayal</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default TakeawayNav;
