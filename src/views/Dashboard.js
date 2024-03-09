import React, { useState } from 'react'
import { Row, Col, Dropdown, DropdownButton, Form, Button, CardBody } from "react-bootstrap"
import "./Offline.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTruck, faMotorcycle, faHeartbeat, faPlane, faQuestionCircle, faFileAlt, faDollarSign, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'reactstrap'

function Dashboard() {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }
  const videoId = 'https://youtu.be/DG48l81SWjQ?si=NUtfmK09K-K-URj6'
  return (
    <div >
      <Row style={{ border: "1px solid gray", borderRadius: "10px 10px 0 0" }} className="bg-white">
        <div className="d-flex justify-content-start ">
          <h4 className="font-weight-bold ml-2">
            Quote Request Form
          </h4>
        </div>
      </Row>
      {/* ---------Contenet Start from here--------- */}
      <Row style={{ border: "1px solid gray", borderRadius: "0px 0px 10px 10px", height: "auto" }} className="bg-white">

        {/* ---------------First Row Start from here-------------------- */}
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
              <Row className=" justify-content-start align-items-start">
                <Col md="3" className="text-center ml-2 mt-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faCar} size="2x" />
                  <p className="mt-2">Car</p>
                </Col>
                <Col md="3" className="text-center ml-2 mt-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faTruck} size="2x" />
                  <p className="mt-2">Commercial</p>
                </Col>
                <Col md="3" className="text-center ml-2 mt-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faMotorcycle} size="2x" />
                  <p className="mt-2">Two Wheeler</p>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start">
                <Col md="3" className="text-center ml-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faHeartbeat} size="2x" />
                  <p className="mt-2">Health</p>
                </Col>
                <Col md="3" className="text-center ml-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faPlane} size="2x" />
                  <p className="mt-2">Travel</p>
                </Col>
                <Col md="3" className="text-center ml-2 mb-2" style={{ border: "1px solid black", backgroundColor: "white", borderRadius: '10px', padding: '10px', transition: 'background-color 0.3s ease' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
                  <p className="mt-2">Others</p>
                </Col>
              </Row>
            </Col>
            {/* -------half of the Row--------- */}
            <Col  className='justify-content-start align-items-start mr-1'>
              <Row className='mt-1 multiColorBackground justify-content-start align-items-start' style={{ height: "250px" }} >
                <Col md="5" className='mt-4 ml-2'>
                  <p> Save the hassle of mapping and get instant payout</p>
                  <Button variant="primary">Click Me</Button>
                </Col>
                <Col className='mt-1 '>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
                </Col>
                <Col  className='mt-1 '>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
                  <Card>
                      <CardBody style={{height:"30px", width:"auto"}} className='justify-content-center align-items-center'>
                      <h4 className="justify-content-center align-items-center" style={{fontSize:"12px"}}>Private car</h4>
                      </CardBody>
                    </Card>
               </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* -----------End-------- */}
        {/* ---------------Second Row Start from here-------------------- */}
        <Row>
          <div className="d-flex justify-content-start ">
            <h5 className="font-weight-bold ml-3">
              MY ACTIONABLRS
            </h5>
          </div>
        </Row>
        {/* ---------details---------- */}
        <div className="container-content2">
          <Row>
            <Col md="4" >
              <Card className="p-0">
                <CardBody className="p-0 mr-1">
                <Row className=" justify-content-center align-items-start Innerbox">
                <h3>Support Tickects</h3>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center  mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-center align-items-start Innerbox2">
                <button className='Addbutton1'>view more</button>
              </Row>
                </CardBody>
              </Card>
            </Col>
       
            <Col md="4" >
              <Card className="p-0">
                <CardBody className="p-0 mr-1">
                <Row className=" justify-content-center align-items-start Innerbox">
                <h3>Support Tickects</h3>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center  mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-center align-items-start Innerbox2">
                <button className='Addbutton1'>view more</button>
              </Row>
                </CardBody>
              </Card>
            </Col>
       
            <Col md="4" >
              <Card className="p-0">
                <CardBody className="p-0">
                <Row className=" justify-content-center align-items-start Innerbox">
                <h3>Support Tickects</h3>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center mt-1'>
                  <Button variant="secondary" style={{ fontSize: "8px" }} >Ownership Transfer</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-start align-items-start Innerbox1">
                <Col md="7">
                  <Row style={{ fontSize: "10px", marginLeft: "5px" }} className='mt-1 '>
                    <h6 style={{ fontSize: "12px" }}>ASHISH-(PB769817612)</h6>
                    <p>Changes Required in Policy Details</p>
                  </Row>
                </Col>
                <Col md="5" className='justify-content-end align-items-end'>
                  <Row style={{ fontSize: "10px", marginRight:"2px" }} className='justify-content-end align-items-center  mt-1'>
                    <Button variant="primary" style={{ fontSize: "8px" }} >resolve</Button>
                  </Row>
                </Col>
              </Row>
              <Row className=" justify-content-center align-items-start Innerbox2">
                <button className='Addbutton1'>view more</button>
              </Row>
                </CardBody>
              </Card>
            </Col>
      
          </Row>
        </div>
        {/* -----------End-------- */}

           {/* ---------------third Row Start from here-------------------- */}
               <Row>
          <div className="d-flex justify-content-start ">
            <h5 className="font-weight-bold ml-3">
              MY PERFORMANCE  
            </h5>
          </div>
        </Row>
        {/* ---------details---------- */}
        <div className="container-content2">
          <Row>
          <Col md="4">
      <button
        className={`Addbutton1 mr-1 ${selectedButton === 'lastMonth' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('lastMonth')}
      >
        Last Month
      </button>
      <button
        className={`Addbutton1 ${selectedButton === 'thisYear' ? 'selected' : ''} mr-1`}
        onClick={() => handleButtonClick('thisYear')}
      >
        This Year
      </button>
    </Col>
            {/* -------half of the Row--------- */}
            <Col md="8" className='justify-content-end align-items-end'>
                <button className='Addbutton1 mr-1 '>Today</button>
                <button className='Addbutton1 mr-1'>This Month</button>
                <button className='Addbutton1 mr-1'>Last Month</button>
                <button className='Addbutton1 mr-1'>This Year</button>
                <button className='Addbutton1 mr-1'>Last Year</button>
                <button className='Addbutton1 mr-1'>Last Year</button>
                <button className='Addbutton1'>Custom Range</button>
            </Col>
          </Row>
          <Row>
            <Col md="4">
            <Card className=' m-2 justify-content-end align-items-end' >
              <CardBody style={{width:"300px", height:"125px"}}>
                  {/* Note Icon */}
                <FontAwesomeIcon icon={faFileAlt} size="2x" style={{ marginBottom: '15px' }} />
                   <h3 style={{fontSize:"16px"}}>Total Policies</h3>
                    <p  style={{fontSize:"16px"}}>0</p>

              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card className=' m-2 justify-content-end align-items-end' >
              <CardBody style={{width:"300px", height:"125px"}}>
                  {/* Note Icon */}
                <FontAwesomeIcon icon={faDollarSign} size="2x" style={{ marginBottom: '15px' }} />
                   <h3 style={{fontSize:"16px"}}>Total Premium</h3>
                    <p  style={{fontSize:"16px"}}>0</p>

              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card className=' m-2 justify-content-end align-items-end' >
              <CardBody style={{width:"300px", height:"125px"}}>
                  {/* Note Icon */}
                <FontAwesomeIcon icon={faCheckSquare} size="2x" style={{ marginBottom: '15px' }} />
                   <h3 style={{fontSize:"16px"}}>Total Renewals</h3>
                    <p  style={{fontSize:"16px"}}>0</p>

              </CardBody>
            </Card>
            </Col>
          </Row>
        </div>
        {/* -----------End-------- */}
           {/* ---------------fourth Row Start from here-------------------- */}
               <Row>
          <div className="d-flex justify-content-start ">
            <h5 className="font-weight-bold ml-3">
              USEFUL
            </h5>
          </div>
        </Row>
        {/* ---------details---------- */}
        <div className="container-content2">
          <Row>
          <Col md="4">
            <div className="embed-responsive embed-responsive-16by9">
             <iframe
             className="embed-responsive-item"
             src={`https://www.youtube.com/embed/${videoId}`}
             title="YouTube Video"
             allowFullScreen
             />
            </div>

               {/* Other content in the Col */}
         </Col>

            {/* -------half of the Row--------- */}
            <Col md="8"  className="d-flex align-items-center justify-content-center">
              <Card>
                <CardBody>
                  <img src='https://www.shutterstock.com/image-vector/medical-insurance-health-protection-concept-260nw-2113026071.jpg' alt='the Image' style={{height:"150px", width:"500px"}} ></img>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>
        {/* -----------End-------- */}
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

export default Dashboard

