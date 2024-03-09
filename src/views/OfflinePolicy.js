import React from 'react'
import { Row, Col, Dropdown, DropdownButton, Form, Button  } from "react-bootstrap"
import "./Offline.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTruck, faBicycle, faBus, faShuttleVan} from '@fortawesome/free-solid-svg-icons'


function OfflinePolicy() {
  return (
    <div >
      <Row style={{border:"1px solid gray", borderRadius: "10px 10px 0 0"}} className="bg-white">
         <div className="d-flex justify-content-start ">
           <h4 className="font-weight-bold ml-2">
        Quote Request Form
           </h4>
         </div>
      </Row> 
      {/* ---------Contenet Start from here--------- */}
      <Row style={{border:"1px solid gray", borderRadius: "0px 0px 10px 10px", height:"auto"}} className="bg-white">

    {/* ---------------First Row Start from here-------------------- */}
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-3">
            VEHICLE DETAILS
           </h5>
         </div>
        </Row>
        {/* ---------details---------- */}
    <div className="container-content2">
    <Row className="d-flex justify-content-start mb-1">
        <Col md="6">
        <Row className="mt-4 justify-content-center align-items-center">
            {/* <Col md="6" className='justify-content-start align-items-center'>
          
            <DropdownButton title="Vehicle Type" id="dropdown-button" className="dropdown-button">
                <Dropdown.Item>Old Vehicle</Dropdown.Item>
                <Dropdown.Item>New Vehicle</Dropdown.Item>
            </DropdownButton>
            </Col> */}
            <Col md="4">
            <Form.Check
               type="radio"
               id="customRadio1"
               label="Old Vehicle"
               name="customRadioGroup" // Make sure to set the same name for radio buttons in a group
               custom
              />
            </Col>
            <Col md="4">
            <Form.Check
               type="radio"
               id="customRadio1"
               label="New Vehicle"
               name="customRadioGroup" // Make sure to set the same name for radio buttons in a group
               custom
              />
            </Col>
            
         </Row>
        </Col>
         <Col md="6">
               <Row className='mt-1'>
               <Col md="5"  className='justify-content-start align-items-start'>
               <Form.Group controlId="input1">
               <Form.Label>Registration Date</Form.Label>
               <Form.Control type="Date" placeholder="2024-03-11" />
               </Form.Group>
               </Col>
               <Col md="5">
               <Form.Group controlId="input1">
               <Form.Label>Registration Number</Form.Label>
               <Form.Control type="Number" placeholder="Enter Number" />
               </Form.Group>
               </Col>
               </Row>
         </Col>
    </Row>
         </div>
    {/* ---------------Second Row Start from here-------------------- */}
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-3">
            VEHICLE TYPE
           </h5>
         </div>
        </Row>
        {/* ---------details---------- */}
    <div className="container-content2">
    <Row className="d-flex justify-content-center ">
        <Col md="2" className="text-center ml-2 mt-2 mb-2" style={{border:"1px solid black", backgroundColor:"white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease'}}>
           <FontAwesomeIcon icon={faCar} size="3x" />
           <p className="mt-2">Private car</p>
        </Col>
        <Col md="2" className="text-center ml-2 mt-2 mb-2" style={{border:"1px solid black", backgroundColor:"white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease'}}>
           <FontAwesomeIcon icon={faTruck} size="3x" />
           <p className="mt-2">Commercial Vehicle</p>
        </Col>
        <Col md="2" className="text-center ml-2 mt-2 mb-2" style={{border:"1px solid black", backgroundColor:"white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease'}}>
           <FontAwesomeIcon icon={faBicycle} size="3x" />
           <p className="mt-2">Three Wheeler</p>
        </Col>
        <Col md="2" className="text-center ml-2 mt-2 mb-2" style={{border:"1px solid black", backgroundColor:"white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease'}}>
           <FontAwesomeIcon icon={faShuttleVan} size="3x" />
           <p className="mt-2">School Bus</p>
        </Col>
        <Col md="2" className="text-center ml-2 mt-2 mb-2" style={{border:"1px solid black", backgroundColor:"white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease'}}>
           <FontAwesomeIcon icon={faBus} size="3x" />
           <p className="mt-2">PCV</p>
        </Col>
    </Row>
    </div>
    {/* ---------End----------- */}
    {/* ---------------Third Row Start from here-------------------- */}

        {/* ---------details---------- */}
       
        <Col md="6">
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-2">
            POLICY TYPE
           </h5>
         </div>
        </Row>
        <div className="container-content3">
        <Row className="d-flex justify-content-start mb-1">
        <Col md="3" className="text-center ml-2">
             <button className="Addbutton">Comprehensive</button>
        </Col>
        <Col md="3" className="text-center ml-1">
             <button className="Addbutton">TP Only</button>
        </Col>
        <Col md="3" className="text-center ml-1">
             <button className="Addbutton">SAOD</button>
        </Col>
        </Row>    

       </div>
        </Col>

        <Col md="6">
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-2">
            HAVE PREVIOUS YEAR POLICY DETAILS?
           </h5>
         </div>
        </Row>
        <div className="container-content3">
        <Row className="d-flex justify-content-center mb-1">
        <Col md="4" className="text-center ">
             <button className="Addbutton">Yes</button>
        </Col>
        <Col md="4" className="text-center ml-1">
             <button className="Addbutton">No</button>
        </Col>
        </Row>  
       </div>
        </Col>
    
    {/* ---------End----------- */}
        {/* ---------------Fourth Row Start from here-------------------- */}
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-3">
            QUOTE REQUEST FROM INSURER(S)
           </h5>
         </div>
        </Row>
        {/* ---------details---------- */}
    <div className="container-content2">
    <Row className="d-flex justify-content-start mb-1">
      <Col md="12">
        <Row className="mt-1 mb-2 justify-content-center align-items-center">
        <Col md="3" className="text-center ml-2">
           <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-button">
              Vehicle Type
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Form.Check type="checkbox" label="Universal" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
               <Form.Check type="checkbox" label="Shriram general" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
              </Dropdown.Menu>
            </Dropdown>
         </Col>
        <Col md="3" className="text-center ml-2 ">
           <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-button">
              Vehicle Type
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Form.Check type="checkbox" label="Universal" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
               <Form.Check type="checkbox" label="Shriram general" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
              </Dropdown.Menu>
            </Dropdown>
         </Col>
        <Col md="3" className="text-center ml-2">
           <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-button">
              Vehicle Type
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Form.Check type="checkbox" label="Universal" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
               <Form.Check type="checkbox" label="Shriram general" />
               <Form.Check type="checkbox" label="HDFC ERGO" />
              </Dropdown.Menu>
            </Dropdown>
         </Col>
         </Row>
        </Col>
      <Col md="12">
        <Row className="mt-1 justify-content-center align-items-center">
        <Col md="3"  className='justify-content-start align-items-start'>
               <Form.Group controlId="input1">
               <Form.Label>Customer Email</Form.Label>
               <Form.Control type="Email" placeholder="xyz@gmail.com" />
               </Form.Group>
               </Col>
        <Col md="3"  className='justify-content-start align-items-start'>
               <Form.Group controlId="input1">
               <Form.Label>Mobile Number</Form.Label>
               <Form.Control type="Number" placeholder="+91" />
               </Form.Group>
               </Col>
        <Col md="3"  className='justify-content-start align-items-start'>
               <Form.Group controlId="input1">
               <Form.Label>Date of Birth</Form.Label>
               <Form.Control type="Date" placeholder="2024-03-11" />
               </Form.Group>
               </Col>
        <Col md="3"  className='justify-content-start align-items-start'>
               <Form.Group controlId="input1">
               <Form.Label>PAN Number</Form.Label>
               <Form.Control type="Text" placeholder="GMKPD15" />
               </Form.Group>
               </Col>

         </Row>
        </Col>
    </Row>
         </div>
         {/* ----------Fourth Row End--------- */}
        {/* ---------------Fifth Row Start from here-------------------- */}
        <Row>
          <div className="d-flex justify-content-start ">
           <h5 className="font-weight-bold ml-3">
            Upload Details
           </h5>
         </div>
        </Row>
        {/* ---------details---------- */}
    <div className="container-content2">
    <Row className="d-flex justify-content-start mb-1">
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>RC*</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>PRIVIOUS YEAR POLICY</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
    </Row>

    <Row className="d-flex justify-content-start mb-1">
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>PANCARD/FORM</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>PASSPORT</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
    </Row>

    <Row className="d-flex justify-content-start mb-1">
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>RC*</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
      <Col md="6">
        <Row>
        <Col md="6">
      <Form.Group controlId="fileUpload">
        <Form.Label>PANCARD</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    <Col md="4" className='mt-0' style={{fontSize:"12px"}}>
      <div style={{width:"60px"}} >
      <button className="Addbutton">Add more files</button>
      </div>
    </Col>
        </Row>
      </Col>
    </Row>
         </div>
         {/* ----------Fourth Row End--------- */}
                   {/* ---------------fourth Row Start from here-------------------- */}
        {/* ---------details---------- */}
        <div className="bg-dark text-light w-100 p-3">
        <Row>
          <Col md={4}>
            {/* Your footer content goes here */}
            <p>Footer Section 1</p>
            <p>Footer content</p>
            <p>More footer content</p>
          </Col>
          <Col md={4}>
            {/* Additional footer content */}
            <p>Footer Section 2</p>
            <p>Additional content</p>
            <p>More content</p>
          </Col>
          <Col md={4}>
            {/* Additional footer content */}
            <p>Footer Section 3</p>
            <p>More content</p>
            <p>Even more content</p>
          </Col>
        </Row>
      </div>
        {/* -----------End-------- */}
      </Row>  
    </div>
  )
}

export default OfflinePolicy
