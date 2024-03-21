    import React from 'react'
    import { Col, Form, Dropdown, Row, FormControl, Table, Card, CardBody, Button } from 'react-bootstrap'
    import "./Offline.css"
    function MappingRequest() {
      return (
        <div>
        <Row style={{ border: "1px solid gray", borderRadius: "10px 10px 0 0" }} className="bg-white">
     <div className="d-flex justify-content-start ">
       <h4 className="font-weight-bolder ml-2 p-1">
         Raise Mapping Request
       </h4>
     </div>
    </Row>
     {/* ------Row 2---------  */}
    <Row>
    <Col md="9">
    <Row style={{borderLeft: "1px solid gray", borderRadius: "0px 0px 0px 0px", height: "auto" }} className="bg-white pt-2">
         <Col md="4">
          <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}} b>
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
         <Col md="4">
          <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}}>
            <Form.Label>Policy Type</Form.Label>
            <Form.Control as="select" style={{ border: "2px solid gray" }} defaultValue="">
              <option disabled value="">Select the Policy Type</option>
              <option>Car</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md="4">
            <Form.Group controlId="input1" style={{fontWeight:"bold"}}>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="Number" placeholder="Enter Number"  style={{ border: "2px solid gray" }} />
            </Form.Group>
        </Col>
    </Row>
    {/* --------------------- */}
     <Row style={{borderLeft: "1px solid gray", height: "auto" }} className="bg-white pt-2">
        <Col md="4">
            <Form.Group controlId="input1" style={{fontWeight:"bold"}}>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="Number" placeholder="Enter Number"  style={{ border: "2px solid gray" }} />
            </Form.Group>
        </Col>
        <Col md="4">
            <Form.Group controlId="input1" style={{fontWeight:"bold"}}>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="Number" placeholder="Enter Number"  style={{ border: "2px solid gray" }} />
            </Form.Group>
        </Col>
        <Col md="4">
            <Form.Group controlId="input1" style={{fontWeight:"bold"}}>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="Number" placeholder="Enter Number"  style={{ border: "2px solid gray" }} />
            </Form.Group>
        </Col>
    </Row>
    <Row style={{ borderLeft: "1px solid gray", height: "auto" }} className="bg-white pt-2">
    <Col md="6">
    <label htmlFor="remarks">Remarks:</label>
    <input type="text" id="remarks" placeholder="Enter remarks" style={{ width: "100%", padding: "10px" }} />
    </Col>
   </Row>

   <Row style={{ borderLeft: "1px solid gray", height: "250px" }} className="bg-white pt-2">
    <Col>
    <Row>
    <div className=" justify-content-start ">
           <h5 className="font-weight-bold ml-1">
            Upload Details
           </h5>
         </div>
    </Row>
    <Row>
    <Col md="4">
      <Form.Group controlId="fileUpload">
        <Form.Label>Policy Document</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Col>
    </Row>
    </Col>
   </Row>

    </Col>
       <Col md="3" style={{borderRight: "1px solid gray", height: "auto" }} className="bg-white pt-4" >
        <Card>
        <CardBody style={{ backgroundImage: "url('https://wallpapers.com/images/hd/pastel-background-malq0pewnryt6q5m.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "400px", width: "auto", borderRadius:"5px" }}>
         <h3>Save the hassle of mapping and get instant payout</h3>
        <Button color="primary" className=" justify-content-center ">Click Me</Button>
        <Row className='mt-2'>
       <Col md="6">
           <Card>
                <CardBody style={{ backgroundImage: "url('https://logos-world.net/wp-content/uploads/2020/11/Reliance-Logo.png')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
                </CardBody>
            </Card>
       </Col>
       <Col md="6">
           <Card>
           <CardBody style={{ backgroundImage: "url('https://www.uniindia.com/cms/gall_content/2023/3/2023_3$largeimg17_Mar_2023_175740793.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
            </CardBody>
            </Card>
       </Col>
        </Row>
        <Row className=''>
       <Col md="6">
           <Card>
                <CardBody style={{ backgroundImage: "url('https://www.india.com/wp-content/uploads/2021/09/HDFC.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
                </CardBody>
            </Card>
       </Col>
       <Col md="6">
           <Card>
           <CardBody style={{ backgroundImage: "url('https://www.policybachat.com/ArticlesImages/779.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
            </CardBody>
            </Card>
       </Col>
        </Row>
        <Row className=''>
       <Col md="6">
           <Card>
                <CardBody style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEVCk0OTWPhVlvD1I9mnzXvkIWCmes9ryD2Nk-XNER0nDV4BNvfO_rYDsSitjTBr7470&usqp=CAU')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
                </CardBody>
            </Card>
       </Col>
       <Col md="6">
           <Card>
           <CardBody style={{ backgroundImage: "url('https://dc-prod-blog.sfo2.digitaloceanspaces.com/uploads/2020/01/Asset-4.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", width: "auto" }}>
            </CardBody>
            </Card>
       </Col>
        </Row>
       </CardBody>

        </Card>
    </Col>
    </Row>
    </div>
      )
    }
    
    export default MappingRequest
    
