import React from "react"
import { Row, Col, Button, Form, Dropdown, DropdownButton } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./SecondPage2.css"

const SecondPage = () => {
  return (
    <div className="bg-white">
      <Row>
         <div className="d-flex justify-content-start ">
           <h2 className="font-weight-bolder ml-2">
           <FontAwesomeIcon icon={faArrowLeft} className="mr-0" /> Go back to quots
           </h2>
         </div>
      </Row>
      <Row style={{ maxWidth: "100%", margin: "0 auto" }}>

        {/*------------ From here divided the Row into col-> 8 for left content and co->4 for right content ----------------- */}

        <Col md="8" className="border-Top frame " style={{ borderTop: '3px solid black' }}>
          {/* New column with a container */}
          <div className="d-flex flex-column ">
            <Row>
              <Col md="12">
                {/* ----------------------------Max Saver 2.0------------------ */}
       <div className='row  rowtitle'>
       <h2 className=" font-weight-bolder">Max Saver 2.0</h2></div>
      <div className="container-content2">
      <Row>
        {/* First Column: Paragraph and Button */}
        <Col md="8">
          <div className="paragraph-container">
            <p>10 Lacs - ReAssure Bronze + 90 Lacs - Health Recharge.</p>
            <Button className="button">View all features</Button>
          </div>
        </Col>

        {/* Second Column: Image */}
        <Col md="4">
          <div className="image-container8">
            <img src="https://tse3.mm.bing.net/th/id/OIP.4Ff0xGU9g63uTvS_AOtlQwAAAA?rs=1&pid=ImgDetMain" alt="Your Image" className="center-image" />
          </div>
        </Col>
      </Row>
    </div>
                {/* ---------------------------End------------------------- */}
    
                {/* ----------------------------Policy Period------------------ */}
                <div className='row  rowtitle'>
                <h2 className=" font-weight-bolder">Policy Period</h2></div>
                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <div>
                      Choosing a multi-year plan saves your money and the
                      trouble of remembering yearly renewals.
                    </div>
                  </div>

                  {/* Three checkboxes with paragraphs */}
                  <div className="d-flex flex-row mt-3  ">
                  <Col md="4" className="">
                  <div className="d-flex align-items-end mb-2 orange-border ">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        style={{
                          marginRight: "25px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox1">1 Year @ Rs16,436</label>
                    </div>
                  </Col>
                  <Col md="4" className="">
                  <div className="d-flex align-items-end mb-2 orange-border ">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        style={{
                          marginRight: "25px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox1">1 Year @ Rs16,436</label>
                    </div>
                  </Col>
                  <Col md="4" className="">
                  <div className="d-flex align-items-end mb-2 orange-border ">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        style={{
                          marginRight: "25px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox1">1 Year @ Rs16,436</label>
                    </div>
                  </Col>
                  </div>
                  <div className="row justify-content-center">
                  <div>
                    Easy EMI options starting from ₹1,473/month. <span style={{ color: "#6273f1" }}>View details ›</span>
                    </div>
                  </div>
                </div>
                {/* -------------------------------End---------------------------------- */}

                {/* ---------------------------------- Riders ------------------------------ */}
                <div className='row  rowtitle'>
                <h2 className=" font-weight-bolder">Riders</h2></div>
                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <div>
                    you should get these additional benefits to enhance your current plan
                    </div>
                  </div>
                  {/* Two safe gaurd with paragraphs */}
                  <div className="d-flex flex-row mt-3  ">
                  <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">Safeguard Benefit</div>
                         </div>
                         <div className="d-flex align-items-end  container-row6">
                         {/* Row 2: Paragraph and Buttons */}
                         <div>
                         <div className="paragraph1"> <span>.</span>Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps inems in e item Helps in ms of non payable itee item Helps in getting claims Help  claims of non payable ite</div>
                         <div className="buttons-container">
                         <h4 className="self">Rs1,150</h4>
                         <button className="Addbutton">  Add </button>
                      </div>
                     </div>
                     </div>
                    </Col>
                  <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">Safeguard +</div>
                         </div>
                         <div className="d-flex align-items-end  container-row6">
                         {/* Row 2: Paragraph and Buttons */}
                         <div>
                         <div className="paragraph1"> <span>.</span>Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps inems in e item Helps in ms of non payable itee item Helps in getting claims Help  claims of non payable ite</div>
                         <div className="buttons-container">
                         <h4 className="self">Rs1,150</h4>
                         <button className="Addbutton">  Add </button>
                      </div>
                     </div>
                     </div>
                    </Col>
                  <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">Acute - Best Consult</div>
                         </div>
                         <div className="d-flex align-items-end  container-row6">
                         {/* Row 2: Paragraph and Buttons */}
                         <div>
                         <div className="paragraph1"> <span>.</span>Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps inems in e item Helps in ms of non payable itee item Helps in getting claims Help  claims of non payable ite</div>
                         <div className="buttons-container">
                         <h4 className="self">Rs1,150</h4>
                         <button className="Addbutton">  Add </button>
                      </div>
                     </div>
                     </div>
                    </Col>

                  </div>
                </div>
                {/*  -----------------------End------------------- */}

                {/* -------------Recommended Add-Ons---------------- */}
                <div className='row  rowtitle'>
                <h2 className=" font-weight-bolder">Recommended Add-Ons</h2></div>
                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <div>
                    Add-ons are a smart way to enhance your cover at a fraction of the cost.
                    </div>
                  </div>
                  {/* Two safe gaurd with paragraphs */}
                   <div className="d-flex flex-row mt-3  ">
                  <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">Super Mediclaim</div>
                         </div>
                         <div className="d-flex align-items-center flex-column container-row6">
                          {/* Row 2: Image, Paragraph, and Buttons */}
                             <div className="image-paragraph-container">
                             <div className="image-container">
                             <img
                              src="https://img.freepik.com/premium-vector/medical-service-logo-vector-file_679076-167.jpg?w=740"
                              alt="Your Image"
                              className="center-image"
                                  />
                     </div>
                       <div>
                        <div className="paragraph">Super Mediclaim - Cancer Indemnity</div>
                          <div className="buttons-container">
                            <h4 className="self">Self</h4>

                                   {/* Dropdown for Button 2 */}
                             <DropdownButton title="20L" id="dropdown-button" className="dropdown-button">
                             <Dropdown.Item>25L</Dropdown.Item>
                             <Dropdown.Item>35L</Dropdown.Item>
                             <Dropdown.Item>45L</Dropdown.Item>
                            </DropdownButton>

                              <button className="Addbutton">Add</button>
                             </div>
                          </div>
                      </div>
                   </div>
                    </Col>
                    <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">OPD Care</div>
                         </div>
                         <div className="d-flex align-items-center flex-column container-row6">
        {/* Row 2: Image, Paragraph, and Buttons */}
                             <div className="image-paragraph-container">
                             <div className="image-container">
                             <img
                              src="https://qmedicalcenter.in/wp-content/uploads/2018/11/StarHealth.jpeg"
                              alt="Your Image"
                              className="center-image"
                                  />
                     </div>
                       <div>
                        <div className="paragraph">OPD Care - Silver4 years PED waiting period</div>
                          <div className="buttons-container">
                            <h4 className="self">All</h4>

                                   {/* Dropdown for Button 2 */}
                             <DropdownButton title="35k" id="dropdown-button" className="dropdown-button">
                             <Dropdown.Item>25k</Dropdown.Item>
                             <Dropdown.Item>35k</Dropdown.Item>
                             <Dropdown.Item>45k</Dropdown.Item>
                            </DropdownButton>

                              <button className="Addbutton">Add</button>
                             </div>
                          </div>
                      </div>
                   </div>
                    </Col>
                    <Col md="4" className="">
                     <div className="d-flex align-items-end  container-row">
                         {/* Row 1: Title */}
                         <div className="title">Critical Illness</div>
                         </div>
                         <div className="d-flex align-items-center flex-column container-row6">
                         {/* Row 2: Image, Paragraph, and Buttons */}
                             <div className="image-paragraph-container">
                             <div className="image-container">
                             <img
                              src="https://pnclogosofficial.s3.us-west-2.amazonaws.com/2020/10/09140753/insurance-logos-10.jpg"
                              alt="Your Image"
                              className="center-image"
                                  />
                     </div>
                       <div>
                        <div className="paragraph">Critical Illness - 20 critical illnesses covered</div>
                          <div className="buttons-container">
                            <h4 className="self">Self</h4>

                                   {/* Dropdown for Button 2 */}
                             <DropdownButton title="20L" id="dropdown-button" className="dropdown-button">
                             <Dropdown.Item>25L</Dropdown.Item>
                             <Dropdown.Item>35L</Dropdown.Item>
                             <Dropdown.Item>45L</Dropdown.Item>
                            </DropdownButton>

                              <button className="Addbutton">Add</button>
                             </div>
                          </div>
                      </div>
                   </div>
                    </Col>

                  </div>
                </div>
               {/* ------------------End---------------------- */}

              </Col>
            </Row>
          </div>
        </Col>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Col md="4">
          {/* New column for the image */}
          <div className="orange-container">
              <div className="container-content">
                <Row>
                <h2 className="d-flex justify-content-center align-items-center ml-1">
                  Order Summary
                </h2>
                </Row>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center ml-1">
                      <p>Base Premium- 1year</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 16,436</p>
                  </Col>
                </Row>
                <Row>
                <div className="d-flex justify-content-start align-items-center ml-2">
                  <h3>Select Rider(s)</h3>
                </div>
                </Row>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center ml-1">
                      <p>Safeguard Benefit</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 14,102</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center ml-1">
                      <p>Safeguard +</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 14,102</p>
                  </Col>
                </Row>
                <Row>
                <div className="d-flex justify-content-start align-items-center ml-2">
                  <h3>Select Add-ons</h3>
                </div>
                </Row>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center ml-1">
                      <p>Critical illness</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 10,102</p>
                  </Col>
                </Row>
                <Row>
                <div className="d-flex justify-content-start align-items-center ml-2">
                  <h3>Post Existing Policy</h3>
                </div>

                  <Col md="12">
                    <div className="d-flex justify-content-start align-items-center ml-2">
                      <p>
                        <input type="checkbox" />
                        I want to port my existing policy
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="7">
                    <div className="d-flex justify-content-start align-items-center ml-1">
                      <h3>Total premium</h3>
                    </div>
                  </Col>
                  <Col md="4">
                    <h3>Rs 25,132</h3>
                  </Col>
                </Row>
              </div>  
              <div className="container-content4">
              <Row>
                  <Col md="12">
                    <div className="d-flex justify-content-center align-items-center ">
                      <Button variant="primary" className="btn-small-width">
                        Proceed to proposal
                      </Button>
                    </div>
                  </Col>
                </Row>
                </div>        
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SecondPage 
                                                                            

/*
 <Row style={{ maxWidth: "100%", margin: "0 auto" }}>

 <Col md="12">
 </Col>

 <Col md="4">
  <Row>
     <Col md="8">
      <div className="d-flex justify-content-start align-items-center ml-1">
      <p>Base Premium- 1year</p>
      </div>
      </Col>
      <Col md="4">
      <p>Rs 16,436</p>
     </Col>
   </Row>
 </Col>
</Row>

*/ 