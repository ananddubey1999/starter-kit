import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Learning.css"
function Learning() {
    const colStyle = {
        backgroundColor: 'gray',
        border: '1px solid black', // You can adjust the border style as needed
        padding: '10px' //    Add padding for better appearance
      }
  return (
    <div>
      <Row>
        <Col md="6">
         <Row className="d-flex justify-content-center align-items-center ">
        <Col md="3" style={colStyle} className="d-flex justify-content-center align-items-center ">
            <div>
                <h1>hi</h1>
            </div>
        </Col>
        <Col md="3" style={colStyle} className="d-flex justify-content-center align-items-center" >
            <div>
                <h1>hi</h1>
            </div>
        </Col>
        </Row>
        </Col>

        {/* -------------half Col start from here--------- */}
        <Col md="6">
        <Row>
        <Col md="3" style={colStyle}>
            <div>
                <h1>hi</h1>
            </div>
        </Col>
        <Col md="3" style={colStyle}>
            <div>
                <h1>hi</h1>
            </div>
        </Col>
        </Row>
        </Col>
      </Row>
{/* ------------Second Row----------- */}
      <Row className="mt-4" >
        
        {/* --------Half of the Col---------- */}
        <Col md ="6" className="d-flex justify-content-center align-items-center" >
            <Row >
         <Col md ="4" className="d-flex justify-content-center align-items-center" style={{ border : '1px solid black'}}>
          <div>
            <p>
                React Java Script <br/>
                React Java Script <br/>
                React Java Script 
            </p>
          </div>
         </Col>

         <Col md="2">
             <div>
               <img src="https://hotofer.b-cdn.net/wp-content/uploads/2022/05/PVC-Aadhar-Card-Front-Image-300x189.png"
              alt="Image 1" style={{height:"200px"}} /></div>
         </Col>
         </Row>
         </Col>

         {/* ------------Half of the Col Start from here-------------- */}
         <Col md ="6">
            <Row>

            <Col md ="3">
         <form>
        <div>
           <label for="email">Email address</label>
           <input type="email" id="email" placeholder="Enter email" />
        </div>

        <div>
           <label for="password">Password</label>
           <input type="password" id="password" placeholder="Password" />
        </div>

             <button type="submit">Login</button> 
            <button type="button">Register</button>
       </form>
         </Col>

         <Col md ="3">
         <form>
           <div className="input-group mb-3">
             <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search-button" />
             <button className="btn btn-outline-secondary" type="submit" id="search-button">Search</button>
           </div>
         </form>
         </Col>
            </Row>
         </Col>
      </Row>

{/* --------------Third Row----------------- */}
      <Row className="mt-4">
        {/* -------------------Half of the Col---------------------  */}
        <Col md="8">
        <Row className="d-flex justify-content-center align-items-center">
            <Col md ="2">
                <h3>Home</h3>
            </Col>
            <Col md ="2">
                <h3>About</h3>
            </Col>
            <Col md ="2">
                <h3>Contact</h3>
            </Col>
            <Col md ="2">
            <div>
               <img src="https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png"
              alt="Image 1"  style={{height: "70px"}}/></div>
            </Col>
        </Row>
        </Col>

        {/* -------------------Half of the Col Start From here----------- */}
        <Col md="4">
  <div>
    <h3>Checkbox Section</h3>
    <input type="checkbox" id="myCheckbox" />
    <label htmlFor="myCheckbox">Enable feature</label>
  </div>
        </Col>
      </Row>

      {/* -----------------Fourth Row--------------- */}
      
      <Row className="mt-4" >
        <Col md="6">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md="2">
                    <div style={{ border: '2px solid black', backgroundColor: 'red', padding: '10px' }}>
                        Red
                    </div>
                </Col>
                <Col md="2">
                <div style={{ border: '2px solid black', backgroundColor: 'Yellow', padding: '10px' }}>
                        Yellow
                    </div>
                </Col>
                <Col md="2">
                <div style={{ border: '2px solid black', backgroundColor: 'blue', padding: '10px', color:'white' }}>
                        blue
                    </div>
                </Col>
            </Row>
        </Col>

        <Col md="6">
            <Row className="d-flex justify-content-center align-items-center">
            <Col md="2">
            <div style={{ border: '2px solid black', backgroundColor: 'red', padding: '10px', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Red
               </div>
                </Col>
            <Col md="2">
            <div style={{ border: '2px solid black', backgroundColor: 'yellow', padding: '10px', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Yellow
               </div>
                </Col>
            <Col md="2">
            <div style={{ border: '2px solid black', backgroundColor: 'blue', padding: '10px', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }}>
                  Blue
               </div>
                </Col>
            </Row>
        </Col>
      </Row>

      {/* -------------------Fifth Row---------------------- */}
        <Row className="mt-4">
            <Col md = "6">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Mon</h2>
                    </Col>
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Tue</h2>
                    </Col>
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Wed</h2>
                    </Col>
                </Row>
            </Col>
            <Col md = "6">
            <Row className="d-flex justify-content-center align-items-center">
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Tha</h2>
                    </Col>
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Fri</h2>
                    </Col>
                    <Col md="2" style={{ border: '2px solid black', padding:'10px'}} className="mr-1">
                    <h2>Sat</h2>
                    </Col>
                </Row>
            </Col>
        </Row>

        {/* ---------Row no sixth---------- */}
        <Row style={{ border: '2px solid black', padding:'10px'}} className="mt-2">
           <Col md="6">
            <div>
                <h1>New Row</h1>
              <p>
              .Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps
               inems in e item Helps in ms of non payable itee item Helps in getting claims Help claims of non payable ite
              .Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps
               inems in e item Helps in ms of non payable itee item Helps in getting claims Help claims of non payable ite
              .Helps inems in e item Helps in getting claiHelps inems in e item Helps in getting claiHelps
               inems in e item Helps in ms of non payable itee item Helps in getting claims Help claims of non payable ite 

           </p>
              <div style={{ position: "absolute", bottom: "0", left: "40%", transform: "translateX(-50%)", height: "80px", display: "flex", justifyContent: "space-between" }} className="mt-4">
               <button type='button' style={{ height: "50px", marginRight: "20px", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#3498db", color: "#fff", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", transition: "background-color 0.3s ease" }}>
                Login ID
              </button>
               <button type='button' style={{ height: "50px", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#2ecc71", color: "#fff", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", transition: "background-color 0.3s ease" }}>
                Register
              </button>
             </div>

              </div>
           </Col>

           <Col md="6" className="d-flex justify-content-center align-items-center">
            <div>
                <img src='https://pcriver.com/wp-content/uploads/2020/12/microsoft-logo.jpg' alt='Right Image' style={{ maxWidth: "100%", height: "auto" }}/>
            </div>
           </Col>
        </Row>

        {/* -----------Row No 6------- */}
        <Row style={{border:"2px solid black"}} className='mt-4' md="8">
          <Col md="7">
            <div>
            <div className="text-center mb-2" style={{marginTop:"100px"}}>
              <h1 className='mb-2'>
              PCV Insurance
              </h1>
              <p>
              Get the best quotes for your Vehicle. <br/>
              So lets get started! Enter Registration Number
              </p>
              </div>
              <div className="d-flex justify-content-center mt-2">
              <input type="text" className="form-control mb-0" style={{ width: "70%" }} placeholder="Inter Registration Number" />
              <button type="submit" className="btn btn-primary" style={{ width: "20%" }}>Get Details</button>
              </div>
              <div className='d-flex justify-content-center mt-2'>
              <button type="submit" className="btn " style={{ width: "40%", border:"2px solid gray" }}>Got a new Vehicle? Awesome</button>
              </div>
            </div>
          </Col>
          
          {/* -------Half of the col start from here--------- */}
          <Col md="5" style={{border:"2px solid gray", height:"500px"}}>
            <Row className="d-flex justify-content-center align-items-center">
            <div>
            <div className="text-center mt-4 mb-2">
             <h1>
              Commercial Vehicle
             </h1>
            </div>
        <div className="text-center">
          <form>
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 1" />
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 2" />
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 3" />
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 4" />
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 5" />
           <input type="text" className="form-control mb-1" placeholder="Enter value for Field 6" />
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
          </form>
        </div>             
           </div>
            </Row>   
          </Col>
        </Row>

        {/* ---------Row No Seventh-------- */}
        <Row style={{border:"2px solid black"}} className='mt-4' md="8">
          <Col md="8">
          <div>
            <div >
             <h3 className="text-center mt-1 mb-2">
             Lets Start with your GCV details 
             </h3>
             <h3 className="text-start mt-4  ml-2">
             Please Select Your Model
             </h3>
             <div className="d-flex align-items-center justify-content-end">
             <input type="search" className="form-control  mb-1 " placeholder="Search..." style={{width:"200px"}} />
             <button type="button" className="btn btn-primary mb-1 mr-2">Search</button>
            </div>
            </div>
            <div class="button-container ">
               <div class="button-row">
                <button type="button" class="bbtn">Alto 800</button>
                <button type="button" class="bbtn">Swift</button>
            </div>
               <div class="button-row">
                <button type="button" class="bbtn">Alto 800</button>
                <button type="button" class="bbtn">Swift</button>
            </div>
               <div class="button-row">
                <button type="button" class="bbtn">Alto 800</button>
                <button type="button" class="bbtn">Swift</button>
            </div>
            <div class="button-row">
                <button type="button" class="bbtn">Baleno</button>
                <button type="button" class="bbtn">Ciaz</button>
            </div>
            <div class="button-row">
                <button type="button" class="bbtn">Baleno</button>
                <button type="button" class="bbtn">Ciaz</button>
            </div>
            <div class="button-row">
                <button type="button" class="bbtn">Baleno</button>
                <button type="button" class="bbtn">Ciaz</button>
            </div>
            <div class="button-row">
                <button type="button" class="bbtn">Baleno</button>
                <button type="button" class="bbtn">Ciaz</button>
            </div>
            <div class="button-row">
                <button type="button" class="bbtn">Baleno</button>
                <button type="button" class="bbtn">Ciaz</button>
            </div>
            </div>

          </div>
          </Col>
          
          {/* -------Half of the col start from here--------- */}
          <Col md="4" style={{border:"2px solid gray", height:"500px"}}>
            <Row style={{border:"2px solid gray", height:"60px"}} className='mt-1'>
              <Col>
                 <p>Registration Number</p>
                 <h6>R1-02</h6>
              </Col>                                                          
            </Row>   
            <Row style={{border:"2px solid gray", height:"60px"}} className=''>
              <Col>
                 <p>Registration Number</p>
                 <h6>R1-02</h6>
              </Col>                                                          
            </Row>   
            <Row style={{border:"2px solid gray", height:"60px"}} className=''>
              <Col>
                 <p>Registration Number</p>
                 <h6>R1-02</h6>
              </Col>                                                          
            </Row>  
            <Row style={{border:"2px solid gray", height:"60px"}} className=''>
              <Col>
                 <p>Registration Number</p>
                 <h6>R1-02</h6>
              </Col>                                                          
            </Row>  
            <Row>
              <Col>
              <div className='mt-5 ml-5'>
                <img src='https://reviewsrilanka.com/wp-content/uploads/2023/08/suzuki_alto.jpg'
                 alt='Car Dekho' style={{height:"100px", width:"200px"}}/>
              </div>
              </Col>
            </Row> 
          </Col>
        </Row>
    </div>
  )
}

export default Learning


// rfce is use for sortcut of react project     