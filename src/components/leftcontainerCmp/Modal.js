import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function MyVerticallyCenteredModal(props) {

  return (
    <>
   {/* { console.log(props)} */}
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3>
              
              </h3>
   
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>dh</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
      
    </>
  );
}

function Modals(value) {
  const [modalShow, setModalShow] = React.useState(false);
//  console.log(value)
  return (
    <>
      <Button style={{width:"79px",height:"37px",fontSize:"11px"}} variant="primary" onClick={() => setModalShow(true)}>
        Read More
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}

      />
    </>
  );
}

export default Modals;
