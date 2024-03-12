import React from 'react'
import { Col, Form, Dropdown, Row, FormControl, Table } from 'react-bootstrap'
import "./Offline.css"
function Myticket() {
  return (
    <div>
           <Row style={{ border: "1px solid gray", borderRadius: "10px 10px 0 0" }} className="bg-white">
        <div className="d-flex justify-content-start ">
          <h4 className="font-weight-bolder ml-2 p-1">
            My Tickets
          </h4>
        </div>
      </Row>
        {/* ------Row 2---------  */}
        <Row style={{borderLeft: "1px solid gray", borderRight: "1px solid gray", borderRadius: "0px 0px 0px 0px", height: "auto" }} className="bg-white pt-2">
        <Col md="3">
      <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}}>
        <Form.Label> Select Status</Form.Label>
        <Form.Control as="select" style={{ border: "2px solid gray" }} defaultValue="">
          <option disabled value="">Select Quotes Status</option>
          <option>All</option>
          <option>New</option>
          <option>In Progress</option>
          <option>Reopen</option>
          <option>Resolved</option>
          <option>Closed</option>
          <option>Incomplete OT</option>
          <option>Other</option>
         </Form.Control>
       </Form.Group>
      </Col>
        <Col md="3">
      <Form.Group controlId="dropdown1" style={{fontWeight:"bold"}}>
        <Form.Label> Select Product</Form.Label>
        <Form.Control as="select" style={{ border: "2px solid gray" }} defaultValue="">
          <option disabled value="">Select Product</option>
          <option>Car</option>
          <option>Health</option>
          <option>Ivestment</option>
          <option>Term</option>
          <option>Two Wheeler</option>
          <option>Home Insurance</option>
          <option>Commercial</option>
          <option>Other</option>
          <option>Goal Planner</option>
          <option>Travel</option>
         </Form.Control>
       </Form.Group>
      </Col>

    <Col md="3">
      <input
        type="date"
        id="singleDate"
        name="singleDate"
        style={{ backgroundColor: '#e0e0e0', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} className='mt-2'
      />
    </Col>
    <Col md="3" className='mt-2'>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          aria-label="Search"
        />
      </Form>
    </Col>
        </Row>
        <Row style={{borderLeft: "1px solid gray", borderRight: "1px solid gray", borderBottom:"1px solid gray", borderRadius: "0px 0px 10px 10px", height: "auto" }} className="bg-white pt-4">
        <Col className='justify-content-center  align-items-end'>
        <Table responsive>
      <thead>
        <tr>
          <th scope='col' className='text-nowrap'>
            #
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 1
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 2
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 3
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 4
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 5
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 6
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 7
          </th>
          <th scope='col' className='text-nowrap'>
            Heading 8
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

export default Myticket
