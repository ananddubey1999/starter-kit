import React from 'react'
import { Row, Col, Dropdown, DropdownButton, Form, CustomInput } from "react-bootstrap"
import "./Offline.css"

function OfflinePolicy1() {
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
    <Row>
        <Col md="6">
        <Row className="mt-4 justify-content-center align-items-center">
            <Col md="6" className='justify-content-start align-items-center'>
          
            <DropdownButton title="Vehicle Type" id="dropdown-button" className="dropdown-button">
                <Dropdown.Item>Old Vehicle</Dropdown.Item>
                <Dropdown.Item>New Vehicle</Dropdown.Item>
            </DropdownButton>
            </Col>
            <Col md="4"> 
            <Form.Check
        type="radio"
        id="customRadio1"
        label="Custom Radio 1"
        name="customRadioGroup" // Make sure to set the same name for radio buttons in a group
        custom
      />
            </Col>
            
         </Row>
        </Col>
         <Col md="6">
               <Row className='mt-2'>
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
    <Row>
        <Col md="6">
        <Row className="mt-4 justify-content-center align-items-center">

            
         </Row>
        </Col>
         <Col md="6">
               <Row className='mt-2'>

               </Row>
         </Col>
    </Row>
    </div>
      </Row>  
    </div>
  )
}

export default OfflinePolicy1

