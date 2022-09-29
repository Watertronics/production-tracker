import React from "react";
import '../App.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import Pagination from 'react-bootstrap/Pagination';



function JobList() {
    return (
        <div className="JobTable">
            <Form className="JobSearch">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Job Search</Form.Label>
                    <Form.Control type="email" placeholder="Enter Job #" />
                </Form.Group>
                <div className="SearchButton">
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </div>
            </Form>
            <Table size="sm" hover bordered >
                <thead>
                    <tr className="TableHead">
                        <th className="CenterColumn">Job #</th>
                        <th>Project Name</th>
                        <th>Model Number</th>
                        <th>Salesman</th>
                        <th>Status</th>
                        <th className="CenterColumn">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="CenterColumn">2020676</td>
                        <td>Heritage Golf Course</td>
                        <td>HCLVE-1-50x2/10VMSV-460-3-1100-110</td>
                        <td>Eric Pifer</td>
                        <td>Job Released</td>
                        <td className="CenterColumn"><Link to={`/2020676`} className="EditLink" ><BsFillPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td className="CenterColumn">2020583</td>
                        <td>Vanderbilt GC</td>
                        <td>VTV-1-75x4/5ST-460-3-1500-120</td>
                        <td>Greg Salisbury</td>
                        <td>Job Released</td>
                        <td className="CenterColumn"><Link to={`/2020583`} className="EditLink" ><BsFillPencilFill /></Link></td>
                    </tr>
                    <tr>
                        <td className="CenterColumn">2020580</td>
                        <td>Lakewood Country Club</td>
                        <td>VTV-1-60x3/15V/5ST-460-3-1800-120</td>
                        <td>Mike Green</td>
                        <td>Job Released</td>
                        <td className="CenterColumn" ><Link to={`/2020580`} className="EditLink" ><BsFillPencilFill /></Link></td>
                    </tr>
                    {/* <tr>
                        <td className="CenterColumn" colSpan={6}>
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </td>
                    </tr> */}
                </tbody>

            </Table>
        </div>
    );
}

export default JobList;