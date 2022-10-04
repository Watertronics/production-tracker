import React from "react";
import 'production-tracker/src/App.css';
import SideNav from "./SideNav"
import genPay from "../images/vanderbilt-general-payment-terms.jpg"
import ship from "../images/vanderbilt-ship-price.jpg"
import rebate from "../images/vanderbilt-rebate-comm2.jpg"
import comm from "../images/vanderbilt-comm3.jpg"
import split from "../images/vanderbilt-sales-split.jpg"

function Vanderbilt() {
    return (
        <div className="JobContainer">
            <SideNav />
            <div className="OrderImages">
                <img src={genPay} className="OrderImage" />
                <img src={ship} className="OrderImage" />
                <img src={rebate} className="OrderImage" />
                <img src={comm} className="OrderImage" />
                <img src={split} className="OrderImage" />
            </div>
        </div>
    );
}

export default Vanderbilt;