import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


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
              {props.data.Product.Description}
              </h3>
   
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.data.Product.vMenuDescription}
            <p>Allergy: {props.data.Product.vAllergens}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
      
    </>
  );
}

function Modals({data,modalShow,setModalShow}) {
  
 console.log("sahil",data);
  return (
    <>
     

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </>
  );
}

export default Modals;
