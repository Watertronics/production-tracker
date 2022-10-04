import React from "react";
import '../App.css';
import SideNav from "./SideNav"
import genPay from "../images/lakewood-general-payment-terms.jpg"
import ship from "../images/lakewood-ship-price.jpg"
import rebate from "../images/lakewood-rebate-comm2.jpg"
import comm from "../images/lakewood-comm3.jpg"
import split from "../images/lakewood-sales-split.jpg"

function Lakewood() {
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

export default Lakewood;