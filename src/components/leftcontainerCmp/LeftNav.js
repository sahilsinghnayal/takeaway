
import React from "react";
import { Nav,Button } from "react-bootstrap";

function LeftNav({word,setword}) {
  
  const hhh=(e)=>{
  e.preventDefault();
  setword(e.target.textContent);
  // console.log(e.target.textContent);
  // console.log(word);
}

     
  return (
    <>
      <Nav className="justify-content-center" style={{background:"#581e1e"}}>
        <Nav.Item>
          <Button onClick={hhh} style={{color:"white", margin:"2px",    background: "rgb(32 128 189)"}} href="/">Mains</Button>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={hhh}style={{color:"white",margin:"2px", background:"rgb(32 128 189)"}}href="">Starter</Button>
        </Nav.Item>
        <Nav.Item>
          <Button  onClick={hhh}style={{color:"white",margin:"2px",  background:"rgb(32 128 189)"}}href="">Soup</Button>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={hhh} style={{color:"white",margin:"2px",  background:"rgb(32 128 189)"}}href="">Drinks</Button>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default LeftNav;
