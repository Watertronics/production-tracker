import React from "react";
import '../App.css';
import Nav from 'react-bootstrap/Nav'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { BsDiagram2Fill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { Link } from "react-router-dom"

function SideNav() {
    return (
        <div className="SideNav">
            <Nav className="flex-column">
                <div className="SideNavContainer">
                    <BsFillGrid1X2Fill />
                    <Nav.Link className="SideNavLinks">Dashboard</Nav.Link>
                </div>
                <div className="SideNavContainer">
                    <BsDiagram2Fill />
                    <Nav.Link className="SideNavLinks">Sales</Nav.Link>
                    <BsChevronDown />
                </div>
                <div className="SideNavContainer">
                    <BsFillBagCheckFill />
                    <Nav.Link className="SideNavLinks">Pump Table</Nav.Link>
                </div>
                <div className="SideNavContainer">
                    <BsFillBagCheckFill />
                    <Nav.Link className="SideNavLinks">CSM</Nav.Link>
                </div>
                <div className="SideNavContainer">
                    <BsBookHalf />
                    <Nav.Link className="SideNavLinks">Order Sheet</Nav.Link>
                </div>
                <div className="SideNavContainer">
                    <FaShapes />
                    <Nav.Link className="SideNavLinks">Instrument</Nav.Link>
                </div>
                <div className="SideNavContainer">
                    <BsFillGearFill />
                    <Nav.Link className="SideNavLinks"><Link to={`/production-tracker`} className="Link">Production</Link></Nav.Link>
                </div>
                {/* <div className="SideNavContainer">
                    <BsFillGearFill />
                    <Nav.Link className="SideNavLinks"><a href="https://radiant-manatee-5e2d5a.netlify.app/">Activity Log</a></Nav.Link>
                </div> */}
            </Nav>
        </div >
    );
}

export default SideNav;