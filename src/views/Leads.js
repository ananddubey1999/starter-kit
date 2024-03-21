    import React from 'react'
    import { Col, Form, Dropdown, Row, FormControl, Table } from 'react-bootstrap'
    import "./Offline.css"
    function Leads() {
      return (
        <div>
        <Row style={{ border: "1px solid gray", borderRadius: "10px 10px 0 0" }} className="bg-white">
     <div className="d-flex justify-content-start ">
       <h4 className="font-weight-bolder ml-2 p-1">
         Quotes Request List
       </h4>
     </div>
    </Row>
     {/* ------Row 2-------------  */}
    
     <Row style={{borderLeft: "1px solid gray", borderRight: "1px solid gray", borderRadius: "0px 0px 0px 0px", height: "auto" }} className="bg-white pt-2">
         <Col md="3">
          <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}}>
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control as="select" style={{ border: "2px solid gray" }} defaultValue="">
              <option disabled value="">Select the Vehicle Type</option>
              <option>Car</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md="3">
            <Form.Group controlId="input1" style={{fontWeight:"bold"}}>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="Number" placeholder="Enter Number"  style={{ border: "2px solid gray" }} />
            </Form.Group>
        </Col>
         <Col md="3">
          <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}}>
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" style={{ border: "2px solid gray" }} defaultValue="">
              <option disabled value="">Select Quotes Status</option>
              <option>Car</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Form.Control>
          </Form.Group>
        </Col>
    </Row>
    
     <Row style={{borderLeft: "1px solid gray", borderRight: "1px solid gray", borderBottom:"1px solid gray", borderRadius: "0px 0px 10px 10px", height: "auto" }} className="bg-white pt-4">
     <Col className='justify-content-center  align-items-end'>
     <Table responsive>
    <thead>
     <tr>
       <th scope='col' className='text-nowrap'>
         REQ #
       </th>
       <th scope='col' className='text-nowrap'>
         PARTNER
       </th>
       <th scope='col' className='text-nowrap'>
         EMAIL ID
       </th>
       <th scope='col' className='text-nowrap'>
         REG. NUMBER
       </th>
       <th scope='col' className='text-nowrap'>
         EXPIRY DATE
       </th>
       <th scope='col' className='text-nowrap'>
         STATUS
       </th>
       <th scope='col' className='text-nowrap'>
         PAYMENT STATUS
       </th>
       <th scope='col' className='text-nowrap'>
         CREATED ON
       </th>
       <th scope='col' className='text-nowrap'>
         LAST UPDATED
       </th>
     </tr>
    </thead>
    <tbody>
     <tr>
       <td className='text-nowrap'>1</td>
       <td className='text-nowrap'>IP1080 Sanjay</td>
       <td className='text-nowrap'>abc@gmail.com</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>Additional Doc Req.</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>2024-03-05</td>
       <td className='text-nowrap'>2024-04-09</td>
     </tr>
     <tr>
       <td className='text-nowrap'>2</td>
       <td className='text-nowrap'>IP1080 Sanjay</td>
       <td className='text-nowrap'>abc@gmail.com</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>Additional Doc Req.</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>2024-03-05</td>
       <td className='text-nowrap'>2024-04-09</td>
     </tr>
     <tr>
       <td>3</td>
       <td className='text-nowrap'>IP1080 Sanjay</td>
       <td className='text-nowrap'>abc@gmail.com</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>Additional Doc Req.</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>2024-03-05</td>
       <td className='text-nowrap'>2024-04-09</td>
     </tr>
     <tr>
       <td>4</td>
       <td className='text-nowrap'>IP1080 Sanjay</td>
       <td className='text-nowrap'>abc@gmail.com</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>Additional Doc Req.</td>
       <td className='text-nowrap'>N/A</td>
       <td className='text-nowrap'>2024-03-05</td>
       <td className='text-nowrap'>2024-04-09</td>
     </tr>
    </tbody>
    </Table>
    
    </Col>
         </Row>
    </div>
      )
    }
    
    export default Leads
    
