import React from "react";
import 'production-tracker/src/App.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"
import { BsEyeFill } from "react-icons/bs";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import SideNav from "./SideNav"
import Accordion from 'react-bootstrap/Accordion';
import pdf from "./VanderbiltProposal.pdf"
import cso from "./VanderbiltCSO.pdf"
import mechSpec from "./VanderbiltMechSpec.pdf"
import elecSpec from "./VanderbiltElecSpec.pdf"
import fullSpec from "./VanderbiltFullSpec.pdf"


function Vanderbilt() {
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
                                <td className="CenterColumn">2020583</td>
                                <td>Vanderbilt GC</td>
                                <td>FL</td>
                                <td>VTV-1-75x4/5ST-460-3-3200-110</td>
                                <td>Greg Salisbury</td>
                                <td>Chandler Blaschka</td>
                                <td>10/30/2020</td>
                                <td>1/21/2021</td>
                                <td>Full Release</td>
                                <td className="CenterColumn"><Link to={`/2020583/OrderSheet`} className="EditLink" ><BsEyeFill /></Link></td>
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
                                                    <Form.Control type="text" defaultValue={"Vertical Turbine"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={1}>Configuration</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Prime System</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
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
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
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
                                                    <Form.Control type="text" defaultValue={"3200"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Station Color</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"WT Green"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Electrical Enclosure Location</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"Off Skid"} disabled />
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
                                                    <Form.Control type="text" defaultValue={"N/A"} disabled />
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
                                                        <option>Inside - Weather Resistant Building</option>
                                                        <option>CSM Enclosure - Outside</option>
                                                        <option >WM5000 Enclosure - Outside</option>
                                                        <option >WM7000 Enclosure - Outside</option>
                                                        <option >WM9000 Enclosure - Outside</option>
                                                        <option>Outside</option>
                                                        <option>Outside - Under Canopy</option>
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
                                                    <Form.Control type="text" defaultValue={"5"} />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Regulatory Compliance</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"UL Listed - Packaged Pumping Station"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Wet Well Depth</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"See CSO"} disabled />
                                                </Form.Group>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Flow Meter Location</th>
                                        <td colSpan={2} className="FormTD">
                                            <Form className="GeneralForm">
                                                <Form.Group className="mb-3 TableForm">
                                                    <Form.Control type="text" defaultValue={"Off Skid"} disabled />
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
                                                                            <Form.Control type="text" defaultValue={"11052"} disabled />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th colSpan={1}>Company Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Pro Pump & Controls"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 1</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"610 Old Mount Eden Rd"} />
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
                                                                            <Form.Control type="text" defaultValue={"Shelbyville"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >State</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Kentucky"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Zip</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"40065"} />
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
                                                                            <Form.Control type="text" defaultValue={"Scott"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Last Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Hoppe"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Mobile Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"(678) 662-7222"} />
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
                                                                            <Form.Control type="text" defaultValue={"shoppe@propumpservice.com"} />
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
                                                                            <Form.Control type="text" defaultValue={"$169,791.00"} />
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
                                                                            <Form.Control type="text" defaultValue={"25% Deposit"} />
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
                                                                            <Form.Control type="text" defaultValue={"Vanderbilt Country Club"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address 1</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"8250 Danbury Blvd"} />
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
                                                                            <Form.Control type="text" defaultValue={"Naples"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >State</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Florida"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Zip</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"34120"} />
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
                                                                            <Form.Control type="text" defaultValue={"Scott"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Last Name</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"Hoppe"} />
                                                                        </Form.Group>
                                                                    </Form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th >Mobile Number</th>
                                                                <td colSpan={2} className="FormTD">
                                                                    <Form className="GeneralForm">
                                                                        <Form.Group className="mb-3 TableForm">
                                                                            <Form.Control type="text" defaultValue={"(678) 662-7222"} />
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
                                                                            <Form.Control type="text" defaultValue={"shoppe@propumpservice.com"} />
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
                                                                                <option value="1">None</option>
                                                                                <option value="2">Commission / Custom Training</option>
                                                                                <option value="2">Supervision Only</option>
                                                                                <option>Full Installation</option>
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
                                                                    <Form.Control type="text" defaultValue={"$169,791.00"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"$3,300.00"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"$6,404.00"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Metro PSI - Commission"} />
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
                                                                    <Form.Control type="text" defaultValue={"$160,087.00"} disabled />
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
                                                                        <option>Formed Steel 8-3/8"</option>
                                                                        <option>Custom</option>
                                                                        <option>Stainless Steel</option>
                                                                        <option>Aluminum</option>
                                                                        <option>None</option>
                                                                        <option>Formed Steel 6-3/8"</option>
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
                                                                    <Form.Control type="text" defaultValue={"8"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"10"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Pipe Coating</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"FBE Internal - Paint External"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Station Isolation Butterfly Valve Style</th>
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
                                                                        <option>Internal Only - FBE</option>
                                                                        <option>Exterior Only - Specify</option>
                                                                        <option>Internal Only - FBE w/ SS Column</option>
                                                                        <option>Both Internal and External - FBE</option>
                                                                        <option>Both Internal and External - FBE w/ SS Column</option>
                                                                        <option>N/A</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Station Butterfly Valve Operator</th>
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
                                                                    <Form.Control type="text" defaultValue={"Mag Meter (Growsmart)"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Column Material of Construction - VT</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Mild Steel</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Injection Taps For Each Discharge Zone</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'3-3/4"'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Column Material of Construction - ST</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>304 SS</option>
                                                                        <option>Mild Steel</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Pressure Relief Valve (PRV) Size (in)</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"6"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th >Distance From Bottom of Wet Well to Sub Motor</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'6 IN'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
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
                                                    </tr>
                                                    <tr>
                                                        <th >Distance From Bottom of Wet Well to VT Basket</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'12 IN'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >System Relief Piped To</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Wet Well"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
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
                                                        <th></th>
                                                        <td></td>
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
                                                                    <Form.Control as="textarea" rows={3} defaultValue={`2" TOL on Discharge Spool w/Plug\nPM Pump Column is 304SS`} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Station Enclosure - None</Accordion.Header>
                                        {/* <Accordion.Body>
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
                                                        <th >Roof Hatch</th>
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
                                        </Accordion.Body> */}
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Drop Pipes - None</Accordion.Header>
                                        {/* <Accordion.Body>
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
                                        </Accordion.Body> */}
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Pumps</Accordion.Header>
                                        <Accordion.Body>
                                            <Accordion alwaysOpen>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Sustain Pump</Accordion.Header>
                                                    <Accordion.Body>
                                                        {/* <Table size="sm" hover bordered>
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
                                                        </Table> */}
                                                        <Table size="sm" hover bordered>
                                                            <tbody>
                                                                <tr>
                                                                    <th colSpan={1}>Motor Elevation Derate</th>
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
                                                                                <Form.Control type="text" defaultValue={"46-09-4009"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"48-31-0504"} />
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
                                                                                <Form.Control type="text" defaultValue={"Franklin"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"65GS50"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"2343278802G"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} >Pump Type</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"Sub"} disabled />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th >Horsepower</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"5"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"64%"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th className="EngineeringEdit" >Efficiency</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"84%"} />
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
                                                                                    <option>Submersible</option>
                                                                                    <option>ODP (Open Drip Proof)</option>
                                                                                    <option>OPSB (Open Slotted Band)</option>
                                                                                    <option>TEFC (Totally Enclosed Fan Cooled)</option>
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
                                                                                <Form.Control type="text" defaultValue={"45GPM"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th className="EngineeringEdit" >Frame</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={'NEMA-4'} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={'195.375"'} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th className="EngineeringEdit" >Motor FLA</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"8"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"16"} />
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
                                                                                <Form.Control type="text" defaultValue={""} />
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
                                                                    <th colSpan={1} >Additional Check Valve Above Skid? (Submersible Only)</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"Yes"} disabled />
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
                                                                <tr>
                                                                    <th colSpan={1} >Comments</th>
                                                                    <td colSpan={1} className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"Pump Column is 304SS"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <th></th>
                                                                    <td colSpan={1} className="FormTD">

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Main Pump(s)</Accordion.Header>
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
                                                                <Accordion.Header>Main Pump (#1)</Accordion.Header>
                                                                <Accordion.Body >
                                                                    {/* <Table size="sm" hover bordered>
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
                                                        </Table> */}
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
                                                                                            <Form.Control type="text" defaultValue={"NP-11-2831"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Integrity"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Nidec"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12ILL"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HO75V2SLG / DT96"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"VT"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"75"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"85.2%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"95%"} />
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
                                                                                                <option>WP1</option>
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
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
                                                                                            <Form.Control type="text" defaultValue={"800GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'365TP'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'189.375"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"87"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"4"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'Self-Release Coupling'} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1800"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'1-1/4"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'6IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
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
                                                                                            <Form.Control type="text" defaultValue={""} />
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
                                                                    {/* <Table size="sm" hover bordered>
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
                                                        </Table> */}
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
                                                                                            <Form.Control type="text" defaultValue={"NP-11-2831"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Integrity"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Nidec"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12ILL"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HO75V2SLG / DT96"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"VT"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"75"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"85.2%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"95%"} />
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
                                                                                                <option>WP1</option>
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
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
                                                                                            <Form.Control type="text" defaultValue={"800GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'365TP'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'189.375"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"87"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"4"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'Self-Release Coupling'} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1800"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'1-1/4"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'6IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
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
                                                                                            <Form.Control type="text" defaultValue={""} />
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
                                                                    {/* <Table size="sm" hover bordered>
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
                                                        </Table> */}
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
                                                                                            <Form.Control type="text" defaultValue={"NP-11-2831"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Integrity"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Nidec"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12ILL"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HO75V2SLG / DT96"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"VT"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"75"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"85.2%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"95%"} />
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
                                                                                                <option>WP1</option>
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
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
                                                                                            <Form.Control type="text" defaultValue={"800GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'365TP'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'189.375"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"87"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"4"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'Self-Release Coupling'} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1800"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'1-1/4"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'6IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
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
                                                                                            <Form.Control type="text" defaultValue={""} />
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
                                                            <Accordion.Item eventKey="3" >
                                                                <Accordion.Header>Main Pump (#4)</Accordion.Header>
                                                                <Accordion.Body >
                                                                    {/* <Table size="sm" hover bordered>
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
                                                        </Table> */}
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
                                                                                            <Form.Control type="text" defaultValue={"NP-11-2831"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit">Watertronics Part Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={""} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Integrity"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"Nidec"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"12ILL"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Manufacturer Model Number</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"HO75V2SLG / DT96"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} >Pump Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"VT"} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Horsepower</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"75"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"85.2%"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Efficiency</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"95%"} />
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
                                                                                                <option>WP1</option>
                                                                                                <option>OPSB (Open Slotted Band)</option>
                                                                                                <option>ODP (Open Drip Proof)</option>
                                                                                                <option>TEFC (Totally Enclosed Fan Cooled)</option>
                                                                                                <option>Submersible</option>
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
                                                                                            <Form.Control type="text" defaultValue={"800GPM"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Frame</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'365TP'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">TPL</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'189.375"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor FLA</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"87"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Stages</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"4"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th>Coupling Type</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'Self-Release Coupling'} disabled />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">RPM</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={"1800"} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th className="EngineeringEdit" >Motor Coupling Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'1-1/4"'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colSpan={1} className="EngineeringEdit">Discharge Size</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm" >
                                                                                        <Form.Group className="mb-3 TableForm">
                                                                                            <Form.Control type="text" defaultValue={'6IN'} />
                                                                                        </Form.Group>
                                                                                    </Form>
                                                                                </td>
                                                                                <th >Winding Heaters</th>
                                                                                <td colSpan={1} className="FormTD">
                                                                                    <Form className="GeneralForm">
                                                                                        <Form.Group className="mb-3 ProjectStatus">
                                                                                            <Form.Select aria-label="Default select example" >
                                                                                                <option>Yes</option>
                                                                                                <option>No</option>
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
                                                                                            <Form.Control type="text" defaultValue={""} />
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
                                                                                <Form.Control type="text" defaultValue={"416SS"} disabled />
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
                                                                                <Form.Control type="text" defaultValue={"Mechanical Seal"} disabled />
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
                                                    <Accordion.Header>Water Feature Pump - None</Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Transfer Pump - None</Accordion.Header>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Recirculation Pump - None</Accordion.Header>
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
                                                                    <Form.Control as="textarea" rows={3} defaultValue={'Pricing Matrix did not select pumps'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6" >
                                        <Accordion.Header>Level Controls</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th >Level Sensing Method</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" >
                                                                        <option>Level Float (normally closed) & Transducer</option>
                                                                        <option>Level Transducer Only</option>
                                                                        <option>Level Float Only (normally closed)</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Number of Set Points</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Sensor Location</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Wet Well"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Accordion alwaysOpen>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Pond Fill Logic (1)</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table size="sm" bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th >Fill Source</th>
                                                                    <th >Type</th>
                                                                    <th >HOA</th>
                                                                    <th className="CenterColumn">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"Pond"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Contact</option>
                                                                                    <option>Contactor</option>
                                                                                    <option>Valve (24VAC)</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"No"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="CenterColumn"><BsFillPlusCircleFill /><BsTrashFill /></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <br></br>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Level Control Comments</th>
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
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Filtration - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Fertigation - None</Accordion.Header>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9" >
                                        <Accordion.Header>Unregulated Power Supply - None</Accordion.Header>
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
                                                N/A
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
                                            <td>Sustain</td>
                                            <td>5</td>
                                            <td>3600</td>
                                            <td>45</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>None</td>
                                            <td>No</td>
                                            <td>No</td>
                                            <td>No</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#1)</td>
                                            <td>75</td>
                                            <td>1800</td>
                                            <td>800</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>1</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#2)</td>
                                            <td>75</td>
                                            <td>1800</td>
                                            <td>800</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>1</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#3)</td>
                                            <td>75</td>
                                            <td>1800</td>
                                            <td>800</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>1</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Main (#4)</td>
                                            <td>75</td>
                                            <td>1800</td>
                                            <td>800</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>1</td>
                                            <td>No</td>
                                            <td>Yes</td>
                                            <td>No</td>
                                            <td>No</td>
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
                                                                    <Form.Control type="text" defaultValue={"3200"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}>Flow Meter Type</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Mag Meter (Growsmart)"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"10IN"} />
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
                                                                    <Form.Control type="text" defaultValue={"Fused"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th colSpan={1}>Display</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={'Schneider 12"'} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th colSpan={1}>Panel Location</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Off Skid - See CSO"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"6IN - See CSO"} />
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
                                                        <th >Power Phase Monitor Protection</th>
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
                                                                        <option>Heat Exchanger - Left</option>
                                                                        <option>Air Conditioner - Indoor Right</option>
                                                                        <option>Fan and Filter</option>
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
                                                                    <Form.Control type="text" defaultValue={"No"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={'72"'} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >FLA</th>
                                                        <td colSpan={1} className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"397"} disabled />
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
                                                                    <Form.Control as="textarea" rows={3} defaultValue={'Power Phase Monitor Protection \nRemote Disable Relay \nChoice Card - Temp Input (1 Internal, 1 external)\nFertigation Run Relay\nDoor Switch for Rain Sensor\nChemical Treatment Relay'} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Station Enclosure - None</Accordion.Header>
                                        {/* <Accordion.Body>
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
                                                        <th >Roof Hatch</th>
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
                                        </Accordion.Body> */}
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" >
                                        <Accordion.Header>Level Controls</Accordion.Header>
                                        <Accordion.Body>
                                            <Table size="sm" hover bordered>
                                                <tbody>
                                                    <tr>
                                                        <th >Level Sensing Method</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm" >
                                                                <Form.Group className="mb-3 ProjectStatus">
                                                                    <Form.Select aria-label="Default select example" >
                                                                        <option>Level Float (normally closed) & Transducer</option>
                                                                        <option>Level Transducer Only</option>
                                                                        <option>Level Float Only (normally closed)</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Number of Set Points</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"1"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th >Sensor Location</th>
                                                        <td className="FormTD">
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={"Wet Well"} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Accordion alwaysOpen>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Pond Fill Logic (1)</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table size="sm" bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th >Fill Source</th>
                                                                    <th >Type</th>
                                                                    <th >HOA</th>
                                                                    <th className="CenterColumn">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"Pond"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm" >
                                                                            <Form.Group className="mb-3 ProjectStatus">
                                                                                <Form.Select aria-label="Default select example" >
                                                                                    <option>Contact</option>
                                                                                    <option>Contactor</option>
                                                                                    <option>Valve (24VAC)</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="FormTD">
                                                                        <Form className="GeneralForm">
                                                                            <Form.Group className="mb-3 TableForm">
                                                                                <Form.Control type="text" defaultValue={"No"} />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </td>
                                                                    <td className="CenterColumn"><BsFillPlusCircleFill /><BsTrashFill /></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <br></br>
                                            <Table size="sm" hover bordered >
                                                <thead>
                                                    <tr className="TableHead">
                                                        <th colSpan={4} className="CenterColumn" >Level Control Comments</th>
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
                                                            3 Year Standard
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
                                                                    <Form.Control type="text" defaultValue={`26 14'59.68" N`} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                        <th>Longitude</th>
                                                        <td>
                                                            <Form className="GeneralForm">
                                                                <Form.Group className="mb-3 TableForm">
                                                                    <Form.Control type="text" defaultValue={`81 41'00.20" W`} />
                                                                </Form.Group>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>Filtration - None</Accordion.Header>
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
                                                        <Form.Control as="textarea" rows={3} defaultValue={'Stainless Steel Fasteners (18-8) \nSend PDF to Greg'} />
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
                            {/* <Accordion.Body>
                                <Table size="sm" hover bordered >
                                    <thead>
                                        <tr className="TableHead">
                                            <th colSpan={4} className="CenterColumn" >Early or Direct Ship Equipment Form</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th >Job Name</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Lakewood Country Club"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Job Number</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"2020580"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Form Created By</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Chandler Blaschka"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Arrival Date</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"11/4/2020"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Ship Early</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th>Ship Direct</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Yes"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan={4} className="CenterColumn">
                                                Description of Items Shipping
                                            </th>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={`SBS-36 Inlet Box Screen for 24" SDR35 Intake Flume`} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <br></br>
                                    <thead>
                                        <tr >
                                            <th colSpan={4} className="CenterColumn" >Shipment Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th >Bill To</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Job Number"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Ship To</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"Same as Job"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body> */}
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
                                                        <Form.Control type="text" defaultValue={"Vanderbilt GC"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                            <th >Job Number</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"2020583"} disabled />
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
                                                        <Form.Control type="text" defaultValue={"11/17/2020"} disabled />
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Model Number</th>
                                            <td className="FormTD">
                                                <Form className="GeneralForm">
                                                    <Form.Group className="mb-3 TableForm">
                                                        <Form.Control type="text" defaultValue={"VTV-1-75x4/5ST-460-3-3200-110"} disabled />
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
                                            <td >1/15/2021</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Change Orders (1)</Accordion.Header>
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
                                                                    <Form.Control type="text" defaultValue={"Vanderbilt GC"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020583"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"11/18/2020"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="COColumnRight" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Salesperson:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Greg Salisbury"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option>Bob Surdyk</option>
                                                                        <option >Andy Casper</option>
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
                                                                    <option ></option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                    <div className="Changes" >
                                                        <h6>Describe change(s) here:</h6>
                                                        <Form>
                                                            <Form.Group className="mb-3 COChanges">
                                                                <Form.Control as="textarea" rows={10} defaultValue={'Add 2" TOL to discharge spool\n8" mag meter instead of 10"\nPM pump column will be 304SS\nGreg to confirm hole location for MRI recirc pump with customer\nreg to confirm existing connection height requirements for panel and load center\nGreg to confirm Rain Sensor detail for electrical\nControl panel is off skid'} disabled />
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
                                                                <Form.Control type="text" defaultValue={"Hole location for MRI recirc pump"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Existing connection height for panel and load center"} disabled />
                                                            </Form.Group>
                                                        </Form>
                                                        <Form className="ChangesForm">
                                                            <Form.Group className="mb-3 COTextForm COTextFormChanges">
                                                                <Form.Control type="text" defaultValue={"Rain Sensor details for electrical"} disabled />
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
                                                                        defaultChecked
                                                                        disabled
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
                                                        {/* <div className="TitleAndTextForm" >
                                                            <h6>Charge to Customer: $</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"500"} disabled />
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
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>New Change Order</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ChangeOrder" >
                                                <div className="COHeader">
                                                    <div className="COColumnLeft" >
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Name:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"Vanderbilt GC"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="TitleAndTextForm" >
                                                            <h6>Job Number:</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COTextForm">
                                                                    <Form.Control type="text" defaultValue={"2020583"} disabled />
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
                                                                    <Form.Control type="text" defaultValue={"Greg Salisbury"} disabled />
                                                                </Form.Group>
                                                            </Form>
                                                        </div>
                                                        <div className="ProductionEngSelect" >
                                                            <h6>Assigned Production Engineer(s):</h6>
                                                            <Form className="COForm">
                                                                <Form.Group className="mb-3 COSelectForm">
                                                                    <Form.Select aria-label="Default select example" disabled>
                                                                        <option >Bob Surdyk</option>
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
                                <p className="orangeInput">11/17/2021 : Job Released with status Full Release</p>
                                <p className="orangeInput">11/18/2020 : Change Order #1 Submitted with 3 items requiring follow up</p>
                                <p className="firstInput">09/06/2022 : Power Configuration set to WYE 3PH 4 Wire</p>
                                <p className="FirstInput">09/06/2022 : Site Elevation (Ft) set to 5</p>
                                <p className="redWarning">09/06/2022 : Chandler Blaschka changed Flow Sensor from Data Industrial to Mag Meter (GrowSmart)</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div >
    );
}

export default Vanderbilt;