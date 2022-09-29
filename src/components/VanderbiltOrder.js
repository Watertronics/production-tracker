import React from "react";
import '../App.css';
import SideNav from "./SideNav"

function Vanderbilt() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="OrderImages">
                <img src={'../../vanderbilt-general-payment-terms.jpg'} className="OrderImage" />
                <img src={'../../vanderbilt-ship-price.jpg'} className="OrderImage" />
                <img src={'../../vanderbilt-rebate-comm2.jpg'} className="OrderImage" />
                <img src={'../../vanderbilt-comm3.jpg'} className="OrderImage" />
                <img src={'../../vanderbilt-sales-split.jpg'} className="OrderImage" />
            </div>
        </div>
    );
}

export default Vanderbilt;