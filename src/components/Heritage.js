import React from "react";
import '../App.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"
import { BsEyeFill } from "react-icons/bs";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import SideNav from "./SideNav"
import Accordion from 'react-bootstrap/Accordion';
import pdf from "./HeritageGolfCourse_202208041836Q1.pdf"
import cso from "./HeritageCSO.pdf"
import mechSpec from "./HeritageMechanicalSpec.pdf"
import elecSpec from "./HeritageElectricalSpec.pdf"
import fullSpec from "./HeritageFullSpec.pdf"


function Heritage() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="JobDataContainer">
                <div className="ProjectInfoItem">
                    {/* <h5>Order Sheet</h5> */}
                    <Table size="sm" hover bordered >
                        <thead>
                            <tr className="TableHead">
                                <th className="CenterColumn">Job #</th>
                                <th>Project Name</th>
                                <th>State</th>
                                <th>Model Number</th>
                                <th>Salesman</th>
                                <th>Project Manager</th>
                                <th>Order Date</th>
                                <th>Delivery Date</th>
                                <th>Release Status</th>
                                <th className="CenterColumn">Order Sheet</th>
                                <th className="CenterColumn">Proposal</th>
                                <th className="CenterColumn">CSO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="CenterColumn">2020676</td>
                                <td>Heritage Golf Course</td>
                                <td>MI</td>
                                <td>HCLVE-1-50x2/10VMSV-460-3-1100-110</td>
                                <td>Eric Pifer</td>
                                <td>Chandler Blaschka</td>
                                <td>12/30/2020</td>
                                <td>03/09/2021</td>
                                <td>Full Release</td>
                                <td className="CenterColumn"><Link to={`/2020676/OrderSheet`} className="EditLink" ><BsEyeFill /></Link></td>
                                <td className="CenterColumn"><a href={pdf} className="PDFLink" ><BsFillFileEarmarkPdfFill /></a></td>
                                <td className="CenterColumn"><a href={cso} className="PDFLink" ><BsFillFileEarmarkImageFill /></a></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table size="sm" bordered>
                        <tbody>
                            <tr>
                                <th>Mechanical Engineer</th>
                                <td>Bob Surdyk</td>
                                <td><a href={mechSpec} className="PDFLink" >Mechanical Spec     <BsFillFileEarmarkPdfFill /></a></td>
                                <th>Electrical Engineer</th>
                                <td>Sandy McElhinny</td>
                                <td><a href={elecSpec} className="PDFLink" >Electrical Spec     <BsFillFileEarmarkPdfFill /></a></td>
                                <th>Controls Engineer</th>
                                <td>Cory Wolgast</td>
                                <td><a href={fullSpec} className="PDFLink" >Entire Specification    <BsFillFileEarmarkPdfFill /></a></td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="SalesColumns">
                        <div className="SoldTo">
                            <Table size="sm" hover bordered >
                                <tbody>
                                    <tr>
                                        <th colSpan={1}>Station Type</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm" >
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"Horizontal Centrifugal"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={1}>Configuration</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"Suction Lift"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Prime System</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"Vacuum prime"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Dynamic Inlet PSI</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Feet of Lift</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"8"} />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Discharge PSI</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"110"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Total Flow (GPM)</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"1100"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Station Color</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"WT Sandstone"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Electrical Enclosure Location</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"On Skid"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="ShipTo">
                            <Table size="sm" hover bordered >
                                <tbody>
                                    <tr>
                                        <th colSpan={1}>Site Voltage</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"460VAC/3Phase/60hz"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={1}>Power Configuration</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 ProjectStatus">
                                                    <Form.Select aria-label="Default select example">
                                                        <option>WYE 3PH 4 Wire</option>
                                                        <option >Unknown</option>
                                                        <option >WYE 1PH 3 Wire</option>
                                                        <option >DELTA 3PH 4 Wire</option>
                                                        <option >Open Delta/High Leg Delta</option>
                                                        <option >DELTA 3PH 4 Wire w/ Stinger</option>
                                                        <option >Unbalanced</option>
                                                        <option >Generator</option>
                                                        <option >N/A</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >SCCR Rating</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"35 kA"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >FCC Type</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"B"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Station Location</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 ProjectStatus">
                                                    <Form.Select aria-label="Default select example" disabled>
                                                        <option>CSM Enclosure - Outside</option>
                                                        <option >WM5000 Enclosure - Outside</option>
                                                        <option >WM7000 Enclosure - Outside</option>
                                                        <option >WM9000 Enclosure - Outside</option>
                                                        <option>Outside</option>
                                                        <option>Outside - Under Canopy</option>
                                                        <option>Inside - Weather Resistant Building</option>
                                                        <option>N/A</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Site Elevation (Ft)</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"891"} />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Regulatory Compliance</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"UL Listed - Industrial Control Panel"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Wet Well Depth</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Flow Meter Location</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"On Skid"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className="JobAccordion">
                    <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Sales Information</Accordion.Header>
                            <Accordion.Body >
                                <Accordion alwaysOpen >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Sold To / Ship To</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="SalesColumns">
                                                <div className="SoldTo">
                                                    <Table size="sm" hover bordered >
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Sold To</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th colSpan={1}>Customer PO</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm" >
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"091220EPSGCLV-50"} disabled />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th colSpan={1}>Company Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Irrigation Protection Services"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 1</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"W8370 Springwood Lane"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 2</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >City</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Delavan"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >State</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Wisconsin"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Zip</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"53115"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Country</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"United States"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Sold To Contact</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th >First Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Gabe"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Last Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Lopez"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Mobile Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"(262) 749-1491"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Phone Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Fax Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Email Address</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"irrmaster01@gmail.com"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Invoice Price Information</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th >Invoice Price</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"$197,366"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Multiplier</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Corrected Price</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Refer to WT Change Order date</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Term of Sale</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"50% Down"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Special Terms Approved By</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                            <Form.Select aria-label="Default select example">
                                                                                <option></option>
                                                                                <option value="1">N/A</option>
                                                                                <option value="2">Boyd Rose</option>
                                                                                <option value="2">Chip Carlson</option>
                                                                                <option value="2">Rick Reinders</option>
                                                                                <option value="2">Other - See Comments</option>
                                                                                <option value="2">Pending</option>
                                                                                <option value="2">TBD</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                <div className="ShipTo">
                                                    <Table size="sm" hover bordered >
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Ship To</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th colSpan={1}>Company Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Marquette Golf Course"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 1</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"1075 Grove Street"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 2</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >City</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Marquette"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >State</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Michigan"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Zip</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"49855"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Country</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"United States"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                {/* <th ></th> */}
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} disabled />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Ship To Contact</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th >First Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Gabe"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Last Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Lopez"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Mobile Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"(262) 749-1491"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Phone Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Fax Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Email Address</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"irrmaster01@gmail.com"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr className="TableHead">
                                                                <th colSpan={3} className="CenterColumn" >Shipment Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th >24 Hour Customer Carrier Call In Advance</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                            <Form.Select aria-label="Default select example">
                                                                                <option>Yes</option>
                                                                                <option value="1">No</option>
                                                                                <option value="2">TBD</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Carrier</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                            <Form.Select aria-label="Default select example">
                                                                                <option>FOB Hartland - Watertronics Selects Carrier</option>
                                                                                <option value="1">FOB Hartland - Customer Selects Carrier</option>
                                                                                <option value="2">FOB Jobsite - Watertronics Selects Carrier</option>
                                                                                <option value="2">FOB Jobsite - Customer Selects Carrier</option>
                                                                                <option value="2">Watertronics Delivery / Install</option>
                                                                                <option value="2">Customer Pick-Up</option>
                                                                                <option value="2">International</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Select Job Site Services Include Total Price</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <div className="FormRadio">
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    id="inline-radio"
                                                                                    label="Off Loading"
                                                                                />
                                                                            </div>
                                                                            <div className="FormRadio">
                                                                                <Form.Check
                                                                                    inline
                                                                                    type="radio"
                                                                                    id="inline-radio"
                                                                                    label="Setting on Slab"
                                                                                />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Installation Service Type</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                            <Form.Select aria-label="Default select example">
                                                                                <option>None</option>
                                                                                <option value="1">Full Installation</option>
                                                                                <option value="2">Commission / Custom Training</option>
                                                                                <option value="2">Supervision Only</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Notification of Shipment</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                            <Form.Select aria-label="Default select example">
                                                                                <option>All</option>
                                                                                <option value="1">Contact Sold To</option>
                                                                                <option value="2">Contact Ship To</option>
                                                                                <option value="2">Contact WT Salesman</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Other</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Arrival Confirmation Notes</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Station Weight</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={""} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Price Breakdown</Accordion.Header>
                                        <Accordion.Body  >
                                            <Table size="sm" bordered>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Amount</th>
                                                        <th>Pay To</th>
                                                        <th>Provider Quote</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Sell Price</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"$165,183.00"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Freight</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"$2,000.00"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Commission #1</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Commission #2</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Set Up Service</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Start Up Service</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Crane</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Inspection Service</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Warranty</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Extended (2 Years)"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"$0.00"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Other</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Net Revenue</th>
                                                        <th>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"$163,183.00"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </th>
                                                        <td>

                                                        </td>
                                                        <td>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <br></br>
                                            <Table size="sm" bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th className="CenterColumn" colSpan={4}>Other Estimated Additional Costs (Paid by Others)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Freight</th>
                                                        <td></td>
                                                        <th>Local Rental Equipment</th>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Local Labor</th>
                                                        <td></td>
                                                        <th>Other</th>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Owners Manual Requirements</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" bordered>
                                                <tbody>
                                                    <tr>
                                                        <th>Qty</th>
                                                        <td>3</td>
                                                        <th>Media</th>
                                                        <td>Electronic</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <br></br>
                                <div>
                                    <Table size="sm" hover bordered>
                                        <thead>
                                            <tr className="TableHead">
                                                <th className="CenterColumn" >Comments</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="FormTDComments ">
                                                    <Form className="FormTextArea">
                                                        <Form.Group className="mb-3 TableForm TableFormComments">
                                                            <Form.Control as="textarea" rows={3} defaultValue={""} />
                                                        </Form.Group>
                                                    </Form>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mechanical Specification</Accordion.Header>
                            <Accordion.Body>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>HC Requirements</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered >
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Max Lift (Ft)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"8"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Suction Line Material</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>HDPE</option>
                                                                        <option>PVC</option>
                                                                        <option>Other</option>
                                                                        <option>Aluminum</option>
                                                                        <option>Painted Steel</option>
                                                                        <option>Unknown</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Station is Drawing From</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Reservoir Through Suction Lines</option>
                                                                        <option>Wet Well</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Priming Method</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Vacuum Prime</option>
                                                                        <option>Positive Prime</option>
                                                                        <option>TBD</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Suction Lines Provided By</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Watertronics</option>
                                                                        <option>Custom</option>
                                                                        <option>Other</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >If Vacuum Prime Provide Details</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Standard Vacuum Prime"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Custom Provider Details</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Foot Valve Required?</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Suction Line Configuration</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Common Suction Line</option>
                                                                        <option>Individual Suction Line</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Foot Valve Details</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th className="CenterColumn" >HC Requirement Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={'Neptune black floats for 10" suction line (qty. 3)'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Skid Construction</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Skid Construction </th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Formed Steel 6-3/8"</option>
                                                                        <option>Custom</option>
                                                                        <option>Stainless Steel</option>
                                                                        <option>Aluminum</option>
                                                                        <option>None</option>
                                                                        <option>Formed Steel 8-3/8"</option>
                                                                        <option>Marine Grade Aluminum</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Coating for Skid</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Painting</option>
                                                                        <option>Rhino Shield</option>
                                                                        <option>Galvanized</option>
                                                                        <option>No Coating</option>
                                                                        <option>N/A</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Must Fit in Shipping Container</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Skid Color</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Custom Skid Construction Details</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Describe Special Coating Under Skid</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Lifting Points</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"12"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Leveling Kit</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Skid Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Pump / Manifold / Piping</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Piping Material</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Mild Steel</option>
                                                                        <option>304SS</option>
                                                                        <option>316SS</option>
                                                                        <option>Other</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Station Isolation Butterfly Size (in)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"8"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Pipe Coating</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Paint Only"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Station Discharge Isolation Butterfly Valve Style</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Lug Style</option>
                                                                        <option>Wafer Style</option>
                                                                        <option>Groove Style</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Pipe Coating Application</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Exterior Only - Specify</option>
                                                                        <option>Internal Only - FBE</option>
                                                                        <option>Internal Only - FBE w/ SS Column</option>
                                                                        <option>Both Internal and External - FBE</option>
                                                                        <option>Both Internal and External - FBE w/ SS Column</option>
                                                                        <option>N/A</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Station Discharge Butterfly Valve Operator</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Gear Wheel</option>
                                                                        <option>Lever</option>
                                                                        <option>Electronic</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Pipe Color (Exterior)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Flow Meter Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Data Industrial"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Injection Taps For Each Discharge Zone</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'3-3/4"'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Pressure Relief Valve (PRV) Size (in)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"3"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Pressure Relief Valve (PRV) Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Flanged Angle</option>
                                                                        <option>Flanged Globe</option>
                                                                        <option>Threaded Angle</option>
                                                                        <option>Threaded Globe</option>
                                                                        <option>None</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >System Relief Piped To</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Flush Line"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Station Inlet Isolation Butterfly Size (in)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"N/A"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Station Inlet Isolation Butterfly Valve Style</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>N/A</option>
                                                                        <option>Lug Style</option>
                                                                        <option>Wafer Style</option>
                                                                        <option>Groove Style</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Station Inlet Butterfly Valve Operator</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>N/A</option>
                                                                        <option>Gear Wheel</option>
                                                                        <option>Lever</option>
                                                                        <option>Electronic</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Station Hardware</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Standard</option>
                                                                        <option>Stainless 18-8</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Pump / Manifold / Piping Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <div className="accordionDiv">
                                                <div className="accordionTitle">
                                                    Station Enclosure
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                    defaultChecked
                                                />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Station Enclosure Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>CSM</option>
                                                                        <option>WM5000</option>
                                                                        <option>WM7000</option>
                                                                        <option>WM9000</option>
                                                                        <option>Other</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Enclosure Paint Color</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Acoustic Insulation</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Thermal Insulation</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Exterior Lighting</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>70W LED External Dusk to Dawn Light</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Interior Lighting</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Snow or Wind Rating</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Cooling Fan(s)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Special Enclosure Height Requirements</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" >
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >External Power Connection</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Fused Disconnect Box</option>
                                                                        <option>Junction Box</option>
                                                                        <option>Pull Box</option>
                                                                        <option>N/A</option>                                                                </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Station Enclosure Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <div className="accordionDiv">
                                                <div className="accordionTitle">
                                                    Drop Pipe(s)
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                    defaultChecked
                                                />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Inlet Drop Pipe</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Yes - See CSO</option>
                                                                        <option>No</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Discharge Drop Pipe</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Yes - See CSO</option>
                                                                        <option>No</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Paint Color</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Paint Color</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Drop Pipe Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            Pumps
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Accordion alwaysOpen>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Sustain Pump - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""
                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1" >
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Main Pump(s)
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""
                                                                defaultChecked
                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table size="sm" hover bordered>
                                                            <tbody>
                                                                <tr>
                                                                    <th colSpan={1}>Motor Efficiency For All Motors</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Premium</option>
                                                                                    <option>Non-Premium</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Motor Elevation Derate</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <Accordion >
                                                            <Accordion.Item eventKey="0" >
                                                                <Accordion.Header>Jockey Pump (#1)</Accordion.Header>
                                                                <Accordion.Body >
                                                                    <Table size="sm" hover bordered>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colSpan={1}>Jockey Sequence</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"3"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Temperature Sensor at Intake</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
                                                                                                <option>N/A</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                    <Table size="sm" hover bordered>
                                                                        <thead>
                                                                            <tr className="TableHead">
                                                                                <th colSpan={2} className="CenterColumn" >Pump Specification</th>
                                                                                <th colSpan={2} className="CenterColumn" >Motor Specification</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"NP-10-9407"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Part of Pump"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Goulds"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Part of Pump"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"15SV6RJ4F50"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Part of Pump"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"VMS"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"10"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"70%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TDH</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"280 FT"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Enclosure</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
                                                                                                <option>WP1</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Flow</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"100GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"N/A"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"9.6"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"6"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"3600"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'2IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Impeller Trim</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"N/A"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Motor Temp Switch</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Comments</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Vibration Sensor</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="1" >
                                                                <Accordion.Header>Main Pump (#2)</Accordion.Header>
                                                                <Accordion.Body >
                                                                    <Table size="sm" hover bordered>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th >Temperature Sensor at Intake</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
                                                                                                <option>N/A</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                    <Table size="sm" hover bordered>
                                                                        <thead>
                                                                            <tr className="TableHead">
                                                                                <th colSpan={2} className="CenterColumn" >Pump Specification</th>
                                                                                <th colSpan={2} className="CenterColumn" >Motor Specification</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"88-50-0123"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"48-11-3024"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Goulds"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Baldor"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12BF"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"EJMM2542T"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HC"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"50"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"76.6%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"93%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TDH</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"280 FT"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Enclosure</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
                                                                                                <option>WP1</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Flow</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"500GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'324JM'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"N/A"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"58"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"3600"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'3IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Impeller Trim</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"8-11/16IN"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Motor Temp Switch</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Comments</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Vibration Sensor</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="2" >
                                                                <Accordion.Header>Main Pump (#3)</Accordion.Header>
                                                                <Accordion.Body >
                                                                    <Table size="sm" hover bordered>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th >Temperature Sensor at Intake</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
                                                                                                <option>N/A</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                    <Table size="sm" hover bordered>
                                                                        <thead>
                                                                            <tr className="TableHead">
                                                                                <th colSpan={2} className="CenterColumn" >Pump Specification</th>
                                                                                <th colSpan={2} className="CenterColumn" >Motor Specification</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"88-50-0123"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"48-11-3024"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Goulds"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Baldor"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12BF"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"EJMM2542T"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HC"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"50"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"76.6%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"93%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TDH</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"280 FT"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Enclosure</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
                                                                                                <option>WP1</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Flow</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"500GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'324JM'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"N/A"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"58"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"3600"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={''} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'3IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Impeller Trim</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"8-11/16IN"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Motor Temp Switch</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Comments</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Vibration Sensor</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>No</option>
                                                                                                <option>Yes</option>
                                                                                                <option>TBD</option>
                                                                                            </Form.Select>
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                        <br></br>
                                                        <Table size="sm" hover bordered>
                                                            <tbody>
                                                                <tr>
                                                                    <th colSpan={1}>Discharge Head Material</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Ductile Iron</option>
                                                                                    <option>316SS Fabbed</option>
                                                                                    <option>Steel Fabbed</option>
                                                                                    <option>N/A</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Shaft Material</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1}>Check Valve Design</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Silent Slam</option>
                                                                                    <option>Dual Disc</option>
                                                                                    <option>Flanged Globe</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Discharge Head Shaft Seal Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1}>Individual Isolation Valve Design</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>EBV</option>
                                                                                    <option>Grooved Butterfly</option>
                                                                                    <option>Lugged Butterfly</option>
                                                                                    <option>Double Lug</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th ></th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={""} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Water Feature Pump - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Transfer Pump - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Recirculation Pump - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                            </Accordion>
                                            <br></br>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Pump Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6" >
                                        <Accordion.Header>
                                            <div className="accordionDiv">
                                                <div className="accordionTitle">
                                                    Level Controls - None
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                />
                                            </div>
                                        </Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>
                                            <div className="accordionDiv">
                                                <div className="accordionTitle">
                                                    Filtration
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""
                                                    defaultChecked
                                                />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Inlet Filtration - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><div className="accordionDiv">
                                                        <div className="accordionTitle">
                                                            Discharge Filter
                                                        </div>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label=""
                                                            defaultChecked
                                                        />
                                                    </div></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table size="sm" hover bordered>
                                                            <tbody>
                                                                <tr>
                                                                    <th colSpan={1}>Filter Quantity</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"1"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Manufacturer</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>VAF</option>
                                                                                    <option>Amiad</option>
                                                                                    <option>ISI</option>
                                                                                    <option>Lakos</option>
                                                                                    <option>N/A</option>
                                                                                    <option>Other - See Comments</option>
                                                                                    <option>Sure-Flo</option>
                                                                                    <option>Tekleen</option>
                                                                                    <option>Watertronics</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1}>Discharge Filter Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Automatic Self-Cleaning</option>
                                                                                    <option>N/A</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th colSpan={1}>Model</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"V1000NB-8"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th >Future Filters</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"0"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Mesh Size</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"300 Micron"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th >Bypass</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"8IN"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Flush Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Automatic - Pressure Differential</option>
                                                                                    <option>Automatic - Timer</option>
                                                                                    <option>Manual</option>
                                                                                    <option>N/A</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                WYE Strainer - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className="accordionDiv">
                                                            <div className="accordionTitle">
                                                                Reverse Osmosis System - None
                                                            </div>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""

                                                            />
                                                        </div>
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                            </Accordion>
                                            <br></br>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Filtration Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>
                                            <div className="accordionDiv">
                                                <div className="accordionTitle">
                                                    Fertigation - None
                                                </div>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label=""

                                                />
                                            </div>
                                        </Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9" >
                                        <Accordion.Header>Unregulated Power Supply - Yes, See CSO</Accordion.Header>
                                        {/* <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <thead className="TableHead">
                                                    <tr>
                                                        <th>Size</th>
                                                        <th>5 kVa</th>
                                                    </tr>
                                                    <tr >
                                                        <th className="CenterColumn" colSpan={2} >Breakers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Qty</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"2"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Voltage</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"120"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Amps</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"15"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body> */}
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10" >
                                        <Accordion.Header>Regulated Power Supply - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11" >
                                        <Accordion.Header>Power Conditioning - None</Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Electrical Specification</Accordion.Header>
                            <Accordion.Body>
                                <Table size="sm" hover bordered>
                                    <tbody>
                                        <tr>
                                            <th >Voltage</th>
                                            <td className="TableHead">
                                                460
                                            </td>
                                            <th >Phase</th>
                                            <td className="TableHead">
                                                3 Ph
                                            </td>
                                            <th >Hertz</th>
                                            <td className="TableHead">
                                                60 Hz
                                            </td>
                                            <th >Power Config</th>
                                            <td className="TableHead">
                                                WYE 3PH 4 Wire
                                            </td>
                                            <th >SCCR</th>
                                            <td className="TableHead">
                                                35 kA
                                            </td>
                                            <th >FCC Config</th>
                                            <td className="TableHead">
                                                B
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <br></br>
                                <Table size="sm" hover bordered>
                                    <thead className="TableHead">
                                        <tr>
                                            <th className="CenterColumn">Pump ID</th>
                                            <th className="CenterColumn">HP</th>
                                            <th className="CenterColumn">RPM</th>
                                            <th className="CenterColumn">GPM</th>
                                            <th className="CenterColumn">HTR</th>
                                            <th className="CenterColumn">XL</th>
                                            <th className="CenterColumn">VFD</th>
                                            <th className="CenterColumn">SS</th>
                                            <th className="CenterColumn">EBV</th>
                                            <th className="CenterColumn">Motor Temp Switch</th>
                                            <th className="CenterColumn">Pump Temp Sensor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jockey (#1)</td>
                                            <td>10</td>
                                            <td>3600</td>
                                            <td>100</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>1</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#2)</td>
                                            <td>50</td>
                                            <td>3600</td>
                                            <td>500</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>2</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#3)</td>
                                            <td>50</td>
                                            <td>3600</td>
                                            <td>500</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>2</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Mechanical Reference</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Inlet Pressure</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Inlet Pressure Transducer</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Discharge Flow</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1100"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}>Flow Meter Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Data Industrial"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Discharge Pressure</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"110"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Discharge Size</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"8IN"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Options</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Control System</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Sigma w/ Touchscreen"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Disconnect Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Non-Fused"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Display</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'7" Color'} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}>Panel Location</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"On Skid"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Surge Protection</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Premium"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Dead Front</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Opto Coupler</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Panel Lighting</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Interior Only"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Opto Isolator</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Station Heating</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Lighted HOAs</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Panel Leg Height</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Not Set"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >ETMs on Panel</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Window Kit</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Power Phase Monitor Protec</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >VFD Viewing Window</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Individual Motor Disconnects</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Enclosure Cooling</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" >
                                                                        <option>Air Conditioner - Indoor Right</option>
                                                                        <option>Fan and Filter</option>
                                                                        <option>Heat Exchanger - Left</option>
                                                                        <option>Heat Exchanger - Right</option>
                                                                        <option>Air Conditioner - Indoor Left</option>
                                                                        <option>Air Conditioner - Outdoor Right</option>
                                                                        <option>Air Conditioner - Outdoor Left</option>
                                                                        <option>None</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Accessory Junction Box</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes - See Comments / CSO"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Chemical Treatment Relay</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Fertigation Run Relay</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Remote Disable Relay</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Sales Quote Estimates</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th >Enclosure Size</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'60"'} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >FLA</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"149"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Option Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={'J Box to be mounted outside for 3 terminal connections to power remote satellites for the irrigation system. J Box wiring will be wired to the 5 KVA distribution panel Set the control panel 42” inside enclosure for protection. The power for the bathroom will need to be located on the power side of the disconnect. We will need a 30 amp fusible 3 phase disconnect box to be mounted on the outside of the pump station that will supply power to the bathrooms on the course. 460-1PZ supply.'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Station Enclosure</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Station Enclosure Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>CSM</option>
                                                                        <option>WM5000</option>
                                                                        <option>WM7000</option>
                                                                        <option>WM9000</option>
                                                                        <option>Other</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Enclosure Paint Color</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Same as Station</option>
                                                                        <option>WT Sandstone</option>
                                                                        <option>WT Green</option>
                                                                        <option>WT Purple</option>
                                                                        <option>WT Blue</option>
                                                                        <option>N/A</option>
                                                                        <option>Other (See Comments)</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Acoustic Insulation</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Thermal Insulation</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Exterior Lighting</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>70W LED External Dusk to Dawn Light</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Interior Lighting</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Yes</option>
                                                                        <option>No</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Snow or Wind Rating</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Cooling Fan(s)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Special Enclosure Height Requirements</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>No</option>
                                                                        <option>Yes</option>
                                                                        <option>TBD</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >External Power Connection</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Fused Disconnect Box</option>
                                                                        <option>Junction Box</option>
                                                                        <option>Pull Box</option>
                                                                        <option>N/A</option>                                                                </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Station Enclosure Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" >
                                        <Accordion.Header>Level Controls - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" >
                                        <Accordion.Header>Fertigation - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5" >
                                        <Accordion.Header>Unregulated Power Supply</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <thead className="TableHead">
                                                    <tr>
                                                        <th>Size</th>
                                                        <th>5 kVa</th>
                                                    </tr>
                                                    <tr >
                                                        <th className="CenterColumn" colSpan={2} >Breakers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Qty</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"2"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Voltage</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"120"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Amps</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"15"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6" >
                                        <Accordion.Header>Regulated Power Supply - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7" >
                                        <Accordion.Header>Power Conditioning - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8" >
                                        <Accordion.Header>Telemetry</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th>Type</th>
                                                        <td>
                                                            WV Cloud
                                                        </td>
                                                        <th>Provider</th>
                                                        <td>
                                                            4G Verizon
                                                        </td>
                                                        <th>Software and Version</th>
                                                        <td>
                                                            5 Year Standard
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th>Latitude</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={`46 31'56.91" N`} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Longitude</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={`87 25'24.27" W`} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>Filtration</Accordion.Header>
                                        <Accordion.Body>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Inlet Filtration - None</Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Discharge Filter</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table size="sm" hover bordered>
                                                            <tbody>
                                                                <tr>
                                                                    <th colSpan={1}>Filter Quantity</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"1"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Manufacturer</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" disabled>
                                                                                    <option>VAF</option>
                                                                                    <option>Amiad</option>
                                                                                    <option>ISI</option>
                                                                                    <option>Lakos</option>
                                                                                    <option>N/A</option>
                                                                                    <option>Other - See Comments</option>
                                                                                    <option>Sure-Flo</option>
                                                                                    <option>Tekleen</option>
                                                                                    <option>Watertronics</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1}>Discharge Filter Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" disabled>
                                                                                    <option>Automatic Self-Cleaning</option>
                                                                                    <option>N/A</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th colSpan={1}>Model</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"V1000NB-8"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th >Future Filters</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"0"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Mesh Size</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"300 Micron"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th >Bypass</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"8IN"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Filter Flush Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" disabled>
                                                                                    <option>Automatic - Pressure Differential</option>
                                                                                    <option>Automatic - Timer</option>
                                                                                    <option>Manual</option>
                                                                                    <option>N/A</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>WYE Strainer - None</Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Reverse Osmosis System - None</Accordion.Header>
                                                </Accordion.Item>
                                            </Accordion>
                                            <br></br>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Filtration Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={''} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header>Sequence of Operations</Accordion.Header>
                                        <Accordion.Body>
                                            <h6>ALARMS: Low pressure, high pressure, low wet well level, phase/voltage and VFD fault (when applicable) are standard alarms. Please list additional alarms below:</h6>
                                            <br></br>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th colSpan={1}>Alarm 1</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Alarm 2</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Alarm 3</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}>Alarm 4</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Jockey Sequence</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"3"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}></th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Table size="sm" hover bordered>
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Sequence of Operations Comments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4} className="FormTDComments ">
                                                            <Form className="FormTextArea">
                                                                <Form.Group className="mb-3 TableForm TableFormComments">
                                                                    <Form.Control as="textarea" rows={3} defaultValue={'Standard (pressure drop start / flow drop retire)'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Additional Items</Accordion.Header>
                            <Accordion.Body>
                                <Table size="sm" hover bordered>
                                    <thead>
                                        <tr className="TableHead">
                                            <th colSpan={4} className="CenterColumn" >Additional Items Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={4} className="FormTDComments ">
                                                <Form className="FormTextArea">
                                                    <Form.Group className="mb-3 TableForm TableFormComments">
                                                        <Form.Control as="textarea" rows={3} defaultValue={'Neptune black floats for 10" suction line (qty. 3) - ship loose'} />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Ship Early - None</Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Release Form</Accordion.Header>
                            <Accordion.Body>
                                <Table size="sm" hover bordered >
                                    <thead>
                                        <tr className="TableHead">
                                            <th colSpan={4} className="CenterColumn" >Release For Scheduling</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th >Job Name</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Heritage Golf Course"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Job Number</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"2020676"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Released By</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Chandler Blaschka"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Release Date</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"1/6/2021"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Model Number</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"HCLVE-1-50x2/10VMSV-460-3-1100-110"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th></th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="CenterColumn FormTD ">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                defaultChecked
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Full Release"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Full Release with Qualified Exceptions"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="FCC Configuration Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} ></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="RTU Type Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} ></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Wet Well Depth Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Z-Pipe Details Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Intake / Adaptor Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="WaterVision-Cloud Customer / Site Info Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <br></br>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} className="CenterColumn FormTD ">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Engineering Release Only"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Long Lead Release Only"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="CSO Missing"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Other - Described Below"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm" >
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Other - Described Below"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <td colSpan={2} className="FormTD">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <div className="FormRadio">
                                                            <Form.Check
                                                                disabled
                                                                type="checkbox"
                                                                id="inline-radio"
                                                                label="Long Lead Items Can Be Ordered Without Risk of Change"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <td colSpan={2} ></td>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}>Manager Authorizing Early Release</th>
                                            <td colSpan={2} className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={""} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <br></br>
                                <Table size="sm" hover bordered>
                                    <tbody>
                                        <tr>
                                            <th >Engineer That Assisted On Job Proposal</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={""} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Lead Time</th>
                                            <td>Standard Lead Time</td>
                                            <th >Target Delivery Date</th>
                                            <td >3/8/2021</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Change Orders (3)</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Change Order #1</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ChangeOrder" >
                                                <div className="COHeader">
                                                    <div className="COColumnLeft" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Name:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Heritage Golf Course"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020676"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number Suffix (optional):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Date of Change Order:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"01/13/2021"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="COColumnRight" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Salesperson:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Eric Pifer"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Bob Surdyk</option>
                                                                        <option >Andrew Casper</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Sandy McElhinny</option>
                                                                        <option >Andrew Mast</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Does the Change impact CSM?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Application Engineer:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Chandler Blaschka</option>
                                                                        <option >Drew Palmer</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Is the assigned applications engineer filling out this form?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="COBody">
                                                    <div className="Reason" >
                                                        <h6>Reason for the change:</h6>
                                                        <Form className="COForm">
                                                            <Form.Group className="mb-3 COSelectForm">
                                                                <Form.Select aria-label="Default select example" disabled>
                                                                    <option>Issues identified at Release Review Meeting</option>
                                                                    <option >Andrew Casper</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="Changes" >
                                                        <h6>Describe change(s) here:</h6>
                                                        <Form>
                                                            <Form.Group className="mb-3 COChanges">
                                                                <Form.Control as="textarea" rows={10} defaultValue={'1. Add Dusk to Dawn Light (Charged to Customer) \n2. Gabe to Confirm \n    -460-1PZ 30A supply to bathroom\n    -Satellite Communication - Connection Requirement Details\n3. Control Panel will be 60" - reduce base size by 1 foot if applicable\n4. 12BF HC Pumps - Per Chip\n5. Drope Pipes are TBD\n   -1" Fill Port on Intake Drop Pipe\n6. Neptune Floats will be black'} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>Are there open issues on this Change Order that require follow up change order(s)?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>List issue(s):</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Power Supply to Bathroom"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Satellite Communication - Connection Requirement Details"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Drop Pipe Details"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="COCosts">
                                                    <div className="COCostsLeft">
                                                        <h6>Do change(s) cost or credit Watertronics money?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Cost"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Will customer be charged or credited?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Charge"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Not Applicable"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Is the customer billing to the same job number?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="COCostsRight">
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Engineering Labor ($165/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"1.5"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Manufacturing Labor ($90/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Materials Variance: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"250"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm LastCostItem" >
                                                            <h6>Scrap: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <h6>Total Cost: $500.00</h6>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Charge to Customer: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"500"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="Notes" >
                                                    <h6>Notes (Optional):</h6>
                                                    <Form>
                                                        <Form.Group className="mb-3 CONotes">
                                                            <Form.Control as="textarea" rows={10} defaultValue={''} disabled />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Change Order #2</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ChangeOrder" >
                                                <div className="COHeader">
                                                    <div className="COColumnLeft" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Name:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Heritage Golf Course"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020676"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number Suffix (optional):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Date of Change Order:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"01/15/2021"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="COColumnRight" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Salesperson:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Eric Pifer"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Bob Surdyk</option>
                                                                        <option >Andrew Casper</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Sandy McElhinny</option>
                                                                        <option >Andrew Mast</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Does the Change impact CSM?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Application Engineer:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Chandler Blaschka</option>
                                                                        <option >Drew Palmer</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Is the assigned applications engineer filling out this form?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="COBody">
                                                    <div className="Reason" >
                                                        <h6>Reason for the change:</h6>
                                                        <Form className="COForm">
                                                            <Form.Group className="mb-3 COSelectForm">
                                                                <Form.Select aria-label="Default select example" disabled>
                                                                    <option>Resolution of issue(s) presented in previous change order</option>
                                                                    <option >Issues identified at Release Review Meeting</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="Changes" >
                                                        <h6>Describe change(s) here:</h6>
                                                        <Form>
                                                            <Form.Group className="mb-3 COChanges">
                                                                <Form.Control as="textarea" rows={10} defaultValue={'1. Gabe to Confirm \n    -460-1PZ 30A supply to bathroom - Confirmed\n    -Satellite Communication - Connection Requirement Details - 120V Power, Maximum 10 Satellites at .75A each.\n3. Control Panel will be 60" - Base size must be reduced by 1 foot\n4. Drope Pipes - Still TBD\n   -1" Fill Port on Intake Drop Pipe'} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>Are there open issues on this Change Order that require follow up change order(s)?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>List issue(s):</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Drop Pipe Details"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="COCosts">
                                                    <div className="COCostsLeft">
                                                        <h6>Do change(s) cost or credit Watertronics money?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Cost"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Will customer be charged or credited?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Charge"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Not Applicable"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        {/* <h6>Is the customer billing to the same job number?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form> */}
                                                    </div>
                                                    <div className="COCostsRight">
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Engineering Labor ($165/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"1.51"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Manufacturing Labor ($90/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Materials Variance: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm LastCostItem" >
                                                            <h6>Scrap: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <h6>Total Cost: $250.00</h6>
                                                        {/* <div className="TitleAndTextForm" >
                                                            <h6>Charge to Customer: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"0"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="Notes" >
                                                    <h6>Notes (Optional):</h6>
                                                    <Form>
                                                        <Form.Group className="mb-3 CONotes">
                                                            <Form.Control as="textarea" rows={10} defaultValue={''} disabled />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Change Order #3</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ChangeOrder" >
                                                <div className="COHeader">
                                                    <div className="COColumnLeft" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Name:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Heritage Golf Course"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020676"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number Suffix (optional):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Date of Change Order:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"03/26/2021"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="COColumnRight" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Salesperson:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Eric Pifer"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Bob Surdyk</option>
                                                                        <option >Andrew Casper</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Sandy McElhinny</option>
                                                                        <option >Andrew Mast</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Does the Change impact CSM?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Application Engineer:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Chandler Blaschka</option>
                                                                        <option >Drew Palmer</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Is the assigned applications engineer filling out this form?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            disabled
                                                                            defaultChecked
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Who is filling out this form?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Eric Pifer"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="COBody">
                                                    <div className="Reason" >
                                                        <h6>Reason for the change:</h6>
                                                        <Form className="COForm">
                                                            <Form.Group className="mb-3 COSelectForm">
                                                                <Form.Select aria-label="Default select example" disabled>
                                                                    <option>Resolution of issue(s) presented in previous change order</option>
                                                                    <option >Issues identified at Release Review Meeting</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="Changes" >
                                                        <h6>Describe change(s) here:</h6>
                                                        <Form>
                                                            <Form.Group className="mb-3 COChanges">
                                                                <Form.Control as="textarea" rows={10} defaultValue={'1. Drope Pipe CSO drawing has been approved\n   The drawing is in the CSO Folder'} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>Are there open issues on this Change Order that require follow up change order(s)?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    {/* <div>
                                                        <h6>List issue(s):</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Drop Pipe Details"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                    </div> */}
                                                </div>
                                                <div className="COCosts">
                                                    <div className="COCostsLeft">
                                                        <h6>Do change(s) cost or credit Watertronics money?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Cost"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Will customer be charged or credited?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Charge"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        defaultChecked
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Not Applicable"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        {/* <h6>Is the customer billing to the same job number?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        disabled
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form> */}
                                                    </div>
                                                    <div className="COCostsRight">
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Engineering Labor ($165/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"1.5"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Manufacturing Labor ($90/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Materials Variance: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm LastCostItem" >
                                                            <h6>Scrap: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <h6>Total Cost: $250.00</h6>
                                                        {/* <div className="TitleAndTextForm" >
                                                            <h6>Charge to Customer: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"0"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="Notes" >
                                                    <h6>Notes (Optional):</h6>
                                                    <Form>
                                                        <Form.Group className="mb-3 CONotes">
                                                            <Form.Control as="textarea" rows={10} defaultValue={''} disabled />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>New Change Order</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ChangeOrder" >
                                                <div className="COHeader">
                                                    <div className="COColumnLeft" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Name:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Heritage Golf Course"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020676"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number Suffix (optional):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Date of Change Order:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Today's Date"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="COColumnRight" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Salesperson:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Eric Pifer"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Bob Surdyk</option>
                                                                        <option >Andrew Casper</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Sandy McElhinny</option>
                                                                        <option >Andrew Mast</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Does the Change impact CSM?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check

                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Application Engineer:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Chandler Blaschka</option>
                                                                        <option >Drew Palmer</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="CORadioForm" >
                                                            <h6>Is the assigned applications engineer filling out this form?</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="Yes"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <div className="FormRadio">
                                                                        <Form.Check
                                                                            type="radio"
                                                                            id="inline-radio"
                                                                            label="No"
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="COBody">
                                                    <div className="Reason" >
                                                        <h6>Reason for the change:</h6>
                                                        <Form className="COForm">
                                                            <Form.Group className="mb-3 COSelectForm">
                                                                <Form.Select aria-label="Default select example" >
                                                                    <option>Issues identified at Release Review Meeting</option>
                                                                    <option >Resolution of issue(s) presented in previous change order</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="Changes" >
                                                        <h6>Describe change(s) here:</h6>
                                                        <Form>
                                                            <Form.Group className="mb-3 COChanges">
                                                                <Form.Control as="textarea" rows={10} defaultValue={''} />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>Are there open issues on this Change Order that require follow up change order(s)?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div>
                                                        <h6>List issue(s):</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={""} />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="COCosts">
                                                    <div className="COCostsLeft">
                                                        <h6>Do change(s) cost or credit Watertronics money?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Cost"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Will customer be charged or credited?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Charge"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Credit"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Not Applicable"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                        <h6>Is the customer billing to the same job number?</h6>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="Yes"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3 TableForm">
                                                                <div className="FormRadio">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="inline-radio"
                                                                        label="No"
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="COCostsRight">
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Engineering Labor ($165/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Manufacturing Labor ($90/hr). Hours:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Materials Variance: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm LastCostItem" >
                                                            <h6>Materials Variance: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <h6>Total Cost:</h6>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Charge to Customer: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={""} />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="Notes" >
                                                    <h6>Notes (Optional):</h6>
                                                    <Form>
                                                        <Form.Group className="mb-3 CONotes">
                                                            <Form.Control as="textarea" rows={10} defaultValue={''} />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                                <div className="COSubmitButton">
                                                    <Button>Submit Change Order</Button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Form History</Accordion.Header>
                            <Accordion.Body>
                                <p className="orangeInput">01/06/2021 : Job Released with status Full Release</p>
                                <p className="orangeInput">01/13/2021 : Change Order #1 Submitted with 3 items requiring follow up</p>
                                <p className="orangeInput">01/15/2021 : Change Order #2 Submitted with 1 item requiring follow up</p>
                                <p className="orangeInput">03/26/2021 : Change Order #3 Submitted with 0 items requiring follow up</p>
                                <p className="firstInput">09/06/2022 : Power Configuration set to WYE 3PH 4 Wire</p>
                                <p className="FirstInput">09/06/2022 : Site Elevation (Ft) set to 891</p>
                                <p className="redWarning">09/06/2022 : Chandler Blaschka changed Flow Sensor from Mag Meter (GrowSmart) to Data Industrial</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div >
    );
}

export default Heritage;