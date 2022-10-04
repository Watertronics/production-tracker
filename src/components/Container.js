import React from "react";
import '../App.css';
import JobList from "./JobList";
import SideNav from "./SideNav"

function Container() {
    return (
        <div className="Container">
            <SideNav />
            <JobList />
        </div>
    );
}

export default Container;